import Image from "next/image";
import React from "react";

export default function AssuredBadge() {
  return (
    <>
      <div className=" my-5   xl:mt-2  w-[95%] mx-auto   ">
        <div className="flex flex-col-reverse xl:h-full xl:flex-row justify-center items-center lg:justify-end ">
          <div className="w-full  h-1/3 xl:w-7/10 lg:h-full flex flex-col justify-center mx-2  lg:p-2">
            {/* Heading */}
            <h2 className="text-2xl xl:text-3xl mb-0 xl:mb-2 font-semibold  text-appTextDark">
              Assured Badge
            </h2>
            {/* Orange Hyphen */}
            <div className="w-15 my-3 h-1.5 bg-appRed"></div>
            <p className="text-appText mb-4">
              Grow Your Sales & Build Trust with Bharat Agrolink Stand out from
              the competition and connect with buyers who value quality and
              reliability. At Bharat Agrolink, we’re committed to helping
              sellers grow faster by showcasing trusted, farmer-focused
              products.
            </p>

            {/* Green Ticks */}
            <div className="text-md md:text-lg text-appText">
              <div className="flex items-center my-4">
                <Image
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 "
                  width={500}
                  height={500}
                />
                <p className="text-appText text-sm xl:text-md">
                  Increased visibility for your products
                </p>
              </div>
              <div className="flex items-center my-4">
                <Image
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5"
                  width={500}
                  height={500}
                />
                <p className="text-appText text-sm xl:text-md">
                  Quality checks
                </p>
              </div>
              <div className="flex items-center my-4">
                <Image
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 "
                  width={500}
                  height={500}
                />
                <p className="text-appText text-sm xl:text-md">
                  Faster delivery
                </p>
              </div>
              
              <h1 className="text-appTextDark font-bold text-md sm:text-lg lg:text-xl">
                The Assured badge can be gained by ensuring minimum quality and
                service standards defined for Assured
              </h1>
            </div>

            {/* Know More Tagline */}
            {/* <p className="text-appText my-1">
              <span className=" underline text-appRed">Know More</span> about
              Fees & Commission.
            </p> */}
          </div>

          {/* Image */}
          <div
            //   className="w-5/10 h-full xl:h-6/10   sm:w-6/10 md:w-2/3 lg:w-1/2 flex"
            className="w-2/3   xl:h-6/10 flex sm:h-1/3  sm:w-3/10 mx-5 mb-10"
          >
            <Image
              src="/iphone2.png"
              alt="product Image"
              width={900}
              height={900}
              className="object-contain h-full  w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
