import Image from "next/image";
import React from "react";
import PageIdentifier from "./PageIdentifier";
import PageHeading from "./PageHeading";

export default function GrowSectionHero() {
  return (
    <>
      <div className=" px-6 md:px-16">

        {/* BreadCrumb */}
         <div className="relative z-20">
          <PageIdentifier pageName={"Grow"}/>
        </div>


        
        <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-16 justify-between bg-white mt-2">
          {/* Left Text Content */}

          <div className="md:w-1/2 text-center md:text-left z-10">
            <PageHeading heading={"Supercharge your business with industry-leading tools services"} />
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:-mt-12">
            <Image
              src="/GrowImage.png"
              alt="Family selling products"
              width={400}
              height={400}
              className="object-cover z-0"
              //    priority
            />
          </div>
        </section>
      </div>
    </>
  );
}
