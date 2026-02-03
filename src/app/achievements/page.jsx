"use client";
import { AchievementCard }  from "@/components/AchievementCard";
import React, { useEffect, useState } from "react";
import people from "@/data/achievements"; 

const AchievementPage = () => {
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
        Achievements
      </h1>

      <div className="grid gap-10 sm:gap-40 mt-10 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-20 justify-center">
          {people.map((member, idx) => (
            <AchievementCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AchievementPage;
