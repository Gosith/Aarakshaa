import React from 'react'
import FadedLogo from "../Components/InPageLogo";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import img from "../assets/Corporate Office Looper Q3 2021.jpg";
import Hero from "../Components/Hero";
import ContactFrm from "../Components/ContactForm";
function Contact() {
  return (
    <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={img}
                title="Contact"
            />
            <FadedLogo />
            <ContactFrm/>
            <Footer />
        </>
  )
}

export default Contact