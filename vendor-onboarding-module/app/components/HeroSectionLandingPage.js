"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16  bg-background">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold text-appText mb-6">
          Become a Bharat Agrolink Seller and sell to 50 Crore+ customers
        </h1>
        <button className=" bg-appGreen  text-white font-medium px-6 py-3 rounded hover:bg-appDarkGreen transition duration-200">
          Start Selling
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src="/first_header.png"
          alt="Family selling products"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
