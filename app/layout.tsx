import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pham Minh Quy",
    template: "%s | Pham Minh Quy",
  },
  description: "Fullstack developer passionate about clean architecture and AI integration.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Pham Minh Quy – Developer Portfolio",
    description: "Explore projects, experiments, and thoughts about coding and architecture.",
    url: "https://phamminhquy.dev",
    siteName: "Pham Minh Quy",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 800,
        alt: "Pham Minh Quy Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pham Minh Quy",
    description: "Just a chill coder exploring Solution Architecture and Devops.",
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
