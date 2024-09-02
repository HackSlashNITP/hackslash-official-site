import Link from "next/link";
import Image from "next/image";
export default function ImageGroup(prop){
    const group=prop.Group
    return(
        <>
        <div className="bg-gradient-to-b from-[rgba(52,52,52,0.9)] to-[rgba(52,52,52,0.4)] rounded-md p-5 max-lg:p-2 w-[35vw] max-h-[47vh] max-lg:w-[40vw] max-lg:max-h-[36vh] flex justify-center items-center flex-col m-2 border-[1px] border-[#9C9C9C]">
            <h1 className="py-1 font-bold text-3xl m-2 max-lg:mb-1 max-lg:text-lg">{group.title}</h1>
            <div className="grid grid-cols-2 place-items-center gap-y-[1.5vh] gap-x-[1.5vh] columns-sm max-h-[38vh] max-lg:max-h-[25vh] ">
                {group.src.length>=1 &&<Image
                src={group.src[0]}
                alt={`${group.title}'s Image`}
                className="object-cover h-[16vh]  max-lg:h-[11vh] max-lg:w-[18vw] rounded-md"
                />}
                {group.src.length>=2 &&<Image
                src={group.src[1]}
                alt={`${group.title}'s Image`}
                className="object-cover h-[16vh]  max-lg:h-[11vh] max-lg:w-[18vw] rounded-md"
                />}
                {group.src.length>=3 &&<Image
                src={group.src[2]}
                alt={`${group.title}'s Image`}
                className="object-cover h-[16vh]  max-lg:h-[11vh] max-lg:w-[18vw] rounded-md"
                />}
                {group.src.length==4 &&<Image
                src={group.src[3]}
                alt={`${group.title}'s Image`}
                className="object-cover h-[16vh]  max-lg:h-[11vh] max-lg:w-[18vw] rounded-md"
                />}
                {group.src.length>4 && <div className="grid place-items-center h-full w-full border-[1px] border-[#9C9C9C] rounded-md bg-gradient-to-b from-[rgba(52,52,52,0.9)] to-[rgba(52,52,52,0.4)]" >
                    <h1 className="text-5xl font-semibold max-lg:text-3xl">+{group.src.length-3}</h1>
                </div>}
            </div>
            <div className="mt-4 max-lg:mt-1">
               <Link href={`/gallery/${group.title}`} className="text-xl font-semibold bg-green-500 text-slate-950 px-4 py-1 rounded-md">Explore</Link>
            </div>
        </div>
        </>
    )
}
