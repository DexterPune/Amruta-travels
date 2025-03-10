
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusHireNearMe(){

  const cardData = 
    {
      keyword: 'Bus Hire Near me Pune ',
      heading: 'Amruta Travels: Bus Hire Near me Pune',

      headingDescription: 'Looking for reliable and convenient bus hire services in Pune? Amruta Travels offers a diverse range of bus rental options to meet all your transportation needs. Whether you are organizing a corporate event, planning a family outing, or need transportation for a special occasion, we have the perfect bus rental solution for you. Here’s a guide to the top bus hire options available near you with Amruta Travels in Pune.',

      top:"Top Bus Hire Near me Pune:",
       topPlaces : [
        {
            "title": "Standard 20-Seater Bus on Rent in Pune:",
            "description": "Our standard 20-seater bus is ideal for smaller groups who need comfortable transportation. Perfect for family outings, school trips, or local tours, this bus provides cozy seating and essential amenities to ensure a pleasant journey within Pune."
        },
        {
            "title": "30-Seater Bus on Rent in Pune:",
            "description": "The 30-seater bus is a versatile option for medium-sized groups. Whether for corporate events, group outings, or local sightseeing, this bus offers ample space and comfort. It’s an excellent choice for various group travel needs in Pune."
        },
        {
            "title": "32-Seater Bus on Rent in Pune:",
            "description": "For larger groups, the 32-seater bus offers extra room and comfort. It’s well-suited for extended local trips or special events in Pune, providing a balance of space and amenities to accommodate diverse travel needs."
        },
        {
            "title": "35-Seater Bus on Rent in Pune:",
            "description": "Our 35-seater bus is designed for even larger groups, ensuring spacious and comfortable travel. Ideal for corporate functions, school excursions, or community events, this bus guarantees a smooth and enjoyable journey across Pune."
        },
        {
            "title": "40-Seater Bus on Rent in Pune:",
            "description": "The 40-seater bus accommodates larger groups comfortably, making it perfect for big family events, corporate retreats, or major local tours. With plenty of room and modern amenities, this bus ensures a pleasant travel experience."
        },
        {
            "title": "50-Seater Bus on Rent in Pune:",
            "description": "Our largest option, the 50-seater bus, is ideal for very large groups. Suitable for extensive local travel, corporate events, or large family gatherings, this bus provides maximum comfort and space for everyone to travel together comfortably."
        },
        {
            "title": "Mini Bus (15-Seater) on Rent in Pune:",
            "description": "For more intimate settings, our 15-seater mini bus is a great choice. Perfect for smaller group outings, local tours, or short trips around Pune, it offers a cozy and efficient travel solution with comfortable seating."
        },
        {
            "title": "Luxury Bus on Rent in Pune:",
            "description": "Experience premium travel with our luxury bus rental. Equipped with high-end amenities such as plush seating, advanced entertainment systems, and superior comfort, this bus is ideal for special occasions, corporate events, or luxurious local tours."
        },
        {
            "title": "AC Bus on Rent in Pune:",
            "description": "Travel comfortably with our AC bus rentals. Our air-conditioned buses ensure a cool and pleasant environment, especially during Pune’s warmer months. Perfect for local travel, this option enhances your journey with added comfort."
        },
        {
            "title": "Non-AC Bus on Rent in Pune:",
            "description": "For a budget-friendly option, consider our non-AC bus rentals. While economical, these buses provide reliable and comfortable transportation for local travel. Ideal for groups seeking a cost-effective solution without compromising on quality."
        }
    ],
    
   "services": [
    {
      "name": "Bus Rental in Katraj, Pune:",
      "description": "Looking for a reliable bus hire service in Katraj, Pune? Amruta Travels offers top-notch bus rental solutions tailored to meet your needs. Whether you're planning a corporate event, school trip, or family outing, we have a variety of buses to choose from. Our fleet includes luxury, semi-luxury, and standard buses, ensuring comfort and safety for all passengers. Book with us for punctual service and competitive rates."
    },
    {
      "name": "Bus on Rent in Koregaon Park, Pune:",
      "description": "For those in Koregaon Park, Pune, Amruta Travels provides excellent bus rental services. Our buses are well-maintained, comfortable, and perfect for any occasion, including corporate events, weddings, and local tours. With options ranging from AC to non-AC buses, we cater to all preferences and budgets. Enjoy a hassle-free booking experience and reliable transport with Amruta Travels."
    },
    {
      "name": "Amruta Travels Pune:",
      "description": "Amruta Travels is your go-to provider for bus rentals in Pune. We offer a diverse fleet of vehicles, including 35, 36, 40, and 50-seater buses, tailored to your specific needs. Our experienced drivers and customer-oriented service ensure that your journey is smooth and enjoyable. From corporate trips to family outings, trust Amruta Travels for all your transportation needs in Pune."
    },
    {
      "name": "Bus on Rent in Pimple Gurav, Pune:",
      "description": "Searching for a bus rental in Pimple Gurav, Pune? Amruta Travels offers a variety of options to suit different group sizes and requirements. Our fleet includes well-maintained buses with comfortable seating, ensuring a pleasant journey for your group. Whether it's a local event or an outstation trip, we provide reliable and affordable bus hire solutions."
    },
    {
      "name": "35, 36, 40, 50 Seater Bus Rental in Pimpri:",
      "description": "Amruta Travels offers a wide range of bus rental options in Pimpri, including 35, 36, 40, and 50-seater buses. Perfect for corporate events, weddings, or large group outings, our buses come with various amenities to ensure a comfortable journey. Book with us for a stress-free and enjoyable travel experience in Pimpri."
    },
    {
      "name": "Bus on Rent in Hadapsar, Pune:",
      "description": "For bus rentals in Hadapsar, Pune, look no further than Amruta Travels. We provide well-maintained and comfortable buses suitable for various events and group sizes. Our reliable service and competitive pricing make us the preferred choice for all your transportation needs in Hadapsar."
    },
    {
      "name": "Bus on Rent in Wagholi, Pune:",
      "description": "Amruta Travels offers convenient bus rental services in Wagholi, Pune. Whether you need a bus for a corporate event, wedding, or family trip, our fleet is ready to meet your needs. With options for different sizes and types of buses, we ensure comfort and reliability for your journey."
    },
    {
      "name": "Hire Bus on Rent at Pune Airport:",
      "description": "Need a bus rental service at Pune Airport? Amruta Travels provides efficient and reliable transportation solutions for airport transfers. Our fleet includes a range of buses to accommodate different group sizes, ensuring a smooth and comfortable ride to and from the airport."
    },
    {
      "name": "Bus on Rent in Lohegaon, Pune:",
      "description": "Amruta Travels offers exceptional bus rental services in Lohegaon, Pune. Our buses are well-equipped to handle various group sizes and travel needs. Whether it's for a corporate function, school trip, or family outing, trust us for comfortable and reliable bus hire."
    },
    {
      "name": "AC Bus on Rent in Wanowrie, Pune:",
      "description": "For an AC bus rental in Wanowrie, Pune, Amruta Travels has you covered. Our fleet of air-conditioned buses ensures a comfortable and pleasant journey, regardless of the weather. Ideal for corporate events, family trips, and more, our AC buses provide a premium travel experience."
    },
    {
      "name": "Bus Hire in Hinjewadi IT Park:",
      "description": "Amruta Travels provides reliable bus hire services in Hinjewadi IT Park. Whether you need transportation for corporate events, office transfers, or team outings, our fleet of buses is designed to meet your needs. Enjoy comfort, punctuality, and affordability with our professional bus rental service."
    },
    {
      "name": "AC Bus on Rent in Kothrud, Pune:",
      "description": "Looking for an AC bus rental in Kothrud, Pune? Amruta Travels offers a range of air-conditioned buses to ensure a comfortable and enjoyable journey. Perfect for corporate events, weddings, or group travel, our AC buses provide a premium experience with top-notch amenities."
    },
    {
      "name": "Tempo Traveller on Rent Near Me:",
      "description": "Searching for a tempo traveller on rent near you? Amruta Travels offers convenient tempo traveller rentals throughout Pune. Ideal for smaller groups or special trips, our tempo travellers are well-maintained and equipped with all the necessary amenities for a comfortable journey."
    },
    {
      "name": "17 Seater Bus on Rent Near Me Pune:",
      "description": "Need a 17-seater bus on rent in Pune? Amruta Travels provides a range of options to fit your group size and travel needs. Our 17-seater buses are perfect for smaller groups, ensuring comfort and convenience for all passengers."
    },
    {
      "name": "Bus Hire Near Me Pimpri Chinchwad:",
      "description": "For bus hire services near Pimpri Chinchwad, Amruta Travels offers reliable and affordable options. Our fleet includes various sizes and types of buses to suit your needs, whether for corporate events, school trips, or family outings."
    },
    {
      "name": "Bus Hire Near Me Kothrud Pune:",
      "description": "Amruta Travels provides excellent bus hire services near Kothrud, Pune. With a range of buses available, including luxury and standard options, we cater to different group sizes and travel needs. Experience comfort and reliability with our professional bus rental services."
    },
    {
      "name": "Tempo Traveller on Rent Near Me Pune:",
      "description": "Looking for a tempo traveller on rent near you in Pune? Amruta Travels offers a variety of tempo travellers for different group sizes and travel requirements. Our well-maintained vehicles ensure a comfortable and enjoyable journey for all passengers."
    },
    {
      "name": "Mini Bus on Rent in Pune Near Me:",
      "description": "For mini bus rentals in Pune, Amruta Travels provides convenient and reliable options. Ideal for smaller groups or local travel, our mini buses are equipped with modern amenities to ensure a pleasant journey. Book with us for comfortable and affordable mini bus rentals near you."
    },
    {
      "name": "Bus Hire Near me Pune Contact Number:",
      "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus Hire Near me Pune. We ensure a smooth and enjoyable ride for all our customers."
    }
],


"tableData": [
    ["-Bus Hire on Rent in Katraj Pune", "-Bus On Rent in Koregaon Park Pune"],
    ["-Amruta Travels Pune", "-Bus On Rent in Pimple Gurav Pune"],
    ["-35, 36, 40, 50 Seater Bus Rental in Pimpri", "-Bus On Rent in Hadapsar"],
    ["-Bus on Rent in Wagholi", "-Hire Bus on Rent in Pune Airport"],
    ["-Bus On Rent in Lohegaon Pune", "-AC Bus On Rent in Wanowrie Pune"],
    ["-Bus Hire in Hinjewadi IT Park", "-AC Bus On Rent in Kothrud Pune"],
    ["-Tempo Traveller on Rent Near Me", "-17 Seater Bus on Rent Near Me Pune"],
    ["-Bus Hire Near Me Pimpri Chinchwad", "-Bus Hire Near Me Kothrud Pune"],
    ["-Tempo Traveller on Rent Near Me Pune", "-Mini Bus on Rent in Pune Near Me"]
  ],


  "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Bus on Rent in Pune?",
      "WhyChoosedescription": "Amruta Travels offers exceptional bus rental services in Pune, catering to various needs with a focus on comfort, safety, and affordability."
    },
    {
      "WhyChooseheading": "Comprehensive Fleet:",
      "WhyChoosedescription": "Our fleet includes a wide range of buses, from luxury coaches to standard options, accommodating various group sizes and preferences. Whether you need a 17-seater bus for a small group or a 50-seater bus for a large event, we have the perfect vehicle for you."
    },
    {
      "WhyChooseheading": "Comfort & Convenience:",
      "WhyChoosedescription": "All our buses are well-maintained and equipped with modern amenities such as comfortable seating, air conditioning, and entertainment systems. We prioritize passenger comfort to ensure a pleasant travel experience."
    },
    {
      "WhyChooseheading": "Professional Drivers:",
      "WhyChoosedescription": "Our team of experienced and professional drivers is dedicated to providing safe and smooth transportation. They are knowledgeable about local routes and are committed to punctuality and customer service."
    },
    {
      "WhyChooseheading": "Transparent Pricing:",
      "WhyChoosedescription": "At Amruta Travels, we offer competitive and transparent pricing with no hidden fees. Our pricing structure is designed to provide excellent value for money while maintaining high service standards."
    },
    {
      "WhyChooseheading": "Flexible Booking Options:",
      "WhyChoosedescription": "We offer flexible booking options to suit your needs, whether you require a bus for a few hours, a full day, or multiple days. Our easy booking process ensures a hassle-free experience."
    },
    {
      "WhyChooseheading": "24/7 Customer Support:",
      "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with bookings, queries, and any issues that may arise. We are committed to providing timely and responsive support."
    },
    {
      "WhyChooseheading": "Punctuality:",
      "WhyChoosedescription": "We understand the importance of time and strive to ensure that our buses arrive on time and adhere to your schedule. Our reliable service helps you stay on track and enjoy a stress-free journey."
    },
    {
      "WhyChooseheading": "Tailored Services:",
      "WhyChoosedescription": "Whether it’s for corporate events, school trips, family outings, or special occasions, we tailor our services to meet your specific requirements. Our goal is to provide a customized experience that matches your needs."
    }
  ]
};
const faqData = [
    {
        "question": "What types of buses are available for hire?",
        "answer": "Amruta Travels offers a variety of buses, including luxury coaches, semi-luxury buses, and standard options. We have buses that accommodate different group sizes, from 17-seaters to 50-seaters."
    },
    {
        "question": "How do I book a bus with Amruta Travels?",
        "answer": "You can book a bus through our website, by calling our customer service hotline, or by visiting our office. We recommend booking in advance to secure the best vehicle for your needs."
    },
    {
        "question": "Are your buses well-maintained and clean?",
        "answer": "Yes, all our buses are regularly maintained and thoroughly cleaned to ensure a comfortable and hygienic travel experience. We take great care in maintaining the quality of our fleet."
    },
    {
        "question": "What amenities are included in the buses?",
        "answer": "Our buses come equipped with amenities such as comfortable seating, air conditioning, and entertainment systems. The specific amenities may vary depending on the type of bus you choose."
    },
    {
        "question": "How much does it cost to hire a bus?",
        "answer": "Our pricing is competitive and varies based on factors such as the type of bus, duration of hire, and distance traveled. We provide transparent pricing with no hidden charges."
    },
    {
        "question": "Can I hire a bus for an outstation trip?",
        "answer": "Yes, we offer bus hire services for both local and outstation trips. Whether you're planning a day trip or a longer journey, we can accommodate your travel needs."
    },
    {
        "question": "What is your cancellation policy?",
        "answer": "We have a cancellation policy in place. You can cancel your booking, but cancellation charges may apply depending on the timing of the cancellation. Please contact our customer support for more details."
    },
    {
        "question": "Are your drivers experienced and professional?",
        "answer": "Yes, all our drivers are experienced, professional, and trained to provide safe and reliable transportation. They are familiar with local routes and committed to ensuring a smooth journey."
    },
    {
        "question": "Do you offer 24/7 customer support?",
        "answer": "Yes, our customer support team is available 24/7 to assist with bookings, answer queries, and address any issues you may encounter."
    },
    {
        "question": "Can I request a specific bus for my trip?",
        "answer": "We will do our best to accommodate your request for a specific type of bus based on availability. Please provide your requirements when making a booking, and we will work to meet your needs."
    }
];




