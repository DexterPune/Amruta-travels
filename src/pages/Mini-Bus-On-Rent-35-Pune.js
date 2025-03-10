
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  MiniBus35(){

  const cardData = 
    {
      keyword: 'Mini Bus on Rent in Pune',
      heading: ' Amruta Travels: Mini Bus on Rent in Pune ',

      headingDescription: 'When it comes to group travel in Pune, renting a mini bus from Amruta Travels offers an unbeatable combination of comfort, convenience, and efficiency. Whether you’re planning a corporate event, family outing, or school trip, our mini buses are designed to cater to your needs with a range of top-notch features. Here’s a detailed look at the top features of our mini buses on rent in Pune:',

      top:"Top  Features of Mini Bus on Rent in Pune :",

       topPlaces : [
        {
            "title": "Spacious Interior:",
            "description": "Our mini buses are designed with a spacious interior to provide ample room for passengers. With comfortable seating arrangements and generous legroom, your journey will be pleasant and relaxed. Ideal for both short city trips and longer journeys, our mini buses ensure that everyone travels in comfort."
        },
        {
            "title": "Climate-Controlled Environment:",
            "description": "Traveling in Pune can be challenging due to fluctuating temperatures. Our mini buses come equipped with advanced air-conditioning systems to maintain a comfortable climate throughout your journey. Enjoy a cool and pleasant ride regardless of the weather outside."
        },
        {
            "title": "Modern Entertainment Systems:",
            "description": "To make your journey enjoyable, our mini buses are equipped with modern entertainment systems. Features like LED TVs, high-quality audio systems, and Bluetooth connectivity keep passengers entertained, making long trips more engaging and enjoyable."
        },
        {
            "title": "Ample Luggage Space:",
            "description": "Handling luggage can be a hassle, especially with a group. Our mini buses feature ample luggage compartments to accommodate all your belongings. Whether you’re carrying personal bags or larger items, there’s plenty of space to ensure everything is securely stored."
        },
        {
            "title": "Enhanced Safety Features:",
            "description": "Safety is a top priority at Amruta Travels. Our mini buses are equipped with modern safety features including seat belts for every passenger, emergency exits, fire extinguishers, and first-aid kits. These features ensure a safe and secure travel experience for all passengers."
        },
        {
            "title": "Professional and Experienced Drivers:",
            "description": "Our mini buses are driven by professional and experienced drivers who are well-versed in Pune’s routes and traffic conditions. Their expertise ensures punctuality and smooth navigation, allowing you to focus on your journey without any concerns."
        },
        {
            "title": "Well-Maintained Vehicles:",
            "description": "We take pride in maintaining our mini buses to the highest standards. Each vehicle undergoes regular servicing and thorough inspections to ensure it is in optimal condition. Cleanliness and hygiene are also top priorities, providing a pleasant environment for your journey."
        },
        {
            "title": "Flexible Rental Options:",
            "description": "At Amruta Travels, we understand that every trip is unique. Our mini bus rental services offer flexible options to suit your specific needs, whether you require the vehicle for a few hours, a day, or even longer. We can tailor our services to fit your itinerary and requirements."
        },
        {
            "title": "Competitive and Transparent Pricing:",
            "description": "We offer competitive pricing for our mini bus rentals, providing excellent value for your money. Our pricing structure is transparent with no hidden costs, ensuring that you know exactly what you’re paying for and can budget accordingly."
        },
        {
            "title": "Exceptional Customer Service:",
            "description": "From booking to the end of your journey, our customer service team is dedicated to providing exceptional support. We are here to assist you with any inquiries, address any concerns, and ensure a seamless and enjoyable travel experience."
        }
    ],    
    "services": [
        {
            "name": "Mini Bus on Rent in Hadapsar:",
            "description": "Perfect for Local Events and Gatherings. Whether you’re organizing a family event or a local corporate function, renting a mini bus in Hadapsar ensures convenience and comfort. Our mini buses are equipped with modern amenities to make your travel smooth and enjoyable."
        },
        {
            "name": "Mini AC Bus on Rent in Wanowrie:",
            "description": "Stay Cool and Comfortable. For a pleasant journey in and around Wanowrie, opt for our air-conditioned mini buses. These buses are ideal for maintaining a comfortable temperature regardless of the weather, ensuring a refreshing travel experience."
        },
        {
            "name": "Top Mini Bus on Rent in Kothrud:",
            "description": "Ideal for Family Outings and Corporate Events. Our top-rated mini buses in Kothrud offer spacious seating and advanced amenities, making them perfect for both family outings and corporate events. Enjoy a blend of comfort and convenience with our well-maintained fleet."
        },
        {
            "name": "Mini Bus on Rent in Kharadi:",
            "description": "Convenient Travel for Business and Leisure. Rent a mini bus in Kharadi for seamless travel to meetings, events, or leisure activities. Our buses are designed to provide a comfortable ride, equipped with essential features for a smooth journey."
        },
        {
            "name": "Mini Bus on Rent in Kalyani Nagar:",
            "description": "For Corporate and Social Gatherings. Kalyani Nagar residents can benefit from our mini bus rentals for various purposes, including corporate events and social gatherings. Enjoy reliable and comfortable transportation tailored to your needs."
        },
        {
            "name": "Mini Bus on Rent in Shivaji Nagar:",
            "description": "Reliable Transportation for All Occasions. Whether it’s a family event or a group outing, our mini buses in Shivaji Nagar offer reliability and comfort. Choose from our range of options to suit your specific requirements."
        },
        {
            "name": "Best Mini Bus on Rent in Baner:",
            "description": "Top-Notch Comfort and Amenities. Experience top-notch service with our mini bus rentals in Baner. Our vehicles are equipped with all the modern amenities to ensure a comfortable and enjoyable ride for any occasion."
        },
        {
            "name": "Mini Bus on Rent for Corporate Events in Pune:",
            "description": "Professional and Efficient Travel. For corporate events, our mini buses provide a professional and efficient travel solution. Equipped with comfortable seating and essential amenities, they are perfect for transporting teams and clients."
        },
        {
            "name": "Minibus Hire for Wedding Party in Pimpri Chinchwad:",
            "description": "Celebrate in Style. Make your wedding celebrations memorable with our mini buses in Pimpri Chinchwad. Our buses offer comfort and style, ensuring a pleasant journey for your guests to and from the wedding venue."
        },
        {
            "name": "Minibus on Rent in Pune for Outstations:",
            "description": "Comfortable Travel for Long Journeys. Travel to outstation destinations from Pune with ease in our well-equipped mini buses. Enjoy a comfortable ride with amenities designed for longer journeys."
        },
        {
            "name": "Pune to Shirdi Mini Bus on Rent:",
            "description": "Spiritual Journeys Made Comfortable. Travel comfortably from Pune to Shirdi with our mini bus rentals. Our buses are equipped to ensure a smooth and serene journey for your pilgrimage or visit."
        },
        {
            "name": "Mini Bus on Rent in Pune for Family:",
            "description": "Comfortable and Spacious for Family Trips. For family outings or reunions, our mini buses provide ample space and comfort. Enjoy a smooth and enjoyable trip with your loved ones in our well-maintained vehicles."
        },
        {
            "name": "Mini Bus on Rent in Pune for Family with Driver:",
            "description": "Stress-Free Travel with Professional Drivers. Opt for our mini bus rentals with a professional driver for a hassle-free travel experience. Enjoy your family trip while we handle the driving and navigation."
        },
        {
            "name": "Mini Bus On Rent in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Mini Bus On Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],
    "tableData": [
        ["-Mini Bus on Rent in Hadapsar Pune", "-Mini AC Bus On Rent in Wanowrie Pune"],
        ["-Top Mini Bus On Rent in Kothrud Pune", "-Mini Bus on Rent in Kharadi Pune"],
        ["-Mini Bus on Rent in Kalyani Nagar Pune", "-Mini Bus on Rent in Shivaji Nagar"],
        ["-Best Mini Bus On Rent in Baner Pune", "-Mini Bus on Rent for Corporate Events in Pune"],
        ["-Minibus Hire for Wedding Party in Pimpri Chinchwad", "-Minibus on Rent in Pune for Outstations"],
        ["-Pune to Shirdi Mini Bus on Rent", "-Mini Bus on Rent in Pune for Family"],
        ["-Mini Bus on Rent in Pune for Family with Driver"]
    ],
    
    
    

    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Mini Bus on Rent in Pune?",
            "WhyChoosedescription": "When it comes to renting a mini bus in Pune, Amruta Travels is the top choice for individuals and groups seeking reliability, comfort, and excellent service. Here’s why:"
        },
        {
            "WhyChooseheading": "Comfortable and Spacious Vehicles:",
            "WhyChoosedescription": "Our mini buses are designed to provide maximum comfort with spacious seating and ample legroom. Whether you're planning a family outing, corporate event, or school trip, our mini buses ensure a pleasant journey for all passengers."
        },
        {
            "WhyChooseheading": "Modern Amenities:",
            "WhyChoosedescription": "We offer mini buses equipped with the latest amenities such as air-conditioning, high-quality sound systems, and entertainment options to make your travel experience enjoyable. Our vehicles are regularly maintained to ensure they are in pristine condition."
        },
        {
            "WhyChooseheading": "Experienced and Professional Drivers:",
            "WhyChoosedescription": "Our drivers are skilled professionals with extensive experience in navigating Pune and its surroundings. They are committed to providing a safe and smooth journey, ensuring timely arrivals and departures."
        },
        {
            "WhyChooseheading": "Affordable Pricing:",
            "WhyChoosedescription": "At Amruta Travels, we offer competitive and transparent pricing for mini bus rentals. We provide detailed quotes with no hidden charges, making sure you get the best value for your money."
        },
        {
            "WhyChooseheading": "Customized Solutions:",
            "WhyChoosedescription": "We understand that every trip is unique. Whether you need a mini bus for a corporate event, wedding, or a simple city tour, we offer customizable packages to fit your specific needs and preferences."
        },
        {
            "WhyChooseheading": "Excellent Customer Service:",
            "WhyChoosedescription": "From the moment you book with us until the end of your journey, our customer service team is dedicated to assisting you with any queries or special requests. We strive to make your experience as smooth and hassle-free as possible."
        },
        {
            "WhyChooseheading": "Punctual and Reliable:",
            "WhyChoosedescription": "We value your time and ensure that our mini buses adhere to strict schedules. Our commitment to punctuality means you can rely on us to get you to your destination on time, every time."
        },
        {
            "WhyChooseheading": "Well-Maintained Fleet:",
            "WhyChoosedescription": "Our fleet of mini buses is regularly inspected and maintained to ensure optimal performance. Cleanliness and safety are our top priorities, providing you with a worry-free travel experience."
        },
        {
            "WhyChooseheading": "Easy Booking Process:",
            "WhyChoosedescription": "Booking a mini bus with Amruta Travels is simple and convenient. You can reach us via phone, email, or through our online booking system. Our team will handle all the details to make your booking process seamless."
        },
        {
            "WhyChooseheading": "Safety First:",
            "WhyChoosedescription": "Safety is our highest priority. All our mini buses are equipped with safety features such as seat belts, fire extinguishers, and first-aid kits. Our drivers are trained to handle any situation that might arise, ensuring a safe journey for everyone."
        }
    ]

    };

    
    
    const faqData = [
        {
            "question": "What is included in the rental of a mini bus?",
            "answer": "Our mini bus rental includes comfortable seating, air-conditioning, and the services of a professional driver. Additional amenities like entertainment systems and Wi-Fi may be available upon request."
        },
        {
            "question": "How do I book a mini bus with Amruta Travels?",
            "answer": "You can book a mini bus by contacting us directly via phone or email, or by using our online booking form. Provide us with details such as your travel dates, pick-up and drop-off locations, and any special requirements."
        },
        {
            "question": "Are there any additional charges I should be aware of?",
            "answer": "Our pricing is transparent with no hidden fees. However, additional charges may apply for extended travel hours or special requests. We will provide a detailed quote before finalizing your booking."
        },
        {
            "question": "What is the cancellation policy for a mini bus rental?",
            "answer": "Our cancellation policy varies based on the timing of the cancellation. Typically, cancellations made well in advance may incur a nominal fee, while last-minute cancellations could involve higher charges. Please contact our customer service for specific details regarding your booking."
        },
        {
            "question": "Can I request specific features or types of mini buses?",
            "answer": "Yes, you can request specific features or types of mini buses based on availability. We offer a range of options to suit different needs, including luxury and standard models."
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
            "question": "How far in advance should I book a mini bus?",
            "answer": "To secure your preferred mini bus and ensure availability, we recommend booking as early as possible. For peak seasons or special events, booking well in advance is advisable to avoid last-minute complications."
        },
        {
            "question": "Are there any restrictions on luggage or other items?",
            "answer": "There are standard luggage allowances, but we can accommodate additional baggage or special items upon request. Please inform us of any specific needs when making your booking so we can make the necessary arrangements."
        }
    ];
    
    
    
    
    
    const testimonials = [
        {
            "name": "Mr. Rajesh Sharma",
            "text": "I recently hired a mini bus from Amruta Travels for a corporate team outing, and I couldn’t be happier with the service. The booking process was straightforward, and the customer support team was very helpful in accommodating our specific needs. The mini bus was clean, well-maintained, and very comfortable, making our journey enjoyable. Our driver was punctual, professional, and navigated the city efficiently, ensuring we arrived on time. I highly recommend Amruta Travels for anyone looking for reliable and comfortable mini bus rentals in Pune!"
        },
        {
            "name": "Miss Anita Desai",
            "text": "Amruta Travels made our family reunion a breeze with their excellent mini bus rental service. We rented a mini bus for a weekend trip to the outskirts of Pune, and it was perfect for our group of 20. The bus was spacious and equipped with air-conditioning, which was great for our comfort. The driver was friendly and ensured that our trip went smoothly. The entire experience was hassle-free, and I appreciate how accommodating Amruta Travels was with our last-minute booking. I will definitely use their services again for future events!"
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
        heading: "Mini Bus On Rent in Pune  Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travel | Mini Bus on Rent in Pune | Hire Mini AC & Non-AC Buses for Corporate Events, Weddings, Family Outings, & Outstation Trips</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent Mini Buses in Pune for local and outstation trips, corporate events, weddings, family outings, and more. Hire Mini AC and Non-AC buses for trips from Hadapsar, Kothrud, Kalyani Nagar, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/mini-bus-on-rent-pune",
        "logo": "https://amrutatravel.com/images/mini-bus-rent-pune.jpg",
        "image": "https://amrutatravel.com/images/mini-bus-rent-pune.jpg",
        "priceRange": "₹2500 - ₹6000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/mini-bus-on-rent-pune",
          "priceCurrency": "INR",
          "price": "2500",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2300"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Manoj Sharma"
            },
            "datePublished": "2024-10-10",
            "reviewBody": "Booked a Mini Bus for our family trip to Shirdi. The bus was comfortable and clean. The driver was professional, and the trip was smooth. Great service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Gupta"
            },
            "datePublished": "2024-09-20",
            "reviewBody": "We hired a Mini AC Bus for a corporate event. The bus was perfect for our team, and the service was impeccable. Highly recommended!"
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
          "serviceUrl": "https://amrutatravel.com/mini-bus-on-rent-pune"
        },
        "keywords": "Mini Bus on Rent in Pune, Mini AC Bus on Rent in Pune, Mini Bus Hire for Corporate Events, Mini Bus for Wedding Party, Mini Bus for Family Outings, Mini Bus for Outstation Trips, Pune to Shirdi Mini Bus Hire, Mini Bus on Rent in Hadapsar, Kothrud, Kharadi, Kalyani Nagar, Shivaji Nagar, Baner Pune"
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
    <img src='' alt='img'/>
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
      <h3 className='Colo'>FAQs About Mini Bus on Rent in Pune – Amruta Travels:</h3>
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
export default MiniBus35;