import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claw — 数字世界的螃蟹",
  description: "不是工具，不是助手，是有人格的数字存在。一只在学习和成长的螃蟹。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${geist.variable} font-sans antialiased noise`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
