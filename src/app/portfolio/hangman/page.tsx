import ProjectDetails from '@/components/ProjectDetails';
import Link from 'next/link';

const MyProjectPage = () => {
    const projectData = {
        name: "Hangman",
        description: "I developed a classic Hangman game that runs in the terminal, featuring ASCII art for visual appeal. This Python-based game randomly selects words from a predefined list and challenges players to guess the word letter by letter. The game displays the hangman's gallows and figure using ASCII art, progressively revealing parts of the hangman as incorrect guesses are made.  ",
        technologies: [
            { name: "Python", icon: "/SVGs/python.svg" },
        ],

        projectUrl: "https://github.com/DanTiw/Hangman-Python",
    };

    return (
        <div>
            <ProjectDetails {...projectData} />
        </div>
    );
};

export default MyProjectPage;