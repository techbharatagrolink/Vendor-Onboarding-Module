"use client";

import ProgressStepper from "@/app/components/ProgressStepper";
import OnboardingStatus from "@/app/components/OnboardingStatus";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "@/app/context/FormContext";
import { useRouter } from "next/navigation";
import useToast from "@/hooks/useToast";

export default function PasswordOnboarding() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { formData, updateFormData } = useFormContext();
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const { showToast } = useToast();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handlePassword = (e) => {
    updateFormData("password", e.target.value);
  };
  const handleConfirmPassword = (e) => {
    updateFormData("confirmPassword", e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: formData.mobileNum,
          email: formData.email,
          gst: formData.gstIN,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        showToast({
          type: "error",
          message: data.error || "Registration failed",
        });
        return;
      }

      showToast({
        type: "success",
        message: data.message || "Registered successfully",
      });
      router.push("/register/dashboard");
    } catch (error) {
      showToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-white">
      <ProgressStepper currentStep={1} />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4 bg-white p-4"></div>
        <div className="w-full md:w-2/4 bg-white p-4 space-y-8">
          <div className="relative w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[72%]">
            <input
              value={formData.password || ""}
              onChange={handlePassword}
              type={showPassword ? "text" : "password"}
              id="password_input"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
            />
            <label
              htmlFor="password_input"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
            >
              Password<span className="text-appRed">{" *"}</span>
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-appGreen focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-appRed text-sm">{errors.password}</p>
          )}
          <div className="relative w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[72%]">
            <input
              value={formData.confirmPassword || ""}
              onChange={handleConfirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              id="confirm_password_input"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none focus:outline-none focus:ring-0 focus:border-black-600 peer"
              placeholder=""
            />
            <label
              htmlFor="confirm_password_input"
              className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Confirm Password<span className="text-appRed">{" *"}</span>
            </label>
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-appGreen focus:outline-none"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-appRed text-sm">{errors.confirmPassword}</p>
          )}
          <button
            type="button"
            onClick={handleSubmit}
            className="cursor-pointer w-full sm:w-[45%] md:w-full lg:w-full xl:w-full 2xl:w-[25%] bg-appGreen text-white py-2 rounded flex items-center justify-center gap-2"
          >
            Save & Continue
            <span className="text-xl">→</span>
          </button>
        </div>
        <div className="w-full md:w-1/4 bg-white p-4">
          <div className="max-w-xs p-4 border border-appText rounded-xl shadow-sm bg-white">
            <div className="flex items-start gap-3">
              <Image
                src="/Group 2.png"
                alt="Swastik Arya"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
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

// "use client";

// import ProgressStepper from "@/app/components/ProgressStepper";
// import OnboardingStatus from "@/app/components/OnboardingStatus";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useFormContext } from "@/app/context/FormContext";
// import { useRouter } from "next/navigation";
// export default function PasswordOnboarding() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const { formData, updateFormData } = useFormContext();
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () =>
//     setShowConfirmPassword(!showConfirmPassword);

//   const router = useRouter();
//   // useEffect(() => {
//   //   if (
//   //     !localStorage.getItem("token" && !formData.mobileNum && formData.email)
//   //   ) {
//   //     router.push("/register");
//   //   }

//   //   // setLoggedInNavbar(true);
//   // }, [router]);

//   const handlePassword = (e) => {
//     updateFormData("password", e.target.value);
//   };
//   const handleConfirmPassword = (e) => {
//     updateFormData("confirmPassword", e.target.value);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (!formData.password || formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       // const res = await fetch('/api/register', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify({
//       //     number: formData.mobileNum,
//       //     email: formData.email,
//       //     gst: formData.gst,
//       //     password: formData.password,
//       //   }),
//       // });
//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           number: formData.mobileNum,
//           email: formData.email,
//           gst: formData.gstIN, // ← This should be GST, not email again!
//           password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Registration failed");
//         return;
//       }

//       alert(data.message || "Registered successfully");
//       router.push("/register/dashboard");
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className=" p-4 bg-white">
//       <ProgressStepper currentStep={1} />
//       <div className="flex flex-col md:flex-row gap-4">
//         {/* Left Column (25%) */}
//         <div className="w-full md:w-1/4 bg-white p-4    "></div>

//         {/* Center Column (50%) */}
//         <div className="w-full md:w-2/4 bg-white p-4 space-y-8">
//           <div className="relative w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[72%]">
//             <input
//               value={formData.password || ""}
//               onChange={handlePassword}
//               type={showPassword ? "text" : "password"}
//               id="password_input"
//               className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none focus:outline-none focus:ring-0 focus:border-black-600 peer"
//               placeholder=""
//             />
//             <label
//               htmlFor="password_input"
//               className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
//             >
//               Password<span className="text-appRed">{" *"}</span>
//             </label>
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-appGreen focus:outline-none"
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>

//           {errors.password && (
//             <p className="text-appRed text-sm">{errors.password}</p>
//           )}

//           <div className="relative w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[72%]">
//             <input
//               value={formData.confirmPassword || ""}
//               onChange={handleConfirmPassword}
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirm_password_input"
//               className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-appText bg-transparent rounded-lg border-1 border-appGrey appearance-none focus:outline-none focus:ring-0 focus:border-black-600 peer"
//               placeholder=""
//             />
//             <label
//               htmlFor="confirm_password_input"
//               className="absolute text-sm text-appText duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//             >
//               Confirm Password<span className="text-app Red">{" *"}</span>
//             </label>
//             <button
//               type="button"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-appGreen focus:outline-none"
//             >
//               {showConfirmPassword ? "Hide" : "Show"}
//             </button>
//           </div>

//           {errors.confirmPassword && (
//             <p className="text-appRed text-sm">{errors.confirmPassword}</p>
//           )}

//           {/* Submit Button */}
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="cursor-pointer w-full sm:w-[45%] md:w-full lg:w-full xl:w-full 2xl:w-[25%] bg-appGreen text-white py-2 rounded flex items-center justify-center gap-2"
//           >
//             Save & Continue
//             <span className="text-xl">&rarr;</span>
//           </button>
//         </div>

//         {/* Right Column (25%) */}
//         <div className="w-full md:w-1/4 bg-white p-4 ">
//           <div className="max-w-xs p-4 border border-appText rounded-xl shadow-sm bg-white">
//             <div className="flex items-start gap-3">
//               {/* Profile Image */}

//               <Image
//                 src="/Group 2.png" // Make sure this is in your /public folder
//                 alt="Swastik Arya"
//                 width={40}
//                 height={40}
//                 className="rounded-full object-cover"
//               />

//               {/* Testimonial Text */}
//               <div>
//                 <p className="text-sm text-appText mb-2">
//                   Starting with 1, Bharat Agrolink helped me expand to 6
//                   categories with 5x growth year on year!
//                 </p>
//                 <p className="text-sm font-semibold text-appText">
//                   Swasthik Arya,
//                 </p>
//                 <p className="text-sm text-appText">Bharat Agrolink Store</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
