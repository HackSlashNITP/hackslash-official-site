import Image from "next/image";

const CoordinatorCard = ({ name, role, image, linkedin, github }) => {
  return (
    <div className="relative bg-[#00ffc3] text-black rounded-xl shadow-lg w-full max-w-[300px] mx-auto p-4 my-4 flex flex-col items-center">
      <div className="absolute -top-[50px] sm:-top-[90px] w-[120px] sm:w-[170px] h-[130px] sm:h-[185px] bg-gray-300 overflow-hidden rounded-xl">
        {image ? (
          <Image 
            src={image} 
            alt={`Profile picture of ${name}`} 
            className="object-cover w-full h-full"
            fill 
          />
        ) : (
          <p className="text-gray-500 text-sm flex items-center justify-center h-full">
            Add photo here
          </p>
        )}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-lg sm:text-xl mt-5">{name || "Name"}</h3>
      </div>

      <div className="flex items-center justify-center mt-2 space-x-5">
        <div>
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`${name}'s GitHub`}
          >
            <img 
              src="icons/github.svg" 
              alt="GitHub" 
              className="w-5 h-5 sm:w-6 sm:h-6" 
            />
          </a>
        )}
        </div>
        <div className="flex flex-col">
        {role.map((ele)=><p key={ele} className="text-center text-lg  sm:text-xl">{"->"}{ele || "Role"}</p>)}
        </div>
        <div>{linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`${name}'s LinkedIn`}
          >
            <img 
              src="icons/linkedin.svg" 
              alt="LinkedIn" 
              className="w-5 h-5 sm:w-6 sm:h-6 filter invert" 
            />
          </a>
        )}</div>
      </div>
    </div>
  );
};

export default CoordinatorCard;