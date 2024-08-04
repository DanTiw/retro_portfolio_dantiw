import Image from 'next/image';
import TechStack from "@/components/techStack";
import Link from "next/link";
export default function Home() {

        return (
            <main className="px-2 py-8 sm:p-8 md:p-12 lg:p-16 bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent  ">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    <div className="w-full md:w-2/3 lg:w-3/4 space-y-6">
                        <p className="md:text-lg lg:text-xl xl:text-2xl ">
                            Hello! I'm  Danish Tiwari, a passionate and dedicated Full Stack Developer specializing in
                            MERN stack with expertise in Next.js and TypeScript. My journey in web development has
                            been driven by a relentless curiosity and a desire to create impactful, efficient, and
                            user-friendly applications.Growing and learning everyday, I am always looking for new
                            opportunities to collaborate and create something amazing.
                        </p>
                        <Link href="/portfolio">
                            <button
                                className="px-6 py-3 text-sm mt-4 sm:text-base rounded-md  text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
                                Know More
                            </button>
                        </Link>
                    </div>
                    <TechStack/>
                    
                       
                    
                </div>
                

    
</main>

)
    ;
};

