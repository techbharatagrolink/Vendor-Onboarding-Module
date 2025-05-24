"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import Toast from "./Toast";
import useToast from "@/hooks/useToast";

export default function LoginModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { toast, showToast, closeToast } = useToast();
  const [resendTimer, setResendTimer] = useState(0);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const sendOtp = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: mobile }),
      });

      const data = await res.json();
      if (res.ok) {
        setStep(2);
        showToast({
          type: "success",
          message: "OTP Sent Successfully!",
        });
      } else {
        setError(data.error || "Failed to send OTP");
        showToast({
          type: "error",
          message: data.error || "Failed to send OTP",
        });
      }
    } catch (error) {
      setError("Network error");
      showToast({ type: "error", message: "Network error. Please try again." });
      console.error("LoginModal: Send OTP error:", error);
    }
  };

  const verifyOtp = async () => {
    setError("");
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: mobile, otp }),
      });

      const data = await res.json();
      if (res.ok) {
        showToast({ type: "success", message: "Login successful" });
        onClose();
        router.push("/register/dashboard");
        router.refresh();
      } else {
        setError(data.error || "Invalid OTP");
        showToast({ type: "error", message: data.error || "Invalid OTP" });
      }
    } catch (error) {
      setError("Network error");
      showToast({ type: "error", message: "Network error. Please try again." });
      console.error("LoginModal: Verify OTP error:", error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
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

  // const resendOtpAndClearInputs = (event) => {
  //   event.preventDefault();

  //   if (resendTimer > 0) return; // prevent spamming during timer
  //   setOtp(""); // clear OTP input

  //   // First resend: send immediately
  //   if (!hasResentOnce) {
  //     sendOtp(new Event("submit"));
  //     setHasResentOnce(true);
  //   } else {
  //     // Delay sending from second time onward
  //     setResendTimer(30);
  //     const interval = setInterval(() => {
  //       setResendTimer((prev) => {
  //         if (prev <= 1) {
  //           clearInterval(interval);
  //           sendOtp(new Event("submit")); // send after timer ends
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //   }
  // };
  const resendOtpAndClearInputs = (event) => {
    event.preventDefault();
    if (resendTimer > 0) return; // Block clicks during timer

    setOtp(""); // Clear OTP inputs

    sendOtp(new Event("submit")); // Send OTP immediately

    // Start 30s timer
    setResendTimer(30);
    setHasTimerStarted(true);

    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <>
      {toast && (
        <Toast type={toast.type} message={toast.message} onClose={closeToast} />
      )}
      <div
        className="fixed inset-0 bg-[#000000] z-40"
        style={{ opacity: 0.41 }}
        onClick={onClose}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] max-w-md p-6 rounded-lg shadow-card z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-appText">Login to your Seller Panel</h2>
          <button onClick={onClose}>
            <IoClose className="cursor-pointer w-5 h-5 text-appText" />
          </button>
        </div>
        {step === 1 ? (
          <>
            <form onSubmit={sendOtp}>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Phone Number"
                maxLength="10"
                minLength={10}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {error && <p className="text-appRed text-sm mb-2">{error}</p>}
              <button
                type="submit"
                className="cursor-pointer w-full bg-appGreen text-white py-2 rounded hover:bg-green-700 transition"
              >
                Next
              </button>
            </form>
            <p className="text-sm text-appText text-center mt-4">
              Don’t have an account?
            </p>
            <div className="flex justify-center mt-2">
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="cursor-pointer border border-appGreen text-appGreen text-sm px-6 py-3 rounded hover:bg-green-50 transition"
              >
                Register for new account
              </button>
            </div>
            <p className="text-xs text-appText mt-4 text-center">
              By continuing, you agree to Bharat Agrolink’s
              <span className="text-appGreen"> Terms of Use</span> &
              <span className="text-appGreen"> Privacy Policy</span>
              {/* . Site
              protected by reCAPTCHA & Google
              <span className="text-appGreen"> Privacy Policy</span>.
              <span className="text-appGreen"> Terms apply</span> */}
            </p>
          </>
        ) : (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                verifyOtp();
              }}
            >
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
                      const nextInput = document.getElementById(`otp-${i + 1}`);
                      if (nextInput) nextInput.focus();
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace") {
                        e.preventDefault();
                        const otpArray = otp.split("");
                        otpArray[i] = "";
                        setOtp(otpArray.join(""));
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
              {error && <p className="text-appRed text-sm mb-2">{error}</p>}
              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  className="cursor-pointer text-sm text-appDarkGreen"
                  onClick={resendOtpAndClearInputs}
                  disabled={resendTimer > 0}
                >
                  {resendTimer > 0
                    ? `Try again in ${resendTimer}s`
                    : hasTimerStarted
                    ? "Resend OTP"
                    : "Send OTP Again"}
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg px-6 py-2 bg-appDarkGreen text-white text-md"
                >
                  Continue →
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}
