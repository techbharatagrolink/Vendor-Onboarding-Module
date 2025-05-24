import Image from "next/image";
import React from "react";
import PageIdentifier from "./PageIdentifier";
import PageHeading from "./PageHeading";

export default function LearnHeroSection() {
  return (
    <>
      <div className="relative px-6 md:px-16">
        {/* BreadCrumb - now positioned absolutely */}
        <div className="relative z-20">
          <PageIdentifier pageName={"Learn"}/>
        </div>
        
        <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-16 justify-between bg-white mt-2">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-center md:text-left z-10">
            <PageHeading heading={"Frequently Asked Questions"} />
          </div>

          {/* Right Image - adjusted to stick to top */}
          <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:-mt-12">
            <Image
              src="/LearnImage.png"
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