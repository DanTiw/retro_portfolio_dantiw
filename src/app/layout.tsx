import type { Metadata } from "next";
import {Press_Start_2P} from 'next/font/google'

//import order does matter
import "./globals.css";
import Navbar from "@/app/navbar";


const honk = Press_Start_2P({
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


    <body className={honk.className} >
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-cyan-900 to-cyan-700">
        <Navbar/>
        {children}
    </div>
    </body>
    </html>
  );
}
//"min-h-screen bg-cover bg-center bg-fixed"
//          style={{backgroundImage: "url('/images/bg.png')"}}