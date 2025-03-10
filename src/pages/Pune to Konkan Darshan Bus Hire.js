
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function PuneToKonkanDarshanBusHire(){

  const cardData = 
    {
      keyword: ' Pune to Konkan Darshan Bus Hire',
      heading: ' Amruta Travels: Pune to Konkan Darshan Bus Hire ',

      headingDescription: 'If you’re planning a trip from Pune to the enchanting Konkan region, Amruta Travels offers the perfect bus hire solutions to make your journey comfortable and memorable. The Konkan coastline, known for its scenic beauty, lush green landscapes, and pristine beaches, is a must-visit destination for travelers seeking both relaxation and adventure. Our dedicated bus services ensure you travel in comfort and style, exploring the best that Konkan has to offer.',

      top:"Top Places to Visit in Konkan with Amruta Travel::",
       topPlaces : [
        {
            "title": "Ganpatipule:",
            "description": "Renowned for its beautiful beaches and the Swayambhu Ganpati Temple, Ganpatipule is a serene coastal destination perfect for relaxation and spiritual experiences. Visitors can enjoy the tranquil environment and partake in spiritual rituals at the famous Ganpati Temple."
        },
        {
            "title": "Alibaug:",
            "description": "Known for its sandy beaches, historic forts, and vibrant local markets, Alibaug is a popular getaway for beach lovers and history enthusiasts alike. Attractions include the Alibaug Fort, Varsoli Beach, and local seafood delicacies."
        },
        {
            "title": "Kunkeshwar:",
            "description": "This town is famous for its ancient Kunkeshwar Temple dedicated to Lord Shiva and its picturesque beaches. It’s a great spot for both spiritual pursuits and beach activities. The temple’s architecture and the serene beach offer a peaceful retreat."
        },
        {
            "title": "Ratnagiri:",
            "description": "Ratnagiri is known for its historical significance and beautiful beaches. Key attractions include the Ratnadurg Fort, Thibaw Palace, and the serene Mandvi Beach. The region’s rich history and scenic beauty make it a must-visit destination."
        },
        {
            "title": "Malvan:",
            "description": "Malvan is famous for its stunning Tarkarli Beach, Sindhudurg Fort, and the vibrant local seafood cuisine. It’s an ideal spot for water sports and cultural exploration. The clear waters and historic fort add to the charm of this coastal town."
        },
        {
            "title": "Dapoli:",
            "description": "Dapoli offers a range of attractions including beaches, temples, and hill stations. Visit the serene Murud Beach and the historic Keshavraj Temple during your stay. The town’s diverse landscapes provide a variety of experiences for visitors."
        },
        {
            "title": "Janjira Fort:",
            "description": "Located off the coast of Murud, Janjira Fort is a formidable sea fort with a rich history. The fort’s architecture and panoramic views make it a fascinating place to explore. Accessible by boat, it offers a unique glimpse into historical military architecture."
        },
        {
            "title": "Harihareshwar:",
            "description": "This town is known for the Harihareshwar Temple and its tranquil beaches. It’s a peaceful destination that provides a great escape from the hustle and bustle of city life. The temple dedicated to Lord Shiva and the quiet beaches offer a serene experience."
        },
        {
            "title": "Vengurla:",
            "description": "Vengurla offers beautiful beaches, historic temples, and a peaceful ambiance. Visit the Vengurla Rocks and the local temples for a unique experience. The town’s scenic beauty and cultural heritage make it a charming destination."
        },
        {
            "title": "Guhagar:",
            "description": "Guhagar is a quiet beach town known for its pristine beaches, ancient temples, and scenic beauty. The Guhagar Beach and the Velneshwar Temple are popular attractions here. The town is ideal for those seeking relaxation and spiritual solace."
        }
    ],
    
    
    "services": [
        {
          "name": "Pune to Konkan Darshan Tempo Traveller Package:",
          "description": "Discover the scenic beauty and cultural heritage of Konkan with our customized Tempo Traveller packages. Ideal for group tours, our packages include comfortable transport to key attractions in Konkan, ensuring a memorable and hassle-free experience."
        },
        {
          "name": "Mini Bus on Rent in Ratnagiri:",
          "description": "For those visiting Ratnagiri, our mini buses offer a great solution for group travel. Enjoy spacious seating and comfortable amenities as you explore this beautiful coastal region of Konkan."
        },
        {
          "name": "Pune to Palghar Bus on Rent:",
          "description": "Travel from Pune to Palghar with ease using our reliable bus rental service. Our buses are well-maintained and equipped for a comfortable journey, making your trip to Palghar enjoyable and stress-free."
        },
        {
          "name": "Pune to Raigad Darshan Bus on Rent:",
          "description": "Our bus rental service for Pune to Raigad Darshan provides a comfortable and convenient way to visit the historic Raigad Fort. Enjoy a smooth ride with our well-equipped buses designed for group travel."
        },
        {
          "name": "Pune to Sindhudurg Bus Hire for Picnic:",
          "description": "Plan a fun and relaxing picnic to Sindhudurg with our bus hire services. Ideal for group outings, our buses offer ample space and comfort for a pleasant trip to this scenic coastal destination."
        },
        {
          "name": "Pune to Konark Bus Hire for Picnic:",
          "description": "Enjoy a memorable picnic with our bus hire service for travel from Pune to Konark. Our buses provide the comfort and reliability you need for a smooth journey to this famous pilgrimage site."
        },
        {
          "name": "Pune to Imagica Bus Hire for Picnic:",
          "description": "Make your trip to Imagica theme park fun and enjoyable with our bus hire services. Perfect for family outings or group trips, our buses ensure a comfortable ride to one of India’s premier amusement parks."
        },
        {
          "name": "Pune to Sawantwadi Bus Hire for Picnic:",
          "description": "Explore the vibrant town of Sawantwadi with our bus hire service. Ideal for picnics and group excursions, our buses provide a comfortable and convenient way to travel from Pune to Sawantwadi."
        },
        {
          "name": "Pune to Konkan Darshan Urbania on Rent:",
          "description": "Travel in style with our Urbania rental for a Konkan Darshan. Perfect for larger groups or special occasions, the Urbania offers premium comfort and luxury as you explore the Konkan region."
        },
        {
          "name": "Pune to Devgad Bus on Rent for Picnic:",
          "description": "Our bus rental service for travel to Devgad is ideal for a relaxing picnic. Enjoy the beauty of Devgad with our comfortable and reliable buses, designed for a pleasant and stress-free journey."
        },
        {
          "name": "Hire Pune to Diveagar Mini Bus & Tempo Traveller on Rent:",
          "description": "For trips to Diveagar, choose from our mini buses and tempo travellers. Both options provide comfort and flexibility for exploring this charming coastal village, ensuring a smooth and enjoyable experience."
        },
        {
          "name": "Amruta Travels Pune On Rent:",
          "description": "Amruta Travels is your go-to provider for vehicle rentals in Pune. From Konkan Darshan to picnics and special trips, our diverse fleet includes buses, mini buses, tempo travellers, and Urbania rentals tailored to your needs."
        },
        {
          "name": "Ganpatipule Tour Package from Pune:",
          "description": "Experience the divine beauty of Ganpatipule with our comprehensive tour package from Pune. Our package includes comfortable transport and tailored itineraries to make your visit to this sacred site unforgettable."
        },
        {
          "name": "Pune to Alibaug Bus on Rent:",
          "description": "Travel to the coastal town of Alibaug with our reliable bus rental service. Ideal for beach outings and group excursions, our buses ensure a comfortable and enjoyable journey from Pune."
        },
        {
          "name": "Pune to Konkan Darshan Bus Package:",
          "description": "Our Konkan Darshan bus package offers a complete solution for exploring the Konkan region. Enjoy a well-organized tour with comfortable transportation and guided visits to key attractions in Konkan."
        },
        {
          "name": "Tempo Traveller on Rent for Konkan Trip from Pune:",
          "description": "If you're planning a trip to Konkan from Pune, our tempo travellers are an excellent choice for comfortable and spacious travel. Designed for group excursions, these vehicles offer ample room and amenities to make your journey enjoyable."
        },
        {
          "name": "Pune to Ratnagiri Tempo Traveller Hire on Rent:",
          "description": "Travel from Pune to Ratnagiri with ease using our tempo traveller rental service. Ideal for both small and large groups, our tempo travellers ensure a smooth and comfortable ride to one of Konkan's most scenic destinations."
        },
        {
          "name": "Pune to Konkan Darshan Urbania on Rent:",
          "description": "Experience luxury and comfort with our Urbania rental for your Konkan Darshan. Perfect for larger groups or special occasions, the Urbania provides a high-end travel experience with premium amenities for exploring the Konkan region."
        },
        {
          "name": "Pune to Goa Urbania on Rent:",
          "description": "Make your trip to Goa memorable with our Urbania rentals. Ideal for groups and special events, the Urbania offers a luxurious and comfortable ride, making your journey from Pune to Goa as enjoyable as the destination itself."
        },
        {
          "name": "Amruta Travels Pune On Rent:",
          "description": "Amruta Travels is your trusted partner for all vehicle rental needs from Pune. We provide a range of options including tempo travellers, mini buses, and Urbania rentals to suit your travel requirements. Whether you're planning a trip to Konkan, Ratnagiri, or Goa, we ensure a smooth and enjoyable travel experience."
        },
        {
          "name": "Pune to Konkan Darshan Bus Hire Contact Number:",
          "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Pune to Konkan Darshan Bus Hire in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
      ],


      "tableData": [
    ["-Pune to Konkan Darshan Tempo Traveller Package", "-Mini Bus On Rent in Ratnagiri"],
    ["-Pune to Palghar Bus on Rent", "-Pune to Raigad Darshan Bus on Rent"],
    ["-Pune to Sindhudurg Bus Hire for Picnic", "-Pune to Konark Bus Hire for Picnic"],
    ["-Pune to Imagica Bus Hire for Picnic", "-Pune to Sawantwadi Bus Hire for Picnic"],
    ["-Pune to Konkan Darshan Urbania on Rent", "-Pune to Devgad Bus on Rent for Picnic"],
    ["-Hire Pune to Diveagar Mini Bus & Tempo Traveller on Rent", "-Amruta Travels Pune On Rent"],
    ["-Ganpatipule Tour Package from Pune", "-Pune to Alibaug Bus on Rent"],
    ["-Pune to Konkan Darshan Bus Package", "-Tempo Traveller on Rent for Konkan Trip from Pune"],
    ["-Pune to Ratnagiri Tempo Traveller Hire On Rent", "-Pune to Konkan Darshan Urbania on Rent"],
    ["-Pune to Ratnagiri Tempo Traveller Hire On Rent Near Me", "-Pune to Konkan Darshan Mini Bus on Rent"],
    ["-Pune to Konkan Darshan Urbania on Rent", "-Pune to Goa Urbania on Rent"],
    ["-Amruta Travels Pune On Rent", "-Amruta Travels Pune On Rent"]
  ],

  "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Pune to Konkan Darshan Bus Hire?",
      "WhyChoosedescription": "Amruta Travels is dedicated to providing exceptional bus hire services for your journey from Pune to Konkan, ensuring a comfortable, reliable, and enjoyable travel experience."
    },
    {
      "WhyChooseheading": "Diverse Fleet of Vehicles:",
      "WhyChoosedescription": "We offer a wide range of vehicles including 32, 35, 40, 45, and 50-seater buses, catering to different group sizes and preferences. Each vehicle is well-maintained and equipped with modern amenities for your convenience."
    },
    {
      "WhyChooseheading": "Comfort and Luxury:",
      "WhyChoosedescription": "Our buses are designed to provide maximum comfort with spacious seating, air conditioning, and clean interiors. We prioritize your comfort to ensure a pleasant journey."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers:",
      "WhyChoosedescription": "Our drivers are skilled professionals familiar with the Konkan routes. They are committed to ensuring a safe and smooth journey, providing courteous service throughout your trip."
    },
    {
      "WhyChooseheading": "Competitive and Transparent Pricing:",
      "WhyChoosedescription": "We offer competitive and transparent pricing with no hidden charges. Our rental packages are designed to provide value for money, accommodating various budget needs."
    },
    {
      "WhyChooseheading": "Flexible and Customizable Packages:",
      "WhyChoosedescription": "Whether you need a one-day trip or an extended tour, we offer flexible rental packages tailored to your specific itinerary and requirements, ensuring a trip that suits your needs."
    },
    {
      "WhyChooseheading": "Excellent Customer Service:",
      "WhyChoosedescription": "Our dedicated customer support team is available to assist with bookings, inquiries, and any issues that may arise during your trip. We strive to provide prompt and efficient service."
    },
    {
      "WhyChooseheading": "Well-Maintained Vehicles:",
      "WhyChoosedescription": "Safety and reliability are our top priorities. Our buses undergo regular maintenance and inspections to ensure they are in excellent condition for your journey."
    },
    {
      "WhyChooseheading": "Customized Itineraries:",
      "WhyChoosedescription": "We can help plan your trip and customize the itinerary to include must-visit spots in Konkan, ensuring you make the most of your journey and experience all that Konkan has to offer."
    },
    {
      "WhyChooseheading": "Safe and Secure Travel:",
      "WhyChoosedescription": "Safety is paramount. Our buses are equipped with safety features, and our drivers are trained to handle various road conditions to ensure a secure travel experience."
    },
    {
      "WhyChooseheading": "Positive Customer Feedback:",
      "WhyChoosedescription": "We have built a strong reputation for reliability and satisfaction, with clients consistently praising our professionalism and the quality of our service."
    },
    {
      "WhyChooseheading": "Easy Booking Process:",
      "WhyChoosedcription": "Booking with Amruta Travels is simple and convenient. Reservations can be made through our website, by phone, or in person, ensuring a hassle-free booking experience."
    }
  ]
};

