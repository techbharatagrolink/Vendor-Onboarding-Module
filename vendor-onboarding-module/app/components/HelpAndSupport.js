import Image from "next/image";
import React from "react";
export default function HelpAndSupport () {
  return (
    <>
      <div className="flex-1 mb-4  w-[95%] mx-auto  h-[150vh] md:h-[120vh] lg:h-[120vh] xl:h-[80vh] ">
        <div className="flex flex-col-reverse h-full xl:flex-row justify-center items-center mt-5">
          <div className="w-full xl:w-6/10 flex flex-col justify-center mx-2 px-4 lg:p-2">
            {/* Heading */}
            <h2 className="text-3xl font-semibold mb-2 text-appTextDark">
              Help and Support
            </h2>
            {/* Orange Hyphen */}
            <div className="w-15 my-6 h-1.5 bg-appRed"></div>
            <p className="text-appText mb-4">
              With a customer base of over 45 crore+ on Bharat Agrolink, you can
              expect orders from customers across India. To ensure your
              convenience, Bharat Agrolink ensures timely payments directly into
              your registered bank account, which you provided during the Bharat
              Agrolink account creation process. You can receive your payments
              as fast as 7 days* from the date of dispatch, enabling you to
              manage your cash flow efficiently and focus on growing your
              business.
            </p>

            {/* Know More Tagline */}
            {/* <p className="text-appText my-1">
              <span className=" underline text-appRed">Know More</span> about
              Fees & Commission.
            </p> */}
          </div>

          <div className="w-2/3 h-full sm:w-6/10 md:w-1/2 lg:w-4/10  my-4 mx-2  flex justify-center items-center">
            <Image 
              src="/HelpAndSupport.png"
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
