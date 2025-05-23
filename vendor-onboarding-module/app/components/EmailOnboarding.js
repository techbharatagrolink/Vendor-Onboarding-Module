import ProgressStepper from "./ProgressStepper";
export default function EmailOnboarding() {
  return (
    <div className=" p-4 bg-white">
      <ProgressStepper currentStep={0} />
      <div className="flex flex-col md:flex-row gap-4">

        {/* Left Column (25%) */}
        <div className="w-full md:w-1/4 bg-white p-4    ">
          
        </div>

        {/* Center Column (50%) */}
        <div className="w-full md:w-2/4 bg-white p-4 space-y-8">
          <div className="relative">
    <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:appText  focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
    <label for="floating_outlined" className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Enter Mobile Number<span classNameName="text-appRed">{" *"}</span></label>
</div>
<div className="relative">
    <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:appText  focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
    <label for="floating_outlined" className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email ID<span classNameName="text-appRed">{" *"}</span></label>
</div>
<div className="relative">
    <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:appText  focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
    <label for="floating_outlined" className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Enter GST Number</label>
</div>
 {/* Note */}
      <p className="text-sm text-appText">
        GSTIN is required to sell products on Bharat Agrolink. You can also share it in the final step.
      </p>

      {/* Terms & Privacy */}
      <p className="text-sm text-appText">
        By continuing, I agree to Bharat Agrolink&apos;s{' '}
        <span className="text-appGreen font-semibold cursor-pointer">Term of Use</span> &{' '}
        <span className="text-appGreen font-semibold cursor-pointer">Privacy Policy</span>
      </p>

      {/* Submit Button */}
      <button className="w-[40%] bg-appGreen text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition">
        Register & Continue
        <span className="text-xl">&rarr;</span>
      </button>
        </div>

        {/* Right Column (25%) */}
        <div className="w-full md:w-1/4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Help/FAQ</h2>
          <p>Use this for contextual help or FAQs.</p>
        </div>

      </div>
      
    </div>
  );
}
