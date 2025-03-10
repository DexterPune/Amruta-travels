
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusHireForOutstationInPune(){

  const cardData = 
    {
      keyword: ' Bus Hire for Outstation in Pune',
      heading: 'Bus Hire for Outstation in Pune ',

      headingDescription: 'When it comes to bus hire for outstation in Pune, Amruta Travels is the top choice for those seeking reliable, comfortable, and affordable transportation. Whether you are planning a corporate retreat, a family vacation, or a group tour, we provide the perfect solution to make your journey smooth and enjoyable. With a wide range of buses to choose from, our fleet ensures that you travel in comfort while our experienced drivers guarantee a safe and timely arrival at your destination.',

      top:"Top Outstation Destinations Served by Amruta Travels",
      "topPlaces": [
        {
          "title": "Mumbai: A Bustling Metropolis",
          "description": "Mumbai, a vibrant city known for its nightlife, historical landmarks, and business hubs, is easily accessible with our comfortable buses. Whether you're traveling for leisure or business, we ensure a pleasant journey to and from Mumbai."
        },
        {
          "title": "Lonavala: A Scenic Hill Station",
          "description": "Lonavala, famous for its lush green landscapes and scenic beauty, is a popular weekend getaway. Our buses provide a relaxing ride to this picturesque destination, making your trip to Lonavala a refreshing experience."
        },
        {
          "title": "Nashik: Vineyards and Temples",
          "description": "Known for its vineyards and holy temples, Nashik is a significant destination for both tourists and pilgrims. We offer comfortable bus hire services to explore the rich cultural and natural heritage of Nashik."
        },
        {
          "title": "Goa: Beaches and Vibrant Culture",
          "description": "Goa, renowned for its beautiful beaches and lively culture, is a sought-after vacation spot. Our buses ensure a smooth journey to Goa, so you can enjoy its sun, sand, and sea without any hassle."
        },
        {
          "title": "Shirdi: A Pilgrimage Site",
          "description": "Shirdi, a major pilgrimage site dedicated to Sai Baba, attracts many devotees. Our reliable bus service offers a convenient and comfortable way to travel to this sacred destination."
        },
        {
          "title": "Mahabaleshwar: A Serene Hill Station",
          "description": "Mahabaleshwar, known for its pleasant climate and stunning viewpoints, is a favorite hill station. We provide comfortable buses to this serene destination, ideal for a relaxing retreat."
        },
        {
          "title": "Pandharpur: Spiritual Significance",
          "description": "Pandharpur, known for the Vithoba temple and its spiritual importance, is an important pilgrimage site. Our buses offer a convenient way to reach this revered destination with ease."
        },
        {
          "title": "Ajanta and Ellora Caves: UNESCO Heritage Sites",
          "description": "The Ajanta and Ellora Caves are famous for their intricate carvings and historical significance. Our buses offer a comfortable journey to these UNESCO World Heritage Sites, allowing you to explore their rich history."
        },
        {
          "title": "Lavasa: A Planned Hill City",
          "description": "Lavasa, a planned hill city known for its picturesque setting and modern amenities, is perfect for both business and leisure trips. Our buses ensure a smooth ride to Lavasa, making your visit enjoyable."
        },
        {
          "title": "Tuljapur: Home to Tulja Bhavani Temple",
          "description": "Tuljapur, known for the Tulja Bhavani Temple, is a key pilgrimage destination. We provide reliable bus services to facilitate your visit to this sacred site, ensuring a comfortable journey."
        }
      ],
    

    "services": [
    {
      "name": "Mini Bus Booking for Outstation",
      "description": "Amruta Travels offers mini bus booking for outstation travel, providing a comfortable and convenient option for your trips. Our mini buses are ideal for smaller groups and come with a range of amenities to ensure a pleasant journey."
    },
    {
      "name": "Hire Bus for Outstation in Hadapsar",
      "description": "If you’re in Hadapsar and need to hire a bus for an outstation trip, Amruta Travels is here to help. We provide reliable and comfortable bus hire services to various outstation destinations."
    },
    {
      "name": "Outstation Mini Bus Hire",
      "description": "For outstation travel, our mini bus hire services offer the perfect solution for smaller groups. Enjoy a smooth and comfortable journey with our well-maintained mini buses."
    },
    {
      "name": "Mini Bus on Rent for Outstation in Pune",
      "description": "Rent a mini bus for your outstation travels in Pune with Amruta Travels. Our mini buses are equipped with essential amenities to make your journey enjoyable and stress-free."
    },
    {
      "name": "Hire a Bus for Outstation Pune to Shirdi",
      "description": "Travel from Pune to Shirdi with ease by hiring a bus from Amruta Travels. Our buses are designed to provide a comfortable and reliable travel experience."
    },
    {
      "name": "Mini Bus for Outstation from Kharadi",
      "description": "For those needing a mini bus for outstation travel from Kharadi, Amruta Travels offers excellent services to ensure a comfortable and efficient journey."
    },
    {
      "name": "Book Bus for Outstation",
      "description": "Booking a bus for outstation travel with Amruta Travels is simple and convenient. Choose from our range of buses to suit your group size and travel needs."
    },
    {
      "name": "Outstation Bus Hire in Baner",
      "description": "If you’re located in Baner and need to hire a bus for an outstation trip, Amruta Travels provides top-notch services to ensure a pleasant journey."
    },
    {
      "name": "Mini Bus Booking for Outstation",
      "description": "Book a mini bus for your outstation travel needs with Amruta Travels. Our mini buses are perfect for smaller groups and offer a comfortable travel experience."
    },
    {
      "name": "Mini Bus Booking Near Me",
      "description": "Find mini bus booking services near you with Amruta Travels. We offer convenient options for booking mini buses for your outstation trips."
    },
    {
      "name": "Kalyani Nagar to Outstation Bus Hire",
      "description": "For outstation travel from Kalyani Nagar, Amruta Travels provides reliable bus hire services to ensure a smooth and comfortable journey."
    },
    {
      "name": "14, 17, 25, 32 Seater Hire for Outstation Trip",
      "description": "Choose from our range of 14-seater, 17-seater, 25-seater, and 32-seater buses for your outstation trip. Amruta Travels offers a variety of options to suit your group size and travel needs."
    },
    {
      "name": "Pune to Ajanta Ellora Caves Bus Tour",
      "description": "Experience the wonders of the Ajanta and Ellora Caves with our dedicated bus tour service from Pune. Our buses are equipped with comfortable seating and modern amenities, making your journey to these UNESCO World Heritage sites both pleasant and enjoyable."
    },
    {
      "name": "AC 17-Seater Bus on Rent in Pune",
      "description": "For smaller groups seeking comfort and style, Amruta Travels offers AC 17-seater buses for rent in Pune. These air-conditioned buses are perfect for family outings, corporate meetings, or group tours, providing a comfortable and climate-controlled environment."
    },
    {
      "name": "Bus Hire for Outstation in Pune",
      "description": "Planning an outstation trip? Amruta Travels provides reliable and comfortable bus hire services for outstation journeys from Pune. Our fleet includes a range of vehicles to suit different group sizes and preferences. Whether it's a family vacation, corporate outing, or pilgrimage tour, we have the perfect vehicle for your needs."
    },
    {
      "name": "Private Bus Service in Pune for Office",
      "description": "For corporate outings, meetings, or any office-related travel, Amruta Travels offers private bus services in Pune. Our private buses are designed to provide a comfortable and efficient travel experience for employees."
    },
    {
      "name": "Outstation School Picnic Bus on Rent",
      "description": "Make school picnics memorable with Amruta Travels’ outstation bus rental services. Our buses are ideal for transporting students to various destinations outside Pune, offering comfort and safety for school trips."
    },
    {
      "name": "Tempo Traveller for Outstation",
      "description": "If you need a compact yet comfortable vehicle for your outstation trip, consider renting a tempo traveller from Amruta Travels. Our tempo travellers are well-suited for medium-sized groups."
    },
    {
      "name": "Book Tempo Traveller for Outstation",
      "description": "Booking a tempo traveller for your outstation journey is easy with Amruta Travels. Our booking process is straightforward, and we offer a range of tempo travellers to suit different group sizes."
    },
    {
      "name": "Mini Bus on Rent for Outstation in Pune",
      "description": "For groups seeking a more compact vehicle for outstation trips, Amruta Travels offers mini buses for rent in Pune. These mini buses provide a balance of comfort and affordability."
    },
    {
      "name": "Tata Winger for Outstation in Pune",
      "description": "Amruta Travels also provides Tata Winger vehicles for outstation trips from Pune. The Tata Winger offers a blend of comfort and efficiency, making it an excellent choice for group travel."
    },
    {
      "name": "Bus Hire for Outstation in Pune Contact Number",
      "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient **Mini Bus On Rent in Pune**. We ensure a smooth and enjoyable ride for all our customers."
    }
  ],


 "tableData": [
        ["- Mini Bus Booking for Outstation", "- Hire Bus for Outstation in Hadapsar"],
        ["- Amruta Travels Pune", "- Outstation Mini Bus Hire"],
        ["- Mini Bus on Rent for Outstation in Pune", "- Hire a Bus for Outstation Pune to Shirdi"],
        ["- Mini Bus for Outstation from Kharadi", "- Book Bus for Outstation"],
        ["- Outstation Bus Hire in Baner", "- Mini Bus Booking for Outstation"],
        ["- Mini Bus Booking Near Me", "- Kalyani Nagar to Outstation Bus Hire"],
        ["- 14, 17, 25, 32 Seater Hire for Outstation Trip", "- 14, 17, 25, 32, 35 Seater Hire for Outstation from Pune"],
        ["- Pune to Ajanta Ellora Caves Bus Tour", "- AC 17-Seater Bus on Rent in Pune"],
        ["- Bus Hire for Outstation in Pune", "- Private Bus Service in Pune for Office"],
        ["- Outstation School Picnic Bus on Rent", "- Tempo Traveller for Outstation"],
        ["- Book Tempo Traveller for Outstation", "- Mini Bus on Rent for Outstation in Pune"],
        ["- Tata Winger for Outstation in Pune", ""]
    ],

    "whychoose": [
      {
        "WhyChooseheading": "Diverse Fleet Options",
        "WhyChoosedescription": "At Amruta Travels, we offer a wide range of bus sizes to accommodate different group sizes and needs. From 14-seater to 35-seater buses, our diverse fleet ensures you can find the perfect vehicle for your outstation journey."
      },
      {
        "WhyChooseheading": "Superior Comfort",
        "WhyChoosedescription": "Our buses are designed with your comfort in mind. Enjoy features like plush seating, ample legroom, air conditioning, and modern amenities to make your journey as pleasant as possible."
      },
      {
        "WhyChooseheading": "Experienced Drivers",
        "WhyChoosedescription": "Our professional drivers are highly trained and experienced in handling outstation routes. They ensure a smooth and safe travel experience, allowing you to relax and enjoy the journey."
      },
      {
        "WhyChooseheading": "Reliable Service",
        "WhyChoosedescription": "Punctuality is our priority. We ensure that our buses arrive on time and adhere to your travel schedule, so you can rely on us for a timely and efficient journey."
      },
      {
        "WhyChooseheading": "Affordable Rates",
        "WhyChoosedescription": "We offer competitive pricing without compromising on quality. Our transparent pricing model ensures you get the best value for your money with no hidden fees."
      },
      {
        "WhyChooseheading": "High Safety Standards",
        "WhyChoosedescription": "Safety is a top concern at Amruta Travels. Our buses undergo regular maintenance and safety checks to ensure they meet the highest safety standards, providing you with a secure travel experience."
      },
      {
        "WhyChooseheading": "Flexible Booking Options",
        "WhyChoosedescription": "We provide flexible booking options to accommodate your travel plans. Whether you need a bus for a single day or an extended period, our booking process is straightforward and accommodating."
      },
      {
        "WhyChooseheading": "Excellent Customer Support",
        "WhyChoosedescription": "Our dedicated customer service team is available to assist you with any queries or issues. We are committed to providing excellent support throughout your booking process and journey."
      },
      {
        "WhyChooseheading": "Customized Services",
        "WhyChoosedescription": "We offer tailored services to meet your specific needs. Whether for corporate events, family outings, or group tours, we can customize our services to ensure they match your requirements."
      },
      {
        "WhyChooseheading": "Extensive Coverage",
        "WhyChoosedescription": "Our bus hire services cover a wide range of outstation destinations from Pune, including popular spots like Shirdi, Kharadi, Baner, and more. No matter where you're headed, Amruta Travels has you covered."
      }
    ]
};

const faqData = [
    {
        "question": "What types of buses are available for outstation hire with Amruta Travels?",
        "answer": "We offer a range of bus sizes including 14-seater, 17-seater, 25-seater, 32-seater, and 35-seater buses. You can choose the size that best fits your group size and travel needs."
    },
    {
        "question": "How can I book a bus for an outstation trip with Amruta Travels?",
        "answer": "Booking a bus is easy. You can contact us through our website or call our customer service team. Provide your travel details, and we’ll assist you in selecting and booking the right bus for your trip."
    },
    {
        "question": "Are the buses equipped with amenities?",
        "answer": "Yes, our buses are equipped with modern amenities such as air conditioning, comfortable seating, and ample luggage space to ensure a pleasant journey."
    },
    {
        "question": "How much does it cost to hire a bus for an outstation trip?",
        "answer": "The cost of hiring a bus depends on factors such as the size of the bus, the distance of the trip, and the duration of the hire. Contact us for a detailed quote based on your specific requirements."
    },
    {
        "question": "Are the drivers experienced?",
        "answer": "Yes, all our drivers are experienced and trained to handle outstation routes. They prioritize your safety and comfort throughout the journey."
    },
    {
        "question": "What safety measures are in place for the buses?",
        "answer": "Our buses undergo regular maintenance and safety checks to ensure they meet high safety standards. We also have safety protocols in place to ensure a secure travel experience."
    },
    {
        "question": "Can I make changes to my booking?",
        "answer": "Yes, you can make changes to your booking based on availability. Contact our customer service team to discuss any changes you need to make."
    },
    {
        "question": "What is the booking process for an outstation bus?",
        "answer": "You can book a bus by contacting us through our website or phone. Provide details such as your travel dates, destination, and bus size requirements, and we will handle the rest."
    },
    {
        "question": "How far in advance should I book a bus for my trip?",
        "answer": "We recommend booking as early as possible to ensure availability, especially during peak travel times. Early booking also helps secure the best rates."
    },
    {
        "question": "What if I have special requirements for my trip?",
        "answer": "If you have special requirements, such as additional amenities or specific travel needs, let us know when making your booking. We will do our best to accommodate your requests."
    }
];


const testimonials = [
    {
        "name": "Mrs. Anjali Deshmukh",
        "text": "We recently hired a 32-seater bus from Amruta Travels for a trip from Pune to Shirdi, and I couldn't be more satisfied with the service. The bus was comfortable and well-maintained, and the driver was both professional and courteous. Everything was organized smoothly from booking to the actual journey. I highly recommend Amruta Travels for anyone looking for reliable and comfortable outstation bus hire."
    },
    {
        "name": "Mr. Rajesh Kulkarni",
        "text": "Our company used Amruta Travels for a corporate outing to Mahabaleshwar, and the experience was fantastic. The 25-seater bus was perfect for our group, and the amenities provided ensured that everyone was comfortable during the trip. The driver was punctual and navigated the route with ease, making our journey stress-free. We will definitely use Amruta Travels for our future outstation trips."
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
        heading: "Bus Hire for Outstation in Pune Contact Number:",
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
  <title> Bus Hire for Outstation in Pune ₹58 Per Km </title>
  <meta name="description" content="Looking for Bus Hire for Outstation in Pune? Amruta Travels offers a wide range of buses for corporate events, weddings, family trips, and more. Rent a bus for outstation travel from Pune now at affordable rates!" />
  <meta name="keywords" content="Bus Hire for Outstation in Pune, Mini bus booking for outstation, Hire bus for outstation in Pune, Outstation Bus Rental, Pune to Shirdi bus hire, 17, 25, 32, 35 Seater Bus Hire for Outstation, Outstation bus hire for corporate trips, Bus hire for school picnic, Affordable outstation bus rental, Hire mini bus for outstation from Pune, AC Bus Hire for Outstation, Private bus for outstation trips" />
  <meta name="robots" content="index, follow" />


  <meta property="og:title" content="Bus Hire for Outstation in Pune | Affordable & Comfortable Bus Rental | Amruta Travels" />
  <meta property="og:description" content="Amruta Travels offers the best Bus Hire for Outstation in Pune. Choose from a wide range of buses for your outstation trips, including 17, 25, 32, 35 seater buses. Book your ride now!" />
  <meta property="og:image" content="https://amrutatravel.com/images/outstation-bus-service.jpg" />
  <meta property="og:url" content="https://amrutatravel.com/bus-hire-for-outstation-in-pune" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels provides mini and luxury bus hire services for outstation trips from Pune. Book buses for destinations like Shirdi, Ajanta Ellora, and more. Hire buses for corporate events, family tours, school picnics, and outstation travel. 14, 17, 25, 32, 35 seater buses available.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-hire-for-outstation-in-pune",
        "logo": "https://amrutatravel.com/images/outstation-bus-service.jpg",
        "image": "https://amrutatravel.com/images/outstation-bus-service.jpg",
        "priceRange": "₹5000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-hire-for-outstation-in-pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "350"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ananya Shah"
            },
            "datePublished": "2024-08-10",
            "reviewBody": "Booked a mini bus from Pune to Shirdi. The service was seamless and comfortable. Highly recommend Amruta Travels for outstation bus hire!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Mehta"
            },
            "datePublished": "2024-07-25",
            "reviewBody": "Excellent service for our corporate trip to Ajanta Ellora. The bus was on time and the driver was very professional."
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
          "serviceUrl": "https://amrutatravel.com/bus-hire-for-outstation-in-pune"
        },
        "keywords": "Bus Hire for Outstation in Pune, Mini bus booking for outstation, Hire bus for outstation in Pune, Outstation Bus Rental, Pune to Shirdi bus hire, 17, 25, 32, 35 Seater Bus Hire for Outstation, Outstation bus hire for corporate trips, Bus hire for school picnic, Affordable outstation bus rental, Hire mini bus for outstation from Pune, AC Bus Hire for Outstation, Private bus for outstation trips"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-45.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs Bus Hire for Outstation in Pune for Amruta Travels:</h3>
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
export default BusHireForOutstationInPune;