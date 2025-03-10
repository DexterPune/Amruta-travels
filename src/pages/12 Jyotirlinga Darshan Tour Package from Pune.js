
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';

function  JyotirlingaDarshan(){

  const cardData = 
    {
        "keyword": "12 Jyotirlinga Darshan Tour Package",
        "heading": "Amruta Travels – 12 Jyotirlinga Darshan Tour Package",
        "headingDescription": "Embark on a divine journey with Amruta Travels as we take you on an unparalleled pilgrimage to visit the 12 Jyotirlingas—sacred shrines dedicated to Lord Shiva, revered by devotees across India. Our comprehensive Jyotirlinga Darshan tour package from Pune is designed to provide you with a spiritually enriching experience, combining comfort, convenience, and devotion.",
        "top": "Top Places to Visit in the 12 Jyotirlinga Darshan Tour Package:",
        "topPlaces": [
            {
                "title": "1. Somnath Temple (Gujarat)",
                "description": "The Somnath Temple in Prabhas Patan near Veraval is the first Jyotirlinga in our tour. It is renowned for its architectural splendor and historical significance. The temple, dedicated to the moon god, is an iconic symbol of devotion and resilience."
            },
            {
                "title": "2. Mallikarjuna Temple (Andhra Pradesh)",
                "description": "Located on the Shri Shaila Mountain, the Mallikarjuna Temple is dedicated to Lord Shiva and his consort Parvati. It is one of the most revered Jyotirlingas, known for its serene surroundings and spiritual ambiance."
            },
            {
                "title": "3. Mahakaleshwar Temple (Madhya Pradesh)",
                "description": "Situated in Ujjain, the Mahakaleshwar Temple is known for its unique idol, which is believed to be self-manifested. The temple attracts numerous pilgrims seeking to witness the mesmerizing Bhasma Aarti performed here."
            },
            {
                "title": "4. Omkareshwar Temple (Madhya Pradesh)",
                "description": "The Omkareshwar Temple is located on Mandhata Island in the Kaveri River. This Jyotirlinga is renowned for its distinctive Om-shaped island and its serene river setting, making it a spiritually uplifting place to visit."
            },
            {
                "title": "5. Kedarnath Temple (Uttarakhand)",
                "description": "Nestled in the majestic Himalayas, the Kedarnath Temple is one of the most significant Jyotirlingas. The temple's remote location adds to its mystical charm, and it is accessible via a trek that offers breathtaking views of the snow-capped peaks."
            },
            {
                "title": "6. Bhimashankar Temple (Maharashtra)",
                "description": "Located near Pune, the Bhimashankar Temple is the sixth Jyotirlinga and is known for its scenic beauty amidst the lush Sahyadri hills. This temple is also a popular destination for nature lovers and spiritual seekers."
            },
            {
                "title": "7. Kashi Vishwanath Temple (Uttar Pradesh)",
                "description": "The Kashi Vishwanath Temple in Varanasi is one of the most revered Jyotirlingas. Situated on the banks of the Ganges River, it is a significant pilgrimage site and is known for its vibrant spiritual atmosphere."
            },
            {
                "title": "8. Rameswar Temple (Tamil Nadu)",
                "description": "Located in Rameswaram, the Rameswar Temple is a prominent Jyotirlinga known for its beautiful corridors and the significant role it plays in Hindu mythology. The temple's architecture and spiritual importance make it a must-visit destination."
            },
            {
                "title": "9. Grishneshwar Temple (Maharashtra)",
                "description": "The Grishneshwar Temple in Ellora, near Aurangabad, is renowned for its intricate carvings and the association with the Ellora Caves. This Jyotirlinga is celebrated for its historical and architectural significance."
            },
            {
                "title": "10. Aundha Nagnath Temple (Haryana)",
                "description": "The Aundha Nagnath Temple, located in the village of Aundha, is a lesser-known Jyotirlinga but holds great significance for devotees. The temple's historical and cultural importance adds to its spiritual allure."
            }
        ],
        "services": [
            {
                "name": "Pune to Rameshwaram Darshan Bus Hire on Rent",
                "description": "Discover the divine beauty of Rameshwaram with our specialized bus hire services. From Pune to Rameshwaram, enjoy a comfortable and hassle-free journey with Amruta Travels. Our fleet of buses is equipped for long-distance travel, ensuring a smooth ride as you visit this sacred site."
            },
            {
                "name": "Pune to Trimbakeshwar Bus Hire On Rent",
                "description": "Experience the spiritual ambiance of Trimbakeshwar with Amruta Travels' bus hire service. Travel from Pune to this revered Jyotirlinga temple in comfort and style. Our buses are well-maintained and ideal for a serene pilgrimage experience."
            },
            {
                "name": "Pune to Vaijnath Jyotirlinga Darshan Bus Hire",
                "description": "Plan your pilgrimage to Vaijnath Jyotirlinga with ease. Amruta Travels offers dedicated bus hire services from Pune to this holy site, providing a comfortable and convenient travel experience."
            },
            {
                "name": "Pune to Grishneshwar Bus Hire On Rent",
                "description": "Visit the Grishneshwar Jyotirlinga with our reliable bus hire services. From Pune to Ellora, where this sacred temple is located, our buses ensure a smooth and comfortable journey for your spiritual trip."
            },
            {
                "name": "Pune to Somnath Jyotirlinga Gujarat Bus On Rent",
                "description": "Embark on a divine journey to Somnath in Gujarat with Amruta Travels. Our bus hire service from Pune to this historic Jyotirlinga offers a comfortable ride and a chance to explore one of the most significant temples in India."
            },
            {
                "name": "Pune to Mallikarjuna Jyotirlinga Darshan Bus On Rent",
                "description": "Travel to Mallikarjuna Jyotirlinga with ease and comfort. Amruta Travels provides dedicated bus hire services from Pune to this revered temple in Andhra Pradesh, ensuring a serene pilgrimage experience."
            },
            {
                "name": "Pune to Mahakaleshwar Ujjain Bus On Rent",
                "description": "Experience the spiritual aura of Mahakaleshwar in Ujjain with our specialized bus hire services. From Pune, travel comfortably to this significant Jyotirlinga temple, known for its unique rituals and historical importance."
            },
            {
                "name": "Pune to Omkareshwar Bus on Rent",
                "description": "Explore the sacred Omkareshwar temple with Amruta Travels' bus hire services. Travel comfortably from Pune to Mandhata Island, where this Jyotirlinga is located, and immerse yourself in the divine experience."
            },
            {
                "name": "Pune to Bhimashankar Jyotirlinga Bus Hire on Rent",
                "description": "Visit the Bhimashankar Jyotirlinga with ease using our bus hire services. From Pune to this scenic temple in the Sahyadri hills, Amruta Travels ensures a smooth and comfortable journey for your pilgrimage."
            },
            {
                "name": "Pune to Kashi Vishwanath Temple Bus Hire on Rent",
                "description": "Travel to the renowned Kashi Vishwanath Temple in Varanasi with Amruta Travels' dedicated bus hire services. From Pune, enjoy a comfortable ride to this sacred site, known for its spiritual significance and historical charm."
            },
            {
                "name": "Pune to Kedarnath Bus Hire on Rent",
                "description": "Embark on a divine journey to Kedarnath with our specialized bus hire services. From Pune to this high-altitude Jyotirlinga temple, Amruta Travels ensures a comfortable and safe travel experience for your spiritual quest."
            },
            {
                "name": "Pune to Nageshwar Jyotirlinga Bus Hire on Rent",
                "description": "Visit the sacred Nageshwar Jyotirlinga with Amruta Travels' bus hire services. From Pune to Dwarka, where this revered temple is located, our buses provide a comfortable and convenient travel option for your pilgrimage."
            },
            {
                "name": "Amruta Travels Pune On Rent",
                "description": "For all your bus hire needs, Amruta Travels offers top-notch services from Pune. Whether you're traveling to Jyotirlingas or other sacred sites, our fleet of well-maintained buses ensures a comfortable and reliable journey. Contact us today to book your bus hire and experience hassle-free travel with Amruta Travels."
            }
        ],
        "tableData": [
          ["-Pune to Rameshwaram Darshan Bus Hire on Rent", "-Pune to Trimbakeshwar Bus Hire On Rent"],
          ["-Pune to Vaijnath Jyotirlinga Darshan Bus Hire", "-Pune to Grishneshwar Bus Hire On Rent"],
          ["-Pune to Somnath Jyotirlinga Gujarat Bus On Rent", "-Pune to Mallikarjuna Jyotirlinga Darshan Bus On Rent"],
          ["-Pune to Mahakaleshwar Ujjain Bus On Rent", "-Pune to Omkareshwar Bus on Rent"],
          ["-Pune to Bhimashankar Jyotirlinga Bus Hire on Rent", "-Pune to Kashi Vishwanath Temple Bus Hire on Rent"],
          ["-Pune to Kedarnath Bus Hire on Rent", "-Pune to Nageshwar Jyotirlinga Bus Hire on Rent"],
          ["-Amruta Travels Pune On Rent"]
      ],
        "whychoose": [
            {
                "WhyChooseheading": "Comprehensive Itinerary:",
                "WhyChoosedescription": "Our tour package covers all 12 Jyotirlingas, ensuring a complete and immersive pilgrimage experience. We provide a well-planned itinerary that allows you to visit each site with ample time for prayer and reflection."
            },
            {
                "WhyChooseheading": "Comfortable Travel:",
                "WhyChoosedescription": "Travel in comfort with our well-maintained vehicles, equipped with modern amenities. Our professional drivers and guides ensure a smooth and pleasant journey throughout the tour."
            },
            {
                "WhyChooseheading": "Experienced Guides:",
                "WhyChoosedescription": "Our knowledgeable guides provide insightful information about each Jyotirlinga, its historical significance, and spiritual importance. They are dedicated to making your pilgrimage both enlightening and memorable."
            },
            {
                "WhyChooseheading": "Customized Packages:",
                "WhyChoosedescription": "We offer flexible tour packages that can be customized based on your preferences and requirements. Whether you prefer a more leisurely pace or a more detailed exploration, we tailor the tour to suit your needs."
            },
            {
                "WhyChooseheading": "Accommodation and Meals:",
                "WhyChoosedescription": "Enjoy comfortable accommodation at selected hotels and savor delicious meals during the journey. We ensure that all your needs are met, allowing you to focus on your spiritual journey."
            },
            {
                "WhyChooseheading": "Safety and Hygiene:",
                "WhyChoosedescription": "We prioritize your safety and well-being by adhering to strict hygiene and safety protocols. Our vehicles and accommodation facilities are regularly cleaned and sanitized to provide a secure environment."
            }
        ]
    };

    const faqData = [
        {
            "question": "How long is the 12 Jyotirlinga Darshan tour from Pune?",
            "answer": "The duration of the tour depends on the specific itinerary chosen. Typically, the tour spans around 10-12 days, covering all 12 Jyotirlingas with ample time at each site."
        },
        {
            "question": "What is included in the tour package?",
            "answer": "Our package includes transportation, accommodation, meals, entry fees to temples, and guided tours. Detailed information is provided in the itinerary."
        },
        {
            "question": "Can the tour be customized?",
            "answer": "Yes, we offer customizable tour packages to accommodate your preferences. You can discuss your requirements with us, and we will tailor the tour to meet your needs."
        },
        {
            "question": "Are there any specific health or travel advisories for the tour?",
            "answer": "We provide updated travel advisories and health guidelines as per the latest government regulations. It is advisable to consult with your healthcare provider before undertaking the pilgrimage."
        },
        {
            "question": "How do I book the tour?",
            "answer": "You can book the tour by contacting us via phone, email, or through our website. Our team will assist you with the booking process and provide all necessary information."
        },
        {
            "question": "What is the cancellation policy?",
            "answer": "Our cancellation policy varies depending on the tour package and booking conditions. Please refer to our terms and conditions or contact us for detailed information."
        },
        {
            "question": "Are there any specific clothing requirements for visiting the temples?",
            "answer": "It is recommended to wear modest clothing when visiting temples. Comfortable and appropriate attire is essential for maintaining decorum during the pilgrimage."
        },
        {
            "question": "Can I extend the tour or add additional destinations?",
            "answer": "Yes, we offer options to extend the tour or add additional destinations based on your preferences. Discuss your requirements with us, and we will make the necessary arrangements."
        },
        {
            "question": "What should I bring for the tour?",
            "answer": "It is advisable to bring essential items such as comfortable clothing, personal medications, travel documents, and any religious items you wish to carry for the pilgrimage."
        },
        {
            "question": "Is there any special assistance available for elderly or differently-abled travelers?",
            "answer": "We provide special assistance for elderly and differently-abled travelers. Please inform us in advance so that we can make the necessary arrangements to ensure a comfortable experience."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mr. Rajesh Patil",
            "text": "We recently completed the 12 Jyotirlinga Darshan tour package with Amruta Travels, and it was an incredible experience. The tour was meticulously organized, and every detail was taken care of. The bus was comfortable, and the driver was highly professional and knowledgeable about the routes. We were able to visit all the Jyotirlingas with ease and comfort. The entire journey was spiritually enriching and hassle-free. I highly recommend Amruta Travels for anyone looking to embark on a similar spiritual journey from Pune!"
        },
        {
            "name": "Miss Neha Deshmukh",
            "text": "Our family took the 12 Jyotirlinga Darshan tour package from Pune organized by Amruta Travels, and it exceeded our expectations. The itinerary was well-planned, and the accommodation arrangements were excellent. The bus was clean and comfortable, which made the long journey enjoyable. The staff was attentive and provided great service throughout the trip. It was a memorable spiritual journey that we will cherish forever. Thank you, Amruta Travels, for such a fantastic experience!"
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
        heading: "12 Jyotirlinga Darshan Tour Package contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | 12 Jyotirlinga Darshan Tour Package from Pune | Bus Hire for Jyotirlinga Temples | Amruta Travels</title>
  <meta name="description" content="Book your 12 Jyotirlinga Darshan tour package from Pune with Amruta Travels. We offer bus hire services for Jyotirlinga temple visits including Rameshwaram, Trimbakeshwar, Vaijnath, Somnath, Omkareshwar, and more. Experience spiritual journeys with comfortable bus services." />
  <meta name="keywords" content="12 Jyotirlinga Darshan Tour Package from Pune, Pune to Rameshwaram Darshan Bus Hire on Rent, Pune to Trimbakeshwar Bus Hire on Rent, Pune to Vaijnath Jyotirlinga Darshan Bus Hire, Pune to Grishneshwar Bus Hire on Rent, Pune to Somnath Jyotirlinga Gujarat Bus on Rent, Pune to Mallikarjuna Jyotirlinga Darshan Bus on Rent, Pune to Mahakaleshwar Ujjain Bus on Rent, Pune to Omkareshwar Bus on Rent, Pune to Bhimashankar Jyotirlinga Bus Hire on Rent, Pune to Kashi Vishwanath Temple Bus Hire on Rent, Pune to Kedarnath Bus Hire on Rent, Pune to Nageshwar Jyotirlinga Bus Hire on Rent, Amruta Travels Pune on Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": "12 Jyotirlinga Darshan Tour Package from Pune",
        "description": "Amruta Travels offers a special 12 Jyotirlinga Darshan tour package from Pune. Our bus hire services take you to the sacred Jyotirlinga temples like Rameshwaram, Trimbakeshwar, Omkareshwar, Kashi Vishwanath, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/12-jyotirlinga-darshan-tour-package",
        "logo": "https://amrutatravel.com/images/jyotirlinga-tour-package.jpg",
       "image": [
          "https://amrutatravel.com/img/hell.png",
          "https://amrutatravel.com/img/hell2.png",
          "https://amrutatravel.com/img/hell3.jpg",
        ],
        "priceRange": "₹2000 - ₹50000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/12-jyotirlinga-darshan-tour-package",
          "priceCurrency": "INR",
          "price": "2000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "120"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anil Deshmukh"
            },
            "datePublished": "2024-06-25",
            "reviewBody": "I booked the 12 Jyotirlinga Darshan package for my family trip. The buses were comfortable, and the drivers were very professional. The entire journey was peaceful and divine."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rita Joshi"
            },
            "datePublished": "2024-07-10",
            "reviewBody": "The Jyotirlinga Darshan tour was an unforgettable experience. Amruta Travels provided excellent services, including the bus, which made the long journey comfortable. Highly recommend!"
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
          "serviceUrl": "https://amrutatravel.com/12-jyotirlinga-darshan-tour-package"
        },
        "keywords": "12 Jyotirlinga Darshan Tour Package from Pune, Pune to Rameshwaram Darshan Bus Hire on Rent, Pune to Trimbakeshwar Bus Hire on Rent, Pune to Vaijnath Jyotirlinga Darshan Bus Hire, Pune to Grishneshwar Bus Hire on Rent, Pune to Somnath Jyotirlinga Gujarat Bus on Rent, Pune to Mallikarjuna Jyotirlinga Darshan Bus on Rent, Pune to Mahakaleshwar Ujjain Bus on Rent, Pune to Omkareshwar Bus on Rent, Pune to Bhimashankar Jyotirlinga Bus Hire on Rent, Pune to Kashi Vishwanath Temple Bus Hire on Rent, Pune to Kedarnath Bus Hire on Rent, Pune to Nageshwar Jyotirlinga Bus Hire on Rent, Amruta Travels Pune on Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-35.jpg' alt='img'/>
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
export default JyotirlingaDarshan;