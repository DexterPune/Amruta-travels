import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const testimonials = [
  {
    id: 1,
    text: 'Amruta Travels truly exceeded my expectations during my recent business trip. The booking process was straightforward, and their customer service team was always available to answer my questions and provide assistance. They arranged a comfortable and convenient itinerary that allowed me to focus on my work without worrying about travel logistics.',
    author: {
      name: 'Miss. Sonia Mehta',
      title: 'Financial .INC',
      imgSrc: '/img/comment-1.png'
    }
  },
  {
    id: 2,
    text: 'I recently booked a weekend getaway to Goa with Amruta Travels, and the entire experience was fantastic. Their team took care of every detail, from selecting the perfect beachfront resort to organizing local tours and activities. They provided excellent recommendations for restaurants and attractions, ensuring we made the most of our time there.',
    author: {
      name: 'Miss. Meera Desai',
      title: 'Financial .INC',
      imgSrc: '/img/comment-1.png'
    }
  },
  {
    id: 3,
    text: 'We had an amazing family vacation exploring the beautiful cities of Rajasthan, and Amruta Travels played a crucial role in making it memorable. Their itinerary included everything we wanted to see and do, from visiting palaces and forts to enjoying local cuisine. The accommodations were comfortable and well-located, and the local transport arrangements were flawless.',
    author: {
      name: 'Mr. Ravi Kumar',
      title: 'Financial .INC',
      // imgSrc: '/img/comment-1.png'
    }
  }
];

const features = [
  {
    id: 1,
    icon: 'las la-gem',
    title: 'Safe Guarantee',
    description: 'We successfully cope with tasks of varying complexity!'
  },
  {
    id: 2,
    icon: 'las la-taxi',
    title: 'Fast Pickups',
    description: 'We successfully cope with tasks of varying complexity!'
  },
  {
    id: 3,
    icon: 'las la-tachometer-alt',
    title: 'Quick Ride',
    description: 'We successfully cope with tasks of varying complexity!'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section bd-bottom bg-grey">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-heading mb-10">
              <h4><span></span>Clients Testimonial</h4>
              <h2>Amruta Travel Passenger Reviews...</h2>
              <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master technologies.</p>
            </div>
            <div className="swiper-outside testi-pagination">
              <Swiper
                className="testimonial-carousel"
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: '.swiper-next',
                  prevEl: '.swiper-prev',
                }}
              >
                {testimonials.map((testi) => (
                  <SwiperSlide key={testi.id}>
                    <div className="testi-item px-0">
                      <div className="quote-icon"><i className="las la-quote-right"></i></div>
                      <p>{testi.text}</p>
                      <div className="testi-author">
                        {/* <div className="author-thumb"><img src={testi.author.imgSrc} alt="author" /></div> */}
                        <div className="author-info">
                          <h3>{testi.author.name} </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <div className="feature-wrap px-0">
              <div className="section-heading mb-30 wow fade-in-right" data-wow-delay="200ms">
                <h4 className="white"><span></span>Why Choose Us!</h4>
                <h2 className="white">Why Trip With Amruta Travel?</h2>
                <p className="white">We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master technologies.</p>
              </div>
              <ul className="ridek-features">
                {features.map((feature) => (
                  <li key={feature.id} className="wow fade-in-right" data-wow-delay={`${300 + feature.id * 100}ms`}>
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
