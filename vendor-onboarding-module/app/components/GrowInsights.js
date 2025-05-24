import React from "react";
export default function GrowInsights() {
  return (
    <>
      <div className="flex flex-col justify-center w-[95%] mx-auto  bg-appLightGreen  pt-2 my-4 px-6  ">
        {/* Heading */}
        <h2 className="text-2xl xl:text-3xl my-3 xl:mb-2 font-semibold  text-appTextDark">
              Insights & Tools
            </h2>
            {/* Orange Hyphen */}
            <div className="w-15 my-3 h-1.5 bg-appRed"></div>

        {/* First Content */}
        <div className="mb-6 ">
          <h2 className="text-appTextDark text-md font-semibold md:text-lg lg:text-xl my-5">
            Seller Dashboard Tools
          </h2>
          <p className="text-appText mb-2 text-md md:text-lg ">
            The Bharat Agrolink Seller dashboard is specifically designed with sellers in mind. It offers a range of features and tools to provide valuable business insights at your fingertips, enabling faster data-driven decision-making and simplified account management. With the seller dashboard, you have easy access to the resources you need to effectively manage and grow your business on Bharat Agrolink.
          </p>
          {/* <p className="text-md md:text-lg text-appText">
            *for selling in all categories except for seeds
          </p>
          <p className="text-md md:text-lg text-appText">
            **for selling under seeds category
          </p> */}
        </div>
      </div>
    </>
  );
}
