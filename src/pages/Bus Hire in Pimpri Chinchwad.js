
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function BusHireInPimpriChinchwad(){

  const cardData = 
    {
      keyword: ' Bus Hire in Pimpri Chinchwad',
      heading: ' Amruta Travels: Bus Hire in Pimpri Chinchwad ',

      headingDescription: 'When it comes to reliable and comfortable bus hire services in Pimpri Chinchwad, Amruta Travels stands out as a top choice. Whether you need a bus for a corporate event, family outing, school trip, or any other occasion, we offer a range of options tailored to meet your needs. Our extensive fleet and commitment to quality ensure that your journey is smooth and enjoyable. Here’s a look at the top bus hire options we provide in Pimpri Chinchwad:',

      top:"Bus Hire in Pimpri Chinchwad:",
       topPlaces : [
        {
            "title": "35-Seater Bus Hire:",
            "description": "Ideal for medium-sized groups, our 35-seater buses are perfect for corporate outings, family reunions, and group tours. These buses offer a comfortable ride with ample seating and storage space."
        },
        {
            "title": "40-Seater Bus Hire:",
            "description": "For slightly larger groups, our 40-seater buses provide extra comfort and space. They are well-suited for school trips, inter-city travel, and group vacations, ensuring a pleasant journey for everyone."
        },
        {
            "title": "45-Seater Bus Hire:",
            "description": "Our 45-seater buses cater to larger groups needing more room. With spacious seating and modern amenities, these buses are perfect for corporate events, weddings, and other significant gatherings."
        },
        {
            "title": "50-Seater Bus Hire:",
            "description": "Our 50-seater buses offer the largest capacity for big groups. Whether it's a large corporate event, a team-building exercise, or a major family celebration, these buses provide ample space and comfort."
        },
        {
            "title": "Luxury AC Bus Hire:",
            "description": "For a touch of luxury, our AC buses come equipped with climate control, comfortable seating, and additional amenities. Perfect for long journeys and special occasions, these buses ensure a premium travel experience."
        },
        {
            "title": "Mini Bus Hire:",
            "description": "Our mini buses are an excellent choice for smaller groups or more intimate gatherings. With seating options ranging from 14 to 32 seats, these buses are ideal for short trips and local travel."
        },
        {
            "title": "Urbania Bus Hire:",
            "description": "Experience the comfort and sophistication of our Urbania buses. These premium vehicles offer advanced features and plush interiors, making them perfect for high-end travel needs."
        },
        {
            "title": "Tempo Traveller Hire:",
            "description": "Our tempo travellers provide a compact yet comfortable option for group travel. Ideal for shorter trips and smaller groups, they offer flexibility and ease of maneuverability."
        },
        {
            "title": "School Bus Hire:",
            "description": "We offer specially designed buses for school trips, ensuring safety and comfort for students. Our school buses are well-maintained and equipped with all necessary safety features."
        },
        {
            "title": "Wedding Bus Hire:",
            "description": "Make your special day even more memorable with our wedding bus hire service. Our buses are decorated and customized to match your wedding theme, providing a stylish and comfortable transportation solution for you and your guests."
        }
    ],    
    
  "services": [
    {
      "name": "Bus Hire in Pimpri Chinchwad for Outstation:",
      "description": "For outstation trips, our bus hire service in Pimpri Chinchwad provides comfortable and reliable transportation. Whether you’re heading to nearby cities or distant destinations, our well-maintained buses ensure a smooth and pleasant journey."
    },
    {
      "name": "Bus Rental in Pimpri Chinchwad:",
      "description": "Amruta Travels offers comprehensive bus rental services in Pimpri Chinchwad. Choose from a variety of bus sizes and types to meet your specific needs, from family outings to corporate events."
    },
    {
      "name": "Bus on Rent Near Me Pimpri Chinchwad:",
      "description": "Looking for a bus rental near you in Pimpri Chinchwad? Our service provides convenient options for renting a bus close to your location, making it easy to book the vehicle you need for your trip."
    },
    {
      "name": "Urbania Bus on Rent in Pimpri Chinchwad:",
      "description": "For a luxurious and comfortable travel experience, consider renting an Urbania bus in Pimpri Chinchwad. Ideal for special events or high-profile trips, the Urbania offers premium amenities and ample space."
    },
    {
      "name": "14, 17, 25, 32 Seater on Rent in Pimpri Chinchwad:",
      "description": "Our fleet includes a range of bus sizes to suit different group sizes. Whether you need a 14-seater for a small group or a 32-seater for a larger gathering, we have the right vehicle for your needs."
    },
    {
      "name": "35, 40, 45, 50 Seater on Rent in Pimpri Chinchwad:",
      "description": "For larger groups, we offer buses ranging from 35 to 50 seats. These spacious buses are perfect for corporate outings, family reunions, or any event requiring ample seating and comfort."
    },
    {
      "name": "AC Tempo Traveller on Rent in Pimpri Chinchwad:",
      "description": "Our AC tempo travellers are ideal for those seeking a comfortable and climate-controlled vehicle for travel. Perfect for both short and long trips, these vehicles ensure a pleasant journey with air conditioning and comfortable seating."
    },
    {
      "name": "Mini Bus on Rent in Chinchwad:",
      "description": "For smaller groups or intimate gatherings, our mini buses provide a convenient and comfortable option. Explore Chinchwad and surrounding areas with ease using our well-maintained mini buses."
    },
    {
      "name": "Bus Hire for School Picnic in Pimpri Chinchwad:",
      "description": "Planning a school picnic? Our bus hire service in Pimpri Chinchwad is perfect for transporting students and staff to and from picnic locations. Enjoy a safe and comfortable ride with our dedicated school trip buses."
    },
    {
      "name": "Corporate Bus Hire in Pimpri Chinchwad:",
      "description": "Our corporate bus hire service is tailored to meet the needs of business groups. Whether for meetings, conferences, or team-building events, we offer comfortable and reliable buses to ensure your corporate transportation is seamless."
    },
    {
      "name": "Bus Hire in Pimpri Chinchwad for Wedding Function:",
      "description": "Make your wedding day special with our bus hire service in Pimpri Chinchwad. We offer stylish and comfortable buses to transport guests to and from wedding functions, ensuring a smooth and elegant experience."
    },
    {
      "name": "Bus Hire for Events Party in Pimpri Chinchwad:",
      "description": "For parties and special events, our bus hire service provides a fun and convenient way to transport guests. Choose from our range of buses to accommodate your party needs and ensure everyone arrives in comfort."
    },
    {
      "name": "Amruta Travels Pune On Rent:",
      "description": "Amruta Travels is your trusted partner for all bus rental needs in Pimpri Chinchwad. With a wide range of vehicles including Urbania buses, mini buses, tempo travellers, and more, we are dedicated to providing exceptional service for any occasion."
    },
    {
      "name": "Bus Hire in Pimpri Chinchwad Contact Number:",
      "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus Hire in Pimpri Chinchwad. We ensure a smooth and enjoyable ride for all our customers."
    }
  ],


  "tableData": [
    ["- Bus Hire in Pimpri Chinchwad for Outstation", "- Bus Rental in Pimpri Chinchwad"],
    ["- Bus on Rent Near Me Pimpri Chinchwad", "- Urbania Bus on Rent in Pimpri Chinchwad"],
    ["- 14, 17, 25, 32 Seater on Rent in Pimpri Chinchwad", "- 35, 40, 45, 50 Seater on Rent in Pimpri Chinchwad"],
    ["- AC Tempo Traveller on Rent in Pimpri Chinchwad", "- Bus on Rent in Pimpri Chinchwad"],
    ["- Mini Bus on Rent in Chinchwad", "- Bus Hire for School Picnic in Pimpri Chinchwad"],
    ["- Corporate Bus Hire in Pimpri Chinchwad", "- Bus Hire in Pimpri Chinchwad for Wedding Function"],
    ["- Bus Hire for Events Party in Pimpri Chinchwad", "- Amruta Travels Pune On Rent"]
  ],

  "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Bus Hire in Pimpri Chinchwad?",
      "WhyChoosedescription": "Amruta Travels is committed to providing top-notch bus hire services in Pimpri Chinchwad, ensuring a seamless, comfortable, and reliable travel experience for all our customers."
    },
    {
      "WhyChooseheading": "Diverse Fleet of Vehicles:",
      "WhyChoosedescription": "Our extensive fleet includes a variety of vehicles, from mini buses to 50-seater options, catering to different group sizes and travel needs. Whether you need a compact bus for a small group or a spacious one for a large event, we have the perfect vehicle for you."
    },
    {
      "WhyChooseheading": "Comfort and Convenience:",
      "WhyChoosedescription": "We prioritize passenger comfort with our well-equipped buses featuring air conditioning, plush seating, and ample legroom. Our vehicles are designed to provide a pleasant and enjoyable journey, making sure you arrive at your destination refreshed."
    },
    {
      "WhyChooseheading": "Professional and Experienced Drivers:",
      "WhyChoosedescription": "Our drivers are highly trained and experienced, ensuring safe and efficient transportation. They are familiar with the routes around Pimpri Chinchwad and are dedicated to providing a smooth and comfortable travel experience."
    },
    {
      "WhyChooseheading": "Competitive Pricing:",
      "WhyChoosedescription": "We offer transparent and competitive pricing with no hidden fees. Our detailed quotes ensure that you know the costs upfront, allowing you to make an informed decision and get the best value for your money."
    },
    {
      "WhyChooseheading": "Customizable Packages:",
      "WhyChoosedescription": "Our bus hire packages are flexible and customizable to meet your specific needs. Whether it's for corporate events, family gatherings, school trips, or special occasions, we work with you to create a package that fits your requirements and budget."
    },
    {
      "WhyChooseheading": "Reliable Service:",
      "WhyChoosedescription": "Reliability and punctuality are core to our service. We ensure that our buses are well-maintained and adhere to strict schedules, so you can count on us to be on time for every trip."
    },
    {
      "WhyChooseheading": "Excellent Customer Support:",
      "WhyChoosedescription": "Our customer support team is dedicated to assisting you throughout the booking process and during your journey. We are here to address any questions or concerns you may have, ensuring a smooth and hassle-free experience."
    },
    {
      "WhyChooseheading": "Safety and Cleanliness:",
      "WhyChoosedescription": "Safety is a top priority at Amruta Travels. Our buses undergo regular maintenance and inspections to ensure they are in optimal condition. We also maintain high standards of cleanliness to provide a hygienic environment for our passengers."
    }
  ]
    };

    const faqData = [
        {
            "question": "What types of buses are available for hire in Pimpri Chinchwad?",
            "answer": "We offer a range of buses including 14-seater, 17-seater, 32-seater, 35-seater, 40-seater, and 50-seater options. We also provide mini buses, luxury buses, and tempo travellers to suit various group sizes and preferences."
        },
        {
            "question": "How can I book a bus with Amruta Travels?",
            "answer": "Booking is simple! You can contact us via phone or email to discuss your requirements. Our customer service team will assist you with availability, pricing, and booking details to ensure a seamless reservation process."
        },
        {
            "question": "Are the buses equipped with air conditioning?",
            "answer": "Yes, we offer both AC and non-AC buses. For added comfort, especially during hot weather, we recommend our AC buses which are equipped with climate control systems."
        },
        {
            "question": "What amenities are provided on the buses?",
            "answer": "Our buses are equipped with a range of amenities including comfortable seating, air conditioning (for AC buses), ample luggage space, and sometimes onboard entertainment. Specific amenities may vary depending on the type of bus you choose."
        },
        {
            "question": "Is there a minimum or maximum number of passengers required?",
            "answer": "We accommodate various group sizes. Whether you need a small mini bus for a few people or a large 50-seater bus for a big group, we have options to fit your needs. For exact requirements, please contact us for detailed information."
        },
        {
            "question": "Are there any additional charges?",
            "answer": "Our pricing is transparent with no hidden costs. The total cost depends on factors such as the type of bus, distance, and duration of hire. We provide detailed quotes, so you are aware of the full cost before confirming your booking."
        },
        {
            "question": "Can I customize my bus hire package?",
            "answer": "Yes, we offer customizable packages to meet your specific needs. Whether you have special requirements for pickup and drop-off locations or need additional services, we can tailor a package to suit your preferences."
        },
        {
            "question": "What should I do if there is a delay or issue during the trip?",
            "answer": "If you encounter any issues during your trip, please contact our customer support team immediately. We are here to assist you and resolve any problems promptly to ensure a smooth journey."
        },
        {
            "question": "How far in advance should I book a bus?",
            "answer": "We recommend booking as early as possible to ensure availability, especially during peak seasons. Early booking also allows you to secure the best rates and options for your trip."
        },
        {
            "question": "What safety measures are in place for the journey?",
            "answer": "We prioritize safety with regular maintenance and inspections of our buses. Our drivers are trained to handle various road conditions, and we adhere to strict safety protocols to ensure a secure journey for all passengers."
        }
    ];
    

    const testimonials = [
        {
            "name": "Mr. Arjun Patel",
            "text": "I recently hired a 40-seater bus from Amruta Travels for a family reunion, and the experience was outstanding. The bus was spacious, clean, and equipped with all the necessary amenities. The driver was courteous and professional, ensuring a smooth and enjoyable journey from Pimpri Chinchwad to our destination. The booking process was hassle-free, and the customer service team was very responsive. I highly recommend Amruta Travels for anyone looking for reliable and comfortable bus hire services in Pimpri Chinchwad!"
        },
        {
            "name": "Miss Sneha Deshmukh",
            "text": "Our office chose Amruta Travels for a corporate outing, and we were extremely pleased with the service. We hired a 50-seater AC bus, and it was perfect for our group. The bus was well-maintained, with comfortable seating and excellent air conditioning. The driver arrived on time and handled the journey professionally. The entire process, from booking to the actual trip, was seamless and efficient. I would definitely use Amruta Travels again for any future travel needs in Pimpri Chinchwad."
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
        heading: "Bus Hire in Pimpri Chinchwad Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Hire in Pimpri Chinchwad | Outstation & Event Bus Rentals</title>
  <meta name="description" content="Looking for bus hire in Pimpri Chinchwad? Rent buses for outstation, school picnics, corporate events, weddings, and more. Options include 14, 17, 25, 32, 35, 40, 45, 50 seater buses, AC Tempo Travellers, Urbania, and mini buses. Book now with Amruta Travels!" />
  <meta name="keywords" content="Bus Hire in Pimpri Chinchwad, Bus Rental in Pimpri Chinchwad, Bus on Rent Near Me Pimpri Chinchwad, Urbania Bus on Rent in Pimpri Chinchwad, 14 Seater, 17 Seater, 25 Seater, 32 Seater on Rent in Pimpri Chinchwad, 35 Seater, 40 Seater, 45 Seater, 50 Seater on Rent in Pimpri Chinchwad, AC Tempo Traveller on Rent in Pimpri Chinchwad, Mini Bus on Rent in Chinchwad, Bus Hire for School Picnic in Pimpri Chinchwad, Corporate Bus Hire in Pimpri Chinchwad, Bus Hire in Pimpri Chinchwad for Wedding Function, Bus Hire for Events Party in Pimpri Chinchwad, Amruta Travels Pune on Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers bus rentals for Pimpri Chinchwad, including buses for outstation, picnics, weddings, and corporate events. Choose from a variety of vehicles such as Urbania, AC Tempo Travellers, 14, 17, 25, 32, 35, 40, 45, and 50 seater buses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-hire-in-pimpri-chinchwad",
        "logo": "https://amrutatravel.com/images/bus-hire-pimpri-chinchwad.jpg",
        "image": "https://amrutatravel.com/images/bus-hire-pimpri-chinchwad.jpg",
        "priceRange": "₹1500 - ₹35000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-hire-in-pimpri-chinchwad",
          "priceCurrency": "INR",
          "price": "1500",
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
              "name": "Ravi Deshmukh"
            },
            "datePublished": "2024-07-15",
            "reviewBody": "Booked a 32-seater for our school picnic. The service was smooth, and the driver was very professional. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Snehal Patil"
            },
            "datePublished": "2024-08-20",
            "reviewBody": "Used Amruta Travels for our corporate event in Pimpri Chinchwad. The bus was spacious and on time. Great experience!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pimpri Chinchwad",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.6276",
            "longitude": "73.8028"
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://amrutatravel.com/bus-hire-in-pimpri-chinchwad"
        },
        "keywords": "Bus Hire in Pimpri Chinchwad, Bus Rental in Pimpri Chinchwad, Bus on Rent Near Me Pimpri Chinchwad, Urbania Bus on Rent in Pimpri Chinchwad, 14 Seater, 17 Seater, 25 Seater, 32 Seater on Rent in Pimpri Chinchwad, 35 Seater, 40 Seater, 45 Seater, 50 Seater on Rent in Pimpri Chinchwad, AC Tempo Traveller on Rent in Pimpri Chinchwad, Mini Bus on Rent in Chinchwad, Bus Hire for School Picnic in Pimpri Chinchwad, Corporate Bus Hire in Pimpri Chinchwad, Bus Hire in Pimpri Chinchwad for Wedding Function, Bus Hire for Events Party in Pimpri Chinchwad, Amruta Travels Pune on Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-67.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Bus Hire in Pimpri Chinchwad – Amruta Travels:</h3>
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
export default BusHireInPimpriChinchwad;