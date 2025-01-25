import { verifyToken } from "@/lib/actions";
import Image from "next/image";
import Card from "@/components/Card";
import { connectToDb } from "@/lib/db";
import { Event } from "@/lib/models";
import Link from "next/link";
import FormComponent from "@/components/FormComponent";
import CoordinatorCard from "@/components/CoordinatorCard";

const coordinators = [
  {
    name: "Abdul SHUBHAN",
    role: "Lead",
    image: "/leads/Subhan.jpeg",
    linkedin: "https://www.linkedin.com/in/abdulsubhan12/",
    github: "#",
  },
  {
    name: "Sahitya Aryan",
    role: "Web Lead",
    image: "/leads/SAHITYA_ARYAN.png",
    linkedin: "https://www.linkedin.com/in/sahityaaryan/",
    github: "#",
  },
  {
    name: "Divyansh Gupta",
    role: "Web Co-Lead",
    image: "/leads/DIVYANSH_GUPTA.jpg",
    linkedin: "https://www.linkedin.com/in/divyansh-gupta-7a71b8250/",
    github: "#",
  },
  {
    name: "Devendra Singh",
    role: "Flutter Lead",
    image: "/leads/FlutterLead.png",
    linkedin:
      "https://www.linkedin.com/in/devendra-singh-ba1917257/github.com/dev04sa",
    github: "#",
  },
  {
    name: "Piyush Singh",
    role: " Flutter Co-Lead",
    image: "/leads/FlutterCoLead.jpeg",
    linkedin: "https://www.linkedin.com/in/piyuush-singh/",
    github: "#",
  },
  {
    name: "Chirag Kumar",
    role: "Kotlin Lead",
    image: "/leads/CHIRAG_KUMAR.jpg",
    linkedin:
      "https://www.linkedin.com/in/chirag-kumar-rai-bbb009271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "#",
  },
  {
    name: "Shiva Singh Begari",
    role: "AI/ML Lead",
    image: "/leads/SHIVA_SINGH_BAGRI.jpg",
    linkedin: "https://www.linkedin.com/in/shiva-singh-bagri-060089174",
    github: "#",
  },
  {
    name: "Govind Singh",
    role: "Blockchain ",
    image: "/leads/GOVIND_SINGH.jpg",
    linkedin: "https://www.linkedin.com/in/govind-singh-a925471a1",
    github: "#",
  },
  {
    name: "Bobbala Maheedhar",
    role: "SigSTP Lead",
    image: "/leads/Bobbala_Maheedhar.jpg",
    linkedin: "https://www.linkedin.com/in/maheedhar-bobbala-9739a1276/",
    github: "#",
  },
];

