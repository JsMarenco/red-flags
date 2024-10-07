// Third-party dependencies
import { Metadata, Viewport } from "next";
import clsx from "clsx";

// Current project dependencies
import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import { fontMontserrat } from "@/config/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/Buttons/ScrollTop";
import "@/styles/globals.css";
import "@/styles/loaders/book.css";
import "@/styles/loaders/packman.css";
import "@/styles/backgrounds/landing.css";
import ProductHuntBadge from "@/components/ProductHuntBadge";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
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

            <ProductHuntBadge />

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
