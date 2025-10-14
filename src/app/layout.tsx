import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../components/navigation.css";
import "../components/hero.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Swiss AI Call Center - Your AI-Powered Customer Service Solution",
  description: "Cut costs by 70% while delivering superior customer experiences with AI voice agents that handle calls, qualify leads, and book meetings 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
