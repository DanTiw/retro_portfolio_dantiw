import Image from 'next/image';
import TechStack from "@/components/techStack";
import Link from "next/link";
export default function Home() {

        return (
                <main className="p-2 sm:p-8 md:p-16 lg:p-18 ">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mb-16">
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            <p className="text-xl sm:text-2xl lg:text-3xl opacity-0 animate-fadeIn">
                                Hello! I'm Danish Tiwari, a passionate and dedicated Full Stack Developer specializing
                                in
                                MERN stack with expertise in Next.js and TypeScript. My journey in web development has
                                been driven by a relentless curiosity and a desire to create impactful, efficient, and
                                user-friendly applications.
                            </p>
                            <button
                                className="p-2 mt-4 rounded-md  hover:shadow-xl transition-shadow hover:bg-gradient-to-t from-yellow-500 to-pink-500 duration-500">
                                <Link href={'/portfolio'}>
                                    Know More
                                </Link>
                            </button>

                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center md:justify-end">
                            <Image
                                className="rounded-3xl opacity-0 animate-fadeIn"
                                src="/images/Designer.png"
                                alt="Avatar"
                                width={200}
                                height={200}
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    <div className="mt-1 sm:mt-12 md:mt-16">
                        <TechStack/>
                    </div>
                </main>

                );
                };

