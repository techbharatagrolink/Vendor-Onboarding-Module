import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <>
    {/* Container */}
      <div className="w-[90%]  mx-auto z-20 bg-white rounded-md shadow-card p-2 md:p-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 md:gap-8">

        {/* Feature Boxes */}
        <div className="featureItems flex flex-col justify-center items-center p-2 text-center h-full w-auto ">
          <Image src="/Feature1.png" className="size-8" alt="Feature 1" width={500}
                  height={500} />
          <h1 className="text-appText  text-lg md:text-xl mx-auto my-2 ">
            {/* 7* days secure & regular payments */}
            Reach More Customers
          </h1>
        </div>
        <div className="featureItems flex flex-col justify-center items-center p-2 text-center h-full w-auto">
          <Image src="/Feature2.png" className="size-8" alt="Feature 2" width={500}
                  height={500} />
          <h1 className="text-appText text-lg mx-auto my-1 ">
            7* days secure & regular payments
          </h1>
        </div>
        <div className="featureItems flex flex-col justify-center items-center p-2 text-center h-full w-auto">
          <Image src="/Feature3.png" className="size-8" alt="Feature 3" width={500}
                  height={500} />
          <h1 className="text-appText text-lg mx-auto my-1 ">
            Low cost of doing business
          </h1>
        </div>
        <div className="featureItems flex flex-col justify-center items-center p-2 text-center h-full w-auto">
          <Image src="/Feature4.png" className="size-8" alt="Feature 4" width={500}
                  height={500} />
          <h1 className="text-appText text-lg mx-auto my-1 ">
            One click Seller Support
          </h1>
        </div>
        <div className="featureItems flex flex-col justify-center items-center p-2 text-center h-full w-auto">
          <Image src="/Feature5.png" className="size-8" alt="Feature 5" width={500}
                  height={500}/>
          <h1 className="text-appText text-lg mx-auto my-1 ">
            Access to The Special Days & more
          </h1>
        </div>

        
      </div>
    </>
  );
}
