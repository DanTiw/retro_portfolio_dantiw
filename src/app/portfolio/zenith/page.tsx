import ProjectDetails from '@/components/ProjectDetails';
import Link from 'next/link';

const MyProjectPage = () => {
  const projectData = {
    name: "Zenith!",
    description: "For our final year project, my two peers and I developed our first React application: a comprehensive team collaboration platform named Zenith. The app integrates three key features: a real-time chat system, task tracking functionality, and admin access controls, all powered by Firebase. Zenith allows team members to communicate instantly, manage and prioritize tasks efficiently, and gives administrators oversight and management capabilities. This project showcased our newly acquired React skills while also demonstrating our ability to integrate cloud services and implement real-time features in a web application.",
    technologies: [
      { name: "HTML", icon: "/SVGs/html.svg" },
        { name: "CSS", icon: "/SVGs/css.svg" },
        { name: "JavaScript", icon: "/SVGs/javascript.svg" },  
      { name: "React", icon: "/SVGs/react.svg" },
      { name: "Firebase", icon: "/SVGs/firebase.svg" },
      
    ],
   
    projectUrl: "https://github.com/rheetham/zenith",
  };

  return (
    <div>
      <ProjectDetails {...projectData} />
   
        <Link href="https://zenith-f8eab.web.app/"   target="_blank" className="ml-6 px-6 py-3 text-sm mt-2 sm:text-base rounded-md  text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
           Live
           
            </Link>
   
    </div>
  );
};

export default MyProjectPage;