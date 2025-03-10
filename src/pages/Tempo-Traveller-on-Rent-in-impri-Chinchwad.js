
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  TempoPimpari(){

  const cardData = 
    {
      keyword: 'Tempo Traveller on Rent in Pimpri Chinchwad ',
      heading: 'Amruta Travels: Tempo Traveller on Rent in Pimpri Chinchwad',

      headingDescription: 'Are you planning a family trip, corporate outing, or group tour in Pimpri Chinchwad? Look no further! Amruta Travels offers the best Tempo Traveller on Rent in Pimpri Chinchwad, designed to provide comfort, convenience, and affordability. Whether you’re traveling within the city or to nearby destinations, our well-maintained tempo travellers are perfect for making your journey enjoyable and hassle-free.',

      top:"Top Features of Tempo Traveller on Rent by Amruta Travels:",

       topPlaces : [
        {
            "title": "Spacious Interiors",
            "description": "Amruta Travels' tempo travellers are designed with spacious interiors to accommodate groups of 9 to 26 passengers comfortably. Whether you're traveling with friends or family, there's plenty of room for everyone to sit back and relax."
        },
        {
            "title": "Comfortable Seating",
            "description": "Each seat in our tempo traveller is ergonomically designed with cushioned upholstery, offering ample legroom and reclining options. You can enjoy a smooth ride even on long journeys, thanks to the high-quality seating arrangements."
        },
        {
            "title": "Air-Conditioned Comfort",
            "description": "Traveling in the heat of Pimpri Chinchwad can be tiring, but not in our fully air-conditioned tempo travellers. The powerful AC system ensures a pleasant environment, keeping you cool and comfortable throughout your trip."
        },
        {
            "title": "Entertainment System",
            "description": "Keep your group entertained with our in-built entertainment systems. With options like LED TV, music system, and USB charging ports, your journey will never feel dull. You can watch movies or listen to your favorite tunes on the go."
        },
        {
            "title": "Ample Luggage Space",
            "description": "Our tempo travellers offer generous luggage storage, making it convenient to carry all your bags and belongings without compromising on space for passengers. Whether it's suitcases or camping gear, everything has a place."
        },
        {
            "title": "Experienced Drivers",
            "description": "Safety is our top priority at Amruta Travels. Our tempo travellers come with professional, licensed, and experienced drivers who are familiar with the routes in and around Pimpri Chinchwad, ensuring a smooth and secure journey."
        },
        {
            "title": "GPS Tracking",
            "description": "All tempo travellers are equipped with GPS tracking systems. This feature ensures safety and provides real-time updates on your travel route, helping you stay informed about your trip’s progress."
        },
        {
            "title": "Well-Maintained Fleet",
            "description": "At Amruta Travels, we take pride in the cleanliness and maintenance of our vehicles. Our tempo travellers undergo regular inspections and servicing to ensure they’re in top condition for every journey, offering a reliable and smooth ride."
        },
        {
            "title": "Affordable Pricing",
            "description": "We believe in offering high-quality services at competitive prices. With Amruta Travels, you get the best value for your money, with transparent pricing and no hidden charges. Enjoy luxurious travel at affordable rates."
        },
        {
            "title": "Customizable Travel Packages",
            "description": "We offer tailor-made travel packages to suit your needs. Whether it's a one-day trip, a weekend getaway, or a long-distance tour, Amruta Travels provides flexible rental options and personalized services to match your itinerary."
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
      "name": "25 Seater Tempo Traveller on Rent in Pune Contact Number",
      "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient 25 Seater Tempo Traveller on Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
    }
  ],

  "tableData": [
    ["-Tempo Traveller on Rent in Pimpri Chinchwad", "-17 Seater Tempo Traveller on Rent in Pimpri Chinchwad"],
    ["-13 Seater Tempo Travellers on Rent in Pimpri Chinchwad", "-9, 12, 14, 17, 20, 24 Seater Tempo Traveller on Rent in Pune"],
    ["-17 Seater Tempo Traveller on Rent in Baner", "-Tempo Traveller Hire in Hinjewadi"],
    ["-Tempo Traveller Hire in Aundh Pune", "-Pimpri Chinchwad to Shirdi Tempo Traveller on Rent"],
    ["-Tempo Traveller on Rent in Bhosari", "-25 Seater Bus on Rent in Pune"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Tempo Traveller on Rent in Pimpri Chinchwad?",
      "WhyChoosedescription": "When it comes to group travel in Pimpri Chinchwad, Amruta Travels stands out as the best choice for hiring a Tempo Traveller. We offer diverse fleet options, comfort, luxury, well-maintained vehicles, and professional drivers to ensure a smooth and enjoyable journey."
    },
    {
      "WhyChooseheading": "Diverse Fleet Options",
      "WhyChoosedescription": "Amruta Travels offers a wide range of tempo travellers, from 9-seaters to 24-seaters, ensuring that you can choose the perfect vehicle for your group size, whether it's a small family outing or a large corporate event."
    },
    {
      "WhyChooseheading": "Comfort and Luxury",
      "WhyChoosedescription": "Our tempo travellers are designed for maximum comfort with cushioned, reclining seats, air-conditioning, ample legroom, and advanced suspension systems, providing a smooth and relaxing journey."
    },
    {
      "WhyChooseheading": "Well-Maintained Vehicles",
      "WhyChoosedescription": "Each vehicle in our fleet is regularly inspected and serviced to ensure top-notch performance, cleanliness, and hygiene, so you can expect a neat and well-maintained vehicle every time you travel with us."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our experienced, licensed, and professional drivers know the local routes well. Their courteous behavior and punctuality ensure a hassle-free travel experience."
    },
    {
      "WhyChooseheading": "Affordable Pricing",
      "WhyChoosedescription": "We offer competitive pricing that is affordable without compromising on quality. Our transparent pricing policy means no hidden costs, providing excellent value for your money."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "We offer customizable travel packages to fit your schedule and budget, whether you're planning a one-day trip, a weekend getaway, or a long-distance journey. Personalized travel plans are available to meet your specific needs."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Amruta Travels operates round the clock, so no matter what time of day you need to travel, we are ready to serve you. Our 24/7 customer service ensures prompt booking assistance and support during your journey."
    },
    {
      "WhyChooseheading": "Safety First",
      "WhyChoosedescription": "Your safety is our top priority. Our tempo travellers are equipped with GPS tracking, seat belts, and first-aid kits. We strictly adhere to all safety regulations to ensure a safe and secure journey."
    },
    {
      "WhyChooseheading": "On-Time Service",
      "WhyChoosedescription": "We pride ourselves on punctuality. Our drivers will be on time, whether you need to be picked up early in the morning or late at night, ensuring you reach your destination without delays."
    },
    {
      "WhyChooseheading": "Excellent Customer Reviews",
      "WhyChoosedescription": "Amruta Travels has earned a reputation for providing exceptional service. Our satisfied customers attest to the smooth, comfortable, and memorable travel experiences we offer."
    }
  ]

    };

    
    
    const faqData = [
      {
          "question": "What seating options do you offer for tempo travellers?",
          "answer": "Amruta Travels offers a variety of seating options including 9, 12, 13, 14, 17, 20, and 24-seater tempo travellers, ensuring you find the perfect vehicle for your group size."
      },
      {
          "question": "Can I book a tempo traveller for outstation trips?",
          "answer": "Yes, you can! We provide tempo traveller services not just for local travel but also for outstation trips from Pimpri Chinchwad to popular destinations like Shirdi, Mahabaleshwar, and Lonavala."
      },
      {
          "question": "How do I book a tempo traveller with Amruta Travels?",
          "answer": "You can easily book a tempo traveller by contacting us via phone, email, or through our website. Our 24/7 customer service team is always ready to assist with bookings and inquiries."
      },
      {
          "question": "Are your tempo travellers equipped with air-conditioning?",
          "answer": "Yes, all our tempo travellers are fully air-conditioned to provide a comfortable and pleasant travel experience, especially during long trips and in hot weather."
      },
      {
          "question": "Do your tempo travellers have enough luggage space?",
          "answer": "Yes, our tempo travellers are designed with ample luggage space to accommodate the baggage of all passengers comfortably."
      },
      {
          "question": "Is there an entertainment system in your tempo travellers?",
          "answer": "Yes, our tempo travellers come equipped with entertainment features such as LED TVs, music systems, and charging ports, ensuring an enjoyable journey for all passengers."
      },
      {
          "question": "Do you offer tempo traveller services for weddings and events?",
          "answer": "Absolutely! We specialize in providing tempo travellers for weddings, corporate events, family functions, and group tours. We ensure that your guests travel in comfort and style."
      },
      {
          "question": "Is it possible to customize my trip itinerary with Amruta Travels?",
          "answer": "Yes, we offer customizable travel packages. Whether you need a tempo traveller for a short trip or a long-distance journey, we can tailor our services to fit your specific needs and schedule."
      },
      {
          "question": "What safety measures do you have in place?",
          "answer": "Safety is our priority. All tempo travellers are equipped with GPS tracking, seat belts, and first-aid kits. Our drivers are also experienced and trained to prioritize the safety of all passengers."
      },
      {
          "question": "How much does it cost to rent a tempo traveller in Pimpri Chinchwad?",
          "answer": "The cost depends on the size of the tempo traveller and the duration of your rental. We offer competitive and transparent pricing with no hidden charges. Contact us for a personalized quote based on your travel requirements."
      }
  ];
  
  const testimonials = [
    {
        "text": "We recently rented a 17-seater tempo traveller from Amruta Travels for a family trip from Pimpri Chinchwad to Mahabaleshwar, and the experience was fantastic! The vehicle was clean, spacious, and well-maintained, providing a comfortable journey for everyone. Mr. Rakesh, the driver, was polite, punctual, and knew the route well, which made the trip stress-free. Amruta Travels' customer service was also top-notch, and the booking process was seamless. I highly recommend their tempo traveller rental service for any group travel needs!",
        "name": "Mr. Rakesh Patil",
    },
    {
        "text": "Amruta Travels made our corporate outing from Pimpri Chinchwad to Lonavala absolutely perfect. We hired a 20-seater tempo traveller, and the entire team was impressed with the comfort and luxury of the vehicle. The air-conditioning, reclining seats, and entertainment system added to the pleasant journey. Miss Sonal, our coordinator, ensured everything went smoothly with the booking and driver arrangements. Overall, Amruta Travels provided an excellent tempo traveller rental experience, and we will definitely choose them again for future trips!",
        "name": "Miss Sonal Desai",
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
        heading: "Tempo Traveller on Rent in Pimpri Chinchwad Contact Number:  ",
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
  <title>Contact: +91 8421333435 | Amruta Travel | Tempo Traveller on Rent in Pimpri Chinchwad | Hire 9 to 25 Seater Tempo Traveller for Picnics, Corporate & Outstation Trips</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent a Tempo Traveller for family trips, picnics, corporate events, and outstation journeys. Available in Pimpri Chinchwad and nearby areas like Baner, Hinjewadi, and Aundh.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shivaji Nagar, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411005",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/tempo-traveller-on-rent-pimpri-chinchwad",
        "logo": "https://amrutatravel.com/images/tempo-traveller-pimpri-chinchwad.jpg",
        "image": "https://amrutatravel.com/images/tempo-traveller-pimpri-chinchwad.jpg",
        "priceRange": "₹5000 - ₹20000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/tempo-traveller-on-rent-pimpri-chinchwad",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "7200"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Kulkarni"
            },
            "datePublished": "2024-09-10",
            "reviewBody": "Highly recommend Amruta Travels for tempo hire in Pimpri Chinchwad. The vehicle was clean, and the driver was punctual. Perfect for our group outing."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sheetal Deshmukh"
            },
            "datePublished": "2024-08-30",
            "reviewBody": "We rented a 17-seater tempo for a trip to Shirdi. The experience was seamless and enjoyable. Will definitely use this service again."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pimpri Chinchwad, Pune",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.6271",
            "longitude": "73.7983"
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://amrutatravel.com/tempo-traveller-on-rent-pimpri-chinchwad"
        },
        "keywords": "Tempo Traveller on Rent in Pimpri Chinchwad, Pimpri Chinchwad to Shirdi Tempo Traveller, 17 Seater Tempo Traveller on Rent, Tempo Traveller Hire in Baner, Tempo Traveller Hire in Hinjewadi, 25 Seater Bus on Rent Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-10.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs - "Tempo Traveller on Rent in Pimpri Chinchwad" Amruta Travels:</h3>
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
export default TempoPimpari;