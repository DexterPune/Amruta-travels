// ServiceList.js
import React from 'react';

const services = [
  {
    id: 1,
    imgSrc: '/img/service-1.jpg',
    carImgSrc: '/img/car-1.png',
    title: 'Regular Transport',
    description: 'Everything your taxi business needs is already here! Ridek made for taxi service companies!',
    link: '/service-details'
  },
  {
    id: 2,
    imgSrc: '/img/service-2.jpg',
    carImgSrc: '/img/car-1.png',
    title: 'Airport Transport',
    description: 'Everything your taxi business needs is already here! Ridek made for taxi service companies!',
    link: '/service-details'
  },
  {
    id: 3,
    imgSrc: '/img/service-3.jpg',
    carImgSrc: '/img/car-1.png',
    title: 'Luggage Transport',
    description: 'Everything your taxi business needs is already here! Ridek made for taxi service companies!',
    link: '/service-details'
  },
  {
    id: 4,
    imgSrc: '/img/service-4.jpg',
    carImgSrc: '/img/car-1.png',
    title: 'City Transport',
    description: 'Everything your taxi business needs is already here! Ridek made for taxi service companies!',
    link: '/service-details'
  },
  {
    id: 5,
    imgSrc: '/img/service-5.jpg',
    carImgSrc: '/img/car-1.png',
    title: 'Business Transport',
    description: 'Everything your taxi business needs is already here! Ridek made for taxi service companies!',
    link: '/service-details'
  },
  {
    id: 6,
    imgSrc: '/img/service-5.jpg',
    carImgSrc: '/img/car-1.png',
    title: 'Local Transport',
    description: 'Everything your taxi business needs is already here! Ridek made for taxi service companies!',
    link: '/service-details'
  },
];

const ServiceList = () => {
  return (
    <section className="service-section bg-grey bd-bottom padding">
      <div className="container">
        <div className="row">
          {services.map(service => (
            <div key={service.id} className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <img src={service.imgSrc} alt={service.title} />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car">
                    <img src={service.carImgSrc} alt="car" />
                  </div>
                </div>
                <div className="service-content">
                  <h3>
                    <a href={service.link}>{service.title}</a>
                  </h3>
                  <p>{service.description}</p>
                  <a className="read-more" href={service.link}>Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
