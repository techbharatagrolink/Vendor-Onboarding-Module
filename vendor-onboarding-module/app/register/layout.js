import React from "react";
import Navbar from "../components/Navbar";
import FooterNote from "../components/FooterNote";
import WhySellSection from "../components/WhySellSectionOnboarding";

const Register = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <WhySellSection />
      <FooterNote />
    </>
  );
};

export default Register;
