import type { Metadata } from "next";
import { Chivo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exit Apparel | Custom Apparel Manufacturing",
  description:
    "Exit Apparel is a Bandung-based custom apparel manufacturing partner for institutions, organizations, communities, and modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${chivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-dark">
        {children}
      </body>
    </html>
  );
}
