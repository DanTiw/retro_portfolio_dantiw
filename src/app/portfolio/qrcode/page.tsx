import ProjectDetails from '@/components/ProjectDetails';
import Link from 'next/link';

const MyProjectPage = () => {
    const projectData = {
        name: "QR Code Generator",
        description: "One of my First projects when I started learning programming ! I developed a QR code generator application using Python and the Tkinter library. This desktop application allows users to input text or URLs and instantly generate corresponding QR codes. The user-friendly interface, built with Tkinter, provides an input field, a 'Generate' button, and an area to display the generated QR code. The app utilizes the qrcode library to create the QR codes, which can be saved as image files. ",
        technologies: [
            { name: "Python", icon: "/SVGs/python.svg" },
        ],

        projectUrl: "https://github.com/DanTiw/QR-code-generator-with-Tkinter-GUI",
    };

    return (
        <div>
            <ProjectDetails {...projectData} />

        </div>
    );
};

export default MyProjectPage;