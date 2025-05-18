"use client";
import React from "react";

import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [step, setStep] = useState(1);

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const sendOtp = async (event) => {
    event.preventDefault();
    setError("");
    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number: mobile }),
    });

    const data = await res.json();
    if (res.ok) {
      setServerOtp(data.otp); // Dev only
      setStep(2);
    } else {
      setError(data.error || "Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    setError("");
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number: mobile, otp }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/register/dashboard");
    } else {
      setError(data.error || "Invalid OTP");
    }
    onClose();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/register/dashboard");
    }
  }, [router]);
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#000000] z-40"
        style={{ opacity: 0.41 }}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-white w-[90%] max-w-md p-6 rounded-lg shadow-card z-50"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-appText">Login</h2>
          <button onClick={onClose}>
            <IoClose className="cursor-pointer w-5 h-5 text-appText" />
          </button>
        </div>

        {step === 1 ? (
          <>
            <form>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Username or phone number or email *"
                className="w-full border border-gray-300 px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                className="cursor-pointer w-full bg-appGreen text-white py-2 rounded hover:bg-green-700 transition"
                onClick={sendOtp}
              >
                Next
              </button>
            </form>

            <p className="text-sm text-appText text-center mt-4">
              Don’t have an account ?
            </p>
            <div className="flex justify-center mt-2">
              <button
                type="button"
                className="cursor-pointer border border-appGreen text-appGreen text-sm px-6 py-3 rounded hover:bg-green-50 transition"
              >
                Register for new account
              </button>
            </div>

            <p className="text-xs text-appText mt-4 text-center">
              By continuing, you agree to Bharat Agrolink’s
              <span className="text-appGreen"> Terms of Use</span> &
              <span className="text-appGreen"> Privacy Policy</span>. Site
              protected by reCAPTCHA & Google
              <span className="text-appGreen"> Privacy Policy</span>.
              <span className="text-appGreen"> Terms apply</span>
            </p>
          </>
        ) : (
          // OTP Component
          <>
            <div>
              <form>
                {/* <div className="w-full px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 grid grid-cols-6 grid-rows-1">
                  {otpDigits.map((digit, i) => {
                    return (
                      <input
                        type="text"
                        key={i}
                        maxLength="1"
                        onChange={(e) => handleOtpChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        ref={(el) => (inputsRef.current[i] = el)}
                        value={digit}
                        className="my-auto mx-3 rounded-lg p-2 size-12 border-2 border-appGrey "
                      />
                    );
                  })}
                </div> */}
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </form>
              <div className="w-full h-full  px-2 rounded mt-2 flex justify-between items-center">
                <button className="w-3/8 h-full bg-white text-appDarkGreen flex justify-center items-center text-sm">
                  Resend OTP
                </button>
                <button
                  className="w-3/8 rounded-lg h-full py-1.5 my-2 flex justify-center items-center bg-appDarkGreen text-white text-md"
                  onClick={verifyOtp}
                >
                  Continue &rarr;
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LoginModal;
