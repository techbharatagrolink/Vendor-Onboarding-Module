import Image from "next/image";
import React from "react";
export default function ShoppingFestival() {
  return (
    <>
      <div className="flex-1  w-[95%] mx-auto bg-[#D2EEDF] h-[180vh] md:h-[120vh] lg:h-[120vh] xl:h-[60vh] ">
        <div className="flex flex-col h-full xl:flex-row justify-between items-center mt-5">


            
          <div className="w-full xl:w-6/10 flex flex-col justify-center mt-10 mx-2 px-4 lg:p-2">
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-appTextDark">
              Bharat Agrolink Shopping Festival
            </h2>
            {/* Orange Hyphen */}
            <div className="w-15 my-6 h-1.5 bg-appRed"></div>
            <p className="text-appText mb-4">
              Bharat Agrolink has revolutionized the way India shops through its
              renowned shopping festivals like The Agro Days, Mega Sale,
              Environment Day Sale and many others. As a Bharat Agrolink seller,
              you have the exclusive opportunity to participate in these
              high-impact shopping events. These festivals provide a platform to
              boost your sales rapidly within a short period of time. By
              leveraging the extensive reach and customer engagement of these
              shopping festivals, you can maximise your business growth and
              capitalise on the immense sales potential. Seize the opportunity
              and elevate your sales with Bharat Agrolink’s exciting shopping
              festivals.
            </p>

           
          </div>

          <div className="w-full h-full sm:h-1/2 sm:w-3/4  md:h-1/2 lg:h-ful xl:w-4/10   mt-4 mx-2  flex justify-center items-center">
            <Image
              src="/ShoppingFestival.png"
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
