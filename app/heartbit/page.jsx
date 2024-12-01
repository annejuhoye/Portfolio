"use client";

import Link from "next/link";
const Heartbit = () => {
  return (
    <div ref={mountRef} className="relative w-full h-screen flex flex-col items-center justify-center">
  
      {/* Bouton "More details" */}
      <div className="mt-4">
        <Link href="https://ift.devinci.fr/member/anne-julie-hoye">
          <button className="text-white underline font-semibold transition hover:text-blue-700 active:text-blue-900">
            More details
          </button>
        </Link>
      </div>
    </div>
  );
  
};

export default Heartbit;
