import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/header";
import "./globals.css";
import { getCurrentSession } from "@/actions/auth";
import { SanityLive } from "@/sanity/lib/live";
import HeaderCategorySelector from "@/components/layouts/headerCategorySelector";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ecommerce Platform",
  description: "Buy affordable items today",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const { user } = await getCurrentSession();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white min-h-[125vh]`}
      >
        <Header 
          user={user}
          categorySelector={<HeaderCategorySelector/>}
        />
        {children}
        <SanityLive/>
      </body>
    </html>
  );
}

export default RootLayout;