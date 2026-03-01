import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Goodymoog",
    template: "%s | Goodymoog",
  },
  description:
    "Goodymoog is an independent artist blending ambient textures, cinematic soundscapes, and experimental electronic music.",
  keywords: [
    "Goodymoog",
    "ambient music",
    "electronic artist",
    "independent music",
    "experimental sound",
  ],
  openGraph: {
    title: "Goodymoog",
    description:
      "Ambient and experimental electronic music by Goodymoog.",
    url: "https://www.goodymoog.com",
    siteName: "Goodymoog",
    images: [
      {
        url: "/og-image.jpg", // put image in /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodymoog",
    description:
      "Ambient and experimental electronic music by Goodymoog.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0 }}
      >
        <Header />

        {children}

        <Footer />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Goodymoog",
              "url": "https://www.goodymoog.com",
              "founder": {
                "@type": "Person",
                "name": "Théo"
              },
              "sameAs": [
                "https://www.instagram.com/goodymoog",
                "https://open.spotify.com/artist/0uplUm0m3nTzTrfj6aLRoS",
                "https://www.youtube.com/@goodymoog"
              ]
            }),
          }}
        />
      </body>


      
    </html>
  );
}