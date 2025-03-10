
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  AshtavinayakUrbania(){

  const cardData = 
    {
      keyword: ' Force Urbania on Rent for Ashtavinayak Darshan ',
      heading: ' Amruta Travels: Force Urbania on Rent for Ashtavinayak Darshane ',

      headingDescription: 'Ashtavinayak Darshan is a revered pilgrimage that involves visiting eight sacred temples dedicated to Lord Ganesha. This spiritual journey is deeply cherished by devotees, and to make it comfortable and memorable, renting a Force Urbania from Amruta Travels is an excellent choice. Here’s why:',

      top:"Top Features of Force Urbania on Rent for Ashtavinayak Darshan :",

      topPlaces : [
        {
            "title": "Moreshwar:",
            "description": "Located in Morgaon, this temple is considered the first and most important of the Ashtavinayak temples. It is known for its idol of Ganesh in a unique posture with a peacock, his vehicle, nearby."
        },
        {
            "title": "Siddhivinayak:",
            "description": "Situated in Siddhatek, this temple is renowned for its idol with a distinctive curved trunk, which is believed to have significant spiritual powers."
        },
        {
            "title": "Ballaleshwar:",
            "description": "Located in Pali, this temple is famous for its deity, who is revered as a protector of devotees and is unique in its representation of Ganesh with an elephant-like trunk."
        },
        {
            "title": "Varadavinayak:",
            "description": "Found in Mahad, this temple is known for its idol, which is adorned with precious stones and is considered a wish-fulfilling deity."
        },
        {
            "title": "Chintamani:",
            "description": "Located in Theur, this temple is significant for its ability to relieve devotees from stress and worries. The deity here is believed to grant peace and satisfaction."
        },
        {
            "title": "Girijatmaj:",
            "description": "Situated in Lonavala, this temple is famous for its natural cave setting and the statue of Ganesh, which is said to be one of the oldest in the Ashtavinayak series."
        },
        {
            "title": "Vighneshwar:",
            "description": "Located in Ozar, this temple is dedicated to Ganesh as the remover of obstacles and is highly revered for its significant spiritual energy."
        },
        {
            "title": "Ranjangaon:",
            "description": "Found in Ranjangaon, this temple is known for its powerful deity, who is believed to remove all troubles and grant success in endeavors."
        }
    ],    
    services : [
        {
            "name": "Pune to Ashtavinayak Urbania Tour Package from Pune:",
            "description": "Embark on a spiritual journey with our Pune to Ashtavinayak Urbania tour package. This package offers a comfortable and luxurious way to visit the eight revered Ganesh temples of Ashtavinayak. Our Force Urbania buses provide ample space, climate control, and modern amenities to ensure a pleasant and hassle-free pilgrimage experience. Whether you are looking for a single day trip or a multi-day tour, we have customizable packages to fit your schedule and budget."
        },
        {
            "name": "Cheapest Ashtavinayak Tour from Pune:",
            "description": "Looking for an affordable way to experience the Ashtavinayak pilgrimage? Our cheapest Ashtavinayak tour from Pune offers cost-effective solutions without compromising on comfort and quality. We provide competitive pricing for our Force Urbania rentals, ensuring that you receive excellent value for your money. Enjoy the convenience of a well-maintained vehicle and professional drivers at budget-friendly rates."
        },
        {
            "name": "13 Seater Urbania on Rent for Ashtavinayak Tour from Pune:",
            "description": "For smaller groups or families, our 13-seater Urbania on rent is the perfect choice for the Ashtavinayak tour from Pune. This vehicle combines comfort and convenience with its spacious seating and climate-controlled environment. Ideal for intimate groups, the 13-seater Urbania ensures that your pilgrimage is both comfortable and enjoyable."
        },
        {
            "name": "17 Seater Urbania on Rent for Ashtavinayak Tour from Pune:",
            "description": "Our 17-seater Urbania on rent provides additional space for slightly larger groups embarking on the Ashtavinayak tour from Pune. With its luxurious interiors and advanced amenities, this vehicle offers a comfortable and enjoyable travel experience. It’s an excellent option for groups looking for a blend of space and comfort."
        },
        {
            "name": "Urbania on Rent for Pune to Ranjangaon Ganpati Darshan:",
            "description": "Experience a divine journey to the Ranjangaon Ganpati temple with our Urbania on rent. Located in Ranjangaon, this temple is one of the important Ashtavinayak sites. Our Force Urbania buses are equipped with all necessary comforts to make your trip smooth and enjoyable, ensuring that you reach the temple in a relaxed state."
        },
        {
            "name": "Pune to Siddhivinayak Temple Force Urbania on Rent:",
            "description": "Travel comfortably from Pune to the Siddhivinayak Temple in Siddhatek with our Force Urbania on rent. This temple is renowned for its unique and powerful idol of Lord Ganesha. Our Urbania buses are designed to offer a premium travel experience, complete with climate control, entertainment options, and ample luggage space, making your journey to Siddhivinayak Temple a memorable one."
        },
        {
            "name": "Force Urbania on Rent for Pune to Moreshwar Temple at Morgaon Ashtavinayak Darshan:",
            "description": "The Moreshwar Temple at Morgaon is the first and one of the most significant temples in the Ashtavinayak pilgrimage. Rent our Force Urbania for a comfortable trip from Pune to this sacred site. Our Urbania buses offer generous seating, modern amenities, and a well-maintained environment, ensuring that your visit to Moreshwar Temple is both enjoyable and spiritually fulfilling."
        },
        {
            "name": "Pune to Siddhivinayak Temple Siddhatek Force Urbania on Rent:",
            "description": "Make your pilgrimage to the Siddhivinayak Temple in Siddhatek seamless and comfortable with our Force Urbania on rent. Known for its powerful deity and significant spiritual value, Siddhivinayak Temple is an essential stop on the Ashtavinayak tour. Our Urbania buses provide a luxurious travel experience with features like climate control, advanced entertainment systems, and professional drivers to ensure a smooth journey from Pune to Siddhatek."
        },
        {
            "name": "Force Urbania on Rent for Ashtavinayak Darshan from Pimpri Chinchwad:",
            "description": "Experience the convenience and comfort of a Force Urbania rental for your Ashtavinayak Darshan journey from Pimpri Chinchwad. Our Urbania buses are equipped to handle group travel with ease, offering a spacious and comfortable environment to visit the eight revered Ganesh temples. Whether you're planning a day trip or an extended pilgrimage, our rental service ensures a smooth and enjoyable experience."
        },
        {
            "name": "Pune to Ballaleshwar Temple Pali Urbania Bus on Rent:",
            "description": "Embark on a spiritual journey to the Ballaleshwar Temple in Pali with our Force Urbania bus on rent. Located in Pali, this temple is a significant part of the Ashtavinayak pilgrimage. Our Urbania buses provide ample space, climate control, and modern amenities, making your travel from Pune to Ballaleshwar Temple comfortable and enjoyable."
        },
        {
            "name": "Pune to Varad Vinayak Temple Mahad Ashtavinayak Darshan:",
            "description": "For your visit to the Varad Vinayak Temple in Mahad, we offer Force Urbania rentals that ensure a luxurious travel experience. This temple is an integral part of the Ashtavinayak tour, known for its unique and sacred idol. Our Urbania buses offer a blend of comfort and convenience, featuring climate control, reclining seats, and entertainment options for a pleasant journey."
        },
        {
            "name": "Pune to Chintamani Temple Theur Ashtavinayak Darshan Urbania on Rent:",
            "description": "Travel in style and comfort to the Chintamani Temple in Theur with our Force Urbania on rent. This temple is an essential stop in the Ashtavinayak Darshan, renowned for its spiritual significance. Our Urbania buses are designed to provide a premium travel experience, ensuring that your visit to Chintamani Temple is both comfortable and memorable."
        },
        {
            "name": "Pune to Girijatmaj Temple Lenyadri Urbania on Rent:",
            "description": "Make your pilgrimage to the Girijatmaj Temple in Lenyadri a comfortable and enjoyable experience with our Force Urbania on rent. Located in Lenyadri, this temple is one of the key sites in the Ashtavinayak tour. Our Urbania buses offer spacious seating, climate control, and advanced amenities, ensuring a smooth journey from Pune to Girijatmaj Temple."
        },
        {
            "name": "Pune to Vighnahar Temple Ozar Ganpati Ashtavinayak Darshan:",
            "description": "Our Force Urbania rentals are ideal for visiting the Vighnahar Temple in Ozar, an important site in the Ashtavinayak Darshan. Known for its powerful Ganpati idol, this temple is a must-visit on your pilgrimage. Our Urbania buses provide a comfortable and well-equipped travel experience, complete with climate control and entertainment options to enhance your journey from Pune to Vighnahar Temple."
        },
        {
            "name": "Force Urbania On Rent for Ashtavinayak Darshan Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Force Urbania On Rent for Ashtavinayak Darshan. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],      
    "tableData": [
      ["- Urbania on Rent for Pune to Ranjangaon Ganpati Darshan", "- Pune to Siddhivinayak Temple Force Urbania on Rent"],
      ["- Force Urbania On Rent for Pune to Moreshwar Temple at Morgaon Ashtavinayak Darshan", "- Pune to Siddhivinayak Temple Siddhatek Force Urbania on Rent"],
      ["- Force Urbania on Rent for Ashtavinayak Darshan from Pimpri Chinchwad", "- Pune to Ballaleshwar Temple Pali Urbania Bus On Rent"],
      ["- Pune to Varad Vinayak Temple Mahad Ashtavinayak Darshan", "- Pune to Chintamani Temple Theur Ashtavinayak Darshan Urbania on Rent"],
      ["- Pune to Girijatmaj Temple Lenyadri Urbania on Rent", "- Pune to Vighnahar Temple Ozar Ganpati Ashtavinayak Darshan"]
    ],   
    
    

   "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Force Urbania on Rent for Ashtavinayak Darshan?",
            "WhyChoosedescription": "Amruta Travels stands out as the premier choice for renting a Force Urbania for your Ashtavinayak Darshan due to our commitment to providing exceptional travel experiences. Here’s why you should choose us for your journey:"
        },
        {
            "WhyChooseheading": "Comfort and Luxury:",
            "WhyChoosedescription": "Our Force Urbania buses are designed for maximum comfort with spacious seating, air-conditioning, and advanced amenities, ensuring a relaxed journey to all Ashtavinayak temples."
        },
        {
            "WhyChooseheading": "Professional Drivers:",
            "WhyChoosedescription": "Our drivers are experienced and well-versed with the routes to various Ashtavinayak temples, ensuring a smooth and safe journey."
        },
        {
            "WhyChooseheading": "Reliable Service:",
            "WhyChoosedescription": "We pride ourselves on punctuality and reliability. Our buses are meticulously maintained to ensure they are always in top condition, so you can count on us for a hassle-free trip."
        },
        {
            "WhyChooseheading": "Customizable Packages:",
            "WhyChoosedescription": "We offer flexible rental packages tailored to your needs, whether you're planning a day trip or an extended pilgrimage, ensuring that you get the best value for your journey."
        },
        {
            "WhyChooseheading": "Top-Notch Safety:",
            "WhyChoosedescription": "Your safety is our top priority. Our Force Urbania buses are equipped with modern safety features including GPS tracking, seat belts, and emergency equipment."
        },
        {
            "WhyChooseheading": "Competitive Pricing:",
            "WhyChoosedescription": "We offer transparent and competitive pricing with no hidden charges. Our rates are designed to provide you with excellent value without compromising on quality."
        },
        {
            "WhyChooseheading": "Well-Maintained Vehicles:",
            "WhyChoosedescription": "Our Urbania buses are regularly serviced and cleaned to maintain high standards of hygiene and comfort, making your journey pleasant and enjoyable."
        },
        {
            "WhyChooseheading": "Easy Booking Process:",
            "WhyChoosedescription": "We provide a simple and straightforward booking process. You can easily book your Urbania online or through our customer service team, ensuring a seamless experience."
        },
        {
            "WhyChooseheading": "Customer Support:",
            "WhyChoosedescription": "Our dedicated customer support team is available to assist you with any queries or special requests, providing you with a personalized experience from start to finish."
        },
        {
            "WhyChooseheading": "Positive Reviews:",
            "WhyChoosedescription": "We have a track record of satisfied customers who have enjoyed our service. Our positive reviews reflect our commitment to excellence and customer satisfaction."
        }
    ],
      };

    
    
      const faqData = [
        {
            "question": "What is the seating capacity of the Force Urbania buses?",
            "answer": "Our Force Urbania buses come in various capacities including 13, 17, and 20-seaters. Please specify your group size, and we will provide the appropriate bus for your needs."
        },
        {
            "question": "Are the Force Urbania buses equipped with air-conditioning?",
            "answer": "Yes, all our Force Urbania buses are fully air-conditioned to ensure a comfortable journey regardless of the weather conditions."
        },
        {
            "question": "Can I book the Urbania for a one-day trip?",
            "answer": "Absolutely! We offer flexible rental options, including one-day trips. You can choose a package that best suits your itinerary for the Ashtavinayak Darshan."
        },
        {
            "question": "How do I book a Force Urbania for Ashtavinayak Darshan?",
            "answer": "Booking is simple. You can either visit our website or contact our customer service team to make a reservation. We will guide you through the process and confirm your booking promptly."
        },
        {
            "question": "What safety features are included in the Force Urbania?",
            "answer": "Our Force Urbania buses are equipped with safety features such as seat belts, emergency exits, fire extinguishers, and GPS tracking for real-time monitoring."
        },
        {
            "question": "Are there any additional charges for the Urbania rental?",
            "answer": "We offer transparent pricing with no hidden charges. The cost of your rental will be provided upfront, and any additional fees will be clearly communicated before booking."
        },
        {
            "question": "Can I request special amenities on the bus?",
            "answer": "Yes, if you have specific requirements or requests, please let us know at the time of booking. We will do our best to accommodate your needs."
        },
        {
            "question": "What is the cancellation policy for the Urbania rental?",
            "answer": "Our cancellation policy varies depending on the booking terms. Please review our terms and conditions or contact our customer service team for details on cancellations."
        },
        {
            "question": "Are the drivers experienced and familiar with the Ashtavinayak routes?",
            "answer": "Yes, our drivers are experienced and knowledgeable about the routes to the Ashtavinayak temples, ensuring a smooth and safe journey."
        },
        {
            "question": "How can I contact Amruta Travels for further assistance?",
            "answer": "You can reach out to us via our website, email, or phone. Our customer support team is available to assist you with any questions or concerns regarding your Urbania rental."
        }
    ];
    
    
    
    
    
    const testimonials = [
      {
          "name": "Mr. Ravi Deshmukh",
          "text": "We recently hired a Force Urbania from Amruta Travels for our Ashtavinayak Darshan trip, and it was an outstanding experience. The bus was luxurious, clean, and incredibly comfortable. The air-conditioning made our journey pleasant even in the hot weather, and the reclining seats provided ample relaxation. Our driver, Mr. Shinde, was punctual and knowledgeable, ensuring we visited all the temples smoothly and safely. Amruta Travels made our pilgrimage stress-free and enjoyable. Highly recommend their services!"
      },
      {
          "name": "Miss Snehal Patel",
          "text": "Our family trip to the Ashtavinayak temples was made perfect thanks to Amruta Travels. We opted for their Force Urbania on rent, and it exceeded our expectations. The bus was spacious, with plenty of room for everyone, and the amenities were top-notch. The booking process was straightforward, and the customer support team was helpful and responsive. The driver, Miss Anjali, was excellent, ensuring a smooth and safe journey. We couldn’t have asked for a better service. Thank you, Amruta Travels, for making our spiritual journey memorable!"
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
        heading: "Force Urbania On Rent for Ashtavinayak Darshan Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Force Urbania On Rent for Ashtavinayak Darshan | Rent Urbania for Ashtavinayak Temple Darshan, Pune to Ashtavinayak Tour, Siddhivinayak, Ranjangaon, Moreshwar, and More</title>
  <meta name="description" content="Book Force Urbania on rent for Ashtavinayak Darshan from Pune. Rent 13, 17 Seater Force Urbania for tours to Ranjangaon, Siddhivinayak, Moreshwar, and other Ashtavinayak temples. Call +91 8421333435 for booking." />
  <meta name="keywords" content="pune to ashtavinayak urbania tour package from pune, Cheapest Ashtavinayak tour from Pune, 13 seater urbania on rent for ashtavinayak tour from Pune, 17 seater urbania on rent for ashtavinayak tour from Pune, urbania on rent for pune to ranjangaon ganpati darshan, Pune to siddhivinayak temple force urbania on Rent, Force Urbania On Rent for pune to Moreshwar Temple at Morgaon Ashtavinayak Darshan, Pune to Siddhivinayak Temple Siddhatek Force urbania on Rent, force urbania on rent for ashtavinayak darshan from pimpri Chinchwad, Pune to Ballaleshwar Temple Pali Urbania Bus On Rent, pune to varad vinayak temple mahad ashtavinayak darshan, Pune to chintamani temple theur ashtavinayak darshan Urbania on Rent, Pune to Girijatmaj Temple Lenyadri Urbania on Rent, pune to vighnahar temple ozar ganpati ashtavinayak darshan" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Affordable Force Urbania on Rent for Ashtavinayak Darshan from Pune. Rent 13, 17 Seater Force Urbania for temple tours including Ranjangaon, Siddhivinayak, Moreshwar, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/force-urbania-on-rent-for-ashtavinayak-darshan",
        "logo": "https://amrutatravel.com/images/force-urbania-rent-ashtavinayak.jpg",
        "image": "https://amrutatravel.com/images/force-urbania-rent-ashtavinayak.jpg",
        "priceRange": "₹3500 - ₹9000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/force-urbania-on-rent-for-ashtavinayak-darshan",
          "priceCurrency": "INR",
          "price": "3500",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1500"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sandeep Patil"
            },
            "datePublished": "2024-09-15",
            "reviewBody": "We hired a 17-seater Force Urbania for a trip to Ashtavinayak temples. The vehicle was clean and comfortable. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Joshi"
            },
            "datePublished": "2024-08-22",
            "reviewBody": "Booked a 13-seater Force Urbania for Ashtavinayak darshan tour. The vehicle was perfect for our group, and the driver was courteous and knowledgeable."
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
          "serviceUrl": "https://amrutatravel.com/force-urbania-on-rent-for-ashtavinayak-darshan"
        },
        "keywords": "pune to ashtavinayak urbania tour package from pune, Cheapest Ashtavinayak tour from Pune, 13 seater urbania on rent for ashtavinayak tour from Pune, 17 seater urbania on rent for ashtavinayak tour from Pune, urbania on rent for pune to ranjangaon ganpati darshan, Pune to siddhivinayak temple force urbania on Rent, Force Urbania On Rent for pune to Moreshwar Temple at Morgaon Ashtavinayak Darshan, Pune to Siddhivinayak Temple Siddhatek Force urbania on Rent, force urbania on rent for ashtavinayak darshan from pimpri Chinchwad, Pune to Ballaleshwar Temple Pali Urbania Bus On Rent, pune to varad vinayak temple mahad ashtavinayak darshan, Pune to chintamani temple theur ashtavinayak darshan Urbania on Rent, Pune to Girijatmaj Temple Lenyadri Urbania on Rent, pune to vighnahar temple ozar ganpati ashtavinayak darshan"
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
    {/* <img src='\img\Keyword Based Image\Keyword Based Image-17.jpg' alt='img'/> */}
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
      <h3 className='Colo'>FAQs - Force Urbania on Rent for Ashtavinayak Darshan:</h3>
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
export default AshtavinayakUrbania;