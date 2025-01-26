import { connectToDb } from "@/lib/db";
import React from "react";
import { Event } from "@/lib/models";
import Link from "next/link";

const EventsPage = async () => {
  await connectToDb();
  const events = await Event.find();

  const upcomingEvents = events.filter((event) => event.eventDate > new Date());
  const pastEvents = events.filter((event) => event.eventDate <= new Date());

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Event Title */}
      <section className="relative h-screen bg-cover bg-center bg-[url('/staticAssets/images/bg.png')]">
        <h1 className="xl:text-9xl md:text-7xl text-5xl text-white text-center pt-60 font-bold bg-gradient-to-r from-green-300 to-lime-300 tracking-wider neon-green-text bg-clip-text">
          &lt;EVENT&gt;
        </h1>
      </section>

      <section
        className="flex flex-col items-center noScrollbar"
        style={{
          // background: 'url("/staticAssets/images/events-bg.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="py-6 w-full">
            <h2 className="text-5xl font-medium text-center text-white my-16">
              Upcoming Events
            </h2>
            <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8 lg:px-40">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div
                    key={event._id}
                    className="rounded-sm overflow-hidden transform h-auto my-8 w-full md:w-[45%] lg:w-[30%]"
                  >
                    {/* Event Image */}
                    <img
                      src={
                        event.images[0] || "https://via.placeholder.com/400x200"
                      }
                      alt={event.title}
                      className="w-full h-56 object-cover border-t-4 border-primary"
                    />

                    <div className="py-2 px-4 md:px-6 bg-secondary rounded-b-md hover:bg-green-400 transition-all duration-300">
                      {/* Event Title */}
                      <h1 className="text-xl md:text-2xl font-medium text-white mb-1">
                        {event.title}
                      </h1>

                      {/* Event Description */}
                      <div
                        className="text-white text-sm"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            event.desc.length > 250
                              ? `${event.desc.slice(0, 250)}...`
                              : event.desc
                          ),
                        }}
                      />
                      {/* Session Details Button */}
                      <div className="flex justify-center">
                        <Link href={`/events/${event._id}`}>
                          <button className="w-auto bg-transparent text-white border mb-5 mt-7 rounded-lg text-sm py-1.5 px-8 md:px-14">
                            SESSION DETAILS
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-white text-center text-lg w-full">
                  No upcoming events available
                </h1>
              )}
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-5xl font-medium text-center text-white my-16">
              Past Events
            </h2>
            <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8 lg:px-40">
              {pastEvents.length > 0 ? (
                pastEvents.map((event) => (
                  <div
                    key={event._id}
                    className="rounded-sm overflow-hidden transform h-auto my-8 w-full md:w-[45%] lg:w-[30%]"
                  >
                    {/* Event Image */}
                    <img
                      src={
                        event.images[0] || "https://via.placeholder.com/400x200"
                      }
                      alt={event.title}
                      className="w-full h-56 object-cover border-t-4 border-primary"
                    />

                    <div className="py-2 px-4 md:px-8 bg-secondary rounded-b-md hover:bg-green-400 transition-all duration-300">
                      {/* Event Title */}
                      <h1 className="text-xl md:text-2xl font-medium text-white mb-1">
                        {event.title}
                      </h1>

                      {/* Event Description */}
                      <div
                        className="text-white text-sm"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            event.desc.length > 250
                              ? `${event.desc.slice(0, 250)}...`
                              : event.desc
                          ),
                        }}
                      />

                      {/* Session Details Button */}
                      <div className="flex justify-center">
                        <Link href={`/events/${event._id}`}>
                          <button className="w-auto bg-transparent text-white border mb-5 mt-7 rounded-lg text-sm py-1.5 px-8 md:px-14">
                            SESSION DETAILS
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-white text-lg text-center w-full">
                  No past events available
                </h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;