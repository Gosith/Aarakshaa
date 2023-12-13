import React from 'react'
import FadedLogo from "../Components/InPageLogo";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import img from "../assets/Corporate Office Looper Q3 2021.jpg";
import Hero from "../Components/Hero";
function Services() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={img}
                title="Our Services"
            />
            <FadedLogo />
            <Footer />
        </>
    )
}

export default Services