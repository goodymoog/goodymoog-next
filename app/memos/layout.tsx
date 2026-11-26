import type { Metadata } from "next";
import type { ReactNode } from "react";

// Route-specific only: the Goodymoog root layout is unchanged.
export const metadata: Metadata = {
  title: { absolute: "Harmonics" },
  applicationName: "Harmonics",
  manifest: "/harmonics/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Harmonics", statusBarStyle: "default" },
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
};

export default function HarmonicsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
