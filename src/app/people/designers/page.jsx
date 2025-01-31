"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";

const people = [
  {
    id : 1,
    name: "Aditi Kumari",
    designation : "Design lead",
    image : "/members/designers/aditi.jpg",
    linkedin : "http://linkedin.com/in/aditi-kumari-b36023258"
  },
  {
    id: 2,
    name: "Aditya Raj",
    designation: "",
    image: "/members/designers/aditya.jpeg",
    linkedin: "https://www.linkedin.com/in/adityacyan",
  },
  {
    id: 3,
    name: "Jatin Atvani",
    designation: "",
    image: "/members/designers/jatin.jpg",
    linkedin:
      "https://www.linkedin.com/in/jatin-avtani-55b9b328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Sandeep Kumar",
    designation: "",
    image: "/members/designers/sandeep.jpg",
    linkedin: "http://www.linkedin.com/in/sandeep-kumar-gond-2b6280290",
  },

  {
    id: 5,
    name: "Priyanshu Raj",
    designation: "",
    image: "/members/designers/priyanshu.jpg",
    linkedin: "/",
  },

  {
    id: 6,
    name: "Palak Jaiswal",
    designation: "",
    image: "/members/designers/palak.jpeg",
    linkedin:
      "https://www.linkedin.com/in/palak-jaiswal-240130pj?fbclid=PAZXh0bgNhZW0CMTEAAaaAwPHAsyONoBJMcWde7W4u4Y6NrOc2r5yIbLOfu9qiFWQFipIPj2kuQc0_aem_-7ZUY_ExeN_PJOvWfsKJbg",
  },
  {
    id: 7,
    name: "Rahul Choudhary",
    designation: "",
    image: "/staticAssets/images/userAvatar.png",
    linkedin:"/"
  },
];

function Designer() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex flex-row items-center justify-center mb-6 w-full min-h-[18rem]">
        <AnimatedTooltip items={people} />
      </div>
      <Link
        href={"/people/developers"}
        className="text-xl text-black bg-[#00ff9d] p-1 px-2 rounded"
      >
        See developers
      </Link>
    </div>
  );
}
export default Designer;
