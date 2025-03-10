import React from 'react';
import { Helmet } from 'react-helmet';
import './OurFleet.css';
import GoogleAnalytics from './GoogleAnalytics';

const OurFleet = () => {

  const fleetData = [
    {
      id: 1,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-03.jpg',
      title: '13 Seater Tempo Traveller',
      description: 'Comfortable and spacious Tempo Traveller for medium-sized groups.'
    },
    {
      id: 11,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-04.jpg',
      title: '17 Seater Tempo Traveller',
      description: 'Large bus ideal for very big groups or corporate events.'
    },
    {
      id: 2,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-01.jpg',
      title: '13 Seater Urbania',
      description: 'Modern and comfortable 13-seater Urbania for your group travel needs.'
    },
    {
      id: 3,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-02.jpg',
      title: '17 Seater Urbania',
      description: 'Spacious 17-seater Urbania for larger groups or family trips.'
    },
    {
      id: 4,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-05.jpg',
      title: '14 Seater Tata Winger',
      description: 'Ideal for larger groups, offering ample space and comfort.'
    },
    {
      id: 5,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-06.jpg',
      title: ' 20 Seater Ac / Non AC bus',
      description: 'Perfect for large groups with extensive travel needs.'
    },
    {
      id: 6,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-07.jpg',
      title: '25 Seater Ac / Non AC bus',
      description: 'A spacious mini bus for mid-sized groups and long journeys.'
    },
    {
      id: 7,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-08.jpg',
      title: '32 Seater Ac / Non AC bus',
      description: 'Comfortable bus option available in AC and non-AC variants.'
    },
    {
      id: 8,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-14.jpg',
      title: '35 Seater Ac / Non AC bus',
      description: 'Large bus ideal for very big groups or corporate events.'
    },
    {
      id: 9,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-09.jpg',
      title: '40 Seater Ac/ Non AC bus',
      description: 'Extra-large bus for the largest groups and events.'
    },
    {
      id: 10,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-13.jpg',
      title: '45 Seater Ac/ Non AC bus ',
      description: 'Comfortable bus option available in AC and non-AC variants.'
    },
 
    {
      id: 12,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-15.jpg',
      title: '50 Seater Ac / Non AC bus ',
      description: 'Extra-large bus for the largest groups and events.'
    },
    {
      id: 13,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-10.jpg',
      title: 'Luxury Bus On Rent Pune',
      description: 'Extra-large bus for the largest groups and events.'
    },
    {
      id: 14,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-11.jpg',
      title: ' Semi Luxury Bus Hire',
      description: 'Comfortable bus option available in AC and non-AC variants.'
    },
 
    {
      id: 15,
      imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-12.jpg',
      title: 'Volvo Bus on Rent',
      description: 'Extra-large bus for the largest groups and events.'
    }
  ];





  return (
    
    <div>
<GoogleAnalytics/>
<Helmet>
  <title> Tempo Traveller On Rent in Pune ₹25 Per Km </title>
  <meta name="description" content="Rent a luxury Tempo Traveller in Pune with Amruta Travels for a comfortable and stylish journey. Ideal for family trips, corporate events & outstation travel." />
  <meta name="keywords" content="Tempo traveller in Pune, 17 seater bus on rent in Pune price, 17 seater tempo traveller on rent in Pune, Traveller on rent Pune, Traveller bus on rent in Pune, Tempo Traveller on rent Pune to Outstation, Tempo traveller on rent in Pune, 17 seater tempo traveller on rent in Pune, Pune to Shirdi tempo traveller rate, Tempo Traveller hire in Pune, Tempo Traveller on rent in Hadapsar, Tempo Traveller on rent in Pune rate per km, Tempo Traveller Rental Pune, Pune to Mahabaleshwar cab tempo traveller, Pune to Goa tempo traveller on Rent, Luxury Tempo Traveller on rent in Pune" />
  <link rel="canonical" href="https://amrutatravel.com/tempo-traveller-on-rent-in-pune" />
  <script type="application/ld+json">
    {`
      {
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
      }
    `}
  </script>
 
</Helmet>

     <section className="page-header">
      <div className="page-header-shape"></div>
      <div className="container">
        <div className="page-header-info">
          <h4>Our Fleet</h4>
          <h2>
            Feel your journey <br /> with <span>Amruta Travels</span>
          </h2>
          
        </div>
      </div>
    </section>
    {/* <PricingSection/> */}



    <section className="our-fleet">
      <div className="container px-0">
        <h2 className='Colo'>Our Fleet</h2>
        <div className="row g-0">
          {fleetData.map(fleet => (
            <div key={fleet.id} className="col-12 col-md-4">
              <div className="card">
                <img src={fleet.imgSrc} className="card-img-top" alt={fleet.title} />
                <div className="card-body">
                  <h3 className="card-title Colo" >{fleet.title}</h3>
                  <p className="card-description">{fleet.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


   </div>
  );
};

export default OurFleet;
