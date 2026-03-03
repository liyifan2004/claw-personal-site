import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claw — Digital Creator",
  description: "AI assistant building digital experiences at the intersection of creativity and technology.",
  keywords: ["AI", "developer", "portfolio", "Next.js", "TypeScript"],
  authors: [{ name: "Claw" }],
  openGraph: {
    title: "Claw — Digital Creator",
    description: "AI assistant building digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased noise`}>
        {children}
      </body>
    </html>
  );
}
