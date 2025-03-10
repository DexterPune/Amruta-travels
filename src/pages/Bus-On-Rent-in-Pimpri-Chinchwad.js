
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusOnRentInPimpariChinchwad(){

  const cardData = 
    {
      keyword: 'Bus on Rent in Pimpri Chinchwad ',
      heading: 'Amruta Travels: Bus on Rent in Pimpri Chinchwad ',

      headingDescription: 'Amruta Travels offers exceptional bus rental services in Pimpri Chinchwad, catering to various needs from corporate events to family outings. Our fleet is designed to provide comfort, convenience, and reliability, making us the top choice for bus rentals in the area. Here’s a look at the top reasons to choose Amruta Travels for your next bus rental in Pimpri Chinchwad.',

      top:"Top Features Bus On Rent in Pimpri Chinchwad:",
      topPlaces: [
    {
        "title": "Diverse Fleet:",
        "description": "Amruta Travels offers a wide range of buses on rent, including luxury coaches, standard buses, and mini-buses. Whether you need a 17-seater mini-bus or a 40-seater luxury coach, we have the perfect vehicle to suit your needs."
    },
    {
        "title": "Affordable Rates:",
        "description": "Our competitive pricing ensures you get the best value for your money. We provide transparent pricing with no hidden fees, making it easy to budget for your event or trip."
    },
    {
        "title": "Comfortable Interiors:",
        "description": "Our buses come equipped with comfortable seating, air conditioning, and modern amenities to ensure a pleasant journey. Each vehicle is meticulously maintained to provide the highest standards of comfort and safety."
    },
    {
        "title": "Experienced Drivers:",
        "description": "Our professional drivers are well-trained and experienced, ensuring a safe and timely arrival at your destination. They are familiar with all major routes and traffic patterns in and around Pimpri Chinchwad."
    },
    {
        "title": "Customizable Packages:",
        "description": "We offer customizable rental packages to cater to various types of events, including corporate functions, weddings, family picnics, and school trips. Tailor the service to meet your specific requirements."
    },
    {
        "title": "Timely Service:",
        "description": "Punctuality is a priority for us. We guarantee timely pick-ups and drop-offs, ensuring your plans proceed as scheduled without any delays."
    },
    {
        "title": "Safety First:",
        "description": "Passenger safety is paramount. Our buses undergo regular maintenance and safety checks to ensure they are in top condition. We adhere to all safety regulations and guidelines to provide a secure travel experience."
    },
    {
        "title": "Flexible Booking Options:",
        "description": "We offer flexible booking options to accommodate last-minute changes or special requests. Whether you need a bus for a few hours or several days, we can adjust to your needs."
    },
    {
        "title": "Excellent Customer Support:",
        "description": "Our dedicated customer support team is available to assist with any queries or concerns. From the booking process to the end of your journey, we provide comprehensive support to ensure a smooth experience."
    },
    {
        "title": "Positive Reviews:",
        "description": "Amruta Travels has a proven track record of satisfied customers. Our positive reviews reflect our commitment to delivering top-notch bus rental services in Pimpri Chinchwad."
    }
],

   "services": [
        {
            "name": "Bus Hire in Hinjewadi Pune",
            "description": "Discover reliable and comfortable bus hire services in Hinjewadi, Pune with Amruta Travels. We offer a variety of buses for rent, ideal for corporate events, team outings, and more. Enjoy timely service, competitive rates, and a fleet of well-maintained vehicles tailored to meet your travel needs."
        },
        {
            "name": "Bus on Rent in Aundh Pune",
            "description": "Amruta Travels provides premium bus rental services in Aundh, Pune. Whether you need a bus for a family gathering, corporate event, or special occasion, we have the right vehicle for you. Our buses are equipped with modern amenities to ensure a comfortable journey."
        },
        {
            "name": "Amruta Travels Pune",
            "description": "At Amruta Travels, we offer top-notch bus rental services throughout Pune. Our fleet includes a range of vehicles from mini buses to luxury coaches, designed to accommodate any group size and travel requirement. With a focus on customer satisfaction, we ensure a hassle-free experience for all our clients."
        },
        {
            "name": "Bus on Rent in Baner Pune",
            "description": "Rent a bus in Baner, Pune, with Amruta Travels for your next event or outing. Our fleet includes various bus sizes and styles, providing comfort and convenience for groups of all sizes. We offer flexible booking options and competitive pricing to suit your needs."
        },
        {
            "name": "Bus on Rent in Bhosari Pune",
            "description": "Looking for bus rental services in Bhosari, Pune? Amruta Travels offers a diverse range of buses for rent, ensuring you find the perfect vehicle for your requirements. From corporate events to family trips, our buses provide reliable and comfortable transportation."
        },
        {
            "name": "Mini Bus on Rent in Talawade Pune",
            "description": "For smaller groups or short trips, Amruta Travels offers mini buses on rent in Talawade, Pune. Our mini buses are ideal for local events, school outings, or private gatherings, providing a comfortable and economical travel solution."
        },
        {
            "name": "Tempo Traveller on Rent in Pimpri Chinchwad",
            "description": "Amruta Travels provides tempo travellers on rent in Pimpri Chinchwad for those needing more space and comfort. Ideal for group travel, our tempo travellers offer ample seating and luggage space, making them perfect for both short and long journeys."
        },
        {
            "name": "17 Seater Bus on Rent in Akurdi Pune",
            "description": "Rent a 17-seater bus in Akurdi, Pune with Amruta Travels for an intimate group experience. Our well-maintained buses offer comfort and style for various events, including family outings, corporate trips, and more."
        },
        {
            "name": "14, 17, 20, 25 Seater Bus Hire in Pimpri Chinchwad",
            "description": "Choose from our range of 14, 17, 20, and 25-seater buses available for hire in Pimpri Chinchwad. Amruta Travels offers flexible and affordable bus rental solutions to cater to different group sizes and travel needs."
        },
        {
            "name": "32, 35, 40, 45 Seater Bus Hire in Pimpri Chinchwad",
            "description": "For larger groups, Amruta Travels provides 32, 35, 40, and 45-seater buses in Pimpri Chinchwad. Our spacious and comfortable buses are perfect for corporate events, weddings, and other large gatherings."
        },
        {
            "name": "Bus on Rent in Wakad Pune",
            "description": "Rent a bus in Wakad, Pune with Amruta Travels for reliable and comfortable transportation. Our extensive fleet ensures that you find the right bus for your event, with options ranging from mini buses to large coaches."
        },
        {
            "name": "Bus on Rent in Pimple Gurav Pune",
            "description": "Amruta Travels offers bus rental services in Pimple Gurav, Pune. Our buses are perfect for any occasion, providing comfort and convenience for group travel. Enjoy affordable rates and excellent service with our diverse fleet."
        },
        {
            "name": "Urbania Bus on Rent in Pimpri Chinchwad",
            "description": "Experience premium travel with Urbania buses on rent in Pimpri Chinchwad from Amruta Travels. Ideal for special events and high-profile gatherings, our Urbania buses offer luxury and comfort for an exceptional travel experience."
        },
        {
            "name": "Bus on Rent in Pimple Gurav",
            "description": "Looking for a reliable bus rental service in Pimple Gurav? Amruta Travels offers comfortable and well-maintained buses for various needs, including local events, group outings, and more. Our buses are designed to accommodate different group sizes and ensure a smooth and enjoyable travel experience. Trust us to handle your transportation needs with professionalism and care."
        },
        {
            "name": "Bus on Rent in Akurdi",
            "description": "Amruta Travels provides top-notch bus rental services in Akurdi, perfect for both local and outstation travel. Our buses are equipped with modern amenities to ensure comfort and convenience for your journey. Whether you’re organizing a corporate event, a family gathering, or a school trip, our bus rental service in Akurdi has you covered."
        },
        {
            "name": "Bus on Rent in Baner Aundh",
            "description": "For bus rentals in Baner Aundh, Amruta Travels offers a range of options to meet your travel requirements. Our buses are ideal for group travel, whether it’s for a local tour, an outing, or any special event. With a focus on comfort and reliability, our bus rental service ensures a pleasant and efficient travel experience."
        },
        {
            "name": "17-Seater Tempo Traveller on Rent in Pimpri Chinchwad",
            "description": "If you need a comfortable and compact vehicle for group travel in Pimpri Chinchwad, consider renting a 17-seater tempo traveller from Amruta Travels. Our tempo travellers are perfect for medium-sized groups, offering a comfortable ride with modern amenities. Enjoy a flexible and convenient travel solution with our well-maintained 17-seater tempo travellers."
        },
        {
            "name": "Mini Bus on Rent in Pimpri Chinchwad",
            "description": "Amruta Travels offers mini bus rentals in Pimpri Chinchwad, providing an ideal solution for medium-sized groups. Our mini buses are perfect for family outings, corporate events, or any group activity requiring comfortable and reliable transportation. Experience a smooth and enjoyable journey with our top-quality mini bus rental service."
        },
        {
            "name": "Urbania on Rent in Pimpri Chinchwad",
            "description": "For a luxurious and premium travel experience, rent an Urbania from Amruta Travels in Pimpri Chinchwad. Our Urbania service offers a high level of comfort and style, making it ideal for special occasions and corporate events. Enjoy the benefits of a modern and well-equipped vehicle with our Urbania rental service."
        },
        {
            "name": "Bus On Rent in Pimpri Chinchwad Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus On Rent in Pimpri Chinchwad. We ensure a smooth and enjoyable ride for all our customers with our reliable and well-maintained buses."
        }
    ],

    "tableData": [
        ["-Bus Hire in Hinjewadi Pune", "-Bus on Rent in Aundh Pune"],
        ["-Bus On Rent in Baner Pune", "-Bus On Rent in Bhosari Pune"],
        ["-Mini Bus On Rent in Talawade Pune", "-Tempo Traveller on Rent in Pimpri Chinchwad"],
        ["-17 Seater Bus on Rent in Akurdi Pune", "-14, 17, 20, 25 Seater Bus Hire in Pimpri Chinchwad"],
        ["-32, 35, 40, 45 Seater Bus Hire in Pimpri Chinchwad", "-Bus On Rent in Wakad Pune"],
        ["-Bus on Rent in Pimple Gurav Pune", "-Urbania Bus on Rent in Pimpri Chinchwad"],
        ["-Bus on Rent in Pimple Gurav", "-Bus on Rent in Akurdi"],
        ["-Bus on Rent in Baner Aundh", "-17 Seater Tempo Traveller on Rent in Pimpri Chinchwad"],
        ["-Mini Bus On Rent in Pimpri Chinchwad", "-Urbania on Rent in Pimpri Chinchwad"],
        ["-Amruta Travels Pune", ""]
      ],

   "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Bus On Rent in Pimpri Chinchwad?",
            "WhyChoosedescription": "Amruta Travels is your top choice for bus rental services in Pimpri Chinchwad. We ensure a seamless and comfortable travel experience, with a diverse fleet and exceptional service to meet all your transportation needs."
        },
        {
            "WhyChooseheading": "Comprehensive Fleet:",
            "WhyChoosedescription": "At Amruta Travels, we offer a diverse fleet of buses for rent in Pimpri Chinchwad, including mini buses, luxury coaches, and large buses. Our extensive selection ensures that we have the right vehicle to meet your group size and travel needs."
        },
        {
            "WhyChooseheading": "Affordable Rates:",
            "WhyChoosedescription": "We provide competitive pricing without compromising on quality. Our transparent pricing structure ensures that you get value for your money, making your travel experience both cost-effective and enjoyable."
        },
        {
            "WhyChooseheading": "Reliable Service:",
            "WhyChoosedescription": "Timeliness and reliability are our top priorities. We pride ourselves on punctual service, ensuring that our buses arrive on time and that your journey is smooth and hassle-free."
        },
        {
            "WhyChooseheading": "Modern Amenities:",
            "WhyChoosedescription": "Our buses are equipped with modern amenities such as comfortable seating, air conditioning, and entertainment systems. We ensure that every ride is comfortable and enjoyable for our passengers."
        },
        {
            "WhyChooseheading": "Professional Drivers:",
            "WhyChoosedescription": "Our experienced and professional drivers are well-trained to handle various travel situations. They prioritize safety and customer satisfaction, providing a secure and pleasant travel experience."
        },
        {
            "WhyChooseheading": "Customized Solutions:",
            "WhyChoosedescription": "We understand that every trip is unique. Whether it's a corporate event, wedding, or group outing, we offer tailored solutions to meet your specific requirements and preferences."
        },
        {
            "WhyChooseheading": "Excellent Customer Support:",
            "WhyChoosedescription": "Our dedicated customer support team is available to assist you with any queries or concerns. We are committed to providing exceptional service from booking to the end of your journey."
        },
        {
            "WhyChooseheading": "Clean and Well-Maintained Vehicles:",
            "WhyChoosedescription": "We ensure that all our buses are regularly cleaned and maintained to the highest standards. This commitment to cleanliness and upkeep guarantees a comfortable and hygienic travel environment."
        },
        {
            "WhyChooseheading": "Flexible Booking Options:",
            "WhyChoosedescription": "We offer flexible booking options to accommodate changes in your travel plans. Our user-friendly booking process makes it easy to reserve a bus that suits your schedule and needs."
        },
        {
            "WhyChooseheading": "Local Expertise:",
            "WhyChoosedescription": "As a local service provider, we have in-depth knowledge of Pimpri Chinchwad and its surroundings. This local expertise allows us to offer valuable insights and recommendations for your journey."
        }
    ]
};

