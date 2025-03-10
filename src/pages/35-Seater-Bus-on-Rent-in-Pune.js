
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';

function  Seater35(){

  const cardData = 
    {
      keyword: '35-Seater Bus Rental in Pune',
      heading: 'Amruta Travels: 35-Seater Bus Rental in Pune',

      headingDescription: 'When organizing group travel in Pune, whether for a corporate event, family gathering, school trip, or tour, renting a 35-seater bus from Amruta Travels is the perfect choice. Our fleet of spacious and well-maintained buses offers unparalleled comfort, safety, and convenience for all your large group travel needs. Here’s why our 35-seater bus rental service stands out:',

      top:"Top Features of Our 35-Seater Bus on Rent:",

       topPlaces : [
        {
            "title": "Generous Seating Capacity",
            "description": "Our 35-seater buses are designed to provide ample space for all passengers. With roomy seating arrangements, everyone can enjoy a comfortable journey. Each seat is ergonomically designed to ensure a relaxing experience even on longer trips."
        },
        {
            "title": "Climate-Controlled Comfort",
            "description": "Enjoy a cool and comfortable ride regardless of the weather. Our buses are fully air-conditioned to maintain a pleasant environment throughout your journey, making sure you travel in comfort even during the hottest months."
        },
        {
            "title": "Adjustable Reclining Seats",
            "description": "Comfort is key for us. Our 35-seater buses come with reclining seats, allowing passengers to adjust their seating positions for added relaxation. Whether it's a short trip or a long journey, you’ll be able to find your ideal comfort level."
        },
        {
            "title": "Advanced Entertainment Systems",
            "description": "We understand that long journeys can be tiring. That’s why our 35-seater buses are equipped with state-of-the-art entertainment systems, including LED TVs and high-quality sound systems, to keep passengers entertained throughout the ride."
        },
        {
            "title": "Ample Luggage Space",
            "description": "With a large group, adequate luggage space is essential. Our 35-seater buses are equipped with spacious compartments designed to accommodate all your baggage comfortably, ensuring that your belongings are safely stored during the trip."
        },
        {
            "title": "Top-Notch Safety Features",
            "description": "Your safety is our priority. Our buses are fitted with modern safety features such as seat belts for every passenger, emergency exits, fire extinguishers, first-aid kits, and GPS tracking for real-time monitoring, ensuring a secure journey."
        },
        {
            "title": "Skilled and Professional Drivers",
            "description": "Our 35-seater buses are driven by skilled and professional drivers who are familiar with Pune’s local routes and outstation destinations. Their commitment to safety and punctuality ensures a smooth and efficient travel experience."
        },
        {
            "title": "Impeccably Maintained Vehicles",
            "description": "At Amruta Travels, we take pride in the upkeep of our fleet. Our 35-seater buses are regularly serviced and thoroughly inspected to ensure they are in excellent working condition. Cleanliness and hygiene are also maintained to the highest standards."
        },
        {
            "title": "Competitive and Transparent Pricing",
            "description": "We offer competitive pricing for our 35-seater bus rentals, ensuring that you receive exceptional value for money. Our transparent pricing structure means there are no hidden costs, so you’ll know exactly what you’re paying for."
        },
        {
            "title": "Tailored Travel Solutions",
            "description": "Every trip is unique, and we offer customizable solutions to meet your specific needs. Whether you need a bus for a day or a week, for a wedding or a corporate event, we can tailor our services to match your itinerary and budget."
        }
    ],    
"services": [
        {
            "name": "35-Seater Bus on Rent in Pune",
            "description": "When you need a 35-seater bus in Pune, Amruta Travels is your go-to provider. Our buses are designed for spacious and comfortable group travel, making them ideal for family outings, corporate events, and school trips. With our 35-seater buses, you can expect a smooth and enjoyable journey across Pune, whether you're exploring the city or heading out for a special event."
        },
        {
            "name": "35-Seater Bus on Rent for Pune to Outstation",
            "description": "For trips from Pune to outstation locations, our 35-seater buses offer a convenient and comfortable travel solution. These buses are equipped with modern amenities such as air-conditioning and entertainment systems, making them perfect for longer journeys to destinations like Mahabaleshwar, Shirdi, or Lonavala. Enjoy a relaxing ride with ample space for your entire group."
        },
        {
            "name": "35-Seater Bus on Rent for Corporate Office",
            "description": "If you need a 35-seater bus for corporate office travel, Amruta Travels has you covered. Our buses are perfect for team outings, daily commutes, or business meetings. With comfortable seating and air-conditioning, your employees will travel in comfort. Our professional drivers ensure timely and efficient service, catering to the specific needs of corporate clients."
        },
        {
            "name": "35-Seater Bus on Rent for Corporate Event",
            "description": "For corporate events, including conferences and team-building activities, renting a 35-seater bus provides a comfortable and efficient transportation solution. Our buses come with features like air-conditioning and entertainment systems to enhance the travel experience. Our experienced drivers ensure punctual and safe transportation, allowing your team to focus on the event."
        },
        {
            "name": "35-Seater Bus Rental Services in Pune",
            "description": "Amruta Travels offers comprehensive 35-seater bus rental services in Pune for various group travel needs. Whether it's for a wedding, corporate event, school excursion, or religious tour, our buses ensure a comfortable and hassle-free travel experience. With competitive rates and exceptional customer service, we are the preferred choice for bus rentals in Pune."
        },
        {
            "name": "35-Seater Bus on Rent AC Bus",
            "description": "If you require a 35-seater bus with air-conditioning, Amruta Travels provides the perfect solution. Our air-conditioned buses are ideal for maintaining a cool and comfortable environment during your journey, whether it’s for a wedding, corporate event, or outstation trip. Enjoy a refreshing ride with our well-maintained AC buses."
        },
        {
            "name": "35-Seater Bus on Rent Non-AC Bus",
            "description": "For a more budget-friendly option, we offer 35-seater non-AC buses. These buses provide an economical choice while still ensuring comfort and ample space. They are ideal for cooler weather or shorter trips, offering reliable transportation for various group events and outings."
        },
        {
            "name": "35-Seater Bus on Rent for Marriage Function",
            "description": "For weddings, our 35-seater buses are an excellent choice for transporting guests. Our buses are spacious and comfortable, with amenities such as air-conditioning to ensure a pleasant ride. We provide reliable transportation for your guests to and from the wedding venue, ensuring a smooth and enjoyable experience."
        },
        {
            "name": "35-Seater Bus on Rent for School Picnic",
            "description": "Make your school picnic a memorable experience with our 35-seater bus rental. Our buses are designed to accommodate large groups comfortably, with features like ample luggage space and entertainment systems. Ensure a fun and safe journey for students and teachers with our reliable bus rental services."
        },
        {
            "name": "35-Seater Bus on Rent Corporate Picnic",
            "description": "For corporate picnics and team-building events, our 35-seater buses offer a comfortable and convenient travel solution. Equipped with air-conditioning and spacious seating, our buses provide a relaxed environment for your team. Enjoy a smooth journey to your corporate outing destination."
        },
        {
            "name": "35-Seater Bus on Rent Pimpri Chinchwad",
            "description": "If you are in Pimpri Chinchwad and need a 35-seater bus, Amruta Travels offers reliable bus rental services in the area. Our fleet is ideal for various group travel needs, including corporate events, family functions, and more. Expect a comfortable and hassle-free travel experience with our 35-seater buses."
        },
        {
            "name": "Bharat Benz 35-Seater Bus on Rent",
            "description": "Experience luxury with our Bharat Benz 35-seater buses. Known for their superior comfort and advanced features, these buses are ideal for any group travel needs. Whether for a corporate event, family function, or outstation trip, our Bharat Benz buses provide a premium travel experience with top-notch amenities and exceptional service."
        },
        {
            "name": "Pune to Shirdi 35-Seater Bus on Rent",
            "description": "When planning a trip from Pune to Shirdi, Amruta Travels offers reliable 35-seater bus rentals to ensure a comfortable and enjoyable journey. Our 35-seater buses are equipped with modern amenities such as air-conditioning, reclining seats, and entertainment systems, making your pilgrimage or visit to Shirdi both pleasant and stress-free. Enjoy ample space for your group, whether you’re traveling for spiritual reasons or a group excursion. Trust us to provide a smooth and comfortable ride to this sacred destination."
        },
        {
            "name": "Pune to Konkan Darshan 35-Seater Bus on Rent",
            "description": "For a scenic journey from Pune to the picturesque Konkan region, our 35-seater buses are the perfect choice. Amruta Travels offers well-maintained buses designed for comfort and convenience, ideal for exploring the beautiful Konkan coast. Our buses come with air-conditioning, ample legroom, and entertainment options to enhance your travel experience. Whether you're heading to Alibaug, Ratnagiri, or Ganpatipule, enjoy a smooth and enjoyable ride with our reliable 35-seater bus rental services."
        },
        {
            "name": "35-Seater Bus on Rent for 5 Jyotirlinga from Pune",
            "description": "Embark on a spiritual journey to the 5 Jyotirlinga temples with Amruta Travels' 35-seater bus rentals. Our buses are designed to accommodate your group comfortably while visiting these sacred sites. Equipped with air-conditioning and spacious seating, our 35-seater buses ensure a comfortable and serene journey. Trust us to provide a reliable and enjoyable travel experience as you explore these revered temples across Maharashtra."
        },
        {
            "name": "Pune to Nashik Bus on Rent for Picnic",
            "description": "Planning a fun-filled picnic from Pune to Nashik? Our 35-seater buses are an excellent choice for transporting your group comfortably. Amruta Travels offers well-equipped buses with air-conditioning and ample space, perfect for a day of relaxation and enjoyment. Whether you're visiting Nashik's vineyards, temples, or scenic spots, our buses provide a smooth and comfortable ride for your picnic outing."
        },
        {
            "name": "35-Seater Bus Hire for School Picnic",
            "description": "Ensure a memorable and enjoyable school picnic with Amruta Travels' 35-seater bus rentals. Our buses are ideal for transporting students and teachers comfortably, featuring air-conditioning, comfortable seating, and ample luggage space. Whether your destination is a nearby park or a more distant location, our 35-seater buses provide a safe and enjoyable travel experience for school excursions."
        },
        {
            "name": "35 Seater Bus Rent in Pune  Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435  for prompt and efficient 35 Seater Bus Rent in Pune . We ensure a smooth and enjoyable ride for all our customers.."
        }
    ],
    tableData: [
        ["-35 Seater Bus on Rent in Pune", "-35 Seater Bus on Rent for Pune to Outstation"],
        ["-35 Seater Bus on Rent for Corporate Office", "-35 Seater Bus on Rent for Corporate Event"],
        ["-35 Seater Bus Rental Services in Pune", "-35 Seater Bus on Rent AC Bus"],
        ["-35 Seater Bus on Rent Non-AC Bus", "-35 Seater Bus on Rent for Marriage Function"],
        ["-35 Seater Bus on Rent for School Picnic", "-35 Seater Bus on Rent Corporate Picnic"],
        ["-35 Seater Bus on Rent Pimpri Chinchwad", "-Bharat Benz 35 Seater Bus on Rent"],
        ["-Pune to Shirdi 35 Seater Bus on Rent", "-Pune to Konkan Darshan 35 Seater Bus on Rent"],
        ["-35 Seater Bus on Rent for 5 Jyotirlinga from Pune", "-Pune to Nashik Bus on Rent for Picnic"],
        ["-35 Seater Bus Hire for School Picnic", ""]
    ],
"whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for 35-Seater Bus Rental in Pune?",
            "WhyChoosedescription": "When it comes to renting a 35-seater bus in Pune, Amruta Travels provides a superior experience focused on comfort, safety, and customer satisfaction. Whether you need transportation for a corporate event, family gathering, or school trip, our services are tailored to meet all your travel needs. Here’s why Amruta Travels should be your top choice:"
        },
        {
            "WhyChooseheading": "Spacious and Comfortable Buses:",
            "WhyChoosedescription": "Our 35-seater buses are designed to ensure maximum comfort for all passengers. Each bus features ample legroom, plush seating, and air-conditioning, guaranteeing a comfortable journey whether you're embarking on a local trip in Pune or a longer journey to distant destinations."
        },
        {
            "WhyChooseheading": "Professional and Experienced Drivers:",
            "WhyChoosedescription": "We prioritize safety and reliability. Our drivers are highly experienced and well-trained to ensure a smooth and secure travel experience. They are familiar with local routes and traffic conditions, which contributes to an efficient and pleasant journey."
        },
        {
            "WhyChooseheading": "Well-Maintained Fleet:",
            "WhyChoosedescription": "At Amruta Travels, we take pride in maintaining our fleet to the highest standards. Our 35-seater buses undergo regular servicing and rigorous inspections to ensure they are in optimal condition, minimizing the risk of breakdowns and ensuring a reliable travel experience."
        },
        {
            "WhyChooseheading": "Affordable Pricing:",
            "WhyChoosedescription": "We offer competitive pricing for our 35-seater bus rentals while maintaining high standards of quality. Our transparent pricing structure ensures there are no hidden fees, allowing you to know exactly what to expect."
        },
        {
            "WhyChooseheading": "Customizable Travel Solutions:",
            "WhyChoosedescription": "Whether you need transportation for a corporate event, family gathering, school trip, or any other group travel need, we provide customizable solutions tailored to your specific requirements. Our team is dedicated to accommodating your preferences and ensuring a seamless travel experience."
        },
        {
            "WhyChooseheading": "Excellent Customer Service:",
            "WhyChoosedescription": "From the moment you book until the end of your journey, our customer service team is available to assist you every step of the way. We prioritize your needs and are committed to providing prompt and effective support to ensure a hassle-free experience."
        },
        {
            "WhyChooseheading": "Punctual and Reliable:",
            "WhyChoosedescription": "Understanding the importance of timely travel, our buses adhere to strict schedules to ensure timely departures and arrivals. This reliability helps you stay on track with your plans and ensures that you reach your destination as planned."
        }
    ]

    };

    
    
    const faqData = [
        {
            "question": "What is included in the rental of a 35-seater bus?",
            "answer": "Our 35-seater bus rental includes comfortable seating, air-conditioning, and professional driver services. Additional amenities such as audio systems and Wi-Fi may be available upon request, depending on the specific bus model."
        },
        {
            "question": "How do I book a 35-seater bus with Amruta Travels?",
            "answer": "You can book a 35-seater bus by contacting us directly via phone or email, or by filling out our online booking form. Provide us with details such as your travel dates, pick-up and drop-off locations, and any special requirements."
        },
        {
            "question": "Are there any additional charges I should be aware of?",
            "answer": "Our pricing is transparent, with no hidden fees. However, additional charges may apply for extra services, such as extended travel hours or special requests. We will provide a detailed quote before finalizing your booking."
        },
        {
            "question": "What is the cancellation policy for a 35-seater bus rental?",
            "answer": "Our cancellation policy varies depending on the timing of the cancellation. Generally, cancellations made well in advance may incur a nominal fee, while last-minute cancellations might involve higher charges. Please contact our customer service for specific details regarding your booking."
        },
        {
            "question": "Can I request a specific type of 35-seater bus?",
            "answer": "Yes, you can request specific features or types of buses based on availability. We offer a range of options to suit different needs, including luxury and standard models."
        },
        {
            "question": "Are the drivers experienced and licensed?",
            "answer": "Yes, all our drivers are professionally trained, experienced, and hold valid licenses. They are well-acquainted with local routes and dedicated to providing a safe and comfortable travel experience."
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
            "question": "How far in advance should I book a 35-seater bus?",
            "answer": "To secure your preferred bus and ensure availability, we recommend booking as early as possible. For peak seasons or special events, booking well in advance is advisable to avoid last-minute complications."
        },
        {
            "question": "Are there any restrictions on luggage or other items?",
            "answer": "There are standard luggage allowances, but we can accommodate additional baggage or special items upon request. Please inform us of any specific needs when making your booking so we can make the necessary arrangements."
        }
    ];
    
    
    const testimonials = [
        {
            "name": "Mr. Rajesh Kumar",
            "text": "I recently rented a 35-seater bus from Amruta Travels for a family reunion trip in Pune, and I couldn’t have been more impressed. The bus was spacious, clean, and equipped with all the modern amenities we needed. The air-conditioning worked perfectly, keeping us cool throughout the journey. The driver was punctual and professional, ensuring we reached our destinations safely and on time. Amruta Travels made the entire experience smooth and enjoyable. I highly recommend their services for anyone looking for reliable and comfortable group transportation in Pune."
        },
        {
            "name": "Ms. Priya Mehta",
            "text": "We hired a 35-seater bus from Amruta Travels for a corporate team outing, and the service exceeded our expectations. The bus was well-maintained and featured comfortable seating with plenty of legroom. The onboard entertainment system was a great addition, keeping everyone entertained during the trip. The driver was courteous and knowledgeable about the best routes, which made our journey pleasant and efficient. The booking process was straightforward, and the pricing was very reasonable for the quality of service provided. Amruta Travels is definitely our top choice for future group travel needs."
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
        heading: "35-Seater Bus Rent in Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travel | 35 Seater Bus on Rent in Pune | Hire 35 Seater AC & Non-AC Bus for Corporate Events, Weddings & Outstation Trips</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent a 35 Seater Bus for corporate events, weddings, picnics, and outstation trips from Pune. Available for destinations like Shirdi, Konkan, Nashik, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/35-seater-bus-rent-pune",
        "logo": "https://amrutatravel.com/images/35-seater-bus-pune.jpg",
        "image": "https://amrutatravel.com/images/35-seater-bus-pune.jpg",
        "priceRange": "₹15000 - ₹35000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/35-seater-bus-rent-pune",
          "priceCurrency": "INR",
          "price": "15000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "6200"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Deshmukh"
            },
            "datePublished": "2024-09-01",
            "reviewBody": "We hired a 35-seater bus for a corporate event and it was an amazing experience. The bus was clean, comfortable, and the driver was professional."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Snehal Patil"
            },
            "datePublished": "2024-07-28",
            "reviewBody": "We rented a 35-seater bus for our wedding and it worked out perfectly! Spacious and well-maintained, with great service from Amruta Travels."
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
          "serviceUrl": "https://amrutatravel.com/35-seater-bus-rent-pune"
        },
        "keywords": "35 Seater Bus Rent in Pune, 35 Seater Bus on Rent for Corporate Events, 35 Seater Bus on Rent for Weddings, 35 Seater Bus for Outstation Trips, Pune to Shirdi 35 Seater Bus, 35 Seater Bus for School Picnic, 35 Seater Non-AC Bus on Rent, 35 Seater AC Bus on Rent, 35 Seater Bus for Konkan Darshan"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-12.jpg' alt='img'/>
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
      <h3 className='Colo'>Frequently Asked Questions (FAQs) About 35-Seater Bus Rentals in Pune:</h3>
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
export default Seater35;