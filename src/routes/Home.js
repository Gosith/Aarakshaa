import Navbar from "../Components/Navbar";
import Slider from "../Components/slideshow";
import Description from "../Components/Description";
import Booking from "../Components/Booking";
import FadedLogo from "../Components/InPageLogo";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import Highlights from "../Components/Highlights";
import LogoCarousel from "../Components/LogoCarousel";

import { React, forwardRef } from "react";
function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            <Description />
            <Booking />
            <Highlights/>
            {/* <FadedLogo /> */}
            <LogoCarousel />
            <Services />
            <Footer />
        </>
    );
}
export default Home;