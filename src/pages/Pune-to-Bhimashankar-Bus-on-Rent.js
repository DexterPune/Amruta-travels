
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneTOBhimashankar(){

  const cardData = 
    {
        "keyword": "Bus Hire Services for Pune to Bhimashankar Trip",
        "heading": "Amruta Travels Bus Hire Services for Pune to Bhimashankar Trip",
        "headingDescription": "Amruta Travels offers exceptional bus rental services from Pune to Bhimashankar, ensuring a comfortable and enjoyable journey to this sacred and scenic destination. Bhimashankar, located in the Western Ghats, is renowned for its ancient temples, lush green landscapes, and serene atmosphere. Whether you’re planning a spiritual pilgrimage, a family trip, or a group outing, our reliable bus services cater to all your travel needs.",
        "top": "Top Places to Visit in Bhimashankar with Amruta Travels:",
        "topPlaces": [
            {
                "title": "1. Bhimashankar Temple",
                "description": "The primary attraction, this ancient temple is an important Jyotirlinga shrine, famous for its intricate architecture and religious significance. The temple complex features beautiful carvings and a serene ambiance, attracting pilgrims and tourists."
            },
            {
                "title": "2. Bhimashankar Wildlife Sanctuary",
                "description": "This sanctuary is a haven for wildlife enthusiasts and nature lovers. It is home to diverse flora and fauna, including the elusive Indian giant squirrel. The sanctuary offers trekking trails and opportunities for bird-watching."
            },
            {
                "title": "3. Patan Waterfall",
                "description": "Located a short distance from Bhimashankar, Patan Waterfall is a stunning natural attraction. The cascading waters amidst lush greenery create a picturesque setting perfect for a relaxing stopover."
            },
            {
                "title": "4. Shivneri Fort",
                "description": "A historical fort situated near Bhimashankar, Shivneri Fort is the birthplace of Chhatrapati Shivaji Maharaj. The fort offers panoramic views of the surrounding landscape and a glimpse into Maharashtra’s rich history."
            },
            {
                "title": "5. Kalsubai Peak",
                "description": "Known as the highest peak in the Sahyadri range, Kalsubai offers breathtaking views of the surrounding hills and valleys. It is a popular spot for trekking and adventure enthusiasts."
            },
            {
                "title": "6. Bhandardara Lake",
                "description": "A serene and scenic lake, Bhandardara is an excellent spot for picnics and relaxation. The lake is surrounded by lush hills and provides opportunities for boating and nature walks."
            },
            {
                "title": "7. Lenyadri Caves",
                "description": "These ancient Buddhist caves, also known as the Jain Caves, are situated near Bhimashankar. They are renowned for their historical and architectural significance, featuring intricate carvings and sculptures."
            },
            {
                "title": "8. Ghat Matha Temple",
                "description": "An ancient temple dedicated to Goddess Ghat Matha, it is located on the way to Bhimashankar and offers a peaceful environment for meditation and worship."
            },
            {
                "title": "9. Kumar Plaza",
                "description": "A popular spot for local shopping and dining, Kumar Plaza offers various eateries and shops where visitors can enjoy local cuisine and purchase souvenirs."
            },
            {
                "title": "10. Nagfani Waterfall",
                "description": "Another beautiful waterfall in the region, Nagfani is known for its striking appearance and the lush greenery surrounding it. It’s an ideal spot for nature lovers and photographers."
            }
        ],
     "services": [
        {
            "name": "Pune to Mahabaleshwar Bus Rental",
            "description": "Amruta Travels offers exceptional bus rental services from Pune to Mahabaleshwar tailored to your needs. Whether you’re organizing a family vacation, a school picnic, or a corporate outing, our services ensure a comfortable and enjoyable journey."
        },
        {
            "name": "Bus Hire from Pune to Mahabaleshwar for Picnic",
            "description": "Planning a picnic to Mahabaleshwar? Amruta Travels provides reliable bus hire services for a smooth and enjoyable trip. Our buses are equipped with comfortable seating and amenities, ensuring your picnic experience is unforgettable."
        },
        {
            "name": "Bus Rental Service Pune to Mahabaleshwar for School Picnic",
            "description": "For school picnics, Amruta Travels offers specialized bus rental services from Pune to Mahabaleshwar. Our buses ensure safety and comfort for students and staff, with experienced drivers and reliable services tailored for school trips."
        },
        {
            "name": "Pune to Mahabaleshwar Tour Bus Rental at Affordable Rates",
            "description": "Explore Mahabaleshwar with our affordable tour bus rental services. Amruta Travels provides cost-effective solutions without compromising on comfort or quality, making your tour experience both enjoyable and economical."
        },
        {
            "name": "Pune to Mahabaleshwar Family Trip Bus Hire",
            "description": "Planning a family trip to Mahabaleshwar? Amruta Travels offers dedicated bus hire services from Pune for family outings. Enjoy spacious, comfortable seating and a stress-free journey with your loved ones."
        },
        {
            "name": "Pune to Mahabaleshwar Weekend Trip Bus Rental",
            "description": "Make your weekend trip to Mahabaleshwar memorable with Amruta Travels. Our weekend trip bus rental services ensure a smooth ride from Pune, with flexible schedules and comfortable buses designed for a pleasant getaway."
        },
        {
            "name": "Pune to Mahabaleshwar Corporate Bus Hire",
            "description": "For corporate outings and team-building trips, Amruta Travels offers corporate bus hire services from Pune to Mahabaleshwar. Our professional services ensure a comfortable and efficient travel experience for your team."
        },
        {
            "name": "Pune to Mahabaleshwar Group Travel Bus Rental",
            "description": "Amruta Travels provides group travel bus rental services for trips from Pune to Mahabaleshwar. Our buses cater to various group sizes, ensuring everyone travels comfortably and enjoys the journey."
        },
        {
            "name": "AC Bus Hire Pune to Mahabaleshwar for Trip",
            "description": "For a comfortable journey, choose our AC bus hire services from Pune to Mahabaleshwar. Amruta Travels offers well-maintained air-conditioned buses to keep you cool and comfortable throughout your trip."
        },
        {
            "name": "Comfortable Bus from Pune to Mahabaleshwar for Picnic",
            "description": "Enjoy a relaxing picnic trip with Amruta Travels’ comfortable buses from Pune to Mahabaleshwar. Our buses are designed for comfort, providing ample space and amenities for a delightful picnic experience."
        },
        {
            "name": "25 Seater Bus Hire from Pune to Mahabaleshwar",
            "description": "Amruta Travels offers 25-seater bus hire services for trips from Pune to Mahabaleshwar. Ideal for intimate groups, our buses provide comfort and convenience for your journey."
        },
        {
            "name": "32 Seater Bus Rental Pune to Mahabaleshwar",
            "description": "For medium-sized groups, choose our 32-seater bus rental services. Amruta Travels ensures a spacious and comfortable ride from Pune to Mahabaleshwar, making your trip enjoyable and hassle-free."
        },
        {
            "name": "50 Seater Bus Hire from Pune to Mahabaleshwar",
            "description": "Amruta Travels offers 50-seater bus hire services for trips from Pune to Mahabaleshwar. Our large buses are perfect for accommodating bigger groups, ensuring a comfortable and enjoyable journey."
        },
        {
            "name": "Pune to Panchgani Bus Hire",
            "description": "In addition to Mahabaleshwar, we also offer bus hire services from Pune to Panchgani. Explore both hill stations with our reliable and comfortable bus rental options."
        },
        {
            "name": "Pune to Panchgani Bus On Rent",
            "description": "For a seamless trip to Panchgani, Amruta Travels provides bus on rent services. Enjoy the scenic beauty of Panchgani with our well-maintained buses, designed for a comfortable and pleasant ride."
        },
        {
            "name": "Amruta Travels Pune On Rent",
            "description": "For all your travel needs, Amruta Travels offers a range of bus rental services in Pune. From trips to Mahabaleshwar to Panchgani and beyond, we ensure a comfortable and enjoyable journey tailored to your requirements."
        }
    ],
    "tableData": [
        ["-Pune to Bhimashankar Bus Rental Service", "-Hire a Bus From Pune to Bhimashankar Darshan"],
        ["-Bus Rental Service Pune to Bhimashankar", "-Pune to Bhimashankar Family Trip Bus Hire"],
        ["-Pune to Bhimashankar Weekend Trip Bus Rental", "-Pune to Bhimashankar Corporate Bus Hire"],
        ["-Pune to Bhimashankar Group Travel Bus Rental", "-AC Bus Hire Pune to Bhimashankar"],
        ["-Comfortable Bus from Pune to Bhimashankar", "-32 Seater Bus Rental Pune to Bhimashankar"],
        ["-50 Seater Bus Hire from Pune to Bhimashankar", "-Pune Railway Station to Bhimashankar Jyotirlinga Bus"],
        ["-Pune Airport to Bhimashankar Jyotirlinga Bus On Rent", "-Pune to Jyotirlinga Darshan Bus on Rent"],
        ["-5 Jyotirlinga in Maharashtra Tour Package From Pune", "-Jyotirlinga Darshan Package From Pune"],
        ["-Amruta Travels Pune On Rent"]
    ],
    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Us for Pune to Bhimashankar Bus on Rent?",
            "WhyChoosedescription": "Amruta Travels is dedicated to providing exceptional bus rental services for trips from Pune to Bhimashankar. Here’s why you should choose us for your journey:"
        },
        {
            "WhyChooseheading": "Comfort and Convenience:",
            "WhyChoosedescription": "Our fleet includes modern, well-maintained buses equipped with comfortable seating and amenities to ensure a pleasant journey. Enjoy ample legroom, air conditioning, and clean interiors throughout your trip."
        },
        {
            "WhyChooseheading": "Professional Drivers:",
            "WhyChoosedescription": "Our experienced and courteous drivers are well-versed in the route to Bhimashankar. They ensure safe, smooth, and timely travel, making your journey stress-free and enjoyable."
        },
        {
            "WhyChooseheading": "Flexible Rental Options:",
            "WhyChoosedescription": "Whether you need a bus for a family trip, corporate outing, or group travel, we offer a range of vehicles to suit your requirements. Choose from various sizes and types of buses to match your group size and preferences."
        },
        {
            "WhyChooseheading": "Competitive Pricing:",
            "WhyChoosedescription": "We provide affordable rates without compromising on quality. Our transparent pricing structure ensures no hidden charges, giving you the best value for your money."
        },
        {
            "WhyChooseheading": "Punctual Service:",
            "WhyChoosedescription": "Timeliness is a priority at Amruta Travels. We guarantee prompt pickups and arrivals, ensuring you reach Bhimashankar on time to make the most of your visit."
        },
        {
            "WhyChooseheading": "Customizable Itineraries:",
            "WhyChoosedescription": "We understand that every trip is unique. Our team works with you to create a personalized itinerary that fits your schedule and preferences, making your journey tailored to your needs."
        },
        {
            "WhyChooseheading": "24/7 Customer Support:",
            "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with bookings, address any queries, and provide support throughout your journey."
        },
        {
            "WhyChooseheading": "Safety First:",
            "WhyChoosedescription": "We prioritize the safety of our passengers. Our buses undergo regular maintenance and safety checks, and our drivers adhere to all traffic regulations to ensure a secure travel experience."
        },
        {
            "WhyChooseheading": "Eco-Friendly Options:",
            "WhyChoosedescription": "We offer eco-friendly travel options to minimize our environmental impact, making your trip to Bhimashankar not only comfortable but also sustainable."
        },
        {
            "WhyChooseheading": "Positive Reviews:",
            "WhyChoosedescription": "Our satisfied customers speak highly of our services. We have a strong reputation for reliability, professionalism, and customer satisfaction."
        }
    ]
  
    



    };

    const faqData = [
        {
            "question": "What types of buses are available for rent from Pune to Bhimashankar?",
            "answer": "We offer a range of buses, including luxury buses, AC buses, and standard coaches. You can choose from 32-seater, 50-seater, and other options based on your needs."
        },
        {
            "question": "How do I book a bus from Pune to Bhimashankar?",
            "answer": "Booking is easy! You can contact us via phone, email, or our website. Provide your travel details, including the date, number of passengers, and any specific requirements, and we’ll assist you in securing your bus rental."
        },
        {
            "question": "What is the cost of renting a bus from Pune to Bhimashankar?",
            "answer": "The cost varies based on factors such as the type of bus, duration of the rental, and number of passengers. We offer competitive pricing and provide a transparent quotation with no hidden charges."
        },
        {
            "question": "Are the buses equipped with amenities?",
            "answer": "Yes, our buses come equipped with various amenities, including air conditioning, comfortable seating, and entertainment options, to ensure a pleasant and enjoyable journey."
        },
        {
            "question": "How long is the journey from Pune to Bhimashankar?",
            "answer": "The journey typically takes around 3 to 4 hours, depending on traffic conditions and the specific route taken. Our drivers ensure a smooth ride to get you to Bhimashankar comfortably."
        },
        {
            "question": "Can I customize my travel itinerary?",
            "answer": "Absolutely! We offer customizable itineraries to suit your preferences and schedule. Let us know your travel plans, and we’ll work with you to create a tailored itinerary for your trip to Bhimashankar."
        },
        {
            "question": "Is there a minimum or maximum number of passengers required for booking?",
            "answer": "We accommodate both small and large groups. Whether you have a few passengers or a large group, we have suitable bus options to meet your needs."
        },
        {
            "question": "What should I do if I need to cancel or modify my booking?",
            "answer": "Please contact our customer support team as soon as possible if you need to cancel or modify your booking. We will assist you with the necessary changes and provide information on any applicable cancellation policies."
        },
        {
            "question": "Are the buses maintained and cleaned regularly?",
            "answer": "Yes, our buses undergo regular maintenance and thorough cleaning to ensure they are in excellent condition for every journey. Your comfort and safety are our top priorities."
        },
        {
            "question": "How can I contact Amruta Travels for more information?",
            "answer": "You can reach us by phone, email, or through our website’s contact form. Our customer support team is available 24/7 to answer your questions and assist with your bus rental needs."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mrs. Priya Deshmukh",
            "text": "I recently booked a bus with Amruta Travels for a family trip to Bhimashankar, and the experience was fantastic. The bus was clean, comfortable, and well-maintained, making the journey smooth and enjoyable for all of us. The driver was professional and knew the route well, ensuring we arrived on time and safely. I highly recommend Amruta Travels for anyone looking for reliable bus rental services for a trip to Bhimashankar."
        },
        {
            "name": "Mr. Ramesh Sharma",
            "text": "Our corporate group used Amruta Travels for a trip from Pune to Bhimashankar, and we were thoroughly impressed with their service. The bus was spacious and equipped with all the necessary amenities, making the trip both comfortable and pleasant. The booking process was straightforward, and the customer support team was very helpful throughout. Thanks to Amruta Travels, our trip was a success, and I would definitely choose them again for future bus rentals."
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
        heading: "Tempo Traveller On Rent in Pune contact Number:",
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
  <title>Pune to Bhimashankar Bus Rental | Contact: +91 8421333435 | Amruta Travels | Bus Hire for Bhimashankar Darshan </title>
  <meta name="description" content="Hire a bus from Pune to Bhimashankar for your Darshan or weekend trip. Comfortable buses available for family trips, corporate outings, and group travel. Amruta Travels offers AC buses and various seating options." />
  <meta name="keywords" content="Pune to Bhimashankar Bus Rental Service, Hire a Bus From Pune to Bhimashankar Darshan, Bus Rental Service Pune to Bhimashankar, Pune to Bhimashankar Family Trip Bus Hire, Pune to Bhimashankar Weekend Trip Bus Rental, Pune to Bhimashankar Corporate Bus Hire, Pune to Bhimashankar Group Travel Bus Rental, AC Bus Hire Pune to Bhimashankar, Comfortable Bus from Pune to Bhimashankar, 32 Seater Bus Rental Pune to Bhimashankar, 50 Seater Bus Hire from Pune to Bhimashankar, Pune Railway Station to Bhimashankar Jyotirlinga Bus, Pune Airport to Bhimashankar Jyotirlinga Bus On Rent, Pune to Jyotirlinga Darshan Bus on Rent, 5 Jyotirlinga in Maharashtra Tour Package From Pune, Jyotirlinga Darshan Package From Pune, Amruta Travels Pune On Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Pune to Bhimashankar Bus on Rent",
        "description": "Amruta Travels offers comfortable and affordable bus rental services from Pune to Bhimashankar for darshan, family trips, corporate outings, and group travel. Book your bus now for a hassle-free journey to Bhimashankar Jyotirlinga.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-bhimashankar-bus-hire",
        "logo": "https://amrutatravel.com/images/bhimashankar-bus-hire.jpg",
        "image": [
          "https://amrutatravel.com/img/hell.png",
          "https://amrutatravel.com/img/hell2.png",
          "https://amrutatravel.com/img/hell3.jpg",
        ],
        "priceRange": "₹3000 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-bhimashankar-bus-hire",
          "priceCurrency": "INR",
          "price": "4500",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "105"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sanjay Kumar"
            },
            "datePublished": "2024-06-21",
            "reviewBody": "Booked a 32-seater bus for our Bhimashankar Darshan. The journey was smooth, and the bus was very comfortable. Highly recommend Amruta Travels for bus hire!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Patel"
            },
            "datePublished": "2024-08-15",
            "reviewBody": "Amruta Travels provided excellent service for our corporate outing to Bhimashankar. The driver was professional, and the bus was clean and well-maintained."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-bhimashankar-bus-hire"
        },
        "keywords": "Pune to Bhimashankar Bus Rental Service, Hire a Bus From Pune to Bhimashankar Darshan, Bus Rental Service Pune to Bhimashankar, Pune to Bhimashankar Family Trip Bus Hire, Pune to Bhimashankar Weekend Trip Bus Rental, Pune to Bhimashankar Corporate Bus Hire, Pune to Bhimashankar Group Travel Bus Rental, AC Bus Hire Pune to Bhimashankar, Comfortable Bus from Pune to Bhimashankar, 32 Seater Bus Rental Pune to Bhimashankar, 50 Seater Bus Hire from Pune to Bhimashankar, Pune Railway Station to Bhimashankar Jyotirlinga Bus, Pune Airport to Bhimashankar Jyotirlinga Bus On Rent, Pune to Jyotirlinga Darshan Bus on Rent, 5 Jyotirlinga in Maharashtra Tour Package From Pune, Jyotirlinga Darshan Package From Pune, Amruta Travels Pune On Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-30.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Pune to Panvel bus for Amruta Travels</h3>
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
export default PuneTOBhimashankar;