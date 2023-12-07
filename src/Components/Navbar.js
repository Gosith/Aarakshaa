import { React,Component } from "react";
import "./navbarstyle.css";
import { MenuItems } from "./MenuItems";
// import bodyscrolllock from "./bodyscolllock";
import logo from "../assets/Aarakshaa Final Logo 2.png";

class Navbar extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            isScrolled: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollTop = window.scrollY;
        const shouldChangeColor = scrollTop > 100; // Change color after scrolling 100 pixels

        if (shouldChangeColor !== this.state.isScrolled) {
            this.setState({ isScrolled: shouldChangeColor });
        }
    }

  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
    document.body.classList.toggle("lock-scroll");
  };

  
  

  render() {
    const { isScrolled } = this.state;

    return (
      <nav className={`NavBarItems`} >
        {/* <h1 className={`${isScrolled ? 'solid' : 'navbar-logo'}`}>Dawn Resorts</h1> */}
        <div className="logoholder">
          <a href=""><img className={`logo`} src={logo} alt="" /></a>
        </div>
        <div className="menu-icons">
          <i
            onClick={this.handleclick}
            className={(this.state.clicked ? "fa fa-times" : "fas fa-bars")}
          ></i>
        </div>
        <ul className={(this.state.clicked ? "nav-menu active" : "nav-menu")}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {/* <i class={item.icon}></i> */}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;

// function Navbar() {

//     const handleMenuClick = () => {
//         this.setState({clicked:!this.state.clicked})
//     };

//     // Assuming that bodyscrolllock() is a custom hook you've defined
//     // and it returns the 'isLocked' state and a 'toggle' function
//     const [isLocked, toggle] = bodyscrolllock();

//     return (
//         <nav className="NavBarItems">
//             <h1 className="navbar-logo">Dawn Resorts</h1>
//             <div className="menu-icons">
//                 <i onClick={handleMenuClick} className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//             </div>
//             <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//                 {MenuItems.map((item, index) => (
//                     <li key={index}>
//                         <a className={item.cName} href={item.url}>
//                             <i className={item.icon}></i>
//                             {item.title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;
