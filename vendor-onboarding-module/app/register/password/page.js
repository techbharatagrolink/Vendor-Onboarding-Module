import ProgressStepper from "@/app/components/ProgressStepper";
import OnboardingStatus from "@/app/components/OnboardingStatus";
export default function PasswordOnboarding() {
  return (
    <div className=" p-4 bg-white">
      <ProgressStepper currentStep={1} />
      <div className="flex flex-col md:flex-row gap-4">

        {/* Left Column (25%) */}
        <div className="w-full md:w-1/4 bg-white p-4    ">
          
        </div>

        {/* Center Column (50%) */}
        <div className="w-full md:w-2/4 bg-white p-4 space-y-8">
          <div className="relative">
            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:appText  focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password<span className="text-appRed">{" *"}</span></label>
        </div>
        <div className="relative">
          <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:appText  focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
          <label htmlFor="floating_outlined" className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Confirm Password<span className="text-appRed">{" *"}</span></label>
        </div>
        
 

      {/* Submit Button */}
      <button className="w-[40%] bg-appGreen text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition">
        <a href="/register/dashboard">Save & Continue
        <span className="text-xl">&rarr;</span></a>
      </button>
        </div>

        {/* Right Column (25%) */}
        <div className="w-full md:w-1/4 bg-white p-4 ">
          <div className="max-w-xs p-4 border border-appText rounded-xl shadow-sm bg-white">
      <div className="flex items-start gap-3">
        {/* Profile Image */}
        <img
          src="/Group 2.png" // replace with your image path
          alt="Swastik Arya"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Testimonial Text */}
        <div>
          <p className="text-sm text-appText mb-2">
            Starting with 1, Bharat Agrolink helped me expand to 6 categories with 5x growth year on year!
          </p>
          <p className="text-sm font-semibold text-appText">Swasthik Arya,</p>
          <p className="text-sm text-appText">Bharat Agrolink Store</p>
        </div>
      </div>
    </div>
        </div>

      </div>
      
    </div>
  );
}
