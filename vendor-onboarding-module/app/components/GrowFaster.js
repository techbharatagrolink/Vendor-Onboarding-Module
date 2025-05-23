import Image from "next/image";
import React from "react";
export default function GrowFaster() {
  return (
    <>
      <div className="flex-1 my-4   w-[95%] mx-auto h-[120vh] md:h-[120vh] lg:h-[100vh]    ">
        <div className="flex flex-col-reverse  xl:h-full xl:flex-row justify-center items-center xl:items-end mt-10 ">
          <div className="w-full  h-1/2 xl:w-1/2 lg:h-full flex flex-col  justify-end mx-2  px-4 lg:p-2">
            {/* Heading */}
            <h2 className="text-2xl xl:text-3xl mb-0 xl:mb-2 font-semibold  text-appTextDark">
              Grow Faster
            </h2>
            {/* Orange Hyphen */}
            <div className="w-15 my-6 h-1.5 bg-appRed"></div>
            <p className="text-appText mb-4">
              At Bharat Agrolink, we recognize that there may be times when you
              require additional assistance for your online business. That&apos;s
              why, with your Bharat Agrolink seller account, you gain access to
              a diverse range of tools and support functions designed to foster
              business growth. These include:
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
                 Price Recommendation Tool : Get data-backed suggestions for setting competitive prices.
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
                 Product Recommendation Tool : Discover trending and high-demand agri products to expand your catalog.
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
                  Ad Campaigns with Bharat Agrolink Ads : Promote your listings to reach a wider farming audience.

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
                 Listing & Order Management : Easily create, manage, and fulfill orders from one dashboard.
                </p>
              </div>
              <div className="flex items-center my-4">
                <Image
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 text-sm md:text-md"
                  width={500}
                  height={500}
                />
                <p className="text-appText text-sm xl:text-md">
                 Inventory & Payments Tracking : Stay on top of your stock levels and monitor payments efficiently.
                </p>
              </div>
              <div className="flex items-center my-4">
                <Image
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 text-sm md:text-md"
                  width={500}
                  height={500}
                />
                <p className="text-appText text-sm xl:text-md">
                 Shopping Festivals & Campaigns : Boost visibility and sales during seasonal promotions.
                </p>
              </div>
              <div className="flex items-center my-4">
                <Image
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 text-sm md:text-md"
                  width={500}
                  height={500}
                />
                <p className="text-appText text-sm xl:text-md">
                 Seller Support & Helpdesk : Get expert help whenever you need it.
                </p>
              </div>
            </div>

            {/* Know More Tagline */}
            {/* <p className="text-appText my-1">
              <span className=" underline text-appRed">Know More</span> about
              Fees & Commission.
            </p> */}
          </div>

          {/* Image */}
          <div
            //   className="w-2/3 h-1/2 xl:h-6/10   sm:w-6/10 md:w-2/3 lg:w-1/2 flex"
            className="w-2/3 h-1/2 xl:h-6/10 sm:w-7/10"
          >
           {/* <Image src="/GrowFaster.png" alt="Grow Faster Image" className="object-contain" /> */}
           <Image
           src={"/GrowFaster.png"}
           className="object-contain"
           alt="Grow Faster Image"
            width={500} // Replace with actual width
              height={500}
           />
           
          </div>
        </div>
      </div>
    </>
  );
}
