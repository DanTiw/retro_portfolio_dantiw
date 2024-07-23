import type { Metadata } from "next";
import {Press_Start_2P} from 'next/font/google'

//import order does matter
import "./globals.css";
import Navbar from "@/app/navbar";
import Head from "next/head";


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
    <Head>
    <title>Danish Tiwari</title>
        <meta name="description" content="Portfolio Website by Danish" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Danish Tiwari",
              "url": "https://danish-tiwari.vercel.app/",
              "jobTitle": "Your Job Title",
              "sameAs": [
                "https://www.linkedin.com/in/danishtiwari",
                "https://github.com/DanTiw",
              ],
              "description": "Brief description about Danish Tiwari and his expertise."
            })
          }}
        />
    </Head>

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