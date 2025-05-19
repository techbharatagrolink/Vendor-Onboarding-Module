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

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && otp.length > 0) {
      e.preventDefault();
      setOtp((prev) => prev.slice(0, -1));
    }
  };
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
                onClick={()=>router.push("/register")}
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
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      value={otp[i] || ""}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        if (!val) return;
                        const otpArray = otp.split("");
                        otpArray[i] = val[0];
                        setOtp(otpArray.join(""));

                        // Focus next
                        const nextInput = document.getElementById(
                          `otp-${i + 1}`
                        );
                        if (nextInput) nextInput.focus();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace") {
                          e.preventDefault();
                          const otpArray = otp.split("");
                          otpArray[i] = "";
                          setOtp(otpArray.join(""));

                          // Focus previous
                          const prevInput = document.getElementById(
                            `otp-${i - 1}`
                          );
                          if (i > 0 && prevInput) prevInput.focus();
                        }
                      }}
                      id={`otp-${i}`}
                      className="text-center text-xl border border-gray-300 rounded-lg w-12 h-14 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ))}
                </div>
              </form>

              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  className="cursor-pointer text-sm text-appDarkGreen"
                  onClick={() => {
                    // trigger resend logic if needed
                    sendOtp(new Event("submit")); // dummy event to trigger resend
                  }}
                >
                  Resend OTP
                </button>
                <button
                  className="cursor-pointer rounded-lg px-6 py-2 bg-appDarkGreen text-white text-md"
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
