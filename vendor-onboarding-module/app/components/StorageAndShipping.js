import React from "react";
import FulfillmentComparison from "./FullfilmentComparisonTable";
import ParaGraph from "./ParaGraph";
import Image from "next/image";

export default function StorageAndShipping() {
  return (
    <>
      {/* <div className="px-6 md:px-16 flex flex-col w-[90%] mx-auto bg-appBlue"> */}
      <div className="  flex-1 mb-4  w-[95%] mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-appTextDark">
          Shipping
        </h2>
        {/* Orange Hyphen */}
        <div className="w-15 my-6 h-1.5 bg-appRed"></div>

        {/* First Content */}

        <div className="mb-6 ">
          <p className="text-appText mb-2 text-md md:text-lg ">
            Bharat Agrolink offers the lowest shipping cost across all online
            platforms in India. We have tied up with multiple Logistics Partners
            who pick up the product from your location and deliver it straight
            to the customer. With such low delivery charges, you can receive
            orders from all over India and focus more on selling your products
            online than handling the stress of shipping and logistics all by
            yourself.
          </p>
          <p className="text-md md:text-lg text-appText">
            We provide two fulfilment options for you to choose from
          </p>

          {/* Green Ticks  */}
          <div className="text-sm md:text-lg text-appText">
            <div className="flex items-center my-4">
              <Image
                src="/GreenTick.png"
                alt="Green Tick"
                className="mr-5 size-5"
                width={500}
                  height={500}
              />
              <p className="text-appText text-sm sm:text-md">
                Fulfilment by Bharat Agrolink
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
              <p className="text-appText text-sm sm:text-md">
                Non Fulfilment by Bharat Agrolink
              </p>
            </div>
          </div>

          {/* <p className="text-appText my-5 text-md md:text-lg ">
            Consider the fulfillment option that best suits your needs and
            preferences to ensure timely and secure delivery of your products to
            Bharat Agrolink customers.
          </p> */}
        </div>

        {/* Fullfillment Section */}

        {/* First Content- fullfilment Section */}
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center mt-5">
          <div className="w-full xl:w-6/10 flex flex-col justify-center  px-0 sm:px-4 lg:p-2">
            <h1 className="text-appTextDark text-xl mb-3 font-semibold">
              How to Ship Your Orders in 3 Simple Steps
            </h1>
            {/* <p className="text-appText mb-4">
              What is a listing? A listing refers to the process of registering
              your product on the Bharat Agrolink platform, making it visible to
              customers, and enabling them to view and purchase your product. It
              involves creating a detailed product page that includes essential
              information such as product title, description, image, pricing and
              other relevant details. A well-crafted listing helps attract
              potential customers and facilitates the sale of your product on
              Bharat Agrolink.
            </p> */}
          </div>

          <div className="w-full sm:w-2/3  h-full md:w-1/2 lg:w-1/2 my-4  flex justify-center items-center">
            <Image
              src="/ShippingImage.png"
              alt=" product Image"
              className="object-contain h-full w-full"
              width={500}
                  height={500}
            />
          </div>
        </div>

        {/* Green TickMarks */}
        <div className="text-md md:text-lg text-appText">
          <div className="flex items-center my-4">
            <Image
              src="/GreenTick.png"
              alt="Green Tick"
              className="mr-5 size-5 "
              width={500}
                  height={500}
            />
            <p className="text-appText text-sm md:text-md">
              Manage and process your orders through Bharat Agrolink Supplier
              Panel- Log in to the Bharat Agrolink Supplier Panel and accept
              your order. Once done, you will have to download and print the
              Label and Manifest.
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
            <p className="text-appText text-sm md:text-md">
              Pack your product and keep it ready for pickup- Pack the product
              properly in plain packaging material with no branding. Bharat
              Agrolink does not provide any packaging material. Please ensure
              that the product is properly packed and paste the label on the
              packaging.
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
            <p className="text-appText text-sm md:text-md">
              Hand over the product to Bharat Agrolink Delivery Partner- Our
              logistics partner will pick up the order from your pickup address
              and deliver it directly to the customer.
            </p>
          </div>
          
        </div>

        {/* Second Content -fullfilment section */}

        <div className="flex flex-col-reverse xl:flex-row justify-center items-center mt-5">
          <div className="w-full  flex flex-col justify-center  px-0 sm:px-4 lg:p-2">
            <h1 className="text-appTextDark text-xl mb-3 font-semibold">
              Non Fulfilment by Bharat Agrolink
            </h1>
            <p className="text-appText mb-4">
              With Non-Fulfilment by Bharat Agrolink, you can benefit from end
              to end delivery of your products directly from your location to
              the customer. It is the responsiblitily of the seller to ensure
              that the product is properly packed and ready for dispatch before
              the Bharat Agrolink agent arrives at the seller’s location. This
              service allows you to maintain control over the packaging process
              while leveraging Bharat Agrolink Logistics network for efficient
              and reliable delivery.
            </p>
          </div>
        </div>

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
            <p className="text-appText text-sm md:text-md">
              Delivery to 19000+ pincodes across India
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
            <p className="text-appText text-sm md:text-md">
              Tracking of your product
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
            <p className="text-appText text-sm md:text-md">
              Customer returns support
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
            <p className="text-appText text-sm md:text-md">
              Logistic support from community warehouse available
            </p>
          </div>
        </div>

        {/* Fullfilment Compaarison Table */}
        <FulfillmentComparison />

        {/* ParaGraph */}
        <ParaGraph
          fontSize={"text-sm"}
          textColor={"text-appText"}
          content={
            "Assured by Bharat Agrolink is a premium reliability program that offers enhanced product visibility and added benefits. By joining the Assured program, your products undergo strict quality checks and are eligible for faster delivery within 3–5 days.This badge not only ensures quicker delivery but also boosts your product’s visibility, quality perception, and potential for more sales. It acts as a mark of trust from Bharat Agrolink, highlighting dependability and efficiency. Earning the Assured tag can help increase your sales, build customer trust, and improve your overall selling experience on the platform."
          }
        />
      </div>
    </>
  );
}
