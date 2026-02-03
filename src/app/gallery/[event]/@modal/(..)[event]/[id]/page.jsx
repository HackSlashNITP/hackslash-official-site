"use client";
import Image from "next/image";
import { groupList } from "@/assets/cats"; // Keeping your local data
import { notFound, useRouter } from "next/navigation";
import Modal from "@/components/modal";

export default function PhotoModal({ params }) {
  const router = useRouter();

  const title = decodeURIComponent(params.event);
  
  const group = groupList.find((g) => g.title === title);
  
  if (!group) {
    notFound();
  }

  const imageIndex = parseInt(params.id);
  const imageSrc = group.src[imageIndex];

  if (!imageSrc) {
    notFound();
  }

  return (
    <Modal>
      {/* Container: Full viewport height, centered content, dark background */}
      <div className="relative w-full h-[85vh] flex items-center justify-center bg-black/90 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
        
        {/* 1. Modern Floating Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-200 group border border-white/10"
          title="Close"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-6 h-6 group-hover:scale-110 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 2. Optimized Image Display */}
        <div className="relative w-full h-full p-2">
          <Image
            src={imageSrc}
            alt={`${title} - Image ${imageIndex + 1}`}
            fill
            className="object-contain" 
            sizes="90vw"
            priority 
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
          <h2 className="text-white text-lg font-medium text-center opacity-90 tracking-wide">
            {title}
          </h2>
        </div>

      </div>
    </Modal>
  );
}