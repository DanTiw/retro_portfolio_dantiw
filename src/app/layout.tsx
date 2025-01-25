import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Red_Hat_Mono} from "next/font/google"
import Navbar from "./navbar";

const redHatMono = Red_Hat_Mono({
weight: "700",
subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Danish Tiwari - Portfolio Website",
  description: "Welcome to the portfolio website of Danish Tiwari, a passionate and dedicated Full Stack Developer specializing in MERN stack with expertise in Next.js and TypeScript.",
  keywords: ["Danish Tiwari", "Portfolio", "Full Stack Developer", "MERN stack", "Next.js", "TypeScript","danish tiwari","danish Tiwari"],

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={redHatMono.className }
      > 
      <div className="bg-bg antialiased">

        <Navbar />
        {children}
      </div>
      </body>
    </html>
  );
}
