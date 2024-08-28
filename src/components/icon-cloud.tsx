import React from 'react';
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "mongodb",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "tailwindcss",
  "vercel",
  "python",
  "supabase",
  "openai",
  "meta",
  
];

const TechStackCloud: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent text-2xl font-bold">Tech Stack</h1>
      <div className="flex h-auto w-full max-w-[90vw] sm:max-w-[84rem] items-center justify-center overflow-hidden rounded-lg bg-black-900 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default TechStackCloud;