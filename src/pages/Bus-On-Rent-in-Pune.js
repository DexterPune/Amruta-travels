
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusOnRentInPune(){

  const cardData = 
    {
      keyword: 'Bus on Rent in Pune ',
      heading: 'Amruta Travels: Bus on Rent in Pune ',

      headingDescription: 'If you are looking for reliable and affordable bus on rent in Pune, Amruta Travels is your go-to solution. We provide a wide range of buses that cater to all your transportation needs, whether it is for corporate events, school excursions, family trips, or private tours. Our fleet is designed to offer maximum comfort, safety, and convenience for every journey. Below is a guide to our top bus rental options in Pune, ensuring you travel stress-free and in style.',


      top:"Top Bus on Rent in Pune:",
      "topPlaces": [
        {
          "title": "Luxury Bus on Rent in Pune",
          "description": "Experience the ultimate in comfort with our luxury bus on rent in Pune. Ideal for corporate events, weddings, or high-profile gatherings, our luxury buses are equipped with plush seating, modern amenities, and top-notch service. Enjoy a premium travel experience with Amruta Travels’ luxury bus rentals."
        },
        {
          "title": "40-Seater Bus on Rent in Pune",
          "description": "For large groups, our 40-seater buses on rent in Pune provide ample space and comfort. Whether it’s for a corporate outing, family reunion, or group tour, these buses are designed to offer a smooth ride with features that ensure everyone’s comfort throughout the journey."
        },
        {
          "title": "32-Seater Bus on Rent in Pune",
          "description": "Our 32-seater buses on rent in Pune are the perfect choice for medium-sized groups. Offering a balance between space and affordability, these buses are ideal for school trips, picnics, and group activities, ensuring a comfortable and enjoyable travel experience."
        },
        {
          "title": "17-Seater Mini Bus on Rent in Pune",
          "description": "For smaller groups or short trips, our 17-seater mini buses on rent in Pune offer a cozy and practical solution. Perfect for family outings or small corporate events, these mini buses are well-maintained and designed for a pleasant travel experience."
        },
        {
          "title": "Tempo Traveller on Rent in Pune",
          "description": "Looking for flexibility? Our tempo travellers on rent in Pune provide ample space for both passengers and luggage. Ideal for day trips or extended journeys, these vehicles are perfect for diverse travel needs, ensuring comfort and convenience throughout."
        },
        {
          "title": "Mini Bus on Rent in Pune",
          "description": "For those looking for a compact and comfortable option, our mini buses on rent in Pune are perfect. Designed for smaller groups, these buses offer convenience and ease of movement without compromising on comfort."
        },
        {
          "title": "Luxury Mini Bus on Rent in Pune",
          "description": "Our luxury mini buses on rent in Pune combine the benefits of a compact size with luxury features. Perfect for small groups who seek a premium travel experience, these buses feature plush interiors and modern amenities for a stylish ride."
        },
        {
          "title": "Bus on Rent in Hadapsar",
          "description": "Amruta Travels offers specialized bus rental services in Hadapsar, ensuring that local and outstation trips are covered efficiently. Our buses are well-maintained, offering a smooth and comfortable travel experience for all passengers."
        },
        {
          "title": "Bus on Rent in Baner",
          "description": "Baner residents and businesses can now access reliable bus on rent in Baner. Whether for corporate events, school outings, or personal trips, our services in Baner guarantee timely, efficient, and comfortable transportation solutions."
        },
        {
          "title": "Bus on Rent in Pimpri Chinchwad",
          "description": "For those in Pimpri Chinchwad, Amruta Travels provides a range of bus rental options suited to local and outstation needs. From large buses to smaller vehicles, we offer flexibility and comfort for any journey in and around Pune."
        }
      ],  
       
      "services": [
    {
      "name": "Pune to Goa Mini Bus on Rent",
      "description": "Travel from Pune to Goa in comfort with our mini bus on rent in Pune. Ideal for small to medium-sized groups, our mini buses offer a smooth and enjoyable journey, equipped with modern amenities to enhance your travel experience."
    },
    {
      "name": "Pune to Goa Tempo Traveller on Rent",
      "description": "For a flexible travel experience, choose our tempo travellers on rent in Pune. Perfect for group trips to Goa, our tempo travellers offer spacious seating and comfort, ensuring a hassle-free journey from Pune to Goa."
    },
    {
      "name": "Amruta Travels Pune",
      "description": "Amruta Travels is your trusted partner for Bus On Rent in Pune. We offer a wide range of vehicles, including mini buses, tempo travellers, and luxury buses for your trips from Pune to Goa and beyond. Our exceptional service guarantees a comfortable and enjoyable journey."
    },
    {
      "name": "Pune to Goa Urbania on Rent",
      "description": "Travel in style with our Urbania buses on rent in Pune. Equipped with modern amenities, these buses provide a luxury travel experience for your journey from Pune to Goa, ensuring comfort and convenience."
    },
    {
      "name": "Pune to Goa 17 Seater on Rent",
      "description": "Our 17-seater buses on rent in Pune are perfect for small groups traveling from Pune to Goa. Enjoy a cozy and comfortable ride with ample space for everyone and their belongings."
    },
    {
      "name": "Pune to Goa 14, 17, 25, 32 Seater on Rent",
      "description": "Choose the perfect size for your group with our 14-seater, 17-seater, 25-seater, or 32-seater buses on rent in Pune. We offer flexible options to accommodate your travel needs and ensure a comfortable journey to Goa."
    },
    {
      "name": "Pune to Goa 35, 45, 50 Seater on Rent",
      "description": "For larger groups, our 35-seater, 45-seater, and 50-seater buses on rent in Pune provide ample space and comfort for your journey from Pune to Goa. Enjoy a spacious and relaxing trip with our well-maintained buses."
    },
    {
      "name": "Bus on Rent in Pune",
      "description": "Looking for a reliable Bus On Rent in Pune? Amruta Travels offers a variety of buses for both local and outstation trips. Whether you need a mini bus, tempo traveller, or a large coach, our fleet is ready to meet your needs. All our vehicles are well-maintained, ensuring a comfortable and hassle-free journey."
    },
    {
      "name": "Pune to Goa Bus Package on Rent",
      "description": "Opt for our comprehensive bus packages on rent from Pune to Goa. These packages offer great value, covering transportation and additional services to make your journey convenient and cost-effective."
    },
    {
      "name": "Hire Pune to Goa Mini Bus & Tempo Traveller on Rent",
      "description": "Combine the flexibility of tempo travellers and mini buses on rent in Pune for your journey to Goa. We offer rental options for different group sizes and preferences, ensuring a comfortable and customized travel experience."
    },
    {
      "name": "Hire Tempo Traveller Minibus",
      "description": "For a versatile and comfortable travel solution, consider hiring a tempo traveller or mini bus on rent in Pune. These options provide space and comfort for your group, perfect for trips from Pune to Goa."
    },
    {
      "name": "Pune to Goa Bus Hire on Rent",
      "description": "Our bus hire services for Pune to Goa ensure a smooth and relaxing journey. Choose from our fleet of well-maintained buses to fit your group's needs and enjoy a comfortable trip."
    },
    {
      "name": "Pune to Goa AC Bus on Rent",
      "description": "For a premium travel experience, choose our AC buses on rent in Pune for your trip to Goa. Our air-conditioned buses provide a cool, comfortable environment, ensuring an enjoyable journey."
    },
    {
      "name": "Pune to Goa Bus Rental Service",
      "description": "Amruta Travels offers the best bus rental service from Pune to Goa. Our professional drivers and well-maintained buses ensure a seamless and enjoyable travel experience, making your journey stress-free and comfortable."
    },
    {
      "name": "Hire a Bus from Pune to Goa",
      "description": "Looking for the best bus rental options from Pune to Goa? Whether you need a mini bus, tempo traveller, or large coach, Amruta Travels offers flexible hire options, ensuring a convenient and enjoyable trip."
    },
    {
      "name": "Bus Rental Service Pune to Goa",
      "description": "For reliable and efficient bus rental services from Pune to Goa, choose Amruta Travels. Our extensive fleet, professional drivers, and customer-focused service guarantee a pleasant journey for your group."
    },
    {
      "name": "Pune to Goa Holiday Bus Rental",
      "description": "Make your holiday trip to Goa memorable with Amruta Travels' holiday bus rental services from Pune. Our well-maintained buses provide comfort and reliability for long-distance travel, ensuring a seamless experience."
    },
    {
      "name": "Pune to Goa Family Trip Bus Hire",
      "description": "Traveling with family to Goa? Choose Amruta Travels for your family trip bus hire from Pune. Our spacious and comfortable buses are designed for family vacations, providing a safe, enjoyable, and relaxing journey."
    },
    {
      "name": "Pune to Goa Weekend Getaway Bus Rental",
      "description": "For a stress-free weekend getaway to Goa, book a weekend getaway bus rental from Pune with Amruta Travels. Our buses are equipped with modern amenities to ensure a relaxing and enjoyable trip."
    },
    {
      "name": "Pune to Goa Corporate Bus Hire",
      "description": "Amruta Travels offers specialized corporate bus hire services from Pune to Goa. Whether for team-building events, corporate retreats, or business meetings, our buses provide a professional and comfortable travel experience."
    },
    {
      "name": "Pune to Goa Group Travel Bus Rental",
      "description": "For group travel, Amruta Travels offers a range of bus rental options to suit your needs. Our buses are perfect for group outings, tours, and other collective travel requirements, ensuring comfort and convenience throughout your journey."
    },
    {
      "name": "AC Bus Hire Pune to Goa",
      "description": "Travel in comfort with Amruta Travels’ AC bus hire service from Pune to Goa. Our air-conditioned buses ensure a cool and pleasant environment, making long-distance travel more enjoyable and relaxing."
    },
    {
      "name": "Comfortable Bus from Pune to Goa",
      "description": "Prioritize comfort with our comfortable bus rentals from Pune to Goa. Our buses are equipped with spacious seating and modern amenities, ensuring a comfortable and enjoyable ride for all passengers."
    },
    {
      "name": "32-Seater Bus Rental Pune to Goa",
      "description": "For medium-sized groups traveling from Pune to Goa, consider our 32-seater bus rental from Pune. Our well-maintained buses provide ample space, comfort, and a smooth travel experience."
    },
    {
      "name": "50-Seater Bus Hire from Pune to Goa",
      "description": "Planning a large group trip to Goa? Our 50-seater bus hire service from Pune offers plenty of space and comfort, ensuring a smooth and enjoyable journey for your entire group."
    },
    {
      "name": "Tempo Traveller on Rent in Pune for Corporate Events",
      "description": "For corporate events, choose our tempo traveller rental in Pune. We offer comfortable and efficient travel solutions for corporate teams, with modern amenities and a professional service to ensure a successful event."
    },
    {
      "name": "Luxury Tempo Traveller on Rent in Pashan Pune",
      "description": "Experience premium travel with our luxury tempo traveller rentals in Pashan, Pune. Perfect for special occasions or corporate events, our luxury tempo travellers provide exceptional comfort and style."
    },
    {
      "name": "Bus On Rent in Pune Contact Number",
      "description": "For Bus On Rent in Pune, contact Amruta Travels at +91 8421333435. We offer reliable and comfortable bus rental services for your local and outstation travel needs, ensuring a smooth and enjoyable ride."
    }
  ],

  "tableData": [
    ["-Pune to Goa Mini Bus on Rent", "-Pune to Goa Tempo Traveller on Rent"],
    ["-Amruta Travels Pune", "-Pune to Goa Urbania on Rent"],
    ["-Pune to Goa 17 Seater on Rent", "-Pune to Goa 14, 17, 25, 32 Seater on Rent"],
    ["-Pune to Goa 35, 45, 50 Seater on Rent", "-Pune to Goa Bus Package on Rent"],
    ["-Hire Pune to Goa Mini Bus & Tempo Traveller on Rent", "-Hire Tempo Traveller Minibus"],
    ["-Bus on Rent in Pune", "-Pune to Goa Bus Hire on Rent"],
    ["-Pune to Goa AC Bus on Rent", "-Pune to Goa Bus Rental Service"],
    ["-Hire a Bus from Pune to Goa", "-Pune to Goa Holiday Bus Rental"],
    ["-Pune to Goa Family Trip Bus Hire", "-Pune to Goa Weekend Getaway Bus Rental"],
    ["-Pune to Goa Corporate Bus Hire", "-Pune to Goa Group Travel Bus Rental"],
    ["-AC Bus Hire Pune to Goa", "-Comfortable Bus from Pune to Goa"],
    ["-32-Seater Bus Rental Pune to Goa", "-50-Seater Bus Hire from Pune to Goa"],
    ["-Tempo Traveller on Rent in Pune for Corporate Events", "-Luxury Tempo Traveller on Rent in Pashan Pune"]
],


"whychoose": [
  {
    "WhyChooseheading": "Why Choose Amruta Travels for Bus On Rent in Pune?",
    "WhyChoosedescription": "Amruta Travels offers top-notch Bus On Rent in Pune, designed to cater to various travel needs. Our services focus on comfort, safety, and affordability, ensuring you have a seamless travel experience every time."
  },
  {
    "WhyChooseheading": "Extensive Fleet Options for Bus On Rent in Pune:",
    "WhyChoosedescription": "We provide a diverse range of buses on rent in Pune, from luxury coaches to standard AC/non-AC buses. Whether you're planning a small family trip or need transport for a large corporate event, our fleet has the perfect bus to meet your needs."
  },
  {
    "WhyChooseheading": "Comfort & Safety with Bus On Rent in Pune:",
    "WhyChoosedescription": "When you choose Bus On Rent in Pune from Amruta Travels, you can expect modern amenities, including comfortable seating, air conditioning, and entertainment systems. Our buses are regularly serviced, meeting the highest safety standards to ensure a secure and pleasant journey."
  },
  {
    "WhyChooseheading": "Experienced & Professional Drivers for Bus On Rent in Pune:",
    "WhyChoosedescription": "Our drivers are skilled, experienced, and well-acquainted with Pune's local routes. When you hire Bus On Rent in Pune, you can trust our drivers to ensure a smooth, timely, and safe travel experience while providing excellent customer service."
  },
  {
    "WhyChooseheading": "Affordable & Transparent Pricing for Bus On Rent in Pune:",
    "WhyChoosedescription": "Amruta Travels offers Bus On Rent in Pune with affordable and transparent pricing. We believe in providing value for money, with no hidden costs. Whether you’re hiring a bus for a city tour or a long-distance trip, our pricing structure is designed to fit your budget."
  },
  {
    "WhyChooseheading": "Customizable Packages for Bus On Rent in Pune:",
    "WhyChoosedescription": "We understand that every trip is unique. Amruta Travels offers flexible and customizable bus rental packages in Pune tailored to your specific requirements. Whether you need a bus for a corporate outing, wedding, school trip, or sightseeing tour, we can personalize the service to match your schedule and preferences."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Bus On Rent in Pune:",
    "WhyChoosedescription": "Our dedicated customer support team is available 24/7 to assist you with bookings, route planning, and any other queries regarding Bus On Rent in Pune. We're here to ensure a hassle-free experience for you from start to finish."
  },
  {
    "WhyChooseheading": "Punctuality and Reliability for Bus On Rent in Pune:",
    "WhyChoosedescription": "At Amruta Travels, we value your time. When you book a Bus On Rent in Pune, we ensure punctual arrivals and departures, so your event or trip runs smoothly without delays."
  }
]
};

const faqData = [
  {
      "question": "What types of buses are available for rent?",
      "answer": "We offer a variety of buses including luxury coaches, semi-luxury buses, AC/non-AC buses, and mini-buses to accommodate different group sizes and preferences."
  },
  {
      "question": "How many passengers can your buses accommodate?",
      "answer": "Our buses can accommodate anywhere between 18 to 50 passengers, depending on the model you choose."
  },
  {
      "question": "Can I book a bus for an outstation trip?",
      "answer": "Yes, we provide bus rental services for both local travel within Pune and outstation trips across Maharashtra and beyond."
  },
  {
      "question": "How do I make a booking for a bus on rent?",
      "answer": "You can book a bus through our website, call our customer service hotline, or visit our office. We recommend booking in advance, especially during peak seasons."
  },
  {
      "question": "Do your buses come with a driver?",
      "answer": "Yes, all our buses come with professional, experienced drivers who are familiar with local and long-distance routes to ensure a safe and smooth journey."
  },
  {
      "question": "What are your payment options?",
      "answer": "We accept multiple payment methods, including online transfers, credit/debit cards, and cash payments."
  },
  {
      "question": "Are there any additional charges for fuel or tolls?",
      "answer": "Our pricing is transparent, and any additional charges such as fuel and tolls will be clearly mentioned upfront during the booking process."
  },
  {
      "question": "Can I rent a bus for a few hours?",
      "answer": "Yes, we offer flexible rental options, whether you need a bus for a few hours, a full day, or an extended trip."
  },
  {
      "question": "Is there a cancellation policy?",
      "answer": "Yes, we have a cancellation policy in place. You can cancel your booking; however, cancellation charges may apply depending on the timing of the cancellation."
  }
];




const testimonials = [
  {
      "name": "Mr. Rahul Mehta",
      "text": "We booked a luxury bus from Amruta Travels for our corporate event, and the experience was fantastic! The bus was extremely comfortable, spacious, and well-maintained. The driver was very professional and navigated through the city smoothly. The entire team at Amruta Travels ensured that our group was well taken care of from start to finish. I highly recommend their bus rental service in Pune for any occasion!"
  },
  {
      "name": "Miss Sneha Kulkarni",
      "text": "Amruta Travels made our family trip to Lonavala truly enjoyable! We rented a bus for 30 people, and the service exceeded our expectations. The booking process was easy, the rates were very reasonable, and the bus arrived right on time. Our driver was friendly, skilled, and knew the best routes. We felt safe and comfortable throughout the journey. I will definitely use their services again for future trips!"
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
        heading: "Bus On Rent in Pune Contact Number:",
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
     

          const jsonLdSchema = [
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Amruta Travels",
              "description": "Amruta Travels offers premium bus hire services in Pune. Rent mini buses, tempo travellers, and luxury buses for family, group, or corporate travel.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411041",
                "addressCountry": "IN"
              },
              "telephone": "+91-8421333435",
              "url": "https://amrutatravel.com/Bus-On-Rent-In-Pune",
              "logo": "https://amrutatravel.com/images/bus-hire-goa-trip.jpg",
              "image": "https://amrutatravel.com/images/bus-hire-goa-trip.jpg",
              "priceRange": "₹4500 - ₹35000",
              "serviceArea": {
                "@type": "Place",
                "name": "Pune",
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "18.5204",
                  "longitude": "73.8567"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "180"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Rajesh Kumar" },
                  "datePublished": "2024-07-10",
                  "reviewBody": "We hired a 32-seater AC bus from Pune to Goa. The journey was comfortable, and the bus was very well maintained. Highly recommend Amruta Travels for group trips."
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Sonal Mehta" },
                  "datePublished": "2024-08-05",
                  "reviewBody": "Great experience hiring a tempo traveller for a corporate trip to Goa. On-time service and great comfort throughout the trip!"
                }
              ]
            }
          ];
        
    return(
        <div>
          <GoogleAnalytics/>
          <Helmet>
        <title>Bus On Rent in Pune ₹58 Per Km | Amruta Travels</title>
        <meta
          name="description"
          content="Looking for a bus on rent in Pune? Whether for family outings, corporate events, weddings, or group tours, we offer 17 to 50-seater buses for a hassle-free experience."
        />
        <meta
          name="keywords"
          content="Bus On Rent in Pune, Luxury Bus Hire, Mini Bus Rental Pune, AC Bus Rental, Pune to Goa Bus Hire, Wedding Bus Rental, Corporate Bus Service Pune"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
        <meta property="og:title" content="Bus On Rent in Pune ₹58 Per Km | Amruta Travels" />
        <meta property="og:description" content="Affordable bus rental in Pune for family trips, weddings, and corporate events. Book luxury mini buses and AC buses at the best price." />
        <meta property="og:image" content="https://amrutatravel.com/img/Bus-on-rent-in-pune.jpeg" />
        <meta property="og:url" content="https://amrutatravel.com/Bus-On-Rent-In-Pune" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Bus On Rent in Pune ₹58 Per Km | Amruta Travels" />
        <meta name="twitter:description" content="Need a bus rental in Pune? Get 17 to 50-seater luxury buses for group tours, weddings, and corporate travel. Best prices guaranteed!" />
        <meta name="twitter:image" content="https://amrutatravel.com/images/bus-hire-goa-trip.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
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
    <img src='/img/Bus-on-rent-in-pune.jpeg' alt='img'/>
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
      <h3 className='Colo'>FAQs for “Bus on Rent in Pune” – Amruta Travels:</h3>
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
export default BusOnRentInPune;