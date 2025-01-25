import Image from "next/image";

const CoordinatorCard = ({ name, role, image, linkedin, github }) => {
  return (
    <div className="relative bg-[#00ffc3] text-black rounded-xl shadow-lg w-64 p-4 flex flex-col items-center">
      <div className="absolute -top-[90px] w-[170px] h-[185px] bg-gray-300 overflow-hidden rounded-xl">
        {image ? (
          <Image src={image} alt={`Profile picture of ${name}`} style={'object-cover'} fill />
        ) : (
          <p className="text-gray-500 text-sm flex items-center justify-center h-full">Add photo here</p>
        )}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl mt-5">{name || "Name"}</h3>
      </div>

      <div className="flex items-center justify-center mt-2 space-x-5">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s GitHub`}>
            <img src="icons/github.svg" alt="GitHub" className="w-6 h-6 " />
          </a>
        )}
        <p className="text-xl">{role || "Role"}</p>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`}>
            <img src="icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 filter invert" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CoordinatorCard;
