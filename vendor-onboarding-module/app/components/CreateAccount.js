import React from "react";
import DontHaveGst from "./DontHaveGst";
export default function CreateAccount() {
  const popularCategories = [
    	"Seeds",
	"Fertilizers",
	"Growth Promoters",
	"Micronutrients",
  	"Insecticides",
  	"Fungicides",
  	"Herbicides",
  	"Bio Pesticides",
  	"Traps & Lures",
  "Agriculture Machinery",
  "Drip Irrigation",
  "Sprinklers",
  "Garden Tools",
  "Pots & Planters",
  "Organic Farming Services",
  "Hydroponics Kits",
  "Soil Testing Kits",
  "Indoor Farming Kits",
  "Agricultural Drones ",
  "Smart Farming Solutions",
  ];
  return (
    <>
      {/* Container Div */}
      <div className="flex-1 p-8 pt-2 mb-4 px-6  ">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-appTextDark">
          Create Account
        </h2>
        {/* Orange Hyphen */}
        <div className="w-15 my-6 h-1.5 bg-appRed"></div>

        {/* First Content */}
        <div className="mb-6 ">
          <p className="text-appText mb-2 text-md md:text-lg ">
            Creating your Bharat Agrolink seller account is a quick process,
            taking less than 10 minutes, and requires only 3 documents. Follow
            the checklist to ensure a seamless account creation experience. By
            having these documents ready, you can streamline the account
            creating process and get started on Bharat Agrolink as an online
            seller in no time
          </p>
          {/* <p className="text-md md:text-lg text-appText">
            *for selling in all categories except for seeds
          </p>
          <p className="text-md md:text-lg text-appText">
            **for selling under seeds category
          </p> */}
        </div>

        {/* Don't have a GSTIN */}
        <DontHaveGst />

        {/* Second Content */}
        <div className="bg-white rounded-md py-6 md mt-8">
          <p className="text-appText text-sm md:text-lg  lg:ml-0 mb-4">
            Bharat Agrolink offers a diverse range of over 300+ categories where
            you can sell your products. These categories represent just a
            fraction of the wide variety available on Bharat Agrolink, providing
            ample opportunities for sellers to showcase their products to a
            large customer base. Here are some popular categories to consider
            for online selling:
          </p>

          {/* Grid  */}
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white shadow-card tracking-wide rounded-2xl p-5">
            {popularCategories.map((category, index) => (
              <div key={index} className="text-appText font-semibold">
                {category}
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </>
  );
}
