
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  LocalBus(){

    const cardData = {
        keyword: ' Local Buses for Rent in Pune ',
        heading: 'Amruta Travels: Local Buses for Rent in Pune ',
        headingDescription: 'When it comes to finding reliable local bus rental services in Pune, Amruta Travels stands out as a premier choice. Whether you are planning a corporate event, family reunion, or any group travel, Amruta Travels offers an exceptional fleet of buses to suit your needs. Here’s a detailed look at the top local buses for rent in Pune provided by Amruta Travels.',
        
        top: 'Top Features of Our Pune Local Bus on Rent:',
      
         topPlaces : [
            {
                "title": "Luxury Mini Bus (15-20 Seats)",
                "description": "Ideal for small groups, Amruta Travels' Luxury Mini Bus offers comfort and style. With plush seating, air conditioning, and advanced entertainment systems, this option is perfect for corporate outings, weddings, and family gatherings."
            },
            {
                "title": "Standard Mini Bus (20-30 Seats)",
                "description": "The Standard Mini Bus from Amruta Travels provides a balance between comfort and affordability. Equipped with comfortable seating and essential amenities, it’s an excellent choice for school trips, local sightseeing, and small group tours."
            },
            {
                "title": "Executive Bus (30-40 Seats)",
                "description": "For larger groups, the Executive Bus offers spacious seating and high-end features. With extra legroom, air conditioning, and premium interiors, it's suited for business meetings, conferences, and group travel within Pune."
            },
            {
                "title": "Deluxe Bus (40-50 Seats)",
                "description": "The Deluxe Bus combines spaciousness with comfort. It includes enhanced features such as reclining seats, Wi-Fi, and on-board refreshments. This bus is perfect for longer local trips, including day tours and extended events in and around Pune."
            },
            {
                "title": "Premium Coach (50-60 Seats)",
                "description": "Amruta Travels’ Premium Coach is designed for those who seek luxury on a larger scale. With high-quality interiors, ample legroom, and state-of-the-art amenities, it’s ideal for large events, corporate outings, and inter-city tours within Pune."
            },
            {
                "title": "Executive Luxury Bus (60-70 Seats)",
                "description": "For a truly upscale experience, the Executive Luxury Bus offers an opulent travel environment. Features include reclining seats, personalized air conditioning, and advanced multimedia systems. It's the go-to option for executive travel and high-profile events."
            },
            {
                "title": "Economy Bus (30-40 Seats)",
                "description": "If you're looking for a budget-friendly option without compromising on comfort, the Economy Bus is a great choice. It provides basic amenities and comfortable seating, making it suitable for school excursions, local transfers, and casual group outings."
            },
            {
                "title": "Party Bus (20-30 Seats)",
                "description": "For a fun and unique travel experience, the Party Bus is equipped with entertainment systems, mood lighting, and comfortable seating. It’s perfect for celebrations, bachelor parties, and group adventures around Pune."
            },
            {
                "title": "Tourist Bus (40-50 Seats)",
                "description": "Designed for sightseeing and tourist activities, the Tourist Bus features large windows for panoramic views, air conditioning, and comfortable seating. It’s ideal for guided city tours, heritage trips, and leisure activities around Pune."
            },
            {
                "title": "Shuttle Bus (15-20 Seats)",
                "description": "The Shuttle Bus is perfect for short-distance travel and frequent trips. With a focus on convenience and practicality, it’s ideal for airport transfers, hotel shuttles, and local business commutes."
            }
        ],        
        services : [
            {
                "name": "Bus Rental in Pune",
                "description": "Amruta Travels offers the best bus rental in Pune, providing a wide range of bus services to meet all your travel needs. Whether you're planning a family trip, corporate outing, school trip, or pilgrimage, we provide comfortable buses with professional drivers to ensure a smooth and safe journey. Our fleet includes buses from 32-seater to 50-seater, ensuring you have the right size vehicle for any occasion."
            },
            {
                "name": "32, 35, 40, 45, 50 Seater Buses",
                "description": "Amruta Travels has a variety of bus sizes available, including 32-seater, 35-seater, 40-seater, 45-seater, and 50-seater buses, perfect for both small and large groups. Our buses are ideal for weddings, school excursions, corporate events, and weekend getaways. With well-maintained buses and experienced drivers, you can travel in comfort and style."
            },
            {
                "name": "Pune Darshan Tempo Traveller on Rent",
                "description": "Explore Pune’s rich cultural heritage with our Pune Darshan Tempo Traveller on rent. Ideal for small groups and family trips, our tempo travellers are air-conditioned, spacious, and comfortable, providing a seamless experience as you explore famous spots like Shaniwar Wada, Aga Khan Palace, and Parvati Hill. Experience Pune’s best tourist attractions with ease."
            },
            {
                "name": "Pune to Sinhagad Fort Mini Bus on Rent",
                "description": "Planning a trip to Sinhagad Fort? Amruta Travels offers Pune to Sinhagad Fort mini bus on rent, perfect for school outings, trekking groups, or family excursions. Our mini-buses are comfortable, reliable, and equipped with all necessary amenities, ensuring a smooth ride to the historic fort. Travel comfortably and enjoy the scenic journey with our mini-bus service."
            },
            {
                "name": "Pune to Jejuri Bus Hire",
                "description": "Amruta Travels provides the best Pune to Jejuri bus hire service, offering safe and comfortable transportation for groups heading to the revered Jejuri temple. Whether you’re planning a family pilgrimage or a group tour, our buses are spacious, well-maintained, and driven by experienced drivers, making your journey enjoyable and hassle-free."
            },
            {
                "name": "Pune to Ranjangaon Ganpati Bus Hire",
                "description": "Need transportation for a pilgrimage to Ranjangaon Ganpati? Our Pune to Ranjangaon Ganpati bus hire service is designed for those seeking a convenient and affordable way to travel in large groups. Our buses provide ample space, comfortable seating, and all modern amenities for a smooth journey to one of the most sacred Ganpati temples."
            },
            {
                "name": "Pune to Ketkawale Balaji Temple Bus on Rent",
                "description": "Experience a comfortable and safe journey with our Pune to Ketkawale Balaji Temple bus on rent. Amruta Travels offers the best bus rental services for religious trips, ensuring a peaceful and hassle-free pilgrimage. Our buses are clean, spacious, and perfect for groups of all sizes, making the journey to Ketkawale Balaji Temple memorable."
            },
            {
                "name": "Pune to Narayanpur Tempo Traveller on Rent",
                "description": "If you’re planning a visit to Narayanpur, our Pune to Narayanpur tempo traveller on rent is the perfect solution. Ideal for small groups and families, our tempo travellers offer a comfortable ride, ensuring you can relax and enjoy the scenic views. With experienced drivers and well-maintained vehicles, your journey will be safe and enjoyable."
            },
            {
                "name": "Pune to Morachi Chincholi Bus on Rent",
                "description": "Visit the famous Morachi Chincholi with ease using our Pune to Morachi Chincholi bus on rent. Amruta Travels provides a comfortable and affordable solution for group travel, allowing you to explore the picturesque village known for its peacock sanctuary. Our buses are spacious and perfect for large family groups, school trips, or corporate outings."
            },
            {
                "name": "Pune Local Bus on Rent",
                "description": "Need a bus for local travel? Amruta Travels offers Pune local bus on rent, including Pimple Gurav local bus on rent services for one-day trips, events, and city tours. Whether it’s a family function, wedding, or local tour, we have a range of buses suitable for any group size, ensuring comfortable travel within the city and nearby areas."
            },
            {
                "name": "Pune Local Bus Hire for Pune Darshan",
                "description": "Explore the best of Pune with our Pune local bus hire for Pune Darshan service. Our local buses are ideal for groups looking to explore the city’s rich cultural and historical landmarks. Our drivers are knowledgeable, ensuring a smooth and informative tour to places like Shaniwar Wada, Aga Khan Palace, and more."
            },
            {
                "name": "Pune Darshan Mini Bus on Rent",
                "description": "For smaller groups, our Pune Darshan mini bus on rent is a convenient option. Travel comfortably as you explore Pune’s top attractions, from historical sites to bustling markets. Our mini-buses are air-conditioned and well-maintained, ensuring a smooth and enjoyable Pune Darshan tour for you and your group."
            },
            {
                "name": "Pune Local Bus on Rent for One Day",
                "description": "Amruta Travels offers Pune local bus on rent for one day, perfect for family trips, corporate events, and more. Whether it’s a wedding, a local tour, or a day out, our buses provide a comfortable and reliable option for group travel, making sure you have a memorable experience."
            },
            {
                "name": "Pune Local Bus on Rent for Local Trips",
                "description": "Planning a local trip in Pune? Our Pune local bus on rent for local trips service is designed to provide hassle-free transportation for various occasions, from family gatherings to corporate outings. With our fleet of modern buses, you can travel around Pune comfortably and affordably."
            },
            {
                "name": "Pune to Jejuri Tempo Traveller on Rent",
                "description": "For smaller groups heading to Jejuri, our Pune to Jejuri tempo traveller on rent service is ideal. Our tempo travellers are equipped with all modern amenities, providing a comfortable and smooth ride for families and small groups visiting the Jejuri temple."
            },
            {
                "name": "Pune to Bhimashankar Mini Bus on Rent",
                "description": "Visit Bhimashankar with ease using our Pune to Bhimashankar mini bus on rent service. Our mini-buses are perfect for group travel, offering comfortable seating and a smooth journey to one of Maharashtra’s most famous pilgrimage sites. Ideal for school trips, family outings, or group pilgrimages."
            },
            {
                "name": "Pune Local Bus on Rent Contact Number:",
                "description": "Contact Amruta Travels at +91 8421333435  for prompt and efficient Pune Local Bus on Rent . We ensure a smooth and enjoyable ride for all our customers."
            }
        ],        
      
         tableData : [
            ["- Bus Rental in Pune", "- Bus Hire in Pune"],
            ["- 32, 35, 40, 45, 50 Seater", "- Bus Rental in Pune"],
            ["- Pune Darshan Tempo Traveller on Rent", "- Pune to Sinhagad Fort Mini Bus on Rent"],
            ["- Pune to Jejuri Bus Hire", "- Pune to Ranjangaon Ganpati Bus Hire"],
            ["- Pune to Ketkawale Balaji Temple Bus on Rent", "- Pune to Narayanpur Tempo Traveller on Rent"],
            ["- Pune to Morachi Chincholi Bus on Rent", "- Pune Local Bus on Rent"],
            ["- Pimple Gurav Local Bus on Rent", "- Pune Local Bus Hire for Pune Darshan"],
            ["- Pune Darshan Mini Bus on Rent", "- Pune Local Bus on Rent for One Day"],
            ["- Pune Local Bus on Rent for Local Trips", "- Pune to Jejuri Tempo Traveller on Rent"],
            ["- Pune to Bhimashankar Mini Bus on Rent", "- Bus Hire in Pune"]
        ],
        
      
         whychoose : [
            {
                "WhyChooseheading": "Exceptional Comfort and Convenience:",
                "WhyChoosedescription": "At Amruta Travels, we prioritize your comfort. Our fleet of buses includes a range of options from luxury to standard, ensuring that you travel in style and ease. With spacious seating, air conditioning, and modern amenities, every journey is a pleasant experience."
            },
            {
                "WhyChooseheading": "Diverse Fleet of Buses:",
                "WhyChoosedescription": "Whether you need a small mini-bus for a family outing or a large deluxe bus for corporate events, we have a diverse fleet to meet your needs. Our buses come in various sizes, including 32-seater, 35-seater, 40-seater, 45-seater, and 50-seater options, ensuring that we have the perfect fit for your group size."
            },
            {
                "WhyChooseheading": "Affordable and Transparent Pricing:",
                "WhyChoosedescription": "We offer competitive pricing with no hidden costs. Our rental rates are transparent and tailored to fit your budget, providing you with great value for your money. Whether it’s a short local trip or a full day rental, we ensure cost-effectiveness without compromising on quality."
            },
            {
                "WhyChooseheading": "Experienced and Professional Drivers:",
                "WhyChoosedescription": "Our drivers are not only skilled and experienced but also trained to provide a safe and smooth travel experience. With a deep knowledge of local routes and landmarks, they ensure that you reach your destination safely and on time."
            },
            {
                "WhyChooseheading": "Reliable and Punctual Service:",
                "WhyChoosedescription": "Reliability is at the core of our services. We understand the importance of punctuality, especially for events and schedules. Our buses are well-maintained and adhere to strict schedules to ensure that you arrive at your destination without delays."
            },
            {
                "WhyChooseheading": "Flexible Rental Options:",
                "WhyChoosedescription": "We offer flexible rental options to accommodate your specific needs. Whether you need a bus for a few hours or an entire day, we can customize our services to fit your itinerary and requirements."
            },
            {
                "WhyChooseheading": "Customer-Centric Approach:",
                "WhyChoosedescription": "Customer satisfaction is our top priority. From the moment you book with us until the end of your journey, we provide exceptional customer service, addressing any concerns and ensuring a seamless experience."
            },
            {
                "WhyChooseheading": "Hassle-Free Booking Process:",
                "WhyChoosedescription": "Our booking process is straightforward and user-friendly. You can easily book your local bus rental through our website or by contacting our customer service team. We offer prompt responses and efficient handling of your requests."
            }
        ],        
      };
      
    
      const faqData = [
        {
            "question": "What types of buses are available for rent with Amruta Travels?",
            "answer": "Amruta Travels offers a range of buses for local rentals, including 32-seater, 35-seater, 40-seater, 45-seater, and 50-seater options. We also provide mini-buses and tempo travellers for smaller groups. All our vehicles are well-maintained and equipped with modern amenities."
        },
        {
            "question": "How can I book a local bus with Amruta Travels?",
            "answer": "You can book a local bus by contacting us directly through our website or by phone. Provide us with details such as the date of travel, the size of the group, and the destination, and we will assist you in selecting the appropriate bus and finalize the booking."
        },
        {
            "question": "Are the buses equipped with amenities?",
            "answer": "Yes, our local buses come with a range of amenities including comfortable seating, air conditioning, and audio systems. We strive to ensure that your journey is as comfortable and enjoyable as possible."
        },
        {
            "question": "What is the rental cost for a local bus?",
            "answer": "The rental cost varies depending on factors such as the type of bus, duration of the rental, and the distance to be traveled. For an accurate quote, please contact us with the details of your trip, and we will provide a customized pricing estimate."
        },
        {
            "question": "Can I hire a bus for a single day?",
            "answer": "Yes, Amruta Travels offers bus rentals for single-day trips as well as extended periods. Whether you need a bus for a few hours or an entire day, we can accommodate your needs."
        },
        {
            "question": "What areas do you cover for local bus rentals?",
            "answer": "We provide local bus rentals throughout Pune and its surrounding areas. If you have a specific destination or route in mind, please let us know, and we will ensure that our services meet your requirements."
        },
        {
            "question": "Are the drivers experienced and professional?",
            "answer": "Yes, all our drivers are experienced, professional, and well-versed in local routes. They are committed to providing a safe and pleasant journey for all passengers."
        },
        {
            "question": "Can I make changes to my booking after it has been confirmed?",
            "answer": "If you need to make changes to your booking, please contact us as soon as possible. We will do our best to accommodate any adjustments based on availability and your new requirements."
        },
        {
            "question": "What safety measures are in place for passengers?",
            "answer": "We prioritize passenger safety by maintaining our buses to the highest standards and ensuring that all safety protocols are followed. Our drivers are trained to handle various situations and ensure a safe journey for everyone on board."
        },
        {
            "question": "Is there a minimum rental duration for local bus hires?",
            "answer": "While there is no strict minimum rental duration, we generally recommend booking for a minimum of 4-6 hours to ensure availability and meet your travel needs effectively. For specific details, please contact us."
        }
    ];
    
    


    
    
    
    
    
    const testimonials = [
        {
            "name": "Mrs. Anjali Deshmukh",
            "text": "I recently rented a 35-seater mini bus from Amruta Travels for a family outing in Pune, and I couldn’t be more pleased with the service. The booking process was straightforward, and the staff were incredibly helpful and responsive. The bus itself was spotless, comfortable, and equipped with everything we needed for a day trip. Our driver, Mr. Singh, was professional, punctual, and knowledgeable about the local area, making our journey smooth and enjoyable. I highly recommend Amruta Travels for anyone in need of a reliable and comfortable bus rental in Pune. They truly made our outing a memorable one!"
        },
        {
            "name": "Ms. Priya Patel",
            "text": "Our company recently hired a 50-seater deluxe bus from Amruta Travels for an off-site corporate event in Pune. The experience was fantastic from start to finish. The bus was luxurious, with ample space and all the modern amenities, which made the trip extremely comfortable for our team. The booking was hassle-free, and the driver, Mr. Rao, was courteous and efficient. We were impressed by the level of professionalism and the attention to detail in ensuring everything went smoothly. For anyone looking for top-notch bus rental services in Pune, Amruta Travels is the way to go. We’ll definitely be using their services again!"
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
        heading: " Pune Local Bus on Rent Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Pune Local Bus Hire | Mini Bus, Tempo Traveller & Luxury Bus Rentals</title>
  <meta name="description" content="Book local buses, mini buses, and tempo travellers in Pune for sightseeing, local trips, temple visits, and corporate events. Rent buses for Pune Darshan, Sinhagad Fort, Jejuri, and more." />
  <meta name="keywords" content="Pune Local Bus on Rent, Bus Rental in Pune, Bus Hire in Pune, 14,17,20,25,32 Seater, Pune Darshan Tempo Traveller on Rent, Pune to Sinhagad Fort Mini Bus on Rent, Pune to Jejuri Bus Hire, Pune to Ranjangaon Ganpati Bus Hire, Pune to Ketkawale Balaji Temple Bus on Rent, Pune to Narayanpur Tempo Traveller on Rent, Pune to Morachi Chincholi Bus on Rent, Tempo Traveller on Rent for Local Trip, Mini Bus on Rent for Local Trip in Pune, Mini Bus on Rent in Pune, Pune Darshan Tour Packages 1 Day, Pune Darshan Package Bus Package, Pune Local Bus on Rent Party Package, Pune Tourist Local Bus Packages" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers bus rentals in Pune for local trips, sightseeing, temple visits, and corporate events. Rent mini buses, tempo travellers, and luxury buses for comfortable and affordable travel.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-local-bus-on-rent",
        "logo": "https://amrutatravel.com/images/pune-local-bus-hire.jpg",
        "image": "https://amrutatravel.com/images/pune-local-bus-hire.jpg",
        "priceRange": "₹2000 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-local-bus-on-rent",
          "priceCurrency": "INR",
          "price": "2000",
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
              "name": "Saurabh Deshmukh"
            },
            "datePublished": "2024-06-22",
            "reviewBody": "The bus was clean, comfortable, and on time. We hired a 32-seater for a local Pune darshan tour. Excellent service from Amruta Travels!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Aarti Mishra"
            },
            "datePublished": "2024-08-10",
            "reviewBody": "We hired a tempo traveller for a trip to Sinhagad Fort. The driver was very knowledgeable and the vehicle was well-maintained. Highly recommend!"
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
          "serviceUrl": "https://amrutatravel.com/pune-local-bus-on-rent"
        },
        "keywords": "Pune Local Bus on Rent, Bus Rental in Pune, Bus Hire in Pune, 14,17,20,25,32 Seater, Pune Darshan Tempo Traveller on Rent, Pune to Sinhagad Fort Mini Bus on Rent, Pune to Jejuri Bus Hire, Pune to Ranjangaon Ganpati Bus Hire, Pune to Ketkawale Balaji Temple Bus on Rent, Pune to Narayanpur Tempo Traveller on Rent, Pune to Morachi Chincholi Bus on Rent, Tempo Traveller on Rent for Local Trip, Mini Bus on Rent for Local Trip in Pune, Mini Bus on Rent in Pune, Pune Darshan Tour Packages 1 Day, Pune Darshan Package Bus Package, Pune Local Bus on Rent Party Package, Pune Tourist Local Bus Packages"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-53.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs: Pune Local Bus on Rent for Amruta Travels:</h3>
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
export default LocalBus;