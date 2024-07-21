import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import img from "../assets/Corporate Office Looper Q3 2021.jpg";
import Footer from "../Components/Footer";
import { React, forwardRef } from "react";
import Disclosure from "../Components/Disclosure";
function AboutUs() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={img}
                title="About Us"
            />
            <Navbar />
            <Disclosure/>
            <Footer />

        </>
    );
}
export default AboutUs;