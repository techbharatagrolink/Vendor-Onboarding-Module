"use client";
import Image from "next/image";
import React, { useState } from "react";

const stories = [
  {
    name: "Priyank Kaushik",
    business: "AgriTech Technology",
    image: "/Group 2.png",
    story: `Starting with just one category, their unwavering support and innovative platform empowered me to grow exponentially, expanding to six diverse categories and achieving an astounding 5x growth year on year.`,
  },
  {
    name: "Sachin Sir",
    business: "Agrosmart Technologies",
    image: "/1699078522418.jpg",
    story: `At 23, I joined our family business, registered on Bharat Agrolink during the pandemic, became an Agro Seller, and achieved a 3 Crores turnover with Seller Support’s guidance. Growing every day!`,
  },
  {
    name: "Sachin Sir",
    business: "Arth Krishi Yantra",
    image: "/1699078522418.jpg",
    story: `At 23, I joined our family business, registered on Bharat Agrolink during the pandemic, became an Agro Seller, and achieved a 3 Crores turnover with Seller Support’s guidance. Growing every day!`,
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const total = stories.length;

  // setTimeout - Repeated intevals running
  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);
  5;
  return (
    <>
      {/* Heading */}
      {/* <div className="absolute top-20 left-20 heading flex justify-center items-center mt-20"> 
            <p className="text-4xl text-appGreen font-semibold mr-2">Seller Success</p>
            <p className="text-4xl text-appText font-semibold" >Stories</p>
        </div> */}


        {/* Container */}
      <div className="px-6 md:px-16">

         <div className="heading flex justify-center md:justify-start items-center mt-20"> 
            <p className="text-2xl sm:text-3xl md:text-4xl text-appGreen font-semibold mr-2">Seller Success</p>
            <p className="text-2xl sm:text-3xl md:text-4xl text-appText font-semibold" >Stories</p>
        </div>


    

        <div className="relative mx-auto mt-10  bg-[#D2EEDF] flex flex-col lg:flex-row   justify-center items-center text-black rounded-4xl shadow text-appTextDark p-8 px-12">
            {/* Image */}
          <div className="shrink-0">
            <Image
              src={stories[current].image}
              alt={stories[current].name}
              className="size-50 shrink-0 rounded-full object-cover"
              width={500}
                  height={500}
            />
          </div>

          {/* Story Content */}
          <div className="p-3 ml-5 flex flex-col ">
            <div className="flex flex-col md:flex-row">
              <p className=" text-center lg:text-left lg:text text mt-4 ml-2 text-2xl sm:text-3xl font-bold">
                {stories[current].name},
              </p>
              <p className="text-center lg:text-left lg:text text mt-4 ml-2 text-2xl sm:text-3xl font-bold">
                {stories[current].business}
              </p>
            </div>
            <p className="text-left lg:text-left  text-lg lg:text-xl mt-4 ml-2 lg:ml-2 text-appText ">
              {stories[current].story}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute size-15 top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 p-2"
          >
            <div className="w-10 h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-appGreen"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </button>
          <button
            onClick={next}
            className="absolute size-15 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 p-2"
          >
            <div className="w-10 h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center">
              {/* <ChevronRight className="w-6 h-6 text-green-500" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7 text-appGreen"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </button>

          {/* Dots */}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {stories.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-appGreen w-7" : "bg-appGrey"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
