import React from 'react';
import '../css/PrivacyPolicy.css'; // Import custom CSS for styling
import { Helmet } from 'react-helmet';
import GoogleAnalytics from './GoogleAnalytics';

const PrivacyPolicy = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Amruta Travels",
    "description": "Explore top-notch travel services with Amruta Travels. Book luxury mini buses, personalized tours, and travel packages for corporate events, family trips, and more in Pune and surrounding areas.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Not Available", 
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "bestRating": "5",
      "worstRating": "1",
      "ratingValue": "4.8",
      "ratingCount": 9000 
    },
    "telephone": "+91 8421333435",
    "image": "https://amrutatravel.com/img/OG-Image/OG-Image-01.jpg",
    "sameAs": [
      "https://www.facebook.com/people/Amruta-travels/61567052876581/?mibextid=LQQJ4d&rdid=ik0ebd0HKUH6Pi4Z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ApFoorKKj%2F%3Fmibextid%3DLQQJ4d",
      "https://www.instagram.com/amruta_travels_/",
      "https://www.linkedin.com/company/amrutatravels"
    ]
  };
  


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
                    content="https://amrutatravel.com/img/OG-Image/OG-Image-01.jpg"/>
             
</Helmet>
 <section className="page-header">
      <div className="page-header-shape"></div>
      <div className="container">
        <div className="page-header-info">
          <h4>Privacy Policy</h4>
          <h2>Book Your <span>Ride</span></h2>
          <p>Everything your taxi business <br />needs is already here!</p>
        </div>
      </div>
    </section>


    <section className="privacy-policy">
      <div className="container px-0">
        <div className="row">
          <div className="col-12 col-md-7">
        
            <h3 className="title">Privacy & Policy</h3>

            <p>
              At Amruta Travels, we are committed to protecting your privacy and safeguarding your personal information.
              This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our services.
            </p>

            <div className="section">
              <p className="highlight">Information We Collect:</p>
              <p className="highlight">1. Personal Information:</p>
              <p>
                When you book a ticket or use our services, we may collect personal information such as your name, contact details, payment information, and travel preferences.
              </p>

              <p className="highlight">2. Usage Information:</p>
              <p>
                We may collect information about how you interact with our website, mobile app, and other digital platforms, including IP address, device information, browser type, and pages visited.
              </p>

              <p className="highlight">3. Location Information:</p>
              <p>
                With your consent, we may collect your location information to provide location-based services or improve our service offerings.
              </p>
            </div>

            <div className="section">
              <p className="highlight">How We Use Your Information:</p>
              <p className="highlight">1. To Provide Services:</p>
              <p>
                We use your information to process bookings, manage reservations, and provide transportation services.
              </p>

              <p className="highlight">2. To Improve Services:</p>
              <p>
                We analyze user behavior and feedback to improve our services, enhance user experience, and develop new features.
              </p>

              <p className="highlight">3. For Communication:</p>
              <p>
                We may use your contact information to send booking confirmations, updates, promotional offers, and important notifications related to your travel.
              </p>

              <p className="highlight">4. For Marketing:</p>
              <p>
                With your consent, we may use your information to send marketing communications about our services, special offers, and promotions.
              </p>
            </div>

            <div className="section">
              <p className="highlight">Information Sharing and Disclosure:</p>
              <p className="highlight">1. Third-Party Service Providers:</p>
              <p>
                We may share your information with trusted third-party service providers who assist us in providing and improving our services, such as payment processors, IT service providers, and marketing agencies.
              </p>

              <p className="highlight">2. Legal Compliance:</p>
              <p>
                We may disclose your information as required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.
              </p>
            </div>

            <div className="section">
              <p className="highlight">Data Security:</p>
              <p>
                We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <p className="highlight">Your Rights:</p>
              <p>
                You have the right to access, update, or delete your personal information held by us. You may also opt-out of receiving marketing communications from us at any time.
              </p>

              <p className="highlight">Changes to this Privacy Policy:</p>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website or other communication channels.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-5'>
    <div className="image-container">
              <img src="\img\Img for privacy policy\Img for privacy policy-01.jpg" className="bg-cover" alt="Privacy Policy" />
            </div>
    </div>

    
<div className="services__two-item d-flex flex-column align-items-center">
  <div className="mybox1 text-center p-4 mb-4 shadow-sm" style={{ borderRadius: '8px', backgroundColor: '#ff7700', color:'white' }}>
    <h4 className='text-white mb-3'>Phone Numbers</h4>
    <i className="bi bi-telephone-fill fs-1 mb-2"></i>
    <ul className="list-unstyled">
      <li>
        <a href="tel:+918421333435" className='text-decoration-none text-white'>
          +91 8421333435&nbsp;
        </a>
      </li>
      <li>
        <a href="tel:+917875774499" className='text-decoration-none text-white'>
        /&nbsp; +91 7875774499&nbsp;
        </a>
      </li>
      <li>
        <a href="tel:+917620411277" className='text-decoration-none text-white'>
        /&nbsp;+91 7620411277&nbsp;
        </a>
      </li>
      <li>
        <a href="tel:+919284718314" className='text-decoration-none text-white'>
        /&nbsp;+91 9284718314&nbsp;
        </a>
      </li>
    </ul>
  </div>

  <div className="mybox1 text-center p-4 mb-4 shadow-sm" style={{ borderRadius: '8px', backgroundColor: '#ff7700' }}>
    <h4 className='text-white mb-3'>Email</h4>
    <i className="bi bi-envelope fs-1 mb-2"></i>
    <a href="mailto:booking@amrutatravel.com" className='text-decoration-none text-white'>
      booking@amrutatravel.com
    </a>
  </div>
</div>




        </div>
        
      </div>
      
    </section>


    
      </div>
    );
};

export default PrivacyPolicy;
