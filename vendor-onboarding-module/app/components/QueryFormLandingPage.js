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
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!form.contact1.trim()) {
      newErrors.contact1 = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact1)) {
      newErrors.contact1 = "Please enter a valid email address";
    }

    // Mobile validation (optional, but if provided, must be valid)
    if (form.contact2 && !/^\d{10}$/.test(form.contact2.replace(/\D/g, ''))) {
      newErrors.contact2 = "Please enter a valid 10-digit mobile number";
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/queries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...form,
            createdAt: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          showToast({
            type: "success",
            message: "Thank you! Your submission was successful.",
          });
          setForm({
            name: "",
            contact1: "",
            contact2: "",
            message: "",
          });
        } else {
          const errorData = await response.json();
          showToast({
            type: "error",
            message: errorData.error || "Failed to submit query. Please try again.",
          });
        }
      } catch (error) {
        showToast({
          type: "error",
          message: "An error occurred. Please try again later.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12 bg-white">
      {/* Form Section */}
      <div className="w-full md:w-1/2 max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-appGreen mb-2">
          We are happy to <span className="text-appRed">help you</span>
        </h2>
        <p className="text-sm text-appText mb-6">
          Still have questions or need more clarity?
          Share your queries or suggestions below — your feedback helps us improve your experience on Bharat Agrolink.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name *"
              className={`w-full px-4 py-2 border ${
                errors.name ? 'border-appRed' : 'border-appText'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-appRed text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              name="contact1"
              placeholder="Enter Email ID *"
              className={`w-full px-4 py-2 border ${
                errors.contact1 ? 'border-appRed' : 'border-appText'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
              value={form.contact1}
              onChange={handleChange}
              required
            />
            {errors.contact1 && <p className="text-appRed text-sm mt-1">{errors.contact1}</p>}
          </div>
          <div>
            <input
              type="text"
              name="contact2"
              placeholder="Enter Mobile Number"
              className={`w-full px-4 py-2 border ${
                errors.contact2 ? 'border-appRed' : 'border-appText'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
              value={form.contact2}
              onChange={handleChange}
            />
            {errors.contact2 && <p className="text-appRed text-sm mt-1">{errors.contact2}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Type Your Message *"
              rows={4}
              className={`w-full px-4 py-2 border ${
                errors.message ? 'border-appRed' : 'border-appText'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
              value={form.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="text-appRed text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
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
