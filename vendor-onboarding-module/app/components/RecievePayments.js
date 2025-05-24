import Image from "next/image";
import React from "react";
export default function RecievePayments() {
  return (
    <>
      <div className="mb-4  w-[95%] mx-auto bg-[#D2EEDF] h-[90%] ">
        <div className="flex flex-col h-full xl:flex-row justify-center items-center mt-5">



          <div className="w-full h-1/2 sm:w-2/3 md:h-1/2 xl:w-4/10 mx-2 flex justify-center items-center">
            <Image
              src="/Payment.png"
              alt=" product Image"
              className="object-contain h-full w-full"
              width={500}
                  height={500}
            />
          </div>



          <div className="w-full xl:w-6/10 flex flex-col justify-center mx-2 px-4 lg:p-2">
            {/* Heading */}
            <h2 className="text-3xl font-semibold mb-2 text-appTextDark">
              Recieve Payments
            </h2>
            {/* Orange Hyphen */}
            <div className="w-15 my-6 h-1.5 bg-appRed"></div>
            <p className="text-appText mb-4">
             With a growing customer base across India, Bharat Agrolink connects you with farmers and agri-buyers nationwide. To support your business, we ensure secure and timely payments directly to your registered bank account. You can receive your payment within 7 days after successful product delivery, helping you manage your cash flow smoothly and grow your agricultural business with confidence.
            </p>

            {/* <p className="text-appText my-1"><span className=" underline text-appRed">Know More</span> about Fees & Commission.</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
