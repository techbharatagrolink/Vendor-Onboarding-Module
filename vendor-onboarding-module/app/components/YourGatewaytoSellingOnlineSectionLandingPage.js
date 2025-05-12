"use client";

import Image from "next/image";

export default function YourGatewaytoSellingOnlineSectionLandingPage() {
  return (
    <div className="bg-white rounded-xl shadow-card mx-6 md:mx-16 py-10 mb-16 px-4 md:px-16">
      {/* <h2 className="text-appGreen text-xl md:text-2xl font-semibold text-center mb-10">
        Your gateway to selling online
      </h2> */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* <h2 className="text-appGreen text-xl md:text-2xl font-semibold text-center mb-10">
          Your gateway to selling online
        </h2> */}
        {/* Left: Icon sections */}
        <div>
          <h2 className="text-appGreen text-xl md:text-2xl font-semibold text-center mb-10">
            Your gateway to selling online
          </h2>
          <div className="flex-3 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {/* Section 1 */}
            <div className="flex flex-col items-center">
              <Image
                src="/gateway1.svg"
                alt="Zero Returns"
                width={180}
                height={180}
              />
              <p className="mt-4 text-appText text-sm md:text-base">
                0 Returns*
              </p>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col items-center">
              <Image
                src="/gateway2.svg"
                alt="Budget-Friendly Customers"
                width={180}
                height={180}
              />
              <p className="mt-4 text-appText text-sm md:text-base">
                Access to budget-friendly customers
              </p>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col items-center">
              <Image
                src="/gateway3.svg"
                alt="Lowest Cost"
                width={180}
                height={180}
              />
              <p className="mt-4 text-appText text-sm md:text-base">
                Lowest cost of doing business
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image of farmer and businessman */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/gateway4.png"
            alt="Farmer and Businessman"
            width={350}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
