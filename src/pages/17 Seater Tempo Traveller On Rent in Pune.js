
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Seatertempo(){

  const cardData = 
    {
      keyword: ' 17 seater Tempo Traveller on Rent ',
      heading: ' 17 Seater Tempo Traveller On Rent in Pune',

      headingDescription: 'For group travel in Pune, the 17-seater tempo traveller from Amruta Travels offers the perfect combination of comfort, convenience, and affordability. Whether you are planning a corporate trip, family outing, pilgrimage, or school excursion, our luxury tempo travellers ensure a hassle-free journey.',

      top:"Top Features of 17-seater Tempo Traveller on Rent:",
       topPlaces : [
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
      "name": "17 seater Tempo Traveller On Rent in Pune",
      "description": "Looking for a reliable 17 seater Tempo Traveller on rent in Pune? Amruta Travels offers top-notch rental services for group travel, corporate events, family outings, and more. We provide both AC and non-AC options to cater to your preferences and budget, ensuring a comfortable and affordable journey."
    },
    {
      "name": "17 seater Tempo Traveller Price in Pune",
      "description": "Our 17 seater Tempo Traveller pricing in Pune is competitive and transparent, with no hidden charges. Rates are based on rental duration and specific requirements. Contact us for a detailed quote tailored to your trip's needs and get the best deal on your next adventure."
    },
    {
      "name": "17 seater Tempo Traveller Rate Per Km in Pune",
      "description": "With our rate-per-kilometer pricing for a 17 seater Tempo Traveller, you only pay for the distance traveled. This flexible pricing is perfect for long-distance trips and outstation travel, allowing you to manage your budget efficiently without compromising comfort."
    },
    {
      "name": "17 seater AC Tempo Traveller On Rent in Pune",
      "description": "Experience luxury and comfort with our air-conditioned 17 seater Tempo Traveller on rent in Pune. Ideal for both short and long trips, our AC Tempo Travellers are designed to offer a smooth and refreshing travel experience in any weather."
    },
    {
      "name": "17 seater Non-AC Tempo Traveller On Rent in Pune",
      "description": "Looking for an economical travel solution? Choose our 17 seater non-AC Tempo Traveller on rent in Pune. This budget-friendly option offers ample space and comfort for group travel without compromising quality, making it ideal for all types of journeys."
    },
    {
      "name": "17 seater Tempo Traveller for Mahabaleshwar from Pune",
      "description": "Planning a trip to Mahabaleshwar? Rent a 17 seater Tempo Traveller from Pune to Mahabaleshwar for a comfortable and scenic journey. Enjoy the breathtaking views with experienced drivers ensuring a safe and relaxed trip."
    },
    {
      "name": "17 seater Tempo Traveller for Pune to Goa",
      "description": "Travel from Pune to Goa in style with our 17 seater Tempo Traveller. Perfect for family vacations or group trips, we offer modern amenities to ensure a smooth, enjoyable long-distance journey between Pune and Goa."
    },
    {
      "name": "17 seater Tempo Traveller Rentals in Pune",
      "description": "Looking for 17 seater Tempo Traveller rentals in Pune? Amruta Travels offers a variety of vehicles to suit your travel needs. Our well-maintained fleet guarantees a comfortable and memorable trip to any destination in and around Pune."
    },
    {
      "name": "17 seater Tempo Traveller from Pune to Nashik",
      "description": "Travel comfortably from Pune to Nashik with our 17 seater Tempo Traveller. Whether it's for leisure, a pilgrimage, or business, enjoy a safe and reliable journey with professional drivers."
    },
    {
      "name": "17 seater Tempo Traveller Pune to Mumbai Rent",
      "description": "Rent a 17 seater Tempo Traveller for your Pune to Mumbai journey. Our vehicles are equipped with modern amenities, ensuring a comfortable and hassle-free ride, whether for business trips, family outings, or group travel."
    },
    {
      "name": "17 seater Tempo Traveller On Rent in Hadapsar",
      "description": "Amruta Travels offers 17 seater Tempo Traveller rentals in Hadapsar for convenient and comfortable group travel within Pune or to nearby locations. Book with us for a smooth, hassle-free ride."
    },
    {
      "name": "17 seater Tempo Traveller On Rent in Pimpri Chinchwad",
      "description": "For residents of Pimpri Chinchwad, we provide 17 seater Tempo Traveller rentals for corporate events, family outings, and more. Enjoy a reliable and comfortable travel experience with our professionally maintained vehicles."
    },
    {
      "name": "17 seater Tempo Traveller Hire in Viman Nagar",
      "description": "Located in Viman Nagar? Amruta Travels offers top-quality 17 seater Tempo Traveller hire services for both local and outstation journeys, fully equipped with modern amenities to ensure a pleasant ride."
    },
    {
      "name": "Pune to Shirdi 17 seater Bus Booking",
      "description": "For those planning a pilgrimage to Shirdi, our 17 seater buses from Pune provide a spacious and comfortable travel option. Professional drivers ensure a safe, smooth, and enjoyable journey."
    },
    {
      "name": "17 seater Tempo Traveller On Rent in Pune Contact Number",
      "description": "For more information and bookings, call Amruta Travels at +91 8421333435. Book your 17 seater Tempo Traveller on rent in Pune today and experience hassle-free, comfortable travel!"
    }
]
,

      "tableData": [
        ["17 seater Bus on Rent in Pune", "17 seater tempo traveller on rent Pimpri Chinchwad"],
        ["Hire 17 seater Minibus for Picnic", "17 seater bus rental in Pune"],
        ["17 seater bus hire in Pune", "17 seater mini bus rental for Corporate"],
        ["17 seater tempo traveller per km rate in Pune", "17 seater Ac Bus Rental for Picnic"],
        ["17 seater Non Ac Bus on rent", "Pune to Goa 17 seater ac bus rental"],
        ["Pune to Mahabaleshwar 17 seater tempo Traveller", "Pune to shirdi 17 seater bus on rent"],
        ["Pune to Shirdi Tempo Traveller Hire", "Pune Airport to Lonavala Tempo Traveller on Rent"],
        ["Pune Airport to Shirdi Tempo Traveller on Rent", "17 seater tempo traveller rate per km in pune"],
        ["17 seater tempo traveller hire in pimpri chinchwad", ""]
      ],

  "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Your 17-seater Bus on Rent in Pune?"
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
          "name": "Miss Rahuli Pathak",
          "text": "We recently hired a 17-seater Tempo Traveller from Amruta Travels for a family trip from Pune to Mahabaleshwar, and the experience was fantastic. The vehicle was in pristine condition, with comfortable seating and excellent air conditioning that made the journey pleasant despite the warm weather. Our driver was punctual, professional, and ensured we had a smooth ride throughout. The whole process from booking to the trip was seamless. Amruta Travels exceeded our expectations with their top-notch service. Highly recommended for anyone needing a reliable travel option!"
        },
        {
          "name": "Mr. Vijay Patel",
          "text": "Amruta Travels provided us with a 17-seater Tempo Traveller for our corporate team outing, and it was the perfect choice. The bus was spacious, clean, and equipped with modern amenities, making our trip both comfortable and enjoyable. The driver was courteous and experienced, navigating the routes effortlessly. The booking process was straightforward, and the pricing was transparent with no hidden fees. We were very impressed with the level of service and will definitely use Amruta Travels for our future travel needs."
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
        heading: " Contact Us for 17-seater Bus on Rent in Pune: ",
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
          
          
          <Helmet>
  <title>17 seater Tempo Traveller on Rent in Pune ₹25 Per Km</title>
  <meta name="description" content="Book a 17 seater Tempo Traveller on Rent in Pune with Amruta Travels. Available for family trips, corporate events, and outstation journeys like Pune to Goa, Mahabaleshwar, Shirdi, and more. Contact us today for pricing." />
  <meta name="keywords" content="17 seater Tempo Traveller on Rent in Pune, Tempo Traveller Rentals in Pune, Pune to Goa Tempo Traveller, 17 seater Bus Rental, Corporate Tempo Traveller Hire, Family Picnic Tempo Traveller in Pune" />

  <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Amruta Travels",
              "description": "Rent a 17 seater Tempo Traveller on rent in Pune for Family, Picnic, Corporate Events, and Outstation Trips. Available for Pune to Goa, Mahabaleshwar, Shirdi, and more. Affordable pricing and excellent service.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shivaji Nagar, Pune",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411005",
                "addressCountry": "IN"
              },
              "telephone": "+91-8421333435",
              "url": "https://amrutatravel.com/17-seater-Tempo-Traveller-on-Rent",
              "logo": "https://amrutatravel.com/images/17-seater-tempo-traveller-pune.jpg",
              "image": "https://amrutatravel.com/images/17-seater-tempo-traveller-pune.jpg",
              "priceRange": "₹6000 - ₹18000",
              "offers": {
                "@type": "Offer",
                "url": "https://amrutatravel.com/17-seater-Tempo-Traveller-on-Rent",
                "priceCurrency": "INR",
                "price": "6000",
                "priceValidUntil": "2024-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "5648",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "John Doe"
                  },
                  "datePublished": "2024-10-01",
                  "reviewBody": "Excellent service, the vehicle was clean, and the driver was very professional. Highly recommend for family trips!"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Priya Patel"
                  },
                  "datePublished": "2024-09-25",
                  "reviewBody": "Great experience renting the 17-seater for a corporate trip. Comfortable and spacious vehicle."
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
                "serviceUrl": "https://amrutatravel.com/17-seater-tempo-traveller-on-rent-pune"
              },
              "keywords": "17 seater Tempo Traveller on Rent in Pune, Tempo Traveller Hire Pune, 17 seater Bus Rental Pune, Corporate Tempo Traveller Hire Pune, Family Picnic Tempo Traveller Pune"
            }
          `
        }}
      />

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
    <img src='\img\Keyword Based Image\Keyword Based Image-05.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Mini Bus On Rent in Pune with Amruta Travels:</h3>
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
export default Seatertempo;