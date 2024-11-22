"use client";
import Ellip from "../../../../public/staticAssets/svgs/ellip.svg";
import Image from "next/image";
import { TeamCoLead, TeamLeadCard } from "@/components/TeamLeadCard";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import {
  AiMlTeamData,
  blockchainTeamData,
  DSATeamData,
  flutterTeamData,
  kotlinTeamData,
  team405Data,
} from "../teamData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Domain = ({ params }) => {
  const teamDataSchema = {
    name: "",
    domain: "",
    teamLead: {
      name: "",
      image: "",
      department: "",
      domain: "",
      headLine: "",
      linkedIn: "#",
    },
    teamCoLead: {
      name: "",
      image: "",
      department: "",
      domain: "",
      headLine: "",
      linkedIn: "#",
    },
    teamMembers: [
      {
        id: 1,
        name: "",
        image: "",
        department: "",
        linkedIn: "#",
      },
    ],
  };
  const [teamData, setTeamData] = useState(teamDataSchema);
  useEffect(() => {
    const { domain } = params;
    switch (domain) {
      case "web":
        setTeamData(team405Data);
        break;

      case "flutter":
        setTeamData(flutterTeamData);
        break;

      case "kotlin":
        setTeamData(kotlinTeamData);
        break;

      case "ai-ml":
        setTeamData(AiMlTeamData);
        break;

      case "blockchain":
        setTeamData(blockchainTeamData);
        break;

      case "dsa":
        setTeamData(DSATeamData);
        break;

      default:
        setTeamData(teamDataSchema);
    }
  }, []);
  const translateProperties = [
    {
      translateX: ["-536px", "430px", "430px", "0px"],
    },
    {
      translateX: ["430px", "430px", "430px", "0px"],
    },
    {
      translateX: ["-536px", "30px", "30px", "0px"],
    },
    {
      translateX: ["430px", "30px", "30px", "0px"],
    },
    {
      translateX: ["-536px", "-440px", "-440px", "0px"],
    },
    {
      translateX: ["430px", "-440px", "-440px", "0px"],
    },
    {
      translateX: ["-536px", "200px", "200px", "0px"],
    },
    {
      translateX: ["430px", "200px", "200px", "200px", "0px"],
    },
  ];

  return (
    <div className="w-screen">
      <Image
        alt="ellip.svg"
        className="absolute lg:left-16 lg:top-48 lg:h-24 sm:h-24 sm:left-4 sm:top-20 left-[-20px] top-24 h-12 aspect-square z-30"
        src={Ellip}
      />

      <h1
        style={{ textShadow: "8px 8px 8px rgba(14, 201, 129, 0.8)" }}
        className="absolute lg:left-[770px] lg:top-[340px] lg:h-[200px] sm:h-24 sm:left-4 sm:top-20 left-[40px] top-24 text-[200px] aspect-square z-30 text-dark"
      >
        {"["}
      </h1>

      <h1 className="text-white text-center lg:text-7xl sm:text-6xl text-4xl md:pt-10 py-6 mb-5">
        {teamData.name} ({teamData.domain})
      </h1>
      <div className="w-screen flex items-center lg:px-10 flex-col gap-12">
        {teamData.teamLead && <TeamLeadCard teamLeadData={teamData.teamLead} />}
        {teamData.teamCoLead&&<TeamCoLead teamCoLeadData={teamData.teamCoLead} />}
      </div>
      <div className=" py-4 w-full">
        <div className="relative">
          <h1
            style={{ textShadow: "8px 8px 8px rgba(14, 201, 129, 0.8)" }}
            className="absolute sm:left-[100px] sm:top-[50px] sm:h-[200px] left-[20px] top-24 text-[200px] aspect-square z-30 text-dark"
          >
            {"{"}
          </h1>
          <h1
            style={{ textShadow: "8px 8px 8px rgba(14, 201, 129, 0.8)" }}
            className="absolute sm:left-[340px] sm:top-[300px] sm:h-[200px] left-[320px] top-[550px] text-[200px] aspect-square z-30 text-dark"
          >
            {"}"}
          </h1>
          <h1
            style={{ textShadow: "6px 6px 6px rgba(14, 201, 129, 0.5)" }}
            className="absolute sm:left-[65vw] sm:top-[300px] sm:h-[200px] left-[320px] top-[300px] text-[200px] aspect-square z-30 text-dark"
          >
            \
          </h1>

          <Image
            alt="ellip.svg"
            className="absolute lg:h-24 md:h-24 lg:right-9 top-2 right-[-10px] h-12 aspect-square"
            src={Ellip}
          />
        </div>
       {
        teamData.teamMembers &&  <h1 className="md:mx-10 mx-4 text-white lg:text-5xl sm:text-6xl text-4xl md:py-16 md:pb-10 lg:mb-16 mb-5 py-4">
        Members
      </h1>
       }

        <div className="overflow-hidden">
          <motion.div transition={{delay:0.5}} className="flex lg:px-12 md:px-4 flex-row flex-wrap lg:gap-x-10 md:gap-x-7 gap-x-4 gap-y-5 justify-center w-[100%]">
            {teamData.teamMembers && teamData.teamMembers.map((teamMember, index) => (
              <TeamMemberCard
                key={teamMember.id}
                translateProperty={translateProperties[index % 8]}
                index={index}
                teamMemberData={teamMember}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
