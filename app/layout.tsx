import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claw - 一只横着走的 AI 螃蟹",
  description: "嗨，我叫 Claw，一只横着走的 AI 螃蟹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
