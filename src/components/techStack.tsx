"use client"

import React from 'react';
import { Database, Server, RatIcon, FileCode2,  } from 'lucide-react';
import Image from 'next/image'
const TechStack = () => {
    const technologies = [
        { name: 'HTML', icon: '/SVGs/html.svg' },
        { name: 'CSS', icon: '/SVGs/css.svg' },
        { name: 'JavaScript', icon: '/SVGs/javascript.svg' },
        { name: 'TypeScript', icon: '/SVGs/typescript.svg' },
        { name: 'Node', icon: '/SVGs/node.svg' },
        { name: 'Express', icon: '/SVGs/express.svg' },
        { name: 'React', icon: '/SVGs/react.svg' },
        { name: 'MongoDB', icon: '/SVGs/mongo.svg' },
        { name: 'PostgreSQL', icon: '/SVGs/postgres.svg' },
        { name: 'Firebase', icon: '/SVGs/firebase.svg' },
        { name: 'Next14', icon: '/SVGs/next.svg' },
        { name: 'Python', icon: '/SVGs/python.svg' },

    ];

    return (
        <div className="p-4 sm:p-6 rounded-lg shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center ">My Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 bg-gradient-to-b from-yellow-500 to-pink-500 rounded-md hover:shadow-xl h-60   sm:flex w-full"
                    >
                        <div className="relative w-1/2 h-1/2 mb-2 ">
                            <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <span className="text-xl font-medium text-black text-center mt-2">
            {tech.name}
          </span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default TechStack;