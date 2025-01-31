import {groupList} from "@/assets/cats"
import { ImageSlider } from "@/components/image-slider"
import ImageGroup from "@/components/image-groups"
import { Event } from "@/lib/models"
import { connectToDb } from "@/lib/db"
export default async function Gallery(){
    
    await connectToDb();
    const events = await Event.find();
    // console.log(events);
    
    // Events is array of Individual events
    // information about event : {title : String, images : Array of image links, author : String }

    return(
        <>
        {/* <ImageSlider/> */}
        <h1 className="text-5xl text-center text-green-400 underline m-2 p-2">Gallery</h1>
        <div className="flex justify-center">
        </div>

        {/* Group Div */}
        <div className="px-2 grid grid-cols-2 place-items-center">
            {events.map((event,index)=>(
                <ImageGroup 
                    event={event}
                    key={index}
                />
            ))}
        </div>
        </>
    )
}