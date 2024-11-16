import Image from "next/image";
import { motion } from "framer-motion";
export const TeamLeadCard = ({ teamLeadData }) => {
  return (
    <motion.div
      initial={{ translateX: "-1180px" }}
      animate={{ translateX: "0px" }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
      className="w-[95%] bg-[#283444] rounded-md p-4 flex md:flex-row flex-col z-40"
    >
      <div className="relative">
        <h1 className=" absolute bottom-0 text-white text-5xl w-full text-center">
          Lead
        </h1>
        <Image
          alt="Lead"
          src={teamLeadData.image}
          height={205}
          width={205}
          className="md:h-[205px] md:w-[205px]  w-[98%] aspect-square rounded-md"
        />
      </div>
      <div className="md:pl-5 md:pt-0 pt-3">
        <h1 className="text-white sm:text-5xl text-4xl">{teamLeadData.name}</h1>
        <h3 className="text-white text-2xl lg:text-3xl md:text-2xl">
          {teamLeadData.department}
        </h3>
        <h3 className="text-white text-2xl lg:text-3xl md:text-2xl">
          {teamLeadData.headLine}
        </h3>
        <h3 className="text-white text-2xl lg:text-3xl md:text-2xl">
          {teamLeadData.domain}
        </h3>
        <h3 className="text-white text-xl   md:text-xl lg:text-2xl">
          <a href={teamLeadData.linkedIn}>LinkedIn</a>
        </h3>
      </div>
    </motion.div>
  );
};

export const TeamCoLead = ({ teamCoLeadData }) => {
  return (
    <div className="overflow-hidden w-[95%] z-40">
      <motion.div
        initial={{ translateX: "1180px" }}
        animate={{ translateX: "0px" }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        className="w-[100%] bg-[#283444] rounded-md p-4 flex md:flex-row flex-col translate-x-[1180px] "
      >
        <div className="md:pl-5 md:pt-0 pt-3">
          <h1 className="text-white sm:text-5xl text-4xl">
            {teamCoLeadData.name}
          </h1>
          <h3 className="text-white text-2xl lg:text-3xl md:text-2xl">
            {teamCoLeadData.department}
          </h3>
          <h3 className="text-white text-2xl lg:text-3xl md:text-2xl">
            {teamCoLeadData.headLine}
          </h3>
          <h3 className="text-white text-2xl lg:text-3xl md:text-2xl">
            {teamCoLeadData.domain}
          </h3>
          <h3 className="text-white text-xl md:text-xl lg:text-2xl">
            <a href={teamCoLeadData.linkedIn}>Linkedin</a>
          </h3>
        </div>
        <div className="relative ml-auto">
          <h1 className=" absolute bottom-0 text-white text-5xl w-full text-center">
            Co-Lead
          </h1>
          <Image
            alt="Lead"
            src={teamCoLeadData.image}
            height={205}
            width={205}
            className="md:h-[205px] md:w-[205px]  w-[98%] aspect-square rounded-md  md:mt-0 mt-3"
          />
        </div>
      </motion.div>
    </div>
  );
};
