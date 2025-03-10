
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneLocalBusOnRent(){

  const cardData = 
    {
      keyword: 'Local Bus Rental in Pune ',
      heading: 'Amruta Travels: Local Bus Rental in Pune',

      headingDescription: 'Amruta Travels is your premier choice for local bus rentals in Pune, offering a variety of options to suit all your transportation needs. Whether you’re organizing a family outing, a corporate event, or a school trip, our local buses provide comfort, reliability, and convenience. Here are the top local bus rental options from Amruta Travels that ensure a seamless travel experience across Pune.',

      top:"Top Local Bus Rental in Pune:",
       topPlaces : [
        {
            "title": "Standard 20-Seater Bus on Rent in Pune:",
            "description": "Our standard 20-seater bus is perfect for small to medium-sized groups traveling within Pune. Equipped with comfortable seating and essential amenities, this bus ensures a pleasant and efficient journey for family gatherings, team outings, or local tours."
        },
        {
            "title": "30-Seater Bus on Rent in Pune:",
            "description": "Ideal for larger groups, our 30-seater bus offers ample space and comfort for extended local trips in Pune. Whether you’re planning a corporate event or a school excursion, this bus provides a reliable and comfortable travel solution."
        },
        {
            "title": "32-Seater Bus on Rent in Pune:",
            "description": "For groups needing a bit more room, our 32-seater bus is an excellent choice. This bus is well-suited for local travel in Pune, providing extra seating and comfort for group events, family reunions, or community activities."
        },
        {
            "title": "35-Seater Bus on Rent in Pune:",
            "description": "The 35-seater bus from Amruta Travels is designed for bigger groups who require spacious seating and comfort. Perfect for group travel across Pune, this bus ensures a smooth and enjoyable journey for various local events and functions."
        },
        {
            "title": "40-Seater Bus on Rent in Pune:",
            "description": "Our 40-seater bus is ideal for large groups traveling around Pune. With ample seating and modern amenities, this bus offers a comfortable and efficient solution for corporate events, school trips, and large family outings."
        },
        {
            "title": "50-Seater Bus on Rent in Pune:",
            "description": "For the largest groups, our 50-seater bus provides exceptional space and comfort. Whether you’re organizing a major corporate event or a large community trip within Pune, this bus accommodates all your needs with ease and reliability."
        },
        {
            "title": "Mini Bus (15-Seater) on Rent in Pune:",
            "description": "The 15-seater mini bus is perfect for smaller groups or more intimate gatherings. Ideal for local travel within Pune, this mini bus offers a cozy and convenient option for short trips, small corporate events, or family outings."
        },
        {
            "title": "Luxury Bus on Rent in Pune:",
            "description": "For those seeking premium comfort, our luxury bus rental option delivers an exceptional travel experience. Featuring high-end amenities such as plush seating and advanced entertainment systems, this bus is perfect for special events, executive travel, or luxury group outings in Pune."
        },
        {
            "title": "AC Bus on Rent in Pune:",
            "description": "Travel in comfort with our AC bus rental service. Designed for local trips in Pune, our air-conditioned buses provide a cool and comfortable environment, making your journey more enjoyable, especially during the warmer months."
        },
        {
            "title": "Non-AC Bus on Rent in Pune:",
            "description": "For a budget-friendly option, our non-AC bus rental provides a practical solution for local travel in Pune. Ideal for groups looking to save on costs while still enjoying a reliable and comfortable ride, our non-AC buses are well-suited for a variety of local events."
        }
    ], 

    "services": [
    {
      "name": "Bus Rental in Pune:",
      "description": "Amruta Travels is your go-to provider for bus rental in Pune. We offer an extensive fleet of well-maintained buses suitable for different purposes, including corporate events, family outings, school trips, and more. Our buses are equipped with modern amenities to ensure a comfortable and enjoyable journey."
    },
    {
      "name": "Bus Hire in Pune:",
      "description": "Looking for efficient and reliable bus hire in Pune? Amruta Travels provides a variety of bus hire options to accommodate your specific needs. Whether it’s a small group or a large gathering, our buses are perfect for local and outstation travel, offering comfort and dependability for every trip."
    },
    {
      "name": "14, 17, 20, 25, 32 Seater Buses:",
      "description": "We offer a range of bus sizes, including 14, 17, 20, 25, and 32-seater options. These buses are ideal for various group sizes and events. From small family trips to larger corporate outings, Amruta Travels has the right bus size for your needs, ensuring a comfortable and hassle-free experience."
    },
    {
      "name": "Pune Darshan Tempo Traveller on Rent:",
      "description": "Experience Pune’s top attractions with our tempo traveller rentals for Pune Darshan. Amruta Travels offers comfortable and reliable tempo travellers equipped with modern amenities, perfect for sightseeing tours and local explorations within the city."
    },
    {
      "name": "Pune to Sinhagad Fort Mini Bus on Rent:",
      "description": "Planning a trip to Sinhagad Fort? Amruta Travels provides mini bus rentals for a convenient and comfortable journey from Pune to this historic site. Our mini buses are perfect for groups, offering ample space and comfort for a memorable trip to Sinhagad Fort."
    },
    {
      "name": "Pune to Jejuri Bus Hire:",
      "description": "Traveling from Pune to Jejuri? Amruta Travels offers bus hire services for this route, providing a reliable and comfortable option for your pilgrimage or visit. Our buses ensure a smooth journey to Jejuri, accommodating all your travel needs."
    },
    {
      "name": "Pune to Ranjangaon Ganpati Bus Hire:",
      "description": "For trips to Ranjangaon Ganpati, Amruta Travels offers dedicated bus hire services. Our buses are well-equipped to handle group travel to this important religious site, ensuring a comfortable and convenient experience for all passengers."
    },
    {
      "name": "Pune to Ketkawale Balaji Temple Bus on Rent:",
      "description": "Visit Ketkawale Balaji Temple with ease using our bus rental services. Amruta Travels provides comfortable buses for this route, ensuring a smooth and enjoyable journey to one of Pune’s revered temples."
    },
    {
      "name": "Pune to Narayanpur Tempo Traveller on Rent:",
      "description": "If you’re heading to Narayanpur, consider renting a tempo traveller from Amruta Travels. Our tempo travellers are ideal for group travel, offering comfort and reliability for your trip from Pune to Narayanpur."
    },
    {
      "name": "Pune to Morachi Chincholi Bus on Rent:",
      "description": "Amruta Travels offers bus rentals for trips from Pune to Morachi Chincholi, a popular destination known for its peacock sanctuary. Our buses provide a comfortable and efficient travel option for exploring this unique attraction."
    },
    {
      "name": "Tempo Traveller on Rent for Local Trip:",
      "description": "For local trips within Pune, Amruta Travels provides tempo travellers that offer a cozy and convenient travel solution. Ideal for medium-sized groups, our tempo travellers are perfect for city tours, family outings, and other local excursions."
    },
    {
      "name": "Mini Bus on Rent for Local Trip in Pune:",
      "description": "Choose our mini buses for local trips around Pune. Amruta Travels offers mini buses equipped with comfortable seating and modern amenities, making them ideal for small group travels, local events, and day trips."
    },
    {
      "name": "Mini Bus on Rent in Pune:",
      "description": "Amruta Travels provides mini bus rentals in Pune for various needs. Our mini buses are perfect for group travel within the city, offering a comfortable and efficient way to transport groups to their destinations."
    },
    {
      "name": "Pune Darshan Tour Packages (1 Day):",
      "description": "Explore Pune with our 1-day Pune Darshan tour packages. Amruta Travels offers comprehensive tour packages that cover major attractions in Pune, ensuring a complete and enjoyable sightseeing experience within a single day."
    },
    {
      "name": "Pune Darshan Package Bus Package:",
      "description": "Our Pune Darshan package includes bus rentals for a thorough city tour. With Amruta Travels, you can explore Pune’s key attractions in comfort and style, benefiting from our organized and efficient bus tour packages."
    },
    {
      "name": "Pune Local Bus on Rent Party Package:",
      "description": "For special events and parties in Pune, Amruta Travels offers local bus rentals designed for celebration and convenience. Our party packages include well-equipped buses that ensure your event is memorable and enjoyable."
    },
    {
      "name": "Pune Tourist Local Bus Packages:",
      "description": "Amruta Travels provides local bus packages for tourists visiting Pune. Our packages are designed to offer comprehensive and comfortable transportation options for tourists, making it easy to explore the city’s attractions with ease."
    },
    {
      "name": "Pune Local Bus on Rent Contact Number:",
      "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Mini Bus On Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
    }
  ],


  "tableData": [
    ["-Bus Rental in Pune", "-Bus Hire in Pune"],
    ["-14, 17, 20, 25, 32 Seater", "-Amruta Travels Pune"],
    ["-Pune Darshan Tempo Traveller on Rent", "-Pune to Sinhagad Fort Mini Bus on Rent"],
    ["-Pune to Jejuri Bus Hire", "-Pune to Ranjangaon Ganpati Bus Hire"],
    ["-Pune to Ketkawale Balaji Temple Bus on Rent", "-Pune to Narayanpur Tempo Traveller on Rent"],
    ["-Pune to Morachi Chincholi Bus on Rent", "-Tempo Traveller on Rent for Local Trip"],
    ["-Mini Bus on Rent for Local Trip in Pune", "-Mini Bus on Rent in Pune"],
    ["-Pune Darshan Tour Packages (1 Day)", "-Pune Darshan Package Bus Package"],
    ["-Pune Local Bus on Rent Party Package", "-Pune Tourist Local Bus Packages"]
  ],

  "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Bus on Rent in Pune?",
      "WhyChoosedescription": "Amruta Travels offers exceptional bus rental services in Pune, catering to various needs with a focus on comfort, safety, and affordability."
    },
    {
      "WhyChooseheading": "Wide Range of Buses:",
      "WhyChoosedescription": "We offer a variety of buses, including luxury, semi-luxury, and standard options, ensuring that every customer finds a bus suited to their needs. Whether you need a small vehicle for a family outing or a large bus for corporate events, our fleet has you covered."
    },
    {
      "WhyChooseheading": "Affordable Pricing:",
      "WhyChoosedescription": "Our competitive rates make it easy for you to rent a bus for local travel in Pune without breaking the bank. We provide high-quality services at prices that fit your budget, with no hidden fees."
    },
    {
      "WhyChooseheading": "Experienced Drivers:",
      "WhyChoosedescription": "Our team of professional drivers is well-versed with Pune's roads, ensuring a safe and timely journey. They are trained to handle various driving conditions and prioritize passenger safety."
    },
    {
      "WhyChooseheading": "24/7 Availability:",
      "WhyChoosedescription": "We offer round-the-clock bus rental services to accommodate your travel needs, whether for a day trip, event, or city tour. Our team is always available to assist you with your transportation needs at any time."
    },
    {
      "WhyChooseheading": "Customizable Packages:",
      "WhyChoosedescription": "We provide flexible and tailored rental packages for corporate events, weddings, picnics, or school outings. You can choose from a range of options to match your specific requirements and preferences."
    },
    {
      "WhyChooseheading": "Comfortable Travel:",
      "WhyChoosedescription": "Our buses are well-maintained and equipped with modern amenities, ensuring a comfortable ride for all passengers. Features like comfortable seating, air conditioning, and entertainment systems enhance your travel experience."
    },
    {
      "WhyChooseheading": "Strong Reputation:",
      "WhyChoosedescription": "With years of experience in the travel industry, Amruta Travels has built a solid reputation for providing reliable and efficient local bus rental services in Pune. Our customers trust us for our quality service and commitment."
    },
    {
      "WhyChooseheading": "On-Time Service:",
      "WhyChoosedescription": "Punctuality is our priority. We ensure that you reach your destination on time without any hassles. Our well-planned schedules and timely arrivals are designed to make your travel experience smooth and efficient."
    },
    {
      "WhyChooseheading": "Easy Booking Process:",
      "WhyChoosedescription": "Our user-friendly booking system makes renting a bus in Pune convenient and stress-free. With a few simple steps, you can secure your transportation and focus on enjoying your trip."
    },
    {
      "WhyChooseheading": "Focus on Customer Satisfaction:",
      "WhyChoosedescription": "We prioritize customer satisfaction and strive to offer the best service experience to ensure you choose us for your next trip. Our goal is to exceed your expectations and provide a memorable travel experience."
    }
  ]
};

