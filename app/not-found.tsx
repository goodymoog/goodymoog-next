import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 160px)",
        background: "#c0c0c0",
        color: "#000",
        fontFamily: `"Times New Roman", Times, serif`,
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          background: "#fff",
          border: "2px solid #000",
          boxShadow: "6px 6px 0 #777",
          padding: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            margin: "0 0 18px",
            fontWeight: "bold",
          }}
        >
          404 Not Found
        </h1>

        <hr style={{ border: 0, borderTop: "2px solid #000" }} />

        <p style={{ fontSize: "18px", lineHeight: 1.4 }}>
          The requested URL was not found on this server.
        </p>

        <p style={{ fontSize: "16px", lineHeight: 1.4 }}>
          Please check the address and try again.
        </p>

        <p style={{ fontSize: "14px", marginTop: "32px" }}>
          <Link
            href="/"
            style={{
              color: "#0000ee",
              textDecoration: "underline",
            }}
          >
            Return to Goodymoog
          </Link>
        </p>

        <hr style={{ border: 0, borderTop: "1px solid #888" }} />

        <p
          style={{
            fontSize: "13px",
            color: "#555",
            marginBottom: 0,
          }}
        >
          goodymoog.com server at port 80
        </p>
      </div>
    </main>
  );
}