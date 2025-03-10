import React from 'react';
import '../css/OurNetwork.css';
import { Helmet } from 'react-helmet';
import GoogleAnalytics from './GoogleAnalytics';

const OurNetwork = () => {
    const cities = [
        {
          name: 'Delhi',
          imgSrc: '/img/Our Network Images/Our Network Images-01.jpg',
          description: 'Delhi, the capital city of India, is known for its rich history, vibrant culture, and architectural marvels. From the historic Red Fort to the bustling markets of Chandni Chowk, Delhi offers a blend of the old and the new.'
        },
        {
          name: 'Mumbai',
          imgSrc: '/img/Our Network Images/Our Network Images-02.jpg',
          description: 'Mumbai, the financial capital of India, is renowned for its bustling streets, vibrant nightlife, and iconic landmarks like the Gateway of India. It is the heart of Bollywood and offers a unique blend of modernity and tradition.'
        },
        {
          name: 'Bangalore',
          imgSrc: '/img/Our Network Images/Our Network Images-03.jpg',
          description: 'Bangalore, also known as Bengaluru, is the tech hub of India. It is known for its pleasant weather, greenery, and thriving IT industry. The city offers a mix of modernity and traditional charm, with numerous parks and historical sites.'
        },
        {
          name: 'Hyderabad',
          imgSrc: '/img/Our Network Images/Our Network Images-04.jpg',
          description: 'Hyderabad, known as the City of Pearls, is famous for its historical sites, including the Charminar and Golconda Fort. It is also renowned for its unique cuisine, particularly the Hyderabadi Biryani, and its growing IT sector.'
        },
        {
          name: 'Chennai',
          imgSrc: '/img/Our Network Images/Our Network Images-05.jpg',
          description: 'Chennai, located on the southeastern coast, is known for its beautiful beaches, historic temples, and vibrant culture. It is a major cultural and economic hub with a rich tradition of music, dance, and cuisine.'
        },
        {
          name: 'Kolkata',
          imgSrc: '/img/Our Network Images/Our Network Images-09.jpg',
          description: 'Kolkata, the cultural capital of India, is known for its colonial architecture, literary heritage, and vibrant festivals. It offers a unique blend of tradition and modernity with its bustling markets and artistic scene.'
        },
        {
          name: 'Pune',
          imgSrc: '/img/Our Network Images/Our Network Images-06.jpg',
          description: 'Pune, known as the Oxford of the East, is famous for its educational institutions and pleasant climate. It is a major cultural and industrial hub with a growing IT sector and numerous historical landmarks.'
        },
        {
          name: 'Jaipur',
          imgSrc: '/img/Our Network Images/Our Network Images-07.jpg',
          description: 'Jaipur, the Pink City, is renowned for its beautiful palaces, forts, and vibrant bazaars. It is a major tourist destination with attractions like the Hawa Mahal and Amber Fort, offering a glimpse into Rajasthan’s royal heritage.'
        },
        {
          name: 'Ahmedabad',
          imgSrc: '/img/Our Network Images/Our Network Images-08.jpg',
          description: 'Ahmedabad, a city in Gujarat, is known for its rich history, vibrant culture, and beautiful architecture. It is a major center for textiles and offers attractions like the Sabarmati Ashram and the Ahmedabad Heritage Walk.'
        },
      ];    
 
      
      
        return (
          
          <div>
      
      <GoogleAnalytics/>
      <Helmet>
  <title> Tempo Traveller On Rent in Pune ₹25 Per Km</title>
  <meta name="description" content="Rent a luxury Tempo Traveller in Pune with Amruta Travels for a comfortable and stylish journey. Ideal for family trips, corporate events & outstation travel." />
  <meta name="keywords" content="Tempo traveller in Pune, 17 seater bus on rent in Pune price, 17 seater tempo traveller on rent in Pune, Traveller on rent Pune, Traveller bus on rent in Pune, Tempo Traveller on rent Pune to Outstation, Tempo traveller on rent in Pune, 17 seater tempo traveller on rent in Pune, Pune to Shirdi tempo traveller rate, Tempo Traveller hire in Pune, Tempo Traveller on rent in Hadapsar, Tempo Traveller on rent in Pune rate per km, Tempo Traveller Rental Pune, Pune to Mahabaleshwar cab tempo traveller, Pune to Goa tempo traveller on Rent, Luxury Tempo Traveller on rent in Pune" />
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
        <div className="page-header-shape "></div>
        <div className="container px-0">
          <div className="page-header-info">
            <h4 className=''>Our Network</h4>
            <h2>
              Feel your journey <br /> with <span>Amruta Travels!</span>
            </h2>
            
          </div>
        </div>
      </section>


      <section className="our-network" >
      <div className="container px-0">
        <h2 className='Colo' style={{color:'#ff7700'}}>Our Network</h2>
        <div className="network-cards ">
  {cities.map((city, index) => (
    <div className="network-card" key={index}>
      <img src={city.imgSrc} alt={city.name} />
      <div className="network-card-content " style={{backgroundColor:'#ff7700'}}>
        <h3  style={{color:"white"}}>{city.name}</h3>
        <p style={{color:"white"}}>{city.description}</p>
       
      </div>
    </div>
  ))}
</div>

        
       
      </div>
    </section>




    </div>
  );
};

export default OurNetwork;
