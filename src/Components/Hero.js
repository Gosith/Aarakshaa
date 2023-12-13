import { useRef } from "react";
import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="landing-image" alt="HerpImg" src={props.heroImg} />
      </div>
      <div className="hero-text prevent-select">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </>
  );
}

export default Hero;