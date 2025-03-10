
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  LuxuryForceUrbaniabus(){

  const cardData = 
    {
      keyword: 'Force Urbania Luxury Mini Bus on Rent',
      heading: ' Force Urbania Luxury Mini Bus on Rent ',

      headingDescription: 'When it comes to luxury group travel, the Force Urbania mini bus stands out as a top choice for comfort and elegance. At Amruta Travels, we are dedicated to providing an unparalleled travel experience with our Force Urbania luxury mini buses. Here’s a look at the top features that make our Force Urbania mini bus rental the ultimate option for your travel needs:',

      top:"Top  Features of Luxury Force Urbania mini bus :",

       topPlaces : [
        {
            "title": "Spacious and Comfortable Seating:",
            "description": "The Force Urbania luxury mini bus is designed with spacious seating arrangements to ensure maximum comfort for every passenger. With generous legroom and ergonomically designed seats, you and your group will enjoy a relaxed journey, whether it's a short trip around the city or a long-distance journey."
        },
        {
            "title": "Climate-Controlled Comfort:",
            "description": "Our mini buses are equipped with state-of-the-art air-conditioning systems, providing a perfectly climate-controlled environment. Regardless of the weather outside, you can expect a cool and comfortable interior that enhances your travel experience."
        },
        {
            "title": "Advanced Entertainment Systems:",
            "description": "To keep passengers entertained during the journey, the Force Urbania mini bus features modern entertainment systems. Enjoy your favorite movies or music on high-definition LED TVs and premium sound systems, making long journeys more enjoyable and engaging."
        },
        {
            "title": "Ample Luggage Space:",
            "description": "Traveling with a large group requires ample luggage space. Our Force Urbania mini buses come with spacious compartments designed to accommodate all your baggage comfortably. This ensures that your belongings are securely stored and easily accessible."
        },
        {
            "title": "Top-Notch Safety Features:",
            "description": "Safety is a priority with our Force Urbania mini bus rental. Each bus is equipped with essential safety features such as seat belts for every passenger, emergency exits, fire extinguishers, first-aid kits, and GPS tracking for real-time monitoring. These features ensure a secure and worry-free journey."
        },
        {
            "title": "Professional and Experienced Drivers:",
            "description": "Our luxury mini buses are driven by highly skilled and professional drivers who are familiar with local routes and outstation destinations. Their commitment to safety, punctuality, and excellent service ensures a smooth and efficient travel experience for you and your group."
        },
        {
            "title": "Impeccably Maintained Vehicles:",
            "description": "At Amruta Travels, we take pride in maintaining our Force Urbania mini buses to the highest standards. Each vehicle undergoes regular servicing and thorough inspections to ensure it is in excellent working condition. Cleanliness and hygiene are also meticulously maintained."
        },
        {
            "title": "Customizable Travel Solutions:",
            "description": "We understand that every trip is unique, and our Force Urbania mini bus rental offers customizable solutions to meet your specific needs. Whether you require the bus for a corporate event, family gathering, or a religious tour, we can tailor our services to match your itinerary and preferences."
        },
        {
            "title": "Affordable and Transparent Pricing:",
            "description": "Our Force Urbania mini bus rental services are competitively priced, offering excellent value for money. We believe in transparency, with no hidden costs. You’ll receive a clear and detailed quote so you know exactly what you’re paying for."
        },
        {
            "title": "Exceptional Customer Service:",
            "description": "From the moment you book until the end of your journey, Amruta Travels is committed to providing exceptional customer service. Our team is dedicated to assisting you with your booking, addressing any concerns, and ensuring a seamless and enjoyable travel experience."
        }
    ],    
     services : [
        {
            "name": "Force Urbania Luxury Mini Bus on Rent in Hadapsar:",
            "description": "Looking for a luxurious and comfortable mini bus for your next journey? Amruta Travels offers the Force Urbania luxury mini bus for rent in Hadapsar. Whether you need it for a corporate event, a family outing, or a special occasion, our Urbania buses provide the ideal blend of luxury and functionality."
        },
        {
            "name": "13-Seater Urbania Bus Hire in Kharadi:",
            "description": "For smaller group travel needs, our 13-seater Force Urbania bus hire service in Kharadi is perfect. Experience top-notch comfort and style with our luxury mini buses that are well-suited for corporate trips, group tours, or family gatherings."
        },
        {
            "name": "17-Seater Urbania Bus Hire in Kharadi:",
            "description": "If you have a slightly larger group, our 17-seater Urbania bus rental service in Kharadi offers ample space and premium amenities. Enjoy a smooth and comfortable journey with our luxury mini buses that cater to your every need."
        },
        {
            "name": "Luxury Bus for Corporate Events:",
            "description": "Impress your clients and colleagues with our luxury buses for corporate events. Amruta Travels provides elegant and well-equipped Urbania buses that ensure a professional and comfortable experience for business travel and corporate gatherings."
        },
        {
            "name": "Online Bus Booking for Pune Airport:",
            "description": "Booking a luxury mini bus for Pune Airport has never been easier. With our online bus booking system, you can easily reserve a Force Urbania bus for a seamless and stylish transfer to and from the airport."
        },
        {
            "name": "Pune to Mumbai Airport Urbania Bus on Rent:",
            "description": "Travel in comfort and style with our Pune to Mumbai Airport Urbania bus rental service. Ideal for group travel, our luxury mini buses ensure a pleasant journey between Pune and Mumbai airports."
        },
        {
            "name": "Force Urbania Luxury Mini Bus for Outstation:",
            "description": "For outstation trips, choose our Force Urbania luxury mini bus rental. Equipped with all the amenities you need, our Urbania buses are perfect for extended journeys, offering both comfort and reliability."
        },
        {
            "name": "Urbania Bus Hire in Hinjewadi:",
            "description": "Experience luxury travel with our Urbania bus hire service in Hinjewadi. Our mini buses are designed to provide a premium experience for all types of group travel, ensuring your journey is as comfortable as it is enjoyable."
        },
        {
            "name": "Urbania Bus Hire in Aundh Baner:",
            "description": "For those in Aundh and Baner, our Urbania bus hire service offers a luxurious travel experience. Whether it's for a special event or a regular group outing, our Urbania mini buses provide the perfect blend of style and comfort."
        },
        {
            "name": "Urbania Bus on Rent for Pune to Shirdi Darshan:",
            "description": "When planning a spiritual journey from Pune to Shirdi, consider our Urbania bus rental service for a comfortable and luxurious travel experience. The Urbania offers ample space and high-end features, ensuring a pleasant journey to Shirdi, allowing you to focus on your darshan without any travel hassles."
        },
        {
            "name": "Force Urbania on Rent in Pune Airport:",
            "description": "Traveling from Pune Airport? Choose the Force Urbania for a seamless and comfortable transfer. Our rental service ensures that you experience a smooth transition from the airport to your destination with luxury and ease."
        },
        {
            "name": "Force Urbania on Rent in Pune Airport Near Me:",
            "description": "Looking for Force Urbania rentals near Pune Airport? We provide convenient pickup and drop-off services close to the airport, making it easy for you to access luxury transportation right when you land."
        },
        {
            "name": "Force Urbania on Rent in Pimpri Chinchwad:",
            "description": "Residents of Pimpri Chinchwad can now enjoy the luxury and comfort of the Force Urbania. Whether you need it for corporate events, family gatherings, or any special occasion, our Pimpri Chinchwad rental service ensures top-notch quality and convenience."
        },
        {
            "name": "Force Urbania on Rent in Pimpri Chinchwad Near Me:",
            "description": "If you're searching for Force Urbania rentals near Pimpri Chinchwad, we offer localized services to cater to your needs. Enjoy luxury travel with easy access to our rentals in and around Pimpri Chinchwad."
        },
        {
            "name": "Force Urbania on Rent in Magarpatta City:",
            "description": "For those in Magarpatta City, our Force Urbania rental service provides an ideal solution for all your transportation needs. Whether it's for a corporate event, a wedding, or a personal trip, experience premium travel with our top-tier Urbania fleet."
        },
        {
            "name": "Force Urbania on Rent in Hinjewadi:",
            "description": "Travel in style with our Force Urbania rental service in Hinjewadi. Perfect for business trips, events, or personal use, the Urbania offers exceptional comfort and luxury, making your journey from Hinjewadi a truly enjoyable experience."
        },
        {
            "name": "Force Urbania Luxury Mini Bus On Rent Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Force Urbania Luxury Mini Bus On Rent. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],    
     tableData : [
        ["-Force Urbania Luxury Mini Bus on Rent in Hadapsar", "-13-Seater Urbania Bus Hire in Kharadi"],
        ["-17-Seater Urbania Bus Hire in Kharadi", "-Luxury Bus for Corporate Events"],
        ["-Online Bus Booking for Pune Airport", "-Pune to Mumbai Airport Urbania Bus on Rent"],
        ["-Force Urbania Luxury Mini Bus for Outstation", "-Urbania Bus Hire in Hinjewadi"],
        ["-Urbania Bus Hire in Aundh Baner", "-Urbania Bus on Rent for Pune to Shirdi Darshan"],
        ["-Force Urbania on Rent in Pune Airport", "-Force Urbania on Rent in Pune Airport Near Me"],
        ["-Force Urbania on Rent in Pimpri Chinchwad", "-Force Urbania on Rent in Pimpri Chinchwad Near Me"],
        ["-Force Urbania on Rent in Magarpatta City", "-Force Urbania on Rent in Hinjewadi"]
    ],
    
    
    

    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Force Urbania Rentals?",
            "WhyChoosedescription": "When it comes to Force Urbania rentals, Amruta Travels stands out for several reasons. We offer a premium travel experience with a focus on comfort, safety, and customer satisfaction. Here’s why you should choose us for your next Force Urbania rental:"
        },
        {
            "WhyChooseheading": "Exceptional Comfort and Luxury:",
            "WhyChoosedescription": "Our Force Urbania buses are designed to provide maximum comfort with plush seating, ample legroom, and advanced climate control. Whether you're on a short trip or a longer journey, you'll enjoy a first-class travel experience."
        },
        {
            "WhyChooseheading": "Modern Amenities:",
            "WhyChoosedescription": "Enjoy the convenience of high-quality audio systems, spacious luggage compartments, and on-demand Wi-Fi. Our Urbania buses are equipped with modern amenities to enhance your travel experience, whether for corporate events or special occasions."
        },
        {
            "WhyChooseheading": "Professional and Experienced Drivers:",
            "WhyChoosedescription": "Our drivers are professionally trained and highly experienced in navigating both Pune and beyond. They are dedicated to providing a smooth, safe, and punctual travel experience for all passengers."
        },
        {
            "WhyChooseheading": "Well-Maintained Fleet:",
            "WhyChoosedescription": "We maintain our fleet to the highest standards. Each Force Urbania undergoes rigorous inspections and regular maintenance to ensure it remains in top condition, minimizing the risk of disruptions during your journey."
        },
        {
            "WhyChooseheading": "Customized Travel Solutions:",
            "WhyChoosedescription": "Whether you need the Force Urbania for corporate events, weddings, airport transfers, or sightseeing tours, we offer tailored solutions to meet your specific requirements. Our team works closely with you to ensure all your needs are addressed."
        },
        {
            "WhyChooseheading": "Competitive Pricing:",
            "WhyChoosedescription": "Our rental rates for the Force Urbania are competitive and transparent. We offer clear pricing with no hidden fees, so you can budget confidently and enjoy your trip without unexpected costs."
        },
        {
            "WhyChooseheading": "Convenient Booking Process:",
            "WhyChoosedescription": "Booking your Force Urbania with us is easy and efficient. You can make reservations via phone, email, or through our online booking system. Our team is always available to assist you with your queries and booking needs."
        },
        {
            "WhyChooseheading": "Excellent Customer Service:",
            "WhyChoosedescription": "From the initial inquiry to the end of your journey, our customer service team is dedicated to ensuring a smooth and enjoyable experience. We are committed to providing personalized service to meet your expectations."
        },
        {
            "WhyChooseheading": "Punctuality and Reliability:",
            "WhyChoosedescription": "We understand the importance of timing in travel. Our Urbania mini buses adhere to strict schedules to ensure timely pickups and drop-offs, helping you stay on track with your plans."
        },
        {
            "WhyChooseheading": "Wide Service Area:",
            "WhyChoosedescription": "We offer Force Urbania rentals across Pune and surrounding areas including Pimpri Chinchwad, Hadapsar, Magarpatta City, and Hinjewadi. No matter where you need to go, we have you covered."
        }
    ]

    };

    
    
    const faqData = [
        {
            "question": "What amenities are included with the Force Urbania rental?",
            "answer": "The Force Urbania comes equipped with plush seating, air-conditioning, a high-quality audio system, Wi-Fi, and ample luggage space. Additional amenities may be available upon request."
        },
        {
            "question": "How can I book the Force Urbania Luxury Mini Bus?",
            "answer": "You can book the Force Urbania by contacting us via phone, email, or through our online booking form. Provide details such as your travel dates, pickup and drop-off locations, and any specific requirements."
        },
        {
            "question": "Are there any hidden fees in the rental pricing?",
            "answer": "No, our pricing is transparent with no hidden fees. We provide a detailed quote based on your requirements, so you know exactly what to expect."
        },
        {
            "question": "What is the cancellation policy for the Force Urbania rental?",
            "answer": "Our cancellation policy varies depending on how far in advance you cancel. Typically, cancellations made in advance may incur a nominal fee, while last-minute cancellations could involve higher charges. Please contact us for specific details."
        },
        {
            "question": "Can I request specific features or configurations for the Force Urbania?",
            "answer": "Yes, you can request specific features or configurations based on availability. We offer a range of options to suit different needs and preferences."
        },
        {
            "question": "Are the drivers experienced and licensed?",
            "answer": "Yes, all our drivers are professionally trained, experienced, and hold valid licenses. They are knowledgeable about local routes and committed to providing a safe and pleasant journey."
        },
        {
            "question": "Can I make changes to my booking after it is confirmed?",
            "answer": "Yes, changes can be made to your booking, subject to availability and any applicable fees. Contact our customer service team as soon as possible to discuss any modifications."
        },
        {
            "question": "What should I do if I need assistance during my journey?",
            "answer": "If you require assistance during your journey, please contact the driver or our customer service team immediately. We are committed to addressing any concerns or issues promptly."
        },
        {
            "question": "How far in advance should I book the Force Urbania?",
            "answer": "To ensure availability and secure your preferred vehicle, we recommend booking as early as possible. For peak seasons or special events, booking well in advance is advisable."
        },
        {
            "question": "Are there any restrictions on luggage or other items?",
            "answer": "Standard luggage allowances apply, but we can accommodate additional baggage or special items upon request. Inform us of any specific needs when making your booking so we can make the necessary arrangements."
        }
    ];
    
    
    
    
    
    const testimonials = [
        {
            "name": "Miss Sophie M",
            "text": "We recently hired the Force Urbania Luxury Mini Bus from Amruta Travels for a corporate retreat, and I must say, the experience exceeded our expectations. The bus was impeccably clean, with plush seating and all the modern amenities we needed for a comfortable journey. The driver was punctual and professional, ensuring we arrived on time and safely at each destination. Our clients were very impressed with the luxury and comfort of the Urbania. I highly recommend Amruta Travels for anyone seeking a top-notch travel experience."
        },
        {
            "name": "Mr. Rajesh Sharma",
            "text": "For my daughter’s wedding, we needed a luxury bus that could transport our guests in style and comfort. Amruta Travels provided us with the Force Urbania Luxury Mini Bus, and it was perfect for the occasion. The vehicle was elegant and spacious, and the onboard amenities made the journey enjoyable for everyone. The service was impeccable, from the initial booking to the end of our trip. Amruta Travels made our special day even more memorable with their outstanding service. Thank you for making everything so smooth and luxurious!"
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
        heading: "Force Urbania Luxury Mini Bus On Rent Contact Number:",
        contactNumbers:
        [
          
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
  <title>Urbania On Rent in Pune ₹33 Per Km | Luxury Mini Bus (13-17 Seater)</title>
  <meta 
    name="description" 
    content="Looking for Urbania on Rent in Pune? Hire luxury 13-17 seater Urbania mini buses for outstation trips, corporate events, and airport transfers with Amruta Travel." 
  />
  <meta 
    name="keywords" 
    content="Urbania On Rent in Pune, Force Urbania Luxury Mini Bus, 13 Seater Urbania Bus Hire, 17 Seater Urbania Bus Hire Pune, Urbania Bus for Corporate Events, Pune Airport Urbania Bus on Rent, Pune to Mumbai Urbania Bus on Rent, Force Urbania Bus for Outstation, Urbania Bus for Shirdi Darshan, Urbania Hire in Hinjewadi, Urbania Rental in Pune" 
  />
  <meta name="author" content="Amruta Travel" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Amruta Travel",
            "description": "Looking for Urbania on Rent in Pune? Hire luxury 13-17 seater Urbania mini buses for outstation trips, corporate events, and darshan with Amruta Travel.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411041",
              "addressCountry": "IN"
            },
            "telephone": "+91-8421333435",
            "url": "https://amrutatravel.com/force-urbania-luxury-mini-bus-rent-pune",
            "logo": "https://amrutatravel.com/img/150x70-05.jpg",
            "image": [
              "https://amrutatravel.com/img/hell.png",
              "https://amrutatravel.com/img/hell2.png",
              "https://amrutatravel.com/img/hell3.jpg"
            ],
            "priceRange": "₹3000 - ₹9000",
            "offers": {
              "@type": "Offer",
              "url": "https://amrutatravel.com/force-urbania-luxury-mini-bus-rent-pune",
              "priceCurrency": "INR",
              "price": 3000,
              "priceValidUntil": "2024-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.7,
              "reviewCount": 5400
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Pune",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5204,
                "longitude": 73.8567
              }
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://amrutatravel.com/force-urbania-luxury-mini-bus-rent-pune"
            },
            "keywords": "Urbania On Rent in Pune, Force Urbania Luxury Mini Bus, 13 Seater Urbania Bus Hire, 17 Seater Urbania Bus Hire Pune, Urbania Bus for Corporate Events, Pune Airport Urbania Bus on Rent, Pune to Mumbai Urbania Bus on Rent, Force Urbania Bus for Outstation, Urbania Bus for Shirdi Darshan, Urbania Hire in Hinjewadi, Urbania Rental in Pune"
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
      <h3 className='Colo'>FAQs About Force Urbania Luxury Mini Bus on Rent:</h3>
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
              <p>
              <a href={`tel:${number}`} className="contact-link">
                {number}
              </a>
              </p>
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
export default LuxuryForceUrbaniabus;