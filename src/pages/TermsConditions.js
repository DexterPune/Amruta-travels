import React from 'react';
import '../css/TermsConditions.css'; // Include your CSS file
import { Helmet } from 'react-helmet';
import GoogleAnalytics from './GoogleAnalytics';

const TermsConditions = () => {

   
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
                    content="https://amrutatravel.com/img/OG-Image/OG-Image-01.jpg"/>
             
</Helmet>
<section className="page-header">
      <div className="page-header-shape"></div>
      <div className="container">
        <div className="page-header-info">
          <h4>Term and Condition</h4>
          <h2>Book Your <span>Ride</span></h2>
          <p>Everything your taxi business <br />needs is already here!</p>
        </div>
      </div>
    </section>

    <div className='container-fluid '>

    <div className='row px-0'>

   
<div className="terms-conditions-container col-12 col-md-6 offset-md-1">
      
      <h3 className="title">Terms and Conditions</h3>
      <div className="content">
        <p><b className="highlight">1. Booking Confirmation:</b><br />
          All bookings with Amruta Travels are subject to availability and confirmation. Confirmation will be provided upon successful payment and issuance of a booking reference number.</p>

        <p><b className="highlight">2. Payment:</b><br />
          Full payment is required at the time of booking to secure your reservation. Payments can be made online via our secure payment gateway or at any of our authorized booking offices.</p>

        <p><b className="highlight">3. Cancellation and Rescheduling:</b><br />
          Bookings may be canceled or rescheduled in accordance with our cancellation policy. Fees may apply based on the timing of the cancellation or rescheduling. Please review our cancellation policy for detailed information.</p>

        <p><b className="highlight">4. Passenger Responsibility:</b><br />
          Passengers must ensure they have all necessary travel documents, such as valid identification and tickets, before boarding. Amruta Travels reserves the right to refuse boarding to passengers without proper documentation.</p>

        <p><b className="highlight">5. Baggage:</b><br />
          A limited amount of baggage is allowed per ticket, as specified at the time of booking. Additional baggage may incur extra charges.</p>

        <p><b className="highlight">6. Travel Insurance:</b><br />
          We strongly recommend purchasing travel insurance to cover unexpected events such as trip cancellations, delays, or medical emergencies.</p>

        <p><b className="highlight">7. Safety Regulations:</b><br />
          Passengers must adhere to all safety regulations and follow instructions provided by Amruta Travels' staff during the journey.</p>

        <p><b className="highlight">8. Changes to Itinerary:</b><br />
          Amruta Travels reserves the right to alter itineraries, including routes and schedules, due to unforeseen circumstances such as road closures, weather conditions, or other factors beyond our control.</p>

        <p><b className="highlight">9. Refusal of Service:</b><br />
          Amruta Travels reserves the right to refuse service to passengers who exhibit disruptive behavior or violate our terms and conditions.</p>

        <p><b className="highlight">10. Jurisdiction:</b><br />
          These terms and conditions are governed by the laws of [Country/State], and any disputes shall be subject to the exclusive jurisdiction of the courts in [City], [Country/State].</p>

        <p><b className="highlight">General Policy:</b></p>
        <p><b className="highlight"> Booking Procedure:</b> Book travel services through our website, mobile app, or customer service team.</p>
        <p><b className="highlight"> Payment:</b> Full payment is required at the time of booking unless otherwise stated.</p>
        <p><b className="highlight"> Confirmation:</b> Booking confirmation will be sent via email or SMS upon successful payment.</p>
        <p><b className="highlight"> Cancellation:</b> Follow the terms outlined in our cancellation policy for cancellations or modifications.</p>
        <p><b className="highlight"> Customer Service:</b> Our customer service team is available to assist with inquiries, issues, or special requests before, during, and after your journey.</p>

        <p><b className="highlight">Refund Policy:</b></p>
        <p><b className="highlight">Cancellation Fees:</b> Fees may apply depending on the timing of the cancellation and the type of service booked.</p>
        <p><b className="highlight"> Refund Process:</b> Refunds will be processed according to the original payment method and may take a few business days.</p>
        <p><b className="highlight">No-Show:</b> No-shows may not be eligible for refunds, as per the terms and conditions of the booking.</p>
      </div>
    </div>
    <div className='col-12 col-md-5'>
    <div className="image-container">
        <img src="\img\Img for Term & condition\Img for Term & condition-01.jpg" className="bg-cover" alt="Terms and Conditions" />
      </div>
    </div>

    

                
<div className="services__two-item d-flex flex-column align-items-center">
  <div className="mybox1 text-center p-4 mb-4 shadow-sm" style={{ borderRadius: '8px', backgroundColor: '#ff7700', color:'white' }}>
    <h4 className='text-white mb-3'>Phone Numbers</h4>
    <i className="bi bi-telephone-fill fs-1 mb-2"></i>
    <ul className="list-unstyled">
      <li>
        <a href="tel:+918421333435" className='text-decoration-none text-white'>
          &nbsp;+91 8421333435&nbsp;
        </a>
      </li>
      <li>
        <a href="tel:+917875774499" className='text-decoration-none text-white'>
          /&nbsp;+91 7875774499&nbsp;
        </a>
      </li>
      <li>
        <a href="tel:+917620411277" className='text-decoration-none text-white'>
          /&nbsp;+91 7620411277&nbsp;
        </a>
      </li>
      <li>
        <a href="tel:+919284718314" className='text-decoration-none text-white'>
          /&nbsp;+91 9284718314
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

</div>
  );
};

export default TermsConditions;
