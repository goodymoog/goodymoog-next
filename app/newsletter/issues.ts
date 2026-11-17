// Only add issues after they have actually been published.
// The empty list matches the approved design: "nothing here yet."
export type Issue = { title: string; url: string };

export const issues: Issue[] = [];

// Example — replace the values with REAL information after publishing:
// export const issues: Issue[] = [
//   { title: "001 — First letter", url: "https://buttondown.com/YOUR_USERNAME/archive/YOUR_REAL_ISSUE_SLUG/" },
// ];
