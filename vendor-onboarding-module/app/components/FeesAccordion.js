"use client";
import { useState } from "react";

export const feesData = [
  {
    question: "Who decides the price of my products?",
    answer:
      "As a seller on bharatagrolink.com, you have full control over the pricing of your products. You can set the price based on your business strategy and the market dynamics.", 
    //   The seller dashboard also provides analysis and recommendations to help you determine the optimal price for your products.",
  },
  {
    question: "What are the charges for selling on bharatagrolink.com?",
    answer:
      "bharatagrolink.com does not charge any fees for listing your products on its platform. However, upon a successful sale, Contact information (valid email ID and mobile number). You can refer to the Bharat Agrolink Seller Fee details for more information.",
  },
  {
    question: "Will I get charged for listing products on bharatagrolink.com?",
    answer:
      "No, there are no charges for listing your products on bharatagrolink.com. Listing your products is free of cost.",
  },
  {
    question: "How and when do I get paid?",
    answer:
      "Once your product is picked up and successfully delivered to the customer, you will receive payment within 7 working days after the return policy has expired or been completed. Payments are securely and regularly transferred directly to your registered bank account after deducting the applicable Bharat Agrolink fees.",
  },
];

export default function FeesAccordion() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full">
      <div className="space-y-2 w-full">
        
        {feesData.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div key={index} className={`border border-appText rounded-xl py-5`}>
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left"
              >
                <span className="w-full text-appTextDark text-sm md:text-xl font-bold">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  } text-appGreen font-bold`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="border-t border-appText px-4 pb-4 pt-1 text-sm sm:text-xl text-appText whitespace-pre-line">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
