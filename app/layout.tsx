import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joydeep-tripathy.github.io"),
  title: "Joydeep Tripathy — Backend & ML Engineer",
  description:
    "Backend engineer and machine learning researcher building resilient production systems, open-source security tools, and generative models.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joydeep Tripathy — Backend & ML Engineer",
    description:
      "I build resilient production systems, open-source security tools, and generative models.",
    url: "/",
    siteName: "Joydeep Tripathy",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
