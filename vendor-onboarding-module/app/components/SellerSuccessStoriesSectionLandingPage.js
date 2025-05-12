"use client";

import { useState } from "react";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const stories = [
  {
    name: "Priyank Kaushik",
    business: "Agrobazaar",
    image: "/Group 2.png",
    story: `At 23, I joined our family business, registered on Bharat Agrolink during the pandemic, became an Agro Seller, and achieved a 3 Crores turnover with Seller Support’s guidance. Growing every day!`,
  },
  {
    name: "Sachin Sir",
    business: "Agrobazaar",
    image: "/1699078522418.jpg",
    story: `At 23, I joined our family business, registered on Bharat Agrolink during the pandemic, became an Agro Seller, and achieved a 3 Crores turnover with Seller Support’s guidance. Growing every day!`,
  },
];

export default function SellerSuccessStories() {
  const [current, setCurrent] = useState(0);
  const total = stories.length;

  // setTimeout - Repeated intevals running
  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <section className="w-full bg-appGreen py-12 mx-auto mt-10 px-6 md:px-16">
      <div className="mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold">
            <span className="text-appYellow">Seller Success </span>
            <span className="text-white">Stories</span>
          </h2>
          <p className="mt-4 text-lg text-white">
            14 Lakh+ sellers trust Bharat Agrolink for their online business.
          </p>
          <button className="mt-6 px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-green-500 transition">
            See All Stories
          </button>
        </div>

        {/* Right Section */}
        <div className="relative bg-white text-black rounded-2xl shadow text-appTextDark p-6">
          <div className="flex justify-center">
            <img
              src={stories[current].image}
              alt={stories[current].name}
              className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover"
            />
          </div>
          <h3 className="text-center mt-4 font-semibold text-lg">
            {stories[current].name},
          </h3>
          <p className="text-center text-sm ">{stories[current].business}</p>
          <div className="flex justify-center text-appRed">
            {/* <Quote /> */}
            <span className="text-8xl">“</span>
          </div>
          <p className="text-center text-[#3A3A3A] text-sm ">
            {stories[current].story}
          </p>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 p-2"
          >
            {/* <ChevronLeft className="w-6 h-6 text-green-500" /> */}
            <div className="w-10 h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-appGreen"
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
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 p-2"
          >
            <div className="w-10 h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center">
              {/* <ChevronRight className="w-6 h-6 text-green-500" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-appGreen"
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
          <div className="flex justify-center mt-4 space-x-2">
            {stories.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-appYellow" : "bg-appGrey"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
