// This is page is for home page

import { verifyToken } from "@/lib/actions";
import Image from "next/image";
// import Vector from "../assets/Vector.svg"
// import laptop from "../assets/laptop.svg"
// import circle1 from "../assets/circle1.svg"
// import circle2 from "../assets/circle2.svg"
// import frame_abhout from "../assets/frame_abhout.svg"

export default async function Home() {

  
  
  return (
    <main className="flex flex-col gap-4">
     
     <div className='flex flex-col w-[1266px] mx-auto items-center  space-y-10  '>

<div className='relative mx-auto flex flex-col w-[1266px]  items-center min-h-full  '>

    <div>
        {/* <img src={Vector} alt=""
        className='vector w-[643px] h-[365.87px]
        absolute top-[-180px] left-[450px]' /> */}
        <Image src={'./Vector.svg'}  alt="vector"
  width={643}
  height={365.87}
  className="vector w-[643px] h-[365.87px] absolute top-[-180px] left-[450px] blur-3xl" />
    </div>

  {/* Section 01 */}

  <div className='relative mx-auto flex flex-row  w-[1266px]  items-center 
 text-white justify-between mt-32'>
    {/* img vector */}


<div className='mx-auto  space-y-4' > 


 <div className='relative  space-y-3 leading-10 flex flex-row justify-between items-center gap-5'>

        {/* left side */}

            <div className='flex flex-col space-y-2'>

            <h1 className='font-bold font-loader'>WE ARE</h1>

            <span className='text-[#00FFC3] text-[38px] space-x-5 font-bold'>HACKSLASH</span>

            <div>
                    <p className='w-[480px] text-[20px]'>
                    A Community that aims to provide a forum to nature coding and
                    developments skills, and help each other grow because that working together has immense power.
                    </p>
            </div>

            <div>

            <button className='text-black bg-green-400 p-4 font-semibold rounded-[8px] w-[148px] h-[44px]
            flex justify-center items-center hover:bg-green-400 cursor-pointer transition-all duration-300 '>
                Learn More
            </button>

            </div>


            </div>

        {/* right side */}

        <div>

        {/* <img src={laptop} alt='laptop'/> */}
        <Image src={'./laptop.svg'} alt="" height={600} width={600} />

        </div>

      </div>

    </div>

</div>

</div>

{/* // section 02 */}

<div className='relative mx-auto flex flex-col  items-center  w-[1266px]
        text-white justify-between mt-28 space-y-8 space-x-7 mb-60 ' >

            {/* <img src={circle1} alt=""
             className='w-[107px]
             h-[74.42px]
             absolute
             top-[20px]
             left-0
             blur-3xl' /> */}
             <Image src={'./circle1.svg'} alt="" height={74.42} width={107} className='w-[107px] h-[74.42px] absolute top-[20px] left-0 blur-3xl' />


             {/* <img src={circle2} alt=""
             className='w-[107px]
             h-[74.42px]
             absolute
             top-[21px]
             left-[1145px]
             blur-3xl' />    */}
              <Image src={'./circle2.svg'} alt="" height={74.42} width={107} className='w-[107px] h-[74.42px] absolute top-[21px] left-[1145px] blur-3xl' />

      <div >
      <h2 className='mx-auto uppercase text-white font-bold text-3xl  '>ABOUT US</h2>
      </div>

      <div className=' relative mx-auto flex flex-row  w-[1266px] items-center min-h-full mt-10'>

          {/* left part */}
      <div className='w-[50%]'>

      {/* <img src={frame_abhout} alt=""
      className='w-[512px]
      h-[342px]' /> */}
      <Image src={'./frame_abhout.svg'} alt="" height={342} width={512} className='w-[512px] h-[342px]' />


    </div>

    {/* right part */}

    <div >

     <div className='w-[550px] h-[340px]  '>

      <p className='text-[24px] font-light'>HackSlash Developer Club is a community of NIT Patna that was created with the sole purpose of bringing people with similar
         interests in technology together where they can begin and master their coding and development skills. The club strives to build and improve the open-sourcing environment and the coding culture. 
        It provides a platform where you get to work on collaborative projects and help each other grow as a team. </p>
     </div>

     <div className='flex flex-row gap-20'>

      <div className='flex flex-col items-center justify-start'>

        <div className='text-4xl font-semibold'>100+</div>
        <div className='text-xl font-light uppercase'>members</div>

      </div>

      <div className='flex flex-col items-center'>

        <div className='text-4xl font-semibold'>10+</div>
        <div className='text-xl font-light uppercase'>EVENTS</div>

      </div>

      <div className='flex flex-col items-center'>

        <div className='text-4xl font-semibold'>7+</div>
        <div className='text-xl font-light uppercase'>domains</div>

      </div>

     </div>

    </div>

  </div>

  </div>
</div>


    </main>
  );
}