const faqData = [
    {
        "question": "What types of buses are available for local rental in Pune?",
        "answer": "We offer a range of buses, including luxury, semi-luxury, and standard buses in various seating capacities (14, 17, 25, 32, 40, 45 seaters) to cater to different group sizes."
    },
    {
        "question": "How do I book a local bus for rent in Pune?",
        "answer": "You can easily book a bus by contacting us through our website, phone, or visiting our office. We’ll help you select the right bus based on your travel requirements."
    },
    {
        "question": "What is included in the rental package?",
        "answer": "Our rental packages include the bus, a professional driver, and fuel costs. Additional services like on-board amenities can be arranged on request."
    },
    {
        "question": "Is there a minimum rental duration for local bus services?",
        "answer": "Yes, we typically require a minimum of 4 hours for local bus rentals. However, we can customize packages based on your specific needs."
    },
    {
        "question": "Can I rent a bus for a one-day trip within Pune?",
        "answer": "Yes, we offer one-day trip packages for local sightseeing, events, corporate outings, or school trips."
    },
    {
        "question": "Are your drivers familiar with Pune's local routes?",
        "answer": "Yes, all our drivers have extensive experience and are very familiar with Pune's local routes and traffic conditions."
    },
    {
        "question": "Do you offer buses for corporate events and group outings?",
        "answer": "Yes, we provide buses for a wide range of events, including corporate outings, weddings, school trips, and family picnics."
    },
    {
        "question": "Are the buses equipped with air conditioning?",
        "answer": "Yes, we offer both AC and non-AC buses to ensure maximum comfort during your trip."
    },
    {
        "question": "How far in advance should I book a bus for local travel?",
        "answer": "We recommend booking your bus at least 1-2 days in advance to ensure availability, especially during peak travel times."
    },
    {
        "question": "Do you provide buses for last-minute bookings?",
        "answer": "Yes, we do accommodate last-minute bookings, subject to bus availability."
    }
  ];
  



  const testimonials = [
    {
        "name": "Ms. Anjali S",
        "text": "I recently rented a bus from Amruta Travels for a family event in Pune, and I couldn’t have been more satisfied! The bus was clean, comfortable, and arrived on time. The driver was professional and knew all the local routes, making the trip hassle-free. Amruta Travels offered great customer service and made the entire process smooth from start to finish. Highly recommend them for local bus rentals in Pune!"
    },
    {
        "name": "Mr. Rohit P",
        "text": "We hired a bus from Amruta Travels for a corporate outing, and the experience was fantastic. The bus was well-maintained and equipped with AC, making the journey comfortable for all of us. The staff was very accommodating, and the booking process was seamless. They provided excellent service at an affordable price. Amruta Travels is definitely our go-to for any future bus rentals in Pune!"
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
        heading: "Pune Local Bus on Rent  Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Pune Local Bus on Rent | 32, 35, 40, 45, 50 Seater Buses, Pune Darshan, Sinhagad, Jejuri, Bhimashankar</title>
  <meta name="description" content="Rent buses for local trips and Pune Darshan. Choose from 32, 35, 40, 45, and 50 Seater buses for trips to Sinhagad Fort, Jejuri, Ranjangaon Ganpati, and more. Affordable and comfortable bus rentals in Pune." />
  <meta name="keywords" content="Bus Rental in Pune, Bus Hire in Pune, 32 Seater Bus on Rent, 35 Seater Bus Hire in Pune, 40 Seater Bus on Rent, 45 Seater Bus Hire Pune, 50 Seater Bus on Rent in Pune, Pune Darshan Tempo Traveller on Rent, Pune to Sinhagad Fort Mini Bus on Rent, Pune to Jejuri Bus Hire, Pune to Ranjangaon Ganpati Bus Hire, Pune to Ketkawale Balaji Temple Bus on Rent, Pune to Narayanpur Tempo Traveller on Rent, Pune to Morachi Chincholi Bus on Rent, Pune Local Bus on Rent, Pimple Gurav Local Bus on Rent, Pune Local Bus Hire for Pune Darshan, Pune Local Bus on Rent for Local Trips" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent buses for local trips and Pune Darshan in Pune. We offer buses for trips to Sinhagad Fort, Jejuri, Ranjangaon Ganpati, Bhimashankar, and more. Choose from 32, 35, 40, 45, 50 Seater buses for your local tours.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-local-bus-on-rent",
        "logo": "https://amrutatravel.com/images/pune-local-bus-on-rent.jpg",
        "image": "https://amrutatravel.com/images/pune-local-bus-on-rent.jpg",
        "priceRange": "₹4000 - ₹15000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-local-bus-on-rent",
          "priceCurrency": "INR",
          "price": "4000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1100"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anita Deshmukh"
            },
            "datePublished": "2024-08-05",
            "reviewBody": "Booked a 40-seater bus for a Pune Darshan trip. The bus was comfortable, and the driver was very knowledgeable. Had a great experience!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajendra Patil"
            },
            "datePublished": "2024-07-20",
            "reviewBody": "We rented a 32-seater bus for a trip to Jejuri. The entire experience was smooth, and the bus was perfect for our group. Highly recommend."
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
          "serviceUrl": "https://amrutatravel.com/pune-local-bus-on-rent"
        },
        "keywords": "Bus Rental in Pune, Bus Hire in Pune, 32 Seater Bus on Rent, 35 Seater Bus Hire in Pune, 40 Seater Bus on Rent, 45 Seater Bus Hire Pune, 50 Seater Bus on Rent in Pune, Pune Darshan Tempo Traveller on Rent, Pune to Sinhagad Fort Mini Bus on Rent, Pune to Jejuri Bus Hire, Pune to Ranjangaon Ganpati Bus Hire, Pune to Ketkawale Balaji Temple Bus on Rent, Pune to Narayanpur Tempo Traveller on Rent, Pune to Morachi Chincholi Bus on Rent, Pune Local Bus on Rent, Pimple Gurav Local Bus on Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-37.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for “Pune Local Bus on Rent” at Amruta Travels:</h3>
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
export default PuneLocalBusOnRent;