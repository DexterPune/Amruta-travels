import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const pricingData = {
  'hybrid-taxi': [
    {
      imgSrc: '/img/Img for Booking/Img for Booking-01.png',
      title: 'Urbania',
      location: 'Pune',
      initialCharge: '$2.50',
      perMileKm: '$4.20',
      stoppedTraffic: '$1.50',
      passengers: '13 Person',
    },
    {
      imgSrc: '/img/Img for Booking/Img for Booking-03.png',
      title: 'Tempo Traveller',
      location: 'Pune',
      initialCharge: '$2.50',
      perMileKm: '$4.20',
      stoppedTraffic: '$1.50',
      passengers: '13 Person',
    },
    {
      imgSrc: '/img/Img for Booking/Img for Booking-05.png',
      title: 'Tata Winger',
      location: 'Pune',
      initialCharge: '$2.50',
      perMileKm: '$4.20',
      stoppedTraffic: '$1.50',
      passengers: '14 Person',
    },
    {
      imgSrc: '/img/Img for Booking/Img for Booking-08.png',
      title: '32 Seater Bus',
      location: 'Pune',
      initialCharge: '$2.50',
      perMileKm: '$4.20',
      stoppedTraffic: '$1.50',
      passengers: '32 Person',
    },
    {
      imgSrc: '/img/Img for Booking/Img for Booking-10.png',
      title: '40 Seater Bus',
      location: 'Pune',
      initialCharge: '$2.50',
      perMileKm: '$4.20',
      stoppedTraffic: '$1.50',
      passengers: '40 Person',
    },
    {
      imgSrc: '/img/Img for Booking/Img for Booking-13.png',
      title: 'Luxury Bus',
      location: 'Pune',
      initialCharge: '$2.50',
      perMileKm: '$4.20',
      stoppedTraffic: '$1.50',
      passengers: '45 Person',
    },
  ],
  
};

const PricingSection = () => {
  const [activeTab] = useState('hybrid-taxi');

 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on larger screens
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the speed of autoplay in milliseconds (e.g., 3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // Smaller devices (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };
  
  return (
    <section className="pricing-section bg-grey bd-bottom padding p-0">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <h4><span></span>Lets Go With Us!</h4>
          <h2>Choose Your preferred Ride!</h2>
          <p>We successfully cope with tasks of varying complexity, provide long-term <br />guarantees and regularly master new technologies.</p>
        </div>

        <div className="tab-content">
          <Slider {...settings}>
            {pricingData[activeTab].map((item, index) => (
              <div key={index} className="pricing-item">
                <div className="pricing-head-wrap">
                  <div className="pricing-car">
                    <img src={item.imgSrc} alt="car" />
                  </div>
                </div>
                <div className="pricing-head">
                  <h3><a href="">{item.title}</a></h3>
                  <span className="location">{item.location}</span>
                </div>
                <ul className="pricing-list">
                  <li>Passengers: <span>{item.passengers}</span></li>
                  <li><Link to="/book-taxi" className="default-btn">Book Now</Link></li>
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

