
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  SeaterRent(){

  const cardData = 
    {
      keyword: '20-Seater Bus on Rent in Pune',
      heading: 'Amruta Travels: 20-Seater Bus on Rent in Pune',

      headingDescription: 'When it comes to group travel in Pune, our 20-seater buses at Amruta Travels offer an exceptional blend of comfort, functionality, and reliability. Whether you are planning a corporate outing, a family event, or a school trip, our 20-seater buses are designed to provide a seamless travel experience. Discover why our 20-seater buses are a top choice and what features set them apart.',

      top:"Top  Features of 20-Seater Bus for Rent:",

       topPlaces : [
        {
            "title": "Spacious Seating Arrangement",
            "description": "Our 20-seater buses are designed with a spacious seating layout that ensures ample room for all passengers. With generous legroom and comfortable seating, everyone can enjoy a relaxed and comfortable journey, whether it's a short ride or a long-distance trip."
        },
        {
            "title": "Luxurious Interiors",
            "description": "Experience a touch of luxury with plush, reclining seats that come with adjustable headrests and armrests. The well-designed interiors enhance comfort and provide a high-quality travel experience, making every trip enjoyable."
        },
        {
            "title": "Advanced Air Conditioning",
            "description": "Stay cool and comfortable with our state-of-the-art air conditioning systems. Our 20-seater buses are equipped with efficient AC units that maintain a pleasant temperature inside the vehicle, regardless of the external weather conditions."
        },
        {
            "title": "Modern Entertainment Systems",
            "description": "To make your journey more enjoyable, our buses feature modern entertainment systems. Whether you prefer to listen to music or watch a movie, our onboard entertainment options are designed to keep passengers entertained throughout the ride."
        },
        {
            "title": "Ample Luggage Space",
            "description": "Traveling with luggage? No problem! Our 20-seater buses come with ample storage compartments for your bags and belongings, ensuring that the interior remains clutter-free and comfortable."
        },
        {
            "title": "Experienced and Professional Drivers",
            "description": "Safety and reliability are our top priorities. Our experienced drivers are well-trained and familiar with Pune's routes and beyond. They are committed to ensuring a safe and smooth journey for all passengers."
        },
        {
            "title": "Well-Maintained Vehicles",
            "description": "We take pride in maintaining our buses to the highest standards. Each vehicle undergoes regular inspections and maintenance to ensure it meets our rigorous cleanliness and performance standards."
        },
        {
            "title": "Flexible Rental Options",
            "description": "We offer customizable rental packages to suit your specific needs. Whether you require the bus for a few hours or several days, we provide flexible options that cater to your schedule and budget."
        },
        {
            "title": "Competitive Pricing",
            "description": "At Amruta Travels, we offer competitive rates for our 20-seater buses, ensuring that you receive excellent value for your money. Our transparent pricing structure means no hidden fees or unexpected costs."
        },
        {
            "title": "24/7 Customer Support",
            "description": "Our dedicated customer support team is available around the clock to assist with any queries or concerns. From booking inquiries to on-road support, we are here to ensure a hassle-free and pleasant experience for you."
        }
    ],    
     services : [
        {
            "name": "20 Seater Bus on Rent in Pune",
            "description": "Looking for a 20 Seater Luxury Bus On Rent Pune? Our 20-seater buses are ideal for group travel, offering ample space and comfort for a variety of occasions. Whether you're planning a family outing, a corporate event, or a group trip, our buses provide a reliable and comfortable transportation solution."
        },
        {
            "name": "20 Seater Bus Rental in Pune for Outstation",
            "description": "Planning an outstation trip with a group? Our 20 seater bus on rent service are perfect for journeys beyond Pune. With comfortable seating and modern amenities, our buses ensure a pleasant travel experience whether you're heading to distant destinations or exploring new places."
        },
        {
            "name": "20 Seater Bus Rental in Pimpri Chinchwad",
            "description": "In need of a 20-seater bus in Pimpri Chinchwad? We offer convenient and affordable bus rental services in this area. Our well-maintained 20-seater buses are designed to provide a comfortable and enjoyable travel experience for various occasions."
        },
        {
            "name": "20 Seater Mini Bus Hire in Pimpri Chinchwad",
            "description": "For those seeking a mini bus hire in Pimpri Chinchwad, our 20-seater mini buses are the perfect choice. Offering flexibility and comfort, our mini buses are ideal for both local and outstation travel, ensuring a smooth and enjoyable journey."
        },
        {
            "name": "Pune to Mumbai Airport Mini Bus on Rent",
            "description": "Traveling from Pune to Mumbai Airport? Our mini bus rental service provides a comfortable and efficient solution for airport transfers. With spacious seating and reliable service, our mini buses make your journey to the airport stress-free and convenient."
        },
        {
            "name": "Pune to Shirdi 20 Seater Mini Bus on Rent",
            "description": "Heading from Pune to Shirdi? Our 20-seater mini buses are an excellent option for this trip. With ample space and modern amenities, our mini buses ensure a comfortable and enjoyable journey to the pilgrimage site of Shirdi."
        },
        {
            "name": "20 Seater Bus for Corporate Events in Pune",
            "description": "Planning a corporate event in Pune? Our 20-seater buses are ideal for transporting employees or clients to and from corporate events. With comfortable seating and professional service, we ensure that your corporate travel needs are met with ease."
        },
        {
            "name": "20 Seater Tempo Traveller Booking",
            "description": "Looking to book a 20-seater tempo traveller? Our booking process is simple and efficient. We offer a range of 20-seater tempo travellers equipped with modern amenities to ensure a comfortable and enjoyable travel experience for your group."
        },
        {
            "name": "Non-AC Seater Tempo Traveller in Pune",
            "description": "For a more budget-friendly option, consider our non-AC seater tempo travellers in Pune. These vehicles provide comfortable seating and ample space without the added expense of air conditioning, making them a great choice for cost-effective group travel."
        },
        {
            "name": "20 Seater Bus on Rent for Wedding in Pune",
            "description": "Planning a wedding in Pune and need transportation for your guests? Our 20-seater buses are perfect for wedding transportation. With spacious interiors and comfortable seating, our buses ensure that your guests travel in style and comfort."
        },
        {
            "name": "Pune to Shirdi 20 Seater Bus on Rent",
            "description": "Traveling from Pune to Shirdi with a group? Our 20-seater buses offer a comfortable and spacious option for this journey. Enjoy a smooth ride with our well-maintained buses, designed to make your trip to Shirdi both pleasant and enjoyable."
        },
        {
            "name": "Pune to Lonavala 20 Seater Bus on Rent",
            "description": "Heading to Lonavala from Pune? Our 20-seater bus rental service provides a comfortable and reliable transportation option for your trip. With ample space and modern amenities, our buses are ideal for a relaxing journey to Lonavala."
        },
        {
            "name": "20 Seater Tempo Traveller Booking in Pune",
            "description": "If you're looking to book a 20-seater tempo traveller in Pune, Amruta Travels offers a range of options tailored to meet your group travel needs. Our 20-seater tempo travellers are ideal for group excursions, corporate events, or family trips. Enjoy a comfortable ride with our well-maintained vehicles and professional drivers."
        },
        {
            "name": "20 Seater Bus On Rent in Pune Airport",
            "description": "Traveling to or from Pune Airport? Our 20-seater bus rental service is perfect for airport transfers. With spacious seating and reliable service, our buses ensure that your journey to and from the airport is comfortable and hassle-free. Book your 20-seater bus with us for a smooth airport experience."
        },
        {
            "name": "Pune to Hyderabad Tempo Traveller on Rent",
            "description": "Planning a trip from Pune to Hyderabad? Our tempo travellers are an excellent choice for this long-distance journey. With comfortable seating and modern amenities, our 20-seater tempo travellers provide a pleasant and relaxing ride, making your journey to Hyderabad enjoyable."
        },
        {
            "name": "Pune to Konkan Darshan Tempo Traveller on Rent",
            "description": "Experience the scenic beauty of Konkan with our tempo traveller rental service. Our 20-seater tempo travellers are perfect for a Konkan Darshan trip, offering ample space and comfort. Enjoy the picturesque landscapes and explore Konkan with ease in our well-maintained vehicles."
        },
        {
            "name": "Mini Bus on Rent in Pune - Amruta Travels",
            "description": "For mini bus rentals in Pune, Amruta Travels provides a range of options to suit your needs. Our mini buses are ideal for small group travel, corporate outings, and family events. With comfortable seating and reliable service, we ensure a pleasant journey for all passengers."
        },
        {
            "name": "20 Seater Bus on Rent in Pimpri Chinchwad",
            "description": "In Pimpri Chinchwad and need a 20-seater bus? Amruta Travels offers competitive rates and reliable service for 20-seater bus rentals in this area. Whether it's for a family gathering, corporate event, or other occasions, our buses provide the space and comfort you need."
        },
        {
            "name": "20 Seater Bus on Rent in Pimpri Chinchwad for Family",
            "description": "Looking for a 20-seater bus for a family outing in Pimpri Chinchwad? Our buses are perfect for accommodating large families, offering spacious seating and comfort for a memorable journey. Enjoy your family trip with our reliable and well-maintained 20-seater buses."
        },
        {
            "name": "Tempo Traveller on Rent in Pimpri Chinchwad",
            "description": "If you need a tempo traveller in Pimpri Chinchwad, Amruta Travels offers various options to meet your requirements. Our tempo travellers are suitable for group travel and come equipped with modern amenities to ensure a comfortable and enjoyable ride."
        },
        {
            "name": "20 Seater Bus on Rent in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435  for prompt and efficient 20 Seater Bus on Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ], 

    "tableData": [
        ["-20 Seater Bus on Rent in Pune", "-20 Seater Bus Rental in Pune for Outstation"],
        ["-20 Seater Bus Rental in Pimpri Chinchwad", "-20 Seater Mini Bus Hire in Pimpri Chinchwad"],
        ["-Pune to Mumbai Airport Mini Bus on Rent", "-Pune to Shirdi 20 Seater Mini Bus on Rent"],
        ["-20 Seater Bus for Corporate Events in Pune", "-20 Seater Tempo Traveller Booking"],
        ["-Non-AC Seater Tempo Traveller in Pune", "-20 Seater Bus on Rent for Wedding in Pune"],
        ["-Pune to Shirdi 20 Seater Bus on Rent", "-Pune to Lonavala 20 Seater Bus on Rent"],
        ["-20 Seater Tempo Traveller Booking in Pune", "-20 Seater Bus on Rent in Pune Airport"],
        ["-Pune to Hyderabad Tempo Traveller on Rent", "-Pune to Konkan Darshan Tempo Traveller on Rent"],
        ["-Mini Bus on Rent in Pune - Amruta Travels", "-20 Seater Bus on Rent in Pimpri Chinchwad"],
        ["-20 Seater Bus on Rent in Pimpri Chinchwad for Family", "-Tempo Traveller on Rent in Pimpri Chinchwad"]
    ],

    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for 20-Seater Bus on Rent in Pune?",
            "WhyChoosedescription": "When it comes to renting a 20-seater bus in Pune, Amruta Travels offers a top-notch experience that emphasizes comfort, reliability, and customer satisfaction. Whether you need the bus for corporate events, family trips, or other occasions, our services are designed to meet all your needs. Here's why Amruta Travels is the ideal choice:"
        },
        {
            "WhyChooseheading": "Spacious and Comfortable Buses:",
            "WhyChoosedescription": "Our 20-seater buses are designed to provide ample space for passengers. With comfortable seating and generous legroom, every journey is made enjoyable, whether it's a short trip or a long journey."
        },
        {
            "WhyChooseheading": "Modern Amenities:",
            "WhyChoosedescription": "Each bus in our fleet is equipped with modern amenities to enhance your travel experience. From air conditioning to entertainment systems, we ensure you travel in comfort and style."
        },
        {
            "WhyChooseheading": "Well-Maintained Fleet:",
            "WhyChoosedescription": "We prioritize the maintenance of our buses to ensure they are in top condition. Regular servicing and inspections guarantee safety, reliability, and a trouble-free travel experience."
        },
        {
            "WhyChooseheading": "Experienced and Professional Drivers:",
            "WhyChoosedescription": "Our drivers are highly skilled and experienced, familiar with Pune’s routes and beyond. They are committed to providing safe and smooth journeys, ensuring you arrive at your destination comfortably."
        },
        {
            "WhyChooseheading": "Flexible Rental Options:",
            "WhyChoosedescription": "We offer flexible rental packages to accommodate different needs and budgets. Whether you need the bus for a few hours or several days, we can tailor our services to fit your requirements."
        },
        {
            "WhyChooseheading": "Competitive and Transparent Pricing:",
            "WhyChoosedescription": "At Amruta Travels, we provide competitive rates with no hidden fees. Our transparent pricing structure means you’ll know exactly what you’re paying for, ensuring great value for your money."
        },
        {
            "WhyChooseheading": "24/7 Customer Support:",
            "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with bookings, inquiries, and any issues that may arise. We’re here to ensure a smooth and hassle-free experience."
        },
        {
            "WhyChooseheading": "On-Time Service:",
            "WhyChoosedescription": "We value punctuality and strive to adhere to schedules. Our buses arrive on time, allowing you to plan your journey with confidence and reliability."
        },
        {
            "WhyChooseheading": "Hassle-Free Booking Process:",
            "WhyChoosedescription": "Booking a 20-seater bus with us is simple and efficient. You can reserve your vehicle through our website or by contacting our customer support team, making the process seamless and convenient."
        },
        {
            "WhyChooseheading": "Comprehensive Coverage:",
            "WhyChoosedescription": "Whether you need a bus for local travel within Pune or for outstation trips, Amruta Travels has you covered. We offer services for various destinations and occasions."
        }
    ]

    };

    
    
    const faqData = [
        {
            "question": "How can I book a 20-seater bus with Amruta Travels?",
            "answer": "You can book a 20-seater bus by calling us at +91 8421333435 or through our website. Our team will guide you through the booking process and provide all necessary information."
        },
        {
            "question": "What is included in the rental of a 20-seater bus?",
            "answer": "Our rental package includes a well-maintained 20-seater bus, an experienced driver, and modern amenities. Additional services or features can be requested and may incur extra charges."
        },
        {
            "question": "Are there any hidden fees in the rental cost?",
            "answer": "No, we provide transparent pricing with no hidden fees. Any additional costs, such as for extra mileage or extended rental periods, will be clearly communicated before you finalize your booking."
        },
        {
            "question": "Can I request an AC or non-AC bus?",
            "answer": "Yes, we offer both AC and non-AC options for our 20-seater buses. You can specify your preference at the time of booking to ensure your comfort during the trip."
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
            "answer": "Yes, our 20-seater buses are suitable for both local travel within Pune and outstation trips. We provide flexible rental options to accommodate different travel needs."
        },
        {
            "question": "What amenities are available on the bus?",
            "answer": "Our 20-seater buses come equipped with amenities such as air conditioning, comfortable seating, and entertainment systems. Additional features can be requested based on your needs."
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
            "name": "Miss Anjali Patel",
            "text": "I recently hired a 20-seater bus from Amruta Travels for our company's annual team outing. The entire experience was outstanding. The bus was spacious, comfortable, and well-maintained, which made our journey pleasant and stress-free. The driver was professional and punctual, which was crucial for our tight schedule. The booking process was straightforward, and their customer support team was very helpful throughout. I highly recommend Amruta Travels for anyone looking for reliable and top-quality bus rentals in Pune."
        },
        {
            "name": "Mr. Rajesh Kumar",
            "text": "Amruta Travels provided us with a fantastic 20-seater bus for our family reunion trip. The bus was equipped with modern amenities, including air conditioning and a good sound system, which made our trip enjoyable and comfortable. The driver was courteous and ensured we had a smooth journey from start to finish. The service was exceptional, and the pricing was fair and transparent. We had a great experience and will definitely use Amruta Travels for our future travel needs."
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
        heading: "20 Seater Bus on Rent in Pune Contact Number: ",
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
    <img src='\img\Keyword Based Image\Keyword Based Image-08.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Renting a 20-Seater Bus in Pune with Amruta Travels:</h3>
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
export default SeaterRent;