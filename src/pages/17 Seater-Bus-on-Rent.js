
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel';
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function Seater17() {





  const cardData =
  {
    keyword: ' 17 Seater Bus on Rent in Pune ',
    heading: 'Amruta Travels: 17 Seater Bus on Rent in Pune ',

    headingDescription: 'When it comes to group travel in Pune, the 17-seater bus from Amruta Travels offers the perfect blend of comfort, convenience, and style. Whether you are planning a corporate event, family outing, or school trip, our 17-seater buses are designed to meet your needs with ease. Here’s why our 17-seater buses stand out and what you can expect from our rental service.',

    top: "Top  Features of 17-Seater Tempo Traveller on Rent:",
    topPlaces: [
      {
        "title": "1. Spacious Seating Arrangement:",
        "description": "Our 17-seater buses are designed with ample space to ensure all passengers can travel comfortably. The spacious seating arrangement provides generous legroom and headspace, making long journeys more enjoyable."
      },
      {
        "title": "2. Luxurious Interiors:",
        "description": "Enjoy the luxury of plush, reclining seats that offer exceptional comfort. Each seat is equipped with individual armrests and adjustable headrests, allowing passengers to relax and enjoy the ride."
      },
      {
        "title": "3. Advanced Air Conditioning:",
        "description": "Our buses come equipped with powerful air conditioning systems that keep the interior cool and pleasant, even during the hottest days in Pune. This ensures a comfortable travel experience regardless of external weather conditions."
      },
      {
        "title": "4. Modern Entertainment Systems:",
        "description": "To make your journey more enjoyable, our 17-seater buses feature state-of-the-art entertainment systems. Whether you want to listen to your favorite music or watch a movie, the onboard entertainment options are sure to enhance your travel experience."
      },
      {
        "title": "5. Ample Luggage Space:",
        "description": "Traveling with a lot of luggage? No problem! Our 17-seater buses are equipped with ample luggage compartments to securely store your bags and belongings, ensuring that the interior remains clutter-free and comfortable."
      },
      {
        "title": "6. Experienced and Professional Drivers:",
        "description": "Safety and reliability are paramount. Our experienced drivers are not only skilled but also well-acquainted with Pune’s routes and beyond. They prioritize your safety and comfort, ensuring a smooth and secure journey."
      },
      {
        "title": "7. Well-Maintained Vehicles:",
        "description": "Each bus in our fleet undergoes regular maintenance and inspection to meet the highest standards of cleanliness and performance. This commitment ensures that you travel in a reliable and well-maintained vehicle."
      },
      {
        "title": "8. Flexible Rental Options:",
        "description": "We offer flexible rental packages to suit your specific needs. Whether you need the bus for a few hours or several days, we provide customizable rental options to fit your schedule and budget."
      },
      {
        "title": "9. Competitive Pricing:",
        "description": "At Amruta Travels, we offer competitive rates for our 17-seater buses, ensuring you get great value for your money. Our transparent pricing structure means no hidden fees or unexpected costs."
      },
      {
        "title": "10. 24/7 Customer Support:",
        "description": "Our dedicated customer support team is available around the clock to assist you with any questions or issues. From booking inquiries to on-road support, we are here to ensure a smooth and hassle-free experience."
      }
    ],



    "services": [
      {
        "name": "17 Seater Tempo Traveller On Rent in Pune",
        "description": "Looking for a reliable and comfortable 17-seater Tempo Traveller on rent in Pune? Amruta Travels provides affordable and top-notch rental services for group travel, corporate events, family outings, and more. Our fleet includes both air-conditioned and non-air-conditioned options, perfectly suited for your needs and budget."
      },
      {
        "name": "Affordable 17 Seater Tempo Traveller Rental in Pune",
        "description": "Our pricing for renting a 17-seater Tempo Traveller in Pune is competitive, transparent, and offers clear rates with no hidden charges. Whether you're planning a short trip or long-distance journey, we offer cost-effective solutions based on your travel requirements."
      },
      {
        "name": "17 Seater Tempo Traveller Rental Rate Per Km in Pune",
        "description": "If you're looking for flexible pricing, we offer 17-seater Tempo Traveller rentals in Pune at a rate per kilometer. This is ideal for those managing their budget for outstation trips or long-distance travel, giving you only pay for the distance traveled."
      },
      {
        "name": "Air-Conditioned 17 Seater Tempo Traveller On Rent in Pune",
        "description": "Experience the luxury of traveling in an air-conditioned 17-seater Tempo Traveller. Our well-maintained AC vehicles are designed for comfort and convenience, making them perfect for long trips, family vacations, and corporate events across Pune."
      },
      {
        "name": "Non-AC 17 Seater Tempo Traveller On Rent in Pune",
        "description": "For budget-conscious travelers, we also offer non-AC 17-seater Tempo Travellers in Pune. These vehicles provide ample space and comfort for group travel, making them an affordable choice without compromising on quality."
      },
      {
        "name": "Pune to Mahabaleshwar 17 Seater Tempo Traveller Hire",
        "description": "Planning a trip from Pune to Mahabaleshwar? Hire our 17-seater Tempo Traveller for a comfortable, scenic journey. Enjoy a smooth ride with ample space for your group, and rely on our professional drivers for a hassle-free trip to Mahabaleshwar."
      },
      {
        "name": "Pune to Goa 17 Seater Tempo Traveller Rental",
        "description": "Travel from Pune to Goa in comfort with our 17-seater Tempo Traveller rental. Ideal for group trips, family vacations, or corporate outings, our vehicles come equipped with modern amenities to ensure a pleasant journey."
      },
      {
        "name": "17 Seater Tempo Traveller Rentals in Pune",
        "description": "Amruta Travels offers reliable 17-seater Tempo Traveller rentals in Pune for both local and outstation trips. Our fleet includes a variety of options, including AC and non-AC vehicles, providing the perfect ride for every journey."
      },
      {
        "name": "Pune to Nashik 17 Seater Tempo Traveller Rental",
        "description": "Heading from Pune to Nashik? Our 17-seater Tempo Traveller is the perfect choice for this route. Enjoy spacious seating and a smooth ride, whether you're traveling for business, leisure, or religious reasons."
      },
      {
        "name": "Pune to Mumbai 17 Seater Tempo Traveller Hire",
        "description": "For trips between Pune and Mumbai, our 17-seater Tempo Traveller rental is the ideal choice. With modern facilities, comfort, and experienced drivers, your travel between these two cities will be stress-free and enjoyable."
      },
      {
        "name": "17 Seater Tempo Traveller On Rent in Hadapsar",
        "description": "If you're located in Hadapsar, Amruta Travels offers 17-seater Tempo Traveller rentals for group travel, family trips, or corporate outings. Our vehicles are comfortable and affordable, providing a perfect option for your travel needs."
      },
      {
        "name": "17 Seater Tempo Traveller On Rent in Pimpri Chinchwad",
        "description": "Looking for a 17-seater Tempo Traveller on rent in Pimpri Chinchwad? Amruta Travels offers reliable, well-maintained Tempo Travellers for all your group travel needs, from local events to outstation journeys."
      },
      {
        "name": "17 Seater Tempo Traveller Hire in Viman Nagar",
        "description": "Amruta Travels provides premium 17-seater Tempo Traveller hire services in Viman Nagar, Pune. Whether it's a short trip or long-distance travel, our fleet offers comfort and convenience, making us the ideal choice for group outings and family vacations."
      },
      {
        "name": "Pune to Shirdi 17 Seater Bus Rental",
        "description": "Planning a trip from Pune to Shirdi? Our 17-seater buses offer a comfortable and spacious travel option for pilgrimage tours. With professional drivers and well-maintained vehicles, we ensure a smooth and safe trip to Shirdi."
      },
      {
        "name": "Contact for 17 Seater Tempo Traveller Rentals in Pune",
        "description": "For prompt and efficient 17-seater Tempo Traveller rentals in Pune, contact Amruta Travels at +91 8421333435. We offer competitive rates, professional drivers, and a fleet of well-maintained vehicles to meet your travel needs."
      }
    ],



    "tableData": [
      ["-17 Seater Bus on Rent in Pune", "-17 Seater Bus on Rent in Pune Price"],
      ["-17 Seater Bus Rate Per Km in Pune", "-17 Seater Bus on Rent in Pune"],
      ["-17 Seater AC Tempo Traveller On Rent in Pune", "-17 Seater Non-AC Tempo Traveller On Rent in Pune"],
      ["-17 Seater Tempo Traveller for Mahabaleshwar from Pune", "-17 Seater Tempo Traveller for Pune to Goa"],
      ["-17 Seater Tempo Traveller Pune to Nashik", "-17 Seater Tempo Traveller Pune to Mumbai Rent"],
      ["-17 Seater Tempo Traveller on Rent in Hadapsar", "-17 Seater Tempo Traveller on Rent in Pimpri Chinchwad"],
      ["-17 Seater Tempo Traveller Hire in Viman Nagar", "-Pune to Shirdi 17 Seater Bus Booking"]
    ],


    "whychoose": [
      {
        "WhyChooseheading": "Why Choose Amruta Travels for Your 17-Seater Bus on Rent in Pune?"
      },
      {
        "WhyChooseheading": "Spacious and Comfortable Vehicles:",
        "WhyChoosedescription": "Our 17-seater buses are designed to offer ample space and comfort for all passengers. With plush seating and generous legroom, your journey will be enjoyable whether it’s a short trip or long-distance travel."
      },
      {
        "WhyChooseheading": "Well-Maintained Fleet:",
        "WhyChoosedescription": "We ensure that our 17-seater buses are regularly serviced and maintained to the highest standards. This guarantees reliability and safety, providing you with a trouble-free travel experience."
      },
      {
        "WhyChooseheading": "Experienced and Professional Drivers:",
        "WhyChoosedescription": "Our drivers are not only experienced but also familiar with Pune’s routes and beyond. They are committed to ensuring a safe and smooth journey, making your travel experience stress-free."
      },
      {
        "WhyChooseheading": "Flexible Rental Options:",
        "WhyChoosedescription": "Amruta Travels offers flexible rental packages to suit various needs, whether it’s a day trip, corporate outing, or extended travel. We tailor our services to meet your specific requirements."
      },
      {
        "WhyChooseheading": "Competitive and Transparent Pricing:",
        "WhyChoosedescription": "We provide clear and upfront pricing with no hidden charges. Our rates are competitive, ensuring you get excellent value for your money without unexpected costs."
      },
      {
        "WhyChooseheading": "Customer-Centric Approach:",
        "WhyChoosedescription": "We prioritize customer satisfaction, providing personalized service to meet your unique travel needs. Our dedicated customer support team is available to assist with any inquiries or special requests."
      },
      {
        "WhyChooseheading": "Modern Amenities:",
        "WhyChoosedescription": "Our 17-seater buses come equipped with modern amenities such as air conditioning, music systems, and comfortable seating. We aim to enhance your travel experience with the latest features."
      },
      {
        "WhyChooseheading": "On-Time Service:",
        "WhyChoosedescription": "Punctuality is a key aspect of our service. We ensure that our buses arrive on time and adhere to the agreed schedule, allowing you to plan your journey with confidence."
      },
      {
        "WhyChooseheading": "Hassle-Free Booking Process:",
        "WhyChoosedescription": "Our booking process is simple and efficient. You can easily reserve a bus through our website or by contacting our customer support team, making the entire process smooth and convenient."
      },
      {
        "WhyChooseheading": "Comprehensive Coverage:",
        "WhyChoosedescription": "Whether you need a 17-seater bus for local travel within Pune or for outstation trips, Amruta Travels has you covered. We offer services for various destinations and occasions."
      }
    ]

  };



  const faqData = [
    {
      "question": "How can I book a 17-seater bus with Amruta Travels?",
      "answer": "You can book a 17-seater bus by calling us at +91 8421333435 or through our website. Our team will assist you with the booking process and provide all necessary information."
    },
    {
      "question": "What is included in the rental of a 17-seater bus?",
      "answer": "Our rental package includes a well-maintained 17-seater bus, an experienced driver, and modern amenities. Additional services or features can be requested and may incur extra charges."
    },
    {
      "question": "Are there any hidden fees in the rental cost?",
      "answer": "No, we provide transparent pricing with no hidden fees. Any additional costs, such as for extra mileage or extended rental periods, will be clearly communicated before you finalize your booking."
    },
    {
      "question": "Can I request a non-AC or AC bus?",
      "answer": "Yes, we offer both AC and non-AC options for our 17-seater buses. You can specify your preference at the time of booking to ensure your comfort during the trip."
    },
    {
      "question": "What if I need to cancel or change my booking?",
      "answer": "If you need to cancel or modify your booking, please contact our customer support team as soon as possible. We will guide you through the process and inform you of any applicable cancellation fees."
    },
    {
      "question": "How are your buses maintained?",
      "answer": "Our buses undergo regular inspections and maintenance to ensure they are in excellent condition. We prioritize safety and comfort, so you can travel with peace of mind."
    },
    {
      "question": "Can the bus be used for both local and outstation travel?",
      "answer": "Yes, our 17-seater buses are suitable for both local travel within Pune and outstation trips. We provide flexible rental options to accommodate different travel needs."
    },
    {
      "question": "What amenities are available on the bus?",
      "answer": "Our 17-seater buses come equipped with amenities such as air conditioning, comfortable seating, and music systems. Additional features can be requested based on your needs."
    },
    {
      "question": "How do you ensure the safety of passengers?",
      "answer": "We prioritize safety by employing experienced drivers and maintaining our buses to high standards. Additionally, our drivers are trained to handle various road conditions and ensure a safe journey."
    },
    {
      "question": "What should I do if I encounter any issues during the trip?",
      "answer": "If you experience any issues during your trip, please contact our customer support team immediately. We are available to address any concerns and ensure a smooth travel experience."
    }
  ];



  const testimonials = [
    {
      "name": "Miss Priya Deshmukh",
      "text": "We recently rented a 17-seater bus from Amruta Travels for our corporate team-building event, and I couldn’t be happier with the service we received. The booking process was seamless, and the bus arrived on time, impeccably clean, and ready for our journey. The spacious interior and comfortable seating made the trip enjoyable for everyone, and our driver was professional and friendly. Amruta Travels truly exceeded our expectations with their reliability and excellent customer service. We’ll definitely choose them again for our future corporate events."
    },
    {
      "name": "Mr. Ramesh Kulkarni",
      "text": "Our family needed a 17-seater bus for a trip from Pune to Mahabaleshwar, and Amruta Travels provided us with an outstanding vehicle. The bus was well-maintained, equipped with all the necessary amenities, and the air conditioning was a real bonus during the warm weather. The driver was courteous and made sure we had a smooth and pleasant ride. Thanks to Amruta Travels, our family vacation was comfortable and stress-free. I highly recommend their services to anyone looking for reliable and comfortable group travel options in Pune."
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
    heading: "17 Seater On Rent in Pune Contact Number: ",
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

  return (
    <div>
      <GoogleAnalytics />
      <Helmet>
  <title>17 Seater Tempo Traveller On Rent in Pune ₹25 Per Km</title>
  <meta name="description" content="Rent a 17-seater Tempo Traveller in Pune for outstation trips, local tours, family outings, and more. Enjoy spacious, comfortable rides with affordable rates. Book your 17-seater Tempo Traveller rental now!" />
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Amruta Travels",
      "description": "Rent a 17-seater Tempo Traveller in Pune for outstation trips, local tours, family outings, and more. Enjoy spacious, comfortable rides at affordable rates. Book your Tempo Traveller rental now for your next trip in Pune.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411041",
        "addressCountry": "IN"
      },
      "telephone": "+91-8421333435",
      "url": "https://amrutatravel.com/17-Seater-Bus-on-Rent-Pune",
      "logo": "https://amrutatravel.com/img/250x100-06.png",
      "image": [
        "https://amrutatravel.com/img/tempo1.jpg",
        "https://amrutatravel.com/img/tempo2.jpg",
        "https://amrutatravel.com/img/tempo3.jpg"
      ],
      "priceRange": "₹2500 - ₹7500",
      "offers": {
        "@type": "Offer",
        "url": "https://amrutatravel.com/17-Seater-Bus-on-Rent-Pune",
        "priceCurrency": "INR",
        "price": 2500,
        "priceValidUntil": "2024-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.7,
        "reviewCount": 5400
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ravi Sharma"
          },
          "datePublished": "2024-11-12",
          "reviewBody": "Booked a 17-seater Tempo Traveller for our family trip to Mahabaleshwar. It was spacious, clean, and comfortable. The driver was professional and courteous. Great experience!"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Neha Deshmukh"
          },
          "datePublished": "2024-09-07",
          "reviewBody": "We hired a 17-seater Tempo Traveller for our trip to Shirdi. It was the perfect size for our group. The vehicle was well-maintained and comfortable throughout the journey."
        }
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Pune",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.5204,
          "longitude": 73.8567
        }
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://amrutatravel.com/17-seater-tempo-traveller-rent-pune"
      },
      "keywords": "17 Seater Tempo Traveller On Rent in Pune, Tempo Traveller Rental Pune, Pune to Lonavala 17 Seater, Pune to Shirdi Tempo Traveller Hire, 17 Seater Tempo Traveller for Family, Pune Tempo Traveller Hire for Outstation, Tempo Traveller Rental Pimpri Chinchwad, Pune to Mahabaleshwar 17 Seater"
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
              <img src='\img\Keyword Based Image\Keyword Based Image-06.jpg' alt='img' />
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
                <h3 className='Colo'>FAQs About Renting a 17-Seater Bus in Pune with Amruta Travels:</h3>
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
            <FareCard />

          </div>
        </div>
      </section>



    </div>
  );
}
export default Seater17;