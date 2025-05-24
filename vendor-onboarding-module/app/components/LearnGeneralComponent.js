import React from "react";
import Accordion from "./GeneralAccordion";
import GeneralAccordion from "./GeneralAccordion";
export default function LearnGeneral() {
  return (
    <>
      <div className=" p-8 pt-2 mb-4 px-6  ">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-appTextDark">
          General
        </h2>
        {/* Orange Hyphen */}
        <div className="w-15 my-6 h-1.5 bg-appRed"></div>
        <GeneralAccordion/>
      </div>
    </>
  );
}
