// NewsCardList.js
import React from 'react';
import '../css/NewsCardList.css'; 
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    imgSrc: '/img/Image for Service/Image for Service-05.jpg',
    title: 'Force Urbaina On rent',
    description: 'Experience the vibrant pulse of urban travel with Amruta Travels. We believe that every journey should be as exciting as the destination itself. Our commitment to exceptional service ensures that your urban adventures are seamless, stylish, and unforgettable. Whether you are exploring bustling city streets, attending important business meetings, or enjoying a leisurely getaway, our dedicated team is here to cater to your every need. With a focus on comfort and convenience, we provide meticulously curated travel experiences that allow you to immerse yourself in the heart of urban landscapes. Discover the energy of the city with us and make every trip a remarkable one',
    link: '/book-taxi'
  },
  {
    id: 2,
    imgSrc: '/img/Image for Service/Image for Service-06.jpg',
    title: 'Bus On rent',
    description: 'Experience the Ultimate in Group Travel with Amruta Travels’ Bus on Rent Service – Where Comfort, Convenience, and Safety Come Together for Every Journey. Our modern, well-maintained fleet is perfect for all your travel needs, from corporate events and family trips to long-distance tours. With spacious seating, air-conditioned buses, and professional drivers dedicated to punctuality and safety, we ensure a smooth and enjoyable ride for large groups. Whether you are planning a short local trip or an extended outstation adventure, trust Amruta Travels to provide reliable and stress-free transportation. Book Now and Travel with Ease!',
    link: '/book-taxi'
  },
  {
    id: 3,
    imgSrc: '/img/Image for Service/Image for Service-01.jpg',
    title: 'Outstation bus Services',
    description: 'Embark on Your Outstation Journey with Amruta Travels’ Premium Bus Rental Service – Where Every Mile is Crafted for Comfort and Convenience. Choose from Our Extensive Fleet of Well-Maintained Vehicles and Enjoy a Personalized Travel Experience Tailored to Your Needs. Whether You are Planning a Scenic Getaway, a Business Trip, or a Family Vacation, Our Reliable Rentals and Professional Support Ensure a Smooth and Enjoyable Ride. Book Your Outstation Bus Rental Today and Explore with Confidence and Ease!',
    link: '/book-taxi'
  },
  {
    id: 4,
    imgSrc: '/img/Image for Service/Image for Service-02.jpg',
    title: 'Airport Pickup & Drop',
    description: 'Experience Seamless and Stress-Free Airport Transfers with Amruta Travels – Your Gateway to Reliable and Luxurious Travel. Our Professional Drivers and Premium Vehicles Ensure Timely Pick-Ups and Drop-Offs, Making Your Journey to and from the Airport Smooth and Comfortable. Whether You\'re Catching a Flight or Arriving After a Long Trip, Trust Us to Deliver Excellence in Every Mile. Book Your Airport Transfer Today and Travel with Confidence and Ease.',
    link: '/book-taxi'
  },
  {
    id: 5,
    imgSrc: '/img/Image for Service/Image for Service-03.jpg',
    title: 'Tempo Traveller Booking',
    description: 'Travel in Comfort and Style with Amruta Travels’ Tempo Traveller Booking – Ideal for Group Adventures and Family Journeys. We offer spacious and well-equipped Tempo Travellers that guarantee a comfortable ride for your entire group. Enjoy a seamless travel experience with generous space, modern amenities, and a dedicated driver who ensures every trip is memorable. Book your Tempo Traveller with us today and make group travel effortless and enjoyable!',
    link: '/book-taxi'
  },
  {
    id: 6,
    imgSrc: '/img/Image for Service/Image for Service-04.jpg',
    title: 'Temple Tours and Pilgrimages',
    description: 'Amruta Travels offers a diverse range of services for temple tours and pilgrimages, ensuring a comprehensive experience for those seeking spiritual journeys. Our temple tours are designed to guide you through the sacred sites, providing a meaningful connection to your faith. We specialize in visits to the Jyotirlingas, which are revered shrines dedicated to Lord Shiva, regarded as some of the holiest temples in Hinduism. With Amruta Travels, you can expect thoughtfully curated itineraries, comfortable transportation, and knowledgeable guides who enhance your spiritual experience.',
    link: '/book-taxi'
  },
];

const NewsCardList = () => {
  return (
<div className="container-fluid">



<div className="row g-4">
  {services.map((service) => (
    <div key={service.id} className="col-12 col-md-6 col-lg-4">
      <div className="news-card-items mt-0">
        <div className="news-image">
          <img src={service.imgSrc} alt={service.title} />
        </div>
        <div className="news-content">
          <div className="news-cont">
            <span>by Amruta Travels</span>
            <h3>
              <a href={service.link}>{service.title}</a>
            </h3>
            <p>{service.description}</p>
          </div>
          <ul className="service-links">
            <li>
              {/* <Link href={service.link}>
                <i className="fa-solid fa-arrow-right-long"></i> More
              </Link> */}
              <Link to={service.link}>
  <i className="fa-solid fa-arrow-right-long"></i> More
</Link>

            </li>
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>


</div>

  );
};

export default NewsCardList;
