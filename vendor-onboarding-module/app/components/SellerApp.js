import Image from "next/image";
import React from "react";

export default function SellerApp() {
  return (
    <>
      <div className=" mt-80 sm:mt-50  lg:mt-80 xl:mt-10 p-5   w-[95%] mx-auto h-[220vh] sm:h-[200vh] md:h-[180vh] xl:h-[100vh]   ">
        <div className="flex flex-col xl:h-full xl:flex-row justify-center items-center xl:items-end mt-10 ">
          {/* Image */}
          <div
            //   className="w-5/10 h-full xl:h-6/10   sm:w-6/10 md:w-2/3 lg:w-1/2 flex"
            className="w-2/5 h-1/2  xl:h-8/10 flex sm:h-1/3  sm:w-3/10 mx-5 mb-10"
          >
            <Image
              src="/iphone.png"
              alt="product Image"
              width={700}
              height={700}
              className="object-contain h-full  w-full"
            />
          </div>

          <div className="w-full  h-1/2 xl:w-7/10 lg:h-full flex flex-col justify-center mx-2  px-4 lg:p-2">
            {/* Heading */}
            <h2 className="text-2xl xl:text-3xl mb-0 xl:mb-2 font-semibold  text-appTextDark">
              Payment for Orders
            </h2>
            {/* Orange Hyphen */}
            <div className="w-15 my-3 h-1.5 bg-appRed"></div>
            <p className="text-appText mb-4">
              Payments for your orders are securely transferred to your
              registered bank account 7 days after the return period ends,
              including for Cash on Delivery (COD) orders. For example: If a
              product is delivered on 1st January and has a 3-day return window,
              the payment will be initiated on 11th January. You can easily
              track your payments and transaction history through your Bharat
              Agrolink Seller Dashboard.
            </p>

            {/* Green Ticks */}
            <div className="text-md md:text-lg text-appText">
              <div className="flex items-center my-4">
                <img
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 "
                />
                <p className="text-appText text-sm xl:text-md">
                  Price Recommendation Tool : Get data-backed suggestions for
                  setting competitive prices.
                </p>
              </div>
              <div className="flex items-center my-4">
                <img
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5"
                />
                <p className="text-appText text-sm xl:text-md">
                  Product Recommendation Tool : Discover trending and
                  high-demand agri products to expand your catalog.
                </p>
              </div>
              <div className="flex items-center my-4">
                <img
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 "
                />
                <p className="text-appText text-sm xl:text-md">
                  Ad Campaigns with Bharat Agrolink Ads : Promote your listings
                  to reach a wider farming audience.
                </p>
              </div>
              <div className="flex items-center my-4">
                <img
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 "
                />
                <p className="text-appText text-sm xl:text-md">
                  Listing & Order Management : Easily create, manage, and
                  fulfill orders from one dashboard.
                </p>
              </div>
              <div className="flex items-center my-4">
                <img
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 text-sm md:text-md"
                />
                <p className="text-appText text-sm xl:text-md">
                  Inventory & Payments Tracking : Stay on top of your stock
                  levels and monitor payments efficiently.
                </p>
              </div>
              <div className="flex items-center my-4">
                <img
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 text-sm md:text-md"
                />
                <p className="text-appText text-sm xl:text-md">
                  Shopping Festivals & Campaigns : Boost visibility and sales
                  during seasonal promotions.
                </p>
              </div>
              <div className="flex items-center my-4">
                <img
                  src="/GreenTick.png"
                  alt="Green Tick"
                  className="mr-5 size-5 text-sm md:text-md"
                />
                <p className="text-appText text-sm xl:text-md">
                  Seller Support & Helpdesk : Get expert help whenever you need
                  it.
                </p>
              </div>
            </div>

            {/* Know More Tagline */}
            {/* <p className="text-appText my-1">
              <span className=" underline text-appRed">Know More</span> about
              Fees & Commission.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
