
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel';
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function Tatawinger() {

  const cardData =
  {
    keyword: 'Tata Winger On Rent in Pune',
    heading: 'Amruta Travels: Tata Winger On Rent in Pune',
    headingDescription: 'Planning a group trip, family outing, or corporate event in Pune? Look no further than Amruta Travels for your Tata Winger rental needs. Our fleet of well-maintained Tata Wingers offers the perfect blend of comfort, reliability, and affordability for group travel in Pune. Whether you are going for a family getaway, a team excursion, or a special event, the Tata Winger provides an unmatched travel experience',
    topPlaces: [
      {
        "title": "1. Spacious Interior",
        "description": "The Tata Winger offers a spacious interior, comfortably seating up to 12-13 passengers. With ergonomic seating and ample legroom, your journey will be enjoyable and relaxed, whether you're traveling within Pune or going on a longer trip."
      },
      {
        "title": "2. Climate-Controlled Environment",
        "description": "Pune's weather can be unpredictable, but the Tata Winger is equipped with advanced air-conditioning systems to ensure that the temperature inside remains comfortable, no matter the external weather. Enjoy a cool and pleasant ride throughout your journey."
      },
      {
        "title": "3. Modern Entertainment Systems",
        "description": "Make long journeys more enjoyable with the Tata Winger's modern entertainment systems. Equipped with **LED TVs**, **high-quality audio**, and **Bluetooth connectivity**, passengers can stay entertained throughout the trip, keeping everyone engaged and happy."
      },
      {
        "title": "4. Ample Luggage Space",
        "description": "With Tata Winger, you don't have to worry about luggage space. The vehicle offers ample storage compartments, making it easy to store personal belongings, large bags, and other travel essentials securely, ensuring a clutter-free interior."
      },
      {
        "title": "5. Professional and Experienced Drivers",
        "description": "Our professional drivers are experienced and well-versed with Pune's roads and traffic conditions. Their expertise ensures smooth navigation and timely arrivals, allowing you to focus on your journey without concerns about delays or road challenges."
      },
      {
        "title": "6. Well-Maintained Vehicles",
        "description": "We take pride in maintaining our Tata Winger fleet to the highest standards. Each vehicle undergoes regular servicing and thorough inspections, ensuring that it’s in optimal condition. We prioritize cleanliness and hygiene, offering you a comfortable and pleasant ride."
      },
      {
        "title": "7. Flexible Rental Options",
        "description": "At **Amruta Travels**, we offer flexible rental options for the Tata Winger, whether you need the vehicle for a few hours, a full day, or longer. We can tailor the rental to meet your specific needs, making it a versatile solution for any trip within Pune or outstation travel."
      },
      {
        "title": "8. Competitive and Transparent Pricing",
        "description": "Our Tata Winger rental services offer competitive and transparent pricing with no hidden charges. You get the best value for your money, with clear pricing that allows you to budget your trip without any surprises."
      },
      {
        "title": "9. Exceptional Customer Service",
        "description": "From the moment you book your Tata Winger rental to the end of your journey, our dedicated customer service team is here to ensure everything runs smoothly. We're available to assist with any inquiries and ensure a hassle-free and enjoyable travel experience."
      }
    ],
    services: [
      {
        "name": "Tata Winger on Rent in Hadapsar, Pune",
        "description": "Perfect for Local Events and Group Outings. Whether you're organizing a family gathering or a local event, renting a Tata Winger in Hadapsar ensures convenience and comfort. With spacious seating and modern amenities, it’s ideal for smooth and comfortable group travel."
      },
      {
        "name": "Tata Winger on Rent in Wanowrie, Pune",
        "description": "Travel in Comfort and Style. Renting a Tata Winger in Wanowrie is the best choice for a comfortable and stylish journey. Equipped with air-conditioning and comfortable seating, it's perfect for both short and long trips around the city and beyond."
      },
      {
        "name": "Top Tata Winger on Rent in Kothrud, Pune",
        "description": "Ideal for Family Outings and Corporate Trips. Our well-maintained Tata Winger rentals in Kothrud provide ample space and advanced features, making them perfect for family outings, corporate events, and group travel. Enjoy comfort and reliability during your journey."
      },
      {
        "name": "Tata Winger on Rent in Kharadi, Pune",
        "description": "Convenient Travel for Business and Leisure. Rent a Tata Winger in Kharadi for easy travel to meetings, events, or leisure activities. With ample space and modern amenities, your journey will be comfortable and hassle-free."
      },
      {
        "name": "Tata Winger on Rent in Kalyani Nagar, Pune",
        "description": "For Corporate and Social Gatherings. Whether for corporate functions or social gatherings, our Tata Winger rentals in Kalyani Nagar offer reliable and comfortable transportation. Enjoy your event with a smooth and comfortable ride."
      },
      {
        "name": "Tata Winger on Rent in Shivaji Nagar, Pune",
        "description": "Reliable Transportation for All Occasions. Whether it’s a family event, group outing, or corporate meeting, our Tata Winger rentals in Shivaji Nagar provide the reliability and comfort you need. Choose from our fleet for the ideal travel experience."
      },
      {
        "name": "Best Tata Winger on Rent in Baner, Pune",
        "description": "Experience Premium Comfort and Amenities. Rent a Tata Winger in Baner and enjoy top-notch comfort with spacious seating, air-conditioning, and modern entertainment systems. Perfect for all occasions, from group outings to corporate events."
      },
      {
        "name": "Tata Winger on Rent for Corporate Events in Pune",
        "description": "Efficient and Professional Travel. For corporate events, the Tata Winger offers a professional and comfortable solution. With ample space and modern features, it’s ideal for transporting teams and clients efficiently and in style."
      },
      {
        "name": "Tata Winger on Rent for Wedding Party in Pimpri Chinchwad",
        "description": "Celebrate Your Special Day in Comfort. Make your wedding celebrations unforgettable with a Tata Winger rental in Pimpri Chinchwad. Provide your guests with a comfortable and stylish ride to and from the venue."
      },
      {
        "name": "Tata Winger on Rent in Pune for Outstation Trips",
        "description": "Comfortable Travel for Long Journeys. For long-distance travel, rent a Tata Winger in Pune and enjoy a smooth and comfortable journey. Perfect for outstation trips, our vehicles come with ample space and modern amenities to ensure a pleasant ride."
      },
      {
        "name": "Pune to Shirdi Tata Winger on Rent",
        "description": "Spiritual Journeys in Comfort. Travel to **Shirdi** from Pune in a Tata Winger, designed to offer a comfortable and relaxing ride. Perfect for pilgrimages, our vehicles ensure a smooth and peaceful journey for all passengers."
      },
      {
        "name": "Tata Winger on Rent in Pune for Family Trips",
        "description": "Comfortable and Spacious for Family Outings. Rent a Tata Winger in Pune for your family trips and reunions. Offering ample space and comfort, it’s the ideal vehicle for a fun and hassle-free family vacation."
      },
      {
        "name": "Tata Winger on Rent in Pune with Driver",
        "description": "Stress-Free Travel with Professional Drivers. Opt for a Tata Winger rental in Pune with a professional driver and enjoy a relaxed journey. Let us handle the driving, while you focus on enjoying your trip with friends or family."
      },
      {
        "name": "Tata Winger on Rent in Pune Contact Number",
        "description": "For prompt and reliable service, contact **Amruta Travels** at +91-8421333435 for Tata Winger rentals in Pune. Our team ensures a smooth and enjoyable ride, tailored to meet your travel needs."
      }
    ],
    tableData: [
      ['-Tata Winger from Pune to Mahabaleshwar', '-Pune to Mahabaleshwar Tata Winger Hire'],
      ['-Pune to Panchgani Tata Winger', '-Tata Winger for Rent in Pune'],
      ['-12-Seater Tata Winger for Mahabaleshwar Trip', '-12-Seater Tata Winger for Mahabaleshwar Tour Package'],
      ['-Pune Airport to Mahabaleshwar Tata Winger on Rent', '-Pune to Tapola Tata Winger on Rent'],
      ['-Tata Winger for Maharashtra Trip', '-Tata Winger on Rent for Mahabaleshwar Outings'],
      ['-Mini Bus on Rent for Mahabaleshwar Trip', '-Tata Winger on Rent in Pune Rate Per Km']
    ],
    "whychoose": [
      {
        "WhyChooseheading": "Why Choose Amruta Travels for Tata Winger on Rent in Pune?",
        "WhyChoosedescription": "When it comes to comfortable and reliable group travel in Pune, Amruta Travels is your trusted partner for **Tata Winger rentals**. Whether you're planning a family outing, corporate event, or group trip, our **Tata Winger on rent** ensures a smooth, comfortable, and hassle-free journey. Here's why Amruta Travels is the best choice for your travel needs:"
      },
      {
        "WhyChooseheading": "Dependable Service:",
        "WhyChoosedescription": "At Amruta Travels, we pride ourselves on offering reliable and punctual services for your Tata Winger rental. No matter where you need to go in Pune or beyond, you can rely on us to be on time and provide a seamless travel experience."
      },
      {
        "WhyChooseheading": "Comfortable and Spacious Rides:",
        "WhyChoosedcription": "Our Tata Winger vehicles are designed for comfort. With spacious seating, ample legroom, and modern amenities, our rentals guarantee a relaxed journey for you and your group, whether it's a short city trip or a longer outing."
      },
      {
        "WhyChooseheading": "Professional Drivers:",
        "WhyChoosedescription": "Our skilled and experienced drivers ensure your safety and comfort throughout the trip. Familiar with Pune's routes, they guarantee smooth, safe, and timely travel, so you can sit back and enjoy the ride."
      },
      {
        "WhyChooseheading": "Competitive and Transparent Pricing:",
        "WhyChoosedescription": "We offer **Tata Winger rentals** at competitive prices with no hidden charges. Our transparent pricing ensures that you know exactly what you're paying for, making it easier to plan your travel budget."
      },
      {
        "WhyChooseheading": "Flexible Booking Options:",
        "WhyChoosedescription": "At Amruta Travels, we understand that every trip is unique. Whether you need a Tata Winger for a few hours, a day, or a longer duration, our flexible booking options allow you to customize your rental based on your schedule and requirements."
      },
      {
        "WhyChooseheading": "24/7 Customer Support:",
        "WhyChoosedescription": "Our dedicated customer support team is available 24/7 to assist with any inquiries, bookings, or concerns. We're here to make sure your Tata Winger rental experience is smooth and hassle-free from start to finish."
      },
      {
        "WhyChooseheading": "Clean and Well-Maintained Vehicles:",
        "WhyChoosedescription": "We maintain our Tata Winger fleet to the highest standards of cleanliness and safety. Regular inspections and hygiene checks ensure that you travel in a vehicle that is not only comfortable but also safe and well-maintained."
      }
    ]

  };



  const faqData = [
    {
      question: "How can I book a Tata Winger from Pune?",
      answer: "You can easily book a Tata Winger by calling us at +91 8421333435 or through our website. Our team will guide you through the booking process for a hassle-free experience."
    },
    {
      question: "What types of Tata Wingers are available for rent in Pune?",
      answer: "We offer a variety of Tata Winger models, including 12-seater and 7-seater options, designed to meet your group size and comfort needs for both short and long trips."
    },
    {
      question: "Are there any additional charges for the Tata Winger service?",
      answer: "Our pricing is clear and transparent, with no hidden fees. Any additional charges, such as for extra stops or extended distance, will be communicated to you upfront."
    },
    {
      question: "How do I know if the Tata Winger is well-maintained?",
      answer: "All our Tata Winger vehicles undergo regular servicing and thorough inspections to ensure they are in excellent condition. We prioritize both cleanliness and safety for a comfortable journey."
    },
    {
      question: "Can I choose the driver for my Tata Winger trip?",
      answer: "While we assign experienced and professional drivers to ensure your safety and comfort, you can specify any preferences during the booking process, and we'll do our best to accommodate them."
    },
    {
      question: "What if I need to change my booking for the Tata Winger?",
      answer: "If you need to make any changes to your booking, simply contact our customer support team. We'll assist you in rescheduling or adjusting your booking based on availability."
    },
    {
      question: "Is there a minimum rental period for the Tata Winger service?",
      answer: "We offer flexible rental periods to suit your needs, whether you're renting the Tata Winger for a few hours, a day, or longer trips."
    },
    {
      question: "What amenities are included in the Tata Winger service?",
      answer: "Our Tata Winger vehicles come with modern amenities like air conditioning, comfortable seating, ample legroom, and, depending on the model, entertainment options like LED screens and audio systems."
    },
    {
      question: "What is the cancellation policy for the Tata Winger service?",
      answer: "Our cancellation policy may vary based on the booking terms. Please contact us for details on cancellation fees and conditions applicable to your Tata Winger booking."
    },
    {
      question: "How can I contact Amruta Travels for support during my Tata Winger trip?",
      answer: "You can reach our customer support team at +91 8421333435 for any assistance during your Tata Winger journey. We are available 24/7 to ensure you have a smooth and enjoyable experience."
    }
  ];



  const testimonials = [
    {
      name: "Miss Priya Deshmukh",
      text: "I recently rented a Tata Winger from Amruta Travels for our family trip to Lonavala, and it was an amazing experience. The vehicle was clean, comfortable, and spacious. The driver was very professional, making the journey smooth and enjoyable. I highly recommend Amruta Travels for anyone looking for a reliable and comfortable ride!"
    },
    {
      name: "Mr. Ramesh Kulkarni",
      text: "We hired a Tata Winger for our team outing to Khandala, and I must say, Amruta Travels exceeded our expectations. The Winger was perfect for our group, offering both comfort and ample space. The booking process was hassle-free, and the driver was friendly and knowledgeable. We’ll definitely be booking with Amruta Travels for future trips."
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
    heading: " Tata Winger On Rent in Pune Contact Number",
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
      text: "17 Seater Tata Winger On Rent in Pune",
    },
  ];


  const tataWingerSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Amruta Travels",
    "description": "Rent Tata Winger in Pune for outstation trips, darshan, local tours, and more. Choose from 7 to 12-seater Tata Winger at affordable rates. Book your Winger rental now for your next trip in Pune.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "telephone": "+91-8421333435",
    "url": "https://amrutatravel.com/Tata-Winger-On-Rent-in-Pune",
    "logo": "https://amrutatravel.com/img/250x100-06.png",
    "image": [
      "https://amrutatravel.com/img/winger1.jpg",
      "https://amrutatravel.com/img/winger2.jpg",
      "https://amrutatravel.com/img/winger3.jpg"
    ],
    "priceRange": "₹2000 - ₹6000",
    "offers": {
      "@type": "Offer",
      "url": "https://amrutatravel.com/Tata-Winger-On-Rent-in-Pune",
      "priceCurrency": "INR",
      "price": 2000,
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.7,
      "reviewCount": 4500
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "datePublished": "2024-09-12",
        "reviewBody": "Booked the Tata Winger for a trip to Alibaug. The vehicle was clean, spacious, and comfortable. Great experience, highly recommended!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Snehal Joshi"
        },
        "datePublished": "2024-07-25",
        "reviewBody": "We rented a Tata Winger for a family trip to Shirdi. It was affordable and perfect for our group size. Comfortable and well-maintained.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4
        }
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
      "serviceUrl": "https://amrutatravel.com/Tata-Winger-On-Rent-in-Pune"
    },
    "keywords": "Tata Winger on Rent in Pune, 7 Seater Tata Winger Rental, 12 Seater Tata Winger Hire Pune, Winger on Rent Pune for Outstation, Pune to Alibaug Tata Winger, Pune to Lonavala Tata Winger, Pune to Shirdi Tata Winger Hire, Tata Winger Bus Rental Pimpri Chinchwad, Tata Winger Hire Kothrud"
  };
  

  
  

  return (
    <div>
      <GoogleAnalytics />
     

      <Helmet>
      <title>Tata Winger On Rent in Pune ₹25 Per Km</title>
      <meta name="description" content="Rent Tata Winger in Pune for outstation trips, darshan, local tours, and more. Choose from 7 to 12-seater Tata Winger at affordable rates. Book your Winger rental now!" />
      <link rel="canonical" href="https://amrutatravel.com/Tata-Winger-On-Rent-in-Pune" />
      
      <script type="application/ld+json">
        {JSON.stringify(tataWingerSchema)}
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
              {/* <img src='\img\Keyword Based Image\1.jpg' alt='img' /> */}
              <img src='/img/tata-winger3.jpeg' alt='img' />
              <img src='/img/tata-winger.jpeg' alt='img' />
              <img src='/img/tata-winger2.jpeg' alt='img' />
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
                <h3 className='Colo'>FAQs About Pune to Mahabaleshwar Tempo Traveller for Amruta Travels</h3>
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
                            SSKTravels24:<br />
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
export default Tatawinger;