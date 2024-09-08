
"use client"
import Image from "next/image";
import { groupList } from "@/assets/cats";
import { notFound } from "next/navigation";
import Modal from "@/components/modal";

export default function PhotoModal({params}) {
        
        const title=params.event.replaceAll("%20"," ")
        const index=groupList.filter(group=>group.title===title)
        if(!index){
            notFound()
        }
        
        const group=index[0]
        if(parseInt(params.id)>=group.src.length){
            notFound()
        }

  return (
    <Modal>
      <div className="flex-row justify-center items-center h-[75vh] w-max">
        <div>
          <div className="  bg-green-100  flex justify-end">
            <button
              className="text-slate-800 text-3xl font-bold bg-[#00ff9d] relative  p-5 "
              onClick={() => {
                history.go(-1)
              }}
            >
              X
            </button>
          </div>
        </div>
      <Image
        src={group.src[parseInt(params.id)]}
        alt={`${title}`}
        className="h-[70vh] w-auto object-contain"
      />
      </div>
    </Modal>
  );
}