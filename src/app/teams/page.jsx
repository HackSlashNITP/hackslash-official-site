"use client";
import Image from "next/image";
import React from "react";
import WebTeamImage from "../../../public/staticAssets/images/team405.jpeg";
import FlutterTeamImage from "../../../public/staticAssets/images/flutter.png";
import KotlinTeamImage from "../../../public/staticAssets/images/Kotlin.png";
import AIMLTeamImage from "../../../public/staticAssets/images/Ai-Ml.png";
import BlockchainTeamImage from "../../../public/staticAssets/images/blockchain.jpeg";
import DSATeamImage from "../../../public/staticAssets/images/DSA.png";
import Ellip from "../../../public/staticAssets/svgs/ellip.svg";
import { TeamCard } from "@/components/TeamCard";
import CicleImage from "../../../public/staticAssets/images/Circle.png";

const Teams = () => {
  const TeamsData = [
    {
      teamName: "405 Found",
      team: "Web Team",
      image: WebTeamImage,
      url: "/teams/web",
    },
    {
      teamName: "Nougat",
      team: "Flutter Team",
      image: FlutterTeamImage,
      url: "/teams/flutter",
    },
    {
      teamName: "Nougat",
      team: "Kotlin Team",
      image: KotlinTeamImage,
      url: "/teams/kotlin",
    },
    {
      teamName: "Gray Interface",
      team: "AI/ML Team",
      image: AIMLTeamImage,
      url: "/teams/ai-ml",
    },
    {
      teamName: "CipherSync",
      team: "Blockchain Team",
      image: BlockchainTeamImage,
      url: "/teams/blockchain",
    },
    {
      teamName: "SigSTP",
      team: "DSA Team",
      image: DSATeamImage,
      url: "/teams/dsa",
    },
  ];
  const lessThanXl = window.innerWidth <= 914;
  return (
    <div className="w-screen">
      <Image
        alt="ellip.svg"
        className="absolute lg:left-10 lg:top-32 lg:h-24 sm:h-24 sm:left-4 sm:top-20 left-[-15px] top-18 h-12 aspect-square"
        src={Ellip}
      />
      <Image
        alt="ellip.svg"
        className="absolute lg:top-64 sm:h-24 sm:top-52 sm:right-4 right-[-20px] top-[110px] h-12 aspect-square"
        src={Ellip}
      />
      <Image
        alt="CicleImage"
        className={`absolute xl:top-[-120px] lg:top-[650px] sm:scale-[0.9] z-30 ${
          lessThanXl && "hidden"
        }`}
        src={CicleImage}
      />
      <h1 className="text-white text-center lg:text-[200px] sm:text-[120px] text-7xl md:py-16 md:pb-10 py-5 ">
        Domains
      </h1>
      <div className="flex md:flex-row flex-wrap w-screen justify-center mb-7">
        {TeamsData.map((team, index) => (
          <TeamCard
            key={index}
            teamName={team.teamName}
            team={team.team}
            image={team.image}
            url={team.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
