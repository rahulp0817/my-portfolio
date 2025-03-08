import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" bbai-tooltip-injected="true">
      <body
        className={`${geistSans.variable} ${geistMono.variable} md:px-60 antialiased`}
        data-new-gr-c-s-check-loaded="14.1096.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
