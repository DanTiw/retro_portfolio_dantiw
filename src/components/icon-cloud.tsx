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
  
];

const TechStackCloud: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center md:mt-16">
     
      <div className="flex h-[400px] w-full max-w-[84rem] items-center justify-center overflow-hidden rounded-lg bg-black-900 px-20 pb-20 pt-8">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default TechStackCloud;