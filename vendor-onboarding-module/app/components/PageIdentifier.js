import Link from "next/link";
import React from "react";

export default function PageIdentifier({pageName}) {
  return (
    <>
      <div className="flex justify-center md:justify-start items-center lg:items-start my-2 text-center text-white z-10 px-6 md:px-16">
        <h1>
          <span className="text-sm md:text-lg text-appGreen mx-1"><Link href="/">Home</Link></span>
          <span className="text-sm md:text-lg text-appGreen mx-1">{">"}</span>
          <span className="text-sm md:text-lg text-appRed mx-1">{pageName}</span>
        </h1>
      </div>
    </>
  );
}
