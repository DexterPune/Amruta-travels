
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Urbaniaonrentinmumbai(){

  const cardData = 
    {
      keyword: 'Urbania On Rent in Mumbai',
      heading: ' Amruta Travels: Urbania On Rent in Mumbai',

      headingDescription: 'When it comes to premium travel experiences in Mumbai, Amruta Travels is proud to offer the Luxury Force Urbania On Rent in Mumbai. Ideal for those who seek a blend of style, comfort, and sophistication, the Luxury Force Urbania is a top-tier choice for any occasion. Here’s why the Luxury Force Urbania stands out and why you should consider renting it from Amruta Travels.',

      top:"Top Features of Luxury Force Urbania :",

       topPlaces : [
        {
            "title": "Spacious Interior",
            "description": "The Luxury Force Urbania boasts an exceptionally spacious interior, providing ample room for passengers to stretch out and relax. Whether it's a corporate event, wedding, or family outing, the expansive seating ensures everyone travels in comfort."
        },
        {
            "title": "High-Quality Upholstery",
            "description": "Experience luxury with high-quality, plush upholstery that enhances comfort and adds an elegant touch to the bus. The premium materials used in the seating ensure a refined and luxurious travel experience."
        },
        {
            "title": "Advanced Climate Control",
            "description": "Equipped with state-of-the-art climate control systems, the Luxury Force Urbania maintains a perfect temperature throughout the journey. Air conditioning ensures that passengers stay cool and comfortable, regardless of the weather outside."
        },
        {
            "title": "Cutting-Edge Entertainment System",
            "description": "The bus features a top-of-the-line entertainment system, including LED TVs and premium sound systems. This ensures that passengers enjoy movies, music, or presentations in high definition, making the journey both enjoyable and engaging."
        },
        {
            "title": "Plush Reclining Seats",
            "description": "The Urbania offers plush reclining seats with ample legroom. These seats can be adjusted for maximum comfort, allowing passengers to relax completely, especially during long journeys."
        },
        {
            "title": "Elegant Interior Design",
            "description": "The interior design of the Luxury Force Urbania is meticulously crafted to exude elegance. From ambient lighting to stylish finishes, every detail contributes to a sophisticated and inviting atmosphere."
        },
        {
            "title": "Ample Luggage Space",
            "description": "With generous luggage compartments, the Luxury Force Urbania can accommodate a significant amount of baggage. Whether it's for a wedding, corporate event, or tour, there’s plenty of room for all your essentials."
        },
        {
            "title": "Advanced Safety Features",
            "description": "Safety is a top priority with the Luxury Force Urbania. It includes modern safety features such as seat belts for every seat, advanced braking systems, and GPS tracking for real-time monitoring, ensuring a secure and safe journey."
        },
        {
            "title": "Smooth Ride Experience",
            "description": "The Luxury Force Urbania is engineered for a smooth and stable ride, reducing the impact of road imperfections. This enhances passenger comfort and makes for a pleasant travel experience, even on rough roads."
        },
        {
            "title": "Professional Driver Services",
            "description": "Our experienced drivers are trained to handle the Luxury Force Urbania with the utmost care and professionalism. They ensure timely departures and arrivals, along with a smooth and courteous driving experience throughout your journey."
        }
    ],    
     services : [
        {
            "name": "Luxury Force Urbania on Rent in Hadapsar:",
            "description": "If you’re looking for a luxurious and spacious vehicle in Hadapsar, consider renting the Force Urbania from Amruta Travels. Perfect for group travel, our Force Urbania buses offer both comfort and style for your journeys."
        },
        {
            "name": "13-Seater Force Urbania on Rent in Mumbai:",
            "description": "Ideal for smaller groups, our 13-seater Force Urbania buses provide ample space and modern amenities. Whether for a corporate trip, family outing, or special event, enjoy a comfortable ride with our well-maintained buses."
        },
        {
            "name": "17-Seater Force Urbania on Rent in Mumbai:",
            "description": "For slightly larger groups, the 17-seater Force Urbania is an excellent choice. With its enhanced seating capacity, this vehicle ensures a comfortable travel experience for all passengers, making it suitable for various group travel needs."
        },
        {
            "name": "Urbania Hire in Mumbai for Outstation:",
            "description": "Planning an outstation trip? Our Force Urbania buses are perfect for long-distance travel from Mumbai. Enjoy a smooth and luxurious ride to destinations such as Lonavala, Nashik, or other nearby locations."
        },
        {
            "name": "Mumbai to Lonavala Urbania Bus on Rent:",
            "description": "Traveling from Mumbai to Lonavala? Our Urbania buses offer a comfortable and enjoyable journey, equipped with amenities to enhance your travel experience. Whether for a day trip or extended stay, we ensure a pleasant ride to this popular destination."
        },
        {
            "name": "Mumbai to 5 Jyotirlinga Darshan Urbania on Rent:",
            "description": "Embark on a spiritual journey to the 5 Jyotirlinga temples with our Urbania buses. Designed for comfort and space, our buses will make your pilgrimage a serene and enjoyable experience."
        },
        {
            "name": "Mumbai Darshan Urbania on Rent:",
            "description": "Explore Mumbai with ease using our Urbania buses. Perfect for city tours and sightseeing, our vehicles provide a comfortable and convenient way to experience all that Mumbai has to offer."
        },
        {
            "name": "Mumbai to Nashik Urbania on Rent:",
            "description": "Travel comfortably from Mumbai to Nashik with our Urbania buses. Ideal for both leisure trips and special occasions, our buses offer a smooth ride to this vibrant city known for its vineyards and temples."
        },
        {
            "name": "Mumbai to Bhimashankar Urbania Bus Hire:",
            "description": "Visit the sacred Bhimashankar Temple with ease using our Urbania buses. Equipped for comfort, our buses ensure a pleasant journey to this important pilgrimage site."
        },
        {
            "name": "Mumbai to Ajanta Ellora Urbania Bus Hire:",
            "description": "Explore the historic Ajanta and Ellora Caves with our Urbania buses. Designed for long journeys, our buses provide a comfortable travel experience to these UNESCO World Heritage sites."
        },
        {
            "name": "Luxury Force Urbania on Rent in Mumbai Near Me:",
            "description": "Looking for a luxury Force Urbania nearby? Contact us for convenient options and immediate availability in your area."
        },
        {
            "name": "Luxury Force Urbania on Rent in Kothrud:",
            "description": "For those in Kothrud, our Force Urbania buses offer luxurious and spacious travel solutions. Perfect for various occasions, our buses ensure comfort and style throughout your journey."
        },
        {
            "name": "Luxury Force Urbania on Rent in Mumbai Near Me Contact Number:",
            "description": "For quick inquiries and bookings, reach out to us for the luxury Force Urbania near you."
        },
        {
            "name": "Luxury Force Urbania on Rent in Pimpri Chinchwad:",
            "description": "Residents of Pimpri Chinchwad can enjoy our top-tier Force Urbania buses for any group travel needs. Offering both luxury and comfort, our buses are ideal for local and outstation trips."
        },
        {
            "name": "Luxury Force Urbania On Rent in Mumbai Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Luxury Force Urbania On Rent in Mumbai. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],    
     tableData : [
        ["-Luxury Force Urbania on Rent in Hadapsar", "-13 Seater Force Urbania on Rent in Mumbai"],
        ["-17 Seater Force Urbania on Rent in Mumbai", "-Urbania Hire in Mumbai for Outstation"],
        ["-Mumbai to Lonavala Urbania Bus on Rent", "-Mumbai to 5 Jyotirlinga Darshan Urbania on Rent"],
        ["-Mumbai Darshan Urbania on Rent", "-Mumbai to Nashik Urbania on Rent"],
        ["-Mumbai to Bhimashankar Urbania Bus Hire", "-Mumbai to Ajanta Ellora Urbania Bus Hire"],
        ["-Luxury Force Urbania on Rent in Mumbai Near Me", "-Luxury Force Urbania on Rent in Kothrud"],
        ["-Luxury Force Urbania on Rent in Mumbai Near Me Contact Number", "-Luxury Force Urbania on Rent in Pimpri Chinchwad"]
    ],
    
    

    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Force Urbania Rentals?",
            "WhyChoosedescription": "When it comes to Force Urbania rentals, Amruta Travels stands out for several reasons. We offer a premium travel experience with a focus on comfort, safety, and customer satisfaction. Here’s why you should choose us for your next Force Urbania rental:"
        },
        {
            "WhyChooseheading": "Spacious and Comfortable Vehicles:",
            "WhyChoosedescription": "Our Force Urbania buses are designed to provide maximum comfort with ample seating and modern amenities. Whether for a short trip or a longer journey, you’ll enjoy a relaxed and enjoyable ride."
        },
        {
            "WhyChooseheading": "Well-Maintained Fleet:",
            "WhyChoosedescription": "We take pride in our fleet's maintenance. Each Force Urbania bus undergoes regular servicing and inspections to ensure optimal performance and reliability."
        },
        {
            "WhyChooseheading": "Professional and Experienced Drivers:",
            "WhyChoosedescription": "Our drivers are experienced and skilled, ensuring a safe and pleasant journey. Familiar with local routes and outstation destinations, they are committed to providing timely and courteous service."
        },
        {
            "WhyChooseheading": "Competitive and Transparent Pricing:",
            "WhyChoosedescription": "We offer competitive rates for our Force Urbania rentals. Our transparent pricing ensures no hidden costs, allowing you to know exactly what you’re paying for."
        },
        {
            "WhyChooseheading": "Customizable Travel Solutions:",
            "WhyChoosedescription": "We tailor our services to meet your specific travel needs. Whether you require a bus for a family outing, corporate event, or religious pilgrimage, we provide customized solutions for a seamless experience."
        },
        {
            "WhyChooseheading": "Excellent Customer Service:",
            "WhyChoosedescription": "From booking to the end of your journey, our customer service team is dedicated to assisting you. We are committed to ensuring a hassle-free and enjoyable experience."
        },
        {
            "WhyChooseheading": "Punctual and Reliable:",
            "WhyChoosedescription": "We understand the importance of punctuality. Our buses adhere to strict schedules, ensuring timely departures and arrivals."
        }
    ]
    };

    
    
    const faqData = [
        {
            "question": "What is included in the rental of a Force Urbania?",
            "answer": "The rental includes comfortable seating, air-conditioning, and professional driver services. Additional amenities like audio systems and Wi-Fi may be available upon request."
        },
        {
            "question": "How do I book a Force Urbania with Amruta Travels?",
            "answer": "You can book by contacting us via phone, email, or by filling out our online booking form with details of your travel dates, pick-up and drop-off locations, and any special requirements."
        },
        {
            "question": "Are there any additional charges I should be aware of?",
            "answer": "While our pricing is transparent, additional charges may apply for extra services or special requests. We provide a detailed quote before finalizing your booking."
        },
        {
            "question": "What is the cancellation policy for a Force Urbania rental?",
            "answer": "Cancellation policies vary. Generally, cancellations made well in advance incur a nominal fee, while last-minute cancellations may involve higher charges. Contact customer service for specific details."
        },
        {
            "question": "Can I request a specific type of Force Urbania?",
            "answer": "Yes, you can request specific features or types of Urbania buses based on availability. We offer a range of options to suit different needs."
        },
        {
            "question": "Are the drivers experienced and licensed?",
            "answer": "Yes, all our drivers are professionally trained, experienced, and hold valid licenses. They ensure a safe and comfortable travel experience."
        },
        {
            "question": "Can I make changes to my booking after it is confirmed?",
            "answer": "Yes, changes can be made subject to availability and applicable fees. Contact our customer service team as soon as possible to discuss modifications."
        },
        {
            "question": "What should I do if I need assistance during my journey?",
            "answer": "Contact the driver or our customer service team immediately. We are committed to addressing any concerns or issues promptly."
        },
        {
            "question": "How far in advance should I book a Force Urbania?",
            "answer": "To ensure availability, we recommend booking as early as possible. For peak seasons or special events, early booking is advisable."
        },
        {
            "question": "Are there any restrictions on luggage or other items?",
            "answer": "Standard luggage allowances apply, but special arrangements can be made upon request. Inform us of any specific needs when booking."
        }
    ];
    
    
    
    
    const testimonials = [
        {
            "name": "Mr. Sandeep Kumar",
            "text": "Our experience with Amruta Travels for a group trip using the Force Urbania was outstanding. The bus was luxurious and well-maintained, providing a comfortable ride throughout. The driver was professional and ensured we reached our destinations safely and on time. I highly recommend their services for anyone looking for premium travel options in Mumbai."
        },
        {
            "name": "Ms. Supriya Mehta",
            "text": "We rented a Force Urbania for a corporate event, and the service was top-notch. The bus was spacious and equipped with all the necessary amenities, making our journey enjoyable. The booking process was smooth, and the driver was knowledgeable about the best routes. Amruta Travels exceeded our expectations, and we’ll definitely use their services again."
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
        heading: "Contact Information for Luxury Force Urbania Rentals:",
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
            text: "Tempo Traveller Hire in Mumbai",
          },
          {
            place: "/img/mini5.jpg",
            text: "Mini Bus On Rent in Mumbai",
          },
        {
          place: "/img/bus32-2.jpg",
          text: "32 Seater Bus Rent in Mumbai",
        },
        {
          place: "/img/bus45-3.jpg",
          text: "45 Seater Bus on Rent in Mumbai",
        },
        {
            place: "/img/luxury6.jpg",
            text: "Luxury Bus Rental in Mumbai",
          },
          {
            place: "/img/force-urbania.jpg",
            text: "Force Urbania On Rent in Mumbai",
          },
          {
            place: "/img/mini5.jpg",
            text: "Bus Service for Picnic in Mumbai",
          },
          {
            place: "/img/tempo4.jpg",
            text: "17 Seater Tempo Traveller on Rent in Mumbai",
          },
          ];
     


          const urbaniaSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Amruta Travels",
            "description": "Luxury Force Urbania on rent in Mumbai at ₹33 per km. Available for outstation trips, local tours, and pilgrimages. Choose from 13 to 17-seater Urbania for a comfortable journey.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "411041",
              "addressCountry": "IN"
            },
            "telephone": "+91-8421333435",
            "url": "https://amrutatravel.com/luxury-force-urbania-rent-Mumbai",
            "logo": "https://amrutatravel.com/images/force-urbania-rental-Mumbai.jpg",
            "image": [
              "https://amrutatravel.com/img/amruta.jpeg",
              "https://amrutatravel.com/img/amru.png",
              "https://amrutatravel.com/img/seat.jpeg",
            ],
            "priceRange": "₹33 per km",
            "openingHours": "Mo-Su 09:00-22:00",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.0760",
              "longitude": "72.8777"
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Mumbai"
            },
            "offers": [
              {
                "@type": "Offer",
                "url": "https://amrutatravel.com/luxury-force-urbania-rent-Mumbai",
                "priceCurrency": "INR",
                "price": "3000",
                "priceValidUntil": "2024-12-31"
              }
            ],
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
                "reviewBody": "Booked the luxury Force Urbania for a trip to Lonavala. Excellent service, comfortable seats, and a smooth ride. Highly recommended!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Shalini Rao"
                },
                "datePublished": "2024-08-02",
                "reviewBody": "The Force Urbania was perfect for our family trip to Bhimashankar. Spacious, clean, and well-maintained. Would definitely book again!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4"
                }
              }
            ],
            "availableChannel": [
              {
                "@type": "ServiceChannel",
                "serviceUrl": "https://amrutatravel.com/luxury-force-urbania-rent-Mumbai"
              }
            ]
          };



    return(
        <div>
          <GoogleAnalytics/>
         
<Helmet>
    <title>Urbania On Rent in Mumbai ₹33 Per Km</title>
    <meta name="description" content="Book luxury Force Urbania on rent in Mumbai at ₹33 per km. Choose from 13 to 17-seater Urbania for outstation trips, local tours, and darshan. Affordable rates with professional drivers." />
    <meta name="keywords" content="Urbania on Rent in Mumbai, 13 Seater Force Urbania, 17 Seater Urbania Hire Mumbai, Luxury Urbania Rental Mumbai, Urbania Bus for Outstation, Mumbai to Lonavala Urbania, Mumbai to Nashik Urbania, Urbania Hire for Family Trips, Mumbai to Bhimashankar Urbania, Urbania Bus Rental in Mumbai" />
    <link rel="canonical" href="https://amrutatravel.com/luxury-force-urbania-rent-Mumbai" />

    <script type="application/ld+json">
      {JSON.stringify(urbaniaSchema)}
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
    {/* <img src='/img/Img for Our Fleet/Img for Our Fleet-02.jpg' alt='img'/> */}
    <img src='\img\amruta.jpeg' alt='img'/>
    <img src='\img\seat.jpeg' alt='img'/>
    <img src='\img\amru.png' alt='img'/>
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
      <h3 className='Colo'>Frequently Asked Questions (FAQs) About Luxury Force Urbania Rentals in Mumbai:</h3>
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
export default Urbaniaonrentinmumbai;