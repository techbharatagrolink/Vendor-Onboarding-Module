import React  from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import SuccessStories from "../components/SuccessStories";
import LearnHeroSection from "../components/LearnHeroSection";
import LearnStickySection from "../components/LearnStickySection";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";
export default function Page(){
    return (
        <>
        <Navbar/>
        <LearnHeroSection/>
        <Features/>
        <SuccessStories/>
        <LearnStickySection/>
        <Footer/>
        <FooterNote/>


        </>
        

    )
}