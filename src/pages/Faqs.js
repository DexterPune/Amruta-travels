import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Helmet } from 'react-helmet';
import GoogleAnalytics from './GoogleAnalytics';

const Faqs = () => {


    const Images = [
        {
            place: "/img/tempo4.jpg",
            text: "Tempo Traveller Hire in Pune",
        },
        {
            place: "/img/mini5.jpg",
            text: "Mini Bus On Rent in Pune",
        },
        {
            place: "/img/bus32-2.jpg",
            text: "32 Seater Bus Rent in Pune",
        },
        {
            place: "/img/bus45-3.jpg",
            text: "45 Seater Bus on Rent in Pune",
        },
        {
            place: "/img/luxury6.jpg",
            text: "Luxury Bus Rental in Pune",
        },
        {
            place: "/img/force-urbania.jpg",
            text: "Force Urbania On Rent in Pune",
        },
        {
            place: "/img/mini5.jpg",
            text: "Bus Service for Picnic in Pune",
        },
        {
            place: "/img/tempo4.jpg",
            text: "17 Seater Tempo Traveller on Rent in Pune",
        },
    ];



    return (

        <div>
            <GoogleAnalytics />
            <Helmet>
                <title> Tempo Traveller On Rent in Pune ₹25 Per Km </title>
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
                <div className="page-header-shape"></div>
                <div className="container">
                    <div className="page-header-info">
                        <h4>Help &amp; Faqs!</h4>
                        <h2>
                            Frequently Asked <br /> <span>Questions!</span>
                        </h2>
                        <p>
                            Everything your taxi business <br /> needs is already here!
                        </p>
                    </div>
                </div>
            </section>

            <section className="blog-section blog-page bg-grey padding">
                <div className="container px-0" >
                    <div className="row g-0">
                        <div className="col-lg-8 sm-padding">
                            <div className="accordion faq-accordion" id="faq-accordion">
                                {/* Accordion Item 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button lead"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            <p className='lead'>What services does Amruta Travels offer?</p>

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                Amruta Travels offers a range of travel-related services, including domestic and international tour packages, flight and hotel bookings, Bus rentals, visa assistance, and customized travel itineraries. They aim to provide a comprehensive travel experience to suit various needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <p className='lead'>

                                                How can I book a trip with Amruta Travels?
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                You can book a trip with Amruta Travels by visiting their website and using their online booking system, calling their customer service hotline, or visiting their office in person. They also offer assistance via email for customized travel plans.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            <p className='lead'>

                                                What are the payment options available for booking with Amruta Travels?
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                Amruta Travels typically accepts various payment methods including credit/debit cards, bank transfers, and sometimes cash payments. For online bookings, they usually provide secure payment gateways for card transactions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 4 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour" >
                                        <button
                                            className="accordion-button collapsed "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"

                                        >
                                            <p className='lead'>

                                                Can I modify or cancel my booking with Amruta Travels?
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body text-white" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                Yes, you can modify or cancel your booking, but it is subject to the terms and conditions of your travel package. It’s best to contact their customer service as soon as possible to inquire about the process and any applicable fees.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 5 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <p className='lead'>

                                                What should I do if I face issues during my trip booked through Amruta Travels?
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                If you encounter any issues during your trip, you should contact Amruta Travels' customer support immediately. They are there to assist with any problems and ensure you have a smooth travel experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingsix">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <p className='lead'>

                                                Are there any special offers or discounts available?
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSix"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="#headingsix"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                Amruta Travels occasionally offers special promotions and discounts on their travel packages. It’s a good idea to subscribe to their newsletter or follow them on social media to stay updated on the latest offers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingsevan">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsesevan"
                                            aria-expanded="false"
                                            aria-controls="collapsesevan"
                                        >
                                            <p className='lead'>

                                                Does Amruta Travels offer travel insurance?
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapsesevan"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="#headingsevan"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                Yes, Amruta Travels often provides travel insurance options as part of their service. Travel insurance can cover various aspects such as trip cancellations, medical emergencies, and lost baggage. Be sure to ask about this when booking your trip.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingeight">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseeight"
                                            aria-expanded="false"
                                            aria-controls="collapseeight"
                                        >
                                            <p className='lead'>

                                                How do I get a refund if I cancel my trip?
                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseeight"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="#headingeight"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                To obtain a refund after canceling your trip, you need to follow Amruta Travels' cancellation policy, which typically involves submitting a cancellation request and adhering to any deadlines. Refunds are processed based on their terms, and it’s best to confirm the specifics with their customer service.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingnine">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsnine"
                                            aria-expanded="false"
                                            aria-controls="collapsnine"
                                        >
                                            <p className='lead'>
                                                What safety measures does Amruta Travels take to ensure customer safety?

                                            </p>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapsnine"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="#headingnine"
                                        data-bs-parent="#faq-accordion"
                                    >
                                        <div className="accordion-body" style={{ backgroundColor: '#F26722' }}>
                                            <p className='lead'>
                                                Amruta Travels prioritizes customer safety by partnering with reputable service providers and ensuring that all travel arrangements adhere to safety standards. They also stay updated on travel advisories and health guidelines to provide safe travel experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 sm-padding">


                            {Images.map((e) => {
                                return (
                                    <div className="box1">
                                        <a
                                            href="./"
                                            className="d-flex justify-content-around align-items-center"
                                        >
                                            <div className="b1">
                                                <img src={e.place} alt="img" />
                                            </div>
                                            <div className="b2">
                                                {" "}
                                                <a href="./">{e.text}</a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faqs;
