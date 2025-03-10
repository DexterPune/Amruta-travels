import React from 'react';
import Swiper from 'swiper';



const RelatedTaxis = () => {
    // Initialize Swiper after component mounts
    React.useEffect(() => {
        new Swiper('.taxi-carousel', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }, []);

    return (
        <section className="related-taxi bg-grey padding">
            <div className="container">
                <div className="section-heading text-center mb-40">
                    <h4><span></span>Our More Taxis</h4>
                    <h2>Related Taxis To Ride</h2>
                    <p>We successfully cope with tasks of varying complexity, provide long-term <br /> guarantees and regularly master new technologies.</p>
                </div>
                {/*/.section-heading*/}
                <div className="swiper-outside">
                    <div className="taxi-carousel swiper-container">
                        <div className="swiper-wrapper">
                            {[
                                {
                                    carImage: '/img/pricing-car.png',
                                    price: '$2.50/km',
                                    model: 'BMW X5 2008',
                                    location: 'Chicago',
                                    initialCharge: '$2.50',
                                    perMile: '$4.20',
                                    stoppedTraffic: '$1.50',
                                    passengers: '4 Person'
                                },
                                {
                                    carImage: '/img/pricing-car.png',
                                    price: '$3.50/km',
                                    model: 'Mercedes‑Benz',
                                    location: 'Florida',
                                    initialCharge: '$2.50',
                                    perMile: '$4.20',
                                    stoppedTraffic: '$1.50',
                                    passengers: '4 Person'
                                },
                                {
                                    carImage: '/img/pricing-car.png',
                                    price: '$4.50/km',
                                    model: 'Hyundai 2022',
                                    location: 'New York',
                                    initialCharge: '$2.50',
                                    perMile: '$4.20',
                                    stoppedTraffic: '$1.50',
                                    passengers: '4 Person'
                                },
                                {
                                    carImage: '/img/pricing-car.png',
                                    price: '$2.50/km',
                                    model: 'BMW X5 2008',
                                    location: 'Chicago',
                                    initialCharge: '$2.50',
                                    perMile: '$4.20',
                                    stoppedTraffic: '$1.50',
                                    passengers: '4 Person'
                                }
                            ].map((taxi, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="pricing-item">
                                        <div className="pricing-head-wrap">
                                            <div className="pricing-car">
                                                <img src={taxi.carImage} alt="car" />
                                                <div className="price">{taxi.price}</div>
                                            </div>
                                        </div>
                                        <div className="pricing-head">
                                            <h3><a href="">{taxi.model}</a></h3>
                                            <span className="location">{taxi.location}</span>
                                        </div>
                                        <ul className="pricing-list">
                                            <li>Initial Charge: <span>{taxi.initialCharge}</span></li>
                                            <li>Per Mile/KM: <span>{taxi.perMile}</span></li>
                                            <li>Per Stopped Traffic: <span>{taxi.stoppedTraffic}</span></li>
                                            <li>Passengers: <span>{taxi.passengers}</span></li>
                                            <li><a href="book-taxi" className="default-btn">Book Taxi Now</a></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    {/* Carousel Arrows */}
                    <div className="swiper-nav swiper-next"><i className="las la-long-arrow-alt-right"></i></div>
                    <div className="swiper-nav swiper-prev"><i className="las la-long-arrow-alt-left"></i></div>
                </div>
            </div>
        </section>
    );
};

export default RelatedTaxis;
