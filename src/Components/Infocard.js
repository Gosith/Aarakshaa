import React from 'react'
import "./Infocard.css";
import { Teamdetails } from "../Data/Teamdetails";

function teamcard() {
    return (
        <div className='member-section'>
            {Teamdetails.map((item, index) => {
                return (

                    <div className='team'>
                        <div className='team-name'>{item.title}</div>
                        <div className='team-members'>
                        {item.team.map((item2, index2) => {
                            return (
                                <div className="member-carousel">
                                    <div className='member-image'>
                                        <div className='member-rounded-image'>

                                            <img className='member-img-area' src={item2.pp} alt="" />
                                            <div className='member-description-div'>

                                            </div>

                                        </div>
                                    </div>
                                    <div className='member-description'>
                                        <h2>{item2.name}</h2>
                                        <h4>{item2.role}</h4>
                                        <p className='member-para'>
                                            {item2.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default teamcard