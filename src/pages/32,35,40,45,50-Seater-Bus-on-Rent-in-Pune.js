
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function SearterBusOnOnRent(){

  const cardData = 
    {
      keyword: '32, 35, 40, 45, and 50 Seater Buses on Rent in Pune ',
      heading: 'Amruta Travels: 32, 35, 40, 45, and 50 Seater Buses on Rent in Pune',

      headingDescription: 'When seeking reliable and comfortable bus rental services in Pune, Amruta Travels provides a range of options to suit your needs. From corporate events and family outings to special occasions and local tours, our diverse fleet ensures you travel in style and comfort. Here’s a look at the top bus rental options available with Amruta Travels in Pune.',

      top:"Top 32, 35, 40, 45, and 50 Seater Buses on Rent in Pune:",
       topPlaces : [
        {
            "title": "32-Seater Bus on Rent in Pune:",
            "description": "Our 32-seater bus is an excellent choice for medium-sized groups. It provides a spacious and comfortable interior, making it ideal for various types of local travel within Pune."
        },
        {
            "title": "35-Seater Bus on Rent in Pune:",
            "description": "The 35-seater bus offers additional room for larger groups. It’s perfect for corporate events, extended local trips, or significant family outings, ensuring a comfortable travel experience."
        },
        {
            "title": "40-Seater Bus on Rent in Pune:",
            "description": "Designed for larger groups, the 40-seater bus ensures ample seating and comfort. It’s suitable for major events and group travel, providing reliable transportation across Pune."
        },
        {
            "title": "45-Seater Bus on Rent in Pune:",
            "description": "The 45-seater bus balances capacity and comfort, making it suitable for sizable groups. It’s ideal for extended trips or large-scale events, ensuring a pleasant journey."
        },
        {
            "title": "50-Seater Bus on Rent in Pune:",
            "description": "Our 50-seater bus accommodates very large groups with maximum seating capacity. It’s perfect for major corporate events, large school excursions, and extensive local tours, ensuring everyone travels comfortably."
        },
        {
            "title": "Luxury 32-Seater Bus on Rent in Pune:",
            "description": "The luxury 32-seater bus offers a premium travel experience with high-end features. It’s ideal for special occasions, executive travel, or luxurious group outings, providing top-level comfort and style."
        },
        {
            "title": "AC 35-Seater Bus on Rent in Pune:",
            "description": "Our AC 35-seater bus is designed to keep you cool during warmer months. This bus is perfect for local trips and corporate events, offering a comfortable and refreshing environment."
        },
        {
            "title": "Non-AC 40-Seater Bus on Rent in Pune:",
            "description": "The non-AC 40-seater bus is a cost-effective option offering reliable transportation with ample space. It’s suitable for budget-conscious groups needing dependable travel within Pune."
        },
        {
            "title": "Luxury 45-Seater Bus on Rent in Pune:",
            "description": "Combining spaciousness with high-end features, the luxury 45-seater bus is ideal for upscale events and luxurious tours. It provides a premium travel experience for large groups."
        },
        {
            "title": "Executive 50-Seater Bus on Rent in Pune:",
            "description": "The executive 50-seater bus provides a top-tier travel experience for very large groups. Equipped with executive features, it’s perfect for high-end corporate events and large-scale conferences, ensuring a sophisticated and comfortable journey."
        }
    ],

    "services": [
        {
          "name": "32 Seater Bus Hire Near Me in Pune:",
          "description": "Find the best local 32-seater bus rental options with Amruta Travels. Ideal for medium-sized groups, our buses offer comfort and reliability for all local travel needs."
        },
        {
          "name": "32 Seater Bus Hire for Outstation in Pune:",
          "description": "Planning an outstation trip? Our 32-seater buses are perfect for comfortable and efficient travel to destinations outside Pune."
        },
        {
          "name": "32 Seater Bus Rate Per Km in Pune:",
          "description": "Get competitive rates for 32-seater bus rentals based on distance traveled. We offer transparent pricing to suit your budget and travel requirements."
        },
        {
          "name": "35 Seater Bus on Rent in Pune:",
          "description": "Ideal for slightly larger groups, our 35-seater buses provide ample space and comfort for various occasions, including family gatherings and corporate events."
        },
        {
          "name": "35 Seater Tourist Bus Near Me in Pune:",
          "description": "Discover local options for 35-seater tourist buses. Perfect for sightseeing tours and travel within Pune."
        },
        {
          "name": "35 Seater Tourist Bus For Outstation in Pune:",
          "description": "For outstation trips, our 35-seater buses offer a comfortable and spacious solution, ensuring a pleasant journey for larger groups."
        },
        {
          "name": "35 Seater Bus for Corporate Office in Pune:",
          "description": "Arrange transportation for your corporate office with our 35-seater buses, suitable for business meetings, seminars, and team outings."
        },
        {
          "name": "35 Seater Bus for Corporate Outing in Pune:",
          "description": "Plan a memorable corporate outing with our 35-seater buses, offering ample space and comfort for your team."
        },
        {
          "name": "40 Seater Tourist Bus Near Me in Pune:",
          "description": "Find local rental options for 40-seater tourist buses. Perfect for large group travel and tours within Pune."
        },
        {
          "name": "40 Seater Bus Rent Per Km in Pune:",
          "description": "Get detailed information on the cost of renting a 40-seater bus per kilometer. We provide competitive and transparent pricing."
        },
        {
          "name": "40 Seater Bus on Rent in Pune:",
          "description": "For larger events and group travel, our 40-seater buses offer plenty of space and comfort for an enjoyable journey."
        },
        {
          "name": "40 Seater Bus on Rent in Pune for Wedding:",
          "description": "Make your wedding transportation seamless with our 40-seater buses. Ideal for transporting guests comfortably to and from the wedding venue."
        },
        {
          "name": "45 Seater Bus Near Me for Rent:",
          "description": "Looking for a 45-seater bus near you for rent? At Amruta Travels, we offer spacious and comfortable 45-seater buses suitable for various occasions. Whether it’s a family trip, corporate event, or a school outing, our well-maintained buses are perfect for accommodating large groups. Enjoy a smooth and enjoyable ride with our top-notch rental service."
        },
        {
          "name": "45 Seater Bus for School Trip:",
          "description": "For school trips, a 45-seater bus from Amruta Travels ensures that all students travel comfortably and safely. Our buses are equipped with essential amenities to make the journey pleasant, and our experienced drivers prioritize safety and punctuality. Book a 45-seater bus with us for a stress-free school outing."
        },
        {
          "name": "45 Seater Bus Price Per Km in Pune:",
          "description": "Curious about the price per km for renting a 45-seater bus in Pune? Amruta Travels offers competitive rates based on distance and duration. Our transparent pricing ensures you get excellent value for your money without hidden fees. Contact us to get a customized quote for your travel needs."
        },
        {
          "name": "50 Seater Bus Rental Services in Pune:",
          "description": "Amruta Travels provides reliable 50-seater bus rental services in Pune, ideal for large groups. Our fleet of 50-seater buses is perfect for corporate events, weddings, and group tours. Enjoy comfort, ample space, and professional service with our 50-seater bus rentals."
        },
        {
          "name": "50 Seater Bus for Corporate Outing Near Me:",
          "description": "Planning a corporate outing and need a 50-seater bus near you? Amruta Travels offers well-equipped 50-seater buses that are perfect for corporate events. Our buses provide a comfortable and professional environment, ensuring your team travels in style and comfort. Book with us for a seamless corporate outing experience."
        },
        {
          "name": "50 Seater Bus Hire in Pune:",
          "description": "For reliable 50-seater bus hire in Pune, turn to Amruta Travels. Our 50-seater buses are ideal for large groups and come with a range of amenities to ensure a pleasant journey. Whether for a corporate event, wedding, or tour, we provide dependable and affordable bus hire services."
        },
        {
          "name": "32, 35, 40, 45, 50 Seater Bus on Rent in Pune for Family:",
          "description": "If you’re looking for a bus to accommodate your family trip, Amruta Travels offers a range of options from 32 to 50-seater buses. Our buses are perfect for family outings, providing comfort and ample space for everyone. Enjoy a comfortable and enjoyable family trip with our reliable bus rental services."
        },
        {
          "name": "32, 35, 40, 45, 50 Seater Bus on Rent in Pimpri Chinchwad:",
          "description": "Amruta Travels offers a variety of bus rental options in Pimpri Chinchwad, including 32, 35, 40, 45, and 50-seater buses. Whether you need a bus for a local event or an outstation trip, we have the right vehicle to meet your needs. Our buses are well-maintained and ready to provide a comfortable journey."
        },
        {
          "name": "32, 35, 40, 45, 50 Seater Bus for Outstation Trip:",
          "description": "Planning an outstation trip and need a bus for your group? Amruta Travels provides a range of buses from 32 to 50-seater for outstation journeys. Our buses are equipped to handle long-distance travel, ensuring comfort and safety throughout your trip. Book with us for a hassle-free outstation adventure."
        },
        {
          "name": "32, 35, 40, 45, 50 Seater Bus for Corporate Trip:",
          "description": "For corporate trips, Amruta Travels offers a variety of bus sizes from 32 to 50-seater to accommodate your team. Our buses provide a professional and comfortable environment, ideal for business events and team outings. Choose us for a smooth and efficient corporate travel experience."
        },
        {
          "name": "32, 35, 40, 45, 50 Seater Bus on Rent in Pune Contact Number:",
          "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient 32, 35, 40, 45, 50-seater bus rentals in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
      ],

      "tableData": [
        ["-32 Seater Bus Hire Near Me in Pune", "-32 Seater Bus Hire for Outstation in Pune"],
        ["-Amruta Travels Pune", "-32 Seater Bus Rate Per Km in Pune"],
        ["-35 Seater Bus on Rent in Pune", "-35 Seater Tourist Bus Near Me in Pune"],
        ["-35 Seater Tourist Bus For Outstation in Pune", "-35 Seater Bus for Corporate Office in Pune"],
        ["-35 Seater Bus for Corporate Outing in Pune", "-40 Seater Tourist Bus Near Me in Pune"],
        ["-40 Seater Bus Rent Per Km in Pune", "-40 Seater Bus on Rent in Pune"],
        ["-40 Seater Bus on Rent in Pune for Wedding", "-45 Seater Bus Near Me for Rent"],
        ["-45 Seater Bus for School Trip", "-45 Seater Bus Price Per Km in Pune"],
        ["-50 Seater Bus Rental Services in Pune", "-50 Seater Bus for Corporate Outing Near Me"],
        ["-50 Seater Bus Hire in Pune", "-32, 35, 40, 45, 50 Seater Bus on Rent in Pune for Family"],
        ["-32, 35, 40, 45, 50 Seater Bus on Rent in Pimpri Chinchwad", "-32, 35, 40, 45, 50 Seater Bus for Outstation Trip"],
        ["-32, 35, 40, 45, 50 Seater Bus for Corporate Trip", ""]
      ],

      "whychoose": [
        {
          "WhyChooseheading": "Why Choose Amruta Travels for Bus on Rent in Pune?",
          "WhyChoosedescription": "Amruta Travels offers exceptional bus rental services in Pune, catering to various needs with a focus on comfort, safety, and affordability."
        },
        {
          "WhyChooseheading": "Diverse Fleet:",
          "WhyChoosedescription": "We offer a wide range of bus sizes, from 32 to 50-seaters, ensuring you get the right vehicle for your specific needs. Whether it's a small family outing or a large corporate event, we have the perfect bus for you."
        },
        {
          "WhyChooseheading": "Comfort and Safety:",
          "WhyChoosedescription": "Our buses are well-maintained and equipped with modern amenities to ensure a comfortable and safe journey. From comfortable seating to reliable air conditioning, we prioritize your comfort on the road."
        },
        {
          "WhyChooseheading": "Experienced Drivers:",
          "WhyChoosedescription": "Our professional drivers are experienced, courteous, and trained to ensure a smooth and safe ride. They are familiar with local and outstation routes, helping you reach your destination efficiently."
        },
        {
          "WhyChooseheading": "Affordable Pricing:",
          "WhyChoosedescription": "We offer competitive and transparent pricing for our bus rentals. You can be assured of no hidden fees and value for your money with our clear and fair pricing structure."
        },
        {
          "WhyChooseheading": "Flexible Booking:",
          "WhyChoosedescription": "We provide flexible booking options to accommodate your needs, whether it's for a few hours, a full day, or multiple days. Our easy booking process makes it convenient for you to plan your trip."
        },
        {
          "WhyChooseheading": "Punctual Service:",
          "WhyChoosedescription": "At Amruta Travels, we understand the importance of punctuality. We ensure that our buses arrive on time and adhere to your schedule, providing reliable service every time."
        },
        {
          "WhyChooseheading": "Personalized Solutions:",
          "WhyChoosedescription": "We offer customized solutions to cater to your specific requirements, whether it's for a family trip, corporate outing, or school event. Our goal is to provide a tailored experience that meets your needs."
        },
        {
          "WhyChooseheading": "24/7 Customer Support:",
          "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with any inquiries, bookings, or issues you may have. We are committed to providing responsive and helpful support."
        }
      ]
};
const faqData = [
    {
        "question": "What types of buses are available for rent?",
        "answer": "Amruta Travels offers a variety of buses, including 32-seater, 35-seater, 40-seater, 45-seater, and 50-seater options. We have different types of buses to suit various group sizes and travel needs."
    },
    {
        "question": "How do I book a bus with Amruta Travels?",
        "answer": "You can book a bus by visiting our website, calling our customer service hotline, or visiting our office. We recommend booking in advance to secure your preferred vehicle."
    },
    {
        "question": "What amenities are included in the buses?",
        "answer": "Our buses are equipped with comfortable seating, air conditioning, and other amenities to ensure a pleasant journey. The specific amenities may vary depending on the type of bus you choose."
    },
    {
        "question": "What is the cost of renting a bus?",
        "answer": "The cost of renting a bus depends on factors such as the size of the bus, the duration of the hire, and the distance traveled. We offer competitive and transparent pricing. Contact us for a customized quote based on your requirements."
    },
    {
        "question": "Can I hire a bus for an outstation trip?",
        "answer": "Yes, we offer bus rentals for both local and outstation trips. Whether you’re planning a day trip or a longer journey, we can accommodate your travel needs."
    },
    {
        "question": "Are your buses well-maintained?",
        "answer": "Yes, all our buses are regularly maintained and cleaned to ensure they are in excellent condition. We prioritize the safety and comfort of our passengers."
    },
    {
        "question": "Can I request a specific type of bus?",
        "answer": "We will do our best to accommodate your request for a specific type of bus based on availability. Please provide your requirements when making a booking, and we will work to meet your needs."
    },
    {
        "question": "What is your cancellation policy?",
        "answer": "We have a cancellation policy in place, and cancellation charges may apply depending on when you cancel. For more details, please contact our customer support team."
    },
    {
        "question": "Are your drivers experienced and professional?",
        "answer": "Yes, our drivers are experienced, professional, and trained to provide safe and reliable transportation. They are knowledgeable about local routes and committed to delivering excellent service."
    },
    {
        "question": "Do you offer 24/7 customer support?",
        "answer": "Yes, our customer support team is available 24/7 to assist with bookings, answer queries, and address any issues you may encounter."
    }
];




const testimonials = [
    {
        "name": "Mr. Rajesh Patel",
        "text": "We recently hired a 50-seater bus from Amruta Travels for our company's annual conference, and the experience was exceptional. The bus was spacious, comfortable, and well-equipped with modern amenities. The driver was professional and punctual, ensuring we arrived at our destination on time. The booking process was smooth, and the customer service was top-notch. I highly recommend Amruta Travels for anyone in need of reliable and comfortable bus rentals in Pune."
    },
    {
        "name": "Miss Aisha Deshmukh",
        "text": "I booked a 35-seater bus from Amruta Travels for my family's reunion trip, and it was a fantastic experience. The bus was clean, comfortable, and perfect for our group size. The driver was friendly and knowledgeable about the best routes, making our journey enjoyable. The whole process, from booking to the actual trip, was seamless. Amruta Travels is definitely my go-to choice for bus rentals in Pune, and I’ll be using their services again in the future."
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
        heading: "32,35,40,45,50 Seater Bus on Rent in Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | 32, 35, 40, 45, 50 Seater Bus Hire in Pune | Bus Rental for Outstation, Corporate Trips & Weddings</title>
  <meta name="description" content="Rent 32, 35, 40, 45, 50 Seater Buses in Pune for outstation trips, corporate outings, family events, and weddings. Best rental services near you, including rates per km and bookings for large groups in Pune." />
  <meta name="keywords" content="32 Seater bus hire near me in Pune, 32 Seater Bus Hire for Outstation in Pune, 32 Seater Bus Rate Per Km in Pune, 35 Seater bus on rent in Pune, 35 Seater tourist bus near me in Pune, 35 Seater Tourist Bus For Outstation in Pune, 35 Seater bus for corporate office in Pune, 35 Seater bus for corporate outing in Pune, 40 Seater Tourist Bus Near me Pune, 40 Seater Bus Rent per km in Pune, 40 Seater bus on rent in Pune, 40 Seater bus on rent in Pune for Wedding, 45 Seater bus near me for Rent, 45 Seater bus for school trip, 45 Seater bus price per km in Pune, 50 Seater Bus Rental Services in Pune, 50 Seater bus for corporate outing near me, 50 Seater Bus Hire in Pune, 32, 35, 40, 45, 50 Seater Bus on Rent in Pimpri Chinchwad, 32 35 40 45 50 Seater Bus for Outstation Trip, 32 35 40 45 50 Seater Bus for Corporate Trip" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers 32, 35, 40, 45, and 50 seater bus rental services in Pune. Rent buses for corporate outings, weddings, family trips, and outstation travel. Best rates per km and comfortable travel options for large groups.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/32-35-40-45-50-seater-bus-on-rent-pune",
        "logo": "https://amrutatravel.com/images/bus-hire-pune.jpg",
        "image": "https://amrutatravel.com/images/bus-hire-pune.jpg",
        "priceRange": "₹2000 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/32-35-40-45-50-seater-bus-on-rent-pune",
          "priceCurrency": "INR",
          "price": "2000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "180"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sandeep Rathi"
            },
            "datePublished": "2024-07-15",
            "reviewBody": "We hired a 50-seater bus for a corporate trip. Excellent service, smooth booking, and very comfortable ride."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anjali Shah"
            },
            "datePublished": "2024-09-02",
            "reviewBody": "The 35-seater bus we rented for a wedding was perfect. The driver was punctual and the bus was well-maintained."
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
          "serviceUrl": "https://amrutatravel.com/32-35-40-45-50-seater-bus-on-rent-pune"
        },
        "keywords": "32 Seater bus hire near me in Pune, 32 Seater Bus Hire for Outstation in Pune, 35 Seater bus on rent in Pune, 40 Seater Tourist Bus Near me Pune, 45 Seater bus for school trip, 50 Seater Bus Rental Services in Pune, 32 35 40 45 50 Seater Bus for Corporate Trip, Bus Rental in Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-47.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for “32, 35, 40, 45, 50 Seater Bus on Rent in Pune” – Amruta Travels:</h3>
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
export default SearterBusOnOnRent;