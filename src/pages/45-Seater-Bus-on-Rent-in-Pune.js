
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Seater45(){

  const cardData = 
    {
      keyword: '45-Seater Bus Rental in Pune',
      heading: 'Amruta Travels: 45-Seater Bus Rental in Pune',

      headingDescription: 'When organizing group travel in Pune, whether for a corporate event, wedding, school trip, or extended tour, renting a 45-seater bus from Amruta Travels is the ideal choice. Our fleet of well-maintained, spacious buses ensures a travel experience marked by comfort, safety, and efficiency. Here is why our 45-seater bus rental service is the perfect solution for your group travel needs:',

      top:"Top Features of Our 45-Seater Bus on Rent:",

       topPlaces : [
        {
            "title": "Spacious Seating Arrangement",
            "description": "Our 45-seater buses are designed with ample seating capacity to accommodate large groups comfortably. The spacious seating ensures that every passenger has enough room to relax, even on longer journeys. The seating configuration is crafted for maximum comfort, allowing everyone to enjoy a pleasant trip."
        },
        {
            "title": "Advanced Climate Control",
            "description": "Travel in comfort regardless of the weather with our buses' advanced air-conditioning systems. The climate-controlled environment ensures a pleasant and cool atmosphere inside the bus, keeping passengers comfortable during hot summer days or cooler months."
        },
        {
            "title": "Reclining Seats for Enhanced Comfort",
            "description": "Each seat in our 45-seater buses is equipped with reclining features, allowing passengers to adjust their seats to their preferred position. This feature is especially beneficial for longer journeys, providing added comfort and relaxation throughout the trip."
        },
        {
            "title": "High-Tech Entertainment Systems",
            "description": "To keep passengers entertained during long trips, our buses are fitted with modern entertainment systems. Enjoy movies, music, or other forms of entertainment on our high-definition LED TVs and superior sound systems, making the journey enjoyable for everyone."
        },
        {
            "title": "Generous Luggage Space",
            "description": "Our 45-seater buses offer ample luggage space to accommodate all your belongings. With spacious compartments designed for convenience, there’s plenty of room to store bags, equipment, or other personal items safely and securely."
        },
        {
            "title": "Comprehensive Safety Features",
            "description": "Safety is our top priority. Our buses are equipped with essential safety features, including seat belts for every passenger, multiple emergency exits, fire extinguishers, and first-aid kits. GPS tracking is also in place for real-time monitoring, ensuring a secure journey."
        },
        {
            "title": "Experienced and Professional Drivers",
            "description": "Our drivers are highly trained professionals with extensive experience in navigating both city routes and long-distance travel. They are committed to providing a safe, smooth, and timely travel experience, ensuring that your journey is hassle-free."
        },
        {
            "title": "Meticulously Maintained Fleet",
            "description": "We take pride in maintaining our fleet to the highest standards. Each 45-seater bus undergoes regular servicing and inspections to ensure optimal performance. We also prioritize cleanliness and hygiene, so you can expect a fresh and well-kept vehicle every time."
        },
        {
            "title": "Transparent and Competitive Pricing",
            "description": "Our rental services are priced competitively to offer great value for money. We believe in transparency, so there are no hidden costs or surprises. You'll know exactly what you're paying for, making budgeting straightforward and easy."
        },
        {
            "title": "Customized Travel Solutions",
            "description": "Understanding that every trip is unique, we offer customizable rental solutions to fit your specific needs. Whether you require a bus for a single day or a week, for a wedding, corporate event, or school trip, we can tailor our services to meet your requirements and budget."
        }
    ],    
    "services": [
        {
            "name": "45 Seater Bus for Hire for Outstation",
            "description": "When planning an outstation trip with a large group, Amruta Travels offers a fleet of 45-seater buses that are perfect for extended journeys. Our buses are well-maintained, providing ample space and comfort for all passengers. Whether you’re heading to a distant destination for leisure or business, our outstation bus rentals ensure a smooth and enjoyable ride."
        },
        {
            "name": "45 Seater Bus for Wedding for Outstation Pune",
            "description": "For couples planning a destination wedding or transporting guests from Pune to an outstation wedding venue, our 45-seater buses are an excellent choice. These buses offer luxurious seating and air-conditioning, making the journey comfortable for all attendees. We handle the logistics so you can focus on your special day without any travel concerns."
        },
        {
            "name": "45 Seater AC Bus for Hire",
            "description": "Our 45-seater AC buses are designed to keep you cool and comfortable, even during the hottest months. With powerful air-conditioning systems, you can enjoy a pleasant ride no matter the weather. Ideal for long trips, corporate events, or group outings, our AC buses ensure a refreshing travel experience."
        },
        {
            "name": "45 Seater Non-AC Bus for Hire",
            "description": "For those looking for a more budget-friendly option, we offer 45-seater non-AC buses. These buses provide spacious seating and ample room for luggage, making them suitable for short to medium-distance travel. Perfect for cooler weather or for those looking to economize, our non-AC buses offer comfort at a lower cost."
        },
        {
            "name": "45 Seater AC Bus for Marriage Function",
            "description": "Make your wedding function special by hiring a 45-seater AC bus from Amruta Travels. Our buses are equipped with comfortable seating and climate control to ensure your guests travel in style and comfort. Whether it’s transporting guests to the wedding venue or the reception, our AC buses provide a premium travel experience."
        },
        {
            "name": "45 Seater Bus for Corporate Events",
            "description": "When it comes to corporate events, punctuality and comfort are key. Our 45-seater buses are perfect for transporting employees or clients to conferences, seminars, or team-building activities. With comfortable seating and ample space, our buses ensure that everyone arrives at the event refreshed and ready."
        },
        {
            "name": "45 Seater Bus on Rent in Pimpri Chinchwad",
            "description": "Residents and businesses in Pimpri Chinchwad can now benefit from our 45-seater bus rentals. Whether you’re planning a group outing, a corporate event, or a family gathering, our local service provides reliable and comfortable transportation. We offer competitive rates and excellent customer service to meet all your group travel needs."
        },
        {
            "name": "45 Seater Bus Hire for School Picnic",
            "description": "Organizing a school picnic? Our 45-seater buses are ideal for transporting students and staff. With ample seating and space for backpacks and picnic supplies, our buses ensure a smooth and enjoyable trip. Safety and comfort are our priorities, making sure your school outing is a success."
        },
        {
            "name": "45 Seater Bus Rental for Marriage Function",
            "description": "For large marriage functions, our 45-seater bus rentals offer a convenient and comfortable solution for guest transportation. We provide well-maintained, spacious buses equipped with the necessary amenities to ensure that everyone arrives at the wedding venue relaxed and ready to celebrate."
        },
        {
            "name": "45 Seater Bus Rent for Corporate Picnic",
            "description": "Organizing a corporate picnic requires seamless transportation for your team. Our 45-seater buses are ideal for such events, offering ample space and comfort. Whether you’re heading to a nearby park or a distant resort, our buses ensure that your employees travel comfortably, arriving at the picnic spot ready to enjoy the day."
        },
        {
            "name": "45 Seater Bus for Outstation from Pune",
            "description": "Planning an outstation trip from Pune? Our 45-seater buses are perfect for group travel to destinations beyond the city. Equipped with comfortable seating, air-conditioning, and ample luggage space, our buses provide a smooth and enjoyable ride for any long-distance journey. Whether it's a family vacation, a corporate retreat, or a religious tour, we ensure a comfortable travel experience."
        },
        {
            "name": "45 Seater Bus Rental Services in Pune",
            "description": "Amruta Travels offers comprehensive 45-seater bus rental services in Pune. Our fleet of well-maintained buses is perfect for various group travel needs, including corporate events, weddings, school excursions, and more. With a focus on comfort, safety, and reliability, we provide tailored solutions to meet your specific requirements."
        },
        {
            "name": "45 Seater Bus Rental Services in Hadapsar",
            "description": "For residents and businesses in Hadapsar, Amruta Travels provides reliable 45-seater bus rental services. Whether you need transportation for a wedding, corporate event, or group outing, our buses offer comfort and convenience. Our local service ensures that you receive timely and professional transport solutions tailored to your needs."
        },
        {
            "name": "45 Seater Bus Rental for Wedding in Pune",
            "description": "Make your wedding day special with our 45-seater bus rental services. We offer luxurious and comfortable buses to transport guests to and from the wedding venue in Pune. Our buses come equipped with modern amenities, ensuring a pleasant journey for everyone involved in your special day."
        },
        {
            "name": "45 Seater Bus for Company Picnic",
            "description": "For a company picnic, our 45-seater buses offer the perfect solution for transporting employees. With spacious interiors and comfortable seating, our buses are designed to accommodate large groups and ensure a smooth, enjoyable ride to your picnic destination. We handle the logistics so you can focus on enjoying the event."
        },
        {
            "name": "45 Seater Bus Rent in Pune Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient 45 Seater Bus Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],
    tableData: [
        ["-45 Seater Bus for Hire for Outstation", "-45 Seater Bus for Wedding for Outstation Pune"],
        ["-45 Seater AC Bus for Hire", "-45 Seater Non-AC Bus for Hire"],
        ["-45 Seater AC Bus for Marriage Function", "-45 Seater Bus for Corporate Events"],
        ["-45 Seater Bus on Rent in Pimpri Chinchwad", "-45 Seater Bus Hire for School Picnic"],
        ["-45 Seater Bus Rental for Marriage Function", "-45 Seater Bus Rent for Corporate Picnic"],
        ["-45 Seater Bus for Outstation from Pune", "-45 Seater Bus Rental Services in Pune"],
        ["-45 Seater Bus Rental Services in Hadapsar", ""]
    ],
    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for 45-Seater Bus Rental in Pune?",
            "WhyChoosedescription": "At Amruta Travels, we pride ourselves on offering exceptional 45-seater bus rental services in Pune. Our commitment to providing a superior travel experience sets us apart. Here’s why you should choose us for your next group travel:"
        },
        {
            "WhyChooseheading": "Spacious Comfort:",
            "WhyChoosedescription": "Our 45-seater buses are designed to accommodate large groups with ample space for each passenger. The generous seating arrangement ensures that everyone enjoys a comfortable journey, whether it's a short local trip or a long-distance excursion."
        },
        {
            "WhyChooseheading": "Climate-Controlled Environment:",
            "WhyChoosedescription": "Travel in comfort regardless of external weather conditions. Our buses are equipped with state-of-the-art air-conditioning systems to maintain a pleasant and cool atmosphere throughout your journey, enhancing passenger comfort."
        },
        {
            "WhyChooseheading": "Enhanced Relaxation:",
            "WhyChoosedescription": "With reclining seats that allow for personalized comfort adjustments, our buses ensure a relaxing ride. Whether you're traveling for a few hours or a whole day, you can find your ideal seating position and enjoy the journey."
        },
        {
            "WhyChooseheading": "Modern Entertainment:",
            "WhyChoosedescription": "Long trips are made enjoyable with our advanced entertainment systems. Each bus features high-definition LED TVs and quality sound systems, providing entertainment to keep everyone engaged throughout the ride."
        },
        {
            "WhyChooseheading": "Ample Luggage Space:",
            "WhyChoosedescription": "Our 45-seater buses come with extensive luggage compartments to handle the storage needs of large groups. Whether you have large bags or multiple pieces of equipment, there's ample space to store everything safely and conveniently."
        },
        {
            "WhyChooseheading": "Top-Notch Safety:",
            "WhyChoosedescription": "Safety is our utmost priority. Our buses are equipped with essential safety features such as seat belts, emergency exits, fire extinguishers, and first-aid kits. Additionally, GPS tracking ensures real-time monitoring for added security."
        },
        {
            "WhyChooseheading": "Professional Drivers:",
            "WhyChoosedescription": "Our experienced and professional drivers are adept at navigating both city and outstation routes. Their expertise ensures a smooth and timely travel experience, enhancing your journey with reliability and punctuality."
        },
        {
            "WhyChooseheading": "Impeccable Maintenance:",
            "WhyChoosedescription": "We maintain our fleet to the highest standards. Each 45-seater bus undergoes regular servicing and thorough inspections to ensure it is in excellent working condition. Cleanliness and hygiene are also meticulously upheld."
        },
        {
            "WhyChooseheading": "Transparent Pricing:",
            "WhyChoosedescription": "We offer competitive and transparent pricing with no hidden costs. Our clear pricing structure helps you understand exactly what you're paying for, making budgeting straightforward and stress-free."
        },
        {
            "WhyChooseheading": "Customizable Solutions:",
            "WhyChoosedescription": "We offer flexible rental solutions tailored to your specific needs. Whether you need a bus for a day, a week, or a special event, we can customize our services to match your itinerary and budget."
        }
    ]
    };

    
    
    const faqData = [
        {
            "question": "What is included in the rental of a 45-seater bus?",
            "answer": "The rental includes the bus, driver, fuel, and maintenance. Additional amenities like air-conditioning, entertainment systems, and luggage compartments are also included. We offer transparent pricing with no hidden fees."
        },
        {
            "question": "Can I customize the bus rental service?",
            "answer": "Yes, we provide customizable solutions to fit your specific needs. Whether you need the bus for a corporate event, wedding, or any other occasion, we can tailor the service to your requirements."
        },
        {
            "question": "Are there any extra charges for long-distance travel?",
            "answer": "Long-distance travel might incur additional charges based on the distance covered. However, we offer competitive and transparent pricing, and any extra costs will be communicated upfront."
        },
        {
            "question": "How do I book a 45-seater bus?",
            "answer": "You can book a 45-seater bus by contacting us directly via phone or email. Our customer service team will assist you in confirming availability, discussing your requirements, and finalizing the booking."
        },
        {
            "question": "What safety measures are in place on the bus?",
            "answer": "Our buses are equipped with seat belts, emergency exits, fire extinguishers, first-aid kits, and GPS tracking for real-time monitoring. We prioritize passenger safety and ensure all safety features are in place."
        },
        {
            "question": "Are the buses well-maintained?",
            "answer": "Yes, our buses are regularly serviced and thoroughly inspected to ensure they are in excellent working condition. We also maintain high standards of cleanliness and hygiene."
        },
        {
            "question": "What types of events can I use the 45-seater bus for?",
            "answer": "Our 45-seater buses are suitable for various events including corporate functions, weddings, school trips, family outings, and long-distance tours."
        },
        {
            "question": "Can I request a specific type of bus?",
            "answer": "We offer both air-conditioned and non-air-conditioned buses. You can specify your preference when making a reservation, and we will do our best to accommodate your request."
        },
        {
            "question": "How can I contact Amruta Travels for more information?",
            "answer": "For more information, you can reach out to us via phone, email, or through our website contact form. Our team is available to answer any questions and assist with your booking needs."
        },
        {
            "question": "What is the cancellation policy?",
            "answer": "Our cancellation policy varies based on the booking terms. Please contact us directly to discuss cancellation terms and any applicable fees."
        }
    ];
    
    
    
    const testimonials = [
        {
            "name": "Sanjay Patel",
            "text": "We recently hired a 45-seater bus from Amruta Travels for our company's annual picnic, and the experience was fantastic! The bus was immaculate and equipped with all the modern amenities we needed for a long trip. The driver was highly professional, punctual, and ensured a smooth and enjoyable ride for everyone. Amruta Travels made our event hassle-free and memorable. Highly recommended for anyone in need of reliable and comfortable group transportation in Pune!"
        },
        {
            "name": "Anita Deshmukh",
            "text": "Amruta Travels provided us with a 45-seater bus for a wedding function, and we couldn’t be happier with their service. The bus was spacious, air-conditioned, and impeccably clean. It comfortably accommodated all our guests, and the journey to the wedding venue was seamless. The driver was courteous and well-organized, making sure everyone was taken care of. Amruta Travels truly exceeded our expectations, and I would definitely use their services again for future events."
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
        heading: "45-Seater Bus Rent in Pune Contact Number",
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
  <title>Contact: +91 8421333435 | Amruta Travel | 45 Seater Bus on Rent in Pune | Hire 45 Seater AC & Non-AC Bus for Weddings, Corporate Events & Outstation Trips</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent a 45 Seater Bus for corporate events, weddings, picnics, and outstation trips from Pune. Available for destinations like Shirdi, Konkan, Nashik, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/45-seater-bus-rent-pune",
        "logo": "https://amrutatravel.com/images/45-seater-bus-pune.jpg",
        "image": "https://amrutatravel.com/images/45-seater-bus-pune.jpg",
        "priceRange": "₹25000 - ₹60000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/45-seater-bus-rent-pune",
          "priceCurrency": "INR",
          "price": "25000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "5800"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Kumar"
            },
            "datePublished": "2024-09-05",
            "reviewBody": "We hired a 45-seater bus for a company picnic. The service was excellent, and the bus was comfortable and well-maintained."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anjali Deshmukh"
            },
            "datePublished": "2024-08-12",
            "reviewBody": "The 45-seater bus we rented for our wedding was perfect. Amruta Travels made sure everything was well-organized and on time."
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
          "serviceUrl": "https://amrutatravel.com/45-seater-bus-rent-pune"
        },
        "keywords": "45 Seater Bus Rent in Pune, 45 Seater Bus for Outstation, 45 Seater Bus for Wedding, 45 Seater Bus for Corporate Events, 45 Seater AC Bus Hire, 45 Seater Non-AC Bus Hire, 45 Seater Bus for School Picnic, Pune to Shirdi 45 Seater Bus, 45 Seater Bus for Company Picnic, 45 Seater Bus for Marriage Function"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-13.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs: 45-Seater Bus on Rent in Pune - Amruta Travels:</h3>
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
export default Seater45;