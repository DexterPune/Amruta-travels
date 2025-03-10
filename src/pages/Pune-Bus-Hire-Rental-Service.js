
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneBusHireRentalService(){

  const cardData = 
    {
      keyword: ' Pune Bus Hire Rental Service',
      heading: 'Amruta Travels: Pune Bus Hire Rental Service',

      headingDescription: 'When it comes to bus hire rental services in Pune, Amruta Travels stands out for its exceptional service and reliability. Whether you are planning a corporate event, a family outing, or a group trip, Amruta Travels offers a range of options to ensure a comfortable and enjoyable journey. Here’s a guide to the top places you can explore with our bus hire rental service in Pune:',

      top:"Top Pune Bus Hire Rental Service",
       topPlaces : [
        {
            "title": "Lonavala: A Scenic Hill Station:",
            "description": "Located just a short drive from Pune, Lonavala is a popular hill station known for its scenic beauty and lush green landscapes. With Amruta Travels, you can hire a bus to explore attractions like the Bhushi Dam, Lonavala Lake, and the Karla Caves."
        },
        {
            "title": "Mahabaleshwar: Stunning Viewpoints and Fresh Strawberries:",
            "description": "This hill station is famous for its stunning viewpoints, such as Arthur’s Seat and Wilson Point, as well as its fresh strawberries. Amruta Travels offers comfortable bus rentals to help you enjoy a relaxing journey to Mahabaleshwar."
        },
        {
            "title": "Khandala: Picturesque Valleys and Waterfalls:",
            "description": "Adjacent to Lonavala, Khandala is known for its picturesque valleys and waterfalls. Book a bus with Amruta Travels to visit popular spots like Duke’s Nose and the Khandala Lake."
        },
        {
            "title": "Alibaug: Coastal Beauty and Historic Forts:",
            "description": "A coastal town with beautiful beaches and historic forts, Alibaug is a great destination for a beach getaway. Choose Amruta Travels for a hassle-free bus rental experience to this serene location."
        },
        {
            "title": "Pune to Shirdi: A Spiritual Journey:",
            "description": "Known for the Shirdi Sai Baba Temple, Shirdi is a major pilgrimage site. Our bus rental service makes it easy to travel comfortably to this spiritual destination."
        },
        {
            "title": "Lavasa: Picturesque Lakeside Setting:",
            "description": "A planned city known for its picturesque lakeside setting, Lavasa offers a blend of natural beauty and modern amenities. Opt for Amruta Travels to explore Lavasa’s scenic landscapes and enjoy a peaceful retreat."
        },
        {
            "title": "Nashik: Vineyards and Wine Tours:",
            "description": "Renowned for its vineyards and wine tours, Nashik is a popular destination for wine enthusiasts. Amruta Travels provides reliable bus hire services to help you explore Nashik’s wineries and temples."
        },
        {
            "title": "Tungabhadra: Historical Adventure:",
            "description": "For a historical adventure, head to Tungabhadra, known for its ancient temples and ruins. Amruta Travels ensures a comfortable journey to this unique historical site."
        },
        {
            "title": "Kolhapur: Rich Cultural Heritage:",
            "description": "Famous for its rich cultural heritage and the Mahalaxmi Temple, Kolhapur offers a fascinating glimpse into Maharashtra’s history. Book a bus with Amruta Travels for a smooth trip to this vibrant city."
        },
        {
            "title": "Ashtavinayak Temples: A Pilgrimage Tour:",
            "description": "This pilgrimage tour covers eight sacred Ganesh temples around Pune. With Amruta Travels, you can hire a bus to comfortably visit all the Ashtavinayak temples and experience a spiritual journey."
        }
    ],    

     services : [
        {
            "name": "Mini Bus Booking for Outstation:",
            "description": "Amruta Travels offers mini bus booking for outstation travel, providing a comfortable and convenient option for your trips. Our mini buses are ideal for smaller groups and come with a range of amenities to ensure a pleasant journey."
        },
        {
            "name": "Hire Bus for Outstation in Hadapsar:",
            "description": "If you’re in Hadapsar and need to hire a bus for an outstation trip, Amruta Travels is here to help. We provide reliable and comfortable bus hire services to various outstation destinations."
        },
        {
            "name": "Outstation Mini Bus Hire:",
            "description": "For outstation travel, our mini bus hire services offer the perfect solution for smaller groups. Enjoy a smooth and comfortable journey with our well-maintained mini buses."
        },
        {
            "name": "Mini Bus on Rent for Outstation in Pune:",
            "description": "Rent a mini bus for your outstation travels in Pune with Amruta Travels. Our mini buses are equipped with essential amenities to make your journey enjoyable and stress-free."
        },
        {
            "name": "Hire a Bus for Outstation Pune to Shirdi:",
            "description": "Travel from Pune to Shirdi with ease by hiring a bus from Amruta Travels. Our buses are designed to provide a comfortable and reliable travel experience."
        },
        {
            "name": "Mini Bus for Outstation from Kharadi:",
            "description": "For those needing a mini bus for outstation travel from Kharadi, Amruta Travels offers excellent services to ensure a comfortable and efficient journey."
        },
        {
            "name": "Book Bus for Outstation:",
            "description": "Booking a bus for outstation travel with Amruta Travels is simple and convenient. Choose from our range of buses to suit your group size and travel needs."
        },
        {
            "name": "Outstation Bus Hire in Baner:",
            "description": "If you’re located in Baner and need to hire a bus for an outstation trip, Amruta Travels provides top-notch services to ensure a pleasant journey."
        },
        {
            "name": "Mini Bus Booking for Outstation:",
            "description": "Book a mini bus for your outstation travel needs with Amruta Travels. Our mini buses are perfect for smaller groups and offer a comfortable travel experience."
        },
        {
            "name": "Mini Bus Booking Near Me:",
            "description": "Find mini bus booking services near you with Amruta Travels. We offer convenient options for booking mini buses for your outstation trips."
        },
        {
            "name": "Kalyani Nagar to Outstation Bus Hire:",
            "description": "For outstation travel from Kalyani Nagar, Amruta Travels provides reliable bus hire services to ensure a smooth and comfortable journey."
        },
        {
            "name": "14, 17, 25, 32 Seater Hire for Outstation Trip:",
            "description": "Choose from our range of 14-seater, 17-seater, 25-seater, and 32-seater buses for your outstation trip. Amruta Travels offers a variety of options to suit your group size and travel needs."
        },
        {
            "name": "Pune to Ajanta Ellora Caves Bus Tour:",
            "description": "Experience the wonders of the Ajanta and Ellora Caves with our dedicated bus tour service from Pune. Our buses are equipped with comfortable seating and modern amenities, making your journey to these UNESCO World Heritage sites both pleasant and enjoyable."
        },
        {
            "name": "AC 17-Seater Bus on Rent in Pune:",
            "description": "For smaller groups seeking comfort and style, Amruta Travels offers AC 17-seater buses for rent in Pune. These air-conditioned buses are perfect for family outings, corporate meetings, or group tours, providing a comfortable and climate-controlled environment."
        },
        {
            "name": "Bus Hire for Outstation in Pune:",
            "description": "Planning an outstation trip? Amruta Travels provides reliable and comfortable bus hire services for outstation journeys from Pune. Our fleet includes a range of vehicles to suit different group sizes and preferences."
        },
        {
            "name": "Private Bus Service in Pune for Office:",
            "description": "For corporate outings, meetings, or any office-related travel, Amruta Travels offers private bus services in Pune. Our private buses are designed to provide a comfortable and efficient travel experience for employees."
        },
        {
            "name": "Outstation School Picnic Bus on Rent:",
            "description": "Make school picnics memorable with Amruta Travels’ outstation bus rental services. Our buses are ideal for transporting students to various destinations outside Pune, offering comfort and safety for school trips."
        },
        {
            "name": "Tempo Traveller for Outstation:",
            "description": "If you need a compact yet comfortable vehicle for your outstation trip, consider renting a tempo traveller from Amruta Travels. Our tempo travellers are well-suited for medium-sized groups."
        },
        {
            "name": "Book Tempo Traveller for Outstation:",
            "description": "Booking a tempo traveller for your outstation journey is easy with Amruta Travels. Our booking process is straightforward, and we offer a range of tempo travellers to suit different group sizes."
        },
        {
            "name": "Mini Bus on Rent for Outstation in Pune:",
            "description": "For groups seeking a more compact vehicle for outstation trips, Amruta Travels offers mini buses for rent in Pune. These mini buses provide a balance of comfort and affordability."
        },
        {
            "name": "Tata Winger for Outstation in Pune:",
            "description": "Amruta Travels also provides Tata Winger vehicles for outstation trips from Pune. The Tata Winger offers a blend of comfort and efficiency, making it an excellent choice for group travel."
        },
        {
            "name": "Bus Hire for Outstation in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Mini Bus On Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],    

     tableData : [
        ["- Bus Hire in Pune at Affordable Rate", "- Bus Rental In Pune"],
        ["- Bus Hire in Pune, Amruta Travels", "- Local bus companies for hire"],
        ["- Pune Pandharpur Tuljapur bus on Rent", "- Pune to Kolhapur bus on rent"],
        ["- Pune to Konkan Darshan bus on rent", "- Pune to Shirdi bus hire Hadapsar"],
        ["- Rent a bus Pune, Luxury bus on rent in Pune", "- 40 seater bus on rent in Pune"],
        ["- 27 seater bus on rent in Pune", "- 17 seater bus on rent in Pune"],
        ["- Traveller bus on rent in Pune", "- Bus on rent in Pune"],
        ["- Mini Bus On Rent Pune", "- Bus Nashik to Aurangabad bus on Rent"],
        ["- Mini Bus on rent Pune", "- Pune bus hire rental service in Pimpri Chinchwad"],
        ["- Bus hire rental service in Kharadi Pune", "- Mini Coach Rental in Pune"],
        ["- Bus hire rental service in Kothrud", "- Best bus rental services in Shivaji Nagar"],
        ["- Tempo Traveller rental service in Pune", "- Mini Bus Rental Service in Pune"]
    ],    
     whychoose : [
        {
            "WhyChooseheading": "Diverse Fleet Options:",
            "WhyChoosedescription": "At Amruta Travels, we offer a wide range of bus sizes to accommodate different group sizes and needs. From 14-seater to 35-seater buses, our diverse fleet ensures you can find the perfect vehicle for your outstation journey."
        },
        {
            "WhyChooseheading": "Superior Comfort:",
            "WhyChoosedescription": "Our buses are designed with your comfort in mind. Enjoy features like plush seating, ample legroom, air conditioning, and modern amenities to make your journey as pleasant as possible."
        },
        {
            "WhyChooseheading": "Experienced Drivers:",
            "WhyChoosedescription": "Our professional drivers are highly trained and experienced in handling outstation routes. They ensure a smooth and safe travel experience, allowing you to relax and enjoy the journey."
        },
        {
            "WhyChooseheading": "Reliable Service:",
            "WhyChoosedescription": "Punctuality is our priority. We ensure that our buses arrive on time and adhere to your travel schedule, so you can rely on us for a timely and efficient journey."
        },
        {
            "WhyChooseheading": "Affordable Rates:",
            "WhyChoosedescription": "We offer competitive pricing without compromising on quality. Our transparent pricing model ensures you get the best value for your money with no hidden fees."
        },
        {
            "WhyChooseheading": "High Safety Standards:",
            "WhyChoosedescription": "Safety is a top concern at Amruta Travels. Our buses undergo regular maintenance and safety checks to ensure they meet the highest safety standards, providing you with a secure travel experience."
        },
        {
            "WhyChooseheading": "Flexible Booking Options:",
            "WhyChoosedescription": "We provide flexible booking options to accommodate your travel plans. Whether you need a bus for a single day or an extended period, our booking process is straightforward and accommodating."
        },
        {
            "WhyChooseheading": "Excellent Customer Support:",
            "WhyChoosedescription": "Our dedicated customer service team is available to assist you with any queries or issues. We are committed to providing excellent support throughout your booking process and journey."
        },
        {
            "WhyChooseheading": "Customized Services:",
            "WhyChoosedescription": "We offer tailored services to meet your specific needs. Whether for corporate events, family outings, or group tours, we can customize our services to ensure they match your requirements."
        },
        {
            "WhyChooseheading": "Extensive Coverage:",
            "WhyChoosedescription": "Our bus hire services cover a wide range of outstation destinations from Pune, including popular spots like Shirdi, Kharadi, Baner, and more. No matter where you're headed, Amruta Travels has you covered."
        }
    ],    
};

const faqData = [
    {
        "question": "How can I book a bus with Amruta Travels?",
        "answer": "You can book a bus by contacting our customer service team via phone or email, or by filling out the booking form on our website."
    },
    {
        "question": "What types of buses are available for hire?",
        "answer": "We offer a variety of buses including luxury buses, mini buses, standard coaches, and Traveller buses to meet different travel needs."
    },
    {
        "question": "Are there additional charges for outstation trips?",
        "answer": "Additional charges may apply for outstation trips. Please provide details about your travel plans for accurate pricing."
    },
    {
        "question": "Can I customize the itinerary for my bus rental?",
        "answer": "Yes, we offer customizable itineraries. Discuss your specific requirements with our team to tailor the itinerary to your needs."
    },
    {
        "question": "What payment methods are accepted?",
        "answer": "We accept various payment methods including online payments, credit/debit cards, and bank transfers."
    },
    {
        "question": "What is the cancellation policy?",
        "answer": "Our cancellation policy is flexible. Contact our customer support team to discuss cancellation terms and options."
    },
    {
        "question": "Are the buses equipped with amenities?",
        "answer": "Yes, our buses come with amenities such as air conditioning, comfortable seating, and entertainment options to enhance your travel experience."
    },
    {
        "question": "How do I contact Amruta Travels during my trip?",
        "answer": "You can reach our 24/7 customer support team via phone or email for assistance during your trip."
    },
    {
        "question": "What is the maximum number of passengers allowed?",
        "answer": "The maximum number of passengers depends on the bus type and capacity. Choose a bus that suits your group size for optimal comfort."
    },
    {
        "question": "Is there a distance limit for the bus rental?",
        "answer": "There is no strict distance limit, but additional charges may apply for longer trips. Discuss your travel details with us for more information."
    }
];


const testimonials = [
    {
        "name": "Mr. Rahul Deshmukh",
        "text": "We recently hired a bus from Amruta Travels for our company's annual retreat, and I couldn't be more impressed. The booking process was seamless, and the bus was in excellent condition with all the amenities we needed for a comfortable journey. The driver was professional and punctual, ensuring we arrived at our destination on time. I highly recommend Amruta Travels for anyone looking for reliable and affordable bus rental services in Pune."
    },
    {
        "name": "Ms. Priya Shah",
        "text": "I used Amruta Travels for a family wedding event, and their service was outstanding. We rented a luxury bus for our guests, and it was perfect. The bus was clean, well-maintained, and equipped with all the necessary comforts. The team at Amruta Travels was very helpful and accommodating, making the entire process stress-free. I would definitely use their services again for future events."
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
        heading: "Pune Bus Hire Rental Service Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Pune Bus Hire Rental Service | Affordable Bus Rental, Luxury & Mini Bus Hire</title>
  <meta name="description" content="Amruta Travels offers affordable bus hire rental services in Pune. Rent buses for local tours, outstation trips, weddings, and corporate events. Mini, luxury buses, 17-40 seater buses, tempo travelers available for hire. Bus hire service for destinations like Shirdi, Kolhapur, Pandharpur, and more." />
  <meta name="keywords" content="Bus Hire in Pune at Affordable Rate, Bus Rental in Pune, Amruta Travels, Local bus companies for hire, Pune Pandharpur Tuljapur bus on Rent, Pune to Kolhapur bus on rent, Pune to Konkan Darshan bus on rent, Pune to Shirdi bus hire Hadapsar, Rent a bus Pune, Luxury bus on rent in Pune, 40 seater bus on rent in Pune, 27 seater bus on rent in Pune, 17 seater bus on rent in Pune, Traveller bus on rent in Pune, Bus on rent in Pune, Mini Bus on Rent Pune, Bus Nashik to Aurangabad bus on Rent, Mini Bus on rent Pune, Pune bus hire rental service in Pimpri Chinchwad, bus hire rental service in Kharadi Pune, Mini Coach Rental in Pune, bus hire rental service in Kothrud, best bus rental services in Shivaji Nagar, tempo traveller rental service in Pune, Mini Bus Rental Service in Pune" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers affordable bus hire rental services in Pune. Rent buses for local tours, outstation trips, weddings, and corporate events. Mini, luxury buses, 17-40 seater buses, tempo travelers available for hire. Bus hire service for destinations like Shirdi, Kolhapur, Pandharpur, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-bus-hire-rental-service",
        "logo": "https://amrutatravel.com/images/pune-bus-hire.jpg",
        "image": "https://amrutatravel.com/images/pune-bus-hire.jpg",
        "priceRange": "₹4000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-bus-hire-rental-service",
          "priceCurrency": "INR",
          "price": "4000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "500"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sanjay Patil"
            },
            "datePublished": "2024-08-22",
            "reviewBody": "Booked a luxury bus for our corporate event. Amruta Travels made the entire process easy, and the bus was comfortable. Excellent service!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Asha Deshmukh"
            },
            "datePublished": "2024-07-30",
            "reviewBody": "We rented a 40-seater bus for a family trip to Shirdi. The bus was punctual and clean, and the driver was friendly. Highly recommended!"
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
          "serviceUrl": "https://amrutatravel.com/pune-bus-hire-rental-service"
        },
        "keywords": "Bus Hire in Pune at Affordable Rate, Bus Rental in Pune, Amruta Travels, Local bus companies for hire, Pune Pandharpur Tuljapur bus on Rent, Pune to Kolhapur bus on rent, Pune to Konkan Darshan bus on rent, Pune to Shirdi bus hire Hadapsar, Rent a bus Pune, Luxury bus on rent in Pune, 40 seater bus on rent in Pune, 27 seater bus on rent in Pune, 17 seater bus on rent in Pune, Traveller bus on rent in Pune, Bus on rent in Pune, Mini Bus on Rent Pune, Bus Nashik to Aurangabad bus on Rent, Mini Bus on rent Pune, Pune bus hire rental service in Pimpri Chinchwad, bus hire rental service in Kharadi Pune, Mini Coach Rental in Pune, bus hire rental service in Kothrud, best bus rental services in Shivaji Nagar, tempo traveller rental service in Pune, Mini Bus Rental Service in Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-61.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Pune Bus Hire Rental Service - Amruta Travels:</h3>
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
export default PuneBusHireRentalService;