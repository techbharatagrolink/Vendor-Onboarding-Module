"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const slides = [
  {
    title: "Selection Insights",
    description:
      "Uncover best-selling products, identify growth opportunities, and understand customer preferences to stay ahead of the competition.",
    image: "/sneakPeak.svg",
  },
  {
    title: "Inventory Overview",
    description:
      "Monitor inventory levels, forecast stock requirements, and prevent supply chain disruptions with intelligent insights.",
    image: "/sneakPeak.svg",
  },
];

export default function SneakPeakSectionLandingPage() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);
  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="bg-appGreen text-appText px-4 py-12 md:px-16">
      <h2 className="text-3xl font-bold">
        <span className="text-appYellow">Take a sneak peek into</span>{" "}
        <span className="text-white">our Platform</span>
      </h2>
      <br />
      <div className="bg-white rounded-3xl p-6 md:p-12 flex flex-col md:flex-row justify-between items-center shadow-md text-appText relative ">
        {/* Arrows */}
        <button
          onClick={prevSlide}
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
          onClick={nextSlide}
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

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-xl font-semibold text-appGreen mt-4">
            {slides[current].title}
          </h3>
          <p className="text-gray-600">{slides[current].description}</p>
          <button className="mt-4 border border-orange-500 text-orange-500 hover:bg-orange-100 px-4 py-2 rounded transition">
            <Link href={"https://bharatagrolink.com/"}>Explore All Features</Link>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <Image
            src={slides[current].image}
            alt="image"
            width={400}
            height={300}
            // className="z-10"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-yellow-400" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
