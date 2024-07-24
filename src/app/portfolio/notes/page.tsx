import ProjectDetails from '@/components/ProjectDetails';
import Link from 'next/link';

const MyProjectPage = () => {
    const projectData = {
        name: "Note Taking App",
        description: "I developed a Google Keep clone using React, which served as an excellent learning experience for mastering React fundamentals and CRUD operations. This web application allows users to create, read, update, and delete notes, mimicking the core functionality of Google Keep. Through building this project, I gained hands-on experience with React components, state management, and props. I learned to implement a responsive user interface using React's component-based architecture, managing application state with hooks like useState and useEffect. The CRUD functionality taught me how to handle user interactions, update the UI dynamically, and maintain data consistency ",
        technologies: [
            { name: "React", icon: "/SVGs/react.svg" },
            { name: "HTML", icon: "/SVGs/html.svg" },
            { name: "CSS", icon: "/SVGs/css.svg" },
            { name: "JavaScript", icon: "/SVGs/javascript.svg" },
            
        ],

        projectUrl: "https://github.com/DanTiw/Google-Keeper-App-Clone",
    };

    return (
        <div>
            <ProjectDetails {...projectData} />

        </div>
    );
};

export default MyProjectPage;