"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const sendOtp = async () => {
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
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/register/dashboard");
    }
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-6">
        <h1 className="text-xl font-semibold text-center">Login</h1>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={sendOtp}
              className="bg-blue-600 text-white py-2 rounded w-full"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={verifyOtp}
              className="bg-green-600 text-white py-2 rounded w-full"
            >
              Verify OTP
            </button>
          </>
        )}

        {serverOtp && (
          <p className="text-sm text-gray-500">Dev OTP: {serverOtp}</p>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
}
