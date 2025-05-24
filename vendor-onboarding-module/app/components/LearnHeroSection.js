import Image from "next/image";
import React from "react";
import PageIdentifier from "./PageIdentifier";
import PageHeading from "./PageHeading";

export default function LearnHeroSection() {
  return (
    <>
      <div className=" px-6 md:px-16">

        {/* BreadCrumb */}
        <PageIdentifier pageName={"Learn"}/>


        
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16  bg-white">
          {/* Left Text Content */}

          <div className="md:w-1/2 text-center md:text-left z-10">
            <PageHeading heading={"Frequently Asked Questions"} />
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/LearnImage.png"
              alt="Family selling products"
              width={350}
              height={350}
              className="object-contain z-0"
              //    priority
            />
          </div>
        </section>
      </div>
    </>
  );
}
