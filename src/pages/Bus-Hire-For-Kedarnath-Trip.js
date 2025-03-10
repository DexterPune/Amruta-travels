
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusforKedarnath(){

  const cardData = 
    {
        "keyword": "Bus Hire Services for Kedarnath Trip",
        "heading": "Amruta Travels Bus Hire Services for Kedarnath Trip",
        "headingDescription": "If you’re planning a pilgrimage to Kedarnath, Amruta Travels offers exceptional bus hire services for a seamless and comfortable journey to this sacred destination. Our services ensure a hassle-free travel experience, allowing you to focus on your spiritual journey and exploration of Kedarnath’s breathtaking beauty. With a focus on comfort and reliability, we are here to make your Kedarnath trip memorable and stress-free.",
        "top": "Top Places to Visit in Kedarnath with Amruta Travels:",
        "topPlaces": [
            {
                "title": "1. Kedarnath Temple",
                "description": "The primary attraction, this ancient temple dedicated to Lord Shiva is known for its divine aura and architectural grandeur. It is one of the most sacred temples in Hinduism."
            },
            {
                "title": "2. Bhairav Nath Temple",
                "description": "Located a short distance from Kedarnath Temple, this temple is dedicated to Lord Bhairav, a fierce manifestation of Lord Shiva. It offers panoramic views of the surrounding mountains."
            },
            {
                "title": "3. Gaurikund",
                "description": "The base camp for the Kedarnath trek, Gaurikund is a significant pilgrimage site with a hot water spring and temple dedicated to Goddess Parvati."
            },
            {
                "title": "4. Vasuki Tal",
                "description": "A picturesque high-altitude lake situated about 6 km from Kedarnath Temple, Vasuki Tal is surrounded by snow-capped peaks and offers stunning views."
            },
            {
                "title": "5. Shankaracharya Samadhi",
                "description": "This site marks the place where Adi Shankaracharya, the revered philosopher and theologian, is believed to have attained samadhi (spiritual enlightenment)."
            },
            {
                "title": "6. Chorabari Tal",
                "description": "Also known as the Gandhi Sarovar, this glacial lake is located at an altitude of 3,900 meters and is a serene spot for reflection and nature lovers."
            },
            {
                "title": "7. Kedarnath Wildlife Sanctuary",
                "description": "This sanctuary is home to a diverse range of flora and fauna, including the Himalayan musk deer and the bharal (blue sheep). It offers opportunities for nature enthusiasts to explore the region's wildlife."
            },
            {
                "title": "8. Kalimath Temple",
                "description": "Situated in the nearby Kalimath village, this temple is dedicated to Goddess Kali and is a revered site for devotees seeking her blessings."
            },
            {
                "title": "9. Rudraprayag",
                "description": "Located at the confluence of the Alaknanda and Mandakini rivers, Rudraprayag is an important pilgrimage site and a gateway to Kedarnath."
            },
            {
                "title": "10. Triyuginarayan Temple",
                "description": "This ancient temple, located about 12 km from Kedarnath, is believed to be the site where Lord Shiva and Goddess Parvati were married. It is a significant site for devotees."
            }
        ],
        "services": [
            {
                "name": "Luxury Bus Hire for Kedarnath Trip",
                "description": "Elevate your pilgrimage experience with our luxury bus hire for the Kedarnath trip. Travel in comfort and style as you embark on this spiritual journey. Our luxury buses offer plush seating, air-conditioning, and modern amenities, ensuring a memorable and comfortable trip to Kedarnath."
            },
            {
                "name": "Luxury Coach Booking for Uttarakhand Tourism Kedarnath Trip from Pune",
                "description": "Experience the best of Uttarakhand tourism with our luxury coach booking for the Kedarnath trip from Pune. Our luxury coaches are equipped with state-of-the-art facilities to provide a luxurious and relaxing travel experience, making your journey to Kedarnath both comfortable and enjoyable."
            },
            {
                "name": "Bus Hire for Kedarnath Trip",
                "description": "For those planning a Kedarnath trip, our bus hire services offer a practical and comfortable solution. Choose from a range of bus options to suit your group size and travel preferences, ensuring a smooth and enjoyable pilgrimage."
            },
            {
                "name": "Char Dham Yatra Bus Package from Pune",
                "description": "Embark on the sacred Char Dham Yatra with our specially designed bus package from Pune. This comprehensive package includes transportation, accommodation, and guided tours to the four sacred shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath, ensuring a fulfilling spiritual journey."
            },
            {
                "name": "Pune to Badrinath Bus Tour Package",
                "description": "Our Pune to Badrinath bus tour package offers a seamless travel experience to one of the most revered shrines in Uttarakhand. Enjoy comfortable and convenient transportation, with all your travel needs taken care of, as you embark on a spiritual journey to Badrinath."
            },
            {
                "name": "Pune to Vrindavan Bus Tour Package",
                "description": "Explore the holy city of Vrindavan with our Pune to Vrindavan bus tour package. This package is designed to provide a comprehensive and comfortable travel experience, allowing you to immerse yourself in the spiritual and cultural heritage of Vrindavan."
            },
            {
                "name": "Vrindavan Tour Packages from Pune",
                "description": "Our Vrindavan tour packages from Pune offer a range of options to suit your travel preferences. Whether you’re looking for a short trip or an extended stay, our packages ensure a comfortable and spiritually enriching experience in the sacred city of Vrindavan."
            },
            {
                "name": "Pune to Kullu Manali Bus Tour Package",
                "description": "Experience the scenic beauty of the Himalayas with our Pune to Kullu Manali bus tour package. Enjoy a comfortable journey to these popular hill stations, with well-planned itineraries and amenities to make your trip to Kullu and Manali unforgettable."
            },
            {
                "name": "Pune to Amarnath Yatra Bus Tour Package",
                "description": "Join our Pune to Amarnath Yatra bus tour package for a spiritually enriching experience. This package provides comfortable transportation and all necessary arrangements for your pilgrimage to the revered Amarnath cave shrine."
            },
            {
                "name": "Amruta Travels Pune On Rent",
                "description": "For all your travel needs, including luxury and standard bus hire, Amruta Travels Pune offers a range of options. Whether you need a bus for a religious pilgrimage, a scenic tour, or a corporate event, our reliable and well-maintained fleet ensures a smooth and enjoyable journey."
            }
        ],
        "tableData": [
            ["-Luxury Bus Hire for Kedarnath Trip", "-Luxury Coach Booking for Uttarakhand Tourism Kedarnath Trip From Pune"],
            ["-Bus Hire for Kedarnath Trip", "-Char Dham Yatra Bus Package from Pune"],
            ["-Pune to Badrinath Bus Tour Package", "-Pune to Vrindavan Bus Tour Package"],
            ["-Vrindavan Tour Packages from Pune", "-Pune to Kullu Manali Bus Tour Package"],
            ["-Pune to Amarnath Yatra Bus Tour Package", "-Amruta Travels Pune On Rent"]
          ],
          "whychoose": [
            {
              "WhyChooseheading": "Why Choose Amruta Travels for Bus Hire for Kedarnath Trip?",
              "WhyChoosedescription": "Amruta Travels is dedicated to providing exceptional bus hire services for the Kedarnath trip. Here’s why you should choose us for your journey to Kedarnath:"
            },
            {
              "WhyChooseheading": "Comfort and Convenience:",
              "WhyChoosedescription": "Our modern fleet of buses is designed for comfort, featuring spacious seating, climate control, and other amenities to ensure a pleasant travel experience throughout your journey to Kedarnath."
            },
            {
              "WhyChooseheading": "Expert Drivers:",
              "WhyChoosedescription": "Our skilled and experienced drivers are well-acquainted with the challenging mountain routes to Kedarnath. They prioritize safety and are committed to providing a smooth and secure travel experience."
            },
            {
              "WhyChooseheading": "Tailored Itineraries:",
              "WhyChoosedescription": "We offer flexible and customizable itineraries to accommodate your schedule and preferences. Whether you're on a pilgrimage or a sightseeing tour, we can tailor the trip to suit your needs."
            },
            {
              "WhyChooseheading": "Competitive Pricing:",
              "WhyChoosedescription": "We provide transparent and competitive pricing for our bus hire services. Our cost-effective solutions ensure you receive excellent value for your money without any hidden fees."
            },
            {
              "WhyChooseheading": "Punctuality:",
              "WhyChoosedescription": "Timeliness is a key aspect of our service. We ensure that our buses adhere to schedules, allowing you to make the most of your trip without delays."
            },
            {
              "WhyChooseheading": "24/7 Customer Support:",
              "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with bookings, address any questions or concerns, and provide support throughout your journey."
            },
            {
              "WhyChooseheading": "Safety First:",
              "WhyChoosedescription": "We adhere to stringent safety standards and conduct regular maintenance checks on our buses. Your safety is our top priority, and we take all necessary precautions to ensure a secure journey."
            }
          ]
    
 
  
    



    };

    const faqData = [
        {
            "question": "What types of buses are available for hire for the Kedarnath trip?",
            "answer": "We offer a variety of buses, including luxury, standard, and sleeper options. Each bus is equipped with comfortable seating, air conditioning, and other amenities to enhance your travel experience."
        },
        {
            "question": "How do I book a bus for the Kedarnath trip?",
            "answer": "Booking a bus is simple. You can contact us directly through our website or customer support. Provide details such as your travel dates, number of passengers, and any specific requirements, and we will assist you with the booking process."
        },
        {
            "question": "Are there special packages available for the Kedarnath trip?",
            "answer": "Yes, we offer special packages for Kedarnath trips that can be customized based on your needs. These packages include various options for accommodation, sightseeing, and other services."
        },
        {
            "question": "What is the cost of hiring a bus for the Kedarnath trip?",
            "answer": "The cost of hiring a bus depends on factors such as the type of bus, duration of the trip, and specific requirements. We provide competitive pricing and a detailed quote based on your needs."
        },
        {
            "question": "Are the buses equipped with amenities?",
            "answer": "Yes, our buses are equipped with essential amenities such as comfortable seating, air conditioning, and in some cases, Wi-Fi. The specific amenities may vary depending on the type of bus you choose."
        },
        {
            "question": "How do you ensure safety during the journey?",
            "answer": "We prioritize safety by conducting regular maintenance checks on our buses, employing experienced drivers, and following all necessary safety protocols. Our buses are equipped with safety features to ensure a secure journey."
        },
        {
            "question": "Can I make changes to my booking after it is confirmed?",
            "answer": "Yes, you can make changes to your booking based on availability and our terms and conditions. Please contact our customer support team as soon as possible to discuss any modifications."
        },
        {
            "question": "What is the maximum number of passengers allowed?",
            "answer": "The number of passengers depends on the type of bus you hire. We offer a range of bus sizes to accommodate different group sizes, from smaller buses for intimate groups to larger ones for bigger parties."
        },
        {
            "question": "What is your cancellation policy?",
            "answer": "Our cancellation policy varies depending on the booking terms and conditions. Please review the policy at the time of booking or contact our customer support team for detailed information."
        },
        {
            "question": "Can Amruta Travels assist with itinerary planning?",
            "answer": "Yes, we can assist with planning your itinerary based on your preferences and destinations. Our team can help you design a customized travel plan to make the most of your Kedarnath trip."
        }
    ];
    
    const testimonials = [
        {
            "name": "Ms. Priya Sharma",
            "text": "Our Kedarnath pilgrimage with Amruta Travels was a truly memorable experience. The bus was exceptionally comfortable and well-maintained, making the long journey through the mountains a pleasant one. The driver was skilled and ensured our safety on the challenging routes. Amruta Travels' team provided excellent support throughout the trip, and their attention to detail was impressive. We felt well taken care of from start to finish. Highly recommend their services for anyone planning a Kedarnath trip!"
        },
        {
            "name": "Mr. Anil Kumar",
            "text": "I recently traveled to Kedarnath with Amruta Travels, and it was a wonderful experience. The bus was clean, comfortable, and equipped with all the necessary amenities for a long journey. The driver was punctual, professional, and very knowledgeable about the route. Amruta Travels made our trip stress-free and enjoyable with their reliable service. If you’re planning a trip to Kedarnath, I strongly recommend choosing Amruta Travels for a smooth and hassle-free experience."
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Hire for Kedarnath Trip | Luxury Bus for Kedarnath Yatra from Pune | Amruta Travels</title>
  <meta name="description" content="Book a luxury bus for your Kedarnath Yatra trip from Pune. Amruta Travels offers hassle-free bus rentals for Kedarnath, Badrinath, Amarnath, Kullu Manali, and more. Enjoy your spiritual journey with comfort and convenience." />
  <meta name="keywords" content="Luxury Bus Hire for Kedarnath Trip, Luxury Coach Booking for Uttarakhand Tourism Kedarnath Trip from Pune, Bus Hire for Kedarnath Trip, Char Dham Yatra Bus Package from Pune, Pune to Badrinath Bus Tour Package, Pune to Vrindavan Bus Tour Package, Vrindavan Tour Packages from Pune, Pune to Kullu Manali Bus Tour Package, Pune to Amarnath Yatra Bus Tour Package, Amruta Travels Pune On Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Bus Hire for Kedarnath Trip",
        "description": "Amruta Travels offers luxury bus hire for your Kedarnath Yatra trip from Pune. We provide comfortable and reliable bus services for various religious tours, including Char Dham Yatra, Badrinath, Amarnath, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-hire-for-kedarnath-trip",
        "logo": "https://amrutatravel.com/images/kedarnath-bus-hire.jpg",
        "image": "https://amrutatravel.com/images/kedarnath-bus-hire.jpg",
        "priceRange": "₹5000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-hire-for-kedarnath-trip",
          "priceCurrency": "INR",
          "price": "8000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "120"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ramesh Kumar"
            },
            "datePublished": "2024-07-20",
            "reviewBody": "We hired a luxury bus for our Kedarnath trip from Pune through Amruta Travels. The bus was comfortable, and the trip was well-organized. Highly recommended for long-distance spiritual journeys."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Shivani Rao"
            },
            "datePublished": "2024-08-18",
            "reviewBody": "The Kedarnath Yatra bus service was top-notch. We had a smooth ride from Pune to Kedarnath with all necessary amenities provided. A very comfortable trip!"
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
          "serviceUrl": "https://amrutatravel.com/bus-hire-for-kedarnath-trip"
        },
        "keywords": "Luxury Bus Hire for Kedarnath Trip, Luxury Coach Booking for Uttarakhand Tourism Kedarnath Trip from Pune, Bus Hire for Kedarnath Trip, Char Dham Yatra Bus Package from Pune, Pune to Badrinath Bus Tour Package, Pune to Vrindavan Bus Tour Package, Vrindavan Tour Packages from Pune, Pune to Kullu Manali Bus Tour Package, Pune to Amarnath Yatra Bus Tour Package, Amruta Travels Pune On Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-20.jpg' alt='img'/>
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
export default BusforKedarnath;