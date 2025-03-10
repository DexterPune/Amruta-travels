
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
const OfferingsSection = () => {
  return (
    <section className="service-section bg-grey padding">
      <div className="bg-half"></div>
      <div className="container">
        <div className="section-heading text-center mb-40 wow fade-in-bottom" data-wow-delay="200ms">
          <h4><span></span>What We Offer</h4>
          <h2 className="white">Start your journey with<br />Amruta Travel</h2>
          <p>We successfully cope with tasks of varying complexity, provide long-term <br />guarantees and regularly master new technologies.</p>
        </div>
        {/*/.section-heading*/}
        <div className="swiper-outside">
         
          
          <Swiper
      className="service-carousel"
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }}
      breakpoints={{
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is <= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is <= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >




            <SwiperSlide>
              <div className="service-item wow fade-in-bottom" data-wow-delay="200ms">
                <div className="service-thumb">
                  <img src="\img\tempo-ttt.webp" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><img src="\img\Img for Booking\Img for Booking-03.png" loading="lazy" alt="car" /></div>
                </div>
                <div className="service-content">
                  <h3><a href="service">Tempo Traveller</a></h3>
                  <p>Everything your taxi business needs is already here! Amruta Travel made for taxi service companies!</p>
                  <Link className="read-more" to="/service">Read More</Link>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-item wow fade-in-bottom" data-wow-delay="400ms">
                <div className="service-thumb">
                  <img src="\img\Toyota-2.jpg" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><img src="\img\Img for Booking\Img for Booking-033.png" loading="lazy" alt="car" /></div>
                </div>
                <div className="service-content">
                  <h3><a href="service">Mini Bus</a></h3>
                  <p>Everything your taxi business needs is already here! Amruta Travel made for taxi service companies!</p>
                  <Link className="read-more" to="/service">Read More</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-item wow fade-in-bottom" data-wow-delay="600ms">
                <div className="service-thumb">
                  <img src="\img\32-seater-ac.png" alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><img src="\img\Img for Booking\Img for Booking-08.png" loading="lazy" alt="car" /></div>
                </div>
                <div className="service-content">
                  <h3><a href="service">32 Seater Ac</a></h3>
                  <p>Everything your taxi business needs is already here! Amruta Travel made for taxi service companies!</p>
                  <Link className="read-more" to="/service">Read More</Link>


                </div>
              </div>
            </SwiperSlide>
           
          </Swiper>
          <div className="swiper-pagination"></div>
          <div className="swiper-nav swiper-next"><i className="las la-long-arrow-alt-right"></i></div>
          <div className="swiper-nav swiper-prev"><i className="las la-long-arrow-alt-left"></i></div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
