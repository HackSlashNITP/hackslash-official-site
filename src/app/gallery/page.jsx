import { ImageSlider } from "@/components/image-slider"
import ImageGroup from "@/components/image-groups"
import { Event } from "@/lib/models"
import { connectToDb } from "@/lib/db"

// 1. Force dynamic to ensure the gallery updates when you add new events
export const dynamic = 'force-dynamic';

// 2. This must be an async function (Server Component)
export default async function Gallery() {
    
    // Connect to DB
    await connectToDb();
    
    // Fetch data optimized with .lean()
    const rawEvents = await Event.find({}).sort({ createdAt: -1 }).lean();

    // Serialize: Convert weird DB objects to simple strings
    const events = rawEvents.map((event) => ({
        ...event,
        _id: event._id.toString(),
        createdAt: event.createdAt?.toISOString(),
        updatedAt: event.updatedAt?.toISOString(),
        eventDate: event.eventDate?.toISOString(),
        images: event.images || []
    }));

    // Logic: Get one image from each event for the slider
    const sliderImages = events
        .map(event => event.images?.[0]) 
        .filter(img => img); 

    return(
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-5xl text-center text-green-400 underline mb-8 font-bold mt-4">
                Gallery
            </h1>

            {/* Slider Section */}
            {sliderImages.length > 0 && (
                <div className="mb-12 w-full max-w-5xl mx-auto px-2">
                    <ImageSlider images={sliderImages} autoSlide={true} />
                </div>
            )}

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                {events.map((event)=>(
                    <ImageGroup 
                        event={event}
                        key={event._id}
                    />
                ))}
            </div>
            
            {events.length === 0 && (
                <p className="text-center text-gray-500 mt-10">No events found.</p>
            )}
        </div>
    )
}