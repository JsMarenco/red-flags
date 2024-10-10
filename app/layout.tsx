// Third-party dependencies
import { Metadata, Viewport } from "next";
import clsx from "clsx";

// Current project dependencies
import { Providers } from "@/app/providers";
import { fontMontserrat } from "@/config/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/Buttons/ScrollTop";
import "@/styles/globals.css";
import "@/styles/loaders/book.css";
import "@/styles/loaders/packman.css";
import "@/styles/backgrounds/landing.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flagscan.jsmarenco.dev/"),
  title: {
    default: "FlagScan | Relationship Analyzer",
    template: "%s | Relationship Insights with AI",
    absolute: "FlagScan - AI Relationship Analyzer",
  },
  description:
    "Is she/he the right one for you? Let AI analyze your chat for relationship insights with FlagScan.",
  applicationName: "FlagScan",
  authors: [{ name: "FlagScan Team", url: "https://flagscan.jsmarenco.dev/" }],
  generator: "Next.js",
  keywords: [
    "Relationship Analyzer",
    "AI Chat Analysis",
    "Red Flags",
    "Green Flags",
    "WhatsApp Analysis",
    "Relationship Insights",
  ],
  referrer: "no-referrer",
  creator: "FlagScan Team",
  publisher: "FlagScan",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
  },
  icons: {
    icon: "/static/assets/app/icons/maskable_icon_x512.png",
    apple: "/static/assets/app/icons/apple-icon.png",
    shortcut: "/static/assets/app/icons/favicon.ico",
  },
  manifest: "/static/assets/manifest.json",
  openGraph: {
    type: "website",
    url: "https://flagscan.jsmarenco.dev/",
    title: "FlagScan - AI Relationship Analyzer",
    description:
      "Is she/he the right one for you? Let AI analyze your chat for relationship insights with FlagScan.",
    siteName: "FlagScan",
    images: [{ url: "/static/assets/app/screenshots/screenshot-desktop.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@flagscan",
    creator: "@flagscan",
    title: "FlagScan - AI Relationship Analyzer",
    description:
      "Find red and green flags in your WhatsApp conversations using AI.",
    images: ["/static/assets/app/screenshots/screenshot-desktop.png"],
  },
  appleWebApp: {
    capable: true,
    title: "FlagScan",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  category: "AI Technology",
  classification: "Relationship Analysis",
  assets: ["/static/assets"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontMontserrat.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />

            <main className="max-w-[1330px] px-6 mx-auto flex-grow">
              {children}
            </main>

            <ScrollTop />

            <Footer />
          </div>
        </Providers>

        <script
          defer
          data-website-id="80ac8c92-8649-491e-86f8-d769ecd0af7a"
          src="https://analytics.chesko.dev/script.js"
        />
      </body>
    </html>
  );
}