export default async function Home() {
  await connectToDb();
  const events = await Event.find();

  const upcomingEvents = events.filter((event) => event.eventDate > new Date());
  return (
    <main className="flex flex-col gap-4 px-4 sm:px-8 lg:px-0">
      <div className="flex flex-col w-full max-w-[1266px] mx-auto items-center space-y-10 py-8">
        <div className="relative flex flex-col items-center w-full min-h-full">
          <div>
            <Image
              src={"/staticAssets/svgs/Vector.svg"}
              alt="vector"
              width={643}
              height={365.87}
              className="w-[90%] max-w-[643px] h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 md:top-[-180px] md:left-[450px] blur-3xl"
            />
          </div>

          {/* Section 01 */}
          <div className="relative flex flex-col md:flex-row w-full max-w-[1266px] items-center justify-between text-white mt-5 px-4">
            <div className="mx-auto space-y-4">
              <div className="relative flex flex-col md:flex-row justify-between items-center gap-5 space-y-3 leading-10">
                {/* Left side */}
                <div className="flex flex-col space-y-2 text-center md:text-left">
                  <h1 className="font-normal text-[38px] font-loader">
                    WE ARE
                  </h1>
                  <span className="text-[#00FFC3] text-[48px] md:ml-16 font-normal mb-7">
                    HACKSLASH
                  </span>
                  <div>
                    <p className="w-full max-w-[480px] text-[25px]">
                      A Community that aims to provide a forum to nurture coding
                      and development skills, and help each other grow because
                      working together has immense power.
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <Link href={"https://www.linkedin.com/company/hackslash/"}>
                      <button className="text-black bg-green-400 p-4 font-semibold rounded-[8px] w-[148px] h-[44px] flex justify-center items-center hover:bg-green-400 cursor-pointer transition-all duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right side */}
                <div>
                  <Image
                    src={"/staticAssets/svgs/laptop.svg"}
                    alt="laptop"
                    width={700}
                    height={700}
                    className=" w-full md:mx-20 mx-0 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 02 */}
        <div className="relative flex flex-col items-center w-full max-w-[1266px] text-white justify-between mt-28 space-y-8 mb-60 px-4">
          <Image
            src={"/staticAssets/svgs/circle1.svg"}
            alt="circle1"
            height={74.42}
            width={107}
            className="w-[107px] h-[74.42px] absolute top-[20px] left-0 blur-3xl"
          />
          <Image
            src={"/staticAssets/svgs/circle2.svg"}
            alt="circle2"
            height={74.42}
            width={107}
            className="w-[107px] h-[74.42px] absolute top-[21px] right-0 blur-3xl"
          />

          <div>
            <Link href={"https://www.linkedin.com/company/hackslash/"}>
              <h2 className="uppercase text-white font-bold text-6xl text-center">
                ABOUT US
              </h2>
            </Link>
          </div>

          <div className="relative flex flex-col md:flex-row w-full max-w-[1266px] items-center mt-10">
            {/* Left part */}
            <div className="w-full md:w-1/2">
              <Image
                src={"/staticAssets/svgs/frame_abhout.svg"}
                alt="frame about"
                height={342}
                width={512}
                className="w-full h-auto"
              />
            </div>

            {/* Right part */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <div className="w-full max-w-[550px]">
                <p className="text-[24px] font-light">
                  HackSlash Developer Club is a community of NIT Patna that was
                  created with the sole purpose of bringing people with similar
                  interests in technology together where they can begin and
                  master their coding and development skills. The club strives
                  to build and improve the open-sourcing environment and the
                  coding culture. It provides a platform where you get to work
                  on collaborative projects and help each other grow as a team.
                </p>
              </div>

              <div className="flex flex-row md:gap-20 gap-10  md:mt-8 mt-6">
                <div className="flex flex-col items-center">
                  <div className="md:text-4xl text-3xl font-semibold">100+</div>
                  <div className="md:text-xl text-lg font-light uppercase">
                    members
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="md:text-4xl text-3xl font-semibold">10+</div>
                  <div className="md:text-xl text-lg font-light uppercase">
                    EVENTS
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="md:text-4xl text-3xl font-semibold">7+</div>
                  <div className="md:text-xl  text-lg font-light uppercase">
                    domains
                  </div>
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
        <div className="px-12">
          {upcomingEvents.length > 0 && (
            <h2 className="text-3xl md:text-5xl font-medium text-center text-white my-8 md:my-16">
              Upcoming Events
            </h2>
          )}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {upcomingEvents.length > 0 &&
              upcomingEvents.slice(0, 3).map((event) => (
                <div
                  key={event._id}
                  className="rounded-sm overflow-hidden transform h-auto w-full sm:w-[48%] lg:w-[30%]"
                >
                  <img
                    src={
                      event.images[0] || "https://via.placeholder.com/400x200"
                    }
                    alt={event.title}
                    className="w-full h-40 sm:h-56 object-cover border-t-4 border-primary"
                  />

                  <div className="py-2 px-4 md:px-6 bg-secondary rounded-b-md hover:bg-green-400 transition-all duration-300">
                    <h1 className="text-xl md:text-2xl font-medium text-white mb-1">
                      {event.title}
                    </h1>
                    <div className="text-white text-sm">
                      {event.desc.length > 250
                        ? `${event.desc.slice(0, 250)}...`
                        : event.desc}
                    </div>
                    <div className="flex justify-center">
                      <Link href={`/events/${event._id}`}>
                        <button className="w-auto bg-transparent text-white border mb-5 mt-7 rounded-lg text-sm py-1.5 px-10 md:px-14">
                          SESSION DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/*Coordinators Section*/}
      <div className="bg-black min-h-screen flex flex-col items-center">
        <h1 className="text-white text-6xl font-bold mb-12">OFFICE BEARERS</h1>
        <div className="grid gap-10 sm:gap-40 mt-10 sm:mt-20">
          {/* First Row: 1-2 Cards on Mobile, 2 Cards on Larger Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 justify-center">
            {coordinators.slice(0, 2).map((coordinator, index) => (
              <CoordinatorCard key={index} {...coordinator} />
            ))}
          </div>

          {/* Subsequent Rows: 2 Columns on Mobile, 4 Columns on Larger Screens */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-5 sm:gap-x-11 gap-y-20 sm:gap-y-40 justify-center">
            {coordinators.slice(2).map((coordinator, index) => (
              <CoordinatorCard key={index + 2} {...coordinator} />
            ))}
          </div>
        </div>
      </div>

      {/* Section 04 */}
      <div className="w-11/12 mx-auto border-t border-gray-700 mt-20 "></div>
      <div id="getInTouch">
        <div className=" relative flex flex-col w-full max-w-[1266px] mx-auto items-center  ">
          <Image
            src={"/staticAssets/svgs/Vector.svg"}
            alt="circle1"
            height={100}
            width={100}
            className="w-[200px] h-[200px] absolute top-[350px] left-[-90px] blur-3xl "
          />
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-20 bg-black min-h-screen p-8">
            {/* Left Side - Form */}
            <div className="md:w-1/2 text-white ">
              <h1 className="text-6xl text-[#00FFC3] font-normal">
                Get in touch
              </h1>
              <p className="text-2xl ">We are here for you! How can we help?</p>

              <FormComponent />

              {/* <form className="space-y-5 my-10" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-lg">
                    Name
                  </label>
                  <input
                  name="name"
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-transparent border border-[#ffffff] rounded-md text-white focus:outline-none ]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-lg">
                    Email
                  </label>
                  <input
                  name="email"
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-transparent border border-[#ffffff] rounded-md text-white focus:outline-none "
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-lg">
                    Message
                  </label>
                  <textarea
                  name="message"
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
              </form> */}
            </div>

            {/* Right Side - Image */}
            <div className="md:block md:w-1/2 p-5">
              <Image
                src="/staticAssets/images/group.png" // Path to the image in the public folder
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
