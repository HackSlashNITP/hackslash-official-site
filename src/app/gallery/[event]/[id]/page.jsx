import { groupList } from "@/assets/cats";
import Image from "next/image";
import { notFound } from "next/navigation";
export default function Event({params}){
    
    const title=params.event.replaceAll("%20"," ")
    const index=groupList.filter(group=>group.title===title)
    if(!index){
        notFound()
    }
    
    const group=index[0]
    if(parseInt(params.id)>=group.src.length){
        notFound()
    }
    

    return(
        <>
        <div className="flex justify-center items-center h-[100vh]">
            <Image
            src={group.src[parseInt(params.id)]}
            alt={`${title}`}
            className="h-[70vh] w-auto object-contain"
            />
        </div>
        </>
    )
}