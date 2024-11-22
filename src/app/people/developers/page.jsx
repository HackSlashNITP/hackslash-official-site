"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";

const people = [
  {
    id: 1,
    name: "Vasu Choudhari",
    designation: "POC",
    image: "/vasu.jfif",
  },
  {
    id: 2,
    name: "Manya Gupta",
    designation: "POC",
    image: "/MANYA_GUPTA.png",
  },
  {
    id: 3,
    name: "Sanjeet Raj",
    designation: "",
    image: "/sanjeet.jpg",
  },
  {
    id: 4,
    name: "Akshat Kumar",
    designation: "",
    image: "/akshat.png",
  },
  {
    id: 5,
    name: "Anshu Kant",
    designation: "",
    image: "/anshu.jpeg",
  },
  {
    id: 6,
    name: "Ashutosh Pandey",
    designation: "",
    image: "/ashutosh.jpg",
  },
  {
    id: 7,
    name: "Anshu Mahto",
    designation: "",
    image: "/anshu_mahto.jpg",
  },
  {
    id: 8,
    name: "Sandeep Kumar",
    designation: "",
    image: "/sandeep.jpg",
  },
  {
    id: 9,
    name: "Aditya Raj",
    designation: "",
    image: "/aditya.jpeg",
  },
  {
    id: 10,
    name: "Harshit Verma",
    designation: "",
    image: "/harshit.jpeg",
  },
  {
    id: 11,
    name: "Saniya",
    designation: "",
    image: "/saniya.jpeg",
  },
  {
    id: 12,
    name: "Abhijaat",
    designation: "",
    image: "/abhijaat.jpeg",
  },{
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
      <Link href={'/people/designers'} className="text-xl text-black bg-[#00ff9d] p-1 px-2 rounded">See designers</Link>
    </div>
  );
}
export default Designer;
