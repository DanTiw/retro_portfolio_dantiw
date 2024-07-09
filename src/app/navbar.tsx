"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ResumeLink from '@/components/ResumeLink';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Contact Me', path: '/contact' },
    ];

    return (
        <nav className="text-lg md:text-xl lg:text-2xl p-4 shadow-xl">
            <div className="container mx-auto flex justify-between items-center">
                <ResumeLink />

                {/* Hamburger menu for mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`hover:text-red-500 transition-colors duration-300 ${
                                    pathname === item.path ? 'text-red-500' : ''
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <ul className="md:hidden mt-4 space-y-2">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`block py-2 px-4 hover:bg-gray-700 ${
                                    pathname === item.path ? 'text-red-500' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;