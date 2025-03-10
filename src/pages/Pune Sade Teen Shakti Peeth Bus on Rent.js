
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function PuneSadeTeenShaktiPeethBusOnRent(){

  const cardData = 
    {
      keyword: 'Pune Sade Teen Shakti Peeth Bus on Rent',
      heading: ' Amruta Travels: Pune Sade Teen Shakti Peeth Bus on Rent ',

      headingDescription: ' Discover the spiritual significance of the Sade Teen Shakti Peeth with Amruta Travels  premium bus rental services. Our dedicated bus service is designed to make your pilgrimage comfortable and memorable as you visit these revered Shakti Peeths.',

      top:"Amruta Travels’ Pune Sade Teen Shakti Peeth Bus on Rent:",
       topPlaces : [
        {
            "title": "Comfortable Travel",
            "description": "Experience a smooth and comfortable ride with our well-maintained buses, equipped with modern amenities such as air conditioning and comfortable seating. Our buses are designed to ensure a relaxed journey to the Shakti Peeths, making your pilgrimage more enjoyable."
        },
        {
            "title": "Experienced Drivers",
            "description": "Our professional drivers are not only experienced but also well-versed with the routes to the Sade Teen Shakti Peeths. They prioritize safety and punctuality, ensuring a smooth and timely journey while providing a reliable travel experience."
        },
        {
            "title": "Customizable Itineraries",
            "description": "We offer flexible bus rental options that can be tailored to your schedule and preferences. Whether you need to visit specific Shakti Peeths or have a particular route in mind, we can customize our services to fit your needs perfectly."
        },
        {
            "title": "Spacious Buses",
            "description": "Choose from a range of bus sizes to accommodate your group comfortably. Whether you need a mini-bus for a small group or a larger coach for a big entourage, we have the right vehicle to ensure a comfortable travel experience for everyone."
        },
        {
            "title": "Affordable Rates",
            "description": "Amruta Travels offers competitive pricing for bus rentals to the Sade Teen Shakti Peeths, ensuring that you receive excellent value for your money. Our transparent pricing policy helps you manage your travel budget effectively."
        },
        {
            "title": "Onboard Amenities",
            "description": "Our buses come with essential amenities such as air conditioning, comfortable seating, and clean facilities. These amenities are designed to enhance your travel experience, making your journey to the Shakti Peeths more pleasant and enjoyable."
        },
        {
            "title": "Punctual Service",
            "description": "We pride ourselves on punctuality. Our buses adhere to your schedule and arrive on time, ensuring that your pilgrimage is smooth and uninterrupted. We understand the importance of timely service, especially for spiritual journeys."
        },
        {
            "title": "Group-Friendly Options",
            "description": "Whether you are traveling with a small group or a large entourage, we provide buses that cater to different group sizes. Our fleet is designed to ensure that everyone travels comfortably, regardless of the group size."
        },
        {
            "title": "Expert Guidance",
            "description": "Our knowledgeable staff can provide valuable insights and guidance about the Shakti Peeths. This support enhances your spiritual journey, offering informative assistance that complements your visit to these sacred sites."
        },
        {
            "title": "Hassle-Free Booking",
            "description": "Booking your bus rental with Amruta Travels is straightforward and convenient. Our customer service team is available to assist with all your needs, ensuring a seamless booking experience and providing support throughout your journey."
        }
    ],

    "services": [
        {
          "name": "Sade Teen Shakti Peeth Yatra from Pune:",
          "description": "Embarking on the Sade Teen Shakti Peeth Yatra from Pune? Amruta Travels offers dedicated bus and tempo traveller services to make your pilgrimage comfortable and memorable. Our specialized travel packages cover key Shakti Peeth temples including Mahalaxmi Temple at Kolhapur, Tuljapur, Renuka Mata at Mahurgad, and Saptashrungi Mata Vani. We ensure a smooth journey with experienced drivers and well-maintained vehicles tailored to meet your spiritual travel needs."
        },
        {
          "name": "Pune to Mahalaxmi Temple at Kolhapur Bus Hire:",
          "description": "Planning a visit to Mahalaxmi Temple in Kolhapur from Pune? Amruta Travels provides reliable bus hire services for your pilgrimage. Choose from our fleet of comfortable buses and enjoy a hassle-free journey to this revered temple. Our professional drivers ensure safety and punctuality, making your trip to Mahalaxmi Temple a serene and enjoyable experience."
        },
        {
          "name": "Pune to Tuljapur Tempo Traveller on Rent:",
          "description": "For a comfortable journey to Tuljapur, Amruta Travels offers tempo travellers on rent. Ideal for small to medium-sized groups, our tempo travellers provide ample space and modern amenities. Enjoy a smooth and pleasant ride from Pune to Tuljapur with our well-maintained vehicles and experienced drivers."
        },
        {
          "name": "Pune to Renuka Mata at Mahurgad Bus on Rent:",
          "description": "Visit the sacred Renuka Mata Temple at Mahurgad with ease by renting a bus from Amruta Travels. Our bus hire services are designed to accommodate your group comfortably while ensuring a safe and timely journey. Explore the divine surroundings of Mahurgad with our reliable and efficient transport solutions."
        },
        {
          "name": "Pune to Mahurgad Bus on Rent Package:",
          "description": "Amruta Travels offers comprehensive bus on rent packages for your trip from Pune to Mahurgad. Our packages include comfortable and well-maintained buses, ensuring a pleasant journey to the sacred Mahurgad temple. Customize your travel itinerary and enjoy a memorable pilgrimage with our all-inclusive bus hire services."
        },
        {
          "name": "Pune to Saptashrungi Mata Vani Bus on Rent:",
          "description": "Plan your visit to Saptashrungi Mata Vani with our specialized bus rental services from Pune. Amruta Travels provides comfortable and spacious buses to accommodate your group, making the journey to this significant pilgrimage site convenient and enjoyable. Our professional drivers and well-maintained buses ensure a safe and comfortable trip."
        },
        {
          "name": "Bus Hire for Sade Teen Shakti Peeth Yatra from Pune:",
          "description": "For the Sade Teen Shakti Peeth Yatra, Amruta Travels offers tailored bus hire services to cover all key pilgrimage sites. Choose from our range of bus sizes to fit your group and enjoy a seamless journey to each Shakti Peeth. Our dedicated service ensures that your spiritual journey is comfortable and well-organized."
        },
        {
          "name": "Mini Bus on Rent for Sade Teen Shakti Peeth Yatra:",
          "description": "If you’re looking for a mini bus for the Sade Teen Shakti Peeth Yatra, Amruta Travels has you covered. Our mini buses are perfect for small groups, offering comfort and convenience for your pilgrimage from Pune. Experience a smooth and enjoyable journey with our well-equipped mini buses."
        },
        {
          "name": "14, 17, 20, 25 Seater Bus for Pune to Sade Teen Shakti Peeth Yatra:",
          "description": "Amruta Travels offers a range of bus options including 14, 17, 20, and 25-seater buses for the Sade Teen Shakti Peeth Yatra from Pune. Choose the bus size that best fits your group and enjoy a comfortable and memorable pilgrimage with our specialized transport services."
        },
        {
          "name": "35, 40, 45, 50 Seater Bus for Pune to Sade Teen Shakti Peeth Yatra:",
          "description": "For larger groups, Amruta Travels provides 35, 40, 45, and 50-seater buses for the Sade Teen Shakti Peeth Yatra from Pune. Our spacious buses are designed to accommodate larger groups comfortably, ensuring a smooth and enjoyable journey to all key pilgrimage sites. Trust us for reliable and comfortable transport solutions for your spiritual journey."
        },
        {
          "name": "3.5 Shakti Peethas Darshan in Maharashtra:",
          "description": "Visiting the 3.5 Shakti Peethas in Maharashtra is a spiritually significant journey. These revered sites offer a unique and divine experience. Amruta Travels provides reliable transportation to help you complete your darshan comfortably and conveniently."
        },
        {
          "name": "Tempo Traveller on Rent for Sadeteen Shakti Peeth Yatra:",
          "description": "Our tempo traveller rentals are ideal for the Sadeteen Shakti Peeth Yatra. We offer a range of options to accommodate various group sizes, ensuring you have a comfortable and smooth journey to each sacred site."
        },
        {
          "name": "Sadeteen Shakti Peeth Tour from Pune Bus Hire:",
          "description": "Plan your Sadeteen Shakti Peeth tour from Pune with our bus hire services. We provide a selection of buses suitable for different group sizes, offering comfort and reliability for your pilgrimage. Enjoy a well-organized tour with our expert transportation solutions."
        },
        {
          "name": "17 Seater Tempo Traveller on Rent for Sadeteen Shakti Peeth Yatra:",
          "description": "For smaller groups embarking on the Sadeteen Shakti Peeth Yatra, our 17-seater tempo travellers offer a perfect balance of space and comfort. This option is ideal for intimate group travel, ensuring everyone enjoys a pleasant and memorable journey."
        },
        {
          "name": "Amruta Travels Pune On Rent:",
          "description": "Amruta Travels is your trusted partner for all vehicle rental needs related to the Sadeteen Shakti Peeth Yatra. Our fleet includes a variety of vehicles, from tempo travellers to buses, tailored to provide a seamless travel experience. We are dedicated to delivering exceptional service and comfort for your pilgrimage."
        },
        {
          "name": "Pune Sade Teen Shakti Peeth Bus on Rent Contact Number:",
          "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Pune Sade Teen Shakti Peeth Bus on Rent. We ensure a smooth and enjoyable ride for all our customers."
        }
      ],

      "tableData": [
        ["-Sade Teen Shakti Peeth Yatra from Pune", "-Pune to Mahalaxmi Temple at Kolhapur Bus Hire"],
        ["-Pune to Tuljapur Tempo Traveller on Rent", "-Pune to Renuka Mata at Mahurgad Bus on Rent"],
        ["-Pune to Mahurgad Bus on Rent Package", "-Pune to Saptashrungi Mata Vani Bus on Rent"],
        ["-Bus Hire for 3.5 Shakti Peeth Yatra from Pune", "-Mini Bus on Rent for Sade Teen Shakti Peeth Yatra"],
        ["-14, 17, 20, 25 Seater Bus for Pune to Sade Teen Shakti Peeth Yatra", "-35, 40, 45, 50 Seater Bus for Pune to Sade Teen Shakti Peeth Yatra"],
        ["-3.5 Shakti Peethas Darshan in Maharashtra", "-Tempo Traveller on Rent for Sade Teen Shakti Peeth Yatra"],
        ["-Sade Teen Shakti Peeth Tour from Pune Bus Hire", "-17 Seater Tempo Traveller on Rent for Sade Teen Shakti Peeth Yatra"],
        ["-Amruta Travels Pune On Rent", "-Amruta Travels Pune On Rent"]
      ],

    "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Bus on Rent for Sade Teen Shakti Peeth Yatra?",
      "WhyChoosedescription": "Amruta Travels provides specialized bus rental services for the Sade Teen Shakti Peeth Yatra, ensuring a comfortable, safe, and hassle-free pilgrimage experience."
    },
    {
      "WhyChooseheading": "Comprehensive Coverage of Shakti Peeth Temples:",
      "WhyChoosedescription": "We cover all key pilgrimage sites including Mahalaxmi Temple at Kolhapur, Tuljapur, Renuka Mata at Mahurgad, and Saptashrungi Mata Vani, ensuring you visit all sacred sites during your journey."
    },
    {
      "WhyChooseheading": "Comfortable and Well-Maintained Buses:",
      "WhyChoosedescription": "Our fleet is designed for maximum comfort, with clean, well-maintained buses equipped with essential amenities to ensure a pleasant journey."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers:",
      "WhyChoosedescription": "Our drivers are skilled, familiar with the routes to the Shakti Peeth temples, and committed to providing a safe and smooth travel experience."
    },
    {
      "WhyChooseheading": "Flexible and Customizable Packages:",
      "WhyChoosedescription": "We offer flexible bus hire packages tailored to your needs, whether you require a mini bus or a larger bus for your group."
    },
    {
      "WhyChooseheading": "Competitive and Transparent Pricing:",
      "WhyChoosedescription": "Our pricing is competitive and transparent, with no hidden charges, ensuring you get the best value for your money."
    },
    {
      "WhyChooseheading": "Reliable and Timely Service:",
      "WhyChoosedescription": "We pride ourselves on reliability and punctuality, ensuring our buses adhere to schedules and are well-maintained for timely departures."
    },
    {
      "WhyChooseheading": "Personalized Customer Support:",
      "WhyChoosedescription": "Our dedicated customer service team provides personalized support for a smooth booking process and a pleasant travel experience."
    },
    {
      "WhyChooseheading": "Safe and Secure Travel:",
      "WhyChoosedescription": "Safety is our top priority. Our buses are equipped with safety features and our drivers are trained to handle various road conditions."
    },
    {
      "WhyChooseheading": "Positive Customer Feedback:",
      "WhyChoosedescription": "We have a strong reputation for reliability and satisfaction, with clients consistently praising our professionalism and quality of service."
    },
    {
      "WhyChooseheading": "Easy Booking Process:",
      "WhyChoosedescription": "Booking with Amruta Travels is simple and convenient. Reservations can be made through our website, by phone, or in person."
    }
  ]
};


