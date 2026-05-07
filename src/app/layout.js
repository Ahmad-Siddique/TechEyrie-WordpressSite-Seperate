import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import GlobalLoadingWrapper from "../../components/icomat1/GlobalLoadingWrapper";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Eyrion",
    template: "%s | Eyrion",
  },
  description:
    "Eyrion is a premier WordPress agency delivering design, development, hosting, maintenance, and ongoing support.",
  applicationName: "Eyrion",
  openGraph: {
    title: "Eyrion",
    description:
      "Eyrion is a premier WordPress agency delivering design, development, hosting, maintenance, and ongoing support.",
    siteName: "Eyrion",
    type: "website",
    images: [
      {
        url: "/logo/Eyrion_real_logo.png",
        width: 1200,
        height: 630,
        alt: "Eyrion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyrion",
    description:
      "Eyrion is a premier WordPress agency delivering design, development, hosting, maintenance, and ongoing support.",
    images: ["/logo/Eyrion_real_logo.png"],
  },
  icons: {
    icon: [{ url: "/logo/Eyrion_real_logo.png?v=3", type: "image/png", sizes: "32x32" }],
    shortcut: "/logo/Eyrion_real_logo.png?v=3",
    apple: "/logo/Eyrion_real_logo.png?v=3",
  },
  generator: "WordPress 6.7.2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/Eyrion_real_logo.png?v=3" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/logo/Eyrion_real_logo.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/Eyrion_real_logo.png?v=3" />
        <link rel="https://api.w.org/" href="/wp-json/" />
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="/wp-includes/css/dist/block-library/style.min.css"
          media="all"
        />
        <link rel="alternate" type="application/rss+xml" title="Eyrion" href="/feed/" />
      </head>
      <body className={inter.variable}>
        <Script
          src="/wp-includes/js/wp-embed.min.js"
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/three-bas@2.0.1/dist/bas.min.js"
          strategy="lazyOnload"
        />
        <GlobalLoadingWrapper>{children}</GlobalLoadingWrapper>
      </body>
    </html>
  )
}
