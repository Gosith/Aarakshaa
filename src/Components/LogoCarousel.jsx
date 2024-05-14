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

  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 850 // Initially checking if the screen width is less than 850px
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize); // Adding event listener for window resize
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); // Removing event listener when component unmounts
  }

  handleResize() {
    this.setState({
      isMobile: window.innerWidth < 850 // Updating isMobile state based on screen width
    });
  }

  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: this.state.isMobile ? 1 : 4,
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
          <div className="container-mil">
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