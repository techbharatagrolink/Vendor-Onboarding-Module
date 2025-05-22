"use client";

import { useState } from "react";
import Image from "next/image";
import Toast from "./Toast";
import useToast from "../../hooks/useToast";

export default function QueryFormLandingPage() {
  const { toast, showToast, closeToast } = useToast();
  const [form, setForm] = useState({
    name: "",
    contact1: "",
    contact2: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Add API call or handling logic
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12 bg-white">
      {/* Form Section */}
      <div className="w-full md:w-1/2 max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-appGreen mb-2">
          We are happy to <span className="text-appRed">help you</span>
        </h2>
        <p className="text-sm text-appText mb-6">
          Still have questions or queries that are left unanswered? Share your
          thoughts below which will help us improve your website experience.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name *"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact1"
            placeholder="Enter Mobile Number/ Email ID *"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={form.contact1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact2"
            placeholder="Enter Mobile Number/ Email ID *"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={form.contact2}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Type Your Message *"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            onClick={() =>
              showToast({
                type: "success",
                message: "Query Sent Successfully!",
              })
            }
            className="bg-appGreen text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Query
          </button>
        </form>
      </div>

      {/* Illustration Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/query.svg"
          alt="Query Form Illustration"
          width={400}
          height={300}
          className="max-w-md w-full"
        />
      </div>
      {toast && (
        <Toast type={toast.type} message={toast.message} onClose={closeToast} />
      )}
    </div>
  );
}
