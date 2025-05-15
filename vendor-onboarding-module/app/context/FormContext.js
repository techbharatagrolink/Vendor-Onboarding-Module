"use client";

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    address: "",
    state: "",
    city: "",
    pincode: "",
    signature: "",
    // add more fields as needed
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const clearFormData = () => {
    setFormData({
      address: "",
      state: "",
      city: "",
      pincode: "",
      signature: "",
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, clearFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
