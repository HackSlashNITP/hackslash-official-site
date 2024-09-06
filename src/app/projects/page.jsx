import React from 'react'
// import { SelectBox, Img, Text } from "../../components";
import BodySection from "./BodySection";
import { Text } from '@/components/Text';
import { SelectBox } from '@/components/SelectBox';
import { Img } from '@/components/Img';

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Projects = () => {
  return (
    <div className="py-[26px] w-full bg-black-900 sm:py-5">
      {/* Hero Banner Section */}
      <div className="relative bg-cover bg-no-repeat bg-center h-[400px] md:h-[300px] bg-[url(/images/img_hero_banner_bg.png)]">
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-black-900">
          <Text
            size="textxl"
            as="p"
            className="text-[280px] md:text-[220px] font-normal text-white-a700 text-center leading-tight"
          >
            Projects_
          </Text>
        </div>
      </div>

      {/* SelectBox Section */}
      <div className="flex flex-col items-end mt-6">
        <SelectBox
          shape="square"
          indicator={
            <Img
              src="img_plus.svg"
              width={20}
              height={14}
              alt="Plus"
              className="h-[14px] w-[20px]"
            />
          }
          name="Category Selector"
          placeholder={"Categories"}
          options={dropDownOptions}
          className="mr-[60px] w-[20%] gap-4 border-b border-solid border-white-a700_01 md:mr-0"
        />
      </div>

      {/* Body Section */}
      <div className="mt-8">
        <BodySection />
      </div>
    </div>
  );
}

export default Projects