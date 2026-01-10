"use client";
import Image from "next/image";
import CoordinatorCard from "@/components/CoordinatorCard";
import CicleImage from "../../../public/staticAssets/images/Circle.png";
import React, { useEffect, useState } from "react";
import alumni from "@/data/alumni"; 

const AlumniPage = () => {
  const [lessThanXl, setLessThanXl] = useState(false);

  useEffect(() => {
    setLessThanXl(window.innerWidth <= 914);
    const handleResize = () => {
      setLessThanXl(window.innerWidth <= 914);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="w-screen bg-black min-h-screen px-4 sm:px-8 lg:px-0">
      <h1 className="text-white text-center lg:text-[100px] sm:text-7xl text-[43px] md:py-16 py-10">
        Our Esteemed Alumni
      </h1>

      <Image
        alt="CicleImage"
        className={`absolute xl:top-[-120px] lg:top-[650px] sm:scale-[0.9] z-0 ${
          lessThanXl && "hidden"
        }`}
        src={CicleImage}
      />

      <div className="grid gap-10 sm:gap-40 mt-10 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-20 justify-center">
          {alumni.map((member, idx) => (
            <CoordinatorCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AlumniPage;
