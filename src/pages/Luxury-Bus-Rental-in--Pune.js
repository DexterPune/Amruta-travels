
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  LuxuryBusRentalInPune(){

  const cardData = 
    {
      keyword: 'Luxury Bus Rental in Pune',
      heading: 'Amruta Travels: Luxury Bus Rental in Pune ',

      headingDescription: 'When it comes to traveling in style and comfort, Amruta Travels stands out with its premium luxury bus rental services in Pune. Whether you’re planning a corporate event, a wedding, or a special group outing, our luxury buses offer unparalleled comfort, elegance, and amenities. Here’s a look at the top luxury bus rental options with Amruta Travels in Pune:',

      top:"Top Luxury Bus Rental in Pune",
       topPlaces : [
        {
            "title": "Executive 40-Seater Luxury Bus:",
            "description": "Our Executive 40-Seater bus offers a sophisticated travel experience with plush seating, ample legroom, and high-end audio-visual systems. Perfect for corporate outings or large gatherings, this bus ensures a smooth and comfortable journey."
        },
        {
            "title": "Premium 35-Seater Luxury Bus:",
            "description": "Designed for those who value both style and functionality, the Premium 35-Seater comes with reclining seats, climate control, and modern entertainment options. Ideal for business trips or special events, this bus combines luxury with practicality."
        },
        {
            "title": "Deluxe 30-Seater Luxury Bus:",
            "description": "Experience the best of comfort and space with our Deluxe 30-Seater bus. It features spacious interiors, elegant seating, and premium amenities, making it perfect for long-distance travel and high-profile events."
        },
        {
            "title": "VIP 25-Seater Luxury Coach:",
            "description": "For smaller groups seeking a touch of luxury, our VIP 25-Seater coach offers an intimate and comfortable setting. With its luxurious interiors and superior service, it’s an excellent choice for exclusive gatherings or private events."
        },
        {
            "title": "Luxury 20-Seater Mini Bus:",
            "description": "The Luxury 20-Seater Mini Bus is designed for those who need a compact yet luxurious option. It features plush seats, air conditioning, and a refined interior, ensuring a premium travel experience for smaller groups."
        },
        {
            "title": "High-Class 50-Seater Bus:",
            "description": "Perfect for larger groups, the High-Class 50-Seater bus combines ample seating with top-tier amenities. It’s equipped with state-of-the-art entertainment systems, comfortable seating, and excellent air conditioning, making it ideal for extended trips and large events."
        },
        {
            "title": "Ultra-Luxury 45-Seater Bus:",
            "description": "Our Ultra-Luxury 45-Seater bus offers exceptional comfort and high-end features, including leather seats, a premium sound system, and enhanced climate control. This bus is perfect for those who want to travel in utmost luxury."
        },
        {
            "title": "Elegant 32-Seater Luxury Bus:",
            "description": "The Elegant 32-Seater bus provides a balance between comfort and capacity. It boasts high-quality seating, modern facilities, and a stylish interior, making it a great choice for both corporate and leisure travel."
        },
        {
            "title": "Superior 17-Seater Luxury Van:",
            "description": "For a more intimate setting, our Superior 17-Seater Luxury Van is ideal. It offers premium seating, advanced entertainment systems, and excellent comfort, perfect for small groups and private events."
        },
        {
            "title": "Executive 25-Seater Luxury Coach:",
            "description": "Combining comfort with sophistication, the Executive 25-Seater Luxury Coach is equipped with everything needed for a pleasant journey. Its high-end features and spacious design make it perfect for both business and leisure travel."
        }
    ],    
    "services": [
        {
            "name": "Luxury Bus Rental in Pimpri Chinchwad",
            "description": "Amruta Travels offers premium luxury bus rentals in Pimpri Chinchwad, ideal for those seeking comfort and style. Our fleet includes top-of-the-line vehicles equipped with advanced amenities, ensuring a sophisticated travel experience for corporate events, weddings, and other special occasions."
        },
        {
            "name": "Luxury Bus Rental in Kharadi",
            "description": "Experience unparalleled comfort with our luxury bus rentals in Kharadi. Whether you’re planning a group outing, corporate function, or special event, our luxury buses provide the perfect blend of elegance and convenience. Enjoy plush seating, climate control, and state-of-the-art entertainment systems."
        },
        {
            "name": "Luxury Bus on Rent in Yerawada",
            "description": "Our luxury bus rental services in Yerawada are designed to meet the highest standards of comfort and luxury. Ideal for any occasion, from business trips to family outings, these buses offer premium features and a smooth, enjoyable journey."
        },
        {
            "name": "Luxury Bus on Rent in Vishrantwadi, Pune",
            "description": "Amruta Travels provides exceptional luxury bus rentals in Vishrantwadi, Pune. Our buses come equipped with high-end amenities to ensure a comfortable and memorable travel experience, whether for local events or outstation trips."
        },
        {
            "name": "14, 17, 20, 25 Seater Luxury Bus on Rent in Pune",
            "description": "We offer a range of luxury buses on rent in Pune, including 14, 17, 20, and 25-seater options. Perfect for smaller groups or intimate gatherings, these buses provide premium comfort and stylish interiors."
        },
        {
            "name": "32, 35, 40, 45 Seater Luxury Bus Hire in Pimpri Chinchwad",
            "description": "For larger groups, Amruta Travels offers 32, 35, 40, and 45-seater luxury buses in Pimpri Chinchwad. These spacious and luxurious buses are ideal for corporate events, large family gatherings, and special occasions, providing ample space and high-end amenities."
        },
        {
            "name": "Luxury Bus on Rent in Hadapsar, Pune",
            "description": "Our luxury bus rentals in Hadapsar, Pune, offer a sophisticated travel experience with a focus on comfort and style. These buses are equipped with premium features and are perfect for various events and long-distance journeys."
        },
        {
            "name": "Luxury Bus on Rent for Picnic in Pune",
            "description": "Planning a picnic? Our luxury buses are available for rent to make your picnic experience both comfortable and enjoyable. With high-end amenities and ample space, your group can travel in style and ease."
        },
        {
            "name": "Mini Luxury Bus Hire in Pune",
            "description": "Ideal for smaller groups or short trips, our mini luxury buses in Pune provide a cozy yet luxurious travel experience. Enjoy comfort and elegance with our well-maintained mini buses, perfect for intimate gatherings or special events."
        },
        {
            "name": "Non-AC Bus Rental Service in Pune",
            "description": "For those looking for a more budget-friendly option, we offer non-AC bus rentals in Pune. These buses are ideal for short trips and local events, providing reliable transportation at an affordable rate."
        },
        {
            "name": "Non-AC Bus for Hire for Outstation",
            "description": "Travel comfortably on a budget with our non-AC bus rentals for outstation trips. Perfect for longer journeys where cost-efficiency is key, our non-AC buses offer dependable service without compromising on quality."
        },
        {
            "name": "Affordable Non-AC Bus and Tempo Traveller Rentals in Pune",
            "description": "Amruta Travels offers a variety of non-AC bus and tempo traveller rental options in Pune, catering to different travel needs and budgets. Whether you're planning a local outing or an outstation trip, our non-AC vehicles provide a cost-effective solution without compromising on comfort. Explore our rental services and find the perfect option for your next journey."
        },
        {
            "name": "Non-AC Tempo Traveller on Rent in Pune",
            "description": "For a budget-friendly travel option, consider renting a non-AC tempo traveller from Amruta Travels in Pune. Our non-AC tempo travellers are ideal for group outings and local trips, offering practical and economical solutions for medium-sized groups. Enjoy a comfortable ride without the added cost of air conditioning, perfect for short to medium-distance travel."
        },
        {
            "name": "Non-AC Bus Hire on Rent in Pune",
            "description": "If you're looking for a cost-effective way to transport a larger group, our non-AC bus hire service in Pune is an excellent choice. These buses are ideal for picnics, local tours, and other group activities where air conditioning is not a necessity. With ample seating and reliable service, our non-AC buses provide a practical solution for various transportation needs."
        },
        {
            "name": "Non-AC Mini Bus Hire on Rent in Pune",
            "description": "For smaller groups requiring a more economical transport option, Amruta Travels offers non-AC mini buses for rent in Pune. Our non-AC mini buses are perfect for family outings, corporate events, or local trips. Enjoy the benefits of comfortable seating and affordability with our non-AC mini bus rentals."
        },
        {
            "name": "Non-AC Bus Hire for Picnic in Pune",
            "description": "Enhance your picnic experience with our non-AC bus hire service in Pune. Ideal for group outings to parks, gardens, or scenic spots, our non-AC buses provide a budget-friendly transportation option. With comfortable seating and reliable service, our buses ensure a pleasant and cost-effective journey for your picnic."
        },
        {
            "name": "Best Bus Rental Service in Pune",
            "description": "Amruta Travels is renowned for providing the best bus rental services in Pune. We offer a wide range of vehicles, including non-AC and AC options, to suit various travel needs. Our commitment to quality service, reliability, and customer satisfaction makes us a top choice for bus rentals in Pune."
        },
        {
            "name": "32, 35, 40, 45-Seater Local and Outstation Bus",
            "description": "Whether you need a bus for a local trip or an outstation journey, Amruta Travels offers 32, 35, 40, and 45-seater buses to accommodate larger groups. Our well-maintained buses are designed for both local and outstation travel, providing comfort and reliability for all types of group activities and events."
        },
        {
            "name": "14, 17, 20, 25-Seater Bus on Rent in Pune",
            "description": "For various group sizes, Amruta Travels provides 14, 17, 20, and 25-seater buses for rent in Pune. These buses are suitable for local trips, corporate events, school outings, and more. With a focus on comfort and affordability, our range of buses ensures a pleasant travel experience for groups of different sizes."
        },
        {
            "name": "Luxury Bus Rental in Pune Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Luxury Bus Rental in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],


    "tableData": [
        ["- Luxury Bus Rental in Pimpri Chinchwad", "- Luxury Bus Rental in Kharadi"],
        ["- Luxury Bus On Rent in Yerawada", "- Amruta Travels, Pune"],
        ["- Luxury Bus On Rent in Vishrantwadi, Pune", "- 14, 17, 20, 25 Seater Luxury Bus On Rent Pune"],
        ["- 32, 35, 40, 45 Seater Luxury Bus Hire in Pimpri Chinchwad", "- Luxury Bus On Rent in Hadapsar Pune"],
        ["- Luxury Bus on Rent for Picnic in Pune", "- Mini Luxury Bus Hire in Pune"],
        ["- Non-AC Bus Rental Service in Pune", "- Non-AC Bus for Hire for Outstation"],
        ["- Non-AC Tempo Traveller on Rent in Pune", "- Non-AC Bus Hire on Rent in Pune"],
        ["- Non-AC Mini Bus Hire on Rent in Pune", "- Non-AC Bus Hire for Picnic in Pune"],
        ["- Best Bus Rental Service in Pune", "- 32, 35, 40, 45 Seater Local and Outstation Bus"],
        ["- 14, 17, 20, 25 Seater Bus on Rent Pune", "- 32, 35, 40, 45 Seater Local and Outstation Bus"]
    ],


    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Your Luxury Bus Rental in Pune?",
            "WhyChoosedescription": ""
        },
        {
            "WhyChooseheading": "Exceptional Comfort and Style:",
            "WhyChoosedescription": "At Amruta Travels, we prioritize your comfort and style. Our luxury buses feature plush seating with ample legroom, advanced climate control, and state-of-the-art entertainment systems to ensure a premium travel experience. Whether you're attending a corporate event or a family gathering, our buses provide the perfect blend of comfort and sophistication."
        },
        {
            "WhyChooseheading": "Diverse Fleet:",
            "WhyChoosedescription": "We offer a comprehensive range of luxury buses, including 14, 17, 20, 25, 32, 35, 40, and 45-seater options. Our diverse fleet caters to various group sizes and event requirements, ensuring that you find the ideal vehicle for your journey, whether it's a small group outing or a large corporate event."
        },
        {
            "WhyChooseheading": "Professional Drivers:",
            "WhyChoosedescription": "Our team of experienced and professional drivers is dedicated to ensuring a smooth and safe journey. Trained to handle diverse driving conditions, they provide exceptional service with a focus on safety and comfort. With their knowledge of the best routes, you can relax and enjoy the ride, knowing you're in capable hands."
        },
        {
            "WhyChooseheading": "Customizable Packages:",
            "WhyChoosedescription": "We understand that each event has its unique requirements. That’s why we offer customizable rental packages tailored to your specific needs. From corporate functions and weddings to family reunions and special tours, our flexible packages can be adjusted to match your event's scale and scope."
        },
        {
            "WhyChooseheading": "Competitive Rates:",
            "WhyChoosedescription": "Experience luxury travel at competitive rates with Amruta Travels. We strive to provide exceptional value for money, offering flexible rental options that fit within your budget while maintaining the highest standards of service and quality."
        },
        {
            "WhyChooseheading": "Well-Maintained Vehicles:",
            "WhyChoosedescription": "Our commitment to excellence includes regular maintenance and inspection of our fleet. Each bus undergoes thorough checks to ensure it is in top condition, offering you a reliable and comfortable travel experience. Travel with confidence knowing that our vehicles meet the highest safety and performance standards."
        },
        {
            "WhyChooseheading": "Excellent Customer Service:",
            "WhyChoosedescription": "Our dedicated customer service team is here to assist you every step of the way. From initial inquiries to the end of your journey, we are committed to delivering a seamless and enjoyable experience. We are always available to address your questions, accommodate special requests, and ensure your satisfaction."
        },
        {
            "WhyChooseheading": "Flexibility for Local and Outstation Travel:",
            "WhyChoosedescription": "Whether you're organizing a local event or planning an outstation trip, Amruta Travels provides luxury buses suited for both local and long-distance journeys. Our flexibility ensures that you have the right vehicle for any type of travel, making your event or trip as convenient and enjoyable as possible."
        },
        {
            "WhyChooseheading": "Timely Service:",
            "WhyChoosedescription": "Punctuality is crucial, and we take pride in our ability to deliver timely service. Our team ensures that our luxury buses arrive as scheduled, allowing you to adhere to your travel itinerary without delays. We understand the importance of time and strive to meet your schedule with precision."
        },
        {
            "WhyChooseheading": "Trusted by Many:",
            "WhyChoosedescription": "Amruta Travels is a trusted name in the luxury bus rental industry in Pune, known for our reliability and excellence. Our long-standing reputation is built on providing top-notch service and ensuring client satisfaction. Join our growing list of satisfied customers who have experienced the best in luxury travel with us."
        },
        {
            "WhyChooseheading": "Eco-Friendly Options:",
            "WhyChoosedescription": "We are committed to environmental responsibility and offer eco-friendly options within our fleet. Our luxury buses are designed to be fuel-efficient and reduce emissions, contributing to a greener environment while providing you with a comfortable travel experience."
        },
        {
            "WhyChooseheading": "Seamless Booking Process:",
            "WhyChoosedescription": "Booking with Amruta Travels is easy and hassle-free. Our online booking system allows you to reserve your luxury bus quickly and conveniently. Our team is also available to assist with any questions or special arrangements, ensuring a smooth booking experience from start to finish."
        }
    ]
};

const faqData = [
    {
        "question": "What types of luxury buses are available for rent?",
        "answer": "We offer a range of luxury buses, including 14, 17, 20, 25, 32, 35, 40, and 45-seater options. Each bus is equipped with high-end amenities to provide a comfortable and enjoyable travel experience."
    },
    {
        "question": "How can I book a luxury bus with Amruta Travels?",
        "answer": "You can book a luxury bus by contacting us directly via phone or email. Our team will assist you with choosing the right bus and finalizing your rental arrangements."
    },
    {
        "question": "Are the luxury buses equipped with entertainment systems?",
        "answer": "Yes, our luxury buses are equipped with advanced entertainment systems, including audio and video options, to enhance your travel experience."
    },
    {
        "question": "Do you provide luxury buses for outstation trips?",
        "answer": "Yes, we offer luxury buses for both local and outstation trips. Whether you’re traveling within Pune or to other destinations, we have the perfect bus for your journey."
    },
    {
        "question": "Are there customizable packages available for luxury bus rentals?",
        "answer": "Absolutely! We offer customizable rental packages to suit your specific needs and preferences, ensuring that your bus rental is tailored to your event."
    },
    {
        "question": "What amenities are included in the luxury buses?",
        "answer": "Our luxury buses include plush seating, climate control, high-end entertainment systems, and other premium features designed for your comfort and convenience."
    },
    {
        "question": "Can I rent a mini luxury bus?",
        "answer": "Yes, we offer mini luxury buses for smaller groups or short trips, providing a cozy yet luxurious travel option."
    },
    {
        "question": "How do you ensure the quality of your luxury buses?",
        "answer": "Our fleet is regularly maintained and inspected to ensure that every bus is in excellent condition. We prioritize safety and comfort for all our passengers."
    },
    {
        "question": "What is the cost of renting a luxury bus?",
        "answer": "The cost of renting a luxury bus depends on various factors such as the type of bus, rental duration, and destination. Contact us for a customized quote based on your requirements."
    },
    {
        "question": "Can I hire a luxury bus for a picnic?",
        "answer": "Yes, we offer luxury buses for picnics, providing a comfortable and stylish travel experience for your group. Enjoy your outing with all the amenities and comfort of our luxury buses."
    }
];


const testimonials = [
    {
        "name": "Ms. Ananya Patel",
        "text": "Our team’s annual retreat required a touch of luxury, and Amruta Travels delivered beyond our expectations. The bus was a blend of elegance and comfort, equipped with state-of-the-art amenities that made our journey both enjoyable and productive. The driver was courteous and skilled, ensuring a smooth ride throughout. Amruta Travels provided a top-notch experience that truly enhanced our corporate event. Highly recommended for any upscale transportation needs!"
    },
    {
        "name": "Mr. Arjun Mehta",
        "text": "For our recent high-profile event, we chose Amruta Travels for their luxury bus rental service, and it was a fantastic decision. The bus was stylish, spacious, and impeccably clean, adding a touch of sophistication to our event. The service team was incredibly responsive and professional, making the entire process seamless. Our guests were delighted, and the overall experience was flawless. Amruta Travels made a significant impact on the success of our event, and I’ll definitely consider them for future occasions!"
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
        heading: "Luxury Bus Rental in Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Luxury Bus Rental in Pune | 14-45 Seater Bus Hire</title>
  <meta name="description" content="Amruta Travels offers luxury bus rentals in Pune for local and outstation trips. Book 14, 17, 20, 25, 32, 35, 40, and 45-seater buses for picnics, weddings, corporate events, and more. Best rental services in Pune for all your travel needs." />
  <meta name="keywords" content="Luxury Bus Rental in Pimpri Chinchwad, Luxury Bus rental in Kharadi, Luxury Bus On Rent in Yerawada, Amruta Travels Pune, Luxury Bus On Rent in Vishrantwadi Pune, 14 17 20 25 Seater Luxury Bus On Rent Pune, 32 35 40 45 Seater Luxury bus Hire in Pimpri Chinchwad, Luxury Bus On Rent in Hadapsar Pune, Luxury bus on rent for picnic in Pune, Mini luxury bus Hire in Pune, Non AC Bus Rental Service in Pune, Non AC bus for hire for Outstation, Non AC tempo traveller on rent Pune, Non AC bus Hire on Rent in Pune, Non AC mini bus hire on rent in Pune, non AC bus hire for picnic in Pune, best bus rental service in Pune, 32 35 40 45 Seater Local and outstation Bus, 14 17 20 25 Seater bus on rent Pune" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers luxury bus rentals in Pune for local and outstation trips. Book 14, 17, 20, 25, 32, 35, 40, and 45-seater buses for picnics, weddings, corporate events, and more. Best rental services in Pune for all your travel needs.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/luxury-bus-rental-in-pune",
        "logo": "https://amrutatravel.com/images/luxury-bus-rental-pune.jpg",
        "image": "https://amrutatravel.com/images/luxury-bus-rental-pune.jpg",
        "priceRange": "₹4500 - ₹35000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/luxury-bus-rental-in-pune",
          "priceCurrency": "INR",
          "price": "4500",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "300"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ankush Deshmukh"
            },
            "datePublished": "2024-08-10",
            "reviewBody": "We rented a luxury 32-seater bus for a corporate event. The service was impeccable, and the bus was very comfortable. Highly recommend Amruta Travels!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Nisha Patil"
            },
            "datePublished": "2024-07-18",
            "reviewBody": "Booked a luxury bus for a family picnic. The trip was smooth, and the amenities were perfect. The driver was very polite and professional."
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
          "serviceUrl": "https://amrutatravel.com/luxury-bus-rental-in-pune"
        },
        "keywords": "Luxury Bus Rental in Pimpri Chinchwad, Luxury Bus rental in Kharadi, Luxury Bus On Rent in Yerawada, Amruta Travels Pune, Luxury Bus On Rent in Vishrantwadi Pune, 14 17 20 25 Seater Luxury Bus On Rent Pune, 32 35 40 45 Seater Luxury bus Hire in Pimpri Chinchwad, Luxury Bus On Rent in Hadapsar Pune, Luxury bus on rent for picnic in Pune, Mini luxury bus Hire in Pune, Non AC Bus Rental Service in Pune, Non AC bus for hire for Outstation, Non AC tempo traveller on rent Pune, Non AC bus Hire on Rent in Pune, Non AC mini bus hire on rent in Pune, non AC bus hire for picnic in Pune, best bus rental service in Pune, 32 35 40 45 Seater Local and outstation Bus, 14 17 20 25 Seater bus on rent Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-42.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs: Luxury Bus Rental in Pune:</h3>
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
export default LuxuryBusRentalInPune;