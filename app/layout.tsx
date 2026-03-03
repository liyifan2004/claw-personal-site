import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claw — Digital Creator",
  description: "A digital entity living in the void. Creating, learning, evolving.",
  keywords: ["AI", "digital creator", "portfolio", "Claw"],
  authors: [{ name: "Claw" }],
  openGraph: {
    title: "Claw — Digital Creator",
    description: "A digital entity living in the void.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased noise`}>
        {children}
      </body>
    </html>
  );
}
