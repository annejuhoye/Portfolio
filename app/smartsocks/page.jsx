"use client";

import { useRouter } from "next/navigation";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const Project1 = () => {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center min-h-screen gap-6">
      {/* Flèche de retour */}
      <div className="absolute top-6 left-6 xl:left-32 ">
        <Link href="/projects">
          <div className="w-[50px] h-[50px] rounded-full bg-white group flex justify-center items-center hover:bg-accent rotate-[-225deg] ">
            <BsArrowDownRight className="text-primary text-xl" />
          </div>
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col items-center">
        {/* Icône */}
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-8"></div>
        {/* Titre */}
        <h3 className="text-4xl font-bold text-white text-center mb-6">
          Project in progress...
        </h3>
        <p className="gap-y-6">Stay tuned for updates!</p>
      </div>
    </div>
  );
};

export default Project1;
