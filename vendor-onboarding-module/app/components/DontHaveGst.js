import Image from "next/image";
import React from "react";

export default function DontHaveGst() {
  return (
    <>
      {/* Container */}
      <div className=" rounded-xl border border-[#D9D9D9]   p-6">
        {/* Heading */}
        <h3 className="text-xl  lg:text-2xl font-semibold mb-2">
          Don&apos;t have a GSTIN
        </h3>
        <p className="text-appText text-md lg:text-lg mb-4">
          Follow the steps below to generate for your online business
        </p>
        {/* Icons Container */}
        <div className="flex flex-col  lg:flex-row items-center justify-between">
          {/* Boxes */}
          <div className="flex my-4 lg:my-0 w-5/10 justify-center items-center mx-1">
            <Image
              src="/Vector1.png"
              alt="Vector1"
              className="size-7 lg:size-9 mr-2"
              width={500}
                  height={500}
            />
            <p className="text-sm  lg:text-md text-appText text-center">
              Register / Login to  www.gst.gov.in
            </p>
          </div>
          <div className="flex my-4 lg:my-0 w-5/10 justify-center items-center mx-1">
            <Image
              src="/Vector2.png"
              alt="Vector2"
              className="size-7 lg:size-9 mr-2"
              width={500}
                  height={500}
            />

            <p className="text-sm  lg:text-md text-appText text-center">
              Fill in GST enrolment  Application Form
            </p>
          </div>
          <div className="flex my-4 lg:my-0 w-5/10 justify-center items-center mx-1">
            <Image
              src="/Vector3.png"
              alt="Vector3"
              className="size-7 lg:size-9 mr-2"
              width={500}
                  height={500}
            />
            <p className="text-sm  lg:text-md text-appText text-left">
              Submit Enrolment  Application
            </p>
          </div>          
        </div>
      </div>
    </>
  );
}
