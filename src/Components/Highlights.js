import React from 'react'
import img1 from "../assets/ols.jpeg";
import "./Highlights.css";
import { Highlightsitems } from "../Data/Highlightsitems";

function Highlights() {
    return (
        <div className='highlights-div'>
            <div className='icon-list'>
                {Highlightsitems.map((item, index) => {
                    return (
                        <>
                        <div className='highlight-icon'>
                            <div className='icon-wrapper'>
                               <div className={item.cname+' '+item.iconname}></div>
                            </div>
                            <div className='highlight-desc'>
                                <span className='high-desc'>
                                    {item.title}
                                </span>
                            </div>
                        </div>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Highlights