import React from 'react'
import "./Infocard.css";
import { Teamdetails } from "./Teamdetails";

function teamcard() {
    return (
        <div className='member-section'>
            {Teamdetails.map((item, index) => {
                return (
                    <div className="member-carousel">
                        <div className='member-image'>
                            <div className='member-rounded-image'>
                                {/* <a className='member-content-link' href="/home"> */}
                                    <img className='member-img-area' src ={item.pp}  alt="" />
                                    <div className='member-description-div'>

                                    </div>
                                {/* </a> */}
                            </div>
                        </div>
                        <div className='member-description'>
                            <h2>{item.name}</h2>
                            <p className='member-para'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default teamcard