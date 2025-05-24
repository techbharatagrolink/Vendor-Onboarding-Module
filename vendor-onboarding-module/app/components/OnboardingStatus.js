"use client";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useFormContext } from "../context/FormContext";


export default function OnboardingStatus() {
  const {formData} = useFormContext();
  const progressCalculator = (formData)=>{

let num = 0
if(formData.mobileNum){
  num++
}
if(formData.email){
  num++
}
if(formData.gstIN){
  num++
}
if(formData.companyName){
  num++
}
if(formData.displayName){
  num++
}
if(formData.description){
  num++
}
if(formData.address){
  num++
}
if(formData.state){
  num++
}
if(formData.city){
  num++
}
let percentage = num/10*100;
return percentage
  }
  
  const status = {
    progress: progressCalculator(formData),
    sections: [
      {
        title: "Mobile & Email Verification",
        items: [
          { label: "Mobile Verification", completed: formData.mobileNum ? true: false },
          { label: "Email Verification", completed: formData.email ? true: false },
        ],
      },
      {
        title: "ID & Signature Verification",
        items: [
          { label: "GSTIN", completed: formData.gstIN ? true: false },
          { label: "Company Name", completed: formData.companyName ? true: false },
          { label: "Display | Business Name", completed: formData.displayName ? true: false },
          { label: "Business Description", completed: formData.description ? true: false },
          { label: "Signature Verification", completed: formData.signature ? true: false },
        ],
      },
      {
        title: "Store & Pickup Details",
        items: [
          { label: "Pickup Address", completed: formData.address ? true: false },
          { label: "State", completed: formData.state ? true: false },
          { label: "City", completed: formData.city ? true: false },
        ],
      },
      // {
      //   title: 'Product Listing',
      //   items: [
      //     { label: 'Listing Created', completed: false },
      //   ],
      // },
    ],
  };

  return (
    <div className="w-full xl:w-[90%] 2xl:w-[75%] rounded-lg border border-appGreen shadow-md">
      <div className=" bg-[#D2EEDF]">
        <p className="text-lg font-medium text-appText p-3 ">
          Your onboarding completion status
        </p>
       <div className="flex items-center space-x-4 p-4">
  {/* Percentage Bubble */}
  <p className="text-xs font-semibold text-white bg-appRed rounded-full px-3 py-1">
    {status.progress}%
  </p>

  {/* Progress Bar Track */}
  <div className="flex-1 h-3 bg-[#D2EEDF] border border-appRed rounded-full overflow-hidden">
    {/* Progress Fill */}
    <div
      className="h-full bg-appRed transition-all duration-300 ease-in-out"
      style={{ width: `${status.progress}%` }}
    ></div>
  </div>
</div>

      </div>

      {status.sections.map((section, idx) => (
        <div
          key={idx}
          className=" p-4 "
        >
          <h3 className="text-sm font-semibold text-appText mb-1">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="flex items-center text-sm text-appText"
              >
                {item.completed ? (
                  <CheckCircleIcon className="h-5 w-5 text-appGreen mr-2" />
                ) : (
                  <XCircleIcon className="h-5 w-5 text-appRed mr-2" />
                )}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
