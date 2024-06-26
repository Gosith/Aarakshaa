import React from 'react'
import "./services.css";
import ksaver from "../assets/ols.jpeg";
import persins from "../assets/russel.jpg";
import mort from "../assets/istockphoto-1368330586-170667a.webp";

function Services() {
    return (
        <div className='services-section'>
            {/* <h1 className='services-heading'>
                OUR SERVICES
            </h1>
            <span className="breaker"></span> */}
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
                    <p className='service-para'>Firstly, you need to realize that you need to be around your family to guide them so having a great personal insurance consist of Life, Trauma, Income and Medical covers are very important. We have over 8 years of experience sorting out over 1500 clients in order to offer the best suitable plans for their individual needs in Aoteroa. So why not you!!! Call us today and sort yours too.</p>
                </div>
            </div>
            <div className="service-carousel-rev" >
                <div className='service-description-rev'>
                    <h2>KiwiSaver</h2>
                    <p className='service-para-rev'>When we grow old we naturally think about a peaceful retirement. It can only be done if you have a good bank balance at the time you retire. We all know that KiwiSaver is our main source of retirement fund and unfortunately, the majority have no idea what needs to be done in order increase the retirement fund when you need it most. We work with a few KiwiSaver funds so we can make sure that you money will be in the right fund to give you the best return depending on your age, income and the time left for retirement.</p>
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
                    <h2>Mortgages</h2>
                    <p className='service-para'>Our experienced team will help you to sort out your first home or your investment property from the Bank that suits you well. When we say a team it is not just one person but got four qualified Mortgage Brokers to discuss and decide the best package which suits your family well. We understand that you are busy too and you don’t have time to go to each and every bank to find out which offers you the best deal, instead, we will do the hard work for you and get the most suitable and relevant advice within a very short period of time. Why wait, give our friendly team a call now…</p>
                </div>
            </div>
        </div>
    )
}

export default Services