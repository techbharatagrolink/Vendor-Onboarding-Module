import React from "react";

export default function ListProducts() {
  return (
    <div className="bg-[#D2EEDF] w-[95%] mb-10 mx-auto rounded-md shadow-md p-6  ">

        {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-appTextDark mb-2">
        Listing Products
      </h2>
      {/* Orange UnderLine */}
      <div className="w-15 h-1 bg-appRed my-2"></div>

      {/* Content Box */}
      <div className="flex flex-col-reverse xl:flex-row justify-center items-center">

        {/* First Content */}
        <div className="w-full xl:w-4/10 flex justify-center items-center  lg:p-2">
          <p className="text-appText text-sm mb-4">
            What is a listing? A listing refers to the process of registering
            your product on the Bharat Agrolink platform, making it visible to
            customers, and enabling them to view and purchase your product. It
            involves creating a detailed product page that includes essential
            information such as product title, description, image, pricing and
            other relevant details. A well-crafted listing helps attract
            potential customers and facilitates the sale of your product on
            Bharat Agrolink.
          </p>
        </div>

        <div className="w-full  my-4  flex justify-center items-center">
          <img
            src="/ProductImage.png"
            alt=" product Image"
            className="object-contain"
          />
        </div>
      </div>

      {/* Bulb icon and text */}
      <div className="flex flex-col sm:flex-row justify-center items-center rounded-md mb-4">
        <img src="/bulb.png" alt="bulb" className="size-8 sm:size-7 mx-5 my-5 " />
        <p className="text-appText text-sm italic">
          Did you know that providing precise and comprehensive information
          about your product, along with clear and captivating image, can
          increase its visibility on our platform by up to 15%
        </p>
      </div>


      <h3 className="text-sm font-semibold text-appTextDark mb-2 mx-3">
        Listing on Bharat Agrolink can be done in 2 different ways;
      </h3>

{/* Youtube videos Divs */}
      <div className="flex flex-col xl:flex-row justify-between items-center  ">
        <div className="flex flex-col sm:items-center lg:items-left justify-center my-3 mx-3 ">
          <h3 className="text-appTextDark text-md font-semibold ">
            1. Match with existing Products
          </h3>
          <img
            src="/ProductGridImage.png"
            alt="Product Grid Image" 
            className="my-5  lg:w-6/10 xl:w-7/10 mx-auto object-contain"
          />
          <p className="text-sm text-appText w-full ">
            If your product is already available on Bharat Agrolink, you have
            the option to seamlessly link or Latch onto the existing product
            listing. This allows you to make your product live on the platform
            without the need to create a separate listing.
          </p>
        </div>
       
        <div className="flex flex-col sm:items-center  lg:items-left my-3 justify-center">
          <h3 className="text-appTextDark text-lg font-semibold text-left">
            2. New Product
          </h3>
          <img
            src="/ProductGridImage.png"
            alt="Product Grid Image"
            className="my-5  lg:w-6/10 xl:w-7/10 mx-auto object-contain"
          />
          <p className="text-sm text-appText w-full">
            If your product is already available on Bharat Agrolink, you have
            the option to seamlessly link or Latch onto the existing product
            listing. This allows you to make your product live on the platform
            without the need to create a separate listing.
          </p>
      </div>
      </div>
     
    </div>
  );
}
