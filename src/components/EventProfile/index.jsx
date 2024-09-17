import React from "react";
import { Img } from "../Img";
import { Text } from "../Text";
import { Button } from "../Button";
// import { Button, Text, Img } from "./..";

export default function EventProfile({
  eventTitle = "Delta Winter of Code",
  eventCategory = "DSA",
  eventDescription = (
    <>
      DWOC or Delta Winter of Code is a winter long program
      <br />
      organised to support and improve the culture of open source software around us.{" "}
    </>
  ),
  knowMoreButton = "KNOW MORE",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full`}>
      {/* Container for images */}
      <div className="relative w-full">
        <Img
          src="img_group_7.svg"
          width={368}
          height={6}
          alt="Group Image"
          className="w-full h-auto object-cover relative right-48 top-2 "
        />
        <Img
          src="img_group_7.svg"
          width={368}
          height={6}
          alt="Group Image"
          className="w-full h-auto object-cover relative top-2 scale-y-[-1]"
        />
        <Img
          src="img_event_poster.png"
          width={368}
          height={262}
          alt="Event Poster"
          className="w-full h-auto object-cover mt-[-2px]" // Adjust margin to ensure correct display
        />
      </div>
      {/* Gradient Background Container */}
      <div className="flex flex-col items-center bg-gradient-to-b from-[#08cb87] to-[#223345] p-6 w-full rounded-br-[10px] rounded-bl-[10px] mt-[-1px]">
        <Text size="textmd" as="p" className="text-[23px] font-normal text-white mb-2 text-center">
          {eventTitle}
        </Text>
        <Text size="texts" as="p" className="text-[15px] font-normal text-white mb-2 text-center">
          {eventCategory}
        </Text>
        <Text size="textxs" as="p" className="leading-[14px] text-[13px] w-[90%] font-normal text-white mb-4 text-center">
          {eventDescription}
        </Text>
        <Button shape="round" className="uppercase mt-4">
          {knowMoreButton}
        </Button>
      </div>
    </div>
  );
}
