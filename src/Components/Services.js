import React from 'react'
import "./services.css";
import { ServiceItems } from "./ServiceItems";
import ksaver from "../assets/ols.jpeg";
import persins from "../assets/russel.jpg";
import mort from "../assets/istockphoto-1368330586-170667a.webp";

function Services() {
    return (
        <div className='services-section'>
            <h1 className='services-heading'>
                OUR SERVICES
            </h1>
            <span className="breaker"></span>
            <div className="service-carousel">
                <div className='service-image'>
                    <div className='rounded-image'>
                        <a className='content-link' href="/home">
                            <img className='img-area' src={persins} alt="" />
                            <div className='description-div'>

                            </div>
                        </a>
                    </div>
                </div>
                <div className='service-description'>
                <h2>Personal Insurance</h2>
                    <p className='service-para'>For families with young adventurers, we provide an array
                    of kid-friendly activities, from nature exploration to educational
                    fun- like birdwatching. Dawn Resorts is more than just a place to
                    stay; it's a destination where you can reconnect with the natural
                    world while enjoying the comforts of luxurious accommodations and
                    delicious local cuisine.</p>
                </div>
            </div>
            <div className="service-carousel-rev" >
            <div className='service-description-rev'>
            <h2>Kiwi Saver</h2>
                    <p className='service-para-rev'>For families with young adventurers, we provide an array
                    of kid-friendly activities, from nature exploration to educational
                    fun- like birdwatching. Dawn Resorts is more than just a place to
                    stay; it's a destination where you can reconnect with the natural
                    world while enjoying the comforts of luxurious accommodations and
                    delicious local cuisine.</p>
                </div>
                <div className='service-image'>
                    <div className='rounded-image'>
                        <a className='content-link' href="/home">
                            <img className='img-area' src={ksaver} alt="" />
                            <div className='description-div'>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className="service-carousel">
                <div className='service-image'>
                    <div className='rounded-image'>
                        <a className='content-link' href="/home">
                            <img className='img-area' src={mort} alt="" />
                            <div className='description-div'>

                            </div>
                        </a>
                    </div>
                </div>
                <div className='service-description'>
                    <h2>Personal Insurance</h2>
                    <p className='service-para'>For families with young adventurers, we provide an array
                    of kid-friendly activities, from nature exploration to educational
                    fun- like birdwatching. Dawn Resorts is more than just a place to
                    stay; it's a destination where you can reconnect with the natural
                    world while enjoying the comforts of luxurious accommodations and
                    delicious local cuisine.</p>
                </div>
            </div>
        </div>
    )
}

export default Services