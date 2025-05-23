import React from 'react'
import Navbar from '../components/Navbar'
import SellOnlineHero from '../components/SellOnlineHero'
import Features from '../components/Features'
import SuccessStories from '../components/SuccessStories'
import StickySection from '../components/SellOnlineSticky'
import StorageAndShipping from '../components/StorageAndShipping'
import Footer from '../components/Footer'
import FooterNote from '../components/FooterNote'
import SellOnlineSticky from '../components/SellOnlineSticky'

export default function Page(){
    return (
        <>
        <Navbar/>
        <SellOnlineHero/>
        <Features/>
        <SuccessStories/>
        <SellOnlineSticky/>
        <Footer/>
        <FooterNote/>
        </>
    )
}