const faqData = [
    {
        "question": "How can I book a bus for the Sade Teen Shakti Peeth Yatra from Pune?",
        "answer": "You can book a bus by visiting our website, calling our customer service hotline, or visiting our office in person. We offer easy and convenient booking options to suit your needs."
    },
    {
        "question": "What types of buses are available for the Sade Teen Shakti Peeth Yatra?",
        "answer": "We offer a variety of buses including mini buses, 14-seater, 17-seater, 20-seater, 25-seater, 35-seater, 40-seater, 45-seater, and 50-seater options. Choose the bus size that best fits your group."
    },
    {
        "question": "Are there any special amenities provided on the buses?",
        "answer": "Yes, our buses come with comfortable seating, air conditioning, and other amenities to ensure a pleasant journey. Specific amenities may vary depending on the bus type."
    },
    {
        "question": "What is the cost of hiring a bus for the Sade Teen Shakti Peeth Yatra?",
        "answer": "The cost depends on factors such as the bus size, duration of hire, and any additional services required. Contact us for a customized quote based on your specific needs."
    },
    {
        "question": "Can I customize the bus rental package for the Sade Teen Shakti Peeth Yatra?",
        "answer": "Yes, we offer customizable packages to meet your specific travel requirements. You can adjust the itinerary and services to fit your pilgrimage plans."
    },
    {
        "question": "Are your drivers experienced and knowledgeable about the routes?",
        "answer": "Yes, our drivers are experienced and familiar with the routes to all the Shakti Peeth temples. They prioritize your safety and ensure a smooth journey."
    },
    {
        "question": "How far in advance should I book a bus for the Sade Teen Shakti Peeth Yatra?",
        "answer": "We recommend booking as early as possible to secure your preferred bus and date. Early booking helps in better planning and availability."
    },
    {
        "question": "What is your cancellation policy?",
        "answer": "Our cancellation policy includes specific terms and conditions, with potential charges based on the timing of the cancellation. Please contact our customer service team for detailed information."
    },
    {
        "question": "Are the buses cleaned and maintained regularly?",
        "answer": "Yes, we ensure that all our buses are thoroughly cleaned and regularly maintained to provide a comfortable and hygienic travel experience."
    },
    {
        "question": "Can I request additional services or special requirements?",
        "answer": "Yes, we can accommodate special requests or additional services based on availability. Please inform us of any specific needs when making your booking."
    }
];