const faqData = [
    {
        "question": "What types of buses are available for rent in Pimpri Chinchwad?",
        "answer": "We offer a variety of buses for rent in Pimpri Chinchwad, including mini buses, luxury coaches, and larger buses. Whether you need a small vehicle for a few passengers or a large coach for a big group, we have options to suit your needs."
    },
    {
        "question": "How do I book a bus rental with Amruta Travels?",
        "answer": "Booking a bus rental with us is simple. You can contact us directly via phone or email, or use our online booking system. Provide us with details about your trip, such as the date, time, and destination, and we will assist you in reserving the right bus for your needs."
    },
    {
        "question": "Are your buses equipped with amenities?",
        "answer": "Yes, our buses are equipped with modern amenities to ensure a comfortable journey. Depending on the bus type, amenities may include air conditioning, comfortable seating, entertainment systems, and more."
    },
    {
        "question": "What is the pricing structure for bus rentals?",
        "answer": "Our pricing is competitive and varies depending on factors such as the type of bus, rental duration, and distance. We provide transparent pricing with no hidden costs. For a detailed quote, please contact us with your specific requirements."
    },
    {
        "question": "Are your drivers experienced and professional?",
        "answer": "Yes, all our drivers are experienced and professional. They are trained to handle various travel situations and prioritize safety and customer satisfaction."
    },
    {
        "question": "Can I make changes to my booking after it is confirmed?",
        "answer": "Yes, we offer flexible booking options. If you need to make changes to your reservation, please contact us as soon as possible, and we will assist you in adjusting your booking."
    },
    {
        "question": "How do you ensure the cleanliness and maintenance of your buses?",
        "answer": "We take cleanliness and maintenance very seriously. Our buses are regularly cleaned and maintained to ensure they meet high standards of hygiene and safety."
    },
    {
        "question": "What should I do if I have a problem during the journey?",
        "answer": "If you encounter any issues during your journey, please contact our customer support team immediately. We are available to address any concerns and ensure that your travel experience remains pleasant."
    },
    {
        "question": "Do you offer special packages for corporate events or large groups?",
        "answer": "Yes, we offer customized packages for corporate events, weddings, and large groups. Contact us to discuss your specific requirements, and we will tailor a package that suits your needs."
    },
    {
        "question": "How far in advance should I book a bus?",
        "answer": "To ensure availability and the best rates, we recommend booking your bus as early as possible. For peak times or special events, booking well in advance is especially important."
    }
];



