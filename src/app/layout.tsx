import type { Metadata } from "next";
import {Press_Start_2P} from 'next/font/google'

//import order does matter
import "./globals.css";
import Navbar from "@/app/navbar";
import { SparklesCore } from "@/components/ui/sparkles";


const fontD = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],

})

export const metadata: Metadata = {
  title: "Danish Tiwari",
  description: "Portfolio Website by Danish",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontD.className}>
        <div className="h-full w-full relative bg-black overflow-hidden">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full absolute"
            particleColor="#8b5cf6"
          />
          <main className="relative z-10">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}