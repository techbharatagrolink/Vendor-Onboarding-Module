"use client";

import Navbar from "./components/Navbar";
import HeroSectionLandingPage from "./components/HeroSectionLandingPage";
import NumbersandFiguresLandingPage from "./components/NumbersandFiguresLandingPage";
import WhySellSectionLandingPage from "./components/WhySellSectionLandingPage";
import SellerSuccessStoriesSectionLandingPage from "./components/SellerSuccessStoriesSectionLandingPage";
import AccesstoourToolsSectionLandingPage from "./components/AccesstoourToolsSectionLandingPage";
import YourJourneyonBharatAgrolinkSectionLandingPage from "./components/YourJourneyonBharatAgrolinkSectionLandingPage";
import YourGatewaytoSellingOnlineSectionLandingPage from "./components/YourGatewaytoSellingOnlineSectionLandingPage";
import SneakPeakSectionLandingPage from "./components/SneakPeakSectionLandingPage";
import QueryFormLandingPage from "./components/QueryFormLandingPage";
import Footer from "./components/Footer";
import FooterNote from "./components/FooterNote";
import { FormProvider } from "./context/FormContext";
import Toast from "./components/Toast";
import useToast from "@/hooks/useToast";

export default function Home() {
  const { toast, showToast, closeToast } = useToast();

  return (
    <FormProvider>
      <Navbar />
      {/* <div>
        <button
          className="bg-appGreen text-white px-4 py-2 rounded"
          onClick={() =>
            showToast({
              type: "success",
              message: "Form Submitted Successfully!",
            })
          }
        >
          Show Success
        </button>
        <button
          className="bg-appRed text-white px-4 py-2 rounded ml-4"
          onClick={() =>
            showToast({ type: "error", message: "Something went wrong!" })
          }
        >
          Show Error
        </button>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={closeToast}
          />
        )}
      </div> */}
      <HeroSectionLandingPage />
      <NumbersandFiguresLandingPage />
      <WhySellSectionLandingPage />
      <SellerSuccessStoriesSectionLandingPage />
      <YourJourneyonBharatAgrolinkSectionLandingPage />
      {/* <AccesstoourToolsSectionLandingPage /> */}
      <YourGatewaytoSellingOnlineSectionLandingPage />
      <SneakPeakSectionLandingPage />
      <QueryFormLandingPage />
      <Footer />
      <FooterNote />
    </FormProvider>
  );
}
// "use client";

// import Image from "next/image";
// import Navbar from "./components/Navbar";
// import HeroSectionLandingPage from "./components/HeroSectionLandingPage";
// import NumbersandFiguresLandingPage from "./components/NumbersandFiguresLandingPage";
// import WhySellSectionLandingPage from "./components/WhySellSectionLandingPage";
// import SellerSuccessStoriesSectionLandingPage from "./components/SellerSuccessStoriesSectionLandingPage";
// import AccesstoourToolsSectionLandingPage from "./components/AccesstoourToolsSectionLandingPage";
// import YourJourneyonBharatAgrolinkSectionLandingPage from "./components/YourJourneyonBharatAgrolinkSectionLandingPage";
// import YourGatewaytoSellingOnlineSectionLandingPage from "./components/YourGatewaytoSellingOnlineSectionLandingPage";
// import SneakPeakSectionLandingPage from "./components/SneakPeakSectionLandingPage";
// import QueryFormLandingPage from "./components/QueryFormLandingPage";
// import Footer from "./components/Footer";
// import FooterNote from "./components/FooterNote";
// import { FormProvider } from "./context/FormContext";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Toast from "./components/Toast";
// import useToast from "@/hooks/useToast";

// export default function Home() {
//   const { toast, showToast, closeToast } = useToast();
//   const router = useRouter();
//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       router.push("/register/dashboard");
//     }
//   }, [router]);
//   return (
//     <>
//       <FormProvider>

//         <Navbar />
//         <div>
//       <button
//         className="bg-appGreen text-white px-4 py-2 rounded"
//         onClick={() => showToast({ type: "success", message: "Form Submitted Successfully!" })}
//       >
//         Show Success
//       </button>
//       <button
//         className="bg-appRed text-white px-4 py-2 rounded ml-4"
//         onClick={() => showToast({ type: "error", message: "Something went wrong!" })}
//       >
//         Show Error
//       </button>

//       {toast && <Toast type={toast.type} message={toast.message} onClose={closeToast} />}
//     </div>
//         <HeroSectionLandingPage />
//         <NumbersandFiguresLandingPage />
//         <WhySellSectionLandingPage />
//         <SellerSuccessStoriesSectionLandingPage />
//         <YourJourneyonBharatAgrolinkSectionLandingPage />
//         <AccesstoourToolsSectionLandingPage />
//         <YourGatewaytoSellingOnlineSectionLandingPage />
//         <SneakPeakSectionLandingPage />
//         <QueryFormLandingPage />
//         <Footer />
//         <FooterNote />
//       </FormProvider>
//     </>
//   );
// }
