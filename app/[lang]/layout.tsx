import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/NavBar";
import { BaseParams } from "@/types/pageParams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleksey Pecheritsa",
  description: "Full-Stacked Web Developer, Mentor, Blogger",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: BaseParams;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex mn-h-screen flex-col items-center lg:p-24">
          <Navbar lang={lang} />
          {children}
        </main>
      </body>
    </html>
  );
}
