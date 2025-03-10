
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Volvobushireinpune(){

  const cardData = 
    {
      keyword: 'Volvo Bus Hire in Pune',
      heading: 'Volvo Bus Hire in Pune ₹85 Per Km',
 
      headingDescription: 'When planning a trip, selecting the ideal transportation is essential to ensure a memorable journey. At Amruta Travels, we provide luxurious Volvo buses on rent, offering unmatched comfort and convenience for your travel to this serene hill station.',

      top:"Top Places to Visit in Mahabaleshwar with Amruta Travel:",

      topPlaces: [
        {
            "title": "Luxurious Seating",
            "description": "Spacious and ergonomically designed reclining seats with ample legroom for ultimate comfort during long journeys."
        },
        {
            "title": "Air-Conditioned Comfort",
            "description": "Fully air-conditioned buses with climate control to ensure a pleasant and relaxing environment, regardless of the weather."
        },
        {
            "title": "Smooth Ride Experience",
            "description": "Advanced suspension systems minimize vibrations and bumps, offering a smooth and seamless travel experience."
        },
        {
            "title": "Entertainment Systems",
            "description": "Equipped with modern entertainment options, including LCD screens and high-quality sound systems, to keep you entertained throughout the trip."
        },
        {
            "title": "Ample Storage Space",
            "description": "Large luggage compartments to accommodate all your travel bags and equipment with ease."
        },
        {
            "title": "Safety Features",
            "description": "Volvo buses come with ABS brakes, speed limiters, and fire extinguishers for a safe journey, alongside experienced and trained drivers."
        },
        {
            "title": "Onboard Wi-Fi Connectivity",
            "description": "Stay connected on the go with high-speed Wi-Fi, perfect for work or entertainment during your journey."
        },
        {
            "title": "Charging Ports",
            "description": "Individual charging points at each seat to keep your devices powered up throughout the trip."
        },
        {
            "title": "Hygienic Interiors",
            "description": "Clean and well-maintained buses with regular sanitization to ensure a hygienic environment for all passengers."
        },
        {
            "title": "Customizable Travel Packages",
            "description": "Flexible rental options tailored to your needs, whether it’s a day trip, a corporate outing, or a family vacation."
        }
    ],        
    services: [
        {
            "name": "Volvo Bus per km rate in Pune:",
            "description": "The per km rate for hiring a Volvo bus in Pune typically ranges from ₹40 to ₹70 depending on the bus model, amenities, and the duration of the rental."
        },
        {
            "name": "Volvo Bus on Rent in Pimpri Chinchwad:",
            "description": "Volvo buses are available for rent in Pimpri Chinchwad for both local and outstation travel. These buses offer comfort and luxury for groups and corporate events."
        },
        {
            "name": "Volvo Bus on Rent in Hadapsar:",
            "description": "Residents and businesses in Hadapsar can rent Volvo buses for various trips, from corporate outings to family events, ensuring a comfortable and stylish journey."
        },
        {
            "name": "Volvo Bus Hire Prices in Pune:",
            "description": "Volvo bus hire prices in Pune ₹80 per Km , ₹27000 per day depending on the distance, amenities, and duration of the rental."
        },
        {
            "name": "Volvo Bus Rent Price in Pune:",
            "description": "The rental price for a Volvo bus in Pune varies based on factors like distance and the type of bus, usually starting at ₹40,000 per day."
        },
        {
            "name": "Volvo Coach Bus Hire in Pune:",
            "description": "Volvo coach buses are available for hire in Pune, offering luxury and comfort for group tours, corporate events, and family outings."
        },
        {
            "name": "Volvo Bus Hire in Kharadi:",
            "description": "Kharadi residents and businesses can hire Volvo buses for various events, from corporate functions to tours, ensuring a comfortable travel experience."
        },
        {
            "name": "Volvo AC Bus per km rate in Pune:",
            "description": "The per km rate for a Volvo air-conditioned bus in Pune typically ranges from ₹40 to ₹70, offering an economical yet luxurious travel option."
        },
        {
            "name": "Hire Volvo Bus on Rent in Pune:",
            "description": "Hiring a Volvo bus in Pune offers a convenient and comfortable way to travel, whether for local events or long-distance trips."
        },
        {
            "name": "Volvo Bus for Outstation from Pune:",
            "description": "Volvo buses are available for outstation trips from Pune, perfect for long-distance travel to nearby cities like Goa, Mumbai, or Lonavala."
        },
        {
            "name": "Volvo Bus on Rent for Outstation:",
            "description": "For those traveling outstation, renting a Volvo bus ensures luxury, comfort, and ample space for groups, with competitive pricing."
        },
        {
            "name": "Volvo Bus for Wedding in Pune:",
            "description": "Rent a Volvo bus for weddings in Pune to transport guests in style and comfort. The bus offers premium amenities and ample space for large groups."
        },
        {
            "name": "Volvo Bus on Rent for Corporate Picnic:",
            "description": "Volvo buses are ideal for corporate picnics, providing a luxurious and comfortable experience for employees traveling to off-site events or team-building activities."
        },
        {
            "name": "Volvo Bus on Rent for Corporate Event in Pune:",
            "description": "Rent a Volvo bus for corporate events in Pune for a sophisticated and comfortable mode of transport, ensuring your team travels in style."
        },
        {
            "name": "Volvo Bus on Rent in Viman Nagar:",
            "description": "Volvo buses are available for rent in Viman Nagar, providing a reliable and luxurious option for local and outstation travel, corporate events, and more."
        },
        {
            "name": "Volvo Bus on Rent for Ashtavinayak Darshan:",
            "description": "For Ashtavinayak Darshan, renting a Volvo bus ensures a comfortable and enjoyable journey for large groups, making the religious trip a pleasant experience."
        },
        {
            "name": "Volvo Bus on Rent for Jyotirlinga Darshan:",
            "description": "Rent a Volvo bus for Jyotirlinga Darshan to experience a spiritual journey with comfort, as you travel to sacred locations in style."
        }
    ],       

    tableData: [
        ["- Volvo Bus per km rate in Pune", "- Volvo Bus on Rent in Pimpri Chinchwad"],
        ["- Volvo Bus on Rent in Hadapsar", "- Volvo Bus Hire Prices in Pune"],
        ["- Volvo Bus Rent Price in Pune", "- Volvo Coach Bus Hire in Pune"],
        ["- Volvo Bus Hire in Kharadi", "- Volvo AC Bus per km rate in Pune"],
        ["- Hire Volvo Bus on Rent in Pune", "- Volvo Bus for Outstation from Pune"],
        ["- Volvo Bus on Rent for Outstation", "- Volvo Bus for Wedding in Pune"],
        ["- Volvo Bus on Rent for Corporate Picnic", "- Volvo Bus on Rent for Corporate Event in Pune"],
        ["- Volvo Bus on Rent in Viman Nagar", "- Volvo Bus on Rent for Ashtavinayak Darshan"],
        ["- Volvo Bus on Rent for Jyotirlinga Darshan", "-"]
    ],        
    
    whychoose: [
        {
          "WhyChooseheading": "Why Choose Us: Volvo Bus Hire in Pune – Amruta Travels",
          "WhyChoosedescription": "At Amruta Travels, we offer premium Volvo buses for rent in Pune, ensuring your travels are comfortable, safe, and luxurious. Whether you're going for a corporate event, wedding, or outstation trip, our fleet of Volvo buses is the perfect choice for your needs."
        },
        {
          "WhyChooseheading": "Exceptional Comfort:",
          "WhyChoosedescription": "Our Volvo buses are designed to offer superior comfort for both short and long journeys. With spacious seating, ample legroom, and advanced climate control, your trip will be a relaxing experience."
        },
        {
          "WhyChooseheading": "Luxury on Wheels:",
          "WhyChoosedescription": "Travel in style with our premium Volvo buses. Equipped with modern amenities such as plush interiors, entertainment systems, Wi-Fi, and high-quality audio systems, your journey will be an enjoyable and sophisticated experience."
        },
        {
          "WhyChooseheading": "Reliable Service:",
          "WhyChoosedescription": "At Amruta Travels, we pride ourselves on punctuality and reliability. Our Volvo buses are regularly maintained, ensuring a smooth and trouble-free ride for both local and outstation trips."
        },
        {
          "WhyChooseheading": "Experienced Drivers:",
          "WhyChoosedescription": "Our drivers are experienced, professional, and well-versed with Pune's routes as well as outstation travel. They prioritize safety and provide a secure and pleasant travel experience."
        },
        {
          "WhyChooseheading": "Customizable Options:",
          "WhyChoosedescription": "We offer flexible rental options to meet your specific needs. Whether you're planning a corporate event, wedding, family trip, or an outstation journey, we can customize our services to fit your itinerary and budget."
        },
        {
          "WhyChooseheading": "Competitive Pricing:",
          "WhyChoosedescription": "Our Volvo bus hire services come at affordable and transparent rates. We provide you with excellent value for your money, with no hidden costs and clear pricing upfront."
        },
        {
          "WhyChooseheading": "Safety First:",
          "WhyChoosedescription": "Your safety is our top priority. Our Volvo buses are equipped with modern safety features such as GPS tracking, emergency exits, seat belts, fire extinguishers, and first-aid kits, ensuring a secure journey."
        },
        {
          "WhyChooseheading": "Convenient Booking:",
          "WhyChoosedescription": "Booking a Volvo bus with Amruta Travels is easy and hassle-free. Our online booking system and dedicated customer service ensure a smooth and convenient reservation process."
        },
        {
          "WhyChooseheading": "Local Expertise:",
          "WhyChoosedescription": "As a trusted local travel agency, we understand the unique needs of travelers in Pune. Our team provides valuable insights and recommendations to enhance your travel experience."
        },
        {
          "WhyChooseheading": "Excellent Customer Support:",
          "WhyChoosedescription": "Our customer service team is available to assist with any queries or concerns before, during, and after your trip. We're dedicated to ensuring a seamless and enjoyable experience for all our customers."
        }
      ]
    };
      const faqData = [
        {
          "question": "How do I book a Volvo bus with Amruta Travels?",
          "answer": "You can easily book a Volvo bus by contacting us at [insert phone number] or using our online booking system on our website. Our team will assist you with the reservation process and provide all the necessary details."
        },
        {
          "question": "What is the cost of renting a Volvo bus in Pune?",
          "answer": "The cost of renting a Volvo bus depends on factors like rental duration, number of passengers, and additional services. Please contact us directly for a detailed quote tailored to your specific needs."
        },
        {
          "question": "Are the Volvo buses equipped with amenities for long journeys?",
          "answer": "Yes, our Volvo buses are equipped with premium amenities including comfortable seating, air conditioning, entertainment systems, Wi-Fi, and ample luggage space, ensuring a pleasant and relaxing journey."
        },
        {
          "question": "Can I customize my Volvo rental package for a special event in Pune?",
          "answer": "Absolutely! We offer customizable rental packages for events like weddings, corporate events, and group trips. Just let us know your requirements, and we will tailor our services to match your needs."
        },
        {
          "question": "How experienced are the drivers for the Volvo buses?",
          "answer": "Our drivers are highly experienced, well-trained, and familiar with the routes within Pune and to nearby destinations. They are committed to your safety and providing a smooth travel experience."
        },
        {
          "question": "What safety features are included in the Volvo buses?",
          "answer": "Our Volvo buses are equipped with modern safety features such as GPS tracking, emergency exits, seat belts, fire extinguishers, and first-aid kits for a secure and safe journey."
        },
        {
          "question": "Can I make changes to my Volvo bus booking after it's confirmed?",
          "answer": "Yes, you can make changes to your booking based on availability and with prior notice. Contact us as soon as possible to discuss any changes or adjustments."
        },
        {
          "question": "Is there a minimum rental duration for the Volvo buses?",
          "answer": "Yes, depending on the availability and travel season, there may be a minimum rental duration. Please reach out to our customer service team for specific details regarding your booking."
        },
        {
          "question": "What should I do if I have special requests or requirements for my Volvo bus rental?",
          "answer": "If you have special requests, such as additional amenities or specific travel needs, please inform us at the time of booking. We will do our best to accommodate your needs and ensure a comfortable experience."
        },
        {
          "question": "How can I contact Amruta Travels for more information or to make a booking?",
          "answer": "For more information or to make a booking, contact us at [insert phone number] or visit our website. Our team is available to assist with any queries or concerns you may have."
        }
      ];

    
    
    
    
      const testimonials = [
        {
            "name": "Miss Sanjana Desai",
            "text": "I recently booked a Volvo bus with Amruta Travels for a trip from Pune to Mahabaleshwar, and I couldn't be more satisfied. The bus was immaculate and extremely comfortable, making our long journey quite pleasant. The amenities provided, including the entertainment system, air conditioning, and Wi-Fi, were excellent. Our driver was very professional and familiar with the route, ensuring a smooth and timely trip. The customer service team was also very helpful and accommodating. I highly recommend Amruta Travels for anyone looking to rent a luxury vehicle for a trip."
        },
        {
            "name": "Mr. Abhi Kumar",
            "text": "Our experience with Amruta Travels for our Pune to Mahabaleshwar trip was fantastic. The Volvo bus we rented was perfect for our group—spacious, clean, and equipped with all the comforts we needed. The journey was smooth, and the driver was courteous and professional. We were particularly impressed with the level of service provided by the team at Amruta Travels, from the booking process to the actual trip. They made our travel experience enjoyable and stress-free. I will definitely choose Amruta Travels for future trips and highly recommend their services."
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
        heading: " Volvo Bus Hire in Pune Contact Number:",
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
  <title>Volvo Bus Hire in Pune ₹85 Per Km</title>
  <meta 
    name="description" 
    content="Rent a Volvo Bus for a comfortable trip from Pune to Mahabaleshwar, Panchgani, Tapola, Kolhapur, and more. Volvo Bus Hire in Pune for your group travel needs. Best services for family trips, group tours, and corporate outings." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mahabaleshwar Volvo Bus on Rent, Pune to Panchgani Volvo Bus on Rent, Pune to Mahabaleshwar Volvo Bus on Rent Contact Number, Volvo Luxury Bus on Rent in Pune, Volvo Bus 17 Seater for Rent, Pune to Tapola Volvo Bus on Rent, Volvo Bus on Rent in Pimpri Chinchwad, Volvo Bus 17 Seater for Rent, Pune to Kolhapur Volvo Bus on Rent, Pune to Jyotiba Volvo Bus on Rent, Pune to Wai Satara Volvo Bus on Rent, Pune to Kaas Plateau Pathar Volvo Bus on Rent, Volvo Bus Hire in Karve Nagar Kothrud, Volvo Bus Hire in Shivaji Nagar Pune, Volvo Bus Hire in Pune Railway Station" 
  />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent a Volvo Bus for your trips from Pune to Mahabaleshwar, Panchgani, Kolhapur, Tapola, Jyotiba, and more. 17 Seater luxury buses available for family and corporate tours.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-mahabaleshwar-volvo-bus-on-rent",
        "logo": "https://amrutatravel.com/images/pune-to-mahabaleshwar-volvo.jpg",
        "image": [
          "https://amrutatravel.com/img/hell.png",
          "https://amrutatravel.com/img/hell2.png",
          "https://amrutatravel.com/img/hell3.jpg"
        ],
        "priceRange": "₹4500 - ₹12000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-mahabaleshwar-volvo-bus-on-rent",
          "priceCurrency": "INR",
          "price": 4500,
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1500"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sandeep Patil"
            },
            "datePublished": "2024-09-15",
            "reviewBody": "We hired a 17-seater Volvo bus for a family trip to Mahabaleshwar. The ride was smooth and the bus was well-maintained."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Joshi"
            },
            "datePublished": "2024-08-22",
            "reviewBody": "Booked a 17-seater Volvo bus for a corporate outing to Mahabaleshwar. The experience was seamless, and the vehicle was perfect for our needs."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-mahabaleshwar-volvo-bus-on-rent"
        },
        "keywords": "Pune to Mahabaleshwar Volvo Bus on Rent, Pune to Panchgani Volvo Bus on Rent, Pune to Mahabaleshwar Volvo Bus on Rent Contact Number, Volvo Luxury Bus on Rent in Pune, Volvo Bus 17 Seater for Rent, Pune to Tapola Volvo Bus on Rent, Volvo Bus on Rent in Pimpri Chinchwad, Volvo Bus 17 Seater for Rent, Pune to Kolhapur Volvo Bus on Rent, Pune to Jyotiba Volvo Bus on Rent, Pune to Wai Satara Volvo Bus on Rent, Pune to Kaas Plateau Pathar Volvo Bus on Rent, Volvo Bus Hire in Karve Nagar Kothrud, Volvo Bus Hire in Shivaji Nagar Pune, Volvo Bus Hire in Pune Railway Station"
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
    <img src='/img/Img for Our Fleet/Img for Our Fleet-12.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs: Travel Agents in Pune for Mini Bus Hire - Amruta Travels:</h3>
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
export default Volvobushireinpune;