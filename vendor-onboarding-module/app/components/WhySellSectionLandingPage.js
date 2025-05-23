"use client";

import Image from "next/image";

export default function WhySellSectionLandingPage() {
  return (
    <section className="bg-white mx-auto mt-10 pt-2 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-appText text-center md:text-left ">
        Why do{" "}
        <span className="text-appGreen">
          sellers love Selling on Bharat Agrolink?
        </span>
      </h2>
      <p className="text-appText mt-4 text-center md:text-left">
       Numerous customers across India trust Bharatagrolink.com to be their number 1 online shopping destination. 
        <br className="hidden md:block" />
        It is no surprise that sellers trust their products to be made available 24x7 on Flipkart.
      </p>

      <div className=" flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-2 ">
          {/* Card 1 */}
          <BenefitCard
            icon="/success 1.svg"
            title="Opportunity"
            text="Access to shopping Bharat Agrolink festivals sales and a large client base spanning over 19,000 pincodes"
          />
          {/* Card 2 */}
          <BenefitCard
            icon="/finger-snap 1.svg"
            title="Ease of Doing Business"
            text="Create your Bharat Agrolink seller account in under 10 minutes with just 1 product and valid GSTIN no."
          />
          {/* Card 3 */}
          <BenefitCard
            icon="/svg-image-1 7.svg"
            title="Growth"
            text="All sellers are welcome at Bharat Agrolink, regardless of brand or location, from small to expanding agribusiness owners."
          />
          {/* Card 4 */}
          <BenefitCard
            icon="/costumer-service 1.svg"
            title="Additional Support"
            text="Access helpful resources, including basic seller guides, onboarding support, product listing tips, and insights to help you grow, with more features."
          />
        </div>

        {/* Right - Image */}
        <div className="flex-1 max-w-md">
          <Image
            src="/seller_and_farmer 1.png"
            alt="Sellers using platform"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, text }) {
  return (
    <div className="bg-white shadow-card rounded-lg p-4">
      <div className="flex items-center gap-3 mb-2">
        <Image src={icon} alt={title} width={24} height={24} />
        <h3 className="text-lg font-semibold text-appText">{title}</h3>
      </div>
      <p className="text-appText text-sm">{text}</p>
    </div>
  );
}
