
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  MahabaleshwarUrbania(){

  const cardData = 
    {
      keyword: 'Pune to Mahabaleshwar Urbania On Rent',
      heading: ' Amruta Travels: Pune to Mahabaleshwar Urbania On Rent',

      headingDescription: 'When planning a trip from Pune to Mahabaleshwar, choosing the right transportation can significantly enhance your experience. At Amruta Travels, we offer luxurious Force Urbania buses on rent, providing you with comfort and convenience for your journey to this picturesque hill station. Mahabaleshwar, renowned for its stunning landscapes and pleasant climate, is a perfect destination for a refreshing getaway. Our Urbania buses ensure a smooth and enjoyable ride, making your travel experience as delightful as your destination.',

      top:"Top  Places to Visit in Mahabaleshwar with Amruta Travel:",

      topPlaces: [
        {
            "title": "Venna Lake",
            "description": "A popular spot for boating and picnics, Venna Lake offers serene views and a relaxing environment. Enjoy a boat ride or simply take in the beauty of the surrounding landscape."
        },
        {
            "title": "Pratapgad Fort",
            "description": "A historic fort that played a significant role in Maratha history, Pratapgad Fort provides panoramic views of the surrounding region and a glimpse into Maharashtra's rich heritage."
        },
        {
            "title": "Elephant's Head Point",
            "description": "Known for its unique rock formation resembling an elephant's head, this viewpoint offers breathtaking vistas of the Sahyadri mountain range and is perfect for photography enthusiasts."
        },
        {
            "title": "Arthur's Seat",
            "description": "Often referred to as the 'Queen of the Points,' Arthur's Seat offers spectacular views of the Konkan coast and the surrounding valleys. It is a great spot for nature lovers and adventure seekers."
        },
        {
            "title": "Mapro Garden",
            "description": "A popular attraction, Mapro Garden is known for its strawberry farms and delicious fruit-based products. Enjoy fresh strawberries, juices, and a variety of confectioneries."
        },
        {
            "title": "Lingmala Waterfall",
            "description": "This stunning waterfall is a must-visit for nature enthusiasts. The cascading water creates a picturesque setting, and the surrounding forest adds to the tranquil ambiance."
        },
        {
            "title": "Wilson Point",
            "description": "The highest point in Mahabaleshwar, Wilson Point offers panoramic views of the sunrise and the surrounding landscape. It is an ideal spot for early morning visits and capturing stunning photographs."
        },
        {
            "title": "Sunset Point",
            "description": "As the name suggests, Sunset Point is the perfect location to witness the mesmerizing sunset views over the hills. The scenic beauty and serene atmosphere make it a popular spot for visitors."
        },
        {
            "title": "Mahabaleshwar Temple",
            "description": "An ancient temple dedicated to Lord Shiva, the Mahabaleshwar Temple is a significant religious site and an architectural marvel with intricate carvings and historical significance."
        },
        {
            "title": "Bhilar Waterfall",
            "description": "A hidden gem, Bhilar Waterfall is known for its serene beauty and peaceful surroundings. It is a great spot for relaxation and enjoying the natural beauty of Mahabaleshwar."
        }
    ],
        
    "services": [
        {
            "name": "Pune to Mahabaleshwar Urbania On Rent:",
            "description": "When planning a trip from Pune to Mahabaleshwar, our Force Urbania rentals offer the perfect solution. Enjoy a luxurious and comfortable journey with our well-maintained buses, ensuring you reach Mahabaleshwar in style. Book our Urbania for a smooth, hassle-free trip to this picturesque hill station."
        },
        {
            "name": "Pune to Panchgani Urbania On Rent:",
            "description": "Explore the charming hill station of Panchgani with our Force Urbania on rent. Our spacious and comfortable Urbania buses are ideal for traveling from Pune to Panchgani, providing a luxurious experience while you enjoy the scenic beauty of the region."
        },
        {
            "name": "Pune to Mahabaleshwar Urbania On Rent Contact Number:",
            "description": "For booking a Force Urbania from Pune to Mahabaleshwar, contact us at [insert phone number]. Our team is ready to assist you with reservations and provide details on pricing and availability for your trip."
        },
        {
            "name": "Force Urbania Luxury Mini Bus on Rent in Pune:",
            "description": "Experience luxury travel with our Pune to Mahabaleshwar Urbania on Rent. Ideal for corporate events, family trips, and group outings, our Urbania buses offer a blend of comfort and style for all your transportation needs."
        },
        {
            "name": "Force Urbania 17 Seater for Rent:",
            "description": "Our 17-seater Force Urbania buses are perfect for medium-sized groups. Whether you need transportation for a corporate event, family gathering, or a local tour, our Urbania buses provide ample space and comfort for a pleasant journey."
        },
        {
            "name": "Pune to Tapola Urbania on Rent:",
            "description": "Travel from Pune to Tapola in comfort with our Force Urbania rentals. Known for its scenic beauty and tranquil environment, Tapola is best explored in our spacious and luxurious Urbania buses, ensuring a comfortable ride throughout your journey."
        },
        {
            "name": "Force Urbania on Rent in Pimpri Chinchwad:",
            "description": "For those in Pimpri Chinchwad, our Force Urbania buses are available for rent to various destinations. Whether you're planning a local outing or an outstation trip, our Urbania buses offer top-notch comfort and reliability."
        },
        {
            "name": "Force Urbania 17 Seater for Rent:",
            "description": "Our 17-seater Force Urbania buses are designed to cater to group travel needs. Equipped with luxurious amenities, these buses are ideal for groups looking for a comfortable and stylish travel experience."
        },
        {
            "name": "Pune to Kolhapur Force Urbania on Rent:",
            "description": "Travel from Pune to Kolhapur with our Force Urbania rentals. Our buses offer a comfortable and luxurious ride, making your journey to Kolhapur enjoyable and stress-free. Book our Urbania for a premium travel experience."
        },
        {
            "name": "Pune to Jyotiba Force Urbania on Rent:",
            "description": "Visit Jyotiba with ease using our Force Urbania on rent. Known for its religious significance, Jyotiba is best accessed with our comfortable Urbania buses, ensuring a smooth and enjoyable journey from Pune."
        },
        {
            "name": "Pune to Wai Satara Force Urbania on Rent:",
            "description": "Explore Wai and Satara with our Force Urbania rentals. Our luxurious Urbania buses provide a comfortable ride, making your trip to these scenic destinations enjoyable and relaxing."
        },
        {
            "name": "Pune to Kaas Plateau Pathar Force Urbania on Rent:",
            "description": "Discover the stunning beauty of Kaas Plateau Pathar with our Force Urbania on rent. Ideal for exploring the unique flora and landscapes, our Urbania buses offer a comfortable and stylish way to experience this natural wonder."
        },
        {
            "name": "Force Urbania Hire in Karve Nagar Kothrud:",
            "description": "For those in Karve Nagar and Kothrud, our Force Urbania buses are available for hire. Perfect for local events or travel needs, our Urbania rentals offer comfort and reliability for all your transportation requirements."
        },
        {
            "name": "Force Urbania Hire in Shivaji Nagar Pune:",
            "description": "Residents of Shivaji Nagar can book our Force Urbania buses for various travel needs. Our Urbania rentals provide a luxurious travel experience, whether you're planning a local trip or an outstation journey."
        },
        {
            "name": "Force Urbania Hire in Pune Railway Station:",
            "description": "Conveniently hire our Force Urbania buses from Pune Railway Station. Ideal for travelers arriving by train, our Urbania rentals offer a comfortable and stylish way to continue your journey or explore Pune and beyond."
        }
    ],   

"tableData": [
    ["- Tour Agencies in Pune", "- Bus Hire Agency in Pune"],
    ["- Travel Agents in Pune", "- Pune Tours and Travels Agents"],
    ["- Bus Hire Agents in Pune", "- Best Traveller Bus on Rent in Pune"],
    ["- Urbania Bus on Rent in Pune for Corporate Outing", "- Travel Agents in Pimpri Chinchwad"],
    ["- Pune Travel Agency Contact Number", "- Bus Hire for Events Agency"],
    ["- Bus Booking for Corporate Events", "- Bus on Hire for Pune to Mahabaleshwar Package Tour"],
    ["- Tour Operators in Pune", "- Bus Hire for Corporate Events & Tours"],
    ["- Tourist Agency in Pune", "- Best Tours and Travel Company in PCMC"],
    ["- Best Tours and Travel Company in Pune", "-"]
],
    
    
  "whychoose": [
    {
        "WhyChooseheading": "Why Choose Us: Pune to Mahabaleshwar Urbania On Rent – Amruta Travels",
        "WhyChoosedescription": ""
    },
    {
        "WhyChooseheading": "Exceptional Comfort:",
        "WhyChoosedescription": "Our Force Urbania buses are designed to offer superior comfort for long journeys. With spacious seating, ample legroom, and advanced climate control, your trip from Pune to Mahabaleshwar will be a relaxing experience."
    },
    {
        "WhyChooseheading": "Luxury on Wheels:",
        "WhyChoosedescription": "Travel in style with our premium Urbania buses. Equipped with modern amenities, including plush interiors, entertainment systems, and high-quality audio systems, your journey will be enjoyable and sophisticated."
    },
    {
        "WhyChooseheading": "Reliable Service:",
        "WhyChoosedescription": "At Amruta Travels, we pride ourselves on punctuality and reliability. Our Urbania buses are well-maintained and serviced regularly to ensure a smooth and trouble-free ride to Mahabaleshwar."
    },
    {
        "WhyChooseheading": "Experienced Drivers:",
        "WhyChoosedescription": "Our professional drivers are highly experienced and well-versed with the routes from Pune to Mahabaleshwar. They prioritize safety and are committed to providing a secure and pleasant travel experience."
    },
    {
        "WhyChooseheading": "Customizable Options:",
        "WhyChoosedescription": "We offer flexible rental options tailored to your specific needs. Whether you're planning a day trip, weekend getaway, or extended stay, we can customize our services to match your itinerary and budget."
    },
    {
        "WhyChooseheading": "Competitive Pricing:",
        "WhyChoosedescription": "Enjoy high-quality travel at affordable rates. Our transparent pricing structure ensures there are no hidden costs, giving you excellent value for your money."
    },
    {
        "WhyChooseheading": "Safety First:",
        "WhyChoosedescription": "Your safety is our top priority. Our Urbania buses are equipped with modern safety features, including GPS tracking, emergency exits, and first-aid kits, to ensure a secure journey."
    },
    {
        "WhyChooseheading": "Convenient Booking:",
        "WhyChoosedescription": "Booking your Urbania bus rental is simple and hassle-free. With our user-friendly reservation system, you can easily plan your trip and secure your vehicle with just a few clicks."
    },
    {
        "WhyChooseheading": "Local Expertise:",
        "WhyChoosedescription": "As a local travel agency, we understand the unique needs of travelers heading to Mahabaleshwar. Our team provides valuable insights and recommendations to enhance your trip."
    },
    {
        "WhyChooseheading": "Excellent Customer Support:",
        "WhyChoosedescription": "Our dedicated customer service team is available to assist you with any queries or concerns before, during, and after your trip, ensuring a seamless and enjoyable experience."
    }
]
  };

    
  const faqData = [
    {
        "question": "How do I book a Force Urbania for a trip from Pune to Mahabaleshwar?",
        "answer": "You can book our Force Urbania buses by contacting us directly at [insert phone number] or using our online booking system on our website. Our team will assist you with the reservation process and provide all the necessary details."
    },
    {
        "question": "What is the cost of renting a Force Urbania for a trip to Mahabaleshwar?",
        "answer": "The cost of renting a Force Urbania depends on various factors such as the rental duration, number of passengers, and additional services requested. Please contact us directly for a detailed quote."
    },
    {
        "question": "Are the Urbania buses equipped with amenities for long journeys?",
        "answer": "Yes, our Force Urbania buses are equipped with amenities for long journeys, including comfortable seating, climate control, entertainment systems, and ample luggage space."
    },
    {
        "question": "Can I customize my Urbania rental package for Mahabaleshwar?",
        "answer": "Absolutely! We offer customizable rental packages to suit your specific needs, whether for a day trip, weekend getaway, or extended rental. Contact us to customize your package."
    },
    {
        "question": "How experienced are the drivers for the Pune to Mahabaleshwar route?",
        "answer": "Our drivers are highly experienced and familiar with the Pune to Mahabaleshwar route. They prioritize safety and are committed to providing a smooth and pleasant journey."
    },
    {
        "question": "What safety features are included in the Force Urbania buses?",
        "answer": "Our Urbania buses are equipped with modern safety features, including GPS tracking, emergency exits, seat belts, fire extinguishers, and first-aid kits."
    },
    {
        "question": "Can I make changes to my booking after it has been confirmed?",
        "answer": "Yes, you can make changes to your booking based on availability and with prior notice. Contact us as soon as possible to discuss any changes."
    },
    {
        "question": "Is there a minimum rental duration for the Urbania buses?",
        "answer": "There may be a minimum rental duration depending on availability and the time of year. Please contact our customer service team for specific details."
    },
    {
        "question": "What should I do if I have special requests or requirements?",
        "answer": "If you have special requests or requirements, please inform us at the time of booking. We will do our best to accommodate your needs for a comfortable trip."
    },
    {
        "question": "How can I contact Amruta Travels for more information?",
        "answer": "For more information, contact us at [insert phone number] or visit our website. Our customer service team is available to assist with any questions or concerns."
    }
];


    
    
    
    
    
const testimonials = [
    {
        "name": "Miss Priya Desai",
        "text": "I recently booked a Force Urbania with Amruta Travels for a trip from Pune to Mahabaleshwar, and I couldn't be more satisfied. The bus was immaculate and extremely comfortable, making our long journey quite pleasant. The amenities provided, including the entertainment system and air conditioning, were top-notch. Our driver was very professional and knew the route well, ensuring a smooth and timely trip. The customer service team was also very helpful and accommodating. I highly recommend Amruta Travels for anyone looking to rent a luxury vehicle for a trip."
    },
    {
        "name": "Mr. Rajesh Kumar",
        "text": "Our experience with Amruta Travels for our Pune to Mahabaleshwar trip was fantastic. The Force Urbania bus we rented was perfect for our group—spacious, clean, and equipped with all the comforts we needed. The journey was smooth, and the driver was courteous and professional. We were particularly impressed with the level of service provided by the team at Amruta Travels, from the booking process to the actual trip. They made our travel experience enjoyable and stress-free. I will definitely choose Amruta Travels for future trips and highly recommend their services."
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
        heading: " Pune to Mahabaleshwar Urbania On Rent Contact Number:",
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
  <title> Pune to Mahabaleshwar Urbania on Rent | Contact: +91 8421333435 | Amruta Travels | Luxury Force Urbania Mini Bus for 17 Seater Rent to Mahabaleshwar, Panchgani, Wai, and More</title>
  <meta name="description" content="Rent Force Urbania for a comfortable trip from Pune to Mahabaleshwar Urbania on Rent, Panchgani, Tapola, Kolhapur, and more. Hire 17 Seater Urbania for your group travel needs. Best services for family trips, group tours, and corporate outings." />
  <meta name="keywords" content="Pune to Mahabaleshwar Urbania on Rent, Pune to Panchgani Urbania on Rent, Pune to Mahabaleshwar Urbania on Rent Contact Number, Force Urbania Luxury Mini Bus on Rent in Pune, Force Urbania 17 Seater for Rent, Pune to Tapola Urbania on Rent, Force Urbania on Rent in Pimpri Chinchwad, Force Urbania 17 Seater for Rent, Pune to Kolhapur Force Urbania on Rent, Pune to Jyotiba Force Urbania on Rent, Pune to Wai Satara Force Urbania on Rent, Pune to Kaas Plateau Pathar Force Urbania on Rent, Force Urbania Hire in Karve Nagar Kothrud, Force Urbania Hire in Shivaji Nagar Pune, Force Urbania Hire in Pune Railway Station" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent Force Urbania Mini Bus for your trips from Pune to Mahabaleshwar, Panchgani, Kolhapur, Tapola, Jyotiba, and more. 17 Seater luxury buses available for family and corporate tours.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-mahabaleshwar-urbania-on-rent",
        "logo": "https://amrutatravel.com/images/pune-to-mahabaleshwar-urbania.jpg",
        "image": "https://amrutatravel.com/images/pune-to-mahabaleshwar-urbania.jpg",
        "priceRange": "₹3500 - ₹9000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-mahabaleshwar-urbania-on-rent",
          "priceCurrency": "INR",
          "price": "3500",
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
            "reviewBody": "We hired a 17-seater Force Urbania for a family trip to Mahabaleshwar. The ride was smooth and the bus was well-maintained."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Joshi"
            },
            "datePublished": "2024-08-22",
            "reviewBody": "Booked a 17-seater Force Urbania for a corporate outing to Mahabaleshwar. The experience was seamless, and the vehicle was perfect for our needs."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-mahabaleshwar-urbania-on-rent"
        },
        "keywords": "Pune to Mahabaleshwar Urbania on Rent, Pune to Panchgani Urbania on Rent, Pune to Mahabaleshwar Urbania on Rent Contact Number, Force Urbania Luxury Mini Bus on Rent in Pune, Force Urbania 17 Seater for Rent, Pune to Tapola Urbania on Rent, Force Urbania on Rent in Pimpri Chinchwad, Force Urbania 17 Seater for Rent, Pune to Kolhapur Force Urbania on Rent, Pune to Jyotiba Force Urbania on Rent, Pune to Wai Satara Force Urbania on Rent, Pune to Kaas Plateau Pathar Force Urbania on Rent, Force Urbania Hire in Karve Nagar Kothrud, Force Urbania Hire in Shivaji Nagar Pune, Force Urbania Hire in Pune Railway Station"
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
    {/* <img src='\img\Keyword Based Image\Keyword Based Image-44.jpg' alt='img'/> */}
    <img src='\img\amruta.jpeg' alt='img'/>
    <img src='\img\seat.jpeg' alt='img'/>
    <img src='\img\amru.png' alt='img'/>
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
export default MahabaleshwarUrbania;