import React from 'react';
import Swiper from 'swiper';


const ClientReviews = () => {
    React.useEffect(() => {
        new Swiper('.testimonial-carousel-2', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
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
                    slidesPerView: 2,
                },
            },
        });
    }, []);

    return (
        <section className="testimonial-section-2 bg-grey padding">
            <div className="container">
                <div className="section-heading text-center mb-40">
                    <h4><span></span>Clients Testimonial</h4>
                    <h2>Ridek Passenger Reviews...</h2>
                    <p>We successfully cope with tasks of varying complexity, provide long-term <br /> guarantees and regularly master technologies.</p>
                </div>
                <div className="swiper-outside testi-pagination">
                    <div className="testimonial-carousel-2 swiper-container">
                        <div className="swiper-wrapper">
                            {[
                                {
                                    image: '/img/comment-1.png',
                                    name: 'Eredrik Johanson',
                                    company: 'Financial .INC',
                                    review: 'Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesnt with large font phone settings.'
                                },
                                {
                                    image: '/img/comment-2.png',
                                    name: 'Mauricio Fernández',
                                    company: 'Financial .INC',
                                    review: 'Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesnt with large font phone settings.'
                                },
                                {
                                    image: '/img/comment-3.png',
                                    name: 'Javier F. Arébalo',
                                    company: 'Financial .INC',
                                    review: 'Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesnt with large font phone settings.'
                                }
                            ].map((testimonial, index) => (
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
                                                <h3>{testimonial.name} <span>{testimonial.company}</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination text-center"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
