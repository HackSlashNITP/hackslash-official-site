import { verifyToken } from "@/lib/actions";
import Image from "next/image";
import Card from "@/components/Card";
import { connectToDb } from "@/lib/db";
import { Event } from "@/lib/models";

export default async function Home() {
  await connectToDb();
  const events = await Event.find().populate({
    path: "author",
    select: "username",
  });

  const upcomingEvents = events.filter((event) => event.eventDate > new Date());
  return (
    <main className="flex flex-col gap-4 px-4 sm:px-8 lg:px-0">
     
      <div className='flex flex-col w-full max-w-[1266px] mx-auto items-center space-y-10 py-8'>

        <div className='relative flex flex-col items-center w-full min-h-full'>

          <div>
          <Image 
    src={'/Vector.svg'} 
    alt="vector"
    width={643}
    height={365.87}
    className="w-[90%] max-w-[643px] h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 md:top-[-180px] md:left-[450px] blur-3xl" 
  />
          </div>

          {/* Section 01 */}
          <div className='relative flex flex-col md:flex-row w-full max-w-[1266px] items-center justify-between text-white mt-5 px-4'>

            <div className='mx-auto space-y-4'>
              <div className='relative flex flex-col md:flex-row justify-between items-center gap-5 space-y-3 leading-10'>
                
                {/* Left side */}
                <div className='flex flex-col space-y-2 text-center md:text-left'>
                  <h1 className='font-normal text-[38px] font-loader'>WE ARE</h1>
                  <span className='text-[#00FFC3] text-[48px] md:ml-16 font-normal mb-7'>HACKSLASH</span>
                  <div>
                    <p className='w-full max-w-[480px] text-[25px]'>
                      A Community that aims to provide a forum to nurture coding and
                      development skills, and help each other grow because working together has immense power.
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <button className='text-black bg-green-400 p-4 font-semibold rounded-[8px] w-[148px] h-[44px] flex justify-center items-center hover:bg-green-400 cursor-pointer transition-all duration-300'>
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right side */}
                <div>
                  <Image src={'/laptop.svg'} alt="laptop" width={700} height={700} className=' w-full md:mx-20 mx-0 h-auto'/>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Section 02 */}
        <div className='relative flex flex-col items-center w-full max-w-[1266px] text-white justify-between mt-28 space-y-8 mb-60 px-4'>

          <Image src={'/circle1.svg'} alt="circle1" height={74.42} width={107} className='w-[107px] h-[74.42px] absolute top-[20px] left-0 blur-3xl' />
          <Image src={'/circle2.svg'} alt="circle2" height={74.42} width={107} className='w-[107px] h-[74.42px] absolute top-[21px] right-0 blur-3xl' />

          <div>
            <h2 className='uppercase text-white font-bold text-6xl text-center'>ABOUT US</h2>
          </div>

          <div className='relative flex flex-col md:flex-row w-full max-w-[1266px] items-center mt-10'>

            {/* Left part */}
            <div className='w-full md:w-1/2'>
              <Image src={'/frame_abhout.svg'} alt="frame about" height={342} width={512} className='w-full h-auto' />
            </div>

            {/* Right part */}
            <div className='w-full md:w-1/2 mt-10 md:mt-0'>
              <div className='w-full max-w-[550px]'>
                <p className='text-[24px] font-light'>
                  HackSlash Developer Club is a community of NIT Patna that was created with the sole purpose of bringing people with similar
                  interests in technology together where they can begin and master their coding and development skills. The club strives to build and improve the open-sourcing environment and the coding culture. 
                  It provides a platform where you get to work on collaborative projects and help each other grow as a team.
                </p>
              </div>

              <div className='flex flex-row gap-20 mt-8'>
                <div className='flex flex-col items-center'>
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
        
        {/* Section 03 */}
      {/* <div className='flex flex-col w-full max-w-[1266px] mx-auto items-center space-y-10 py-8'>
        <div>
          <h2 className='uppercase text-white font-normal text-6xl text-center'>Upcoming Events</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <Card title={"Delta Winter of Code"}
            imgSrc={"/event.png"} 
            description={"DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."} 
             buttonText={"SESSION DETAILS"}/>
              <Card title={"Delta Winter of Code"}
            imgSrc={"/event.png"} 
            description={"DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."} 
             buttonText={"SESSION DETAILS"}/>
              <Card title={"Delta Winter of Code"}
            imgSrc={"/event.png"} 
            description={"DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests."} 
             buttonText={"SESSION DETAILS"}/>
        </div>

      </div> */}


       {/* Section 03 */}

       {/* Upcoming Events */}
      <section className="py-6 bg-black">
        <h3 className="text-3xl text-center font-semibold mb-6 py-8 text-gray-200">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-3 gap-6 px-4 md:px-20">
          {upcomingEvents.map((event, index) => (
            index < 3 && (
              <Card
              id={event._id}
              key={event._id}
              title={event.title}
              imgSrc={event.images[0] || "/event.png"}
              description={event.desc}
              buttonText={"SESSION DETAILS"}
            />
            )
          ))}
        </div>
      </section>

        
        {/* Section 04 */}
      <div className="w-11/12 mx-auto border-t border-gray-700 mt-20 "></div>
      <div id="getInTouch">
      <div className=' relative flex flex-col w-full max-w-[1266px] mx-auto items-center  '>
      <Image src={'/Vector.svg'} alt="circle1" height={100} width={100} className='w-[200px] h-[200px] absolute top-[350px] left-[-90px] blur-3xl ' />
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-20 bg-black min-h-screen p-8">
      {/* Left Side - Form */}
      <div className="md:w-1/2 text-white ">
        <h1 className="text-6xl text-[#00FFC3] font-normal">Get in touch</h1>
        <p className="text-2xl ">We are here for you! How can we help?</p>
        

        <form className="space-y-5 my-10">
          <div>
            <label htmlFor="name" className="block mb-2 text-lg">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 bg-transparent border border-[#ffffff] rounded-md text-white focus:outline-none ]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-lg">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 bg-transparent border border-[#ffffff] rounded-md text-white focus:outline-none "
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-lg">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full px-4 py-2 bg-transparent border border-[#ffffff] rounded-md text-white focus:outline-none "
              placeholder="Your message"
            />
          </div>

          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-[#00FFC3] text-black rounded-md font-semibold hover:bg-[#00cc7d] transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="md:block md:w-1/2 p-5">
        <Image 
          src="/group.png" // Path to the image in the public folder
          alt="Contact Illustration"
          width={4000}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}
