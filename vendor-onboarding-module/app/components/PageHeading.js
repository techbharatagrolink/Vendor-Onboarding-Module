import React from "react";
export default function PageHeading({heading}){
    return (
        <>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-appText mb-6 ">
            {heading}
            </h1>
        </>
    )
}