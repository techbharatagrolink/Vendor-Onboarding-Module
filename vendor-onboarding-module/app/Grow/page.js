import React from "react";
import Navbar from "../components/Navbar";
import GrowSectionHero from "../components/GrowHeroSection";
import Features from "../components/Features";
import SuccessStories from "../components/SuccessStories";
import GrowStickySection from "../components/GrowStickySection";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";
export default function Page(){
    return (
        <>
        <Navbar/>
        <GrowSectionHero/>
        <Features/>
        <SuccessStories/>
        <GrowStickySection/>
        <Footer/>
        <FooterNote/>
        </>
    )

}