import React from "react";
export default function ParaGraph({content, textColor, fontSize }){
    return(
        <>
         <div className="flex flex-col-reverse xl:flex-row justify-center items-center mt-5">
          <div className="w-full  flex flex-col justify-center  px-4 lg:p-2">
            <p className={`${fontSize} ${textColor} mb-4`}>
                
              {content}
            </p>
          </div>
        </div>
        </>
    )
}