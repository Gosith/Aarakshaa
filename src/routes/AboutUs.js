import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FadedLogo from "../Components/InPageLogo";
import img from "../assets/Corporate Office Looper Q3 2021.jpg";
import Footer from "../Components/Footer";
import Aboutus from "../Components/AboutUs";
import { React, forwardRef } from "react";
function AboutUs() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={img}
                title="About Us"
            />
            <Navbar />
            <FadedLogo />
            <Aboutus/>
            <Footer />

        </>
    );
}
export default AboutUs;