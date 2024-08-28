import ProjectDetails from '@/components/ProjectDetails';
import Link from 'next/link';

const ChatifyProjectPage = () => {
    const projectData = {
        name: "Chatify",
        description: "Chatify is a cutting-edge web application that brings personalized, intelligent conversations to your fingertips. Powered by Firebase for seamless real-time functionality, it offers a robust and responsive chatting experience. With multiple AI assistants, including specialized chatbots for coding, Q&A, fitness, nutrition, health & wellness, and emotion support, Chatify caters to a wide range of user needs. Key features include real-time data synchronization, secure authentication, cloud storage for conversation history, dark/light mode, and responsive design. Built with Next.js, React, Tailwind CSS, and Firebase, Chatify showcases the power of modern web technologies combined with advanced AI capabilities and real-time database functionality.",
        technologies: [
            { name: "NextJS", icon: "/SVGs/next.svg" },
            { name: "React", icon: "/SVGs/react.svg" },
            { name: "TypeScript", icon: "/SVGs/typescript.svg" },
            { name: "Firebase", icon: "/SVGs/firebase.svg" },
            { name: "Tailwind CSS", icon: "/SVGs/tailwind.svg" },
            { name: "Clerk", icon: "/SVGs/clerk.svg" },
        ],
        projectUrl: "https://github.com/DanTiw/ai-customer-support",
        liveUrl: "https://chatify-rouge-three.vercel.app/"
    };

    return (
        <div>
            <ProjectDetails {...projectData} />
        </div>
    );
};

export default ChatifyProjectPage;