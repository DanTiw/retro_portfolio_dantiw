import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Red_Hat_Mono} from "next/font/google"
import Navbar from "./navbar";
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"

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
  title: "Danish Tiwari - Software Engineer | Portfolio Website",
  description: "Danish Tiwari is a Software Engineer specializing in Full Stack Development. Check out my portfolio showcasing MERN stack projects, Next.js applications, and more. Connect with me on LinkedIn and YouTube.",
  keywords: [
    "Danish Tiwari",
    "Software Engineer",
    "Full Stack Developer",
    "MERN stack",
    "Next.js",
    "TypeScript",
    "danish tiwari",
    "danish Tiwari",
    "Danish Tiwari LinkedIn",
    "Danish Tiwari YouTube",
    "Software Engineer Portfolio",
    "Full Stack Developer Portfolio",
    "Danish Tiwari Portfolio",
    "Danish Tiwari Projects",
    "Danish Tiwari Contact",
    "Danish Tiwari About"
  ],
  metadataBase: new URL('https://danishtiwari.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Danish Tiwari - Software Engineer Portfolio",
    description: "Danish Tiwari is a Software Engineer specializing in Full Stack Development. Check out my portfolio showcasing MERN stack projects, Next.js applications, and more.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Danish Tiwari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Danish Tiwari - Software Engineer Portfolio",
    description: "Danish Tiwari is a Software Engineer specializing in Full Stack Development. Check out my portfolio showcasing MERN stack projects, Next.js applications, and more.",
  }
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Danish Tiwari",
  "url": "https://danishtiwari.tech",
  "image": "https://danishtiwari.tech/your-profile-image.jpg", // Replace with your actual image URL
  "sameAs": [
    "https://www.linkedin.com/in/your-linkedin-profile", // Replace with your LinkedIn URL
    "https://www.youtube.com/your-youtube-channel" // Replace with your YouTube URL
  ],
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Self-Employed"
  },
  "description": "Danish Tiwari is a Software Engineer specializing in Full Stack Development with expertise in MERN stack and Next.js applications.",
  "knowsAbout": [
    "Full Stack Development",
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js"
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://danishtiwari.tech"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={redHatMono.className}
      > 
      <div className="bg-bg antialiased">
        <Navbar />
        {children}
        <Analytics />
      </div>
      </body>
    </html>
  );
}
