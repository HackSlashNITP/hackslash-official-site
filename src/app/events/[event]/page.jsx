import { connectToDb } from "@/lib/db";
import { Event } from "@/lib/models";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";
import { ImageSlider } from "@/components/image-slider";

const SingleEvent = async ({ params }) => {
  const { event } = params;
  await connectToDb();
  const eachEvent = await Event.findById(event).populate({path:"author",select:"username"});

  if (!eachEvent) {
    return <h1>No such Event exists</h1>;
  }

  return (
    <section className="flex flex-col items-center justify-center p-4 md:p-8 text-white">
      <div className="w-full md:w-[90%] lg:w-[75%] bg-gray-900 p-4 sm:p-8 rounded-lg">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">{eachEvent.title}</h1>

        {/* Host Name*/}
        <p className="text-gray-400 text-xs sm:text-sm mb-2">
          Hosted by <span className="text-white">{eachEvent.author.username}</span> on{" "}
          {moment(eachEvent.eventDate).format("MMMM Do YYYY")}
        </p>

        {/* Image */}
        <div className="max-w-full mb-4 sm:mb-6">
          {eachEvent.images && eachEvent.images.length > 0 && (
            <ImageSlider images={eachEvent.images} />
          )}
        </div>

        {/* Description */}
        <div
          className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(eachEvent.desc) }}
        />

        {/* Footer */}
        <footer className="text-gray-500 text-xs sm:text-sm mt-6">
          <p>Event Date: {moment(eachEvent.eventDate).format("MMMM Do YYYY")}</p>
        </footer>
      </div>
    </section>
  );
};

export default SingleEvent;
