import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ecommerce Platform",
  description: "Buy affordable items today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white min-h-[125vh]`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
