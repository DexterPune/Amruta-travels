
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneToJyotilingaDarshanBusHire(){

  const cardData = 
    {
      keyword: 'Pune to 5 Jyotirlinga Darshan Bus Hire',
      heading: 'Amruta Travels: Pune to 5 Jyotirlinga Darshan Bus Hire',

      headingDescription: 'When you choose Amruta Travels for your Pune to 5 Jyotirlinga Darshan bus hire, you are not just securing a comfortable and reliable mode of transport, but also embarking on a spiritual journey filled with enriching experiences. Our dedicated bus service is designed to ensure your pilgrimage to the Jyotirlingas is seamless and spiritually uplifting. Here’s what you can expect to see and visit along the way:',

      top:"Top Pune to 5 Jyotirlinga Darshan Bus Hire",
       topPlaces : [
        {
            "title": "Somnath Jyotirlinga - Prabhas Patan, near Veraval, Gujarat:",
            "description": "Begin your sacred journey with the revered Somnath Jyotirlinga, one of the 12 Jyotirlingas. Located in the coastal town of Prabhas Patan, the temple stands as a testament to resilience and devotion, offering stunning views of the Arabian Sea."
        },
        {
            "title": "Mahakaleshwar Jyotirlinga - Ujjain, Madhya Pradesh:",
            "description": "Next, visit the Mahakaleshwar Jyotirlinga in Ujjain, renowned for its unique 'Bhasma Aarti' performed with sacred ash. Ujjain is a city rich in spiritual significance, with its vibrant temples and ghats adding to the divine experience."
        },
        {
            "title": "Omkareshwar Jyotirlinga - Khandwa, Madhya Pradesh:",
            "description": "The Omkareshwar Jyotirlinga, located on the Mandhata Island in the Khandwa district, is an architectural marvel dedicated to Lord Shiva. The island is shaped like the Om symbol, enhancing the spiritual ambiance of your visit."
        },
        {
            "title": "Kedarnath Jyotirlinga - Kedarnath, Uttarakhand:",
            "description": "Nestled in the Himalayas, Kedarnath is accessible through a scenic trek. The Kedarnath Jyotirlinga, situated amidst majestic snow-capped peaks, offers a serene environment that complements its spiritual significance."
        },
        {
            "title": "Kashi Vishwanath Jyotirlinga - Varanasi, Uttar Pradesh:",
            "description": "Conclude your Jyotirlinga tour with a visit to the Kashi Vishwanath Jyotirlinga in Varanasi, one of the holiest cities in Hinduism. The temple's proximity to the Ganges River and its rich historical legacy make it a profound spiritual destination."
        },
        {
            "title": "Shirdi Sai Baba Temple - Shirdi, Maharashtra:",
            "description": "While on your pilgrimage, don't miss a detour to Shirdi, where you can visit the Sai Baba Temple. Although not one of the Jyotirlingas, this temple is significant for its spiritual ambiance and the legacy of Sai Baba."
        },
        {
            "title": "Pune - The Spiritual Hub:",
            "description": "Before embarking on your Jyotirlinga journey, explore Pune’s spiritual landmarks such as the Osho International Meditation Resort and the Dagdusheth Halwai Ganpati Temple, which offer enriching experiences."
        },
        {
            "title": "Ellora Caves - Aurangabad, Maharashtra:",
            "description": "En route, visit the UNESCO World Heritage Site of Ellora Caves. These ancient rock-cut temples are a testament to India’s rich architectural and spiritual heritage."
        },
        {
            "title": "Ajanta Caves - Aurangabad, Maharashtra:",
            "description": "Another historical gem is the Ajanta Caves, famous for their intricate murals and sculptures. While not directly related to Jyotirlinga, the caves offer a glimpse into India’s spiritual art and culture."
        },
        {
            "title": "Lonavala - Hill Station Retreat:",
            "description": "A picturesque stopover in Lonavala offers scenic beauty and tranquility. This hill station provides a refreshing break with its lush greenery and pleasant climate."
        }
    ],    

     "services": [
        {
            "name": "Pune to Trimbakeshwar Bus Hire Nashik",
            "description": "Travel comfortably and conveniently with our Pune to Trimbakeshwar bus hire service. Explore the sacred Trimbakeshwar Temple in Nashik, known for its significance as one of the 12 Jyotirlingas. Our reliable buses ensure a smooth journey, providing you with ample space and comfort throughout the trip."
        },
        {
            "name": "Pune to Aundha Nagnath Bus on Rent",
            "description": "Book a bus for your pilgrimage from Pune to Aundha Nagnath, another revered Jyotirlinga site. Our bus rental service offers comfort and convenience, ensuring a hassle-free travel experience to this important destination in Hingoli district, Maharashtra."
        },
        {
            "name": "Pune to Bhimashankar Bus Hire on Rent",
            "description": "Experience the spiritual journey to Bhimashankar, known for its Jyotirlinga temple nestled in the Sahyadri hills. Our bus hire service from Pune offers reliable transportation with comfortable seating and amenities to make your pilgrimage comfortable and enjoyable."
        },
        {
            "name": "Pune to Grishneshwar Jyotirlinga Bus on Rent",
            "description": "Travel to the Grishneshwar Jyotirlinga with ease using our bus rental service. Located in Ellora near Aurangabad, this sacred site is an important destination for devotees. Enjoy a smooth and comfortable ride in our well-maintained buses."
        },
        {
            "name": "5 Jyotirlinga in Maharashtra Tour Package from Pune",
            "description": "Embark on a divine tour of the five Jyotirlingas in Maharashtra with our comprehensive tour package from Pune. This package covers visits to Trimbakeshwar, Bhimashankar, Grishneshwar, Aundha Nagnath, and one other Jyotirlinga, offering a complete spiritual journey with comfortable bus transport."
        },
        {
            "name": "Tempo Traveller on Rent for 5 Jyotirlinga Darshan",
            "description": "For a more personalized and intimate pilgrimage experience, rent a tempo traveller for your 5 Jyotirlinga Darshan tour. Our tempo travellers are ideal for small groups, providing flexibility and comfort as you visit the sacred Jyotirlinga sites."
        },
        {
            "name": "Pune to Jyotirlinga Darshan Tour Package with Bus",
            "description": "Our tour package for Jyotirlinga Darshan from Pune includes bus rental and a well-planned itinerary covering all major Jyotirlinga temples. Enjoy a spiritually enriching journey with comfortable bus rides and organized travel."
        },
        {
            "name": "Mini Bus on Rent for Jyotirlinga Darshan",
            "description": "Choose a mini bus for a convenient and comfortable pilgrimage to the Jyotirlingas. Perfect for small groups, our mini buses offer a cozy travel experience while visiting the revered Jyotirlinga temples."
        },
        {
            "name": "Pune to Bhimashankar Mini Bus on Rent",
            "description": "Rent a mini bus for your trip from Pune to Bhimashankar. Our mini buses provide a comfortable and economical travel option for small groups, ensuring a pleasant journey to this sacred Jyotirlinga site."
        },
        {
            "name": "Pune to Trimbakeshwar Tempo Traveller on Rent",
            "description": "Rent a tempo traveller for your journey from Pune to Trimbakeshwar. Ideal for smaller groups, our tempo travellers offer flexibility and comfort, making your visit to the Trimbakeshwar Temple a memorable experience."
        },
        {
            "name": "Pune to Aundha Nagnath Tempo Traveller on Rent",
            "description": "Embark on a spiritual journey from Pune to Aundha Nagnath with our tempo traveller rental service. Amruta Travels offers comfortable and well-maintained tempo travellers designed for long-distance travel. Enjoy a smooth and relaxing trip to one of the revered Jyotirlinga temples with our dedicated service, ensuring a hassle-free pilgrimage experience."
        },
        {
            "name": "Pune to Grishneshwar Tempo Traveller on Rent",
            "description": "For your visit to the Grishneshwar Temple, choose Amruta Travels for your tempo traveller rental needs. Our tempo travellers are perfect for comfortable and convenient travel from Pune to Grishneshwar, one of the prominent Jyotirlinga sites. With our well-equipped vehicles and professional service, your journey to this sacred site will be both pleasant and spiritual."
        },
        {
            "name": "Pune to 5 Jyotirlinga Darshan Bus on Rent",
            "description": "Amruta Travels provides bus rental services for an extensive 5 Jyotirlinga Darshan tour from Pune. Our buses are designed to accommodate larger groups, offering comfort and convenience for this significant pilgrimage. Experience a spiritual journey to multiple Jyotirlinga temples with our reliable and well-maintained buses, ensuring a smooth and memorable trip."
        },
        {
            "name": "Tempo Traveller on Rent for 5 Jyotirlinga Darshan",
            "description": "For a more intimate and flexible travel experience, rent a tempo traveller from Amruta Travels for your 5 Jyotirlinga Darshan tour. Our tempo travellers provide comfortable seating and essential amenities, making them an ideal choice for smaller groups undertaking this sacred journey. Enjoy a personalized and comfortable pilgrimage experience with our specialized rental service."
        },
        {
            "name": "Mini Bus on Rent for 5 Jyotirlinga Darshan from Pune",
            "description": "If you need a vehicle that balances comfort and practicality for a group pilgrimage, consider our mini bus rental service for the 5 Jyotirlinga Darshan from Pune. Amruta Travels offers mini buses that are perfect for accommodating medium-sized groups. With a focus on comfort and reliability, our mini buses ensure a pleasant and fulfilling spiritual journey."
        },
        {
            "name": "5 Jyotirlinga Darshan Package Urbania on Rent",
            "description": "Experience a comprehensive 5 Jyotirlinga Darshan with our Urbania package. Amruta Travels offers a tailored rental package that includes everything you need for a complete pilgrimage journey. Our Urbania package provides comfort and convenience, making your spiritual journey to all five Jyotirlinga temples an organized and enjoyable experience."
        },
        {
            "name": "Pune to 5 Jyotirlinga Darshan Bus Hire Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Pune to 5 Jyotirlinga Darshan Bus Hire. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],


    "tableData": [
        ["Pune to Trimbakeshwar Bus Hire Nashik", "Pune to Aundha Nagnath Bus on Rent"],
        ["Pune to Bhimashankar Bus Hire on Rent", "Pune to Grishneshwar Jyotirlinga Bus on Rent"],
        ["5 Jyotirlinga in Maharashtra Tour Package from Pune", "Tempo Traveller on Rent for 5 Jyotirlinga Darshan"],
        ["Pune to Jyotirlinga Darshan Tour Package with Bus", "Mini Bus on Rent for Jyotirlinga Darshan"],
        ["Pune to Bhimashankar Mini Bus on Rent", "Pune to Trimbakeshwar Tempo Traveller on Rent"],
        ["Pune to Aundha Nagnath Tempo Traveller on Rent", "Pune to Grishneshwar Tempo Traveller on Rent"],
        ["Pune to 5 Jyotirlinga Darshan Bus on Rent", "Tempo Traveller on Rent for 5 Jyotirlinga Darshan"],
        ["Mini Bus on Rent for 5 Jyotirlinga Darshan from Pune", "5 Jyotirlinga Darshan Package Urbania on Rent"]
    ],

    "whychoose": [
        {
          "WhyChooseheading": "Why Choose Amruta Travels for Your 5 Jyotirlinga Darshan Bus Hire?",
          "WhyChoosedescription": "At Amruta Travels, we specialize in Jyotirlinga tours, offering expert guidance and seamless travel experiences to all 5 sacred sites. Our deep understanding of these spiritual journeys ensures a meaningful and fulfilling pilgrimage."
        },
        {
          "WhyChooseheading": "Expertise in Pilgrimage Tours:",
          "WhyChoosedescription": "With years of experience in organizing pilgrimage tours, we ensure a spiritually enriching journey to the 5 Jyotirlingas. Our expertise guarantees that your trip is well-organized, allowing you to focus on the spiritual aspects of your pilgrimage."
        },
        {
          "WhyChooseheading": "Comfortable and Modern Buses:",
          "WhyChoosedescription": "Our fleet of buses is equipped with modern amenities such as air conditioning, plush seating, and clean facilities to make your journey comfortable. Whether it's a short trip or a multi-day pilgrimage, we ensure you travel in comfort."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers:",
          "WhyChoosedescription": "Our drivers are not only skilled in navigating long pilgrimage routes, but also prioritize passenger safety. They are familiar with the Jyotirlinga locations and the best routes, ensuring a smooth and timely travel experience."
        },
        {
          "WhyChooseheading": "Customizable Itineraries:",
          "WhyChoosedescription": "We offer flexible tour packages tailored to your schedule and preferences. Whether you want to complete the 5 Jyotirlinga Darshan in one go or take multiple days, we can create an itinerary that meets your needs."
        },
        {
          "WhyChooseheading": "Affordable Pricing:",
          "WhyChoosedescription": "We believe that spiritual journeys should be accessible to everyone, which is why we offer competitive pricing for our bus hire services. Our transparent pricing policy ensures that there are no hidden costs, making your pilgrimage affordable."
        },
        {
          "WhyChooseheading": "24/7 Customer Support:",
          "WhyChoosedescription": "Our customer support team is available around the clock to assist with any inquiries or concerns. From the moment you book with us until your journey is completed, we provide continuous support to make your experience hassle-free."
        },
        {
          "WhyChooseheading": "Safety-First Approach:",
          "WhyChoosedescription": "Passenger safety is our top priority. Our buses undergo regular maintenance and meet all safety standards, so you can travel with peace of mind knowing that your journey is both secure and comfortable."
        },
        {
          "WhyChooseheading": "Comfortable Accommodation Options:",
          "WhyChoosedescription": "For multi-day tours, we offer accommodation options at well-rated hotels and guesthouses near the Jyotirlinga sites. Our goal is to ensure you have a restful stay after your spiritual visits."
        },
        {
          "WhyChooseheading": "Positive Customer Reviews:",
          "WhyChoosedescription": "Our clients consistently commend our reliable service and comfortable travel arrangements. With numerous positive reviews, we have built a reputation for providing a premium travel experience for spiritual tours."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process:",
          "WhyChoosedescription": "Our online booking system makes it simple to reserve a bus for your 5 Jyotirlinga Darshan. The process is straightforward, with prompt confirmations and clear communication, ensuring that your pilgrimage planning is stress-free."
        }
      ]
};
const faqData = [
    {
        "question": "What is included in the Pune to 5 Jyotirlinga Darshan bus hire package?",
        "answer": "Our package includes bus rental for the entire tour, experienced drivers, and essential amenities such as air conditioning and comfortable seating. We can also arrange accommodation and meals based on your requirements."
    },
    {
        "question": "How do I book a bus for the 5 Jyotirlinga Darshan?",
        "answer": "You can book a bus by contacting us directly via phone, email, or through our website. Our customer service team will assist you with the booking process, including choosing the right package and itinerary."
    },
    {
        "question": "Can I customize the tour itinerary?",
        "answer": "Yes, we offer customizable itineraries to fit your schedule and preferences. Let us know your desired dates and specific Jyotirlinga temples you want to visit, and we will tailor the tour accordingly."
    },
    {
        "question": "What types of buses are available for the Jyotirlinga Darshan tour?",
        "answer": "We offer a range of buses including standard, luxury, and mini buses. You can choose based on your group size and comfort preferences."
    },
    {
        "question": "Are the buses equipped with facilities for long journeys?",
        "answer": "Yes, our buses are equipped with air conditioning, comfortable seating, and clean facilities to ensure a pleasant travel experience during long journeys."
    },
    {
        "question": "Is there a minimum or maximum group size for the tour?",
        "answer": "There is no strict minimum or maximum group size. We accommodate small and large groups, providing buses that best fit your needs."
    },
    {
        "question": "What are the payment options for booking?",
        "answer": "We accept various payment methods including online transfers, credit/debit cards, and cash. Our customer service team will provide details based on your preferred payment option."
    },
    {
        "question": "How far in advance should I book the bus for the Jyotirlinga Darshan?",
        "answer": "We recommend booking as early as possible to secure your preferred dates and bus type. Early booking also helps in better planning and availability of buses."
    },
    {
        "question": "What is the cancellation policy for the bus hire?",
        "answer": "Our cancellation policy is flexible. Please contact us for details on the terms and conditions related to cancellations and refunds."
    },
    {
        "question": "Can I request additional stops or deviations during the tour?",
        "answer": "Yes, you can request additional stops or deviations. We will do our best to accommodate your requests within the constraints of the itinerary and travel time."
    }
];


const testimonials = [
    {
        "name": "Mrs. Aarti Deshmukh",
        "text": "We recently booked a bus with Amruta Travels for our pilgrimage to the 5 Jyotirlingas, and it was a wonderful experience. The bus was comfortable, clean, and well-maintained, making our long journey much more pleasant. The driver was experienced and knowledgeable about the route, ensuring we reached each temple safely and on time. The flexibility in the itinerary allowed us to visit all the Jyotirlingas at a relaxed pace. I highly recommend Amruta Travels for anyone planning a similar spiritual tour."
    },
    {
        "name": "Mr. Ravi Sharma",
        "text": "Amruta Travels provided an exceptional bus service for our 5 Jyotirlinga Darshan tour from Pune. From the booking process to the end of the journey, everything was handled professionally. The bus was comfortable with all the necessary amenities, and the driver was courteous and punctual. They accommodated our requests for additional stops and made sure our experience was as smooth as possible. The tour was spiritually fulfilling and stress-free, thanks to the excellent service from Amruta Travels. I would definitely choose them again for future trips."
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
        heading: "er:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Pune to 5 Jyotirlinga Darshan Bus Hire | Tempo Traveller & Mini Bus Rental</title>
  <meta name="description" content="Book buses, tempo travellers, and mini buses for the 5 Jyotirlinga Darshan tour from Pune. Visit Trimbakeshwar, Aundha Nagnath, Bhimashankar, Grishneshwar, and other Jyotirlingas in Maharashtra with Amruta Travels. Affordable rental services for your spiritual journey." />
  <meta name="keywords" content="Pune to Trimbakeshwar Bus Hire Nashik, Pune to Aundha Nagnath Bus on Rent, Pune to Bhimashankar bus hire on rent, Pune to Grishneshwar Jyotirlinga Bus On Rent, 5 Jyotirlinga in Maharashtra tour package from Pune, tempo traveller on rent for 5 Jyotirlinga Darshan, Pune to Jyotirlinga darshan tour package with bus, Mini bus on rent for Jyotirlinga darshan, Pune to Bhimashankar Mini Bus on Rent, Pune to Trimbakeshwar tempo traveller on rent, Pune to Aundha Nagnath tempo traveller on rent, Pune to Grishneshwar Tempo Traveller on Rent, Pune to 5 Jyotirlinga Darshan Bus On Rent, tempo traveller on rent for 5 Jyotirlinga darshan, Mini Bus on rent for 5 Jyotirlinga darshan from Pune, 5 Jyotirlinga in Darshan Package Urbania on Rent" />
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Amruta Travels",
      "description": "Amruta Travels offers bus, tempo traveller, and mini bus rentals for 5 Jyotirlinga Darshan tour packages from Pune. Visit Trimbakeshwar, Aundha Nagnath, Bhimashankar, Grishneshwar, and other Jyotirlingas in Maharashtra. Book your spiritual journey today!",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411041",
        "addressCountry": "IN"
      },
      "telephone": "+91-8421333435",
      "url": "https://amrutatravel.com/pune-to-5-jyotirlinga-darshan-bus-hire",
      "logo": "https://amrutatravel.com/images/jyotirlinga-darshan-bus-hire.jpg",
      "image": [
        "https://amrutatravel.com/img/hell.png",
        "https://amrutatravel.com/img/hell2.png",
        "https://amrutatravel.com/img/hell3.jpg"
      ],
      "priceRange": "₹4500 - ₹35000",
      "offers": {
        "@type": "Offer",
        "url": "https://amrutatravel.com/pune-to-5-jyotirlinga-darshan-bus-hire",
        "priceCurrency": "INR",
        "price": 4500,
        "priceValidUntil": "2024-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.7,
        "reviewCount": 280
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ravindra Patil"
          },
          "datePublished": "2024-07-20",
          "reviewBody": "The bus was comfortable, and the driver was well-experienced for our 5 Jyotirlinga darshan tour. Highly recommended!"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Suman Joshi"
          },
          "datePublished": "2024-06-15",
          "reviewBody": "We booked a mini bus for the 5 Jyotirlinga darshan tour. The service was fantastic, and the trip was a memorable experience."
        }
      ],
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
        "serviceUrl": "https://amrutatravel.com/pune-to-5-jyotirlinga-darshan-bus-hire"
      },
      "keywords": "Pune to Trimbakeshwar Bus Hire Nashik, Pune to Aundha Nagnath Bus on Rent, Pune to Bhimashankar bus hire on rent, Pune to Grishneshwar Jyotirlinga Bus On Rent, 5 Jyotirlinga in Maharashtra tour package from Pune, tempo traveller on rent for 5 Jyotirlinga Darshan, Pune to Jyotirlinga darshan tour package with bus, Mini bus on rent for Jyotirlinga darshan, Pune to Bhimashankar Mini Bus on Rent, Pune to Trimbakeshwar tempo traveller on rent, Pune to Aundha Nagnath tempo traveller on rent, Pune to Grishneshwar Tempo Traveller on Rent, Pune to 5 Jyotirlinga Darshan Bus On Rent, tempo traveller on rent for 5 Jyotirlinga darshan, Mini Bus on rent for 5 Jyotirlinga darshan from Pune, 5 Jyotirlinga in Darshan Package Urbania on Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-63.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs – Pune to 5 Jyotirlinga Darshan Bus Hire at Amruta Travels:</h3>
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
export default PuneToJyotilingaDarshanBusHire;