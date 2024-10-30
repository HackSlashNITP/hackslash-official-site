
import Image from 'next/image';

export const TeamMemberCard=({teamMemberData})=>{
    return <div className="xl:w-[48%] md:w-[43%] w-[45%] bg-[#283444] rounded-md p-2 flex md:flex-row flex-col">
                    <Image alt="Team Member" src={teamMemberData.image} width={100} height={100} className="md:h-[100px] md:w-[100px]  w-[98%] aspect-square rounded-md"/>
                    <div className="md:pl-5 md:pt-0 pt-3 flex flex-col">
                        <div >
                            <h1 className="text-white lg:3xl md:text-xl sm:text-2xl text-xl">{teamMemberData.name}</h1>
                            <h3 className="text-white text-0.5xl lg:text-xl sm:text-2xl md:text-xl">{teamMemberData.department}</h3>
                        </div>
                        <h3 className="text-white text-sm   md:text-sm lg:text-sm  mt-auto"><a href={teamMemberData.linkedIn}>LinkedIn</a></h3>        
                     </div>
           </div>
}