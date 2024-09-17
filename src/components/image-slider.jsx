'use client'
import React,{useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export const ImageSlider = ({ images }) => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
  };

  return (
    <div className="w-full h-full rounded-md">
      <div>
        <Slider ref={slider} {...settings}>
          {images.map((image, index) => (
            <div className="flex justify-center items-center" key={index}>
              <Image
                alt={`Image ${index + 1}`}
                src={image}
                width={1200} 
                height={600} 
                className="h-[50vh] sm:h-[60vh] md:h-[70vh] w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
