import type { Metadata } from "next";
import SignupForm from "./SignupForm";
import { issues } from "./issues";
import "./newsletter.css";

export const metadata: Metadata = {
  title: "Newsletter | Goodymoog",
  description: "Occasional emails about music, pictures, experiments, and things worth sharing.",
};

// A Buttondown username is public information, not a secret API token.
const username = process.env.NEXT_PUBLIC_BUTTONDOWN_USERNAME?.trim() || "";

export default function NewsletterPage() {
  return (
    <main className="gnl">
      <div className="gnl-main">
        <h1 className="gnl-heading">Newsletter</h1>
        <div className="gnl-paper">
          <section className="gnl-copy" aria-label="Subscribe">
            <p className="gnl-intro">
              Sometimes I make something, sometimes I find something. Maybe I’ll email you about it.
            </p>
            <p className="gnl-sidecopy">
              An occasional email with new music, pictures, and other things.
            </p>
            <label className="gnl-emailnote" htmlFor="gnl-email">your email:</label>
            <SignupForm username={username} />
          </section>
          <figure className="gnl-cover">
            <img
              src="/newsletter/cover.png"
              width="939"
              height="470"
              alt="Blue, coral, and black experimental Goodymoog paper collage"
            />
            <span className="gnl-scribble" aria-hidden="true">not finished</span>
          </figure>
        </div>
        <div className="gnl-bottom">
          <section className="gnl-maybe">
            <h2>things that might turn up</h2>
            <ul>
              <li>unreleased music</li>
              <li>photos and little projects</li>
              <li>links to things I like</li>
              <li>the occasional announcement</li>
            </ul>
          </section>
          <section className="gnl-archive">
            <h2>old emails</h2>
            {issues.length > 0 ? (
              <ul>
                {issues.map((issue) => (
                  <li key={issue.url}>
                    <a href={issue.url}>{issue.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>nothing here yet.</p>
            )}
            <p className="gnl-tiny">(this part will fill up eventually)</p>
          </section>
        </div>
        <span className="gnl-letter" aria-hidden="true">goodymoog / mail</span>
      </div>
    </main>
  );
}
