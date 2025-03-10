
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneShirdi(){

  const cardData = 
    {
      keyword: 'Pune to Shirdi Tempo Traveller',
      heading: 'Amruta Travels: Pune to Shirdi Tempo Traveller',

      headingDescription: 'Shirdi, a small town in Maharashtra, is renowned for its spiritual significance and serene ambiance. It is celebrated as the abode of Sai Baba, a revered saint whose teachings of love, compassion, and selflessness continue to inspire millions. Each year, countless devotees and travelers make their way to Shirdi, seeking spiritual solace and a deeper connection with their faith.',

      top:"Top Places to Visit in Shirdi with Amruta Travel:",

     topPlaces : [
    {
        "title": "1. Sai Baba Samadhi Mandir",
        "description": "The Sai Baba Samadhi Mandir is the central hub of Shirdi’s spiritual atmosphere. It houses the samadhi (tomb) of Sai Baba, where thousands gather to seek his blessings. The temple’s serene environment and the sacredness of Sai Baba’s resting place make it a spiritual focal point."
    },
    {
        "title": "2. Dwarkamai",
        "description": "Dwarkamai is the historic mosque where Sai Baba spent much of his time. It is a site of deep religious significance, housing the sacred 'Dhuni' (eternal fire) that Sai Baba tended to throughout his life. The mosque stands as a symbol of his teachings and miracles."
    },
    {
        "title": "3. Shirdi Sai Baba Museum",
        "description": "The Shirdi Sai Baba Museum offers a comprehensive look at the life of Sai Baba. It showcases personal belongings, photographs, and artifacts related to the saint, providing insights into his life and the miracles he performed."
    },
    {
        "title": "4. Chavadi",
        "description": "Chavadi is a significant site where Sai Baba would sleep every alternate night. Visitors can observe relics and photographs that honor Sai Baba’s presence and reflect on his teachings. It’s a place of quiet reflection and devotion."
    },
    {
        "title": "5. Sai Teerth Theme Park",
        "description": "For an engaging family experience, Sai Teerth Theme Park combines spirituality with entertainment. It features interactive exhibits and 3D shows that bring Sai Baba’s teachings to life, making it an enjoyable destination for visitors of all ages."
    },
    {
        "title": "6. Shani Shingnapur Temple",
        "description": "A short drive from Shirdi, the Shani Shingnapur Temple is dedicated to Lord Shani, the deity associated with the planet Saturn. This unique temple is renowned for its open-air sanctum and the belief in the deity’s immense power."
    },
    {
        "title": "7. Khandoba Temple",
        "description": "Khandoba Temple, dedicated to Lord Khandoba, a local deity, is another significant site in Shirdi. The temple is believed to be frequently visited by Sai Baba and offers a peaceful environment for devotees and visitors."
    },
    {
        "title": "8. Wet N Joy Water Park",
        "description": "For some relaxation and fun, Wet N Joy Water Park provides a refreshing break from the spiritual journey. The park features water rides, wave pools, and leisure zones, making it a great spot for families to unwind."
    },
    {
        "title": "9. Hanuman Mandir",
        "description": "Hanuman Mandir in Shirdi is dedicated to Lord Hanuman, known for his strength and devotion. The temple offers a tranquil space for prayer and reflection, enhancing the spiritual experience of visitors."
    },
    {
        "title": "10. Gurusthan",
        "description": "Gurusthan is a revered site where Sai Baba was first seen by his followers. It features a sacred neem tree and a memorial stone, marking the beginning of Sai Baba’s spiritual journey and offering a place of reverence and reflection."
    }
],
services : [
    {
        "name": "Pune to Shirdi Tempo Traveller on Rent:",
        "description": "When traveling from Pune to Shirdi, renting a Tempo Traveller from Amruta Travels ensures that you and your group travel comfortably. Our well-maintained vehicles come with modern amenities, making your journey both pleasant and efficient. Whether you're going for a spiritual visit or a family trip, our Tempo Travellers are designed to meet your needs."
    },
    {
        "name": "Pune Airport to Shirdi Tempo Traveller on Rent:",
        "description": "Arriving at Pune Airport and heading to Shirdi? Amruta Travels provides seamless transfers from Pune Airport to Shirdi with our Tempo Travellers. Our service ensures that you start your journey on a relaxed note without worrying about logistics. We offer convenient and punctual transportation, allowing you to focus on your trip."
    },
    {
        "name": "Pune to Shirdi Tempo Traveller AC 13 & 17 Seater:",
        "description": "For those seeking comfort and luxury, our AC Tempo Travellers with 13 and 17 seats are ideal for your trip from Pune to Shirdi. Equipped with powerful air conditioning, these vehicles ensure a cool and comfortable ride, regardless of the weather outside. Choose the seating capacity that suits your group size and enjoy a premium travel experience."
    },
    {
        "name": "Pune to Shirdi Mini Bus Rent:",
        "description": "If you prefer a larger vehicle for your trip, consider renting a mini bus from Pune to Shirdi. Our mini buses provide ample space and comfort for bigger groups, making them perfect for family outings, corporate trips, or religious tours. Enjoy the benefits of a spacious interior and comfortable seating on your journey."
    },
    {
        "name": "Bus Hire for Pune to Shirdi:",
        "description": "Amruta Travels offers flexible bus hire options for your journey from Pune to Shirdi. Whether you need a bus for a day trip or an extended stay, our services are tailored to accommodate your needs. With competitive pricing and a focus on customer satisfaction, we ensure a reliable and enjoyable travel experience."
    },
    {
        "name": "Pune to Shani Shingnapur Tempo Traveller:",
        "description": "Planning a visit to Shani Shingnapur from Pune? Our Tempo Travellers are an excellent choice for this pilgrimage journey. Equipped with modern amenities, our vehicles ensure a comfortable ride to this sacred destination, allowing you to travel in comfort and style."
    },
    {
        "name": "Pune to Shani Shingnapur Bus on Rent:",
        "description": "If you require a larger vehicle for your trip from Pune to Shani Shingnapur, consider our bus rental services. We offer spacious and well-maintained buses suitable for groups, ensuring a comfortable and efficient travel experience to this renowned pilgrimage site."
    },
    {
        "name": "Pune to Shirdi 14 Seater Bus on Rent:",
        "description": "For groups looking for a bus with a slightly larger capacity, our 14-seater buses are perfect for the trip from Pune to Shirdi. Offering a blend of space and comfort, these buses are ideal for family gatherings, group outings, or any event requiring group travel."
    },
    {
        "name": "Pune to Shirdi 17-Seater on Rent – Amruta Travels:",
        "description": "Looking for a comfortable and spacious travel option for your trip from Pune to Shirdi? Amruta Travels offers 17-seater Tempo Travellers that are perfect for group journeys. Our well-maintained vehicles come equipped with modern amenities to ensure a pleasant and hassle-free experience. Ideal for family trips, corporate events, or religious tours, our 17-seater Tempo Travellers provide ample space and comfort for all passengers."
    },
    {
        "name": "Pune to Ahmednagar Tempo Traveller on Rent:",
        "description": "Planning a trip from Pune to Ahmednagar? Choose Amruta Travels for reliable and comfortable Tempo Traveller rentals. Our vehicles are designed to offer a smooth and enjoyable journey, complete with essential amenities. Whether you're traveling for business, leisure, or any other purpose, our Tempo Travellers ensure a comfortable ride and timely arrival at your destination."
    },
    {
        "name": "Pune to Ajanta Ellora Tempo Traveller on Rent:",
        "description": "Discover the historic Ajanta and Ellora Caves with ease by renting a Tempo Traveller from Pune to Ajanta Ellora. Amruta Travels provides well-equipped Tempo Travellers that cater to your comfort and convenience. Enjoy a spacious and comfortable ride as you explore these UNESCO World Heritage Sites, with all the amenities you need for a pleasant journey."
    },
    {
        "name": "17-Seater Tempo Traveller on Rent in Pune:",
        "description": "If you need a 17-seater Tempo Traveller in Pune, Amruta Travels is your go-to choice. Our fleet includes modern and well-maintained 17-seater Tempo Travellers designed for group travel. Whether it's a local outing or an outstation trip, our vehicles offer ample space and comfort, making your travel experience enjoyable and stress-free."
    },
    {
        "name": "Pune to Shirdi Tempo Traveller Package:",
        "description": "Amruta Travels offers comprehensive packages for trips from Pune to Shirdi. Our Tempo Traveller packages include comfortable transportation, experienced drivers, and various amenities to enhance your travel experience. Choose from our tailored packages to suit your schedule and preferences, ensuring a seamless and memorable trip to Shirdi."
    },
    {
        "name": "Pune to Shani Shingnapur Tempo Traveller on Rent:",
        "description": "For a visit from Pune to Shani Shingnapur, Amruta Travels provides well-equipped Tempo Travellers that are perfect for pilgrimage journeys. Our vehicles are designed to offer comfort and convenience for your religious trip, with all the essential amenities to ensure a pleasant and smooth ride."
    }
],
tableData: [
    ['-Pune to Shirdi Tempo Traveller on Rent', '-Pune Airport to Shirdi Tempo Traveller on Rent'],
    ['-Pune to Shirdi Tempo Traveller AC 13 & 17 Seater', '-Pune to Shirdi Tempo Traveller on Rent'],
    ['-Pune to Shirdi Mini Bus Rent', '-Bus Hire for Pune to Shirdi'],
    ['-Pune Airport to Shirdi Tempo Traveller', '-Pune to Shani Shingnapur Tempo Traveller'],
    ['-Pune to Shani Shingnapur Bus on Rent', '-Pune Airport to Shirdi Tempo Traveller'],
    ['-Pune to Shirdi 14 Seater Bus on Rent', '-Pune to Shirdi 17 Seater on Rent'],
    ['-Pune to Ahmednagar Tempo Traveller on Rent', '-Pune to Ajanta Ellora Tempo Traveller on Rent'],
    ['-17-Seater Tempo Traveller on Rent in Pune', '-Pune to Shirdi Tempo Traveller Package'],
    ['-Pune to Shani Shingnapur Tempo Traveller on Rent', '']
],
whychoose: [
    {
        WhyChooseheading: 'Why Choose Amruta Travels for Pune to Shirdi Tempo Traveller?',
        WhyChoosedescription: "When it comes to renting a Tempo Traveller for your journey from Pune to Shirdi, Amruta Travels offers a premium experience that prioritizes comfort, safety, and customer satisfaction. Whether you're traveling for religious purposes, family events, or business, our services are designed to meet all your travel needs. Here's why Amruta Travels should be your top choice:",
    },
    {
        WhyChooseheading: 'Comfortable Vehicles:',
        WhyChoosedescription: "Our Tempo Travellers are designed with spacious interiors and plush seating to ensure a comfortable ride. Enjoy ample legroom and a relaxing journey whether you're traveling for business, family, or religious purposes.",
    },
    {
        WhyChooseheading: 'Well-Maintained Fleet:',
        WhyChoosedescription: "We take pride in our fleet of well-maintained vehicles. Regular servicing and thorough inspections ensure that each Tempo Traveller is in optimal condition, providing a smooth and trouble-free travel experience.",
    },
    {
        WhyChooseheading: 'Experienced Drivers:',
        WhyChoosedescription: "Our professional drivers are highly experienced and well-versed with the routes between Pune and Shirdi. They are committed to providing safe and efficient transportation, ensuring that you arrive at your destination on time.",
    },
    {
        WhyChooseheading: 'Modern Amenities:',
        WhyChoosedescription: "Our Tempo Travellers are equipped with modern amenities such as air conditioning, music systems, and comfortable seating. These features are designed to enhance your travel experience and make your journey as enjoyable as possible.",
    },
    {
        WhyChooseheading: 'Flexible Rental Options:',
        WhyChoosedescription: "We offer flexible rental packages to meet your specific needs. Whether you require a Tempo Traveller for a day trip, an extended journey, or a special event, we can customize our services to fit your schedule and budget.",
    },
    {
        WhyChooseheading: 'Competitive Pricing:',
        WhyChoosedescription: "At Amruta Travels, we offer competitive and transparent pricing with no hidden fees. Our rates are designed to provide great value for your money, ensuring you get the best possible service at a fair price.",
    },
    {
        WhyChooseheading: '24/7 Customer Support:',
        WhyChoosedescription: "Our dedicated customer support team is available around the clock to assist you with any questions or issues. From booking inquiries to on-road support, we are here to ensure a seamless and stress-free experience.",
    },
    {
        WhyChooseheading: 'Timely Service:',
        WhyChoosedescription: "Punctuality is a key aspect of our service. We ensure that our Tempo Travellers adhere to the agreed schedule, allowing you to plan your journey with confidence and peace of mind.",
    },
    {
        WhyChooseheading: 'Customizable Itineraries:',
        WhyChoosedescription: "We understand that each trip is unique. Our team can help you plan and customize your itinerary according to your preferences, ensuring that your journey from Pune to Shirdi meets all your needs.",
    },
    {
        WhyChooseheading: 'Positive Customer Feedback:',
        WhyChoosedescription: "Our satisfied customers frequently commend our excellent service and the quality of our vehicles. We are committed to maintaining high standards and continually improving our offerings based on customer feedback.",
    }
]


    };

    
    
    const faqData = [
        {
            question: "How can I book a Tempo Traveller for a trip from Pune to Shirdi?",
            answer: "You can book a Tempo Traveller by calling us at +91 8421333435 or by visiting our website. Our team will assist you with the booking process and provide all necessary details."
        },
        {
            question: "What is included in the rental package for a Pune to Shirdi trip?",
            answer: "Our rental package includes a well-maintained Tempo Traveller, a professional driver, and essential amenities such as air conditioning and music systems. Additional services or features can be added upon request."
        },
        {
            question: "Are there any hidden fees in the rental cost?",
            answer: "No, we offer transparent pricing with no hidden charges. Any additional costs, such as extra mileage or extended rental periods, will be clearly communicated before you finalize your booking."
        },
        {
            question: "Can I choose between an AC and non-AC Tempo Traveller?",
            answer: "Yes, we offer both AC and non-AC Tempo Travellers. You can specify your preference at the time of booking to ensure that you have the most comfortable travel experience."
        },
        {
            question: "What if I need to cancel or change my booking?",
            answer: "If you need to cancel or modify your booking, please contact our customer support team as soon as possible. We will guide you through the process and inform you of any applicable cancellation fees."
        },
        {
            question: "How are your Tempo Travellers maintained?",
            answer: "Our Tempo Travellers undergo regular maintenance and inspections to ensure they are in excellent condition. We prioritize safety and comfort to provide a reliable travel experience."
        },
        {
            question: "Can the Tempo Traveller be used for both local and outstation travel?",
            answer: "Yes, our Tempo Travellers are suitable for both local and outstation travel. We provide flexible rental options to accommodate different travel needs."
        },
        {
            question: "What amenities are available on the Tempo Traveller?",
            answer: "Our Tempo Travellers come equipped with air conditioning, comfortable seating, and music systems. Additional amenities can be requested based on your requirements."
        },
        {
            question: "How do you ensure the safety of passengers during the trip?",
            answer: "We ensure safety by employing experienced drivers and maintaining our vehicles to high standards. Our drivers are trained to handle various road conditions and prioritize passenger safety."
        },
        {
            question: "What should I do if I encounter any issues during the trip?",
            answer: "If you experience any issues during your trip, please contact our customer support team immediately. We are available to address any concerns and ensure a smooth travel experience."
        }
    ];
    
    const testimonials = [
        {
            name: "Miss Ananya Patel",
            text: "Our trip from Pune to Shirdi with Amruta Travels was absolutely fantastic! We rented a Tempo Traveller for our family pilgrimage, and it was a comfortable and pleasant journey from start to finish. The vehicle was clean, well-maintained, and equipped with air conditioning, which was a blessing during the long drive. Our driver was professional, courteous, and very knowledgeable about the route. He made sure we reached Shirdi on time and safely. I highly recommend Amruta Travels for anyone planning a trip to Shirdi. Their service truly exceeded our expectations!"
        },
        {
            name: "Mr. Rajesh Deshmukh",
            text: "I recently booked a Tempo Traveller with Amruta Travels for a group trip from Pune to Shirdi, and I couldn't be happier with their service. The booking process was straightforward, and the vehicle was exactly as described—spacious, comfortable, and air-conditioned. The driver was punctual and handled the road conditions expertly, making our journey smooth and enjoyable. The entire experience was stress-free, and the support from the Amruta team was excellent. I will definitely choose them for future trips and recommend them to others looking for reliable travel options."
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
        heading: "Pune to Shirdi Tempo Traveller Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travel | Pune to Shirdi Tempo Traveller | Hire Tempo Traveller for Shirdi, Shani Shingnapur, and More</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent a Tempo Traveller for Pune to Shirdi, Shani Shingnapur, and other nearby destinations. Available for 13, 14, and 17 Seater AC and Non-AC Tempo Travellers.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shivaji Nagar, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411005",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-shirdi-tempo-traveller",
        "logo": "https://amrutatravel.com/images/pune-to-shirdi-tempo-traveller.jpg",
        "image": "https://amrutatravel.com/images/pune-to-shirdi-tempo-traveller.jpg",
        "priceRange": "₹5000 - ₹15000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-shirdi-tempo-traveller",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "9000"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Kumar"
            },
            "datePublished": "2024-10-05",
            "reviewBody": "Comfortable and affordable trip to Shirdi, the driver was excellent and very professional."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sanya Shah"
            },
            "datePublished": "2024-09-20",
            "reviewBody": "Hired a 17-seater Tempo Traveller for a group trip to Shirdi. Spacious, clean, and well-maintained vehicle."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-shirdi-tempo-traveller"
        },
        "keywords": "Pune to Shirdi Tempo Traveller, Pune to Shirdi AC Tempo Traveller, Pune to Shirdi 13 & 17 Seater, Pune to Shirdi Bus Hire, Shirdi Tempo Traveller Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-07.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Pune to Shirdi Tempo Traveller with Amruta Travels:</h3>
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
export default PuneShirdi;