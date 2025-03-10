
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Seater32(){

  const cardData = 
    {
      keyword: '32 Seater Bus Rent in Pune ',
      heading: '32 Seater Bus Rent in Pune ₹48 Per Km',

      headingDescription: 'When planning group travel in Pune, whether for a corporate event, family function, school excursion, or tour, renting a 32-seater bus from Amruta Travels is the ideal solution. Our fleet of buses offers comfort, safety, and convenience for your large group travel needs. Here is why our 32-seater bus rental service stands out from the rest:',

      top:"Top Features of Our 32-Seater Bus on Rent:",

       topPlaces : [
        {
            "title": "Spacious Seating",
            "description": "Our 32-seater bus offers ample space for passengers to sit comfortably. Each seat is designed with ergonomics in mind, providing enough legroom to ensure a relaxed journey, even on long trips."
        },
        {
            "title": "Air-Conditioned Comfort",
            "description": "Beat the heat with our fully air-conditioned buses. Whether you're traveling during the sweltering summer or the mild winter, the temperature-controlled environment ensures that all passengers enjoy a cool, comfortable ride."
        },
        {
            "title": "Reclining Seats",
            "description": "For added comfort, our 32-seater buses are equipped with reclining seats. Passengers can adjust their seats according to their comfort, ensuring a relaxing and pleasant travel experience."
        },
        {
            "title": "Entertainment System",
            "description": "Long journeys can be tiresome, but not with Amruta Travels. Our 32-seater buses come equipped with advanced entertainment systems, including LED TVs and sound systems, to keep passengers entertained throughout the trip."
        },
        {
            "title": "Ample Luggage Space",
            "description": "Traveling with a large group means you’ll need plenty of luggage space. Our buses are designed with spacious compartments that can easily accommodate the luggage of all passengers without compromising on comfort."
        },
        {
            "title": "Safety Features",
            "description": "Safety is our top priority. Our buses are equipped with modern safety features, including seat belts for every passenger, emergency exits, fire extinguishers, and first-aid kits. GPS tracking is also installed for real-time monitoring, ensuring a secure journey."
        },
        {
            "title": "Experienced Drivers",
            "description": "Our 32-seater buses are driven by experienced and professional drivers who are well-versed in Pune's local routes as well as outstation destinations. Our drivers prioritize safety and punctuality, ensuring a smooth journey for your group."
        },
        {
            "title": "Well-Maintained Buses",
            "description": "At Amruta Travels, all our vehicles, including the 32-seater buses, undergo regular maintenance checks to ensure they are in perfect working condition. Cleanliness and hygiene are also maintained to the highest standards, ensuring a pleasant environment for passengers."
        },
        {
            "title": "Affordable Pricing",
            "description": "We offer competitive pricing for our 32-seater bus rental services. Whether you're planning a local tour in Pune or an outstation trip, you’ll find that our rates are reasonable and provide excellent value for money. There are no hidden costs, and we guarantee transparency in pricing."
        },
        {
            "title": "Customizable Travel Packages",
            "description": "Every trip is unique, and so are your needs. At Amruta Travels, we offer customizable travel packages. Whether you need the bus for a day or a week, for a wedding or a corporate tour, we can tailor our services to suit your itinerary and budget."
        }
    ],    
    "services": [
    {
      "name": "32 Seater Bus Rent in Pune",
      "description": "Looking for a reliable and comfortable 32-seater bus on rent in Pune? Amruta Travels offers a range of spacious and well-maintained buses ideal for all kinds of group travel. Whether it's for a family outing, corporate event, wedding, or religious tours, our 32-seater bus services are designed to make your journey smooth and hassle-free. With competitive pricing, professional drivers, and luxurious interiors, we ensure a memorable travel experience for your group."
    },
    {
      "name": "32 Seater Bus on Rent in Pune",
      "description": "Amruta Travels provides 32-seater buses on rent in Pune, perfect for large groups. Our buses are equipped with modern amenities such as air-conditioning, reclining seats, and entertainment systems. Whether you're traveling within the city or on long-distance trips, our 32-seater bus ensures comfort and convenience for all passengers."
    },
    {
      "name": "32 Seater Bus Price in Pune",
      "description": "Our 32-seater bus rent price in Pune is affordable and transparent. We offer competitive rates tailored to the type of journey, whether it's a local trip or an outstation tour. Contact us for the best pricing for your travel needs without compromising on quality and service."
    },
    {
      "name": "32 Seater Bus On Hire for Corporate Events",
      "description": "For corporate events, conferences, and team outings, our 32-seater bus on hire is an excellent choice. Amruta Travels offers punctual and professional transportation services, ensuring your team reaches the destination comfortably and on time. With spacious seating, ample legroom, and onboard entertainment, our buses create a perfect environment for group travel."
    },
    {
      "name": "32 Seater Bus on Hire for Weddings in Pune",
      "description": "Planning a wedding and need reliable transportation? Our 32-seater bus on hire for weddings in Pune is the ideal solution for transporting your guests safely and comfortably. Whether it's for a local wedding or a destination wedding in Mahabaleshwar or Lonavala, our buses provide spacious interiors and luxurious comfort for all guests."
    },
    {
      "name": "32 Seater AC Bus on Hire",
      "description": "Our 32-seater AC bus on hire ensures a cool and comfortable journey, even during the hottest months in Pune. With powerful air-conditioning systems, your group can enjoy a relaxed ride, whether you're traveling for a wedding, corporate event, or pilgrimage."
    },
    {
      "name": "32 Seater Non-AC Bus on Hire",
      "description": "Looking for a budget-friendly option? Our 32-seater non-AC bus on hire is perfect for those who want an economical yet comfortable travel solution. Ideal for short trips and cooler months, our non-AC buses provide spacious seating and ample storage for luggage at a lower cost."
    },
    {
      "name": "32 Seater Bus Hire for Mahabaleshwar",
      "description": "Planning a trip to Mahabaleshwar? Our 32-seater bus on rent for Mahabaleshwar is the perfect option for large groups. With comfortable seating, ample legroom, and a professional driver, you can enjoy the scenic journey to this beautiful hill station without any worries. Whether it's a family vacation or a group outing, our bus ensures a smooth and pleasant ride."
    },
    {
      "name": "32 Seater Bus Hire for Ashtavinayak Darshan",
      "description": "For pilgrims seeking a spiritual experience, Amruta Travels offers 32-seater bus hire for Ashtavinayak Darshan. Our buses provide a convenient and comfortable way to visit the eight sacred temples of Lord Ganesha. Enjoy the journey with your family or group in a safe and comfortable environment."
    },
    {
      "name": "32 Seater Bus Hire for 5 Jyotirlinga Darshan",
      "description": "Amruta Travels also offers 32-seater bus hire for 5 Jyotirlinga Darshan, making your religious tour more comfortable and memorable. Our spacious buses ensure you and your fellow travelers enjoy a peaceful journey, visiting the revered Jyotirlinga temples across Maharashtra."
    },
    {
      "name": "Pune to Konkan Darshan 32 Seater Bus on Rent",
      "description": "Amruta Travels offers a reliable and comfortable Pune to Konkan Darshan 32-seater bus on rent, perfect for group tours. Our spacious and well-maintained buses provide a smooth journey for large groups looking to explore the scenic Konkan region. With luxurious seating, air-conditioning, and ample luggage space, we ensure a pleasant experience as you travel to beautiful destinations like Alibaug, Ratnagiri, and Ganpatipule."
    },
    {
      "name": "32 Seater Bus on Rent in Hadapsar",
      "description": "Looking for a 32-seater bus on rent in Hadapsar? Amruta Travels offers a wide range of bus rental services in Hadapsar, Pune. Whether it's for a corporate outing, family function, or religious tour, our buses are equipped with modern amenities, including comfortable seats, air-conditioning, and entertainment systems, making group travel enjoyable and hassle-free."
    },
    {
      "name": "32 Seater Bus on Rent in Pune ",
      "description": "Amruta Travels provides 32-seater buses on rent in Pune  for various group travel needs, including weddings, corporate events, and outstation tours. Our buses are driven by experienced and professional drivers who ensure a smooth and safe journey. With competitive pricing and excellent customer service, we are the top choice for bus rentals in Pune ."
    },
    {
      "name": "Pune to Bhimashankar 32 Seater Bus Hire",
      "description": "For groups planning a pilgrimage to Bhimashankar, Amruta Travels offers Pune to Bhimashankar 32-seater bus hire. Our buses are spacious, air-conditioned, and equipped with comfortable seating to make your spiritual journey enjoyable. Whether it’s a one-day trip or a multi-day excursion, we ensure your group travels in comfort and style."
    },
    {
      "name": "Pune to Ashtavinayak 32 Seater Bus on Rent",
      "description": "Experience the divine Ashtavinayak Darshan with Amruta Travels' Pune to Ashtavinayak 32-seater bus on rent. Our well-maintained buses provide the perfect solution for large groups seeking a convenient and comfortable way to visit the eight revered Ganesha temples. With ample seating, air-conditioning, and professional drivers, we make your pilgrimage smooth and memorable."
    },
    {
      "name": "32 Seater Bus on Rent in Kothrud",
      "description": "If you're searching for a 32-seater bus on rent in Kothrud, Amruta Travels offers the best bus rental services in the area. Our fleet of buses is perfect for corporate trips, weddings, family outings, and more. With competitive pricing and modern amenities, we provide reliable and efficient transportation for all your group travel needs in Kothrud."
    },
    {
      "name": "32 Seater Bus for Corporate Office",
      "description": "Amruta Travels provides 32-seater buses for corporate office transportation needs. Whether it's for team outings, conferences, or daily office commutes, our buses are equipped with modern amenities like air-conditioning, comfortable seats, and entertainment systems to ensure your employees have a comfortable and convenient travel experience. We offer reliable and punctual services to meet the demands of corporate clients."
    },
    {
      "name": "32 Seater Bus for Outstation from Pune",
      "description": "Planning an outstation trip from Pune? Amruta Travels offers 32-seater buses for outstation from Pune, ideal for group travel to destinations like Mahabaleshwar, Shirdi, Lonavala, and more. Our buses provide ample space, air-conditioning, and professional drivers who ensure a safe and enjoyable journey for your group, whether it’s for a family vacation or a corporate tour."
    },
    {
      "name": "32 Seater Bus Rental Services in Pune",
      "description": "Amruta Travels is your go-to provider for 32-seater bus rental services in Pune. We cater to various group travel needs, including weddings, corporate events, school excursions, and religious tours. Our buses come with luxurious seating, air-conditioning, and ample storage space, ensuring a comfortable and stress-free travel experience. With competitive rates and exceptional customer service, we are the preferred choice for bus rentals in Pune."
    },
    {
      "name": "32 Seater Bus Rent in Pune Contact Number",
      "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient 32-seater bus rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
    }
],

"tableData": [
  ["-32 Seater Bus Rent in Pune", "-32 Seater Bus on Rent in Pune"],
  ["-32 Seater Bus Price in Pune", "-32 Seater Bus On Hire"],
  ["-32 Seater Bus on Hire for Wedding in Pune", "-32 Seater Bus on Rent for Marriage"],
  ["-32 Seater Bus on Rent Corporate Events", "-32 Seater Bus on Rent for Mahabaleshwar"],
  ["-32 Seater AC Bus on Hire", "-32 Seater Non-AC Bus on Hire"],
  ["-32 Seater Bus Hire for Ashtavinayak Darshan", "-32 Seater Bus Hire for 5 Jyotirlinga Darshan"],
  ["-Pune to Konkan Darshan 32 Seater Bus on Rent", "-32 Seater Bus on Rent in Hadapsar"],
  ["-32 Seater Bus on Rent in Pimpri Chinchwad", "-Pune to Bhimashankar 32 Seater Bus Hire"],
  ["-Pune to Ashtavinayak 32 Seater Bus on Rent", "-32 Seater Bus on Rent in Kothrud"],
  ["-32 Seater Bus for Corporate Office", "-32 Seater Bus for Outstation from Pune"],
  ["-32 Seater Bus Rental Services in Pune", ""]
],


"whychoose": [
  {
    "WhyChooseheading": "Why Choose Amruta Travels for 32-Seater Bus Rental in Pune?",
    "WhyChoosedescription": "When it comes to organizing group travel in and around Pune, Amruta Travels stands out as your premier choice for 32-seater bus rentals. We offer spacious and comfortable buses, professional drivers, a well-maintained fleet, affordable pricing, customizable travel solutions, excellent customer service, and punctual and reliable service."
  },
  {
    "WhyChooseheading": "Spacious and Comfortable Buses",
    "WhyChoosedescription": "Our 32 seater buses on rent in pune are designed to offer maximum comfort for all passengers. With ample legroom, plush seating, and air-conditioning, you and your group will enjoy a relaxed journey whether it's a short trip within Pune or a longer journey."
  },
  {
    "WhyChooseheading": "Professional and Experienced Drivers",
    "WhyChoosedescription": "Safety and reliability are our top priorities. Our drivers are highly experienced and trained to ensure a smooth and secure travel experience. They are well-versed with local routes and traffic conditions, making your journey both efficient and pleasant."
  },
  {
    "WhyChooseheading": "Well-Maintained Fleet",
    "WhyChoosedescription": "At Amruta Travels, we take pride in maintaining our fleet to the highest standards. Our 32-seater buses are regularly serviced and undergo rigorous inspections to ensure they are in top condition, minimizing the risk of breakdowns and ensuring a reliable travel experience."
  },
  {
    "WhyChooseheading": "Affordable Pricing",
    "WhyChoosedescription": "We offer competitive pricing for our 32-seater bus rentals without compromising on quality. Our transparent pricing structure ensures there are no hidden fees, so you know exactly what to expect."
  },
  {
    "WhyChooseheading": "Customizable Travel Solutions",
    "WhyChoosedescription": "Whether you need transportation for a corporate event, family gathering, school trip, or any other group travel needs, we provide customizable solutions tailored to your specific requirements. Our team is dedicated to accommodating your preferences and ensuring a seamless experience."
  },
  {
    "WhyChooseheading": "Excellent Customer Service",
    "WhyChoosedescription": "From booking to the end of your journey, our customer service team is available to assist you every step of the way. We prioritize your needs and are committed to providing prompt and effective support to ensure a hassle-free experience."
  },
  {
    "WhyChooseheading": "Punctual and Reliable",
    "WhyChoosedescription": "We understand the importance of time, especially when it comes to group travel. Our buses adhere to strict schedules to ensure timely departures and arrivals, helping you stay on track with your plans."
  }
]

    };

    
    
    const faqData = [
      {
          "question": "What is included in the rental of a 32-seater bus?",
          "answer": "Our 32-seater bus rental includes comfortable seating, air-conditioning, and professional driver services. Additional amenities like audio systems and Wi-Fi may be available upon request, depending on the specific bus model."
      },
      {
          "question": "How do I book a 32-seater bus with Amruta Travels?",
          "answer": "You can book a 32-seater bus by contacting us directly via phone or email, or by filling out our online booking form. Provide us with details such as your travel dates, pick-up and drop-off locations, and any special requirements."
      },
      {
          "question": "Are there any additional charges I should be aware of?",
          "answer": "Our pricing is transparent, with no hidden fees. However, additional charges may apply for extra services, such as extended travel hours or special requests. We will provide a detailed quote before finalizing your booking."
      },
      {
          "question": "What is the cancellation policy for a 32-seater bus rental?",
          "answer": "Our cancellation policy varies based on the timing of the cancellation. Typically, cancellations made well in advance may incur a nominal fee, while last-minute cancellations could involve higher charges. Please contact our customer service for specific details regarding your booking."
      },
      {
          "question": "Can I request a specific type of 32-seater bus?",
          "answer": "Yes, you can request specific features or types of buses based on availability. We offer a range of options to suit different needs, including luxury and standard models."
      },
      {
          "question": "Are the drivers experienced and licensed?",
          "answer": "Yes, all our drivers are professionally trained, experienced, and hold valid licenses. They are familiar with local routes and are dedicated to providing a safe and comfortable travel experience."
      },
      {
          "question": "Can I make changes to my booking after it is confirmed?",
          "answer": "Yes, changes to your booking can be made, subject to availability and any applicable fees. Please contact our customer service team as soon as possible to discuss any modifications to your travel plans."
      },
      {
          "question": "What should I do if I need assistance during my journey?",
          "answer": "If you require any assistance during your journey, please contact the driver or our customer service team immediately. We are committed to addressing any concerns or issues promptly to ensure a smooth trip."
      },
      {
          "question": "How far in advance should I book a 32-seater bus?",
          "answer": "To secure your preferred bus and ensure availability, we recommend booking as early as possible. For peak seasons or special events, booking well in advance is advisable to avoid last-minute complications."
      },
      {
          "question": "Are there any restrictions on luggage or other items?",
          "answer": "There are standard luggage allowances, but we can accommodate additional baggage or special items upon request. Please inform us of any specific needs when making your booking so we can make the necessary arrangements."
      }
  ];
  
  const testimonials = [
    {
        "text": "I recently hired a 32-seater bus from Amruta Travels for a family wedding in Pune, and the experience was outstanding! The bus was extremely comfortable with spacious seating and excellent air-conditioning. The driver was punctual, professional, and knew all the routes well. Amruta Travels made sure our journey was smooth and stress-free. I would highly recommend their services to anyone looking for bus rental in Pune for events or group travel.",
        "name": "Mr. Suresh Patil"
    },
    {
        "text": "We booked a 32-seater bus from Amruta Travels for a corporate outing, and we couldn't have been more satisfied with the service! The bus was clean, well-maintained, and had all the modern amenities we needed for a long journey. The staff was courteous, and the driver ensured we reached our destination safely and on time. If you're looking for reliable and comfortable bus rental services in Pune, Amruta Travels is the best choice!",
        "name": "Miss. Anjali Deshmukh"
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
        heading: "32 Seater Bus Rent in Pune Contact Number:  ",
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
  <title>32 Seater Bus On Rent in Pune</title>
  <meta name="description" content="Rent a 32 Seater Bus on Rent in Pune with Amruta Travels for weddings, corporate events, picnics, and outstation trips. Available for Mahabaleshwar, Shirdi, Ashtavinayak Darshan, and more." />
  <meta name="keywords" content="32 Seater Bus Rent in Pune, 32 Seater Bus Hire, 32 Seater Bus for Weddings, Corporate Events, Outstation Trips Pune, Pune to Mahabaleshwar Bus Rent" />
  
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent a 32 Seater Bus on rent in Pune for weddings, corporate events, picnics, and outstation trips. Available for Mahabaleshwar, Shirdi, Ashtavinayak Darshan, and more in Pune and surrounding areas.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shivaji Nagar, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411005",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/32-Seater-Bus-Rent-in-Pune",
        "logo": "https://amrutatravel.com/images/32-seater-bus-pune.jpg",
        "image": "https://amrutatravel.com/images/32-seater-bus-pune.jpg",
        "priceRange": "₹10000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/32-Seater-Bus-Rent-in-Pune",
          "priceCurrency": "INR",
          "price": "10000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "5300",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Patil"
            },
            "datePublished": "2024-08-20",
            "reviewBody": "We hired a 32-seater bus for a corporate event. The bus was spacious and comfortable, and the driver was professional. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sandeep Kumbhar"
            },
            "datePublished": "2024-07-15",
            "reviewBody": "Perfect for large groups! We used the 32-seater bus for our wedding, and everything went smoothly. Great service."
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
          "serviceUrl": "https://amrutatravel.com/32-seater-bus-rent-pune"
        },
        "keywords": "32 Seater Bus Rent in Pune, 32 Seater Bus on Hire for Weddings, 32 Seater Bus for Corporate Events, 32 Seater Bus for Outstation Trips, Pune to Mahabaleshwar Bus Rent, 32 Seater Bus Hire for Ashtavinayak Darshan, 32 Seater Non-AC Bus on Hire"
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
    {/* <img src='\img\Keyword Based Image\Keyword Based Image-11.jpg' alt='img'/> */}
    <img src='/img/32-seater.jpeg' alt='img'/>
    <img src='/img/32-seater2.jpeg' alt='img'/>
    <img src='/img/32-seater3.jpeg' alt='img'/>
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
      <h3 className='Colo'>Frequently Asked Questions (FAQs) About 32-Seater Bus Rentals in Pune:</h3>
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
export default Seater32;