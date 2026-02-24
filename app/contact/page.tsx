"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

export default function ContactPage() {
  const SCALE = 3;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [tool, setTool] = useState<"pencil" | "eraser">("pencil");
  const [penColor, setPenColor] = useState("#FA961E");
  const [confirmation, setConfirmation] = useState<{ text: string; color: string } | null>(null);

  const basinURL = "https://usebasin.com/f/93e585e24fbe";
  const driveScriptURL =
    "https://script.google.com/macros/s/AKfycbxNXKUy0nUwKkazUrB0WwnPq4IkZXkOnhvT5UdjWbNoOWrSpg8oqiiuDVTUVJhh2OtosQ/exec";

  const sanitized = subject.trim() ? subject.trim().replace(/\s+/g, "_") : "Enclosed*24";
  const enclosureText = `Enclosure: ${sanitized}.html`;

  // Setup + resize canvas (Vercel/TS safe)
  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;

    const sizeCanvas = () => {
      const c = canvasRef.current;
      const context = ctxRef.current;
      if (!c || !context) return;

      const rect = c.getBoundingClientRect();
      c.width = rect.width * SCALE;
      c.height = rect.height * SCALE;

      context.lineWidth = 3 * SCALE;
      context.lineCap = "round";
      context.lineJoin = "round";

      // white background
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, c.width, c.height);
    };

    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);
    return () => window.removeEventListener("resize", sizeCanvas);
  }, []);

  // Drawing logic (mouse + touch)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    const getCanvasPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = "touches" in e ? e.touches[0] : null;
      const clientX = touch ? touch.clientX : (e as MouseEvent).clientX;
      const clientY = touch ? touch.clientY : (e as MouseEvent).clientY;

      return {
        x: (clientX - rect.left) * SCALE,
        y: (clientY - rect.top) * SCALE,
      };
    };

    const startDraw = (e: MouseEvent | TouchEvent) => {
      drawing = true;
      const { x, y } = getCanvasPos(e);
      lastX = x;
      lastY = y;
    };

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!drawing) return;

      const { x, y } = getCanvasPos(e);

      const isErasing = tool === "eraser";
      ctx.strokeStyle = isErasing ? "#ffffff" : penColor;

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      lastX = x;
      lastY = y;
    };

    const endDraw = () => {
      drawing = false;
    };

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      startDraw(e);
    };
    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      draw(e);
    };
    const onMouseUp = () => endDraw();
    const onMouseLeave = () => endDraw();

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      startDraw(e);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      draw(e);
    };
    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      endDraw();
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);

    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);

      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [tool, penColor]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const addFooterLabel = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const subjectText = "Subject: " + (subject || "");
    const fromText = "From: " + (from || "");

    ctx.save();
    ctx.font = `${8 * SCALE}px 'MS Sans Serif', Tahoma, sans-serif`;
    ctx.textBaseline = "bottom";

    const padding = 4 * SCALE;
    const lineHeight = 10 * SCALE;

    const subjectWidth = ctx.measureText(subjectText).width;
    const fromWidth = ctx.measureText(fromText).width;
    const maxTextWidth = Math.max(subjectWidth, fromWidth);

    const boxWidth = maxTextWidth + padding * 2;
    const boxHeight = lineHeight * 2 + padding * 2;

    const x = padding;
    const y = canvas.height - padding;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x - padding, y - boxHeight + padding, boxWidth, boxHeight);

    ctx.fillStyle = "#000000";
    ctx.fillText(subjectText, x, y - lineHeight);
    ctx.fillText(fromText, x, y);

    ctx.restore();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    addFooterLabel();

    const base64Full = canvas.toDataURL("image/png");
    const inlineHTML = `<img src="${base64Full}" alt="Drawing" style="max-width:100%;border:1px solid #444">`;
    const base64Data = base64Full.split(",")[1] ?? "";

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("from", from);
    formData.append("drawing_html", inlineHTML);

    const drivePayload = { subject, imageBase64: base64Data };

    setConfirmation({ text: "Sending...", color: "black" });

    try {
      const resBasin = await fetch(basinURL, { method: "POST", body: formData });

      // fire-and-forget
      fetch(driveScriptURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(drivePayload),
      });

      if (resBasin.ok) {
        setConfirmation({ text: "✅ Message has been sent.", color: "green" });
        setSubject("");
        setFrom("");
        clearCanvas();
      } else {
        setConfirmation({ text: "⚠️ Error sending message.", color: "red" });
      }
    } catch (err) {
      console.error(err);
      setConfirmation({ text: "⚠️ Network error.", color: "red" });
    }
  };

  return (
    <div className="pageShell">
      <div className="headerShell">
      </div>

      <div className="pageInner">
        <div className="contactRoot">
          <div className="paint-window">
            <form onSubmit={onSubmit} className="contactForm">
              <div className="toolbar">
                <span>Tool:</span>
                <button
                  type="button"
                  className={`tool-toggle ${tool === "pencil" ? "active" : ""}`}
                  title="Pencil"
                  onClick={() => setTool("pencil")}
                >
                  ✏️
                </button>
                <button
                  type="button"
                  className={`tool-toggle ${tool === "eraser" ? "active" : ""}`}
                  title="Eraser"
                  onClick={() => setTool("eraser")}
                >
                  🧽
                </button>

                <span style={{ marginLeft: 10 }}>Color:</span>

                <button
                  type="button"
                  className="color-btn"
                  style={{ background: "#1D4ED8" }}
                  onClick={() => {
                    setPenColor("#1D4ED8");
                    setTool("pencil");
                  }}
                />
                <button
                  type="button"
                  className="color-btn"
                  style={{ background: "#498C50" }}
                  onClick={() => {
                    setPenColor("#498C50");
                    setTool("pencil");
                  }}
                />
                <button
                  type="button"
                  className="color-btn"
                  style={{ background: "#FA961E" }}
                  onClick={() => {
                    setPenColor("#FA961E");
                    setTool("pencil");
                  }}
                />
                <button
                  type="button"
                  className="color-btn"
                  style={{ background: "#B077E9" }}
                  onClick={() => {
                    setPenColor("#B077E9");
                    setTool("pencil");
                  }}
                />

                <button type="button" id="clear-draw" style={{ marginLeft: "auto" }} onClick={clearCanvas}>
                  Clear
                </button>
              </div>

              <div className="email-panel">
                <div className="field">
                  <label htmlFor="subject">Subject:</label>
                  <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </div>
                <div className="field">
                  <label htmlFor="from">From:</label>
                  <input id="from" type="email" value={from} onChange={(e) => setFrom(e.target.value)} required />
                </div>
              </div>

              <div className="canvas-frame">
                <div className="canvas-inner">
                  <canvas ref={canvasRef} />
                </div>
              </div>

              <div className="enclosure">
                <strong>{enclosureText}</strong>
                <br />
                Camelot:Applications: Drawing Mail...
              </div>

              <div className="submit-row">
                <div className="submit-bar">
                  <input type="submit" value="Send" />
                </div>
                <div
                  id="confirmation"
                  style={{
                    display: confirmation ? "block" : "none",
                    fontWeight: "bold",
                    fontSize: 12,
                    color: confirmation?.color,
                  }}
                >
                  {confirmation?.text}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pageShell {
          min-height: 100vh;
          background-image:
            linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)),
            url("/images/backgrounds/contact.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .headerShell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .pageInner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 24px 40px;
        }

        .contactRoot {
          font-family: "MS Sans Serif", Tahoma, sans-serif;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .paint-window {
          width: 100%;
          max-width: 650px;
          margin: 12px;
          background: #f4f4f4;
          border: 2px solid #000;
          box-shadow: 3px 3px 0 #808080;
          display: flex;
          flex-direction: column;
        }

        .contactForm {
          display: flex;
          flex-direction: column;
          padding: 8px;
          gap: 8px;
        }

        .toolbar {
          background: #e0e0e0;
          border: 2px solid #808080;
          box-shadow: 1px 1px 0 #ffffff inset, -1px -1px 0 #a0a0a0 inset;
          padding: 4px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          font-size: 12px;
        }

        .tool-toggle,
        .toolbar button.color-btn,
        .toolbar button#clear-draw {
          border: 2px solid #d0d0d0;
          box-shadow: 1px 1px 0 #ffffff inset, -1px -1px 0 #a0a0a0 inset;
          background: #f4f4f4;
          cursor: pointer;
          color: #000;
        }

        .tool-toggle {
          width: 32px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
        }

        .tool-toggle.active {
          border-color: #000080;
          box-shadow: none;
          background: #d0d8ff;
        }

        .toolbar button.color-btn {
          width: 24px;
          height: 24px;
          padding: 0;
          box-shadow: none;
          border: 2px solid #404040;
        }

        .email-panel {
          background: #e4e4e4;
          border: 2px solid #808080;
          box-shadow: 1px 1px 0 #ffffff inset, -1px -1px 0 #a0a0a0 inset;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 13px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .field label {
          font-weight: bold;
        }

        .field input {
          padding: 4px;
          border: 2px inset #ffffff;
          background: #ffffff;
          font-size: 13px;
          width: 100%;
          box-sizing: border-box;
          color: #000;
        }

        .canvas-frame {
          background: #e0e0e0;
          border: 2px solid #808080;
          box-shadow: 1px 1px 0 #ffffff inset, -1px -1px 0 #a0a0a0 inset;
          padding: 4px;
        }

        .canvas-inner {
          background: #a0a0a0;
          padding: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        canvas {
          background: #ffffff;
          border: 1px solid #000000;
          width: 100%;
          aspect-ratio: 18 / 10;
          height: auto;
          touch-action: none;
          display: block;
        }

        .enclosure {
          background: #e4e4e4;
          border: 2px solid #808080;
          box-shadow: 1px 1px 0 #ffffff inset, -1px -1px 0 #a0a0a0 inset;
          padding: 4px 6px;
          font-family: monospace;
          font-size: 12px;
        }

        .submit-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .submit-bar input[type="submit"] {
          padding: 4px 12px;
          border: 2px solid #d0d0d0;
          box-shadow: 1px 1px 0 #ffffff inset, -1px -1px 0 #a0a0a0 inset;
          background: #f4f4f4;
          font-weight: bold;
          cursor: pointer;
          font-size: 13px;
        }

        @media (max-width: 600px) {
          .headerShell {
            padding: 0 12px;
          }
          .pageInner {
            padding: 12px 12px 24px;
          }
          .paint-window {
            margin: 0;
            border-left: 0;
            border-right: 0;
            box-shadow: none;
          }
          .submit-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}