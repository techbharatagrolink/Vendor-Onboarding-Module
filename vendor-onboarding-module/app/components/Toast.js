"use client";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";

export default function Toast({ type = "success", message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000); // Auto close after 4s
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[320px] shadow-lg rounded border border-gray-200 bg-white`}
    >
      <div className="flex items-start p-4">
        <div
          className={`p-2 rounded ${isSuccess ? "bg-appGreen" : "bg-appRed"}`}
        >
          {isSuccess ? (
            <IoCheckmarkSharp className="text-white w-4 h-4" />
          ) : (
            <MdError className="text-white w-4 h-4" />
          )}
        </div>
        <div className="ml-3 text-sm text-appText flex-grow">{message}</div>
        <button className="text-appText hover:text-appGreen" onClick={onClose}>
          <IoClose className="w-5 h-5" />
        </button>
      </div>
      <div className={`h-1 ${isSuccess ? "bg-appGreen" : "bg-appRed"}`}></div>
    </div>
  );
}
