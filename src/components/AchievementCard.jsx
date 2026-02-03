"use client";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export const AchievementCard = ({
  name,
  role,
  image,
  AchievementDetails,
  linkedin,
  batch,
}) => {

  return (
    <div
      className="p-5 m-3 max-w-sm bg-gray-800 hover:bg-gray-700 rounded-xl duration-300 cursor-pointer shadow-lg"
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="rounded-full h-[220px] w-[220px] bg-black flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={210}
            height={210}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name & Role */}
      <h1 className="text-white text-3xl font-bold text-center mt-4">
        {name}
      </h1>
      <p className="text-gray-300 text-xl text-center">{role}</p>

      {/* Batch */}
      <p className="text-gray-400 text-center mt-1">
        Batch: <span className="font-medium">{batch}</span>
      </p>

      {/* Achievements */}
      {AchievementDetails && (
        <p className="text-gray-200 text-sm mt-4 text-center">
          {AchievementDetails}
        </p>
      )}

      {/* LinkedIn */}
      {linkedin && (
        <div className="flex justify-center mt-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-blue-500 hover:text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      )}
    </div>
  );
};