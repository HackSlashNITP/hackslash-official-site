"use client"
import Ellip from '../../../../public/ellip.svg'
import Image from 'next/image'
import { TeamCoLead, TeamLeadCard } from '@/components/TeamLeadCard'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import { AiMlTeamData, blockchainTeamData, DSATeamData, flutterTeamData, kotlinTeamData, team405Data } from '../teamData'
import { useEffect, useState } from 'react'
const Domain = ({params}) => {
  const teamDataSchema={
    name:'',
    domain:'',
    teamLead:{
      name:'',
      image:"",
      department:'',
      domain:'',
      headLine:"",
      linkedIn:'#'
    },
    teamCoLead:{
      name:'',
      image:"",
      department:'',
      domain:'',
      headLine:"",
      linkedIn:'#'
    },
    teamMembers:[
      {
        id:1,
        name:"",
        image:"",
        department:"",
        linkedIn:'#'
      }
    ]
    
  }
  const [teamData,setTeamData]=useState(teamDataSchema);
 useEffect(()=>{
    const {domain}=params;
    switch(domain){
      case 'web':
        setTeamData(team405Data);
        break;
        
      case 'flutter':
        setTeamData(flutterTeamData);
        break;

      case 'kotlin':
        setTeamData(kotlinTeamData);
        break;

      case 'ai-ml':
        setTeamData(AiMlTeamData);
        break;

      case 'blockchain':
        setTeamData(blockchainTeamData);
        break;

      case 'dsa':
        setTeamData(DSATeamData);
        break;

      default :
          setTeamData(teamDataSchema);
          
    }
 },[])
  
  // if(domain==)
  
  return (
    <div className='w-screen'>
       <Image alt='ellip.svg' className='absolute lg:left-12 lg:top-48 lg:h-24 sm:h-24 sm:left-4 sm:top-20 left-[-20px] top-24 h-12 aspect-square' src={Ellip}/>
       <h1 className='text-white text-center lg:text-7xl sm:text-6xl text-4xl md:py-16 md:pb-10 mb-16 py-4'>{teamData.name} ({teamData.domain})</h1>
       <div className='w-screen flex items-center flex-col gap-4'>
         <TeamLeadCard teamLeadData={teamData.teamLead}/>
         <TeamCoLead teamCoLeadData={teamData.teamCoLead}/>
       </div>
       <div className=' py-4 w-full'>
        <div className='relative'> 
        <Image alt='ellip.svg' className='absolute lg:h-24 md:h-24 lg:right-9 top-2 right-[-10px] h-12 aspect-square' src={Ellip}/>
        </div>
         <h1 className='md:mx-10 mx-4 text-white lg:text-5xl sm:text-6xl text-4xl md:py-16 md:pb-10 lg:mb-16 mb-5 py-4'>Members</h1>
         <div className='flex lg:px-12 md:px-4 flex-row flex-wrap lg:gap-x-10 md:gap-x-7 gap-x-4 gap-y-5 justify-center w-[100%]'>
            {
              teamData.teamMembers.map((teamMember)=>(
                <TeamMemberCard key={teamMember.id} teamMemberData={teamMember}/>
              ))
            }
         </div>
       </div>

    </div>
  )
}

export default Domain