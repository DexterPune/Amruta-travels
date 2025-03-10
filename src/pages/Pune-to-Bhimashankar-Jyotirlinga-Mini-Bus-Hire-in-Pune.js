
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneBhimashankar(){

  const cardData = 
    {
      keyword: 'Pune to Bhimashankar Jyotirlinga Mini Bus Hire in Pune ',
      heading: '  Amruta Travels: Pune to Bhimashankar Jyotirlinga Mini Bus Hire in Pune ',

      headingDescription: 'When planning a pilgrimage to Bhimashankar Jyotirlinga from Pune, choosing the right mode of transportation can make all the difference. At Amruta Travels, we offer reliable and comfortable mini bus hire services for your journey to this revered destination. Here’s why our mini bus hire service is ideal for your trip:',

      top:"Top Places to Visit in Bhimashankar with Amruta Travels:",

      topPlaces : [
        {
            "title": "Bhimashankar Temple:",
            "description": "The Bhimashankar Temple is a revered pilgrimage site and one of the twelve Jyotirlingas dedicated to Lord Shiva. Known for its historical and spiritual significance, this ancient temple attracts thousands of devotees seeking blessings and tranquility. The temple's architecture reflects ancient artistry and the serene atmosphere enhances the spiritual experience."
        },
        {
            "title": "Nagphani Peak (Horn Peak):",
            "description": "Nagphani Peak, popularly known as Horn Peak, is a prominent trekking destination offering breathtaking panoramic views of the surrounding landscape. Its unique horn-shaped rock formation adds to its charm, making it a favorite spot for adventure enthusiasts and photographers. The trek to the peak is invigorating, providing a rewarding experience with each step."
        },
        {
            "title": "Bhimashankar Wildlife Sanctuary:",
            "description": "The Bhimashankar Wildlife Sanctuary is a lush, verdant haven for nature lovers and wildlife enthusiasts. This rich natural reserve is home to a diverse range of flora and fauna, including the endangered Malabar giant squirrel. The sanctuary offers opportunities for wildlife watching, bird watching, and nature walks, making it a must-visit for those interested in the natural world."
        },
        {
            "title": "Hanuman Lake:",
            "description": "Nestled near the Bhimashankar Temple, Hanuman Lake is a peaceful retreat offering a serene environment ideal for relaxation and meditation. Surrounded by lush greenery and tranquil waters, it provides a perfect setting for unwinding after a spiritual visit or enjoying a quiet moment in nature."
        },
        {
            "title": "Pune to Bhimashankar Hill Station:",
            "description": "The area around Bhimashankar Hill Station is known for its scenic beauty and refreshing cool weather. It provides an ideal escape from the hustle and bustle of city life, offering picturesque views and a calming environment. Whether you are looking to relax or enjoy the scenic beauty, this hill station offers a rejuvenating experience."
        },
        {
            "title": "Gupt Bhimashankar:",
            "description": "Gupt Bhimashankar is an ancient cave temple dedicated to Lord Shiva, known for its historical and spiritual importance. The cave temple, set amidst a tranquil environment, offers a unique pilgrimage experience with its historical carvings and serene surroundings. It is a significant site for devotees seeking a deeper spiritual connection."
        },
        {
            "title": "Shidi Ghat:",
            "description": "Shidi Ghat is renowned for its stunning natural beauty, providing panoramic views of the surrounding hills and valleys. The location is ideal for capturing breathtaking photographs and enjoying the serene landscape. Its picturesque setting makes it a favorite spot for nature enthusiasts and those seeking a peaceful retreat."
        },
        {
            "title": "Tamhini Ghat:",
            "description": "Tamhini Ghat is celebrated for its lush greenery, waterfalls, and scenic landscapes. This ghat offers a scenic drive through picturesque terrains, with numerous opportunities to witness the beauty of nature. It is an excellent destination for nature lovers and those looking to enjoy a scenic and tranquil journey."
        },
        {
            "title": "Ghatghar Dam:",
            "description": "Ghatghar Dam is a popular spot for picnics and leisurely outings, offering scenic views of the dam's water and the surrounding hills. It is a great place for a relaxing break, with opportunities to enjoy the natural beauty and peaceful ambiance. The dam's picturesque setting makes it a favored spot for families and nature lovers."
        },
        {
            "title": "Khandas Village:",
            "description": "Khandas Village is known for its picturesque beauty and serves as a starting point for treks to nearby scenic spots and waterfalls. The village offers a quaint and serene atmosphere, making it an ideal base for exploring the natural wonders of the region. Its charm and accessibility make it a popular choice for adventure seekers and nature enthusiasts."
        }
    ],
        
     services : [
        {
            "name": "Pune to Bhimashankar Jyotirlinga Tempo Traveller:",
            "description": "Our Tempo Traveller services are ideal for a smooth and comfortable journey to Bhimashankar. Equipped with modern amenities, our vehicles ensure a pleasant ride, whether you're traveling in a group or with family."
        },
        {
            "name": "Pune to Bhimashankar 17 Seater Mini Bus on Rent:",
            "description": "For slightly larger groups, our 17-seater mini buses provide ample space and comfort. This option is perfect for those looking to travel with a group while enjoying the convenience of a spacious vehicle."
        },
        {
            "name": "Pune to Bhimashankar Mini Bus on Rent:",
            "description": "Our mini buses for rent are designed to offer comfort and reliability for your journey to Bhimashankar. With various seating capacities, you can choose a mini bus that best suits your group size and needs."
        },
        {
            "name": "Pune to Jyotirlinga Bhimashankar Mini Bus on Rent:",
            "description": "Travel to the sacred Jyotirlinga of Bhimashankar in comfort with our mini bus rental services. We ensure a smooth and enjoyable journey to this revered destination, making your pilgrimage both comfortable and memorable."
        },
        {
            "name": "14 Seater AC Tempo Traveller on Rent in Pune:",
            "description": "For a more intimate group size, our 14-seater AC Tempo Travellers provide a luxurious travel experience. Equipped with air conditioning and comfortable seating, they are perfect for a comfortable journey to Bhimashankar."
        },
        {
            "name": "Pune to Bhimashankar Round Trip Bus on Rent:",
            "description": "Our round-trip bus rental services make planning your visit to Bhimashankar easy and hassle-free. Enjoy a convenient journey with a round-trip option that ensures a return journey without the need for additional arrangements."
        },
        {
            "name": "Pune to 5 Jyotirlinga Darshan Mini Bus on Rent:",
            "description": "Experience a spiritual journey with our mini bus rental services for a tour of the five Jyotirlingas. We provide comfortable transportation for your pilgrimage to these sacred sites, starting from Pune."
        },
        {
            "name": "Pune to Bhimashankar AC Mini Bus on Rent:",
            "description": "Travel to Bhimashankar in style and comfort with our AC mini buses. Our air-conditioned mini buses ensure a pleasant journey even in the warmer months, providing a cool and relaxing environment throughout your trip."
        },
        {
            "name": "Best Bus Hire Pune to Bhimashankar:",
            "description": "Amruta Travels is renowned for providing the best bus hire services from Pune to Bhimashankar. Our commitment to quality and customer satisfaction ensures a top-notch travel experience for all our clients."
        },
        {
            "name": "Pune to Bhimashankar Bus Tour Package:",
            "description": "We offer comprehensive bus tour packages to Bhimashankar that include transportation, itinerary planning, and other essential services. Our packages are designed to provide a seamless and enjoyable pilgrimage experience."
        },
        {
            "name": "Pune to Bhimashankar Jyotirlinga Mini Bus Hire in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient 35 Seater Bus Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],    
     tableData : [
        ["- Pune to Bhimashankar Jyotirlinga Tempo Traveller", "- Pune to Bhimashankar 17 Seater Mini Bus on Rent"],
        ["- Pune to Bhimashankar Mini Bus on Rent", "- Pune to Jyotirlinga Bhimashankar Mini Bus on Rent"],
        ["- 14 Seater AC Tempo Traveller on Rent in Pune", "- Pune to Bhimashankar Round Trip Bus on Rent"],
        ["- Pune to 5 Jyotirlinga Darshan Mini Bus on Rent", "- Pune to Bhimashankar AC Mini Bus on Rent"],
        ["- Best Bus Hire Pune to Bhimashankar", "- Pune to Bhimashankar Bus Tour Package"]
    ],
    
    "whychoose": [
        {
          "WhyChooseheading": "Why Choose Us: Pune to Bhimashankar Jyotirlinga Mini Bus Hire – Amruta Travels",
          "WhyChoosedescription": ""
        },
        {
          "WhyChooseheading": "Comfortable and Well-Maintained Fleet:",
          "WhyChoosedescription": "Our mini buses are equipped with comfortable seating, ample legroom, and air-conditioning to ensure a pleasant journey. Each vehicle undergoes regular maintenance to ensure it’s in top condition for your trip."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers:",
          "WhyChoosedescription": "Our drivers are highly experienced and familiar with the route to Bhimashankar. They are dedicated to providing a safe and smooth journey, allowing you to focus on your pilgrimage without any worries."
        },
        {
          "WhyChooseheading": "Competitive Pricing:",
          "WhyChoosedescription": "We offer transparent and competitive pricing for our mini bus hire services. You get value for your money with no hidden fees, ensuring a cost-effective solution for your travel needs."
        },
        {
          "WhyChooseheading": "Customizable Travel Plans:",
          "WhyChoosedescription": "We understand that each trip is unique. Our services can be customized to fit your specific requirements, whether it’s a round trip, additional stops, or special requests."
        },
        {
          "WhyChooseheading": "Reliable and Punctual Service:",
          "WhyChoosedescription": "We pride ourselves on punctuality. Our team ensures that your mini bus arrives on time and adheres to the schedule, so you can maintain your planned itinerary without delays."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process:",
          "WhyChoosedescription": "Booking with us is simple and straightforward. You can easily make reservations through our website, by phone, or via email. Our customer support team is always ready to assist with any inquiries or special requests."
        },
        {
          "WhyChooseheading": "Comprehensive Support:",
          "WhyChoosedescription": "From the moment you book until the end of your journey, our customer support team is available to assist you. We are committed to providing exceptional service and addressing any concerns promptly."
        },
        {
          "WhyChooseheading": "Clean and Hygienic Vehicles:",
          "WhyChoosedescription": "We prioritize cleanliness and hygiene in all our vehicles. Regular cleaning and sanitation ensure a safe and pleasant environment for all passengers."
        },
        {
          "WhyChooseheading": "Flexibility and Convenience:",
          "WhyChoosedescription": "Our mini bus services are designed to offer maximum flexibility. Whether you’re traveling with a small group or a larger family, we can accommodate your needs with the right vehicle and services."
        },
        {
          "WhyChooseheading": "Positive Customer Feedback:",
          "WhyChoosedescription": "We have a track record of satisfied customers who have praised our reliable service and comfortable travel experience. Their positive testimonials reflect our commitment to excellence."
        }
      ]
  };

    
  const faqData = [
    {
        "question": "What is included in the mini bus hire for a trip to Bhimashankar?",
        "answer": "Our mini bus hire includes comfortable seating, air-conditioning, and professional driver services. Additional amenities such as Wi-Fi or audio systems may be available upon request."
    },
    {
        "question": "How do I book a mini bus for a trip to Bhimashankar?",
        "answer": "You can book a mini bus by contacting us via phone, email, or through our online booking form. Provide details such as travel dates, group size, and any special requirements to facilitate your booking."
    },
    {
        "question": "Are there any extra charges for mini bus hire?",
        "answer": "Our pricing is transparent, with no hidden fees. However, extra charges may apply for extended travel times, additional services, or special requests. We will provide a detailed quote before finalizing your booking."
    },
    {
        "question": "Can I request a specific type of mini bus?",
        "answer": "Yes, you can request specific features or types of mini buses based on availability. We offer various options to meet different needs, including luxury and standard models."
    },
    {
        "question": "What is the cancellation policy for mini bus hire?",
        "answer": "Our cancellation policy depends on the timing of the cancellation. Generally, cancellations made well in advance incur lower fees, while last-minute cancellations may involve higher charges. Contact our customer service for specific details."
    },
    {
        "question": "Are the drivers trained and licensed?",
        "answer": "Yes, all our drivers are professionally trained, experienced, and hold valid licenses. They are familiar with the route to Bhimashankar and are dedicated to ensuring a safe and comfortable journey."
    },
    {
        "question": "Can I make changes to my booking after it’s confirmed?",
        "answer": "Yes, changes can be made subject to availability and applicable fees. Contact our customer service team as soon as possible to discuss any modifications to your booking."
    },
    {
        "question": "What should I do if I need assistance during the journey?",
        "answer": "If you need assistance during your trip, please contact the driver or our customer service team immediately. We are committed to addressing any concerns or issues promptly."
    },
    {
        "question": "How far in advance should I book a mini bus for Bhimashankar?",
        "answer": "To secure your preferred vehicle and ensure availability, we recommend booking as early as possible. For peak seasons or special events, booking well in advance is advisable."
    },
    {
        "question": "Are there any restrictions on luggage?",
        "answer": "Standard luggage allowances apply, but we can accommodate additional baggage or special items upon request. Inform us of any specific needs when making your booking to ensure proper arrangements."
    }
];


    
    
    
    
const testimonials = [
    {
        "name": "Mr. Sanjay Patel",
        "text": "I recently hired a mini bus from Amruta Travels for our pilgrimage to Bhimashankar Jyotirlinga from Pune, and the experience was exceptional. The bus was clean, comfortable, and well-equipped with air-conditioning, which made our long journey pleasant despite the weather. Our driver was courteous and knowledgeable, ensuring we arrived on time and safely. The entire process from booking to the trip was smooth, and Amruta Travels provided excellent service throughout. I highly recommend them for anyone planning a spiritual or leisure trip to Bhimashankar."
    },
    {
        "name": "Ms. Anjali Deshmukh",
        "text": "Our trip to Bhimashankar Jyotirlinga was greatly enhanced by choosing Amruta Travels for our mini bus hire. The vehicle was spacious and well-maintained, offering a comfortable ride for our group of devotees. The driver was not only professional but also considerate, making sure our journey was smooth and enjoyable. The onboard amenities were just what we needed to relax during the trip. If you're looking for reliable and comfortable transportation for a pilgrimage or any group travel, Amruta Travels is the way to go."
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
        heading: "Pune to Bhimashankar Jyotirlinga Mini Bus Hire in Pun Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Pune to Bhimashankar Jyotirlinga Mini Bus Hire | 14 Seater & 17 Seater AC Tempo Traveller and Mini Bus for Jyotirlinga Darshan</title>
  <meta name="description" content="Rent 14 Seater and 17 Seater AC Mini Buses or Tempo Travellers from Pune to Bhimashankar Jyotirlinga. Book comfortable mini bus for round trips, group tours, and 5 Jyotirlinga Darshan tours." />
  <meta name="keywords" content="Pune to Bhimashankar Jyotirlinga Mini Bus Hire, Pune to Bhimashankar 17 Seater Mini Bus on Rent, Pune to Bhimashankar Mini Bus on Rent, Pune to Jyotirlinga Bhimashankar Mini Bus on Rent, 14 Seater AC Tempo Traveller on Rent in Pune, Pune to Bhimashankar Round Trip Bus on Rent, Pune to 5 Jyotirlinga Darshan Mini Bus on Rent, Pune to Bhimashankar AC Mini Bus on Rent, Best Bus Hire Pune to Bhimashankar, Pune to Bhimashankar Bus Tour Package" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent 14 Seater and 17 Seater AC Tempo Traveller and Mini Buses for Pune to Bhimashankar Jyotirlinga trips. We offer round trip and 5 Jyotirlinga Darshan tours for families and groups.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-bhimashankar-jyotirlinga-mini-bus-hire",
        "logo": "https://amrutatravel.com/images/pune-to-bhimashankar-mini-bus.jpg",
        "image": "https://amrutatravel.com/images/pune-to-bhimashankar-mini-bus.jpg",
        "priceRange": "₹3500 - ₹9000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-bhimashankar-jyotirlinga-mini-bus-hire",
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
              "name": "Rajesh Kulkarni"
            },
            "datePublished": "2024-09-15",
            "reviewBody": "We hired a 17-seater mini bus for our family trip to Bhimashankar. The vehicle was clean, comfortable, and our driver was professional. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Meera Deshmukh"
            },
            "datePublished": "2024-08-22",
            "reviewBody": "Booked a 14-seater AC Tempo Traveller for a Jyotirlinga darshan tour to Bhimashankar. Excellent service and great experience for our group."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-bhimashankar-jyotirlinga-mini-bus-hire"
        },
        "keywords": "Pune to Bhimashankar Jyotirlinga Mini Bus Hire, Pune to Bhimashankar 17 Seater Mini Bus on Rent, Pune to Bhimashankar Mini Bus on Rent, Pune to Jyotirlinga Bhimashankar Mini Bus on Rent, 14 Seater AC Tempo Traveller on Rent in Pune, Pune to Bhimashankar Round Trip Bus on Rent, Pune to 5 Jyotirlinga Darshan Mini Bus on Rent, Pune to Bhimashankar AC Mini Bus on Rent, Best Bus Hire Pune to Bhimashankar, Pune to Bhimashankar Bus Tour Package"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-18.jpg' alt='img'/>
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
      <h3 className='Colo'>Frequently Asked Questions (FAQs) About Pune to Bhimashankar Jyotirlinga Mini Bus Hire:</h3>
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
export default PuneBhimashankar;