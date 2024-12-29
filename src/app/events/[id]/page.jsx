import { connectToDb } from "@/lib/db";
import { Event } from "@/lib/models";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { ImageSlider } from "@/components/image-slider";

const SingleEvent = async ({ params }) => {
  const { id } = params;

  await connectToDb();
  const event = await Event.findById(id);

  if (!event) {
    return <h1>No such event exists</h1>;
  }

  return (
    <section className="flex flex-col items-center justify-center p-4 md:p-8 text-white">
      <div className="w-full md:w-[90%] lg:w-[75%] bg-gray-900 p-4 sm:p-8 rounded-lg">
        {/* Event Title */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">{event.title}</h1>

        {/* Image Slider */}
        <div className="max-w-full mb-4 sm:mb-6">
          {event.images && event.images.length > 0 && (
            <ImageSlider images={event.images} />
          )}
        </div>

        {/* Event Description */}
        <div
          className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.desc) }}
        />

      </div>
    </section>
  );
};

export default SingleEvent;
