import ProjectDetails from '@/components/ProjectDetails';
import Link from 'next/link';

const MyProjectPage = () => {
  const projectData = {
    name: "Collaborative Text Editor",
    description: "I developed a real-time collaborative text editor using the MERN (MongoDB, Express.js, React, Node.js) stack and Socket.IO. This web application enables multiple users to simultaneously edit shared documents, with changes instantly reflected across all connected clients. Each document is assigned a unique identifier for easy access and collaboration. The application utilizes MongoDB to persistently store document content, ensuring that work is saved and can be retrieved later. Key features include real-time synchronization of text edits, unique document IDs for sharing, and persistent storage in the database.",
    technologies: [
        { name: "React", icon: "/SVGs/react.svg" },
        { name: "Node.js", icon: "/SVGs/node.svg" },
        { name: "Express", icon: "/SVGs/express.svg" },
        { name: "MongoDB", icon: "/SVGs/mongo.svg" },
        { name: "HTML", icon: "/SVGs/html.svg" },
        { name: "CSS", icon: "/SVGs/css.svg" },
        { name: "JavaScript", icon: "/SVGs/javascript.svg" },
        { name: "WebSocket",icon:"/SVGs/socket.svg"},
     
      
    ],
   
    projectUrl: "https://github.com/DanTiw/collaborative-text-editor",
  };

  return (
    <div>
      <ProjectDetails {...projectData} />
   
    </div>
  );
};

export default MyProjectPage;