import {groupList} from "@/assets/cats"
import { ImageSlider } from "@/components/image-slider"
import ImageGroup from "@/components/image-groups"
export default function Gallery(){
    return(
        <>
        <ImageSlider/>
        <h1 className="text-5xl text-center text-green-400 underline m-2 p-2">Inspiration Hub</h1>
        <div className="flex justify-center">
        <h3 className="text-center text-xl bg-gradient-to-b from-[rgba(52,52,52,0.9)] to-[rgba(52,52,52,0.4)] inline-block px-4 py-2 rounded-lg border-[1px] border-[#9C9C9C]">2024</h3>

        </div>

        {/* Group Div */}
        <div className="px-2 grid grid-cols-2 place-items-center">
            {groupList.map((group,index)=>(
                <ImageGroup 
                    Group={group}
                    key={index}
                />
            ))}
        </div>
        </>
    )
}