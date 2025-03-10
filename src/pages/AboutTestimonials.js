import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

// Sample testimonials data
const testimonials = [
    {
        id: 1,
        name: 'Miss Anita Sharma',
        text: 'Amruta Travels provided an exceptional experience. The service was impeccable and the journey was incredibly smooth. Highly recommend!',
        position: 'Customer',
    },
    {
        id: 2,
        name: 'Mr. Sumit Sen',
        text: 'I had a fantastic experience with Amruta Travels. Their attention to detail and customer service made my trip unforgettable. Will definitely use their services again.',
        position: 'Customer',
    },
    {
        id: 3,
        name: 'Mr. Robin Singh',
        text: 'The team at Amruta Travels went above and beyond to ensure a seamless travel experience. Their expertise and dedication were evident throughout my journey.',
        position: 'Frequent Traveler',
    }
    // Add more testimonials as needed
];

const AboutTestimonials = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Default to 1 slide on smaller screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Hide arrows for a cleaner look
        responsive: [
            {
                breakpoint: 1024, // For large screens
                settings: {
                    slidesToShow: 2, // Show 2 testimonials side-by-side
                    slidesToScroll: 2, // Scroll 2 slides at a time
                }
            },
            {
                breakpoint: 768, // For medium screens
                settings: {
                    slidesToShow: 1, // Show 1 testimonial per slide on smaller screens
                    slidesToScroll: 1,
                }
            }
        ],
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <h2 style={headingStyle}>What Our Clients Say</h2>
                <Slider {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} style={slideContainerStyle}>
                            <div style={slideStyle}>
                                <p style={textStyle}>
                                    "{testimonial.text}"
                                </p>
                                <div style={namePositionContainerStyle}>
                                    <h4 style={nameStyle}>{testimonial.name}</h4>
                                    <p style={positionStyle}>{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

// Styles
const sectionStyle = {
    padding: '0px 20px',
    backgroundColor: '#f1f1f1',
};

const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    // padding: '0 15px',
};

const headingStyle = {
    textAlign: 'center',
    color: '#343a40',
    marginBottom: '30px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
};

const slideContainerStyle = {
    padding: '0 10px',
};

const slideStyle = {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const textStyle = {
    fontStyle: 'italic',
    color: '#555',
    fontSize: '1.1rem',
    marginBottom: '20px',
};

const namePositionContainerStyle = {
    textAlign: 'center',
};

const nameStyle = {
    margin: '5px 0',
    color: '#FF7700',
    fontSize: '1.2rem',
};

const positionStyle = {
    color: '#FF7700',
    fontSize: '0.9rem',
};

export default AboutTestimonials;
