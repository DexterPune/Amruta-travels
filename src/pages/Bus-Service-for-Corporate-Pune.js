
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  buserviceForCorporatePune(){

  const cardData = 
    {
      keyword: 'Bus Services for Corporate Events in Pune',
      heading: ' Bus Services for Corporate Events in Pune ₹58 Per Km',

      headingDescription: 'When it comes to corporate events, the transportation needs of your team, clients, or partners are critical to ensuring smooth and efficient operations. Amruta Travels offers top-notch bus services tailored specifically for corporate events in Pune. Whether you’re organizing a conference, team-building activity, or a business retreat, our diverse fleet and professional services are designed to meet all your corporate transportation needs. Here’s a look at the top bus services provided by Amruta Travels for corporate functions in Pune:',

      top:"Top Bus Service for Corporate Pune",

       topPlaces : [
        {
            "title": "Luxury Executive Buses:",
            "description": "Our luxury executive buses are perfect for high-profile corporate events where comfort and style matter. Equipped with plush seating, Wi-Fi, and entertainment systems, these buses provide a premium travel experience for your executives and clients."
        },
        {
            "title": "Standard Corporate Coaches:",
            "description": "For more traditional corporate events, our standard corporate coaches offer spacious seating, air conditioning, and ample legroom. These coaches are ideal for transporting large groups to conferences, seminars, or workshops."
        },
        {
            "title": "Shuttle Services:",
            "description": "Our shuttle services are designed for efficient transportation within the city. Whether you need to move employees between different office locations or transport guests from hotels to event venues, our shuttle services ensure timely and reliable travel."
        },
        {
            "title": "Mini Buses:",
            "description": "Perfect for smaller corporate groups, our mini buses offer the flexibility and convenience needed for various corporate outings. These buses come with comfortable seating and are suitable for local travel or short trips."
        },
        {
            "title": "Executive Mini Coaches:",
            "description": "For medium-sized corporate groups, our executive mini coaches provide a balance of comfort and efficiency. With amenities like adjustable seating, climate control, and modern interiors, these coaches are well-suited for business trips and client transportation."
        },
        {
            "title": "VIP Charter Buses:",
            "description": "When you need to make a lasting impression, our VIP charter buses offer the ultimate in luxury and sophistication. Featuring high-end interiors, personalized services, and advanced amenities, these buses are ideal for high-profile events and important client meetings."
        },
        {
            "title": "Conference Buses:",
            "description": "Our conference buses are equipped with features to facilitate on-the-go meetings and discussions. With built-in AV equipment, spacious work areas, and comfortable seating, these buses ensure that productivity is maintained even during transit."
        },
        {
            "title": "Employee Transport Buses:",
            "description": "For regular employee transportation, our employee transport buses provide a cost-effective and reliable solution. These buses are designed for daily commutes or scheduled office pick-ups and drop-offs, ensuring that your team arrives on time and refreshed."
        },
        {
            "title": "Event Shuttle Buses:",
            "description": "Tailored for large-scale corporate events, our event shuttle buses can handle high volumes of passengers with ease. These buses are perfect for transporting attendees to and from trade shows, conventions, and corporate gatherings."
        },
        {
            "title": "Customizable Corporate Packages:",
            "description": "We offer customizable packages to meet your specific corporate transportation needs. From flexible scheduling to bespoke amenities, our packages are designed to align with your event requirements and budget."
        }
    ],   

    "services": [
      {
        "name": "Corporate Bus Services in Hadapsar",
        "description": "Hadapsar is a bustling hub in Pune, and our corporate bus services here are designed to meet the needs of businesses in the area. Whether you require regular employee transport or need to arrange client pick-ups, our fleet of well-maintained buses ensures timely and comfortable travel. Our services are ideal for business meetings, office commutes, and special events."
      },
      {
        "name": "Corporate Bus Services in Viman Nagar",
        "description": "Viman Nagar is a key business district, and we offer tailored corporate bus services to cater to its demands. Our services include punctual pick-ups and drop-offs, high-end vehicles for executive transport, and flexible scheduling to accommodate your corporate requirements. Enjoy a smooth ride to and from Viman Nagar with our professional drivers and modern buses."
      },
      {
        "name": "Corporate Bus Services in Hinjewadi",
        "description": "As a major IT and business hub, Hinjewadi requires reliable transportation solutions. Our corporate bus services in Hinjewadi are designed to provide efficient and comfortable travel for your business needs. From daily office shuttles to client transportation, our buses are equipped to handle all your corporate travel requirements with professionalism and ease."
      },
      {
        "name": "Corporate Bus Services in Baner and Aundh",
        "description": "Baner and Aundh are prominent business areas in Pune, and we offer specialized corporate bus services for these localities. Our services include executive buses for high-profile meetings, shuttle services for large groups, and flexible options to suit your scheduling needs. Ensure your team and clients travel comfortably with our reliable bus services."
      },
      {
        "name": "Bus Service for Corporate in Pimpri Chinchwad",
        "description": "Pimpri Chinchwad is an important industrial area, and our bus services here are tailored for corporate clients. Whether you need transportation for a company event, regular employee shuttles, or client visits, our buses provide a reliable and comfortable solution. Contact us to learn more about our bus services in Pimpri Chinchwad and how we can assist with your corporate transportation needs."
      },
      {
        "name": "Tempo Traveller on Rent in Pune for Corporate Events",
        "description": "Amruta Travels offers tempo travellers on rent in Pune for corporate events, providing the perfect solution for group transportation. Our tempo travellers are spacious, comfortable, and ideal for corporate outings, team-building events, and client shuttles. With a range of options to suit your needs, our service ensures a smooth and efficient travel experience."
      },
      {
        "name": "14, 17, 25, 32, 35 Seater Tempo Traveller on Rent in Pune for Corporate Events",
        "description": "Amruta Travels provides a variety of 14, 17, 25, 32, and 35 seater tempo travellers on rent in Pune. Whether you have a small team or a larger group, our tempo travellers are equipped to accommodate different group sizes, offering comfort and convenience for all your corporate transportation needs."
      },
      {
        "name": "Mini Bus on Rent for Corporate Events Near Me",
        "description": "Looking for a mini bus on rent for corporate events near me? Amruta Travels offers mini buses that are ideal for corporate gatherings, team outings, and special events. Our mini buses are well-maintained, comfortable, and equipped with amenities to ensure a pleasant journey. Contact us for availability and bookings in your area."
      },
      {
        "name": "Mini Bus on Rent for Corporate Events",
        "description": "Amruta Travels provides mini buses on rent for corporate events, offering a convenient and cost-effective solution for group transportation. Perfect for office outings, seminars, and corporate functions, our mini buses provide ample space and comfort for your team. Ensure a hassle-free travel experience with our reliable mini bus rental service."
      },
      {
        "name": "Mini Bus on Rent for Corporate Events in Hinjewadi",
        "description": "For mini bus on rent for corporate events in Hinjewadi, Amruta Travels has you covered. Our mini buses are ideal for transporting groups to corporate events, workshops, and team-building activities. Enjoy a comfortable and efficient journey with our well-maintained vehicles and professional drivers."
      },
      {
        "name": "Mini Bus on Rent for Corporate Events in Hadapsar Pune",
        "description": "Amruta Travels offers mini buses on rent for corporate events in Hadapsar Pune, providing reliable transportation for your business needs. Whether it's for a team outing or a corporate function, our mini buses are equipped to handle your group with comfort and ease. Contact us to book your mini bus today."
      },
      {
        "name": "Mini Bus on Rent for Corporate Events in Kharadi",
        "description": "Need a mini bus on rent for corporate events in Kharadi? Amruta Travels provides top-quality mini bus rental services, perfect for office events, client shuttles, and team-building activities. Our mini buses are designed for comfort and efficiency, ensuring a smooth travel experience for your corporate group."
      },
      {
        "name": "Mini Bus on Rent for Corporate Events in Viman Nagar",
        "description": "For mini bus on rent for corporate events in Viman Nagar, Amruta Travels offers the ideal solution. Our mini buses are spacious and comfortable, perfect for group transportation to corporate functions, meetings, and outings. Enjoy a stress-free journey with our reliable and well-maintained mini buses."
      },
      {
        "name": "Bus Service for Corporate Pune Contact Number",
        "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus Service for Corporate Pune. We ensure a smooth and enjoyable ride for all our customers."
      }
    ],

 tableData : [
    ["- Bus Service for Corporate Office Pune", "- Bus Service for Corporate Office Picnic"],
    ["- Amruta Travels Pune", "- Bus Service for Corporate Outing Pune"],
    ["- Mini Bus for Corporate Outing", "- AC/Non-AC Bus for Corporate Events"],
    ["- 17, 26, 32, 35, 45 Seater Bus for Corporate Outing", "- Employee Transportation Services in Pune"],
    ["- Bus On Rent For Corporate in Pune", "- Corporate bus Services in Hadapsar"],
    ["- Corporate bus Services in Viman Nagar", "- Corporate bus Services in Hinjewadi"],
    ["- Corporate bus Services in Baner Aundh", "- Bus Rental for Corporate Events"],
    ["- Bus Service for Corporate in Pimpri Chinchwad", "- Bus Service for Corporate in Pimpri Chinchwad Contact Number"],
    ["- Tempo Traveller on Rent in Pune for Corporate Events", ""]
],

"whychoose": [
    {
        "WhyChooseheading": "Diverse Fleet:",
        "WhyChoosedescription": "Our extensive fleet includes a range of vehicles from standard buses to luxury coaches, accommodating groups of all sizes and ensuring the right fit for your corporate needs."
    },
    {
        "WhyChooseheading": "Modern Amenities:",
        "WhyChoosedescription": "We equip our buses with top-notch amenities such as comfortable seating, air conditioning, Wi-Fi, and entertainment systems, ensuring a pleasant and productive travel experience for your team."
    },
    {
        "WhyChooseheading": "Professional Drivers:",
        "WhyChoosedescription": "Our drivers are highly trained professionals committed to safety and punctuality. They provide reliable and courteous service, enhancing the overall travel experience for your corporate events."
    },
    {
        "WhyChooseheading": "Tailored Solutions:",
        "WhyChoosedescription": "We offer customized transportation solutions to meet the specific requirements of your corporate functions, including employee shuttles, client transport, and large-scale events."
    },
    {
        "WhyChooseheading": "Reliability:",
        "WhyChoosedescription": "Punctuality and dependability are our top priorities. We ensure that your transportation needs are met without any disruptions, helping you stick to your schedule."
    },
    {
        "WhyChooseheading": "Safety and Cleanliness:",
        "WhyChoosedescription": "Our buses undergo regular maintenance and rigorous cleaning protocols to ensure the highest standards of safety and hygiene for your passengers."
    },
    {
        "WhyChooseheading": "Competitive Pricing:",
        "WhyChoosedescription": "We provide transparent and competitive pricing, offering excellent value for money. Our flexible packages cater to different budgets and event sizes."
    },
    {
        "WhyChooseheading": "24/7 Support:",
        "WhyChoosedescription": "Our dedicated customer service team is available around the clock to assist with bookings, inquiries, and any issues, ensuring a smooth and hassle-free experience."
    },
    {
        "WhyChooseheading": "Experience and Expertise:",
        "WhyChoosedescription": "With years of experience in corporate transport, Amruta Travels understands the unique needs of businesses and delivers services that align with professional standards."
    },
    {
        "WhyChooseheading": "Positive Feedback:",
        "WhyChoosedescription": "Our clients consistently praise our services for their efficiency, reliability, and professionalism. The positive feedback we receive reflects our commitment to exceptional service."
    }
]

};
const faqData = [
    {
        "question": "What types of buses are available for corporate events?",
        "answer": "Amruta Travels offers a variety of buses for corporate events, including standard buses, luxury coaches, and mini buses. Each option comes with modern amenities to suit your specific needs."
    },
    {
        "question": "How can I book a bus for a corporate event?",
        "answer": "You can book a bus for your corporate event through our website, mobile app, or by contacting our customer support team. Our booking process is simple and efficient, designed for your convenience."
    },
    {
        "question": "What is the pricing structure for corporate bus services?",
        "answer": "Pricing varies based on the type of bus, duration of service, and any additional requirements. For detailed pricing, please contact our customer support team or use our online booking system for an estimate."
    },
    {
        "question": "Are there any additional charges for corporate bus services?",
        "answer": "While our pricing is transparent, additional charges may apply for extra services such as extended rental periods, additional stops, or special requests. We ensure clear communication of any extra costs."
    },
    {
        "question": "How long can I book the bus for a corporate event?",
        "answer": "You can book the bus for as long as needed, from a few hours to multiple days. We offer flexible rental options to accommodate the duration of your corporate event."
    },
    {
        "question": "Can I customize the bus service for my corporate needs?",
        "answer": "Yes, we offer customizable bus services to meet your specific requirements. Whether you need specific amenities, routes, or schedules, we can tailor the service to fit your needs."
    },
    {
        "question": "Are the buses equipped with amenities for a comfortable journey?",
        "answer": "Yes, our buses come equipped with amenities such as air conditioning, comfortable seating, Wi-Fi, and entertainment systems. We aim to provide a comfortable and enjoyable travel experience."
    },
    {
        "question": "Is the bus service available 24/7?",
        "answer": "Yes, our bus services are available 24/7 to accommodate events and schedules at any time of the day or night."
    },
    {
        "question": "What measures are taken to ensure the safety and cleanliness of the buses?",
        "answer": "We prioritize safety and cleanliness by regularly maintaining our buses and following strict cleaning protocols. Our buses are thoroughly inspected and cleaned before each trip."
    },
    {
        "question": "How can I contact customer support for bus service inquiries?",
        "answer": "You can reach our customer support team via our website, mobile app, or by phone. We are available around the clock to assist with bookings, inquiries, and any issues you may have."
    }
];
const testimonials = [
    {
        "name": "Ravi Sharma",
        "text": "Amruta Travels provided us with exceptional bus service for our recent corporate conference in Pune. From the initial booking to the final drop-off, their team was professional, punctual, and attentive to our needs. The buses were well-maintained and equipped with all the necessary amenities, making the journey comfortable for all our attendees. We particularly appreciated their flexibility in accommodating our last-minute changes. We highly recommend Amruta Travels for any corporate transportation needs!"
    },
    {
        "name": "Sneha Patel",
        "text": "We had a great experience with Amruta Travels for our corporate team-building event. Their fleet of buses was perfect for our large group, and the level of service exceeded our expectations. The drivers were courteous and ensured our team arrived on time without any hassle. The amenities on the buses made the commute pleasant and productive. It was reassuring to know that everything was taken care of so efficiently. We will definitely use Amruta Travels again for future corporate events."
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
        heading: "Bus Service for Corporate Pune Contact Number:",
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
  <title>Bus Rental for Corporate Events in Pune ₹58 Per Km</title>

  <meta name="description" content="Book luxury Force Urbania, Tempo Traveller, or buses for your corporate events in Pune. Available in 13, 17, and 32-seater options, our vehicles provide comfort and convenience at affordable rates. Perfect for team outings, meetings, and conferences. Rent now for a smooth and stylish ride!" />

  <meta name="keywords" content="Urbania on Rent in Pune, Urbania Hire in Pune, Urbania Bus Rental Service in Pune, Urbania on Rent in Mumbai, Urbania Rent in Lonavala, Force Urbania on Rent in Pune, Tata Winger on Rent in Pune, Tempo Traveller on Rent in Pune, 17 Seater Tempo Traveller on Rent in Pune, Luxury Tempo Traveller on Rent in Pune, 13 Seater Tempo Traveller on Rent in Pune, 32 Seater Luxury Bus on Rent in Pune, Mini Bus on Rent in Pune, Bus on Rent in Pune, Volvo Bus Hire in Pune, 20 Seater Luxury Bus on Rent Pune, Wedding Bus Hire in Pune, Bus Hire for Outstation in Pune, Pune to Mahabaleshwar Tempo Traveller on Rent, Bus Rental for Corporate Events in Pune" />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Urbania on Rent in Pune | Luxury Tempo Traveller & Bus Rental | Amruta Travel" />
  <meta property="og:description" content="Rent luxury Force Urbania, Tempo Traveller, and buses in Pune for outstation trips, weddings, corporate events, and local tours. Choose from 13, 17, 32 seater vehicles. Affordable rates." />
  <meta property="og:image" content="https://amrutatravel.com/images/force-urbania-rental-pune.jpg" />
  <meta property="og:url" content="https://amrutatravel.com/luxury-force-urbania-rent-pune" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent luxury Force Urbania, Tempo Traveller, and buses in Pune for outstation trips, weddings, corporate events, and local tours. Choose from 13, 17, and 32-seater vehicles at affordable rates.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/Bus-Service-for-Corporate-Pune",
        "logo": "https://amrutatravel.com/images/force-urbania-rental-pune.jpg",
        "image": "https://amrutatravel.com/images/force-urbania-rental-pune.jpg",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/Bus-Service-for-Corporate-Pune",
          "priceCurrency": "INR",
          "price": "3000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "6200"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit Patel"
            },
            "datePublished": "2024-10-15",
            "reviewBody": "Booked the luxury Force Urbania for a trip to Lonavala. Excellent service, comfortable seats, and a smooth ride. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Shalini Rao"
            },
            "datePublished": "2024-08-02",
            "reviewBody": "The Force Urbania was perfect for our family trip to Bhimashankar. Spacious, clean, and well-maintained. Would definitely book again!"
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
          "serviceUrl": "https://amrutatravel.com/Bus-Service-for-Corporate-Pune"
        },
        "keywords": "Urbania on Rent in Pune, Urbania Hire in Pune, Urbania Bus Rental Service in Pune, Urbania on Rent in Mumbai, Urbania Rent in Lonavala, Force Urbania on Rent in Pune, Tata Winger on Rent in Pune, Tempo Traveller on Rent in Pune, 17 Seater Tempo Traveller on Rent in Pune, Luxury Tempo Traveller on Rent in Pune, 13 Seater Tempo Traveller on Rent in Pune, 32 Seater Luxury Bus on Rent in Pune, Mini Bus on Rent in Pune, Bus on Rent in Pune, Volvo Bus Hire in Pune, 20 Seater Luxury Bus on Rent Pune, Wedding Bus Hire in Pune, Bus Hire for Outstation in Pune, Pune to Mahabaleshwar Tempo Traveller on Rent, Bus Rental for Corporate Events in Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-58.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Bus Service for Corporate in Pune with Amruta Travels:</h3>
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
export default buserviceForCorporatePune;