
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Hinjewadibus(){

  const cardData = 
    {
      keyword: 'Buses on Rent in Hinjewadi',
      heading: ' Amruta Travels: Buses on Rent in Hinjewadi',

      headingDescription: 'When you need reliable and comfortable transportation in Hinjewadi, Pune, look no further than Amruta Travels. Our diverse fleet of buses is designed to cater to various needs, from corporate events to family outings. Discover our top bus rental options in Hinjewadi that promise a seamless and enjoyable travel experience:',

      top:"Top Bus on Rent in Hinjewadi:",

       topPlaces : [
        {
            "title": "32-Seater Luxury Bus:",
            "description": "For medium-sized groups that desire both comfort and elegance, our 32-seater luxury bus is an excellent choice. Equipped with plush seating, air conditioning, and entertainment systems, it’s ideal for corporate meetings, weddings, and special events. Keywords: 32-seater bus on rent Kharadi, luxury bus rental Kharadi."
        },
        {
            "title": "35-Seater Mini Bus:",
            "description": "The 35-seater mini bus from Amruta Travels is perfect for slightly larger groups who need ample space. This bus is great for school trips, community events, or family gatherings, offering a comfortable and smooth travel experience. Keywords: 35-seater mini bus rental Kharadi, group travel bus Kharadi."
        },
        {
            "title": "40-Seater Standard Bus:",
            "description": "If you’re organizing a tour or event for a bigger group, our 40-seater standard bus provides ample space without compromising on comfort. It’s ideal for group excursions, city tours, or any occasion requiring a moderate seating capacity. Keywords: 40-seater bus hire Kharadi, standard bus rental Kharadi."
        },
        {
            "title": "45-Seater Executive Bus:",
            "description": "For those seeking a premium travel experience, our 45-seater executive bus offers luxury and convenience. With ergonomic seating, onboard refreshments, and modern amenities, this bus is perfect for business trips, team outings, and executive travel. Keywords: 45-seater executive bus rental Kharadi, luxury bus hire Kharadi."
        },
        {
            "title": "50-Seater Deluxe Bus:",
            "description": "Our 50-seater deluxe bus is designed for large groups who need extensive seating and top-notch comfort. Whether it’s a corporate event, a family reunion, or a community function, this bus ensures a pleasant journey with spacious interiors and modern features. Keywords: 50-seater deluxe bus Kharadi, large group bus rental Kharadi."
        },
        {
            "title": "Hinjewadi Local Sightseeing Bus:",
            "description": "Explore Hinjewadi and its surrounding areas with our local sightseeing bus. Tailored for city tours, this bus covers major attractions and landmarks, making it an ideal choice for tourists and locals wanting to discover the region comfortably. Keywords: Hinjewadi sightseeing bus, local tour bus Hinjewadi."
        },
        {
            "title": "Hinjewadi Darshan Mini Bus:",
            "description": "Experience a comprehensive tour of Hinjewadi with our Darshan mini bus. This service is perfect for tourists and local residents interested in exploring the city’s key attractions in a comfortable and organized manner. Keywords: Hinjewadi Darshan mini bus, city tour mini bus Hinjewadi."
        },
        {
            "title": "Corporate Outing Bus in Hinjewadi:",
            "description": "For business functions and corporate events, our buses are equipped to meet professional needs. Featuring comfortable seating and ample space for equipment, these buses ensure that your business travel is smooth and efficient. Keywords: Hinjewadi corporate bus rental, business event bus Hinjewadi."
        },
        {
            "title": "School Trip Bus in Hinjewadi:",
            "description": "Safety and comfort are crucial for school trips. Our buses are specifically designed to cater to school outings, with features that ensure a secure and enjoyable journey for students and teachers alike. Keywords: Hinjewadi school trip bus, educational outing bus Hinjewadi."
        },
        {
            "title": "Family Gathering Bus in Hinjewadi:",
            "description": "Whether it’s a family reunion, wedding, or any other social gathering, our local buses provide the comfort and convenience needed for a memorable event. Enjoy spacious interiors and a hassle-free journey with our family-friendly bus rentals. Keywords: Hinjewadi family gathering bus, social event bus Hinjewadi."
        }
    ],    
    "services": [
        {
            "name": "Bus on Rent Hire in Wakad",
            "description": "For groups needing reliable transportation in Wakad, we offer a variety of bus rental options. From comfortable mini buses to larger luxury buses, our services are perfect for events, corporate functions, and local travel."
        },
        {
            "name": "Bus on Rent in Hinjewadi for Corporate Outing",
            "description": "Organize your corporate outings with ease using our specialized bus rental services in Hinjewadi. Our buses are designed to provide comfort and professionalism, making them ideal for team-building activities, client meetings, and corporate events."
        },
        {
            "name": "Bus on Rent in Hinjewadi for Outstations",
            "description": "Planning a trip to an outstation destination? Our buses in Hinjewadi are perfect for long-distance travel. With options ranging from standard to luxury, you can travel comfortably and reach your destination with ease."
        },
        {
            "name": "Bus Hire for Wedding in Hinjewadi",
            "description": "Make your wedding day special with our dedicated bus rental services. We provide stylish and spacious buses for wedding guests, ensuring everyone arrives comfortably and on time."
        },
        {
            "name": "Bharat Benz 35-Seater Bus on Rent in Hinjewadi",
            "description": "Experience top-notch comfort with our Bharat Benz 35-seater bus. Ideal for medium-sized groups, this bus offers modern amenities and a luxurious travel experience for any event or trip."
        },
        {
            "name": "Force Urbania Luxury Mini Bus on Rent in Hinjewadi",
            "description": "Our Force Urbania luxury mini bus is perfect for those seeking a blend of luxury and functionality. With comfortable seating and high-end features, it’s suitable for both corporate and personal events."
        },
        {
            "name": "Corporate Outing Bus Hire in Hinjewadi",
            "description": "Ensure a smooth and enjoyable corporate outing with our specialized bus rental services. Our buses are equipped to meet professional needs, offering a comfortable ride for employees and clients."
        },
        {
            "name": "Tempo Traveller Hire in Hinjewadi",
            "description": "For flexible and comfortable group travel, our tempo travellers are an excellent choice. Ideal for both short and long trips, they provide ample space and convenience."
        },
        {
            "name": "Mini Bus on Rent in Hinjewadi",
            "description": "Our mini buses are perfect for small to medium-sized groups. Whether you’re planning a local tour or a special event, our mini buses offer comfort and flexibility."
        },
        {
            "name": "Bus Hire for Marriage in Hinjewadi",
            "description": "For weddings and other special occasions, our bus hire services ensure that your guests travel in comfort and style. We offer a range of buses to suit different needs and preferences."
        },
        {
            "name": "Bus Hire for Wedding Near Me in Pune",
            "description": "Planning a wedding and need transportation for your guests? Our bus hire services are perfect for weddings across Pune. We offer a variety of buses to accommodate different group sizes and ensure your guests travel comfortably."
        },
        {
            "name": "14, 17, 25, 32-Seater Bus on Rent in Hinjewadi",
            "description": "No matter the size of your group, we have the right bus for you in Hinjewadi. Choose from our 14-seater, 17-seater, 25-seater, and 32-seater buses to meet your travel needs, whether for local events or outings."
        },
        {
            "name": "Bus on Rent in Hinjewadi Phase 1",
            "description": "If you’re located in Hinjewadi Phase 1 and need a bus for any occasion, we offer a range of options to suit your requirements. Our services are designed to provide comfort and reliability for local and outstation travel."
        },
        {
            "name": "Bus on Rent in Hinjewadi Phase 2",
            "description": "Our bus rental services extend to Hinjewadi Phase 2, offering flexible and convenient transportation options for events, corporate outings, and more. Enjoy a comfortable journey with our well-maintained fleet."
        },
        {
            "name": "Bus on Rent in Hinjewadi Phase 3",
            "description": "For those in Hinjewadi Phase 3, we provide a variety of bus rental services to meet your needs. Whether you’re organizing a local trip or an outstation journey, our buses are equipped to deliver a smooth and pleasant experience."
        },
        {
            "name": "Bus on Rent in Baner Aundh",
            "description": "Our bus rental services in Baner Aundh cater to a range of needs, from corporate events to personal outings. We offer various bus sizes and types to ensure a comfortable and enjoyable travel experience."
        },
        {
            "name": "Bus on Rent in Balewadi Pune",
            "description": "In Balewadi Pune, we offer flexible and convenient bus rental options for all types of events and trips. Our well-maintained buses ensure a comfortable journey for all passengers."
        },
        {
            "name": "Bus on Rent in Hinjewadi Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus on Rent in Hinjewadi. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],

  "tableData": [
        ["- Bus on Rent in Hinjewadi for Outstations", "- Bus Hire for Wedding in Hinjewadi"],
        ["- Bharat Benz 35-Seater Bus on Rent in Hinjewadi", "- Force Urbania Luxury Mini Bus on Rent in Hinjewadi"],
        ["- Corporate Outing Bus Hire in Hinjewadi", "- Tempo Traveller Hire in Hinjewadi"],
        ["- Mini Bus on Rent in Hinjewadi", "- Bus Hire for Marriage in Hinjewadi"],
        ["- Bus Hire for Wedding Near Me in Pune", "- 14, 17, 25, 32-Seater Bus on Rent in Hinjewadi"],
        ["- Bus on Rent in Hinjewadi Phase 1", "- Bus on Rent in Hinjewadi Phase 2"],
        ["- Bus on Rent in Hinjewadi Phase 3", "- Bus on Rent Hire in Wakad"],
        ["- Bus on Rent in Baner Aundh", "- Bus on Rent in Balewadi Pune"]
    ]
,
    
"whychoose": [
    {
        "WhyChooseheading": "Wide Range of Buses",
        "WhyChoosedescription": "We offer a diverse fleet of buses, including 14-seater, 17-seater, 25-seater, and 32-seater options. Whether you need a small minibus or a larger bus, we have the perfect vehicle for your needs."
    },
    {
        "WhyChooseheading": "Reliable and Comfortable",
        "WhyChoosedescription": "Our buses are well-maintained and equipped with modern amenities to ensure a comfortable and pleasant journey for all passengers. Punctuality and reliability are our top priorities."
    },
    {
        "WhyChooseheading": "Affordable Pricing",
        "WhyChoosedescription": "We provide competitive and transparent pricing for all our bus rental services. You can be assured of getting the best value for your money without any hidden costs."
    },
    {
        "WhyChooseheading": "Professional Drivers",
        "WhyChoosedescription": "Our experienced and professional drivers are well-versed with the routes and committed to providing a safe and smooth travel experience. They are also trained to assist with any special requests or requirements."
    },
    {
        "WhyChooseheading": "Customizable Services",
        "WhyChoosedescription": "Whether you’re organizing a corporate outing, a family trip, or a local event, we offer customizable bus rental services to suit your specific needs. We work closely with you to ensure all your requirements are met."
    },
    {
        "WhyChooseheading": "24/7 Customer Support",
        "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist you with any queries or issues. We are here to ensure that your bus rental experience is hassle-free and enjoyable."
    },
    {
        "WhyChooseheading": "Convenient Booking Process",
        "WhyChoosedescription": "Booking a bus with us is simple and straightforward. You can make reservations online or by phone, and we offer flexible options to accommodate your schedule."
    },
    {
        "WhyChooseheading": "Safe and Hygienic",
        "WhyChoosedescription": "We prioritize the safety and hygiene of our vehicles. Each bus is thoroughly cleaned and sanitized before and after every trip to ensure a safe environment for all passengers."
    },
    {
        "WhyChooseheading": "Local Expertise",
        "WhyChoosedescription": "Being based in Hinjewadi, we have extensive local knowledge and can offer valuable recommendations for your travel needs, including the best routes and destinations."
    },
    {
        "WhyChooseheading": "Positive Reputation",
        "WhyChoosedescription": "Our long-standing reputation for excellent service and customer satisfaction speaks for itself. We have a track record of delivering exceptional bus rental experiences to our clients."
    }
]
  };

    
  const faqData = [
    {
        "question": "What types of buses do you offer for rent in Hinjewadi?",
        "answer": "We offer a range of buses including 14-seater, 17-seater, 25-seater, and 32-seater options. Our fleet also includes luxury and executive buses for more specialized needs."
    },
    {
        "question": "How can I book a bus with Amruta Travels?",
        "answer": "You can book a bus online through our website or by calling our customer support team. We offer flexible booking options to accommodate your schedule."
    },
    {
        "question": "What is the pricing for bus rentals in Hinjewadi?",
        "answer": "Our pricing is competitive and depends on factors such as the type of bus, duration of the rental, and distance traveled. We provide transparent pricing with no hidden charges."
    },
    {
        "question": "Are your buses equipped with amenities?",
        "answer": "Yes, our buses come equipped with modern amenities such as air conditioning, comfortable seating, and entertainment options. Specific amenities may vary depending on the bus type."
    },
    {
        "question": "How do you ensure the safety and hygiene of your buses?",
        "answer": "We maintain high standards of safety and hygiene. Our buses are regularly cleaned and sanitized, and our drivers follow strict safety protocols to ensure a safe travel experience."
    },
    {
        "question": "Can I make changes to my booking after it has been confirmed?",
        "answer": "Yes, we offer flexibility with bookings. If you need to make changes, please contact our customer support team as soon as possible, and we will assist you with the necessary adjustments."
    },
    {
        "question": "What should I do if there is a problem during the trip?",
        "answer": "If you encounter any issues during your trip, please inform the driver immediately. You can also contact our 24/7 customer support team for assistance."
    },
    {
        "question": "Are your drivers experienced and professional?",
        "answer": "Yes, all our drivers are highly experienced and professional. They are well-trained to ensure a safe and pleasant journey for all passengers."
    },
    {
        "question": "Do you provide bus rental services for outstation trips from Hinjewadi?",
        "answer": "Yes, we offer bus rental services for outstation trips from Hinjewadi. We can accommodate various distances and destinations as per your requirements."
    },
    {
        "question": "How far in advance should I book a bus?",
        "answer": "We recommend booking your bus as early as possible to secure availability, especially for peak seasons or special events. However, we do accept last-minute bookings subject to availability."
    }
];

    
const testimonials = [
    {
        "name": "Mr. Rajesh Patel",
        "text": "I recently hired a bus from Amruta Travels for a corporate outing in Hinjewadi, and the experience was outstanding. The booking process was smooth, and the customer service team was very helpful. Our 25-seater bus was clean, comfortable, and well-equipped with all the necessary amenities. The driver was punctual and professional, ensuring we had a safe and enjoyable trip. I highly recommend Amruta Travels for anyone needing reliable bus rental services in Hinjewadi!"
    },
    {
        "name": "Miss Anita Sharma",
        "text": "For my daughter's wedding, we needed a large bus to transport guests from various parts of Hinjewadi. Amruta Travels provided us with a 50-seater bus that was perfect for the occasion. The bus was impeccably maintained, and the driver was courteous and efficient. The entire process, from booking to the actual event, was seamless. We received numerous compliments from our guests about the comfort and quality of the transportation. Thank you, Amruta Travels, for making the day special and stress-free!"
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
        heading: " Bus on Rent in Hinjewadi Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus on Rent in Hinjewadi Pune | Wedding, Corporate, Outstation, Mini Bus, Tempo Traveller, Luxury Bus Rental</title>
  <meta name="description" content="Rent luxury buses, Tempo Travellers, and mini buses in Hinjewadi for weddings, corporate outings, and outstation trips. Affordable and reliable bus hire service in Hinjewadi, Wakad, Baner, Aundh, and Balewadi Pune." />
  <meta name="keywords" content="Bus on rent in Hinjewadi, Bus hire in Hinjewadi for corporate outing, Bus hire for wedding Hinjewadi, Bharat Benz 35 seater bus on rent in Hinjewadi, Force Urbania luxury mini bus on rent in Hinjewadi, Corporate outing bus hire in Hinjewadi, Tempo traveller hire in Hinjewadi, Mini bus on rent in Hinjewadi, Bus hire for marriage in Hinjewadi, Bus hire for wedding near me Pune, 14 Seater Bus on rent Hinjewadi, 17 Seater Bus on rent Hinjewadi, 25 Seater Bus on rent Hinjewadi, 32 Seater Bus on rent Hinjewadi, Bus on rent in Hinjewadi Phase 1, Bus on rent in Hinjewadi Phase 2, Bus on rent in Hinjewadi Phase 3, Bus hire in Wakad, Bus on rent in Baner Aundh, Bus hire in Balewadi Pune" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent luxury buses, Tempo Travellers, and mini buses in Hinjewadi for weddings, corporate outings, and outstation trips. Affordable and reliable bus hire service in Hinjewadi, Wakad, Baner, Aundh, and Balewadi Pune.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-on-rent-in-hinjewadi-pune",
        "logo": "https://amrutatravel.com/images/bus-on-rent-in-hinjewadi.jpg",
        "image": "https://amrutatravel.com/images/bus-on-rent-in-hinjewadi.jpg",
        "priceRange": "₹5000 - ₹18000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-on-rent-in-hinjewadi-pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "650"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Malhotra"
            },
            "datePublished": "2024-06-01",
            "reviewBody": "We hired a 35-seater Bharat Benz bus for our corporate outing in Hinjewadi. The bus was very comfortable and clean, and the service was excellent."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Simran Shah"
            },
            "datePublished": "2024-05-20",
            "reviewBody": "Booked a mini bus for our wedding transportation in Hinjewadi. The driver was very professional, and the bus was top-notch."
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
          "serviceUrl": "https://amrutatravel.com/bus-on-rent-in-hinjewadi-pune"
        },
        "keywords": "Bus on rent in Hinjewadi, Bus hire in Hinjewadi for corporate outing, Bus hire for wedding Hinjewadi, Bharat Benz 35 seater bus on rent in Hinjewadi, Force Urbania luxury mini bus on rent in Hinjewadi, Corporate outing bus hire in Hinjewadi, Tempo traveller hire in Hinjewadi, Mini bus on rent in Hinjewadi, Bus hire for marriage in Hinjewadi, Bus hire for wedding near me Pune, 14 Seater Bus on rent Hinjewadi, 17 Seater Bus on rent Hinjewadi, 25 Seater Bus on rent Hinjewadi, 32 Seater Bus on rent Hinjewadi, Bus on rent in Hinjewadi Phase 1, Bus on rent in Hinjewadi Phase 2, Bus on rent in Hinjewadi Phase 3, Bus hire in Wakad, Bus on rent in Baner Aundh, Bus hire in Balewadi Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-62.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Bus on Rent in Hinjewadi – Amruta Travels:</h3>
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
export default Hinjewadibus;