import { connectToDb } from "@/lib/db";
import { Event } from "@/lib/models";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { ImageSlider } from "@/components/image-slider";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import { format } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { redirect } from "next/navigation";

const SingleEvent = async ({ params }) => {
  const { id } = params;

  await connectToDb();
  let event = null;
  try {
    event = await Event.findById(id);
  }catch (err) {
    redirect('/events');
  }

  if (!event) {
    return <h1 className="text-lg">No such event exists</h1>;
  }

  const formattedDate = format(new Date(event.eventDate), "do MMMM yyyy");
  const eventDate = new Date("2023-09-20T15:00:00.000+00:00");
  const formattedTime = format(eventDate, "h a");

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-4 text-white">
      <div className="w-full p-4 sm:p-8 flex flex-col justify-center items-center">

        {/* Image Slider */}
        <div className="w-4/6 rounded-none h-4/6 mb-4 sm:mb-6 ">
          {event.images && event.images.length > 0 && (
            <ImageSlider images={event.images} />
          )}
        </div>

        {/* Event Title */}
        <h1 className="uppercase text-2xl sm:text-3xl font-medium mb-10 mt-6 text-white">{event.title}</h1>

        <div className="px-28 ">
        {/* Event Description */}
        <div
          className=" mb-4 sm:mb-6 text-gray-300 text-base sm:text-xl leading-relaxed py-2 "
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.desc) }}
        />

<div className="flex flex-row pt-20">
  {/* Main Column */}
  <div className="w-full flex flex-col justify-between items-start gap-4 sm:gap-6">
    {/* Location */}
    <div className="flex items-center gap-3">
      <LocationOnIcon className="text-base sm:text-2xl" />
      <p className="text-base sm:text-2xl">{event.location}</p>
    </div>

    {/* Date */}
    <div className="flex items-center gap-3">
      <CalendarMonthIcon className="text-base sm:text-2xl" />
      <p className="text-base sm:text-2xl">{formattedDate}</p>
    </div>

    {/* Time */}
    <div className="flex items-center gap-3">
      <AccessTimeIcon className="text-base sm:text-2xl" />
      <p className="text-base sm:text-2xl">{formattedTime}</p>
    </div>
  </div>
  
  {event.eventDate > new Date() && (
    <div className=" flex items-center w-1 h-auto bg-white mx-10  sm:mr-12 md:mr-20 lg:mr-28 xl:mr-60 neon-glow"></div>
  )}

  {/* Registration Link */}
  {event.eventDate > new Date() && (
    <div className="flex flex-row items-start gap-2 ">
      <LinkIcon className="text-base sm:text-2xl mt-1" />
      <a
        href={event.registrationLink}
        className="text-lg sm:text-2xl text-blue-500 underline hover:text-blue-700"
      >
        {event.registrationLink}
      </a>
    </div>
  )}
</div>


        </div>
        
      </div>
    </div>
  );
};

export default SingleEvent;
