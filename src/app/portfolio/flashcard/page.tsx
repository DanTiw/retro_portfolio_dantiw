import ProjectDetails from '@/components/ProjectDetails';
import Link from 'next/link';

const FlashcardProjectPage = () => {
    const projectData = {
        name: "Flashcard Generator",
        description: "The Flashcard Generator is a dynamic web application designed to streamline the creation and management of study materials. Built with React and Next.js, it offers an intuitive interface for generating, editing, and reviewing flashcards. The application leverages modern web technologies to provide a smooth, interactive user experience. Key features include AI-powered flashcard generation, real-time editing capabilities, a flip card interface for study sessions, and the ability to save and manage multiple flashcard sets. The clean, responsive design, implemented with Tailwind CSS, ensures a consistent experience across various devices.",
        technologies: [
            { name: "React", icon: "/SVGs/react.svg" },
            { name: "NextJS", icon: "/SVGs/next.svg" },
            { name: "TypeScript", icon: "/SVGs/typescript.svg" },
            { name: "Tailwind CSS", icon: "/SVGs/tailwind.svg" },
            { name: "Supabase", icon: "/SVGs/supabase.svg" },
            { name: "DaisyUI", icon: "/SVGs/daisyui.svg" },
        ],
        projectUrl: "https://github.com/rajeshchoudharyt/ai-flashcard",
        liveUrl: "https://ai-flashcard-one.vercel.app/"
    };

    return (
        <div>
            <ProjectDetails {...projectData} />
        </div>
    );
};

export default FlashcardProjectPage;