import { groupList } from "@/assets/cats";
import { Event } from "@/lib/models";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function EventPage({params}){
    const event = await Event.findById(params.event)
    
    // const index=groupList.filter(group=>group.title===title)
    // if(!index){
    //     notFound()
    // }
    // const group=index[0]

    return(
        <>
        <div className="grid place-items-center">
            <h1 className="text-center text-3xl bg-gradient-to-b from-[rgba(52,52,52,0.9)] to-[rgba(52,52,52,0.4)] inline-block px-4 py-2 rounded-lg border-[1px] border-[#9C9C9C] m-2">{event.title}</h1>
        </div>

        <div className="grid place-items-center">
            <h1 className="text-center text-xl bg-gradient-to-b from-[rgba(52,52,52,0.9)] to-[rgba(52,52,52,0.4)] inline-block px-4 py-2 rounded-lg border-[1px] border-[#9C9C9C] m-2">Photos</h1>
        </div>

        <div className="grid grid-cols-5 max-lg:grid-cols-2 gap-2">
        {event.images.map((image,index)=>(
            <Link
                href={image}
                key={index}>
                <div 
                className="bg-gradient-to-b from-[rgba(52,52,52,0.9)] to-[rgba(52,52,52,0.4)] p-1 rounded-md ">
                <Image 
                    height={300}
                    width={800}
                    src={image}
                    alt={'img'}
                    key={index}
                    className="h-[300px] w-[800px] max-lg:h-auto object-cover rounded-sm"   
                />  

                </div>
                
            </Link>
            
        ))}
        </div>
        </>
    )
}