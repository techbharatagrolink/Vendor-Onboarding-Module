import React from "react";
import FeesAccordion from "./FeesAccordion";
export default function LearnFeesAndCharges(){
    return (
        <>
         <div className=" bg-appLightGreen p-8 pt-5  px-6  ">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-appTextDark">
          Fees And Charges
        </h2>
        {/* Orange Hyphen */}
        <div className="w-15 my-6 h-1.5 bg-appRed"></div>
        <FeesAccordion/>
      </div>
        </>
    )
}