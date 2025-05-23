import React from "react";
import "./NumbersandFiguresLandingPage.module.css";

const NumbersandFiguresLandingPage = () => {
  return (
    <div className="w-[90%] mx-auto bg-white rounded-md shadow-card p-4 md:p-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-8">
      <div>
        <p className="text-appGreen font-semibold text-center text-2xl">
          50+
        </p>
        <p className="text-appText text-sm">Agri-Seller Community</p>
      </div>
      <div className="hidden md:block h-10 w-px bg-appGrey"></div>
      <div>
        <p className="text-appGreen font-semibold  text-center text-2xl">
          24x7
        </p>
        <p className="text-appText text-sm">Online Business</p>
      </div>
      <div className="hidden md:block h-10 w-px bg-appGrey"></div>
      <div>
        <p className="text-appGreen font-semibold text-center text-2xl">7</p>
        <p className="text-appText text-sm">Days* Payment</p>
      </div>
      <div className="hidden md:block h-10 w-px bg-appGrey"></div>
      <div>
        <p className="text-appGreen font-semibold text-center text-2xl">
          19000+
        </p>
        <p className="text-appText text-sm">Pincodes Served</p>
      </div>
    </div>
  );
};

export default NumbersandFiguresLandingPage;