const testimonials = [
    {
        "name": "Mr. Arvind Sharma",
        "text": "Amruta Travels made our recent corporate event a complete success! We hired a 40-seater bus for our team outing, and the experience was top-notch. The booking process was straightforward, and the bus arrived on time. It was clean, comfortable, and equipped with all the necessary amenities. The driver was professional and friendly, ensuring a smooth and enjoyable journey for everyone. I highly recommend Amruta Travels for reliable bus hire services in Pune."
    },
    {
        "name": "Miss Priya Salunkhe",
        "text": "I was extremely satisfied with the bus rental service from Amruta Travels for my family’s trip to Lonavala. We needed a 35-seater bus, and they provided a well-maintained and comfortable vehicle. The driver was courteous and knowledgeable about the best routes, making our trip hassle-free. The whole process, from booking to the actual journey, was seamless. If you're looking for dependable bus hire near Pune, Amruta Travels is definitely the way to go!"
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
        heading: "Bus Hire Near me Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Hire Near Me Pune | Mini Bus, Tempo Traveller & AC Bus Rentals</title>
  <meta name="description" content="Looking for bus hire near you in Pune? Rent buses, tempo travellers, and AC buses for local, corporate, and sightseeing trips in Pune. Hire buses from Katraj, Koregaon Park, Hadapsar, Wagholi, Lohegaon, and more." />
  <meta name="keywords" content="Bus Hire Near Me Pune, Bus Rental Near Me, Bus On Rent in Katraj Pune, Bus On Rent in Koregaon Park Pune, Bus On Rent in Pimple Gurav Pune, 35, 36, 40, 50 Seater Bus Rental in Pimpri, Bus On Rent in Hadapsar, Bus On Rent in Wagholi, Bus Hire Near Pune Airport, Bus On Rent in Lohegaon Pune, AC Bus On Rent in Wanowrie Pune, Bus Hire in Hinjewadi IT Park, AC Bus On Rent in Kothrud Pune, Tempo Traveller on Rent Near Me Pune, 17 Seater Bus on Rent Near Me Pune, Bus Hire Near Me Pimpri Chinchwad, Bus Hire Near Me Kothrud Pune, Mini Bus on Rent Near Me Pune, Tempo Traveller Near Me Pune" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels provides bus, mini bus, and tempo traveller rentals near you in Pune. Rent for local trips, corporate events, sightseeing tours, and more across Katraj, Koregaon Park, Hadapsar, and beyond.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-hire-near-me-pune",
        "logo": "https://amrutatravel.com/images/bus-hire-pune.jpg",
        "image": "https://amrutatravel.com/images/bus-hire-pune.jpg",
        "priceRange": "₹2000 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-hire-near-me-pune",
          "priceCurrency": "INR",
          "price": "2000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "150"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Pawar"
            },
            "datePublished": "2024-08-12",
            "reviewBody": "Booked a 35-seater for a corporate event in Kothrud. Great service, well-maintained buses, and professional staff."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Nina Gupta"
            },
            "datePublished": "2024-09-05",
            "reviewBody": "The tempo traveller was perfect for our family trip from Pune to Sinhagad Fort. Comfortable ride and great driver!"
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
          "serviceUrl": "https://amrutatravel.com/bus-hire-near-me-pune"
        },
        "keywords": "Bus Hire Near Me Pune, Bus Rental Near Me, Bus On Rent in Katraj Pune, Bus On Rent in Koregaon Park Pune, Bus On Rent in Pimple Gurav Pune, 35, 36, 40, 50 Seater Bus Rental in Pimpri, Bus On Rent in Hadapsar, Bus On Rent in Wagholi, Bus Hire Near Pune Airport, Bus On Rent in Lohegaon Pune, AC Bus On Rent in Wanowrie Pune, Bus Hire in Hinjewadi IT Park, AC Bus On Rent in Kothrud Pune, Tempo Traveller on Rent Near Me Pune, 17 Seater Bus on Rent Near Me Pune, Bus Hire Near Me Pimpri Chinchwad, Bus Hire Near Me Kothrud Pune, Mini Bus on Rent Near Me Pune, Tempo Traveller Near Me Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-68.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for “Bus Hire Near Me Pune” – Amruta Travels:</h3>
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
export default BusHireNearMe;