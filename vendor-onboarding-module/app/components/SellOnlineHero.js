import Image from "next/image";
import React from "react";
import PageIdentifier from "./PageIdentifier";
import PageHeading from "./PageHeading";

export default function SellOnlineHero() {
  return (
    <>
      <div className=" px-6 md:px-16">

        {/* BreadCrumb */}
        <PageIdentifier pageName={"Sell Online"}/>


        
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16  bg-white">
          {/* Left Text Content */}

          <div className="md:w-1/2 text-center md:text-left z-10">
            <PageHeading heading={"Sell Online with Bharat AgroLink"} />
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/SellOnline.jpg"
              alt="Family selling products"
              width={500}
              height={500}
              className="object-contain z-0"
              //    priority
            />
          </div>
        </section>
      </div>
    </>
  );
}
