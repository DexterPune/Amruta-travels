import React from 'react';
import NewsCardList from './NewsCardList';
import { Helmet } from 'react-helmet';
import GoogleAnalytics from './GoogleAnalytics';

const Service = () => {
   

   
   
const schemaData = 
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Amruta Travels",
  "description": "Explore top-notch travel services with Amruta Travels. Book luxury mini buses, personalized tours, and travel packages for corporate events, family trips, and more in Pune and surrounding areas.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Pune",
    "addressRegion": "MH",
    "postalCode": "411041",
    "addressCountry": "IN"
    
  },
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Amruta Travels",
  "description": "Explore top-notch travel services with Amruta Travels. Book luxury mini buses, personalized tours, and travel packages for corporate events, family trips, and more in Pune and surrounding areas.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Pune",
    "addressRegion": "MH",
    "postalCode": "411041",
    "addressCountry": "IN"
  },                                    "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "9000"
  },
  "telephone": "+91 8421333435",
  "image": "https://amrutatravel.com/img/OG-Image/OG-Image-01.jpg",
  "sameAs": [
    "https://https://www.facebook.com/people/Amruta-travels/61567052876581/?mibextid=LQQJ4d&rdid=ik0ebd0HKUH6Pi4Z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ApFoorKKj%2F%3Fmibextid%3DLQQJ4d/amrutatravels",
    "https://https://www.instagram.com/amruta_travels_//amrutatravels",
    "https://www.linkedin.com/company/amrutatravels"
  ]
}



  return (
    
    <div>
<GoogleAnalytics/>

<Helmet>
  <script type="application/ld+json">
  {JSON.stringify(schemaData)}
  </script>

                <title>Contact: +91 8421333435 | Amruta Travel | Premium Travel Services & Luxury Bus Rentals in Pune</title>
                <meta name="description"
                    content="Explore top-notch travel services with Amruta Travels. Book luxury mini buses, personalized tours, and travel packages for corporate events, family trips, and more in Pune and surrounding areas."/>
                <meta name="keywords"
                    content="Amruta Travels, luxury mini bus rental Pune, travel agency Pune, corporate travel services, family vacation packages, outstation trips, airport transfers"/>
                <meta
                    property="og:title"
                    content="Amruta Travels | Premium Travel Services & Luxury Bus Rentals in Pune" />
                <meta
                    property="og:description"
                    content="Discover the best travel solutions with Amruta Travels. From luxury mini buses to customized tours, we cater to all your travel needs in Pune."/>
                <meta
                    property="og:url"
                    content="https://yourwebsite.com/"/>
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="  https://amrutatravel.com\img/OG-Image/OG-Image-01.jpg
"/>
             
</Helmet>
         <section className="page-header">
        <div className="page-header-shape"></div>
        <div className="container">
          <div className="page-header-info">
            <h4>Our Services</h4>
            <h2>
              Feel your journey <br /> with <span>Amruta Travels!</span>
            </h2>
            
          </div>
        </div>
      </section>
<NewsCardList/>

       </div>
    );
};

export default Service;
