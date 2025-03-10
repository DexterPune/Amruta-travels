import React from 'react';
import Swiper from 'swiper';
import { useEffect } from 'react';
const Testimonials = () => {

    useEffect(() => {
        // Initialize Swiper
        new Swiper('.testimonial-carousel-2', {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
        //   loop={true},
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          },
        });
      }, []);
      const testimonials = [
        {
          image: '/img/comment-1.png',
          name: 'Eredrik Johanson',
          company: 'Financial .INC',
          review: 'Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesnt with large font phone settings.',
        },
        {
          image: '/img/comment-2.png',
          name: 'Mauricio Fernández',
          company: 'Financial .INC',
          review: 'Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesnt with large font phone settings.',
        },
        {
          image: '/img/comment-3.png',
          name: 'Javier F. Arébalo',
          company: 'Financial .INC',
          review: 'Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesnt with large font phone settings.',
        },
      ];
  return (
   <div>
     <section className="page-header">
      <div className="page-header-shape"></div>
      <div className="container">
        <div className="page-header-info">
          <h4>Testimonials!</h4>
          <h2>
            Our passengers <span>reviews</span>
          </h2>
          
        </div>
      </div>
    </section>
  


    <section className="testimonial-section-2 bg-grey padding">
      <div className="container">
        <div className="swiper-outside testi-pagination">
          <div className="testimonial-carousel-2 swiper-container">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="testi-item">
                    <div className="quote-icon">
                      <i className="las la-quote-right"></i>
                    </div>
                    <p>{testimonial.review}</p>
                    <div className="testi-author">
                      <div className="author-thumb">
                        <img src={testimonial.image} alt="author" />
                      </div>
                      <div className="author-info">
                        <h3>
                          {testimonial.name} <span>{testimonial.company}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination text-center"></div>
            {/* Carousel Arrows */}
            <div className="swiper-nav swiper-next">
              <i className="las la-long-arrow-alt-right"></i>
            </div>
            <div className="swiper-nav swiper-prev">
              <i className="las la-long-arrow-alt-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>

  );
};

export default Testimonials;
