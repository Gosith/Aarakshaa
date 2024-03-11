import React from 'react';
import "../Components/Booking.css";
import img1 from "../assets/istockphoto-638374230-612x612.png";

function Booking() {
  return (
    <div className='booking-section'>
        <div className='booking-region'>
            <div className='booking-text'>
               <span className='booking-line'> Book your appointment with us!</span>
                
                <button href="" className='booking-btn'>Book now</button>
            </div>
        </div>
        <div className='booking-img'>
            <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default Booking;