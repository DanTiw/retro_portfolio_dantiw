import { useState } from 'react';

const ResumeLink = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="p-4">
            <a
                href="/images/avatar.png"
                download
                className=" duration-300 animate-bounce text-4xl  hover:text-red-500"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {hovered ? 'Resume' : 'Danish'}
            </a>
        </div>
    );
};

export default ResumeLink;