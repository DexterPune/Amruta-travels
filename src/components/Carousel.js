import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Carousel = () => {
  useEffect(() => {
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min');
    const carouselElement = document.querySelector('#carouselExampleControls');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        ride: 'carousel',
        interval: 3000,  
      });
    }
  }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img/Sildes/Slides-01.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="/img/Sildes/Slides-02.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="/img/Sildes/Sliders 1-01.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src="/img/Sildes/Sliders 1-02.jpg" className="d-block w-100" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src="/img/Sildes/Sliders 1-03.jpg" className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src="/img/Sildes/Sliders 1-04.jpg" className="d-block w-100" alt="Slide 6" />
        </div>
        <div className="carousel-item">
          <img src="/img/Sildes/Sliders 1-05.jpg" className="d-block w-100" alt="Slide 7" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;



