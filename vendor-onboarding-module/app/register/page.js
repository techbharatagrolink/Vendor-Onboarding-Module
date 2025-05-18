"use client";

import { useRouter } from "next/navigation";
import ProgressStepper from "../components/ProgressStepper";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useFormContext } from "../context/FormContext";
export default function Page() {
  const router = useRouter();
  // const [mobileNum, setMobileNum] = useState("");
  // const [email, setEmail] = useState("");
  // const [gst, setGst] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);
  const [errors, setErrors] = useState({});
  const { formData, updateFormData } = useFormContext();

  const handleMobile = (e) => {
    updateFormData("mobileNum", e.target.value);
  };

  const handleEmail = (e) => {
    updateFormData("email", e.target.value);
  };

  const handleGST = (e) => {
    updateFormData("gstIN", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!/^\d{10}$/.test(formData.mobileNum)) {
      newErrors.mobileNum = "Mobile number must be 10 digits";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (
      formData.gstIN &&
      !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
        formData.gstIN
      )
    ) {
      newErrors.gst =
        "Enter a valid 15-character GSTIN (e.g., 22ABCDE1234F1Z5)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Validation passed, navigate
    router.push("/register/password");
  };

  return (
    <div className=" p-4 bg-white">
      <ProgressStepper currentStep={0} />
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Column (25%) */}
        <div className="w-full md:w-1/4 bg-white p-4    "></div>

        {/* Center Column (50%) */}
        <div className="w-full md:w-2/4 bg-white p-4 space-y-8">
          <div className="relative">
            <input
              value={formData.mobileNum || ""}
              onChange={handleMobile}
              type="number"
              id="mobile_number"
              className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[full] md:w-full lg:w-full xl:w-full 2xl:w-[72%] text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:appText  focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
            />
            <label
              htmlFor="mobile_number"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Enter Mobile Number<span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {errors.mobileNum && (
            <p className="text-appRed text-sm">{errors.mobileNum}</p>
          )}

          <div className="relative">
            <input
              value={formData.email || ""}
              onChange={handleEmail}
              type="text"
              id="email_id"
              className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[full] md:w-full lg:w-full xl:w-full 2xl:w-[72%] text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:appText  focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
            />
            <label
              htmlFor="email_id"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email ID<span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {errors.email && (
            <p className="text-appRed text-sm">{errors.email}</p>
          )}
          <div className="relative">
            <input
              value={formData.gstIN || ""}
              onChange={handleGST}
              type="text"
              id="gst"
              className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[full] md:w-full lg:w-full xl:w-full 2xl:w-[72%]  text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:appText  focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
            />
            <label
              htmlFor="gst"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Enter GST Number
            </label>
          </div>
          {errors.gst && <p className="text-appRed text-sm">{errors.gst}</p>}
          {/* Note */}
          <p className="text-sm text-appText">
            GSTIN is required to sell products on Bharat Agrolink. You can also
            share it in the final step.
          </p>

          {/* Terms & Privacy */}
          <p className="text-sm text-appText">
            By continuing, I agree to Bharat Agrolink&apos;s{" "}
            <span className="text-appGreen font-semibold cursor-pointer">
              Term of Use
            </span>{" "}
            &{" "}
            <span className="text-appGreen font-semibold cursor-pointer">
              Privacy Policy
            </span>
          </p>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="cursor-pointer w-full sm:w-[45%] md:w-full lg:w-full xl:w-full 2xl:w-[25%] bg-appGreen text-white py-2 rounded flex items-center justify-center gap-2 "
          >
            Register & Continue
            <span className="text-xl">&rarr;</span>
          </button>
        </div>

        {/* Right Column (25%) */}
        <div className="w-full md:w-1/4 bg-white p-4 ">
          <div className="max-w-xs p-4 border border-appText rounded-xl shadow-sm bg-white">
            <div className="flex items-start gap-3">
              {/* Profile Image */}
              <Image
                src="/Group 2.png" // Make sure this is in your /public folder
                alt="Swastik Arya"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />

              {/* Testimonial Text */}
              <div>
                <p className="text-sm text-appText mb-2">
                  Starting with 1, Bharat Agrolink helped me expand to 6
                  categories with 5x growth year on year!
                </p>
                <p className="text-sm font-semibold text-appText">
                  Swasthik Arya,
                </p>
                <p className="text-sm text-appText">Bharat Agrolink Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
