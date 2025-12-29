"use client";
import Image from "next/image";
import Link from "next/link";
import CoordinatorCard from "@/components/CoordinatorCard";
import CicleImage from "../../../public/staticAssets/images/Circle.png";
import React, { useEffect, useState } from "react";

const AlumniPage = () => {
  const [lessThanXl, setLessThanXl] = useState(false);

  const alumni = [
    {
      name: "Abdul Subhan",
      role: ["Ex-Community Lead"],
      image: "/leads/Subhan.jpeg",
      linkedin: "https://www.linkedin.com/in/abdulsubhan12/",
      github: "http://github.com/gitsubh7",
      batch: "2021-2025",
    },
    {
      name: "Piyush Singh",
      role: ["Ex-Community Co-Lead       and Flutter Co-Lead"],
      image: "/leads/FlutterCoLead.jpeg",
      linkedin: "https://www.linkedin.com/in/piyuush-singh/",
      github: "https://github.com/piyuuussh",
      batch: "2021-2025",
    },
    {
      name: "Abhinav Singh",
      role: ["Ex-Administrative Lead"],
      image: "/leads/ABHINAV_SINGH.jpeg",
      linkedin: "https://www.linkedin.com/in/abhinavs13",
      github: "https://github.com/Abhinav1341",
      batch: "2020-2024",
    },
    {
      name: "Devendra Singh",
      role: ["Ex-Technical and Flutter Lead"],
      image: "/leads/FlutterLead.png",
      linkedin: "https://www.linkedin.com/in/devendra-singh-ba1917257",
      github: "https://github.com/dev04sa",
      batch: "2020-2024",
    },
    {
      name: "Komal Kumari",
      role: ["Ex-Content and Social Media Lead"],
      image: "/leads/Komal_Kumari.jpg",
      linkedin: "https://www.linkedin.com/in/komal-kumari-79234a258/",
      github: "https://github.com/komal-nitp",
      batch: "2022-2026",
    },
    {
      name: "Sahitya Aryan",
      role: ["Ex-Web Lead"],
      image: "/leads/SAHITYA_ARYAN.png",
      linkedin: "https://www.linkedin.com/in/sahityaaryan/",
      github: "https://github.com/Sahityaaryan",
      batch: "2021-2025",
    },
    {
      name: "Divyansh Gupta",
      role: ["Ex-Web Co-Lead"],
      image: "/leads/DIVYANSH_GUPTA.jpg",
      linkedin: "https://www.linkedin.com/in/divyansh-gupta-7a71b8250/",
      github: "https://github.com/divy",
      batch: "2021-2025",
    },
    {
      name: "Rai Chirag Kumar",
      role: ["Ex-Kotlin Lead", "Ex-Events and PR Lead"],
      image: "/leads/CHIRAG_KUMAR.jpg",
      linkedin:
        "https://www.linkedin.com/in/chirag-kumar-rai-bbb009271",
      github: "https://github.com/chiragrai31",
      batch: "2020-2024",
    },
    {
      name: "Shiva Singh Bagri",
      role: ["Ex-AI/ML Lead"],
      image: "/leads/SHIVA_SINGH_BAGRI.jpg",
      linkedin: "https://www.linkedin.com/in/shiva-singh-bagri-060089174",
      github: "https://github.com/autobot37",
      batch: "2020-2024",
    },
    {
        name: "Govind Singh",
        role: ["Ex-Blockchain Lead"],
        image: "/leads/GOVIND_SINGH.jpg",
        linkedin: "https://www.linkedin.com/in/govind-singh-a925471a1",
        github: " https://github.com/GovindSinghh",
    },

    {
        name: "Maheedhar Bobbala",
        role: ["Ex-SigSTP Lead"],
        image: "/leads/Bobbala_Maheedhar.jpg",
        linkedin: "https://www.linkedin.com/in/maheedhar-bobbala-9739a1276/",
        github: " https://github.com/maheedhar20",
    },
  ];

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {alumni.map((member, idx) => (
            <CoordinatorCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AlumniPage;
