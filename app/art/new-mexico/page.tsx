// app/art/new-mexico/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <Link href="/art">← Back to Art</Link>
      <h1 style={{ marginTop: 16 }}>New Mexico</h1>
      <p>Add content here.</p>
    </main>
  );
}