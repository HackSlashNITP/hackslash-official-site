"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";

const people = [
  {
    id: 1,
    name: "Aditya Raj",
    designation: "",
    image: "/aditya.jpeg",
  },
  {
    id: 2,
    name: "Jatin Atvani",
    designation: "",
    image: "/jatin.jpg",
  },
  {
    id: 3,
    name: "Sandeep Kumar",
    designation: "",
    image: "/sandeep.jpg",
  },
  
  {
    id: 4,
    name: "Priyanshu Raj",
    designation: "",
    image: "/userAvatar.png",
  },
  
  {
    id: 5,
    name: "Palak Jaiswal",
    designation: "",
    image: "/userAvatar.png",
  },
  {
    id: 6,
    name: "Rahul Choudhary",
    designation: "",
    image: "/userAvatar.png",
  },
];

function Designer() {
  return (
     <div className="flex flex-col gap-2 items-center">
     <div className="flex flex-row items-center justify-center mb-6 w-full min-h-[18rem]">
       <AnimatedTooltip items={people} />

     </div>
     <Link href={'/people/developers'} className="text-xl text-black bg-[#00ff9d] p-1 px-2 rounded">See developers</Link>
   </div>
  );
}
export default Designer;
