import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faHandshake, faUser, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import './Career.css';
import GoogleAnalytics from './GoogleAnalytics';

const CareerItem = ({ icon, title, description }) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="career-item p-4 shadow-sm  rounded">
                <div className="career-icon mb-3 text-center">
                    <FontAwesomeIcon icon={icon} size="3x" className="text-primary" />
                </div>
                <h4 className="career-title text-center">
                    <a href="#" className="text-dark">{title}</a>
                </h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

const CareersSection = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tempo Traveller On Rent in Pune",
    "description": "Affordable Tempo Traveller rentals for local and outstation trips in Pune. Choose from 17-seater to luxury Tempo Travellers for trips to Shirdi, Mahabaleshwar, Goa, and more. Book with Amruta Travels for a comfortable journey.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "telephone": "+91-8421333435",
    "url": "https://amrutatravel.com/tempo-traveller-on-rent-in-pune",
    "logo": "https://amrutatravel.com/images/tempo-traveller-on-rent.jpg",
    "image": "https://amrutatravel.com/images/tempo-traveller-on-rent.jpg",
    "priceRange": "₹5000 - ₹25000",
    "offers": {
      "@type": "Offer",
      "url": "https://amrutatravel.com/tempo-traveller-on-rent-in-pune",
      "priceCurrency": "INR",
      "price": "7000",
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Pune",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5204",
        "longitude": "73.8567"
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://amrutatravel.com/tempo-traveller-on-rent-in-pune"
    },
    "keywords": "Tempo traveller in Pune, 17 seater bus on rent in Pune price, 17 seater tempo traveller on rent in Pune, Traveller on rent Pune, Traveller bus on rent in Pune, Tempo Traveller on rent Pune to Outstation, Tempo traveller on rent in Pune, 17 seater tempo traveller on rent in Pune, Pune to Shirdi tempo traveller rate, Tempo Traveller hire in Pune, Tempo Traveller on rent in Hadapsar, Tempo Traveller on rent in Pune rate per km, Tempo Traveller Rental Pune, Pune to Mahabaleshwar cab tempo traveller, Pune to Goa tempo traveller on Rent, Luxury Tempo Traveller on rent in Pune"
  };


    return (


     <div>
<GoogleAnalytics/>
<Helmet>
  <title> Tempo Traveller On Rent in Pune ₹25 Per Km</title>
  <meta name="description" content="Rent a luxury Tempo Traveller in Pune with Amruta Travels for a comfortable and stylish journey. Ideal for family trips, corporate events & outstation travel." />
  <meta name="keywords" content="Tempo traveller in Pune, 17 seater bus on rent in Pune price, 17 seater tempo traveller on rent in Pune, Traveller on rent Pune, Traveller bus on rent in Pune, Tempo Traveller on rent Pune to Outstation, Tempo traveller on rent in Pune, 17 seater tempo traveller on rent in Pune, Pune to Shirdi tempo traveller rate, Tempo Traveller hire in Pune, Tempo Traveller on rent in Hadapsar, Tempo Traveller on rent in Pune rate per km, Tempo Traveller Rental Pune, Pune to Mahabaleshwar cab tempo traveller, Pune to Goa tempo traveller on Rent, Luxury Tempo Traveller on rent in Pune" />
   <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
 
</Helmet>
           <section className="page-header">
      <div className="page-header-shape"></div>
      <div className="container ">
        <div className="page-header-info">
          <h4>Carrer</h4>
          <h2>
            Feel your journey <br /> with <span>Amruta Travels</span>
          </h2>
          
        </div>
      </div>
    </section>

           <section aria-label="Careers" className="bg-light py-5">
            <div className="container px-0">
                <div className="row g-0">
                    <div className="col-12 text-center mb-5">
                        <h2 className="section-title">Join Our Team</h2>
                        <p className="section-subtitle">
                            Explore the exciting opportunities to be a part of Amruta Travels.
                        </p>
                    </div>
                    <CareerItem 
                    className='CareerItem'
                        icon={faBus}
                        title="Bus Driver"
                        description="Joining Amruta Travels as a driver offers a unique and rewarding opportunity to be a vital part of our esteemed travel company. Our mission is to provide safe, comfortable, and reliable transportation services for all travelers, whether they're on pilgrimages or exploring new destinations. As a driver with us, you will play a crucial role in ensuring that our passengers enjoy a positive and memorable travel experience, making each journey special and seamless with amruta travel."
                    />
                    <CareerItem
                    className='CareerItem'
                        icon={faHandshake}
                        title=" Bus Partner"
                        description="Partnering with Amruta Travels provides a unique and valuable opportunity to collaborate with a well-respected name in the travel industry, recognized for delivering exceptional services to all types of travelers. As a trusted partner, you can join us in expanding our reach and creating a mutually rewarding relationship. Together, we can enhance the travel experience for our clients, ensuring they enjoy unforgettable journeys while benefiting from our shared success."
                    />
                    <CareerItem
                    className='CareerItem'
                        icon={faUser}
                        title=" Travel Agen"
                        description="Amruta Travels is thrilled to invite agents who can play a key role in promoting our services and facilitating bookings. As an agent, you will serve as a vital link between our company and potential travelers, helping us broaden our outreach and elevate customer satisfaction. Your expertise will be instrumental in connecting travelers with the exceptional journeys we offer, ensuring that every client receives personalized support and outstanding service. Join us in making travel dreams a reality!"
                    />
                    <CareerItem
                    className='CareerItem'
                        icon={faDesktop}
                        title=" Back Office"
                        description="Joining Amruta Travels' back office team offers an exciting opportunity to play a crucial role in the seamless operation of our business from behind the scenes. Our dedicated back office staff are essential in ensuring that our services run smoothly, enabling our customers to enjoy exceptional travel experiences. From managing bookings to providing vital support, you will help us maintain the high standards of service that Amruta Travels is known for, ensuring every journey is memorable and hassle-free."
                    />
                </div>
            </div>
        </section>
     </div>
    );
};

export default CareersSection;
