import React from 'react'
import "./Footerstyles.css"

function footer() {
    return (
        <div className='footer-div'>
            <div className='footer-content'>
                <div className='footer-name'><a href="/">AARAKSHAA</a></div>
                <div className='footer-logos'>
                    <a href="https://web.facebook.com/profile.php?id=100088991864049">
                        <i className="fa-brands fa-facebook-square fa-2xl"></i>
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=100088991864049">
                        <i className="fa-brands fa-instagram-square fa-2xl"></i>
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=100088991864049">
                        <i className="fa-brands fa-whatsapp fa-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default footer