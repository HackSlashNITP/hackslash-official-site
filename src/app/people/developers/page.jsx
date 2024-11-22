"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";

const people = [
  {
    id: 1,
    name: "Vasu Choudhari",
    designation: "POC",
    image: "/members/devlopers/vasu.jfif",
    linkedin: "/#",
  },
  {
    id: 2,
    name: "Manya Gupta",
    designation: "POC",
    linkedin: "/#",
    image: "/MANYA_GUPTA.png",
  },
  {
    id: 3,
    name: "Sanjeet Raj",
    designation: "",
    image: "/members/devlopers/sanjeet.jpg",
    linkedin: "/#",
  },
  {
    id: 4,
    name: "Anshu Mahto",
    designation: "",
    image: "/members/devlopers/anshu_mahto.jpg",
    linkedin:
      "https://www.linkedin.com/in/anshu-manoj-mahto-0abb342b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 5,
    name: "Akshat Kumar",
    designation: "",
    image: "/members/devlopers/akshat.png",
    linkedin: "/#",
  },
  {
    id: 6,
    name: "Anshu Kant",
    designation: "",
    image: "/members/devlopers/anshu.jpeg",
    linkedin: "/#",
  },
  {
    id: 7,
    name: "Ashutosh Pandey",
    designation: "",
    image: "/members/devlopers/ashutosh.jpg",
    linkedin: "/#",
  },
  {
    id: 8,
    name: "Sandeep Kumar",
    designation: "",
    image: "/members/devlopers/sandeep.jpg",
    linkedin: ":http://www.linkedin.com/in/sandeep-kumar-gond-2b6280290",
  },
  {
    id: 9,
    name: "Aditya Raj",
    designation: "",
    image: "/members/devlopers/aditya.jpeg",
    linkedin: "https://www.linkedin.com/in/adityacyan",
  },
  {
    id: 10,
    name: "Harshit Verma",
    designation: "",
    image: "/members/devlopers/harshit.jpeg",
    linkedin: "/#",
  },
  {
    id: 11,
    name: "Saniya",
    designation: "",
    image: "/members/devlopers/saniya.jpeg",
    linkedin: "/#",
  },
  {
    id: 12,
    name: "Abhijaat",
    designation: "",
    image: "/members/devlopers/abhijaat.jpeg",
    linkedin: "/#",
  },
  {
    id: 13,
    name: "Rahul Jangir",
    designation: "",
    image: "/staticAssets/images/userAvatar.png",
    linkedin:
      "https://www.linkedin.com/in/rahul-jangir-0416a928a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id:13,
    name:"Suryansh Verma",
    designation: "",
    image: "/Suryansh_Verma.jpg"
  }
];

function Designer() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex flex-row items-center justify-center mb-6 w-full min-h-[18rem]">
        <AnimatedTooltip items={people} />
      </div>
      <Link
        href={"/people/designers"}
        className="text-xl text-black bg-[#00ff9d] p-1 px-2 rounded"
      >
        See designers
      </Link>
    </div>
  );
}
export default Designer;
