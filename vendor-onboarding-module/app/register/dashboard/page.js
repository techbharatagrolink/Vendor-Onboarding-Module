"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ProgressStepper from "@/app/components/ProgressStepper";
import OnboardingStatus from "@/app/components/OnboardingStatus";

import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import SignaturePadSection from "@/app/components/SignaturePadSection";
import { useFormContext } from "@/app/context/FormContext";

export default function Page() {
  const router = useRouter();
  const { formData, updateFormData } = useFormContext();
  const [fieldEnabled, setFieldEnabled] = useState(false);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const gstRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

    if (!formData.gstIN || !gstRegex.test(formData.gstIN)) {
      newErrors.gstIN = "Enter a valid GSTIN.";
    }

    if (!formData.companyName || !formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (!formData.displayName || !formData.displayName.trim()) {
      newErrors.displayName = "Display name is required.";
    }

    if (formData.description && formData.description.trim().length < 10) {
      newErrors.description = "Description should be at least 10 characters.";
    }

    if (!formData.address || !formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.pincode || !formData.pincode.match(/^\d{6}$/)) {
      newErrors.pincode = "Pincode must be 6 digits.";
    }

    if (!formData.city || !formData.city.trim()) {
      newErrors.city = "City not found. Check pincode.";
    }

    if (!formData.state || !formData.state.trim()) {
      newErrors.state = "State not found. Check pincode.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function setStateandCity(e) {
    const newPin = e.target.value;

    updateFormData("pincode", newPin);

    if (newPin.length === 6) {
      try {
        const response = await fetch(`/api/pincode?pincode=${newPin}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch pincode data");
        }

        const posts = await response.json();

        if (posts[0]?.PostOffice) {
          const newCity = posts[0].PostOffice[0].District;
          const newState = posts[0].PostOffice[0].State;

          updateFormData("city", newCity);
          updateFormData("state", newState);
        } else {
          updateFormData("city", "");
          updateFormData("state", "");
          setErrors((prev) => ({
            ...prev,
            pincode: "Invalid pincode. No data found.",
          }));
        }
      } catch (error) {
        console.error("Error fetching pincode:", error.message);

        updateFormData("city", "");
        updateFormData("state", "");
        setErrors((prev) => ({
          ...prev,
          pincode: "Failed to fetch pincode data. Please try again.",
        }));
      }
    } else {
      updateFormData("city", "");
      updateFormData("state", "");
    }
  }
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        router.push("/");
      }
    }, []);

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form is valid, submit:", formData);
    } else {
      console.log("Validation failed");
    }
  };
  //   const handleSubmit = async () => {
  //   if (validateForm()) {
  //     try {
  //       const response = await fetch("/api/register", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(formData),
  //       });
  //       if (response.ok) {
  //         console.log("Form submitted successfully");
  //         // Navigate to next step or show success message
  //       } else {
  //         setErrors({ submit: "Failed to submit form. Please try again." });
  //       }
  //     } catch (error) {
  //       setErrors({ submit: "Network error. Please check your connection." });
  //     }
  //   } else {
  //     console.log("Validation failed");
  //   }
  // };

  // const handleGST = (e) => {
  //   updateFormData("gstIN", e.target.value);
  // };
  // const handleGST = (e) => {
  //   const value = e.target.value;
  //   const gstRegex =
  //     /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
  //   updateFormData("gstIN", value);
  //   setErrors((prev) => ({
  //     ...prev,
  //     gstIN:
  //       !value || !gstRegex.test(value) ? "Enter a valid GSTIN." : undefined,
  //   }));
  // };
async function handleGST(e) {
  const newGstin = e.target.value.toUpperCase();
  console.log(newGstin)
  updateFormData("gstIN", newGstin);

  const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

  if (gstinRegex.test(newGstin)) {
    try {
      const response = await fetch(`/api/gstin?gstin=${newGstin}&action=TP`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)

      if (!response.ok) {
        throw new Error("Failed to fetch GSTIN data");
      }

      const result = await response.json();
      const info = result.data?.data;
console.log(info)
      if (info?.legalName && info?.bussNature && info?.pan && info?.stateName) {
        updateFormData("legalName", info.legalName); // Legal name
        updateFormData("pan", info.pan); // Extract PAN from GSTIN
        updateFormData("bussNature", info.bussNature); // Constitution of business
        updateFormData("stateName", info.stateName); // State code
        setErrors((prev) => ({ ...prev, gstIN: "" }));
      } else {
        updateFormData("legalName", "");
        updateFormData("pan", "");
        updateFormData("bussNature", "");
        updateFormData("stateName", "");
        setErrors((prev) => ({
          ...prev,
          gstIN: "Incomplete or invalid GSTIN data.",
        }));
      }
    } catch (error) {
      console.error("Error fetching GSTIN:", error.message);
      updateFormData("legalName", "");
      updateFormData("pan", "");
      updateFormData("bussNature", "");
      updateFormData("stateName", "");
      setErrors((prev) => ({
        ...prev,
        gstIN: "Failed to fetch GSTIN data. Please try again.",
      }));
    }
  } else {
    updateFormData("legalName", "");
    updateFormData("pan", "");
    updateFormData("bussNature", "");
    updateFormData("stateName", "");
    setErrors((prev) => ({
      ...prev,
      gstIN: "Invalid GSTIN format.",
    }));
  }
}




  const handleGstEdit = () => {
    if (fieldEnabled === true) {
      setFieldEnabled(false);
    } else {
      setFieldEnabled(true);
    }
    console.log("Gst Edit button clicked");
  };
  const handleCompanyName = (e) => {
    updateFormData("companyName", e.target.value);
  };
  const handleDisplayName = (e) => {
    updateFormData("displayName", e.target.value);
  };
  const handleDescription = (e) => {
    updateFormData("description", e.target.value);
  };
  const handleAddress = (e) => {
    updateFormData("address", e.target.value);
  };
  const handlePinCode = (e) => {
    setStateandCity(e);
  };

  return (
    <div className=" p-4 bg-white">
      <ProgressStepper currentStep={2} />
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Column (25%) */}
        <div className="w-full md:w-1/4 bg-white p-4    ">
          <OnboardingStatus />
        </div>

        {/* Center Column (50%) */}

        <div className="w-full md:w-2/4 bg-white p-4 space-y-8">
          {/* Phone and email section */}

          <h1 className="text-3xl text-appGreen">Hello, Shivansh Lodhi</h1>

          <div className=" w-full bg-white ">
            <h2 className="text-sm font-medium text-appText mb-4">
              <strong> Mobile & Email Verification</strong>
            </h2>

            {/* Mobile */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center space-x-2">
                <DevicePhoneMobileIcon className="h-5 w-5 text-appText" />
                <span className="text-sm text-appText">
                  +91{formData.mobileNum}
                </span>
              </div>
              <span className="bg-[#D2EEDF] text-appGreen text-xs px-3 py-1 rounded-full font-semibold">
                Verified
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-appText" />
                <span className="text-sm text-appText">{formData.email}</span>
              </div>
              <button className="text-xs text-appGreen hover:underline font-medium">
                Resend Email
              </button>
            </div>
          </div>

          <hr className="border-appGrey my-4" />

          {/* Phone and email section */}
          {/* ID and Signature Verification */}
          <h2 className="text-sm font-medium text-appText mb-4">
            <strong>ID and Signature Verification</strong>
          </h2>
          <div className="relative w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[72%]">
            <input
              type="text"
              id="gst_input"
              disabled={fieldEnabled ? false : true}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
              value={formData.gstIN || ""}
              // onChange={(e)=>setGstIn(e.target.value)}
              // onChange={(e)=>updateFormData("gstIN", e.target.value)}
              onChange={handleGST}
            />
            <label
              htmlFor="gst_input"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Enter GSTIN<span className="text-appRed">{" *"}</span>
            </label>

            <button
              type="button"
              onClick={handleGstEdit}
              className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-appGreen focus:outline-none"
            >
              {fieldEnabled ? "Save" : "Edit"}
            </button>
          </div>
          {errors.gstIN && (
            <p className="text-appRed text-sm">{errors.gstIN}</p>
          )}
              <div className="bg-[#D2EEDF] text-appText rounded-lg p-4 shadow-sm w-full max-w-md">
      <h2 className="text-lg font-semibold mb-1">{formData.legalName}</h2>
      <p className="text-sm font-medium">{formData.pan}</p>
      <p className="text-sm mb-1">{formData.bussNature}</p>
      <p className="text-sm">{formData.stateName}</p>
      
    </div> 
          <p className="text-sm text-appText">
            GSTIN is required to sell products on Bharat Agrolink.
          </p>
          <div className="relative">
            <input
              type="text"
              id="company_name"
              className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[full] md:w-full lg:w-full xl:w-full 2xl:w-[72%] text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:text-appText  focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
              value={formData.companyName || ""}
              // onChange={(e)=>setCompanyName(e.target.value)}
              onChange={handleCompanyName}
            />
            <label
              htmlFor="company_name"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Full Company Name<span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {errors.companyName && (
            <p className="text-appRed text-sm">{errors.companyName}</p>
          )}
          <div className="relative">
            <input
              type="text"
              id="display_name"
              className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[full] md:w-full lg:w-full xl:w-full 2xl:w-[72%] text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:text-appText  focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
              value={formData.displayName || ""}
              // onChange={(e)=>setDisplayName(e.target.value)}
              onChange={handleDisplayName}
            />
            <label
              htmlFor="display_name"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Display | Business Name<span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {errors.displayName && (
            <p className="text-appRed text-sm">{errors.displayName}</p>
          )}
          <div className="relative">
            <textarea
              type="text"
              id="description"
              className="block h-30 px-2.5 pb-2.5 pt-4 w-full sm:w-[full] md:w-full lg:w-full xl:w-full 2xl:w-[72%] text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:text-appText  focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
              value={formData.description || ""}
              // onChange={(e)=>setDescription(e.target.value)}
              onChange={handleDescription}
            />
            <label
              htmlFor="description"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Description<span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {errors.description && (
            <p className="text-appRed text-sm">{errors.description}</p>
          )}
          <SignaturePadSection />
          <hr className="border-appGrey my-4" />
          {/* ID and Signature Verification */}

          <h2 className="text-sm font-medium text-appText mb-4">
            <strong>Store & Pickup Details</strong>
          </h2>
          <div className="relative">
            <input
              type="text"
              id="address_line"
              value={formData.address || ""}
              // onChange={(e) => setAddress(e.target.value)}
              onChange={handleAddress}
              className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[full] md:w-full lg:w-full xl:w-full 2xl:w-[72%] text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:text-appText  focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
            />
            <label
              htmlFor="address_line"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Business | Pickup Address
              <span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {errors.address && (
            <p className="text-appRed text-sm">{errors.address}</p>
          )}
          <div className="relative">
            <input
              type="number"
              id="pincode"
              value={formData.pincode || ""}
              // onChange={(e) => setStateandCity(e)}
              onChange={setStateandCity}
              className="block px-2.5 pb-2.5 pt-4 w-full sm:w-[full] md:w-full lg:w-full xl:w-full 2xl:w-[72%] text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none dark:text-appText dark:text-appText  focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
              disabled={isLoading}
            />
            <label
              htmlFor="pincode"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              PIN Code<span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {isLoading && (
            <p className="text-sm text-appText">Fetching pincode data...</p>
          )}
          {errors.pincode && (
            <p className="text-appRed text-sm">{errors.pincode}</p>
          )}
          <div className="relative w-full 2xl:w-[72%]">
            <input
              type="text"
              id="city"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText rounded-lg border border-appGrey appearance-none dark:text-appText focus:outline-none peer"
              placeholder=""
              value={formData.city || ""} // default pre-filled value
              disabled
            />
            <label
              htmlFor="city"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 start-1"
            >
              City<span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {errors.city && <p className="text-appRed text-sm">{errors.city}</p>}
          <div className="relative w-full 2xl:w-[72%]">
            <input
              type="text"
              id="state"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText rounded-lg border border-appGrey appearance-none dark:text-appText focus:outline-none peer"
              placeholder=""
              value={formData.state || ""} // default pre-filled value
              disabled
            />
            <label
              htmlFor="state"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 start-1"
            >
              State<span className="text-appRed">{" *"}</span>
            </label>
          </div>
          {errors.state && (
            <p className="text-appRed text-sm">{errors.state}</p>
          )}

          {/* Note */}

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
            type="submit"
            onClick={handleSubmit}
            className="cursor-pointer w-[70%] bg-appGreen text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition"
            aria-label="Register and continue"
          >
            Register & Continue <span className="text-xl">→</span>
          </button>
          {/* {errors.submit && <p className="text-appRed text-sm">{errors.submit}</p>} */}
        </div>

        {/* Right Column (25%) */}
        <div className="w-full md:w-1/4 bg-white p-4 ">
          <div className="max-w-xs p-4 border border-appText rounded-xl shadow-sm bg-white">
            <div className="flex items-start gap-3">
              {/* Profile Image */}
              <img
                src="/Group 2.png"
                alt="Swastik Arya"
                className="w-10 h-10 rounded-full object-cover"
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
