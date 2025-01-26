import Image from "next/image";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";  
import { FaCircle } from "react-icons/fa";

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

      <div className="flex flex-col items-center justify-center my-2 space-x-5 ">
       <div className="flex w-[56px] my-4 ">

       <div className="flex justify-between w-full">
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`${name}'s GitHub`}
          >
            <IoLogoGithub className="w-5 h-5 sm:w-6 sm:h-6"/>
              {/*  className="w-5 h-5 sm:w-6 sm:h-6" */}
          </a>
        )}
        </div>

        <div>
          {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`${name}'s LinkedIn`}
          >
            <IoLogoLinkedin className="w-5 h-5 sm:w-6 sm:h-6 "/>
              {/* className="w-5 h-5 sm:w-6 sm:h-6 filter invert"  */}
          </a>
        )}</div>
       </div>


        {/* <div className="flex flex-col ">
        {role.map((ele)=><FaCircle size={3} >
              <p key={ele} className="text-center text-lg  sm:text-xl">{ele || "Role"}</p><FaCircle/>)}
        </div> */}
        <div className="flex flex-col ">
        {
          role.map((ele)=>{

            return (
              // <div className=" bg-red-600">
              <p key={ele} name={ele} className="text-center text-lg sm:text-md">{ele || "Role"}</p>
              // </div>
            )
          })
        }
        </div>
        
      </div>
    </div>
  );
};

export default CoordinatorCard;