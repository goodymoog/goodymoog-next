"use client";

import { useState, type FormEvent } from "react";

type Props = { username: string };

export default function SignupForm({ username }: Props) {
  const [message, setMessage] = useState("");
  // Buttondown's documented, browser-native form endpoint.
  // The browser must follow the response for CAPTCHA and validation.
  const action = username
    ? `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(username)}`
    : undefined;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (!action) {
      event.preventDefault();
      setMessage("Newsletter signup is not connected yet.");
    }
  }

  return (
    <>
      <form className="gnl-form" method="post" action={action} onSubmit={onSubmit}>
        <input
          id="gnl-email"
          type="email"
          name="email"
          aria-label="Your email address"
          autoComplete="email"
          required
        />
        <input type="hidden" name="embed" value="1" />
        <button type="submit">add me</button>
      </form>
      <p className="gnl-fine">unsubscribe whenever.</p>
      {message && <p className="gnl-msg" role="status">{message}</p>}
    </>
  );
}
