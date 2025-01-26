"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CoordinatorCard from "@/components/CoordinatorCard";
import CicleImage from "../../../public/staticAssets/images/Circle.png";

const OfficeBearers = () => {
    const [lessThanXl, setLessThanXl] = useState(false);


    const officeBearers = [
        {
            name: "Abdul Subhan",
            role: ["Community Lead"],
            image: "/leads/Subhan.jpeg",
            linkedin: "https://www.linkedin.com/in/abdulsubhan12/",
            github: "http://github.com/gitsubh7",
        },
        {
            name: "Piyush Singh",
            role: ["Community Co-Lead", "Flutter Co-Lead"],
            image: "/leads/FlutterCoLead.jpeg",
            linkedin: "https://www.linkedin.com/in/piyuush-singh/",
            github: "https://github.com/piyuuussh",
        },
        {
            name: "Abhinav Singh",
            role: ["Administrative Lead"],
            image: "/leads/ABHINAV_SINGH.jpeg",
            linkedin: "https://www.linkedin.com/in/abhinavs13",
            github: " https://github.com/Abhinav1341",
        },
        {
            name: "Devendra Singh",
            role: ["Technical Lead", "Flutter Lead"],
            image: "/leads/FlutterLead.png",
            linkedin: "https://www.linkedin.com/in/devendra-singh-ba1917257/github.com/dev04sa",
            github: "https://github.com/dev04sa",
        },
        {
            name: "Komal Kumari",
            role: ["Content and Social Media Lead"],
            image: "/leads/Komal_Kumari.jpg",
            linkedin: "https://www.linkedin.com/in/komal-kumari-79234a258/",
            github: "https://github.com/komal-nitp",
        },
        {
            name: "Sahitya Aryan",
            role: ["Web Lead"],
            image: "/leads/SAHITYA_ARYAN.png",
            linkedin: "https://www.linkedin.com/in/sahityaaryan/",
            github: "https://github.com/Sahityaaryan",
        },
        {
            name: "Divyansh Gupta",
            role: ["Web Co-Lead"],
            image: "/leads/DIVYANSH_GUPTA.jpg",
            linkedin: "https://www.linkedin.com/in/divyansh-gupta-7a71b8250/",
            github: "https://github.com/divyansh12git",
        },
        {
            name: "Rai Chirag Kumar",
            role: ["Kotlin Lead", "Events and PR Lead"],
            image: "/leads/CHIRAG_KUMAR.jpg",
            linkedin:
                "https://www.linkedin.com/in/chirag-kumar-rai-bbb009271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: "https://github.com/chiragrai31",
        },
        {
            name: "Shiva Singh Bagri",
            role: ["AI/ML Lead"],
            image: "/leads/SHIVA_SINGH_BAGRI.jpg",
            linkedin: "https://www.linkedin.com/in/shiva-singh-bagri-060089174",
            github: " https://GitHub.com/autobot37",
        },
        {
            name: "Govind Singh",
            role: ["Blockchain Lead"],
            image: "/leads/GOVIND_SINGH.jpg",
            linkedin: "https://www.linkedin.com/in/govind-singh-a925471a1",
            github: " https://github.com/GovindSinghh",
        },
        {
            name: "Maheedhar Bobbala",
            role: ["SigSTP Lead"],
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

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // const lessThanXl = window.innerWidth <= 914;
    return (
        <div className="w-screen">
            <Image
                alt="CicleImage"
                className={`absolute xl:top-[-120px] lg:top-[650px] sm:scale-[0.9] z-0 ${lessThanXl && "hidden"
                    }`}
                src={CicleImage}
            />
            <h1 className="text-white text-center lg:text-[100px] sm:text-7xl text-[43px] md:py-16 md:pb-10 py-5 px-4">
                Office Bearers
            </h1>
            <div className="grid gap-10 sm:gap-40 mt-10 sm:mt-20">
                {/* First Row: 1-2 Cards on Mobile, 2 Cards on Larger Screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 justify-center">
                    {officeBearers.slice(0, 2).map((coordinator, index) => (
                        <CoordinatorCard key={index} {...coordinator} />
                    ))}
                </div>

                {/* Subsequent Rows: 2 Columns on Mobile, 4 Columns on Larger Screens */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-5 sm:gap-x-11 gap-y-20 sm:gap-y-40 justify-center">
                    {officeBearers.slice(2).map((coordinator, index) => (
                        <CoordinatorCard key={index + 2} {...coordinator} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OfficeBearers;
