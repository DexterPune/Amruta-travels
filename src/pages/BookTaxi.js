


import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import GoogleAnalytics from './GoogleAnalytics';


const BookTaxi = () => {
  const [bookingMessage, setBookingMessage] = useState('');

  const containerStyle = {
    // padding: '60px 15px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  };

  const titleStyle = {
    marginBottom: '40px',
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#343a40',
    fontFamily: 'Arial, sans-serif',
  };

  const optionsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '0 15px',
  };

  const optionStyle = {
    background: '#ffffff',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '350px',
    textAlign: 'center',
    margin: '0 auto',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const infoStyle = {
    padding: '20px',
    background: '#fff',
  };

  const headingStyle = {
    margin: '0 0 10px 0',
    fontSize: '1.6em',
    color: '#212529',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '1em',
    color: '#495057',
    lineHeight: '1.5',
    margin: '10px 0',
    fontFamily: 'Arial, sans-serif',
  };

  const detailsStyle = {
    fontSize: '0.9em',
    color: '#6c757d',
    marginTop: '10px',
    textAlign: 'left',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#FF7700',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    textTransform: 'uppercase',
  };

  const vehicleData = [
        {
          name: 'Tempo Traveller 13 Seater',
          imgSrc: '/img/Img for Booking/Img for Booking-03.jpg',
          local: '₹2000',
          seats: '13',
          outstation: '₹7500 (300km)',
          perKm: '₹15',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: 'Tempo Traveller 17 Seater',
          imgSrc: '/img/Img for Booking/Img for Booking-04.png',
          local: '₹2500',
          seats: '17',
          outstation: '₹8000 (300km)',
          perKm: '₹18',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: '13 Seater Urbania',
          imgSrc: '/img/Img for Booking/Img for Booking-01.jpg',
          local: '₹3000',
          seats: '13',
          outstation: '₹10500 (300km)',
          perKm: '₹20',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: '17 Seater Urbania',
          imgSrc: '/img/Img for Booking/Img for Booking-02.jpg',
          local: '₹3500',
          seats: '17',
          outstation: '₹10500 (300km)',
          perKm: '₹22',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: '20 Seater Ac / Non AC bus',
          imgSrc: '/img/Img for Booking/Img for Booking-06.jpg',
          local: '₹4000',
          seats: '20',
          outstation: '₹9000 (300km)',
          perKm: '₹25',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: '25 Seater Ac / Non AC bus',
          imgSrc: '/img/Img for Booking/Img for Booking-07.jpg',
          local: '₹5000',
          seats: '25',
          outstation: '₹12000 (300km)',
          perKm: '₹30',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: '32 Seater Ac / Non AC bus',
          imgSrc: '/img/Img for Booking/Img for Booking-08.jpg',
          local: '₹5000',
          seats: '40',
          outstation: '₹15000 (300km)',
          perKm: '₹32',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: ' 35 Seater Ac / Non AC bus ',
          imgSrc: '/img/Img for Booking/Img for Booking-09.jpg',
          local: '₹5000',
          seats: '35',
          outstation: '₹15000 (300km)',
          perKm: '₹30',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: '40 Seater Ac/ Non AC bus ',
          imgSrc: '/img/Img for Booking/Img for Booking-10.jpg',
          local: '₹5000',
          seats: '40',
          outstation: '₹18000 (300km)',
          perKm: '₹30',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: '45 Seater Ac/ Non AC bus ',
          imgSrc: '/img/Img for Booking/Img for Booking-11.jpg',
          local: '₹5000',
          seats: '45',
          outstation: '₹18000 (300km)',
          perKm: '₹30',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: ' 50 Seater Ac / Non AC bus',
          imgSrc: '/img/Img for Booking/Img for Booking-12.jpg',
          local: '₹5000',
          seats: '50',
          outstation: '₹20000 (300km)',
          perKm: '₹30',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: 'Luxury Bus On Rent Pune',
          imgSrc: '/img/Img for Booking/Img for Booking-13.jpg',
          local: '₹5000',
          seats: '40',
          outstation: '₹18000 (300km)',
          perKm: '₹30',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: 'Semi Luxury Bus Hire',
          imgSrc: '/img/Img for Booking/Img for Booking-14.jpg',
          local: '₹5000',
          seats: '40',
          outstation: '₹15000 (300km)',
          perKm: '₹30',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        {
          name: 'Volvo Bus on Rent',
          imgSrc: '/img/Img for Booking/Img for Booking-15.jpg',
          local: '₹5000',
          seats: '40',
          outstation: '₹27000 (300km)',
          perKm: '₹30',
          driverAllowance: '₹500',
          nightHalt: '₹500',
        },
        
      ];
    

  const handleBooking = (vehicle) => {
    const message = `I want to Book ${vehicle.name}  With Amruta Travels. Request you Please Send More Details or Call Me. Thank you. `;
    const whatsappLink = `https://wa.me/918421333435?text=${encodeURIComponent(message)}`;
    // setBookingMessage(`This is a ${vehicle.name}`);
    window.open(whatsappLink, '_blank');
  };
 
 
  
  
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
          <h4>Booking</h4>
          <h2>Book Your <span>Ride</span></h2>
          <p>Everything your taxi business <br />needs is already here!</p>
        </div>
      </div>
    </section>
      <section style={containerStyle}>
        <h2 style={titleStyle}>Book Your Ride</h2>
        <div style={optionsContainerStyle}>
          {vehicleData.map((vehicle, index) => (
            <div key={index} style={optionStyle}>
              <img src={vehicle.imgSrc} alt={vehicle.name} style={imageStyle} />
              <div style={infoStyle}>
                <h3 style={headingStyle}>{vehicle.name}</h3>
                <p style={paragraphStyle}>
                  Travel comfortably with our well-maintained {vehicle.name}, perfect for group trips and family vacations.
                </p>
                <div style={detailsStyle}>
                  <p><strong>Seats:</strong> {vehicle.seats}</p>
                  <p><strong>Outstation (300km):</strong> {vehicle.outstation}</p>
                  <p><strong>Driver Allowance:</strong> {vehicle.driverAllowance}</p>
                  <p><strong>Night Halt:</strong> {vehicle.nightHalt}</p>
                </div>
                <button
                  className="default-btn"
                  style={buttonStyle}
                  onClick={() => handleBooking(vehicle)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        {bookingMessage && (
          <div style={{ marginTop: '20px', fontSize: '1.2em', color: '#28a745' }}>
            {bookingMessage}
          </div>
        )}
      </section>
    </div>
  );
};

export default BookTaxi;


