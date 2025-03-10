
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  NonAcBus(){

  const cardData = 
    {
      keyword: 'Non-AC Bus Rental Service in Pune',
      heading: 'Amruta Travels: Non-AC Bus Rental Service in Pune',

      headingDescription: 'When it comes to large group travel in Pune, Amruta Travels is your top choice for 50-seater bus rentals. Whether you are planning a corporate event, a school excursion, a family reunion, or a wedding, our 50-seater buses offer the perfect blend of comfort, convenience, and reliability. Here’s why our 50-seater buses stand out and what features make them the ideal choice for your group travel needs.',

      top:"Top Features of Our Non-AC Buses on Rent :",

       topPlaces : [
        {
            "title": "Spacious Seating",
            "description": "Our non-AC buses are designed with ample seating to ensure comfort for all passengers. Each seat is spacious and provides sufficient legroom, making even long journeys comfortable and enjoyable."
        },
        {
            "title": "Economical Travel",
            "description": "Non-AC buses are an affordable alternative to air-conditioned options, offering great value for budget-conscious travelers. Enjoy a cost-effective solution without compromising on comfort."
        },
        {
            "title": "Well-Maintained Interiors",
            "description": "Our buses are regularly cleaned and maintained to ensure a pleasant travel experience. We adhere to stringent cleanliness standards to keep our vehicles in top condition."
        },
        {
            "title": "Ample Luggage Space",
            "description": "With dedicated luggage compartments and overhead storage, our non-AC buses offer plenty of room for your travel essentials, ensuring that both passengers and baggage are accommodated comfortably."
        },
        {
            "title": "Experienced Drivers",
            "description": "Our professional drivers are well-trained, experienced, and familiar with local and outstation routes. They prioritize safety, punctuality, and courteous service to ensure a smooth journey."
        },
        {
            "title": "Customizable Options",
            "description": "We offer various bus sizes and configurations to meet your specific needs. Choose from 13-seater, 17-seater, 20-seater, 25-seater, 32-seater, 35-seater, 40-seater, and 45-seater buses based on your group size and travel requirements."
        },
        {
            "title": "Flexible Rental Terms",
            "description": "Whether you need a bus for a few hours, a full day, or several days, we provide flexible rental options to fit your schedule and budget."
        },
        {
            "title": "Reliable and Safe Travel",
            "description": "Safety is our priority. Our non-AC buses are equipped with safety features like seat belts, emergency exits, and fire extinguishers. Regular maintenance checks ensure that every bus is in excellent working condition."
        },
        {
            "title": "Affordable Pricing",
            "description": "We offer competitive and transparent pricing for our non-AC bus rentals. Our rates are designed to provide exceptional value, with no hidden fees or surprises."
        },
        {
            "title": "Convenient Booking Process",
            "description": "Booking a non-AC bus with Amruta Travels is easy. Contact us via phone, email, or our online booking form, and our team will assist you in securing the perfect bus for your trip."
        }
    ],   
     
     services : [
      {
          "name": "Non-AC Bus for Outstation Travel",
          "description": "Ideal for long-distance journeys, our non-AC buses provide a cost-effective and comfortable solution for outstation trips."
      },
      {
          "name": "Non-AC Tempo Traveller on Rent",
          "description": "For smaller groups needing additional comfort, our non-AC tempo travellers offer extra space and a pleasant travel experience."
      },
      {
          "name": "Non-AC Mini Bus Hire",
          "description": "Perfect for medium-sized groups, our mini buses are ideal for local trips and short-distance travel."
      },
      {
          "name": "Non-AC Bus for Picnics",
          "description": "Planning a family picnic? Our non-AC buses offer ample space and comfort for a relaxing and enjoyable outing."
      },
      {
          "name": "Corporate Trip Rentals",
          "description": "We provide reliable and affordable non-AC buses for corporate events, ensuring your team travels comfortably and on time."
      },
      {
          "name": "Non-AC Bus Per KM Rate in Pune",
          "description": "Our per-kilometer rates for non-AC buses are competitive and transparent. Rates are based on distance traveled, with options available for both local and outstation trips."
      },
      {
          "name": "Bus on Rent in Pimpri Chinchwad",
          "description": "For those in Pimpri Chinchwad, our non-AC buses are available for both local and outstation travel, ensuring reliable transportation right from your location."
      },
      {
          "name": "Bus on Rent in Hadapsar",
          "description": "Our Hadapsar-based rental services offer convenient and comfortable non-AC buses for various needs, including corporate events and family gatherings."
      },
      {
          "name": "Non-AC Bus Hire Prices",
          "description": "We offer detailed quotes based on your specific requirements, ensuring you receive the best value for your rental."
      },
      {
          "name": "Non-AC Bus Rental Service in Pune Contact Number",
          "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Non-AC Bus Rental Service in Pune. We ensure a smooth and enjoyable ride for all our customers."
      }
  ],  
   tableData : [
    ["Non-AC Bus for Hire for Outstation", "Non-AC Tempo Traveller on Rent Pune"],
    ["Non-AC Bus Hire on Rent in Pune", "Non-AC Mini Bus Hire on Rent in Pune"],
    ["Non-AC Bus Hire for Picnic in Pune", "Best Bus Rental Service in Pune"],
    ["32, 35, 40, 45-Seater Local and Outstation Bus", "14, 17, 20, 25-Seater Bus on Rent Pune"],
    ["Best Bus Rental Services in Pune Tempo Traveller on Rent", "Luxury Tempo Traveller on Rent in Kothrud"],
    ["Non-AC Bus Rental Service for Corporate Trip in Pune", "Affordable Mini Bus on Rent in Pune"],
    ["13, 17, 20, 25, 32-Seater Bus on Rent in Pune", ""]
],

 whychoose : [
  {
      "WhyChooseheading": "Why Choose Amruta Travels for Non-AC Bus Rentals in Pune?",
      "WhyChoosedescription": "When it comes to non-AC bus rentals in Pune, Amruta Travels is your ideal choice for a variety of reasons. We offer a range of services tailored to meet the diverse needs of our clients, from local trips to outstation journeys. Here’s why you should consider us for your next bus rental:"
  },
  {
      "WhyChooseheading": "Spacious and Comfortable Buses:",
      "WhyChoosedescription": "Our non-AC buses are designed with passenger comfort in mind. They feature ample seating and space, ensuring that all travelers have enough room to relax during their journey. Whether you're going on a short local trip or a long-distance outing, our buses provide a comfortable travel experience."
  },
  {
      "WhyChooseheading": "Experienced and Professional Drivers:",
      "WhyChoosedescription": "Our drivers are skilled professionals who are well-trained, licensed, and familiar with both local and outstation routes. They focus on providing a safe, punctual, and courteous service, making sure your journey is as smooth and comfortable as possible."
  },
  {
      "WhyChooseheading": "Well-Maintained Fleet:",
      "WhyChoosedescription": "We take pride in maintaining our non-AC buses to the highest standards. Regular servicing and thorough inspections ensure that each bus is in excellent condition, reducing the risk of breakdowns and enhancing overall reliability."
  },
  {
      "WhyChooseheading": "Transparent and Competitive Pricing:",
      "WhyChoosedescription": "Our pricing structure for non-AC bus rentals is both competitive and transparent. We provide clear and upfront quotes with no hidden fees, helping you plan your budget effectively and get the best value for your money."
  },
  {
      "WhyChooseheading": "Customizable Rental Options:",
      "WhyChoosedescription": "We offer flexible rental options to cater to your specific needs, whether you're organizing a short trip, a family picnic, or a multi-day journey. Our services can be tailored to fit your requirements, ensuring a customized and satisfying travel experience."
  },
  {
      "WhyChooseheading": "Excellent Customer Support:",
      "WhyChoosedescription": "Our customer support team is dedicated to providing exceptional service from the moment you book until the completion of your journey. We are committed to addressing your needs promptly and efficiently, ensuring a smooth and hassle-free experience."
  },
  {
      "WhyChooseheading": "Punctual and Reliable Service:",
      "WhyChoosedescription": "Timeliness is crucial for group travel, and we adhere to strict schedules to ensure punctual departures and arrivals. Our reliable service aims to keep your plans on track and provide a stress-free travel experience."
  },
  {
      "WhyChooseheading": "Variety of Amenities:",
      "WhyChoosedescription": "Although our buses are non-AC, we offer various amenities to enhance your travel experience. Depending on your needs, we can provide features such as audio systems and comfortable seating arrangements to ensure a pleasant journey."
  }
]
    };

    
    
    const faqData = [
      {
          "question": "What is included in the rental of a non-AC bus?",
          "answer": "Our non-AC bus rental includes comfortable seating and professional driver services. Additional amenities may be requested based on availability."
      },
      {
          "question": "How do I book a non-AC bus with Amruta Travels?",
          "answer": "Booking a non-AC bus is easy. Contact us via phone, email, or our online booking form with your travel details, and we will assist with the reservation."
      },
      {
          "question": "Are there additional charges for extra services?",
          "answer": "Our pricing is transparent, but additional charges may apply for extended hours or special requests. We provide a detailed quote before booking."
      },
      {
          "question": "What is the cancellation policy?",
          "answer": "Cancellation policies vary based on timing. Contact us for specific details regarding your booking."
      },
      {
          "question": "Can I request a specific type of non-AC bus?",
          "answer": "Yes, requests can be made based on availability. We offer various bus sizes and configurations."
      },
      {
          "question": "Are the drivers experienced and licensed?",
          "answer": "Yes, all our drivers are experienced, licensed, and trained to ensure a safe journey."
      },
      {
          "question": "Can I make changes to my booking?",
          "answer": "Yes, changes can be made subject to availability and applicable fees. Contact our customer service team for assistance."
      },
      {
          "question": "What should I do if I need assistance during my journey?",
          "answer": "Contact the driver or our customer service team for immediate assistance."
      },
      {
          "question": "How far in advance should I book?",
          "answer": "Early booking is recommended to ensure availability, especially during peak seasons."
      },
      {
          "question": "Are there restrictions on luggage?",
          "answer": "Standard luggage allowances apply, with accommodations available for additional baggage upon request."
      }
  ];
  
    
    
    
  const testimonials = [
    {
        "name": "Snehal Deshmukh",
        "text": "I recently booked a non-AC bus from Amruta Travels for a school excursion in Pune, and I was thoroughly impressed with the service. The bus was well-maintained and clean, which ensured a comfortable journey for all the students. The driver was punctual and handled the routes efficiently, making sure we reached our destination safely and on time. Despite being a non-AC bus, the ample ventilation and comfortable seating made the trip pleasant. Amruta Travels provided excellent value for money and I highly recommend their non-AC bus rental services for any budget-friendly group travel needs."
    },
    {
        "name": "Ravi Kumar",
        "text": "For our family reunion, we needed a non-AC bus to accommodate a large group traveling around Pune. Amruta Travels offered a fantastic solution. The bus was spacious and in great condition, and the staff ensured everything was up to our expectations. Although it was a non-AC model, the bus had good airflow and was comfortable for the entire trip. The driver was courteous and managed the traffic and routes skillfully, ensuring a smooth journey. I’m very pleased with the service and would certainly use Amruta Travels again for similar needs."
    }
];

    
    
        const carouselItems = testimonials.map(testimonial => (
          <div key={testimonial.name}>
            <blockquote>
              <p>{testimonial.text}</p>
              <footer>— {testimonial.name}</footer>
            </blockquote>
          </div>
        ));
      
        const carouselOptions = {
          loop: true,
          margin: 10,
          nav: true,
          items: 1
        };
      
      const contactData = {
        heading: "Non Ac Bus Rental Service in Pune Contact Number:",
        contactNumbers: [
          "+91 8421333435",
          "+91 7875774499",
          "+91 7620411277",
          "+91 9284718314"
        ],
        email: "booking@amrutatravels.com"
      };


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
     
    return(
        <div>
          <GoogleAnalytics/>
<Helmet>
  <title>Contact: +91 8421333435 | Amruta Travel | Non AC Bus Rental Service in Pune | Hire Non AC Buses for Outstation, Picnic, Corporate Trips & More</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent non-AC buses in Pune for outstation trips, picnics, corporate events, and more. Choose from 32, 35, 40, and 45-seater buses at affordable rates.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/non-ac-bus-rent-pune",
        "logo": "https://amrutatravel.com/images/non-ac-bus-pune.jpg",
        "image": "https://amrutatravel.com/images/non-ac-bus-pune.jpg",
        "priceRange": "₹20000 - ₹50000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/non-ac-bus-rent-pune",
          "priceCurrency": "INR",
          "price": "20000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "8000"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rahul Joshi"
            },
            "datePublished": "2024-10-25",
            "reviewBody": "Amruta Travel's non-AC bus service for our office picnic was very affordable and comfortable. Excellent service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Agarwal"
            },
            "datePublished": "2024-09-12",
            "reviewBody": "The non-AC mini bus we rented for our family trip was spacious and budget-friendly. Highly recommended!"
          }
        ],
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
          "serviceUrl": "https://amrutatravel.com/non-ac-bus-rent-pune"
        },
        "keywords": "Non AC Bus Rent in Pune, Non AC Tempo Traveller Hire, Non AC Bus for Outstation, Non AC Mini Bus on Rent, Bus Rental for Picnic in Pune, Best Bus Rental Service Pune, Affordable Mini Bus Rental Pune, 32 Seater Bus on Rent Pune, 35 Seater Bus Rent, 45 Seater Bus Hire, Corporate Trip Bus Rental"
      }
    `}
  </script>
 
</Helmet>


<section className="page-header">
      <div className="page-header-shape"></div>
      <div className="container">
        <div className="page-header-info">
          <h4>{cardData.keyword}</h4>
          <h2>
            Feel your journey <br /> with <span>Amruta Travels</span>
          </h2>
          
        </div>
      </div>
    </section>

<section>
    <div className="container-fluid ">
<div className="row">
<div className="col-12 col-md-7">
    <img src='\img\Keyword Based Image\Keyword Based Image-49.jpg' alt='img'/>
<h1 className="py-1">{cardData.heading} </h1><p>{cardData.headingDescription}</p>
<div>
      {cardData.topPlaces.map((place, index) => (
        <div key={index}>
          <h3 className="py-1 Colo">{place.title}</h3>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
    <div>
        {cardData.services.map((service, index) => (
          <div key={index} className=" my-4">
            <h3 className="py-1 Colo">{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

<table className="table table-responsive Border-key">
  <tbody className=' Border-key'>
    {cardData.tableData.map((row, rowIndex) => (
      <tr className='Border-key' key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex} className=' Border-key' >{cell}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

   <div id="why-choose-section">
      {cardData.whychoose.map((item, index) => (
        <div key={index}>
          <h3 className="py-1 Colo">{item.WhyChooseheading}</h3>
          <p>{item.WhyChoosedescription}</p>
        </div>
      ))}
    </div>

   
<div>
      <h3 className='Colo'>Frequently Asked Questions (FAQs) for amruta travels:</h3>
      <Accordion data={faqData} />
    </div>

    <CustomCarousel items={carouselItems} options={carouselOptions} />

    <div>

      <div className="contact-box">
      <h2>{contactData.heading}</h2>
      <p>For booking inquiries or any assistance, please feel free to contact us:</p>
      <div className="contact-details">
        <p><strong className='Colo'>Mobile No:</strong></p>
        <ul>
          {contactData.contactNumbers.map((number, index) => (
            <li key={index}>
              <a href={`tel:${number}`} className="contact-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
        <p><strong className='Colo'>Email Id:</strong></p>
        <p>
          <a href={`mailto:${contactData.email}`} className="contact-link">
            {contactData.email}
          </a>
        </p>
      </div>
    </div>
    </div>
</div>

<div className='col-12 col-md-4' >
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

<div className=" rounded p-4 shadow-sm Uni_border" >
    <h4 className="pb-3 pt-3 lead fw-bold whit">Contact Information</h4>

    <div className="row ">
   
      <div className="col-12 mb-3">
        <div className="Small_border  rounded p-3 text-center ">
          <h4 className=" lead fw-semibold text-dark">Phone Numbers</h4>
          <i className="bi bi-telephone-fill fs-1 mb-2"></i>
          <div className=''>
            <a href="tel:+91 8421333435" className="d-block  whit">+91 8421333435</a>
            <a href="tel:+91 7875774499" className="d-block  whit">+91 7875774499</a>
            <a href="tel:+91 7620411277" className="d-block  whit">+91 7620411277</a>
            <a href="tel:+91 9284718314" className="d-block  whit">+91 9284718314</a>
          </div>
        </div>
      </div>

    
      <div className="col-12 mb-3 ">
        <div className="Small_border rounded p-3 text-center">
          <i className="bi bi-envelope fs-1 mb-2"></i>
          <div>
            <h4 className=" fw-semibold lead">Email</h4>
            <a href="mailto:booking@amrutatravel.com" className="whit d-block">
              booking@amrutatravel.com
            </a>
          </div>
        </div>
      </div>

      
      <div className="col-12 mb-3">
        <div className="Small_border  rounded p-3 text-center">
          <i className="bi bi-house-fill fs-1 mb-2"></i>
          <div>
            <h4 className=" fw-semibold lead">Address</h4>
            <p className="whit ">
              <i>
              Amruta Travels:<br />
              Office No.- 2, Ground Floor,<br />
              Wings H-(Puram), Prayeja City,<br />
              Phase-2, Near Prayeja City,<br />
              Vadgaon Budruk,<br />
              Pune, Maharashtra - 411041
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
<FareCard/>

</div>
    </div>
</section>



        </div>
    );
}
export default NonAcBus;