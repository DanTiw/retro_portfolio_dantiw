import type { Metadata } from "next";
import { Press_Start_2P } from 'next/font/google';
import "./globals.css";
import Navbar from "@/app/navbar";
import { SparklesCore } from "@/components/ui/sparkles";

const fontD = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Danish Tiwari - Portfolio Website",
  description: "Welcome to the portfolio website of Danish Tiwari, a passionate and dedicated Full Stack Developer specializing in MERN stack with expertise in Next.js and TypeScript.",
  keywords: ["Danish Tiwari", "Portfolio", "Full Stack Developer", "MERN stack", "Next.js", "TypeScript","danish tiwari","danish Tiwari"],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#FFF3B0",
  icons: {
    icon: "/favicon.ico",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontD.className}>
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start overflow-auto">
          <div className="w-full fixed inset-0">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFF3B0"
            />
          </div>
          <main className="relative z-10 w-full">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}