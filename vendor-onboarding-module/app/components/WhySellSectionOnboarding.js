"use client";

import Image from "next/image";

const features = [
  {
    icon: "/icons/sell across india.svg",
    title: "Sell Across India",
    description: "Reach Numerous customers across 27000+ pincodes",
  },
  {
    icon: "/icons/higher profits.svg",
    title: "Higher Profits",
    description: "With 0% commission*, you take 100% profits with you",
  },
  {
    icon: "/icons/account management.svg",
    title: "Marketing and Promotion",
    description:
      "Benefit from Bharat Agrolink’s marketing efforts to boost your product visibility and sales.",
  },
  {
    icon: "/icons/lower return charges.svg",
    title: "Lower Return Charges",
    description:
      "With our flat and low return charges, ship your products stress-free",
  },
  {
    icon: "/icons/simple pricing calculator.svg",
    title: "Simple Pricing Calculator",
    description:
      "Use our pricing calculator to decide the best competitive selling price for your product",
  },
  {
    icon: "/icons/support.svg",
    title: "24x7 Seller Support",
    description:
      "All your queries and issues are answered by our dedicated Seller Support Team",
  },
  {
    icon: "/icons/fast regular payments.svg",
    title: "Fast & Regular Payments",
    description: "Get secure and regular payments as fast as 7* days from the date of dispatch",
  },
  {
    icon: "/icons/business on the go.svg",
    title: "All-in-One Agri Platform",
    description:
      "Products, services, and exposure in one place.",
  },
];

export default function WhySellSection() {
  return (
    <section className="bg-appGreen py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why sell on Bharat Agrolink?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <div className="w-14 h-14 bg-appGreen rounded-full flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-lg text-appYellow">{item.title}</h3>
              <p className="text-sm text-gray-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
