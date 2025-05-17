"use client";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function OnboardingStatus() {
  const status = {
    progress: 20,
    sections: [
      {
        title: "Mobile & Email Verification",
        items: [
          { label: "Mobile Verification", completed: false },
          { label: "Email Verification", completed: true },
        ],
      },
      {
        title: "ID & Signature Verification",
        items: [
          { label: "GSTIN", completed: true },
          { label: "Full Company Name", completed: true },
          { label: "Display | Business Name", completed: true },
          { label: "Description", completed: true },
          { label: "Signature Verification", completed: true },
        ],
      },
      {
        title: "Store & Pickup Details",
        items: [
          { label: "Pickup Address", completed: true },
          { label: "State", completed: true },
          { label: "City", completed: true },
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
    <div className="w-[60%] rounded-lg border border-appGreen shadow-md">
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
