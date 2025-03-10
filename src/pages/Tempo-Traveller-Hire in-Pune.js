
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  TempoHire(){

  const cardData = 
    {
      keyword: 'Tempo Traveller Hire in Pune ',
      heading: ' Amruta Travels: Tempo Traveller Hire in Pune ',

      headingDescription: 'When it comes to group travel in Pune, Amruta Travels offers top-notch tempo traveller hire services tailored to meet all your transportation needs. Whether you are planning a corporate outing, family vacation, school trip, or any other group event, our tempo travellers are designed to provide comfort, convenience, and reliability. Here’s why choosing Amruta Travels for tempo traveller hire in Pune is the best decision:',

      top:"Top Features of Tempo Traveller Hire in Pune :",

       topPlaces : [
        {
            "title": "Spacious Seating Arrangements:",
            "description": "Our tempo travellers come with a variety of seating configurations, including 9-seater, 12-seater, 14-seater, and more, to accommodate different group sizes comfortably. Each seat is designed to offer ample space and support for a relaxing journey."
        },
        {
            "title": "Climate-Controlled Comfort:",
            "description": "Stay comfortable no matter the weather outside. Our tempo travellers are equipped with air conditioning systems that ensure a pleasant temperature inside the vehicle, making your travel experience enjoyable even during Pune's hot summer months."
        },
        {
            "title": "Luxurious Interiors:",
            "description": "Our tempo travellers feature plush interiors with high-quality upholstery and well-designed seating. The spacious cabin is crafted to enhance your travel experience with an emphasis on luxury and comfort."
        },
        {
            "title": "Advanced Entertainment Systems:",
            "description": "Long journeys are made enjoyable with our state-of-the-art entertainment systems. Each vehicle is equipped with LED TVs, music systems, and DVD players to keep passengers entertained throughout the trip."
        },
        {
            "title": "Ample Luggage Space:",
            "description": "Traveling with a lot of luggage? No problem. Our tempo travellers come with generous luggage compartments to ensure that all your belongings are safely stored and easily accessible."
        },
        {
            "title": "Top-Tier Safety Features:",
            "description": "Safety is our top priority. Our tempo travellers are fitted with modern safety features such as seat belts for all passengers, first-aid kits, fire extinguishers, and GPS tracking for real-time monitoring to ensure a secure journey."
        },
        {
            "title": "Professional and Experienced Drivers:",
            "description": "Our drivers are highly experienced and well-trained, familiar with Pune’s local routes and outstation destinations. They prioritize punctuality and safety, ensuring a smooth and stress-free travel experience."
        },
        {
            "title": "Well-Maintained Vehicles:",
            "description": "We take pride in the maintenance of our fleet. Each tempo traveller undergoes regular servicing and rigorous inspections to ensure it’s in optimal working condition. Cleanliness and hygiene are maintained to the highest standards."
        },
        {
            "title": "Flexible Rental Options:",
            "description": "Whether you need a tempo traveller for a few hours, a full day, or an extended period, we offer flexible rental options to suit your schedule and budget. Our booking process is straightforward and customized to meet your specific needs."
        },
        {
            "title": "Competitive and Transparent Pricing:",
            "description": "At Amruta Travels, we provide competitive pricing with no hidden charges. Our transparent pricing model ensures that you receive excellent value for money, with a clear breakdown of all costs involved."
        }
    ],    
    services : [
        {
            "name": "14 Seater Tempo Traveller Hire in Pune:",
            "description": "Our 14-seater tempo travellers are ideal for medium-sized groups who require a bit more space than a standard van. Perfect for family trips, small corporate gatherings, or intimate group outings, these vehicles offer comfortable seating and ample luggage space."
        },
        {
            "name": "17 Seater Tempo Traveller on Rent in Pimpri Chinchwad:",
            "description": "For slightly larger groups, our 17-seater tempo travellers are available in Pimpri Chinchwad. These vehicles are well-suited for group travel across the city or to nearby destinations, providing comfort and convenience for all passengers."
        },
        {
            "name": "Tempo Traveller on Rent Near Me:",
            "description": "Searching for a tempo traveller rental near you? Amruta Travels offers convenient options across Pune, ensuring that you find a rental location that’s close to you. Our fleet is readily accessible for all your local and outstation travel needs."
        },
        {
            "name": "20 Seater Tempo Traveller on Rent in Pune:",
            "description": "Our 20-seater tempo travellers are perfect for larger groups who need extra space. Ideal for group tours, school trips, or corporate events, these vehicles offer spacious seating and a comfortable travel experience."
        },
        {
            "name": "25 Seater Tempo Traveller on Rent in Pune:",
            "description": "For even bigger groups, our 25-seater tempo travellers provide ample room and comfort. These buses are ideal for large family gatherings, corporate outings, and group tours, ensuring that everyone travels together comfortably."
        },
        {
            "name": "32 Seater Tempo Traveller on Rent in Pune:",
            "description": "Our 32-seater tempo travellers are perfect for very large groups. Equipped with luxurious interiors and advanced amenities, these vehicles are ideal for extended trips and events where space and comfort are a priority."
        },
        {
            "name": "Pune to Shirdi Tempo Traveller on Rent:",
            "description": "Traveling from Pune to Shirdi? Our tempo travellers are well-suited for this pilgrimage route, offering comfortable and reliable transportation for your spiritual journey. Enjoy a hassle-free trip with our well-maintained vehicles and professional drivers."
        },
        {
            "name": "Pune to Mahabaleshwar Tempo Traveller on Rent:",
            "description": "Plan a scenic getaway to Mahabaleshwar with our tempo travellers. Equipped for long-distance travel, our vehicles ensure a comfortable ride through the beautiful landscapes on your way to this popular hill station."
        },
        {
            "name": "Pune to Ajanta Ellora Tempo Traveller on Rent:",
            "description": "Explore the historic Ajanta and Ellora Caves with ease. Our tempo travellers provide a comfortable and convenient way to visit these UNESCO World Heritage sites, making your trip enjoyable and stress-free."
        },
        {
            "name": "Pune to Solapur Tempo Traveller on Rent:",
            "description": "Head to Solapur with our reliable tempo traveller services. Ideal for group trips to this vibrant city, our vehicles ensure a smooth and comfortable ride for all passengers."
        },
        {
            "name": "Pune to Kolhapur Darshan Tempo Traveller on Rent:",
            "description": "Experience the cultural richness of Kolhapur with our tempo traveller rentals. Ideal for darshan trips and sightseeing, our vehicles provide ample space and comfort for a memorable visit."
        },
        {
            "name": "Pune to Goa Tempo Traveller on Rent:",
            "description": "Planning a beach vacation to Goa? Our tempo travellers are perfect for the journey from Pune to Goa, offering comfort and convenience as you head to this popular destination."
        },
        {
            "name": "Pune to Per KM Tempo Traveller on Rent:",
            "description": "Need a tempo traveller based on distance? We offer flexible rental options with per-kilometer pricing, making it easy to manage your travel expenses based on your specific trip requirements."
        },
        {
            "name": "Tempo Traveller Hire in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Tempo Traveller Hire in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],    
    tableData : [
        ["-14 Seater Tempo Traveller Hire in Pune", "-17 Seater Tempo Traveller on Rent in Pimpri Chinchwad"],
        ["-Tempo Traveller on Rent Near Me", "-20 Seater Tempo Traveller on Rent in Pune"],
        ["-25 Seater Tempo Traveller on Rent in Pune", "-32 Seater Tempo Traveller on Rent in Pune"],
        ["-Pune to Shirdi Tempo Traveller on Rent", "-Pune to Mahabaleshwar Tempo Traveller on Rent"],
        ["-Pune to Ajanta Ellora Tempo Traveller on Rent", "-Pune to Solapur Tempo Traveller on Rent"],
        ["-Pune to Kolhapur Darshan Tempo Traveller on Rent", "-Pune to Goa Tempo Traveller on Rent"],
        ["-Pune to Per KM Tempo Traveller on Rent"]
    ],    
    
    

    whychoose : [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Tempo Traveller Hire in Pune?",
            "WhyChoosedescription": "When it comes to hiring a tempo traveller in Pune, Amruta Travels stands out for its commitment to delivering exceptional service and comfort. Here’s why you should choose us for your next journey:"
        },
        {
            "WhyChooseheading": "Diverse Fleet:",
            "WhyChoosedescription": "We offer a wide range of tempo travellers, including 14-seater, 17-seater, 20-seater, 25-seater, and even 32-seater vehicles. Whatever your group size, we have the right vehicle to meet your needs."
        },
        {
            "WhyChooseheading": "Comfort and Convenience:",
            "WhyChoosedescription": "Our tempo travellers are equipped with comfortable seating, ample luggage space, and climate control to ensure a pleasant journey. Whether you're traveling locally or on a long-distance trip, our vehicles provide a superior travel experience."
        },
        {
            "WhyChooseheading": "Professional Drivers:",
            "WhyChoosedescription": "Our experienced and professional drivers are well-versed in local routes and outstation travel. They prioritize safety and punctuality, ensuring a smooth and hassle-free trip."
        },
        {
            "WhyChooseheading": "Competitive Pricing:",
            "WhyChoosedescription": "We offer transparent and competitive pricing for our tempo traveller rentals. With no hidden costs, you’ll receive excellent value for your money."
        },
        {
            "WhyChooseheading": "Flexible Rental Options:",
            "WhyChoosedescription": "Whether you need a vehicle for a few hours, a day, or a week, we offer flexible rental options to accommodate your specific requirements."
        },
        {
            "WhyChooseheading": "Clean and Well-Maintained Vehicles:",
            "WhyChoosedescription": "Our tempo travellers are regularly serviced and thoroughly inspected to ensure they are in top condition. Cleanliness and hygiene are maintained to the highest standards."
        },
        {
            "WhyChooseheading": "Customizable Solutions:",
            "WhyChoosedescription": "We understand that every trip is unique. Our services can be tailored to suit your itinerary, budget, and specific travel needs, whether it's for a family vacation, corporate event, or pilgrimage."
        },
        {
            "WhyChooseheading": "Easy Booking Process:",
            "WhyChoosedescription": "Our user-friendly booking process makes it simple to reserve a tempo traveller. You can book online or contact us directly for personalized assistance."
        },
        {
            "WhyChooseheading": "Reliable Customer Support:",
            "WhyChoosedescription": "Our dedicated customer support team is available to assist you with any queries or issues that may arise before, during, or after your journey."
        },
        {
            "WhyChooseheading": "Positive Customer Feedback:",
            "WhyChoosedescription": "Our commitment to providing excellent service has earned us positive feedback from satisfied customers. We take pride in our reputation for reliability and customer satisfaction."
        }
    ],    

    };

    
    
    const faqData = [
        {
            "question": "What types of tempo travellers do you offer for rent?",
            "answer": "We offer a range of tempo travellers, including 14-seater, 17-seater, 20-seater, 25-seater, and 32-seater vehicles. This variety ensures that we can accommodate groups of all sizes."
        },
        {
            "question": "Are your tempo travellers air-conditioned?",
            "answer": "Yes, all our tempo travellers are equipped with air conditioning to ensure a comfortable journey regardless of the weather."
        },
        {
            "question": "Can I hire a tempo traveller for a one-way trip?",
            "answer": "Yes, we offer flexible rental options, including one-way trips. You can choose the rental type that best suits your travel needs."
        },
        {
            "question": "How can I book a tempo traveller with Amruta Travels?",
            "answer": "You can book a tempo traveller through our user-friendly online booking system or by contacting our customer support team directly for personalized assistance."
        },
        {
            "question": "Are your drivers experienced and professional?",
            "answer": "Yes, all our drivers are experienced and professional. They are familiar with local routes and outstation travel, ensuring a safe and smooth journey."
        },
        {
            "question": "What is included in the rental price?",
            "answer": "Our rental prices are competitive and transparent, with no hidden costs. The rental price typically includes the vehicle, driver, and basic amenities. Any additional services or requirements can be discussed and priced accordingly."
        },
        {
            "question": "Do you offer tempo travellers for outstation travel?",
            "answer": "Yes, we offer tempo traveller rentals for both local and outstation travel. Whether you're heading to a nearby destination or a distant location, we have the right vehicle for you."
        },
        {
            "question": "What safety measures are in place in your tempo travellers?",
            "answer": "Our vehicles are equipped with modern safety features, including seat belts, emergency exits, fire extinguishers, first-aid kits, and GPS tracking for real-time monitoring."
        },
        {
            "question": "Can I customize my tempo traveller rental to fit my itinerary?",
            "answer": "Yes, we offer customizable solutions to match your specific travel itinerary and requirements. Our team will work with you to ensure your trip is tailored to your needs."
        },
        {
            "question": "What should I do if I have a problem during my rental period?",
            "answer": "Our customer support team is available to assist you with any issues that may arise during your rental period. Please contact us immediately, and we will address your concerns promptly."
        }
    ];
    
    
    
    
    
    const testimonials = [
        {
            "name": "Mr. Rajesh Kumar",
            "text": "I recently hired a tempo traveller from Amruta Travels for a family trip to Mahabaleshwar, and I couldn’t be happier with the service. The vehicle was clean, spacious, and well-maintained, making our journey very comfortable. The driver was professional and courteous, ensuring we arrived on time and safely. The booking process was smooth and the rates were very reasonable. I highly recommend Amruta Travels for anyone looking for reliable tempo traveller hire in Pune."
        },
        {
            "name": "Miss Priya Sharma",
            "text": "Amruta Travels provided an excellent tempo traveller for our corporate outing. The 20-seater bus was perfect for our group, with ample space and modern amenities. The air conditioning worked flawlessly, and the entertainment system kept everyone engaged throughout the trip. The driver was punctual and handled the vehicle expertly. Their customer service was top-notch, making the entire experience stress-free. If you need a tempo traveller in Pune, Amruta Travels is the way to go!"
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
        heading: "Tempo Traveller Hire in Pune Contact Number:",
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
  <title> Tempo Traveller Hire in Pune ₹25 Per Km</title>
  <meta name="description" content="Book Tempo Traveller Hire in Pune for 14, 17, 20, 25, and 32 Seater options. Affordable Tempo Traveller on Rent  in Pune for Shirdi, Mahabaleshwar, Goa, Kolhapur, and more. Best services for family trips, corporate outings, and wedding events." />
  <meta name="keywords" content="Tempo Traveller Hire in Pune, 14 Seater Tempo Traveller Hire in Pune, 17 Seater Tempo Traveller on Rent, 20 Seater Tempo Traveller on Rent in Pune, 25 Seater Tempo Traveller on Rent, 32 Seater Tempo Traveller on Rent, Pune to Shirdi Tempo Traveller on Rent, Pune to Mahabaleshwar Tempo Traveller on Rent, Pune to Goa Tempo Traveller on Rent, Tempo Traveller on Rent for Weddings, Luxury Tempo Traveller for Outstation, Per KM Tempo Traveller on Rent, Tempo Traveller Rent for Corporate Events" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Affordable Tempo Traveller Hire in Pune. Rent 14, 17, 20, 25, 32 Seater Tempo Travellers for family trips, corporate events, and outstation tours like Shirdi, Mahabaleshwar, Goa, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/tempo-traveller-hire-in-pune",
        "logo": "https://amrutatravel.com/images/tempo-traveller-hire-pune.jpg",
        "image": "https://amrutatravel.com/images/tempo-traveller-hire-pune.jpg",
        "priceRange": "₹3500 - ₹9000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/tempo-traveller-hire-in-pune",
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
            "reviewBody": "We hired a 17-seater Tempo Traveller for a trip to Mahabaleshwar. The vehicle was clean, and the driver was polite and professional. Great service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Joshi"
            },
            "datePublished": "2024-08-22",
            "reviewBody": "Booked a 25-seater Tempo Traveller for a corporate outing to Goa. The entire experience was seamless, and the bus was very comfortable for our team."
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
          "serviceUrl": "https://amrutatravel.com/tempo-traveller-hire-in-pune"
        },
        "keywords": "Tempo Traveller Hire in Pune, 14 Seater Tempo Traveller on Rent, 17 Seater Tempo Traveller Rent, 20 Seater Tempo Traveller on Rent, 25 Seater Tempo Traveller Hire in Pune, Pune to Shirdi Tempo Traveller, Pune to Mahabaleshwar Tempo Traveller, Pune to Goa Tempo Traveller, Per KM Tempo Traveller Rent, Tempo Traveller Rent for Corporate Events"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-48.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Tempo Traveller Hire in Pune - Amruta Travels:</h3>
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
export default TempoHire;