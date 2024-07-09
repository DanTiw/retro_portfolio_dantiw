import React from 'react';
import Link from 'next/link';

const portfolio = () => {
    const projects = [
        { id: 1, title: 'Zenith', description: 'An activity tracker made for small scale businesses to assign tasks to Employees' +
                '\nTech Used ' +
                '\nJavascript'
            , github: 'https://zenith-f8eab.web.app' },
        { id: 2, title: 'Collaborative Text Editor', description: 'A Real-time Rich text editor ', github: 'https://github.com/DanTiw/collaborative-text-editor' },
        { id: 3, title: 'The QR Code Generator', description: 'Simple QR code Generator', github: 'https://github.com/DanTiw/QR-code-generator-with-Tkinter-GUI' },
        { id: 4, title: 'Notes App', description: 'Simple Notes App with CRUD operations ', github: 'github.com/DanTiw/Google-Keeper-App-Clone' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects.map((project) => (
                    <Link target="_blank" href={project.github} key={project.id}>
                        <div className="bg-gradient-to-b from-yellow-500 to-pink-500 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-white">{project.description}</p>
                            </div>
                            <div className="bg-black bg-opacity-20 p-4">
                                <span className="text-white text-sm">View on GitHub</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default portfolio;