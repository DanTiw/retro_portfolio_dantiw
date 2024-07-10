import { useState } from 'react';

const ResumeLink = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="p-4">
            <a
                href="/Danish'sResume.pdf"
                download
                className=" bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500  duration-300 animate-bounce md:text-4xl  hover:bg-gradient-to-l from-yellow-500 to-pink-500 sm:text-2xl"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {hovered ? 'Resume' : 'Danish'}
            </a>
        </div>
    );
};

export default ResumeLink;