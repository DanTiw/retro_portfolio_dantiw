"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ResumeLink from '@/components/ResumeLink';
const Navbar: React.FC = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Contact Me', path: '/contact' },
    ];

    return (
        <nav className="text-3xl p-4 shadow-xl ">
            <div className="container mx-auto flex justify-between items-center">

                   <ResumeLink />

                <ul className="flex space-x-4   ">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link className="hover:text-red-500 transition-colors duration-300"
                                href={item.path}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;