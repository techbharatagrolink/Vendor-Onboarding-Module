"use client";
import { useState, useRef, useEffect } from "react";

const generalData = [
  {
    question: "Why should I sell on Bharat AgroLink?",
    answer:
      "Bharat AgroLink is a trusted and leading e-commerce platform with numerous customers across 19000+ pin codes in India. By selling on Bharat AgroLink, you gain access to a vast customer base and India’s largest shopping festival, along with other major shopping events. The cost of doing business on Bharat AgroLink is also low, providing a lucrative opportunity for sellers.",
  },
  {
    question: "How does selling on bharatagrolink.com work?",
    answer:
      "Selling on bharatagrolink.com is a simple process. Create an account with your GSTIN, valid mobile number, email ID, bank account, and address details. List your products on the platform and manage orders. You can choose to pack and ship the products yourself or utilise Bharatagrolink’s Fulfilment service for hassle-free logistics management. Payments are settled within 7 days after successful delivery and return period completion",
  },
  {
    question:
      "What is the minimum listing quantity to sell on bharatagrolink.com?",
    answer:
      "To start selling on BharatAgrolink.com, you only need a minimum of 1 product to list. However, it is recommended to have more products to leverage the wide customer reach and trust of millions of Bharat Agrolink users.",
  },
  {
    question: "What products can I sell on bharatagrolink.com?",
    answer:
      "Bharat Agrolink allows you to sell a wide range of agriculture-focused products, including seeds, fertilizers, pesticides, farm tools, agri-machinery, irrigation equipment, organic products, and more. Some categories may require prior quality approval before your listings go live on the platform.",
  },
  {
    question: "What do I need to register to sell on bharatagrolink.com?",
    answer:
      "To start selling on Bharat Agrolink, you’ll need the following:\n\n- Business details (name, type, address)\n- Contact information (valid email ID and mobile number)\n- Tax registration details, such as GSTIN (mandatory for taxable products) and PAN (mandatory for Book Sellers)",
  },
  {
    question: "I don't have a website. Can I still sell on bharatagrolink.com?",
    answer:
      "Absolutely! You can sell on bharatagrolink.com without having a website. Once registered, you will gain access to the Bharat AgroLink Seller Panel, where you can list your products and start selling. Please note that Bharat AgroLink charges a small fee when your product is sold.",
  },
  // {
  //   question: "What is Assured?",
  //   answer:
  //     "Assured by Bharat AgroLink is a special reliability program that offers additional visibility to your products. It includes extra quality checks and ensures faster delivery within 2-4 days. Having the Assured tag guarantees more orders, increased visibility, faster delivery, and higher quality standards. By obtaining the Assured badge, you can achieve better revenue and build trust with customers.",
  // },
  {
    question: "Can I offer both products and services on bharatagrolink.com?",
    answer:
      "Currently, Bharat AgroLink allows sellers to offer only physical products for sale on the platform. However, as a third-party service provider, you can offer specific services to Bharat Agrolink sellers to assist them in growing their businesses.",
  },
];

export default function GeneralAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef(new Array(generalData.length).fill(null));

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to properly measure content heights
  const getContentHeight = (element) => {
    if (!element) return 0;
    return element.scrollHeight;
  };

  return (
    <div className="w-full">
      <div className="space-y-4 w-full">
        {generalData.map((item, index) => {
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