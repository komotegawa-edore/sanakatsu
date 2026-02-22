import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://sanakatsu.vercel.app"
  ),
  title: {
    default: "サナ活 - 政治をもっと身近に",
    template: "%s | サナ活",
  },
  description:
    "政治の基本から最新ニュースまで、AIがやさしい言葉で教えてくれる。若者のための政治入門アプリ。",
  openGraph: {
    title: "サナ活 - 政治をもっと身近に",
    description:
      "政治の基本から最新ニュースまで、AIがやさしい言葉で教えてくれる。若者のための政治入門アプリ。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "サナ活 - 聞くだけで、政治がわかる。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "サナ活 - 政治をもっと身近に",
    description:
      "政治の基本から最新ニュースまで、AIがやさしい言葉で教えてくれる。若者のための政治入門アプリ。",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "192x192" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
