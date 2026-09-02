import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://inflectioncm.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inflection Capital Management | Multi-Family Office in San Francisco",
    template: "%s | Inflection Capital Management",
  },
  description:
    "Inflection Capital Management is a partner-owned and independent multi-family office in San Francisco helping families preserve, grow, and steward wealth and legacy.",
  applicationName: "Inflection Capital Management",
  icons: {
    icon: "/FAVICON.svg",
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

export const viewport: Viewport = {
  themeColor: "#02231A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400;1,6..72,500&family=Archivo:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {/*
          Brand duotone for team photography: a luminance ramp from evergreen
          through an airy mid green to mint. Defined once here because an SVG
          filter referenced by url(#id) must exist in the same document as the
          elements using it.
        */}
        <svg
          className="dt-defs"
          aria-hidden="true"
          focusable="false"
          width="0"
          height="0"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        >
          <filter id="brand-duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.2126 0.7152 0.0722 0 0
                      0.2126 0.7152 0.0722 0 0
                      0.2126 0.7152 0.0722 0 0
                      0      0      0      1 0"
            />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.086 0.404 0.937" />
              <feFuncG type="table" tableValues="0.216 0.545 0.961" />
              <feFuncB type="table" tableValues="0.169 0.463 0.945" />
            </feComponentTransfer>
          </filter>
        </svg>

        {children}
      </body>
    </html>
  );
}
