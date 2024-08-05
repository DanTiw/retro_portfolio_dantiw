import ProjectDetails from '@/components/ProjectDetails';
import Link from 'next/link';

const MyProjectPage = () => {
    const projectData = {
        name: "PantryPal",
        description: "The Pantry Management System is a modern web application designed to simplify food inventory management for households. Built with Next.js, React, and Firebase, it offers a user-friendly experience for tracking, updating, and managing pantry items. The interface, designed with Shadcn UI components and Tailwind CSS, is intuitive and works seamlessly across devices. Key features include real-time data synchronization, recipe suggestions based on current inventory, customizable settings for default units, and instant inventory reports. With Firebase, all changes are reflected immediately, ensuring your pantry data is always up-to-date. ",
        technologies: [
            { name: "NextJS", icon: "/SVGs/next.svg" },
            {name : "TypeScript" , icon : "/SVGs/typescript.svg"},
            {name : "React" , icon : "/SVGs/react.svg"},
            {name : "Firebase" , icon : "/SVGs/firebase.svg"},
            {name : "Tailwind CSS" , icon : "/SVGs/tailwind.svg"},
           
        ],

        projectUrl: "https://github.com/DanTiw/pantry_tracker",
        liveUrl: "https://pantry-tracker-ochre.vercel.app/"
    };

    return (
        <div>
            <ProjectDetails {...projectData} />
        </div>
    );
};

export default MyProjectPage;