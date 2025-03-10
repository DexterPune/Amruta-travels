import TestimonialSection from "./TestimonialSection";
import TeamSection from "./TeamSection";
import CallToAction from "./CallToAction";
import BlogSection from "./BlogSection";
import OfferingsSection from "./OfferingsSection";
import Mission from "./Mission";
import Visionn from "./Visionn";
import { Helmet } from 'react-helmet';
import AboutTestimonials from "./AboutTestimonials";
import GoogleAnalytics from "./GoogleAnalytics";

function AboutUs() {
  

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
            <h4>About Us!</h4>
            <h2>
              Feel your journey <br /> with <span>Amruta Travels!</span>
            </h2>
            
          </div>
        </div>
      </section>


      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-6 px-0">
            <img className="about-img1" src="/img/ab-t.jpeg"  loading="lazy" alt="About Image 1" />
            </div>
            <div className="col-md-6 col-sm-6 ">
              <div className="section-heading mb-40">
                <h4><span></span>About Our Company</h4>
                <h2>Amruta Travels</h2>
                <p>
                Bus rental company in the beautiful city of Pune and Mumbai Metro city, Amruta Travels was established in 2003. With more than 18 years of experience and having served many corporate organisations, travel agencies, hotels in Pune, embassies and individuals, we are proud to be one of the renowned travel providers in Pune and Mumbai. 
We provide Bus Rental services from Mumbai and Pune to anywhere in India at a very reasonable price. Book Local and Outstation bus in Pune with us. Economy premium luxury Buses on rent in Pune for business and personal use at low rates with us. We also do tax credit for corporate events at very low rates. Pune to Mumbai and Mumbai Tu Pune Drop Airport for 20 years this is what we have achieved in terms of Bus Rental services in Pune and Mumbai.
<br/>
Book bus in Pune Mumbai and get instant passenger booking confirmation in just five minutes, so for mini bus bookings from Pune Mumbai to any location just call us “8421333435”
                </p>
              </div>
              <ul className="about-info">
                <li>
                  <div className="owner">
                    <h4 className="fw-bold text-dark">Founder - MR. PRAKASH PANDURANG MARGALE</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Mission/>
      <Visionn/>
      <AboutTestimonials/>
    </div>
  );
}
export default AboutUs;