const faqData = [
    {
        "question": "What types of buses are available for Pune to Konkan Darshan?",
        "answer": "We offer a range of buses including 32, 35, 40, 45, and 50-seater options. Our fleet includes both standard and luxury buses to accommodate different group sizes and comfort preferences."
    },
    {
        "question": "How do I book a bus for Konkan Darshan?",
        "answer": "You can book a bus by contacting us through our website, customer service hotline, or by visiting our office in person. Provide details such as trip dates, number of passengers, and any specific requirements."
    },
    {
        "question": "Are the buses equipped with air conditioning?",
        "answer": "Yes, all our buses are equipped with air conditioning to ensure a comfortable journey, regardless of the weather conditions."
    },
    {
        "question": "How much does it cost to hire a bus for Konkan Darshan?",
        "answer": "The cost varies based on factors such as the type of bus, duration of hire, and distance traveled. We offer transparent pricing and can provide a detailed quote based on your specific needs."
    },
    {
        "question": "Can I customize the itinerary for my Konkan trip?",
        "answer": "Absolutely! We can help you plan and customize your itinerary to include the top attractions and destinations in Konkan, ensuring a memorable and tailored travel experience."
    },
    {
        "question": "Are there any additional charges apart from the rental fee?",
        "answer": "Our pricing is transparent with no hidden charges. Any additional costs such as tolls or parking fees will be communicated in advance."
    },
    {
        "question": "How do I ensure the safety of my group during the trip?",
        "answer": "We prioritize safety by ensuring that all our buses are regularly maintained and inspected. Our experienced drivers are trained to handle various road conditions, ensuring a safe journey."
    },
    {
        "question": "What if I need to make changes to my booking?",
        "answer": "If you need to make changes to your booking, please contact us as soon as possible. We will do our best to accommodate changes based on availability and applicable terms and conditions."
    },
    {
        "question": "Is there a provision for luggage storage on the bus?",
        "answer": "Yes, our buses are equipped with ample luggage storage space to accommodate your belongings safely during the trip."
    },
    {
        "question": "How far in advance should I book the bus?",
        "answer": "We recommend booking as early as possible to secure your preferred vehicle and dates. However, we can also accommodate last-minute bookings based on availability."
    }
];



