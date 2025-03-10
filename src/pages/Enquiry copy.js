import React from 'react';
import { Helmet } from 'react-helmet';

import '../css/enquiry.css'
import GoogleAnalytics from './GoogleAnalytics';

function Enquiry(){

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "901859de-3be2-4eb4-a06c-36ebca80163e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return(
        <div>
          <GoogleAnalytics/>
        <Helmet>
  <title> Tempo Traveller On Rent in Pune | Contact: +91 8421333435 | Amruta Travels | Luxury Tempo Traveller Hire for Outstation & Local Trips</title>
  <meta name="description" content="Tempo Traveller on rent in Pune for local or outstation trips. Affordable rates for 17 seater and luxury vehicles. Book your ride to Shirdi, Mahabaleshwar, Goa & more with Amruta Travels." />
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
      <div className="page-header-shape"></div>
      <div className="container">
        <div className="page-header-info">
          <h4>Enquiry </h4>
          <h2>
            Feel your journey <br /> with <span>Amruta Travels</span>
          </h2>
          
        </div>
      </div>
    </section>

    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-title">Get in Touch with Us</h2>
        <form onSubmit={onSubmit}
          name="contactForm"
          id="contact_form"
          className="contact-form"
          action="send_email.php"
          method="post"
          data-redirect="c"
        >
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-form-label">Your Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="contact-form-input"
                placeholder="Your Full Name"
                required
                pattern="[A-Za-z\s]+"
                title="Name must contain only letters"
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email" className="contact-form-label">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="contact-form-input"
                placeholder="Your Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
            </div>
          </div>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="phone" className="contact-form-label">Your Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="contact-form-input"
                placeholder="Your Phone"
                required
                pattern="[0-9]{10}"
                title="Phone number must be of 10 digits"
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="bus_location" className="contact-form-label">Buses</label>
              <input
                type="text"
                name="bus_location"
                id="bus_location"
                className="contact-form-input"
                placeholder="Bus Name"
                required
                pattern="[A-Za-z\s]+"
                title="Bus can only have letters"
              />
            </div>
          </div>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="days" className="contact-form-label">Number of Days</label>
              <input
                type="number"
                name="days"
                id="days"
                className="contact-form-input"
                placeholder="Number of Days"
                required
                min="1"
                max="100"
                step="1"
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="pick_up_point" className="contact-form-label">Pick Up Point</label>
              <input
                type="text"
                name="pick_up_point"
                id="pick_up_point"
                className="contact-form-input"
                placeholder="Pick Up Point"
                required
                pattern="[A-Za-z\s]+"
                title="Pick Up Point must contain only letters"
              />
            </div>
          </div>
          <div className="contact-form-group">
            <label htmlFor="Buses" className="contact-form-label">Select Buses</label>
            <select
              name="Bus"
              id="Bus"
              className="contact-form-select"
              required
            >
              <option value="" disabled>Select Buses</option>
              <option value="13 Seater Urbania Bus )">13 Seater Urbania Bus </option>
              <option value="17 Seater Urbania Bus">17 Seater Urbania Bus</option>
              <option value="13 Seater Tempo Traveller">13 Seater Tempo Traveller</option>
              <option value="17 Seater Tempo Traveller ">17 Seater Tempo Traveller </option>
              <option value="14 Seater Tata Winger">14 Seater Tata Winger</option>
              <option value="20 Seater Ac / Non AC bus">20 Seater Ac / Non AC bus</option>
              <option value="32 Seater Ac / Non AC bus">32 Seater Ac / Non AC bus</option>
              <option value="35 Seater Ac / Non AC bus">35 Seater Ac / Non AC bus</option>
              <option value="40 Seater Ac/ Non AC bus">40 Seater Ac/ Non AC bus</option>
              <option value="45 Seater Ac/ Non AC bus ">45 Seater Ac / Non AC bus</option>
              <option value=" 50 Seater Ac / Non AC bus"> 50 Seater Ac / Non AC bus</option>
              <option value="Luxury Bus On Rent Pune">Luxury Bus On Rent Pune</option>
              <option value="Semi Luxury Bus Hire">Semi Luxury Bus Hire</option>
              <option value="Volvo Bus on Rent">Volvo Bus on Rent</option>
            </select>
          </div>
          <div className="contact-form-group">
            <label htmlFor="date" className="contact-form-label">Date of Journey</label>
            <input
              type="date"
              name="date"
              id="date"
              className="contact-form-input"
              placeholder="Date of Journey"
              required
            />
          </div>
          <div className="contact-form-group">
            <textarea
              name="message"
              id="message"
              className="contact-form-textarea"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="contact-form-recaptcha">
            <div className="g-recaptcha" data-sitekey="copy-your-site-key-here"></div>
          </div>
          <div className="contact-form-submit">
            <input
              type="submit"
              id="send_message"
              value="Submit Now"
              className="default-btn border-0"
            />
          </div>
        </form>
      </div>
    </section>






        </div>
    );

}
export default Enquiry;