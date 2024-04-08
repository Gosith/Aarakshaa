import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoCarouselStyles.css";
import ANZ from "../assets/Anz Logo Horizontal Blue For Screen_106100.png";
import Aurora from "../assets/Aurora Capital_Logo_COLOUR_RGB.png";
import Milford from "../assets/Milford_Colour.png";
import Generate from "../assets/Generate-logo.png";
import Chubb from "../assets/740_CHUBB_Logo_Purple_RGB.png";

class LogoCarousel extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 0,
      cssEase: "linear"
    };
    return(
      <div className="mainContainer">
        <h1>Our Providers</h1>
        <Slider {...settings}>
          <div className="container">
            <img src={ANZ} />
          </div>
          <div className="container">
            <img src={Aurora} />
          </div>
          <div className="container">
            <img src={Milford}/>
          </div>
          <div className="container-gen">
            <img src={Generate} />
          </div>
          <div className="container-chubb">
            <img src={Chubb} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default LogoCarousel;