const testimonials = [
    {
        "name": "Mr. and Mrs. Deshmukh",
        "text": "Our journey to Konkan with Amruta Travels was exceptional! We hired a 45-seater bus for our family trip, and it was perfect. The bus was clean, comfortable, and well-equipped, making our long journey very pleasant. The driver was professional, courteous, and knew the best routes to take. Amruta Travels made our Konkan Darshan unforgettable, and we highly recommend their services for anyone planning a group trip!"
    },
    {
        "name": "Mr. and Miss Kumar",
        "text": "We recently used Amruta Travels for a corporate outing to Konkan, and the experience was fantastic. We rented a 35-seater bus, which was comfortable and in excellent condition. The driver was punctual and handled the trip with professionalism. Amruta Travels provided top-notch service, and our team enjoyed the trip immensely. We will definitely choose Amruta Travels for our future travel needs. Highly recommended!"
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
        heading: "Pune to Konkan Darshan Bus Hire Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Pune to Konkan Darshan Bus Hire | Konkan Yatra Bus Services</title>
  <meta name="description" content="Book buses and tempo travellers for Konkan Darshan from Pune, including tours to Ratnagiri, Raigad, Sindhudurg, Palghar, and other Konkan destinations. Customizable packages available for religious and picnic trips." />
  <meta name="keywords" content="Pune to Konkan Darshan Tempo Traveller package, Mini Bus On Rent in Ratnagiri, Pune to Palghar Bus on Rent, Pune to Raigad Darshan Bus on Rent, Pune to Sindhudurg Bus Hire for Picnic, Pune to Konark Bus Hire for Picnic, Pune to Imagica Bus Hire for Picnic, Pune to Sawantwadi Bus Hire for Picnic, Pune to Konkan Darshan Urbania on Rent, Pune to Devgad Bus on Rent for Picnic, Hire Pune to Diveagar Mini Bus & Tempo Traveller on Rent, Amruta Travels Pune On Rent, Ganpatipule Tour Package from Pune, Pune to Alibaug Bus on Rent, Pune to Konkan Darshan Bus Package, Tempo Traveller on Rent for Konkan Trip from Pune, Pune to Ratnagiri Tempo Traveller Hire On Rent, Pune to Konkan Darshan Urbania on Rent, Pune to Ratnagiri Tempo Traveller Hire Near Me, Pune to Konkan Darshan Mini Bus on Rent, Pune to Konkan Darshan Urbania on Rent, Pune to Goa Urbania on Rent, Amruta Travels Pune On Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels provides buses and tempo travellers for Konkan Darshan from Pune, covering popular tourist destinations like Ratnagiri, Raigad, Sindhudurg, Palghar, and more. We offer customized tour packages for families, groups, and corporate events.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-konkan-darshan-bus-hire",
        "logo": "https://amrutatravel.com/images/konkan-darshan-bus-hire.jpg",
        "image": "https://amrutatravel.com/images/konkan-darshan-bus-hire.jpg",
        "priceRange": "₹1200 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-konkan-darshan-bus-hire",
          "priceCurrency": "INR",
          "price": "1200",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "150"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Singh"
            },
            "datePublished": "2024-06-18",
            "reviewBody": "We hired a mini bus for a Konkan Darshan trip, and it was a wonderful experience. The bus was spacious and the driver was very professional."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Kumar"
            },
            "datePublished": "2024-09-05",
            "reviewBody": "Excellent service from Amruta Travels! We took the Ganpatipule tour package, and everything was perfect. Comfortable bus and friendly driver."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-konkan-darshan-bus-hire"
        },
        "keywords": "Pune to Konkan Darshan Tempo Traveller Package, Mini Bus On Rent in Ratnagiri, Pune to Palghar Bus on Rent, Pune to Raigad Darshan Bus on Rent, Pune to Sindhudurg Bus Hire for Picnic, Pune to Konark Bus Hire for Picnic, Pune to Imagica Bus Hire for Picnic, Pune to Sawantwadi Bus Hire for Picnic, Pune to Konkan Darshan Urbania on Rent, Pune to Devgad Bus on Rent for Picnic, Hire Pune to Diveagar Mini Bus & Tempo Traveller on Rent, Amruta Travels Pune On Rent, Ganpatipule Tour Package from Pune, Pune to Alibaug Bus on Rent, Pune to Konkan Darshan Bus Package, Tempo Traveller on Rent for Konkan Trip from Pune, Pune to Ratnagiri Tempo Traveller Hire On Rent, Pune to Konkan Darshan Urbania on Rent, Pune to Ratnagiri Tempo Traveller Hire Near Me, Pune to Konkan Darshan Mini Bus on Rent, Pune to Konkan Darshan Urbania on Rent, Pune to Goa Urbania on Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-24.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs – Pune to Konkan Darshan Bus Hire with Amruta Travels:</h3>
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
export default PuneToKonkanDarshanBusHire;