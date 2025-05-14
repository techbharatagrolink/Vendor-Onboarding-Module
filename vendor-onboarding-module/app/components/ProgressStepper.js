import React from "react";

const steps = [
  "Email ID & GST",
  "Password Creation",
  "Onboarding Dashboard",
];

const ProgressStepper = ({ currentStep }) => {
  return (

<>


<div className="flex flex-wrap -mx-2">
  <div className="w-full  lg:w-1/4 px-2">

  </div>
  <div className="w-full lg:w-2/4 px-2 mb-4">
     <div className="flex flex-wrap px-4 items-center gap-4 md:gap-6 py-4">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-row items-center">
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full border ${
                  isCompleted 
                    ? "border-appGreen"
                    : "border-appGrey"
                } ${isActive? "border-black border-1 solid":"border-appGrey"}`}
              >
                {isCompleted || isActive ? (
                  <svg
                    className="w-4 h-4 text-appGreen"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <div className="w-2 h-2 bg-appGrey rounded-full" />
                )}
              </div>
              <div
                className={`mt-1 ml-1 text-xs font-medium uppercase text-center ${
                  isActive
                    ? "text-appGrey  font-semibold"
                    : isCompleted
                    ? "text-appGrey"
                    : "text-appGrey"
                }`}
              >
                {step}
                {isActive && (
                  <div className="w-[20%] h-1 bg-appRed rounded-sm pt-1" />
                )}
              </div>
            </div>

            {/* Divider (not after last item) */}
            {index < steps.length - 1 && (
              <div className="w-6 md:w-10 h-0.5 bg-appGrey" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
  <div className="w-full  lg:w-1/4 px-2 ">
  </div>
</div>




   


    </>
  );
};

export default ProgressStepper;
