import EventProfile from "../../components/EventProfile";

import React, { Suspense } from "react";

const projectGrid = [
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
  {
    eventTitle: "Delta Winter of Code",
    eventCategory: "DSA",
    eventDescription: (
      <>
        DWOC or Delta Winter of Code is a winter long program
        <br />
        organised to support and improve the culture of open source software
        around us.{" "}
      </>
    ),
    knowMoreButton: "KNOW MORE",
  },
];
export default function BodySection() {
    return (
      <>
        {/* body section */}
        <div className="mb-[230px] mt-[106px] flex flex-col items-center px-2">
          <div className="max-w-[1238px] gap-y-[84px] gap-[26px] mx-auto grid w-full grid-cols-3 justify-center self-stretch md:grid-cols-3 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {projectGrid.map((d, index) => (
                <EventProfile {...d} key={"contentGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </>
    );
  }