const testimonials = [
    {
        "name": "Mr. Rajesh Mehta",
        "text": "Our pilgrimage to the Sade Teen Shakti Peeth temples from Pune was an unforgettable experience, thanks to Amruta Travels. We hired a 35-seater bus for our group, and it was perfect for our needs. The bus was clean, comfortable, and well-equipped, making our journey to Mahalaxmi Temple, Tuljapur, and the other sacred sites smooth and enjoyable. The driver was punctual, professional, and knowledgeable about the routes, which greatly enhanced our travel experience. Amruta Travels made our spiritual journey seamless and memorable. Highly recommended for anyone planning a similar yatra!"
    },
    {
        "name": "Mrs. Anchal Chavan",
        "text": "I recently booked a 45-seater bus with Amruta Travels for our Sade Teen Shakti Peeth Yatra from Pune. The service was exceptional from start to finish. The bus was spacious and comfortable, and the driver was courteous and experienced, ensuring we arrived at each temple safely and on time. The booking process was straightforward, and the customer support team was very helpful in accommodating our special requests. Thanks to Amruta Travels, our pilgrimage was well-organized and enjoyable. We will definitely choose them again for future trips!"
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
        heading: "Pune Sade Teen Shakti Peeth Bus on Rent  Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Pune Sade Teen Shakti Peeth Bus On Rent | Shakti Peeth Yatra Bus & Tempo Traveller Rentals</title>
  <meta name="description" content="Book buses and tempo travellers for the Sade Teen Shakti Peeth Yatra from Pune, covering temples like Mahalaxmi, Tuljapur, Renuka Mata, and Saptashrungi. Special packages available for religious tours." />
  <meta name="keywords" content="Sade Teen Shakti Peeth Yatra from Pune, Pune to Mahalaxmi Temple at Kolhapur Bus Hire, Pune to Tuljapur Tempo Traveller on Rent, Pune to Renuka Mata at Mahurgad Bus on Rent, Pune to Mahurgad Bus on Rent Package, Pune to Saptashrungi Mata Vani Bus on Rent, Bus Hire for 3.5 Shakti Peeth Yatra from Pune, Mini Bus on Rent for Sade Teen Shakti Peeth Yatra, 14 17 20 25 Seater Bus for Pune to Sade Teen Shakti Peeth Yatra, 35 40 45 50 Seater Bus for Pune to Sade Teen Shakti Peeth Yatra, 3.5 Shakti Peethas Darshan in Maharashtra, Tempo Traveller on Rent for Sade Teen Shakti Peeth Yatra, Sade Teen Shakti Peeth Tour from Pune Bus Hire, 17 Seater Tempo Traveller on Rent for Sade Teen Shakti Peeth Yatra, Amruta Travels Pune On Rent" />
  <meta name="author" content="Amruta Travels" />
  <meta property="og:title" content="Contact: +91 8421333435 | Amruta Travels | Pune Sade Teen Shakti Peeth Bus On Rent | Shakti Peeth Yatra Bus & Tempo Traveller Rentals" />
  <meta property="og:description" content="Book buses and tempo travellers for the Sade Teen Shakti Peeth Yatra from Pune, covering temples like Mahalaxmi, Tuljapur, Renuka Mata, and Saptashrungi. Special packages available for religious tours." />
  <meta property="og:image" content="https://amrutatravel.com/images/sade-teen-shakti-peeth-bus-hire.jpg" />
  <meta property="og:url" content="https://amrutatravel.com/pune-sade-teen-shakti-peeth-bus-hire" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Amruta Travels",
            "description": "Amruta Travels offers bus and tempo traveller hire services for the Sade Teen Shakti Peeth Yatra from Pune, including trips to Mahalaxmi Temple, Tuljapur, Renuka Mata, and Saptashrungi.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411041",
              "addressCountry": "IN"
            },
            "telephone": "+91-8421333435",
            "url": "https://amrutatravel.com/pune-sade-teen-shakti-peeth-bus-hire",
            "logo": "https://amrutatravel.com/images/sade-teen-shakti-peeth-bus-hire.jpg",
            "image": [
              "https://amrutatravel.com/img/hell.png",
              "https://amrutatravel.com/img/hell2.png",
              "https://amrutatravel.com/img/hell3.jpg"
            ],
            "priceRange": "₹1500 - ₹25000",
            "offers": {
              "@type": "Offer",
              "url": "https://amrutatravel.com/pune-sade-teen-shakti-peeth-bus-hire",
              "priceCurrency": "INR",
              "price": 1500,
              "priceValidUntil": "2024-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 120
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Ravi Shah"
                },
                "datePublished": "2024-07-12",
                "reviewBody": "I hired a 40-seater bus for a Shakti Peeth Yatra. The journey was comfortable, and the bus was well-maintained. Excellent service!"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sita Patel"
                },
                "datePublished": "2024-09-01",
                "reviewBody": "We took a family trip to the Sade Teen Shakti Peeth and booked a 17-seater Tempo Traveller. The driver was friendly, and the tour was seamless."
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
              "serviceUrl": "https://amrutatravel.com/pune-sade-teen-shakti-peeth-bus-hire"
            },
            "keywords": "Sade Teen Shakti Peeth Yatra from Pune, Pune to Mahalaxmi Temple at Kolhapur Bus Hire, Pune to Tuljapur Tempo Traveller on Rent, Pune to Renuka Mata at Mahurgad Bus on Rent, Pune to Saptashrungi Mata Vani Bus on Rent, 3.5 Shakti Peethas Darshan, Mini Bus Rent for Sade Teen Yatra, 35 Seater Bus Pune to Shakti Peeth"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-25.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for “Pune Sade Teen Shakti Peeth Bus on Rent” for Amruta Travels:</h3>
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
export default PuneSadeTeenShaktiPeethBusOnRent;