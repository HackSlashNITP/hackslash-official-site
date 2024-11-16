"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export const TeamMemberCard=({teamMemberData,translateProperty,index})=>{
    const isSmallScreen = window.innerWidth <= 800;
    const initialProperty=index%2==0?{translateX:isSmallScreen?"-100px":"-536px"}:{translateX:isSmallScreen?"100px":"430px"};
    const duration={durationTime:0.6};
    if(isSmallScreen){
        translateProperty={translateX:"0px"};
        duration.durationTime=0.3;
    }
    return <motion.div initial={initialProperty} transition={{ease:"easeOut",duration:duration.durationTime}}  whileInView={translateProperty} viewport={{ once: true }} className="xl:w-[44%] md:w-[43%] w-[45%] bg-[#283444] rounded-md p-2 flex md:flex-row flex-col z-40">
                    <Image alt="Team Member" src={teamMemberData.image} width={100} height={100} className="md:h-[100px] md:w-[100px]  w-[98%] aspect-square rounded-md"/>
                    <div className="md:pl-5 md:pt-0 pt-3 flex flex-col">
                        <div >
                            <h1 className="text-white lg:3xl md:text-xl sm:text-2xl text-xl">{teamMemberData.name}</h1>
                            <h3 className="text-white text-0.5xl lg:text-xl sm:text-2xl md:text-xl">{teamMemberData.department}</h3>
                        </div>
                        <h3 className="text-white text-sm   md:text-sm lg:text-sm  mt-auto"><a href={teamMemberData.linkedIn}>LinkedIn</a></h3>        
                     </div>
           </motion.div>
}