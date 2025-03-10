
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Seater25Tempo(){

  const cardData = 
    {
      keyword: '25 Seater Tempo Traveller on Rent in Pune',
      heading: 'Amruta Travels: 25 Seater Tempo Traveller on Rent in Pune',

      headingDescription: 'When you need a spacious and comfortable option for group travel in Pune, the 25-seater Tempo Traveller from Amruta Travels is the ideal choice. Perfect for corporate events, family gatherings, school excursions, or any large group outing, our 25-seater Tempo Travellers offer a blend of luxury and practicality. Here’s why our 25-seater Tempo Travellers stand out and what you can expect from our rental service:',

      top:"Top Features of 25-Seater Tempo Traveller on Rent:",

       topPlaces : [
        {
            "title": "Generous Seating Capacity",
            "description": "The 25-seater Tempo Traveller is designed to accommodate up to 25 passengers comfortably. Each seat is strategically placed to ensure ample legroom and elbow space, making long journeys more enjoyable."
        },
        {
            "title": "Luxurious Interiors",
            "description": "Enjoy a premium travel experience with our Tempo Traveller's plush, ergonomically designed seats. The interiors are thoughtfully crafted with high-quality materials, ensuring a luxurious ambiance and a relaxed travel environment."
        },
        {
            "title": "Powerful Air Conditioning",
            "description": "Equipped with advanced air conditioning systems, our 25-seater Tempo Travellers maintain a cool and comfortable climate inside, regardless of the external weather conditions. This feature is especially valuable for travel during Pune's warmer months."
        },
        {
            "title": "Modern Entertainment Systems",
            "description": "Our Tempo Travellers come with state-of-the-art entertainment systems, including high-quality speakers and DVD players. You can enjoy your favorite music or movies throughout the journey, enhancing the overall travel experience."
        },
        {
            "title": "Ample Luggage Space",
            "description": "Traveling with a lot of baggage? No problem! The 25-seater Tempo Traveller offers generous luggage compartments and overhead storage, ensuring that your personal belongings are securely stored and easily accessible."
        },
        {
            "title": "Experienced and Professional Drivers",
            "description": "Safety and reliability are our top priorities. Our drivers are highly experienced and familiar with Pune’s routes and outstation destinations. They are committed to providing a smooth, secure, and enjoyable travel experience."
        },
        {
            "title": "Well-Maintained Vehicles",
            "description": "Each Tempo Traveller in our fleet undergoes regular maintenance and rigorous inspections to ensure optimal performance and cleanliness. This commitment to upkeep ensures that you travel in a reliable and well-maintained vehicle."
        },
        {
            "title": "Flexible Rental Options",
            "description": "We offer customizable rental packages to fit your specific needs. Whether you require the Tempo Traveller for a few hours, a day, or an extended period, we can tailor our services to suit your schedule and budget."
        },
        {
            "title": "Competitive Pricing",
            "description": "At Amruta Travels, we provide competitive and transparent pricing for our 25-seater Tempo Travellers. Our clear pricing structure means no hidden fees or unexpected charges, offering you great value for your money."
        },
        {
            "title": "24/7 Customer Support",
            "description": "Our dedicated customer support team is available around the clock to assist with any inquiries or issues. From booking to on-road assistance, we ensure a seamless and hassle-free experience for our clients."
        }
    ],    
    "services": [
        {
          "name": "25 Seater Tempo Traveller Rent Per Km in Pune",
          "description": "Looking for a 25-seater Tempo Traveller rental in Pune on a per-kilometer basis? Amruta Travels offers flexible rental options where you pay only for the distance you travel, ideal for longer journeys or outstation trips."
        },
        {
          "name": "Tempo Traveller 25 Seater AC Bus on Rent Pune",
          "description": "Experience luxury with our 25-seater AC Tempo Travellers in Pune, perfect for group outings or family trips. Equipped with modern amenities, these vehicles ensure a premium travel experience."
        },
        {
          "name": "Tempo Traveller 26 Seater Non-AC Bus on Rent in Pune",
          "description": "For those seeking a budget-friendly option, we offer 26-seater non-AC Tempo Travellers. Ideal for groups wanting a comfortable ride without the extra cost of air conditioning."
        },
        {
          "name": "26 Seater Bus on Rent for Wedding in Pune",
          "description": "Planning a wedding? Our 26-seater buses provide comfortable transportation for your guests, ensuring they arrive at the venue in style."
        },
        {
          "name": "25 Bus on Rent Pimpri Chinchwad Pune",
          "description": "Need a 25-seater bus in Pimpri Chinchwad? Amruta Travels provides reliable rental services for group travel needs, whether for local or outstation trips."
        },
        {
          "name": "25 Bus on Rent in Pune for Picnics",
          "description": "Planning a picnic with a large group in Pune? Our 25-seater buses ensure comfortable transportation to your favorite picnic spots, making your outing enjoyable."
        },
        {
          "name": "Pune to Goa 25 Seater Bus Fare",
          "description": "Planning a trip to Goa? Our 25-seater buses offer competitive pricing based on the rental duration and trip requirements. Contact us for an accurate quote."
        },
        {
          "name": "26 Seater Tempo Traveller on Rent in Pune",
          "description": "Amruta Travels provides spacious 26-seater Tempo Travellers in Pune for larger groups. Perfect for both local and outstation travel with modern amenities."
        },
        {
          "name": "25 Seater Bus on Rent in Hadapsar Pune",
          "description": "Located in Hadapsar? We offer 25-seater bus rentals for various purposes, from corporate events to family outings, ensuring a comfortable ride."
        },
        {
          "name": "Pune to Shirdi 25 Seater Bus on Rent",
          "description": "Traveling from Pune to Shirdi? Our 25-seater buses provide comfortable and efficient group transportation, making your journey enjoyable."
        },
        {
          "name": "Pune Airport to Shirdi 25 Seater Tempo Traveller on Rent",
          "description": "Need airport transfers from Pune to Shirdi? Our 25-seater Tempo Travellers offer reliable and comfortable transportation directly from Pune Airport."
        },
        {
          "name": "Pune to Bhimashankar 25 Seater Tempo Traveller",
          "description": "Plan a comfortable journey from Pune to Bhimashankar with our 25-seater Tempo Travellers, ensuring ample space and convenience for your group."
        },
        {
          "name": "Pune to 5 Jyotirlinga Darshan Tempo Traveller on Rent",
          "description": "Going on a 5 Jyotirlinga pilgrimage? Our 25-seater Tempo Travellers offer spacious and comfortable travel for spiritual journeys."
        },
        {
          "name": "25 Seater Tempo Traveller on Rent in Pimpri Chinchwad",
          "description": "Amruta Travels offers reliable 25-seater Tempo Traveller rental services in Pimpri Chinchwad, perfect for all group travel needs."
        },
        {
          "name": "Tempo Traveller on Rent in Hinjewadi",
          "description": "For those in Hinjewadi, we provide Tempo Traveller rentals with modern amenities, ensuring a comfortable ride for group outings or business trips."
        },
        {
          "name": "Tempo Traveller on Rent in Kharadi",
          "description": "Located in Kharadi? Our Tempo Travellers provide spacious and reliable travel solutions for various group travel needs, from corporate to family outings."
        },
        {
          "name": "Luxury Tempo Traveller on Rent in Kothrud Pune",
          "description": "Looking for luxury travel? Our Tempo Travellers in Kothrud Pune offer premium comfort and style with high-end amenities, perfect for special occasions."
        },
        {
            "name": " 25 Seater Tempo Traveller on Rent in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435  for prompt and efficient  25 Seater Tempo Traveller on Rent in Pune . We ensure a smooth and enjoyable ride for all our customers."
          }
      ],

    "tableData": [
        ["-Tempo Traveller 25 Seater Rent per km in Pune", "-Tempo Traveller 25 Seater AC Bus on Rent Pune"],
        ["-Tempo Traveller 26 Seater Non AC Bus on Rent in Pune", "-26 Bus on Rent for Wedding in Pune"],
        ["-25 Bus on Rent in Pimpri Chinchwad Pune", "-25 Bus on Rent in Pune for Picnics"],
        ["-Pune to Goa 25 Seater Bus Fare", "-26 Seater Tempo Traveller on Rent in Pune"],
        ["-25 Seater Bus on Rent in Hadapsar Pune", "-Pune to Shirdi 25 Seater Bus on Rent"],
        ["-Pune Airport to Shirdi 25 Seater Tempo Traveller on Rent", "-Pune to Bhimashankar 25 Seater Tempo Traveller"],
        ["-Pune to 5 Jyotirlinga Darshan Tempo Traveller on Rent", "-25 Seater Tempo Traveller on Rent in Pimpri Chinchwad"],
        ["-Tempo Traveller on Rent in Hinjewadi", "-Tempo Traveller on Rent in Kharadi"],
        ["-Luxury Tempo Traveller on Rent in Kothrud Pune", ""]
    ],

    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for 25-Seater Tempo Traveller on Rent in Pune?",
            "WhyChoosedescription": "When you choose Amruta Travels for your 25-seater Tempo Traveller rental needs in Pune, you're opting for a blend of comfort, reliability, and exceptional service. Whether it's a family outing, corporate trip, or a special occasion, we have the perfect solution for your group travel."
        },
        {
            "WhyChooseheading": "Spacious and Comfortable Vehicles:",
            "WhyChoosedescription": "Our 25-seater Tempo Travellers are designed to provide maximum comfort with ample seating space and generous legroom. Perfect for long journeys or group outings, our vehicles ensure a pleasant travel experience."
        },
        {
            "WhyChooseheading": "Modern Amenities:",
            "WhyChoosedescription": "Enjoy modern features such as air conditioning, high-quality audio systems, and plush seating. Our Tempo Travellers are equipped with the latest amenities to enhance your travel comfort."
        },
        {
            "WhyChooseheading": "Well-Maintained Fleet:",
            "WhyChoosedescription": "We take pride in maintaining our fleet to the highest standards. Each vehicle undergoes regular inspections and servicing to ensure reliability and safety for every journey."
        },
        {
            "WhyChooseheading": "Experienced Drivers:",
            "WhyChoosedescription": "Our professional drivers are experienced and skilled in navigating various routes. They are dedicated to providing a smooth and safe travel experience, adhering to the highest standards of professionalism."
        },
        {
            "WhyChooseheading": "Flexible Rental Options:",
            "WhyChoosedescription": "We offer customizable rental packages tailored to your needs. Whether you need a Tempo Traveller for a day trip, a long journey, or a special event, we provide flexible solutions to fit your schedule and budget."
        },
        {
            "WhyChooseheading": "Competitive Pricing:",
            "WhyChoosedescription": "Our pricing is transparent and competitive, with no hidden fees. We provide clear quotes and work to offer the best value for your money without compromising on quality."
        },
        {
            "WhyChooseheading": "Convenient Booking Process:",
            "WhyChoosedescription": "Booking with us is easy and straightforward. You can reserve your 25-seater Tempo Traveller through our user-friendly website or by contacting our customer support team."
        },
        {
            "WhyChooseheading": "Reliable Service:",
            "WhyChoosedescription": "We are committed to punctuality and reliability. Our vehicles arrive on time, and we ensure that your travel plans proceed smoothly, allowing you to focus on your trip."
        },
        {
            "WhyChooseheading": "Excellent Customer Support:",
            "WhyChoosedescription": "Our dedicated customer support team is available to assist you with any inquiries or issues. We are here to provide personalized service and ensure your satisfaction from booking to the end of your journey."
        },
        {
            "WhyChooseheading": "Comprehensive Coverage:",
            "WhyChoosedescription": "Whether you need a Tempo Traveller for local excursions within Pune or for outstation trips, we offer comprehensive coverage to meet all your travel requirements."
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
            "name": "Mr. Anil Patil",
            "text": "We recently hired a 25-seater Tempo Traveller from Amruta Travels for our family reunion trip from Pune to Lonavala. The vehicle was exceptionally clean, spacious, and well-maintained. The comfort and amenities provided made our journey enjoyable and stress-free. The driver was professional and navigated the routes efficiently. I highly recommend Amruta Travels for their top-notch service and reliability. We will definitely choose them for our future trips!"
        },
        {
            "name": "Ms. Meera Shah",
            "text": "For our corporate offsite event, we needed a 25-seater Tempo Traveller for a trip from Pune to Mahabaleshwar. Amruta Travels exceeded our expectations with their service. The bus was equipped with all the necessary amenities, including comfortable seating and air conditioning, which made the long journey quite pleasant. The booking process was smooth, and the driver was punctual and courteous. Thanks to Amruta Travels, our team had a fantastic travel experience. We will certainly use their services again!"
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
        heading: " 25 Seater Tempo Traveller on Rent in Pune  Contact Number:  ",
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
  <title>Contact: +91 8421333435 | Amruta Travel | 25 Seater Tempo Traveller on Rent in Pune | Hire 25 Seater Bus for Picnics, Weddings, Corporate & Outstation Trips</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent a 25 Seater Tempo Traveller for picnics, weddings, corporate events, and outstation trips. Available for Pune to Goa, Shirdi, Bhimashankar, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shivaji Nagar, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411005",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/25-seater-tempo-traveller-on-rent-pune",
        "logo": "https://amrutatravel.com/images/25-seater-tempo-traveller-pune.jpg",
        "image": "https://amrutatravel.com/images/25-seater-tempo-traveller-pune.jpg",
        "priceRange": "₹12000 - ₹35000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/25-seater-tempo-traveller-on-rent-pune",
          "priceCurrency": "INR",
          "price": "12000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "8000"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sanjay Joshi"
            },
            "datePublished": "2024-09-20",
            "reviewBody": "Fantastic experience with Amruta Travels. The 25-seater tempo was perfect for our family picnic. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ritu Mehta"
            },
            "datePublished": "2024-08-15",
            "reviewBody": "We rented a 25-seater for a corporate event. The vehicle was spacious and comfortable. The driver was very professional."
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
          "serviceUrl": "https://amrutatravel.com/25-seater-tempo-traveller-on-rent-pune"
        },
        "keywords": "25 Seater Tempo Traveller on Rent in Pune, Pune to Shirdi 25 Seater Bus, Pune to Goa 25 Seater Bus, Wedding Bus Hire Pune, 25 Seater Tempo Traveller Hire Pune, Pune to Bhimashankar Tempo Traveller"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-09.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Renting a 25-Seater Tempo Traveller in Pune with Amruta Travels:</h3>
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
export default Seater25Tempo;