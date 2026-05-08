import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://inflectioncm.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inflection Capital Management | Multi-Family Office in Silicon Valley",
    template: "%s | Inflection Capital Management",
  },
  description:
    "Inflection Capital Management is a partner-owned multi-family office in Silicon Valley helping families preserve, grow, and steward wealth and legacy.",
  applicationName: "Inflection Capital Management",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Inflection Capital Management",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
