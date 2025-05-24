"use client";
import { useState, useRef } from "react";

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
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef(new Array(feesData.length).fill(null));

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="space-y-4 w-full">
        {feesData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div 
              key={index} 
              className={`border border-appText rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'shadow-md' : ''
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-5 py-4 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-appTextDark text-sm md:text-xl font-bold">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  } text-appGreen flex-shrink-0`}
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

              <div 
                ref={el => contentRefs.current[index] = el}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  transitionProperty: 'max-height, opacity, padding',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                aria-hidden={!isOpen}
              >
                <div className="border-t border-appText px-5 py-4 text-sm sm:text-lg text-appText whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}