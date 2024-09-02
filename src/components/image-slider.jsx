"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "@/assets/cats";
import Image from "next/image";

export const ImageSlider = () => {
    const slider = React.useRef(null);




  const settings = {
    dots: true,
    adaptiveHeight: false,
    autoplay:true,

    
  };
  return (
    
    <div className="w-[90vw]  h-[80vh] max-lg:h-auto rounded-md m-auto">
    <div className="image-slider-container">
      
        <Slider ref={slider} {...settings}>
            {Carousel.src.map((image,index)=>(
                <div className="flex justify-center items-center" key={index}>
                    <Image 
                        alt="Image"
                        src={image}
                        className="max-md:h-[35vh] h-[70vh] w-[90vw]  object-cover rounded-xl"
                    />
                </div>
            ))}
        </Slider>
        
    </div>
    </div>
    
  );
};