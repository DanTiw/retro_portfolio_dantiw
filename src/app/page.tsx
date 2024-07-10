import Image from 'next/image';
import TechStack from "@/components/techStack";
import Link from "next/link";
export default function Home() {

        return (
            <main className="px-2 py-8 sm:p-8 md:p-12 lg:p-16 bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent  ">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    <div className="w-full md:w-2/3 lg:w-3/4 space-y-6">
                        <p className="text-xl sm:text-xl lg:text-xl xl:text-3xl ">
                            Hello! I'm Danish Tiwari, a passionate and dedicated Full Stack Developer specializing in
                            MERN stack with expertise in Next.js and TypeScript. My journey in web development has
                            been driven by a relentless curiosity and a desire to create impactful, efficient, and
                            user-friendly applications.
                        </p>
                        <Link href="/portfolio">
                            <button
                                className="px-6 py-3 text-sm mt-4 sm:text-base rounded-md  text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
                                Know More
                            </button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center md:justify-end mt-8 md:mt-0">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-10 lg:w-64 lg:h-64">
                            <Image
                                className="rounded-3xl "
                                src="/images/webpAvatar.webp"
                                alt="Avatar"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>


    <div className="mt-1 sm:mt-12 md:mt-16">
        <TechStack/>
    </div>
</main>

)
    ;
};

