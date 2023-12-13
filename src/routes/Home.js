import Navbar from "../Components/Navbar";
import Slider from "../Components/slideshow";
import Description from "../Components/Description";
import Booking from "../Components/Booking";
import FadedLogo from "../Components/InPageLogo";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import Highlights from "../Components/Highlights";

import { React, forwardRef } from "react";
function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            <Description />
            <Booking />
            <Highlights/>
            <FadedLogo />
            <Services />
            <Footer />
        </>
    );
}
export default Home;