const testimonials = [
    {
        "name": "Mr. Rajesh Patel",
        "text": "We recently rented a bus from Amruta Travels for a corporate team outing in Pimpri Chinchwad, and we couldn't be happier with the service. The booking process was smooth, the bus was pristine, and the driver was both professional and courteous. Our team had a comfortable and enjoyable journey, thanks to Amruta Travels. We highly recommend their services for any group travel needs!"
    },
    {
        "name": "Ms. Priya Deshmukh",
        "text": "I organized a family reunion and chose Amruta Travels for our bus rental in Pimpri Chinchwad. From start to finish, their service was exceptional. The mini bus we rented was well-maintained, and the amenities provided made our trip enjoyable. The driver was friendly and knew the best routes to avoid traffic. Thank you, Amruta Travels, for making our family gathering so memorable!"
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
        heading: "Bus On Rent in Pimpri Chinchwad Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus On Rent in Pimpri Chinchwad | Mini Bus, Tempo Traveller, & Luxury Bus Hire</title>
  <meta name="description" content="Book buses, mini buses, and tempo travellers for rent in Pimpri Chinchwad, Pune. We offer affordable bus hire services for local, outstation trips, and events in areas like Aundh, Wakad, Baner, Akurdi, and more." />
  <meta name="keywords" content="Bus hire in Hinjewadi Pune, Bus on Rent in Aundh Pune, Amruta Travels Pune, Bus On Rent in Baner Pune, Bus On Rent in Bhosari Pune, Mini Bus On Rent in Talawade Pune, Tempo Traveller on rent in Pimpri Chinchwad, 17 Seater bus on Rent in Akurdi Pune, 14 17 20 25 Seater Bus Hire in Pimpri Chinchwad, 32 35 40 45 Seater Bus Hire in Pimpri Chinchwad, Bus On Rent in Wakad Pune, Bus on Rent in Pimple Gurav Pune, Urbania bus on rent in Pimpri Chinchwad, bus on rent in Pimple Gurav, bus on rent in Akurdi, bus on rent in Baner Aundh, 17 seater tempo traveller on rent in Pimpri Chinchwad, Mini Bus On Rent in Pimpri Chinchwad, Urbania on rent in Pimpri Chinchwad" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels provides affordable bus, mini bus, and tempo traveller rentals in Pimpri Chinchwad, Pune. We offer buses for local and outstation tours, events, picnics, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-on-rent-in-pimpri-chinchwad",
        "logo": "https://amrutatravel.com/images/bus-on-rent-in-pimpri-chinchwad.jpg",
        "image": "https://amrutatravel.com/images/bus-on-rent-in-pimpri-chinchwad.jpg",
        "priceRange": "₹4500 - ₹35000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-on-rent-in-pimpri-chinchwad",
          "priceCurrency": "INR",
          "price": "4500",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "305"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Kumar"
            },
            "datePublished": "2024-07-25",
            "reviewBody": "We booked a 17-seater bus from Pimpri Chinchwad. The ride was comfortable, and the service was professional. Will definitely recommend Amruta Travels."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Seema Deshmukh"
            },
            "datePublished": "2024-05-10",
            "reviewBody": "The bus we rented for a family event in Pimpri Chinchwad was very clean and well-maintained. The driver was punctual and courteous."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pimpri Chinchwad",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.6267",
            "longitude": "73.7963"
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://amrutatravel.com/bus-on-rent-in-pimpri-chinchwad"
        },
        "keywords": "Bus hire in Hinjewadi Pune, Bus on Rent in Aundh Pune, Amruta Travels Pune, Bus On Rent in Baner Pune, Bus On Rent in Bhosari Pune, Mini Bus On Rent in Talawade Pune, Tempo Traveller on rent in Pimpri Chinchwad, 17 Seater bus on Rent in Akurdi Pune, 14 17 20 25 Seater Bus Hire in Pimpri Chinchwad, 32 35 40 45 Seater Bus Hire in Pimpri Chinchwad, Bus On Rent in Wakad Pune, Bus on Rent in Pimple Gurav Pune, Urbania bus on rent in Pimpri Chinchwad, bus on rent in Pimple Gurav, bus on rent in Akurdi, bus on rent in Baner Aundh, 17 seater tempo traveller on rent in Pimpri Chinchwad, Mini Bus On Rent in Pimpri Chinchwad, Urbania on rent in Pimpri Chinchwad"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-67.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for "Bus On Rent in Pimpri Chinchwad" - Amruta Travels:</h3>
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
export default BusOnRentInPimpariChinchwad;