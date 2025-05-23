import Image from "next/image";
import React from "react";
export default function AdvertiseYourProducts() {
  return (
    <>
      <div className="  flex-1 mb-4 p-3  w-[95%] mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-appTextDark">
          Advertize Your Products
        </h2>
        {/* Orange Hyphen */}
        <div className="w-15 my-6 h-1.5 bg-appRed"></div>

        {/* First Content */}

        <div className="w-full  flex flex-col justify-center  px-0 lg:p-2">
          <p className="text-appText mb-4">
            Supercharge your online business with Bharat Agrolink Advertising, a powerful marketing solution that enables you to showcase your products to millions of Bharat Agrolink customers every day. With Bharat Agrolink Advertising, you can expand your reach, boost sales, and accelerate the growth of your online business. Maximise your visibility, engage with potential customers, and unlock new opportunities for success.
          </p>
        </div>

        {/* Fullfillment Section */}

        {/* First Content- fullfilment Section */}
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center mt-5">
          <div className="mb-6 mr-4  w-full xl:w-6/10 ">
           

            {/* Green Ticks  */}
            <div className="text-sm md:text-lg text-appText">
              <h1 className="text-appTextDark font-bold text-xl">
               Benefits of running Bharat Agrolink Ads for your business
              </h1>
              <div className="flex items-center my-4">
                <Image
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5"
                  width={500}
                  height={500}
                />
                <p className="text-appText text-sm sm:text-md md:text-lg">
                  Higher Visibility: Increase your products visibility by
                  appearing in top search results
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
                <p className="text-appText text-sm sm:text-md md:text-lg">
                  Actionable Insights: With insights on competition, customer
                  data, and actionable insights you have control over the
                  campaign to work in your favour
                </p>
              </div>
            </div>

            <p className="text-appText my-5 text-md md:text-lg ">
              Consider the fulfillment option that best suits your needs and
              preferences to ensure timely and secure delivery of your products
              to Bharat Agrolink customers.
            </p>
          </div>

          <div className="w-full sm:w-2/3  h-full md:w-1/2 lg:w-1/2 my-4  flex justify-center items-center">
            <Image
              src="/AdvertiseProducts.png"
              alt=" product Image"
              className="object-contain h-full w-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
