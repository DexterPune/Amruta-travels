
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Seater50(){

  const cardData = 
    {
      keyword: '50-Seater Bus Rental in Pune',
      heading: 'Amruta Travels: 50 Seater Bus on Rent in Pune',

      headingDescription: 'When it comes to large group travel in Pune, Amruta Travels is your top choice for 50-seater bus rentals. Whether you are planning a corporate event, a school excursion, a family reunion, or a wedding, our 50-seater buses offer the perfect blend of comfort, convenience, and reliability. Here’s why our 50-seater buses stand out and what features make them the ideal choice for your group travel needs.',

      top:"Top Features of Our 50-Seater Buses on Rent:",

       topPlaces : [
        {
            "title": "Spacious Seating",
            "description": "Our 50-seater buses are designed with ample seating space to ensure maximum comfort for all passengers. Each seat offers generous legroom and is ergonomically designed to provide a relaxed travel experience, making long journeys more enjoyable."
        },
        {
            "title": "Air-Conditioned Comfort",
            "description": "Beat the Pune heat with our fully air-conditioned 50-seater buses. The powerful air-conditioning system ensures a cool and pleasant environment inside the bus, regardless of the weather outside. This feature is especially beneficial during hot summer months."
        },
        {
            "title": "Reclining Seats",
            "description": "To enhance passenger comfort, our 50-seater buses are equipped with reclining seats. This allows passengers to adjust their seat position to their liking, providing extra comfort on both short and long trips."
        },
        {
            "title": "Advanced Entertainment System",
            "description": "Long journeys can become enjoyable with our advanced entertainment systems. Our buses come equipped with LED TVs, high-quality sound systems, and DVD players, ensuring that passengers are entertained throughout the journey."
        },
        {
            "title": "Ample Luggage Space",
            "description": "Our 50-seater buses provide ample luggage storage space, including overhead compartments and dedicated luggage areas. This ensures that all your travel essentials are accommodated comfortably without compromising passenger seating space."
        },
        {
            "title": "Modern Safety Features",
            "description": "Safety is our top priority. Our 50-seater buses are equipped with modern safety features such as seat belts for every passenger, emergency exits, fire extinguishers, and first-aid kits. GPS tracking is also installed for real-time monitoring, ensuring a secure travel experience."
        },
        {
            "title": "Experienced and Professional Drivers",
            "description": "Our buses are driven by experienced and professional drivers who are well-versed in local routes and traffic conditions. They prioritize safety, punctuality, and courteous service, ensuring a smooth and reliable journey for your group."
        },
        {
            "title": "Well-Maintained Fleet",
            "description": "At Amruta Travels, we maintain our fleet of 50-seater buses to the highest standards. Regular maintenance checks and cleanliness protocols are followed to ensure that each bus is in optimal condition for every journey."
        },
        {
            "title": "Affordable Pricing",
            "description": "We offer competitive and transparent pricing for our 50-seater bus rentals. Our rates are designed to provide excellent value for money without hidden fees, making our services affordable for various group travel needs."
        },
        {
            "title": "Customizable Travel Packages",
            "description": "Every group has unique needs, and we offer customizable travel packages to suit those requirements. Whether you need the bus for a day trip, a multi-day excursion, or a specific event, we can tailor our services to match your itinerary and budget."
        }
    ],     
   "services": [
    {
        "name": "50 Seater Bus Per KM Rate in Pune",
        "description": "Our pricing for 50-seater buses per kilometer in Pune is competitive and transparent. We offer flexible rates based on the distance traveled, ensuring you get the best value for your journey. Whether you’re planning a short trip within Pune or an extended journey, our per-kilometer rates are designed to fit various budgets."
    },
    {
        "name": "Bus on Rent in Pimpri Chinchwad",
        "description": "If you're located in Pimpri Chinchwad and need a 50-seater bus on rent, we have you covered. Our fleet is readily available for both local and outstation travel, ensuring you have reliable transportation right from your doorstep."
    },
    {
        "name": "50 Seater Bus on Rent in Hadapsar",
        "description": "For those in Hadapsar looking for a 50-seater bus on rent, Amruta Travels offers a range of options to meet your needs. From corporate events to family gatherings, our Hadapsar-based rental services ensure convenience and comfort."
    },
    {
        "name": "50 Seater Coach Hire Prices",
        "description": "Our 50-seater coach hire prices are designed to be competitive while delivering high-quality service. We provide detailed quotes based on your specific requirements, ensuring you understand all costs upfront without hidden charges."
    },
    {
        "name": "50 Seater Bus Rent Price",
        "description": "Understanding the 50-seater bus rent price is essential for budgeting your travel. Our rates are structured to provide exceptional value for money, factoring in the duration of hire, distance traveled, and additional amenities required."
    },
    {
        "name": "50 Seater Coach Bus Hire in Pune",
        "description": "When it comes to 50-seater coach bus hire in Pune, Amruta Travels offers premium service. Our coaches are equipped with modern amenities and maintained to the highest standards, ensuring a comfortable and enjoyable journey."
    },
    {
        "name": "50 Seater Bus Hire in Kharadi",
        "description": "Residents of Kharadi can benefit from our 50-seater bus hire services. Whether you need a bus for a corporate outing, a wedding, or a school event, we provide reliable and comfortable transportation solutions right in your area."
    },
    {
        "name": "50 Seater AC Bus Per KM Rate",
        "description": "Our 50-seater AC bus per kilometer rate offers a cool and comfortable travel experience at an affordable price. Enjoy the benefits of air conditioning during your trip with our competitively priced rates."
    },
    {
        "name": "Hire 50 Seater Bus on Rent",
        "description": "When you decide to hire a 50-seater bus on rent, Amruta Travels ensures you get a well-maintained vehicle with a professional driver. Our services cater to a variety of travel needs, from local excursions to outstation trips."
    },
    {
        "name": "50 Seater Bus for Hire for Outstation from Pune",
        "description": "If you’re planning an outstation trip from Pune, our 50-seater buses are perfect for long-distance travel. We offer comfortable and reliable options to ensure a smooth journey to your destination."
    },
    {
        "name": "50 Seater Bus on Rent for Wedding in Pune",
        "description": "Make your wedding transportation seamless with a 50-seater bus on rent for your wedding in Pune. Our buses are designed to accommodate large groups comfortably, ensuring your guests travel in style and comfort."
    },
    {
        "name": "50 Seater Bus on Rent for Corporate Picnic",
        "description": "For corporate picnics, our 50-seater buses provide ample space and comfort. Ensure a pleasant and enjoyable experience for your employees with our reliable and comfortable transportation options."
    },
    {
        "name": "50 Seater Bus on Rent for Corporate Event",
        "description": "When organizing a corporate event, our 50-seater buses are equipped to handle large groups with ease. We offer flexible rental options to suit your event’s requirements, ensuring smooth and efficient transport for your guests."
    },
    {
        "name": "50 Seater Bus on Rent in Viman Nagar",
        "description": "Residents and businesses in Viman Nagar can enjoy our 50-seater bus on rent services. We offer convenient and reliable options for local and outstation travel, ensuring that your group reaches its destination comfortably."
    },
    {
        "name": "50 Seater Bus on Rent for Ashtavinayak Darshan",
        "description": "For Ashtavinayak Darshan, our 50-seater buses provide comfortable transportation for your pilgrimage. Experience a smooth and hassle-free journey with our well-maintained buses and professional drivers."
    },
    {
        "name": "50 Seater Bus on Rent for Jyotirlinga Darshan",
        "description": "Travel in comfort to the Jyotirlinga temples with our 50-seater bus on rent. We offer reliable and spacious transportation options to ensure a serene and enjoyable pilgrimage experience."
    },
    {
        "name": "50 Seater Bus Rent in Pune Contact Number",
        "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient 50 Seater Bus Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
    },

],
"tableData": [
    ["50 Seater Bus per km Rate in Pune", "Bus on Rent in Pimpri Chinchwad"],
    ["50 Seater Bus on Rent Hadapsar", "50 Seater Coach Hire Prices"],
    ["50 Seater Bus Rent Price", "50 Seater Coach Bus Hire in Pune"],
    ["50 Seater Bus Hire in Kharadi", "50 Seater AC Bus per km Rate"],
    ["Hire 50 Seater Bus on Rent", "50 Seater Bus for Hire for Outstation from Pune"],
    ["50 Seater Bus on Rent for Wedding in Pune", "50 Seater Bus on Rent for Corporate Picnic"],
    ["50 Seater Bus on Rent for Corporate Event", "50 Seater Bus on Rent in Viman Nagar"],
    ["50 Seater Bus on Rent for Ashtavinayak Darshan", "50 Seater Bus on Rent for Jyotirlinga Darshan"]
],
"whychoose": [
    {
        "WhyChooseheading": "Why Choose Amruta Travels for 50-Seater Bus Rentals in Pune?",
        "WhyChoosedescription": "When it comes to 50-seater bus rentals in Pune, Amruta Travels stands out for several compelling reasons. We offer a comprehensive range of services designed to meet the diverse needs of our clients, whether it's for corporate events, family gatherings, weddings, or outstation trips. Here’s why you should choose us for your next journey:"
    },
    {
        "WhyChooseheading": "Spacious and Comfortable Buses:",
        "WhyChoosedescription": "Our 50-seater buses are designed with passenger comfort as a top priority. They come equipped with ample legroom, plush seating, and modern amenities, ensuring a pleasant journey for all passengers. Whether you're traveling within Pune or heading out for a longer trip, you'll experience a smooth and enjoyable ride."
    },
    {
        "WhyChooseheading": "Reliable and Experienced Drivers:",
        "WhyChoosedescription": "At Amruta Travels, we pride ourselves on our professional driving team. Our drivers are highly experienced, licensed, and knowledgeable about both local and outstation routes. Their primary goal is to provide a safe and comfortable journey, ensuring timely arrivals and departures."
    },
    {
        "WhyChooseheading": "Well-Maintained Fleet:",
        "WhyChoosedescription": "We maintain our 50-seater buses to the highest standards. Each bus undergoes regular servicing and thorough inspections to ensure optimal performance and safety. Our commitment to vehicle maintenance helps minimize the risk of breakdowns and ensures a reliable travel experience."
    },
    {
        "WhyChooseheading": "Transparent and Competitive Pricing:",
        "WhyChoosedescription": "Our pricing for 50-seater bus rentals is both competitive and transparent. We provide clear and detailed quotes with no hidden fees, allowing you to budget effectively and make informed decisions. Our goal is to offer exceptional value for your investment."
    },
    {
        "WhyChooseheading": "Customizable Rental Options:",
        "WhyChoosedescription": "Whether you need a bus for a wedding, corporate event, school picnic, or an outstation journey, we offer customizable rental options to suit your specific needs. Our team is dedicated to accommodating your preferences and ensuring a seamless travel experience."
    },
    {
        "WhyChooseheading": "Excellent Customer Support:",
        "WhyChoosedescription": "From the initial booking to the end of your journey, our customer support team is available to assist you. We prioritize your needs and are committed to providing prompt, courteous, and effective support to address any questions or concerns you may have."
    },
    {
        "WhyChooseheading": "Punctual and Reliable Service:",
        "WhyChoosedescription": "We understand the importance of timeliness, especially for group travel. Our buses adhere to strict schedules to ensure punctual departures and arrivals. Our goal is to keep your plans on track and provide a hassle-free travel experience."
    },
    {
        "WhyChooseheading": "Variety of Amenities:",
        "WhyChoosedescription": "Depending on your needs, our 50-seater buses can be equipped with various amenities such as air conditioning, audio systems, and Wi-Fi. We offer a range of options to enhance your travel experience and ensure comfort throughout the journey."
    }
]
    };

    
    
    const faqData = [
        {
            "question": "What is included in the rental of a 50-seater bus?",
            "answer": "Our 50-seater bus rental includes comfortable seating, air conditioning, and professional driver services. Additional amenities like audio systems and Wi-Fi may be available upon request, depending on the bus model."
        },
        {
            "question": "How do I book a 50-seater bus with Amruta Travels?",
            "answer": "Booking a 50-seater bus is simple. Contact us via phone, email, or through our online booking form. Provide details such as your travel dates, pick-up and drop-off locations, and any special requirements, and we’ll assist you with the reservation process."
        },
        {
            "question": "Are there any additional charges I should be aware of?",
            "answer": "Our pricing is transparent with no hidden fees. However, additional charges may apply for extra services such as extended travel hours or specific requests. We will provide a detailed quote before finalizing your booking."
        },
        {
            "question": "What is the cancellation policy for a 50-seater bus rental?",
            "answer": "Our cancellation policy depends on the timing of the cancellation. Generally, cancellations made well in advance may incur a nominal fee, while last-minute cancellations could involve higher charges. Please contact our customer service for specific details regarding your booking."
        },
        {
            "question": "Can I request a specific type of 50-seater bus?",
            "answer": "Yes, you can request specific features or types of buses based on availability. We offer a range of options to suit different needs, including luxury and standard models."
        },
        {
            "question": "Are the drivers experienced and licensed?",
            "answer": "Yes, all our drivers are professionally trained, experienced, and hold valid licenses. They are familiar with local routes and dedicated to providing a safe and comfortable travel experience."
        },
        {
            "question": "Can I make changes to my booking after it is confirmed?",
            "answer": "Yes, changes to your booking can be made, subject to availability and any applicable fees. Please contact our customer service team as soon as possible to discuss any modifications to your travel plans."
        },
        {
            "question": "What should I do if I need assistance during my journey?",
            "answer": "If you require any assistance during your journey, contact the driver or our customer service team immediately. We are committed to addressing any concerns or issues promptly to ensure a smooth trip."
        },
        {
            "question": "How far in advance should I book a 50-seater bus?",
            "answer": "To secure your preferred bus and ensure availability, we recommend booking as early as possible. For peak seasons or special events, booking well in advance is advisable to avoid last-minute complications."
        },
        {
            "question": "Are there any restrictions on luggage or other items?",
            "answer": "Standard luggage allowances apply, but we can accommodate additional baggage or special items upon request. Please inform us of any specific needs when making your booking so we can make the necessary arrangements."
        }
    ];
    
    
    
    
    const testimonials = [
        {
            "name": "Rajesh Patel",
            "text": "We recently used Amruta Travels for our company’s annual corporate picnic, and I must say the experience was outstanding. We rented a 50-seater bus for our trip from Pune to a nearby resort, and everything was perfect. The bus was spacious, clean, and well-maintained. The driver was punctual, professional, and ensured a smooth ride for everyone. We appreciated the air-conditioned comfort, which made the journey pleasant despite the warm weather. Amruta Travels provided excellent customer service from start to finish, and I highly recommend them for anyone looking for reliable bus rental services in Pune."
        },
        {
            "name": "Aarti Deshmukh",
            "text": "I had the pleasure of working with Amruta Travels for my daughter’s wedding, where we needed a 50-seater bus to transport guests from Pune to the wedding venue. The service exceeded our expectations in every way. The bus was impeccably clean and equipped with all the necessary amenities to ensure our guests were comfortable. The driver was friendly, experienced, and made sure that the journey was as smooth as possible. The team at Amruta Travels was very accommodating and helped with all our special requests. I’m grateful for their professionalism and would definitely choose them again for any future events."
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
        heading: "50-Seater Bus Rent in Pune Contact Number",
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
  <title>Contact: +91 8421333435 | Amruta Travel | 50 Seater Bus on Rent in Pune | Hire 50 Seater AC & Non-AC Bus for Weddings, Corporate Events & Outstation Trips</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent a 50 Seater Bus for corporate events, weddings, picnics, and outstation trips from Pune. Available for destinations like Shirdi, Konkan, Nashik, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/50-seater-bus-rent-pune",
        "logo": "https://amrutatravel.com/images/50-seater-bus-pune.jpg",
        "image": "https://amrutatravel.com/images/50-seater-bus-pune.jpg",
        "priceRange": "₹45000 - ₹80000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/50-seater-bus-rent-pune",
          "priceCurrency": "INR",
          "price": "45000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "6000"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Kumar"
            },
            "datePublished": "2024-09-05",
            "reviewBody": "We rented a 50-seater bus for a corporate event. The bus was spacious, and the service was excellent. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anjali Deshmukh"
            },
            "datePublished": "2024-08-12",
            "reviewBody": "The 50-seater bus we rented for a wedding was very comfortable, and the journey was smooth. Amruta Travels made the whole experience hassle-free."
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
          "serviceUrl": "https://amrutatravel.com/50-seater-bus-rent-pune"
        },
        "keywords": "50 Seater Bus Rent in Pune, 50 Seater Bus for Outstation, 50 Seater Bus for Wedding, 50 Seater Bus for Corporate Events, 50 Seater AC Bus Hire, 50 Seater Non-AC Bus Hire, 50 Seater Bus for School Picnic, Pune to Shirdi 50 Seater Bus, 50 Seater Bus for Company Picnic, 50 Seater Bus for Marriage Function"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-14.jpg' alt='img'/>
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
      <h3 className='Colo'>Frequently Asked Questions (FAQs) About 50-Seater Bus Rentals in Pune:</h3>
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
export default Seater50;