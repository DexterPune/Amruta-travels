
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  TravelAgent(){

  const cardData = 
    {
      keyword: 'Travel Agents in Pune for Mini Bus Hire',
      heading: ' Amruta Travels: Travel Agents in Pune for Mini Bus Hire',

      headingDescription: 'When you need a mini bus rental in Pune, Amruta Travels stands out as a premier choice. Whether you are planning a corporate outing, a family event, or a school trip, our mini bus hire services offer a range of features designed to ensure comfort, convenience, and reliability. Here is why our mini bus rentals are the best option for your transportation needs:',

      top:"Top Features of Mini Bus Hire with Amruta Travels :",

       topPlaces : [
        {
            "title": "Spacious and Comfortable Seating",
            "description": "Our mini buses are equipped with comfortable seating arrangements that provide ample legroom and support. Each seat is designed to ensure a relaxed journey, making them perfect for both short and long trips."
        },
        {
            "title": "Air Conditioning",
            "description": "We understand the importance of a comfortable climate during travel. Our mini buses come with efficient air conditioning systems to keep the interior cool and pleasant, regardless of the weather outside."
        },
        {
            "title": "Professional Drivers",
            "description": "Our drivers are highly trained and experienced, ensuring a smooth and safe journey. They are familiar with local routes and traffic conditions, so you can rely on them for timely arrivals and departures."
        },
        {
            "title": "Well-Maintained Vehicles",
            "description": "We take pride in maintaining our fleet to the highest standards. Each mini bus undergoes regular servicing and rigorous inspections to ensure it is in top condition, minimizing the risk of breakdowns."
        },
        {
            "title": "Affordable Pricing",
            "description": "Amruta Travels offers competitive pricing for mini bus rentals without compromising on quality. Our transparent pricing structure means there are no hidden fees, giving you peace of mind and value for money."
        },
        {
            "title": "Customizable Options",
            "description": "We offer a range of mini bus models to suit different needs and preferences. Whether you require luxury features or basic amenities, we can customize the rental to match your specific requirements."
        },
        {
            "title": "Entertainment Systems",
            "description": "For added convenience and enjoyment, many of our mini buses are equipped with entertainment systems, including audio and video options. This feature is ideal for keeping passengers entertained during longer journeys."
        },
        {
            "title": "Flexible Rental Terms",
            "description": "Whether you need a mini bus for a few hours or several days, we offer flexible rental terms to accommodate your schedule. Our team works with you to ensure that your transportation needs are met efficiently."
        },
        {
            "title": "Safe and Secure Travel",
            "description": "Safety is our top priority. Our mini buses are fitted with safety features such as seat belts, first aid kits, and fire extinguishers. Additionally, our drivers adhere to all safety regulations to ensure a secure travel experience."
        },
        {
            "title": "Excellent Customer Service",
            "description": "From booking to the end of your journey, our customer service team is dedicated to providing exceptional support. We are available to assist with any questions or concerns, ensuring a hassle-free experience."
        }
    ],    
     services : [
        {
            "name": "Tour Agencies in Pune",
            "description": "Pune offers a range of tour agencies dedicated to making your travel experience memorable and hassle-free. Whether you’re looking for local tours, outstation trips, or specialized travel services, Pune’s tour agencies are equipped to cater to your needs with professionalism and expertise."
        },
        {
            "name": "Bus Hire Agency in Pune",
            "description": "When it comes to group travel, finding a reliable bus hire agency in Pune is crucial. From small groups to large gatherings, our bus hire services ensure comfort and convenience with well-maintained vehicles and experienced drivers, making your journey smooth and enjoyable."
        },
        {
            "name": "Tourist Agency in Pune",
            "description": "Tourist agencies in Pune specialize in offering tailored travel solutions for both domestic and international destinations. They provide comprehensive services including itinerary planning, bookings, and guided tours, ensuring a seamless travel experience from start to finish."
        },
        {
            "name": "Travel Agents in Pune",
            "description": "Travel agents in Pune are experts in arranging travel plans that suit your preferences and budget. Whether it’s for leisure, business, or pilgrimage, travel agents offer personalized services to help you plan and execute your trips efficiently."
        },
        {
            "name": "Pune Tours and Travels Agents",
            "description": "Explore Pune’s diverse attractions with the help of Pune tours and travels agents. They offer a variety of packages and guided tours to showcase the city’s historical sites, cultural landmarks, and natural beauty, ensuring you get the most out of your visit."
        },
        {
            "name": "Bus Hire Agents in Pune",
            "description": "For all your bus hire needs, bus hire agents in Pune are at your service. They offer a range of vehicles for different purposes, from corporate events to family trips, ensuring you get the right bus for your specific requirements."
        },
        {
            "name": "Best Traveller Bus on Rent in Pune",
            "description": "Looking for the best traveller bus on rent in Pune? Our fleet includes top-of-the-line traveller buses equipped with modern amenities, ensuring a comfortable and luxurious travel experience for groups of all sizes."
        },
        {
            "name": "Urbania Bus on Rent in Pune for Corporate Outing",
            "description": "For corporate outings, an Urbania bus on rent in Pune offers style and comfort. With premium features and ample space, Urbania buses are ideal for business events, team-building activities, and client transportation."
        },
        {
            "name": "Travel Agents in Pimpri Chinchwad",
            "description": "Travel agents in Pimpri Chinchwad offer local expertise and personalized service for travelers in the area. They provide comprehensive travel solutions, from booking flights and accommodations to arranging local tours and transportation."
        },
        {
            "name": "Pune Travel Agency Contact Number",
            "description": "For all your travel inquiries and bookings, having the contact number of a reliable Pune travel agency is essential. Reach out to them for assistance with travel plans, tour bookings, and any other travel-related needs."
        },
        {
            "name": "Bus Hire for Events Agency",
            "description": "If you’re organizing an event and need reliable transportation, a bus hire for events agency can provide tailored solutions to accommodate your guests comfortably. From weddings to corporate functions, our services ensure efficient and comfortable travel for all attendees."
        },
        {
            "name": "Bus Hire for Corporate Events & Tours",
            "description": "For corporate events and tours, our bus hire services offer a professional and comfortable solution. We provide a range of buses equipped with modern amenities to cater to the needs of corporate groups, ensuring a smooth and enjoyable travel experience."
        },
        {
            "name": "Bus Booking for Corporate Events",
            "description": "Bus booking for corporate events requires careful planning and coordination. Our services include timely and efficient bus booking solutions to handle the transportation needs of your corporate events, ensuring that everything runs smoothly."
        },
        {
            "name": "Bus on Hire for Pune to Mahabaleshwar Package Tour",
            "description": "Travel from Pune to Mahabaleshwar in comfort with our bus on hire service. Ideal for package tours, our buses are equipped to provide a pleasant and enjoyable journey to this popular hill station, complete with amenities to enhance your travel experience."
        },
        {
            "name": "Tour Operators in Pune",
            "description": "Tour operators in Pune specialize in organizing and managing travel itineraries for various destinations. They offer expertise in planning trips, arranging accommodations, and coordinating activities to ensure a memorable travel experience."
        },
        {
            "name": "Best Tours and Travel Company in PCMC",
            "description": "For exceptional travel services in PCMC, the best tours and travel company offers comprehensive solutions for all your travel needs. From local tours to international travel arrangements, they provide reliable and efficient services."
        },
        {
            "name": "Best Tours and Travel Company in Pune",
            "description": "In Pune, the best tours and travel company delivers outstanding service for all types of travel requirements. They offer a wide range of travel solutions, including customized tour packages, transportation, and accommodation arrangements, ensuring a seamless travel experience."
        },
        {
            "name": "Travel Agents in Pune for Mini Bus Hire Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Travel Agents in Pune for Mini Bus Hire. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],   

        "tableData": [
        ["Tour Agencies in Pune", "Bus Hire Agency in Pune"],
        ["Travel Agents in Pune", "Pune Tours and Travels Agents"],
        ["Bus Hire Agents in Pune", "Best Traveller Bus on Rent in Pune"],
        ["Urbania Bus on Rent in Pune for Corporate Outing", "Travel Agents in Pimpri Chinchwad"],
        ["Pune Travel Agency Contact Number", "Bus Hire for Events Agency"],
        ["Bus Booking for Corporate Events", "Bus on Hire for Pune to Mahabaleshwar Package Tour"],
        ["Tour Operators in Pune", "Bus Hire for Corporate Events & Tours"],
        ["Tourist Agency in Pune", "Best Tours and Travel Company in PCMC"],
        ["Best Tours and Travel Company in Pune", ""]
    ],
    
    
    
    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Mini Bus Hire in Pune?",
            "WhyChoosedescription": "When it comes to renting a mini bus in Pune, Amruta Travels excels in providing comfort, reliability, and exceptional service. Here’s why:"
        },
        {
            "WhyChooseheading": "Extensive Fleet:",
            "WhyChoosedescription": "We offer a diverse range of mini buses to suit different group sizes and travel needs. Whether you need a bus for a corporate event, family gathering, or a school trip, we have the right vehicle for you."
        },
        {
            "WhyChooseheading": "Exceptional Comfort:",
            "WhyChoosedescription": "Our mini buses are designed with passenger comfort in mind. Equipped with plush seating, air conditioning, and modern amenities, we ensure a pleasant travel experience for all passengers."
        },
        {
            "WhyChooseheading": "Reliable Service:",
            "WhyChoosedescription": "Punctuality and reliability are our priorities. Our travel agents work diligently to ensure that your mini bus is on time and ready for your journey, every time."
        },
        {
            "WhyChooseheading": "Competitive Pricing:",
            "WhyChoosedescription": "We offer competitive rates for our mini bus hire services without compromising on quality. Our transparent pricing structure ensures that you receive excellent value for your money."
        },
        {
            "WhyChooseheading": "Professional Drivers:",
            "WhyChoosedescription": "Our experienced drivers are well-trained and knowledgeable about Pune’s routes and outstation destinations. They prioritize safety and customer satisfaction, providing a smooth and secure ride."
        },
        {
            "WhyChooseheading": "Customized Solutions:",
            "WhyChoosedescription": "We understand that each trip is unique. Our travel agents provide personalized solutions to cater to your specific needs, whether it’s for a special event, a corporate function, or a leisurely outing."
        },
        {
            "WhyChooseheading": "Excellent Customer Service:",
            "WhyChoosedescription": "Our dedicated customer service team is available to assist you at every step of the process. From booking to the end of your journey, we ensure that your experience is seamless and hassle-free."
        },
        {
            "WhyChooseheading": "Well-Maintained Vehicles:",
            "WhyChoosedescription": "All our mini buses undergo regular maintenance and safety checks to ensure they are in optimal condition. We take pride in providing clean, reliable, and well-maintained vehicles for your trips."
        },
        {
            "WhyChooseheading": "Flexible Booking Options:",
            "WhyChoosedescription": "We offer flexible booking options to accommodate your schedule and requirements. Whether you need a bus for a few hours or several days, we can tailor our services to fit your needs."
        },
        {
            "WhyChooseheading": "Commitment to Safety:",
            "WhyChoosedescription": "Safety is our top priority. Our mini buses are equipped with essential safety features, and our drivers adhere to all safety regulations to ensure a secure journey for all passengers."
        }
    ]
  };

    
    
  const faqData = [
    {
        "question": "What types of mini buses are available for hire?",
        "answer": "We offer a range of mini buses, including options for 14-seater, 17-seater, 20-seater, and 25-seater capacities. Each bus is equipped with comfortable seating and modern amenities to suit your travel needs."
    },
    {
        "question": "How can I book a mini bus with Amruta Travels?",
        "answer": "Booking a mini bus is simple. You can contact us via phone or email, or use our online booking system. Our travel agents will assist you in choosing the right vehicle and finalizing the details of your booking."
    },
    {
        "question": "What are the payment options for mini bus hire?",
        "answer": "We accept various payment methods including cash, credit/debit cards, and online transfers. Payment details will be discussed and finalized during the booking process."
    },
    {
        "question": "Are the mini buses equipped with air conditioning?",
        "answer": "Yes, all our mini buses are equipped with air conditioning to ensure a comfortable ride for all passengers, regardless of the weather."
    },
    {
        "question": "Can I customize my mini bus hire package?",
        "answer": "Absolutely. We offer customizable packages to meet your specific needs. Whether you require additional amenities or special arrangements, our travel agents will work with you to tailor the package to your preferences."
    },
    {
        "question": "Are the drivers experienced and professional?",
        "answer": "Yes, all our drivers are experienced, professional, and well-trained. They are familiar with local routes and committed to providing a safe and pleasant journey."
    },
    {
        "question": "What should I do if there is a problem during the journey?",
        "answer": "Our customer service team is available to assist you at any time. If you encounter any issues during your journey, please contact us immediately so we can address the situation promptly."
    },
    {
        "question": "How far in advance should I book a mini bus?",
        "answer": "We recommend booking as early as possible to ensure availability, especially during peak times or for special events. Early booking helps us accommodate your preferred vehicle and schedule."
    },
    {
        "question": "Are there any additional charges or hidden fees?",
        "answer": "No, we believe in transparency. All costs will be clearly outlined in your booking agreement, and there will be no hidden fees. If there are any additional charges, they will be communicated to you upfront."
    },
    {
        "question": "What happens if I need to cancel or modify my booking?",
        "answer": "Cancellation and modification policies will be explained at the time of booking. We strive to be flexible and accommodate changes, but please note that there may be certain conditions and fees depending on the timing of your request."
    }
];

    
    
    
    
    
const testimonials = [
    {
        "name": "Mr. Rakesh Deshmukh",
        "text": "I recently used Amruta Travels for a corporate event and was thoroughly impressed with their mini bus hire service. The Urbania mini bus we rented was immaculate, with plush seating and top-notch amenities. Our team of 17 enjoyed a comfortable and smooth ride, which was crucial for a long journey from Pune to Mumbai. The driver was professional and well-acquainted with the route, ensuring we arrived on time without any hassle. The booking process was straightforward, and the pricing was transparent with no hidden charges. Amruta Travels has certainly set a high standard for group transportation in Pune. Highly recommended for anyone needing reliable and luxurious mini bus rentals."
    },
    {
        "name": "Ms. Neha Sharma",
        "text": "I booked a mini bus from Amruta Travels for a family reunion, and the experience was outstanding. The Force Urbania mini bus we hired was spacious and comfortable, perfect for our 13-seater requirement. The air-conditioning worked perfectly, keeping us cool throughout the trip. The entertainment system was a hit with the kids, making the journey enjoyable for everyone. The driver was punctual and courteous, adding to the overall excellent service. What stood out the most was the transparency in pricing and the seamless booking process. If you’re looking for a top-notch mini bus hire service in Pune, Amruta Travels is the way to go!"
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
        heading: " Travel Agents in Pune for Mini Bus Hire Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Travel Agents in Pune for Mini Bus Hire | Bus Hire for Corporate Events, Tours, Outings</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Top Travel Agents in Pune for Mini Bus Hire, Bus Rentals for Corporate Events, Tours, and Outstation Travel. Book Urbania Buses and Mini Buses for Corporate Outings, Weddings, and More.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/travel-agents-in-pune-for-mini-bus-hire",
        "logo": "https://amrutatravel.com/images/travel-agents-mini-bus-pune.jpg",
        "image": "https://amrutatravel.com/images/travel-agents-mini-bus-pune.jpg",
        "priceRange": "₹3000 - ₹7000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/travel-agents-in-pune-for-mini-bus-hire",
          "priceCurrency": "INR",
          "price": "3000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2000"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Kumar"
            },
            "datePublished": "2024-10-05",
            "reviewBody": "Booked a mini bus for a corporate outing to Mahabaleshwar. The travel agency was professional, and the bus was well-maintained. Very satisfied with the service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Pooja Deshmukh"
            },
            "datePublished": "2024-09-20",
            "reviewBody": "Excellent service for our family trip. The bus was clean, and the driver was very friendly. Highly recommend Amruta Travels for bus hire in Pune."
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
          "serviceUrl": "https://amrutatravel.com/travel-agents-in-pune-for-mini-bus-hire"
        },
        "keywords": "Tour Agencies in Pune, Bus Hire Agency in Pune, Tourist Agency in Pune, Travel Agents in Pune, Mini Bus on Rent for Corporate Events, Urbania Bus for Rent in Pune, Travel Agents in Pimpri Chinchwad, Bus Booking for Corporate Events, Bus Hire for Mahabaleshwar Package, Best Tours and Travel Company in Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-52.jpg' alt='img'/>
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
export default TravelAgent;