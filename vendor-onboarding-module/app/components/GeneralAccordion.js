"use client";
import { useState } from "react";

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
      "To start selling on Bharat Agrolink, you’ll need the following:\n\n-Business details (name, type, address)\n- Contact information (valid email ID and mobile number)\n- Tax registration details, such as GSTIN (mandatory for taxable products) and PAN (mandatory for Book Sellers)",
  },
  {
    question: "I don't have a website; can I still sell on bharatagrolink.com?",
    answer:
      "Absolutely! You can sell on Bharatagrolink.com without having a website. Once registered, you will gain access to the Bharat AgroLink Seller Panel, where you can list your products and start selling. Please note that Bharat AgroLink charges a small fee when your product is sold.",
  },
  // {
  //   question: "What is Assured?",
  //   answer:
  //     "Assured by Bharat AgroLink is a special reliability program that offers additional visibility to your products. It includes extra quality checks and ensures faster delivery within 2-4 days. Having the Assured tag guarantees more orders, increased visibility, faster delivery, and higher quality standards. By obtaining the Assured badge, you can achieve better revenue and build trust with customers.",
  // },
  {
    question: "Can I offer both products and services on Bharatagrolink.com?",
    answer:
      "Currently, Bharat AgroLink allows sellers to offer only physical products for sale on the platform. However, as a third-party service provider, you can offer specific services to Bharat Agrolink sellers to assist them in growing their businesses.",
  },
];

export default function GeneralAccordion() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full">
      <div className="space-y-2 w-full">
        {/* {generalData.map((item, index) => {
             const openIndex = openIndexes.includes(index);
          return (
            <div
              key={index}
              className={`border border-appText rounded-xl  py-5`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left"
              >
                <span
                  className={` w-full text-appTextDark text-sm md:text-xl font-bold`}
                >
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform text-appGreen font-bold`}
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
                className={`${
                  openIndex === index ? "border-t-1 border-appText" : ""
                }`}
              >
                {openIndex === index && (
                  <div className="px-4 pb-4 pt-1 text-sm sm:text-xl text-appText whitespace-pre-line">
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          );
        })} */}
        {generalData.map((item, index) => {
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
