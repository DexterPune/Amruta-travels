import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <button type="button" className="slick-prev">Previous</button>,
  nextArrow: <button type="button" className="slick-next">Next</button>,
};

const CarouselComponent = () => (
  <div>
    <Slider {...settings}>
      <div><img src="/himg/slider-bg.jpg" alt="Item 1" /></div>
      <div><img src="/img/hjslider-bg.jpg" alt="Item 2" /></div>
      <div><img src="/imgyjh/slider-bg.jpg" alt="Item 3" /></div>
    </Slider>
  </div>
);

export default CarouselComponent;
