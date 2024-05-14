import React from 'react'
import FadedLogo from "../Components/InPageLogo";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import img from "../assets/Corporate Office Looper Q3 2021.jpg";
import Hero from "../Components/Hero";
import ksaver from "../assets/ols.jpeg";
import persins from "../assets/russel.jpg";
import mort from "../assets/keys.jpg";
import illness from "../assets/ill.jpg";
import trauma from "../assets/trauma.jpg";
import disabled from "../assets/disability.jpg";

function Services() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={img}
                title="Our Services"
            />
            <FadedLogo />
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
                        <h2>Kiwi Saver</h2>
                        <p className='service-para-rev'>When we grow old we naturally think about a peaceful retirement. It can only be done if you have a good bank balance at the time you retire. We all know that KIWI-SAVER is our main source of retirement fund and unfortunately, the majority have no idea what needs to be done in order increase the retirement fund when you need it most. We work with a few KiwiSaver funds so we can make sure that you money will be in the right fund to give you the best return depending on your age, income and the time left for retirement.</p>
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
                <div className="service-carousel-rev" >
                    <div className='service-description-rev'>
                        <h2>Total Permanent Disability</h2>
                        <p className='service-para-rev'>Total and Permanent Disability (TPD) Cover provides a lump sum payment if you cannot do your current occupation ever again. This can often be misled by advisors or Financial Institutes mentioning the same, but you may be covered only under "Any Occupation " category which is very harder to claim. This is very important for certain occupations and having a good idea before you take the cover is very important. This is a cover which is important for people who are on work visa, there is risk and reason behind it and we will explain you well. Call us today.
                            </p>
                    </div>
                    <div className='service-image'>
                        <div className='rounded-image'>
                            <a className='content-link' href="/home">
                                <img className='img-area' src={disabled} alt="" />
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
                                <img className='img-area' src={trauma} alt="" />
                                <div className='description-div'>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='service-description'>
                        <h2>Trauma Cover</h2>
                        <p className='service-para'>Trauma Cover provides a lump-sum payment should you suffer one of the Covered Conditions listed by your provider. These range from Cancer, Strokes, Heart Attacks, through to Dementia. The Covered Conditions are by nature serious and potentially life-threatening and, as a result, can have a significant financial impact. Trauma Cover is designed to help alleviate this financial impact.</p>
                    </div>
                </div>
                <div className="service-carousel-rev" >
                    <div className='service-description-rev'>
                        <h2>Life and Terminal illness</h2>
                        <p className='service-para-rev'>A cover which you cannot take when you need it, it will be too late. Yes, your family and loved ones need some protection if you are no longer available to look after them. This is exactly what a life Insurance do. Having young kids, a big mortgage and if you don’t have enough savings, then talk to us. It is not just taking a life insurance it is taking the right cover and the right amount which suits your budget. We will explain everything in plain English and we can promise you that we don’t push you to take a cover, instead we will educate you so that you take a cover with confidence and from the best advisors. Regular ongoing reviews, changing the cover according to your needs and helping at the claim times are very important and we can assure that we are available when you need us most, including week-ends.
                            </p>
                    </div>
                    <div className='service-image'>
                        <div className='rounded-image'>
                            <a className='content-link' href="/home">
                                <img className='img-area' src={illness} alt="" />
                                <div className='description-div'>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Services