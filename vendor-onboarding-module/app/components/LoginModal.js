import React from "react";

import { IoClose } from "react-icons/io5";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
            <IoClose className="w-5 h-5 text-appText" />
          </button>
        </div>

        <form>
          <input
            type="text"
            placeholder="Username or phone number or email *"
            className="w-full border border-gray-300 px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-appGreen text-white py-2 rounded hover:bg-green-700 transition"
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
            className="border border-appGreen text-appGreen text-sm px-6 py-3 rounded hover:bg-green-50 transition"
          >
            Register for new account
          </button>
        </div>

        <p className="text-xs text-appText mt-4 text-center">
          By continuing, you agree to Bharat Agrolink’s
          <span className="text-appGreen"> Terms of Use</span> &
          <span className="text-appGreen"> Privacy Policy</span>. Site protected
          by reCAPTCHA & Google
          <span className="text-appGreen"> Privacy Policy</span>.
          <span className="text-appGreen"> Terms apply</span>
        </p>
      </div>
    </>
  );
};

export default LoginModal;
