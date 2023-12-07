import React from 'react';
import "./InPageLogo.css";
import bgimg from "../assets/Aarakshaa Final Logo 1 (1).png";

function InPageLogo() {
  return (
    <div className='faded-logo'>
        <img src={bgimg} alt="" />
    </div>
  )
}

export default InPageLogo