import React from "react";
import Navbar from "../components/Navbar";
import FooterNote from "../components/FooterNote";
import WhySellSection from "../components/WhySellSectionOnboarding";
import ProgressStepper from "../components/ProgressStepper";
import EmailOnboarding from "../components/EmailOnboarding"
import PasswordOnboarding from "../components/PasswordOnboarding";

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
