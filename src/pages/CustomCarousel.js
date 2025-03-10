import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomCarousel.css'; // Import custom styles

const CustomSlider = ({ items, settings }) => {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="slider-item">
          {item}
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
