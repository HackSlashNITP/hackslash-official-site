"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/",
  },
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
