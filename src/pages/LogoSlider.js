import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 5,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const logos = [
    "/img/corporat/Corporate Customer Logo on Website-01.jpg",
    "/img/corporat/Corporate Customer Logo on Website-02.jpg",
    "/img/corporat/Corporate Customer Logo on Website-03.jpg",
    "/img/corporat/Corporate Customer Logo on Website-04.jpg",
    "/img/corporat/Corporate Customer Logo on Website-05.jpg",
    "/img/corporat/Corporate Customer Logo on Website-06.jpg",
    "/img/corporat/Corporate Customer Logo on Website-07.jpg",
    "/img/corporat/Corporate Customer Logo on Website-08.jpg",
    "/img/corporat/Corporate Customer Logo on Website-09.jpg",
    "/img/corporat/Corporate Customer Logo on Website-10.jpg",
    "/img/corporat/Corporate Customer Logo on Website-11.jpg",
    "/img/corporat/Corporate Customer Logo on Website-12.jpg",
    "/img/corporat/Corporate Customer Logo on Website-13.jpg",
    "/img/corporat/Corporate Customer Logo on Website-14.jpg",
    "/img/corporat/Corporate Customer Logo on Website-15.jpg",
    "/img/corporat/Corporate Customer Logo on Website-16.jpg",
   
  ];

  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Logo ${index + 1}`} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
