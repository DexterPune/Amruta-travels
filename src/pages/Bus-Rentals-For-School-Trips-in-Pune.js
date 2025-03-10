
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusReantalForSchoolTrip(){

  const cardData = 
    {
      keyword: 'Bus Rentals for School Trips in Pune',
      heading: ' Amruta Travels: Bus Rentals for School Trips in Pune',

      headingDescription: 'Planning a successful school trip involves more than just choosing a destination. It requires reliable and comfortable transportation to ensure that students arrive safely and in good spirits. In Pune, Amruta Travels stands out as a leading provider of bus rentals tailored specifically for school trips. Here’s an in-depth look at the top bus rental options offered by Amruta Travels, designed to make your next school trip a resounding success.:',

      top:"Top Bus Rentals For School Trips in Pune",

       topPlaces : [
        {
            "title": "Luxury Coaches",
            "description": "Amruta Travels’ luxury coaches are perfect for long-distance school trips or special excursions. These buses feature high-end amenities such as plush seating, ample legroom, and state-of-the-art entertainment systems. The luxurious interior ensures that students and chaperones can relax and enjoy the journey, making it ideal for extended travel or high-profile events."
        },
        {
            "title": "Standard Buses",
            "description": "For a more budget-friendly option, Amruta Travels’ standard buses offer reliability and comfort for shorter trips. These buses provide ample space and essential features, including air conditioning and comfortable seating. They are perfect for local day trips or excursions within Pune, providing a practical solution for schools looking to balance cost and comfort."
        },
        {
            "title": "Mini Buses",
            "description": "When you have a smaller group or need to navigate through the bustling streets of Pune, mini buses are an excellent choice. Amruta Travels’ mini buses are compact yet spacious enough to ensure a comfortable ride. They are ideal for city tours, field trips, or any local journey where maneuverability and space efficiency are important."
        },
        {
            "title": "Volvo Buses",
            "description": "Volvo buses from Amruta Travels offer a premium travel experience with advanced features and exceptional comfort. These buses are equipped with reclining seats, onboard Wi-Fi, and enhanced climate control. Ideal for both long journeys and local trips, Volvo buses provide a smooth and enjoyable ride, ensuring that students remain comfortable and engaged throughout their journey."
        },
        {
            "title": "Deluxe Buses",
            "description": "For a step up from standard options, Amruta Travels’ deluxe buses offer additional comfort and amenities. These buses are well-suited for longer trips where extra comfort is appreciated. Features such as enhanced air conditioning and extra legroom contribute to a more pleasant travel experience, making them perfect for extended outings or special occasions."
        },
        {
            "title": "Executive Buses",
            "description": "If your school is looking for a sophisticated travel option, Amruta Travels’ executive buses provide a touch of elegance and luxury. Designed for a refined travel experience, these buses offer leather seating and advanced climate control. They are ideal for schools that want to offer their students a more upscale experience without excessive extravagance."
        },
        {
            "title": "Convertible Buses",
            "description": "For a unique and exciting travel experience, consider Amruta Travels’ convertible buses. These buses are designed for scenic routes or outdoor adventures, allowing passengers to enjoy an open-air experience. Convertible buses are perfect for making the journey as enjoyable as the destination, adding a fun element to school trips."
        },
        {
            "title": "Eco-Friendly Buses",
            "description": "Incorporating sustainability into your school trips, Amruta Travels’ eco-friendly buses help reduce the carbon footprint while maintaining comfort and efficiency. These buses are equipped with energy-efficient systems and low emissions technology, making them a great choice for environmentally conscious schools."
        },
        {
            "title": "Party Buses",
            "description": "Make any school trip a celebration with Amruta Travels’ party buses. These buses are designed to create a lively and festive atmosphere, perfect for special events or themed trips. They feature interactive entertainment options that turn the journey into an exciting part of the event, ensuring that students have a memorable experience."
        },
        {
            "title": "Customizable Buses",
            "description": "If your school has specific requirements or preferences, Amruta Travels offers customizable buses to tailor the experience to your needs. Whether you need special seating arrangements, additional amenities, or custom interiors, Amruta Travels can work with you to design a bus that meets all your specifications, ensuring a personalized and comfortable trip."
        }
    ],    
    "services": [
        {
            "name": "Bus Hire for School Trips",
            "description": "When you choose Amruta Travels for bus hire, you benefit from our commitment to providing safe and comfortable transportation for school trips. Our buses are well-maintained and equipped with features that ensure a pleasant journey for students and teachers. From day trips to extended excursions, we offer buses that meet your requirements."
        },
        {
            "name": "Bus Rentals for School Trips",
            "description": "Our bus rental services are tailored specifically for school trips. We provide various bus sizes and configurations to accommodate different group sizes, ensuring that every student and staff member travels comfortably. Our flexible rental options are designed to fit your schedule and budget."
        },
        {
            "name": "School Buses for Field Trips Near Me",
            "description": "Looking for reliable school buses for field trips? Amruta Travels offers a range of school buses equipped with essential safety features and amenities. Our buses are ideal for transporting students to various field trip destinations, ensuring a secure and enjoyable experience."
        },
        {
            "name": "Amruta Travels Pune",
            "description": "As a leading provider of bus rentals in Pune, Amruta Travels is renowned for its superior service and customer satisfaction. Our experienced team is dedicated to managing every aspect of your bus rental, from booking to the actual trip, ensuring a hassle-free experience."
        },
        {
            "name": "Bus Companies for School Field Trips",
            "description": "Among the top bus companies for school field trips, Amruta Travels stands out for its reliability and professionalism. Our fleet is designed to handle the transportation needs of school groups, providing a safe and comfortable journey for educational outings."
        },
        {
            "name": "Bus Rentals for School Trips Pune",
            "description": "Our bus rental services for school trips in Pune offer competitive rates and high-quality service. We cater to the diverse needs of schools and educational institutions, providing comfortable and reliable transportation for all types of school events."
        },
        {
            "name": "Bus Rent for Picnic in Pune",
            "description": "Planning a school picnic? Amruta Travels provides buses that are perfect for picnics, offering a comfortable and safe ride to various picnic spots around Pune. Our buses are equipped to handle the needs of students and staff, making your picnic experience enjoyable."
        },
        {
            "name": "Tourist Bus Rent Per Day",
            "description": "For longer trips, we offer tourist buses for rent on a daily basis. These buses are equipped with comfortable seating and amenities to ensure a pleasant journey for extended school excursions. Enjoy a smooth and comfortable ride, whether you're traveling within Pune or to nearby destinations."
        },
        {
            "name": "Mini Bus Rent in Pune for Picnic",
            "description": "Our mini buses are ideal for smaller groups going on picnics. They offer a cozy and comfortable ride, perfect for local trips and short excursions. Mini buses provide a more intimate travel experience while still accommodating all your picnic needs."
        },
        {
            "name": "Bus for Rent in Pune School Picnic",
            "description": "Amruta Travels offers specialized bus rental services for school picnics. Our buses are designed to ensure a comfortable and safe journey, making them an excellent choice for school picnics and outdoor events."
        },
        {
            "name": "Buses for College Picnic in Pune",
            "description": "Our bus rental services extend to college picnics as well. We provide a range of bus sizes to accommodate college groups, ensuring a comfortable and enjoyable experience for all participants."
        },
        {
            "name": "Rental Buses for Trips in Pune",
            "description": "From educational field trips to recreational outings, Amruta Travels offers rental buses suitable for various types of trips. Our fleet ensures reliable and comfortable transportation for all your travel needs."
        },
        {
            "name": "50-Seater Bus on Rent in Pune",
            "description": "For larger school groups, we offer 50-seater buses that provide ample space and comfort. These buses are ideal for big school events and trips, ensuring that everyone travels comfortably."
        },
        {
            "name": "45-Seater Bus for Rent in Pune",
            "description": "Our 45-seater buses are perfect for medium-sized groups. They offer a comfortable and spacious ride for students and staff on school trips and excursions."
        },
        {
            "name": "32-Seater Bus on Rent Pune for School Trip",
            "description": "The 32-seater bus option is ideal for smaller school groups. It strikes a balance between space and comfort, making it a suitable choice for school trips and field excursions."
        },
        {
            "name": "35-Seater Bus on Rent for School Trip",
            "description": "Our 35-seater buses offer additional seating capacity, making them a great choice for school trips with slightly larger groups. They are designed to provide comfort and convenience during travel."
        },
        {
            "name": "Coach Hire for School Trips",
            "description": "For a more luxurious and comfortable travel experience, consider our coach hire services. These coaches are equipped with modern amenities, ensuring a high level of comfort for school trips."
        },
        {
            "name": "Coach Hire for School Trips Near Me",
            "description": "Amruta Travels offers reliable coach hire services for school trips. Our coaches are well-maintained and provide a comfortable and enjoyable travel experience for students and staff."
        },
        {
            "name": "Sleeper Bus Hire for School Trips",
            "description": "For overnight school trips, we offer sleeper buses equipped with comfortable sleeping arrangements. These buses are perfect for extended excursions, ensuring a restful journey for students."
        },
        {
            "name": "Bus Hire for College Trip in Pune",
            "description": "Our bus hire services extend to college trips as well, providing comfortable and efficient transportation for college groups. Whether it's a day trip or an overnight journey, we have the right bus for your needs."
        },
        {
            "name": "School Bus Rental for Field Trip",
            "description": "Our school bus rental services are specifically designed for field trips, providing safe and comfortable transportation for students and staff. We ensure that every trip is managed efficiently."
        },
        {
            "name": "Cheap School Bus Rental for Field Trip",
            "description": "We offer affordable school bus rental options for field trips, ensuring that you get the best value for your money. Our services are budget-friendly without compromising on quality and safety."
        },
        {
            "name": "School Bus on Rent in Pimpri Chinchwad",
            "description": "Our bus rental services are available in Pimpri Chinchwad, providing reliable transportation for school trips and events in the area. We ensure a comfortable and efficient journey for all your needs."
        },
        {
            "name": "Private School Bus on Rent in Pimpri Chinchwad",
            "description": "For private and exclusive school trips, we offer private bus rentals in Pimpri Chinchwad. These rentals provide a personalized and comfortable travel experience."
        },
        {
            "name": "Pune to Morachi Chincholi School Bus on Rent",
            "description": "We offer bus rentals for trips from Pune to Morachi Chincholi, providing comfortable and reliable transportation for school groups."
        },
        {
            "name": "Pune to Mahabaleshwar School Bus on Rent",
            "description": "Travel from Pune to Mahabaleshwar with ease using our rental buses. Our buses are designed to provide a comfortable and enjoyable journey for school trips."
        },
        {
            "name": "Pune to Mumbai Darshan School Bus on Rent",
            "description": "Explore Mumbai with our school bus rental services for educational trips and city tours. Our buses ensure a comfortable and informative journey."
        },
        {
            "name": "Bus Hire for School Picnic in Pune",
            "description": "Our bus hire services for school picnics ensure a comfortable and enjoyable travel experience to various picnic spots around Pune. We cater to all your needs for a successful picnic outing."
        },
        {
            "name": "Bus Rentals For School Trips in Pune Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus Rentals For School Trips in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],

   "tableData": [
        ["- Bus hire for school trips", "- Bus rentals for School Trips"],
        ["- School Buses for field trips near me", "- Amruta Travels Pune"],
        ["- Bus companies for school field trips", "- Bus rentals for school trips Pune"],
        ["- Bus Rent for picnic in Pune", "- Tourist Bus Rent Per Day"],
        ["- Mini Bus rent in Pune for picnic", "- Bus for rent in Pune School Picnic"],
        ["- Buses for college picnic in Pune", "- Rental Buses for Trips in Pune"],
        ["- 50-seater bus on Rent in Pune", "- 45-seater bus for Rent in Pune"],
        ["- 32-seater bus on rent Pune for school trip", "- 35-seater bus on rent for school trip"],
        ["- Coach hire for school trips", "- Coach hire for school trips near me"],
        ["- Sleeper bus hire for school trips", ""]
    ],
    "whychoose": [
        {
            "WhyChooseheading": "Comfortable and Spacious Vehicles",
            "WhyChoosedescription": "Our fleet includes buses with comfortable seating and ample legroom, ensuring that every student and staff member travels in comfort."
        },
        {
            "WhyChooseheading": "Modern Amenities",
            "WhyChoosedescription": "Our buses are equipped with air-conditioning, entertainment systems, and other amenities to make your journey enjoyable."
        },
        {
            "WhyChooseheading": "Experienced and Professional Drivers",
            "WhyChoosedescription": "Our drivers are skilled, experienced, and well-trained to handle the specific needs of school trips. They ensure a smooth and safe journey."
        },
        {
            "WhyChooseheading": "Affordable Pricing",
            "WhyChoosedescription": "We offer competitive rates for our bus rental services, providing excellent value without compromising on quality."
        },
        {
            "WhyChooseheading": "Customizable Solutions",
            "WhyChoosedescription": "We understand that every trip is unique. That’s why we offer flexible rental options tailored to your specific needs, whether it’s a local trip or a long-distance journey."
        },
        {
            "WhyChooseheading": "Excellent Customer Service",
            "WhyChoosedescription": "Our dedicated customer service team is here to assist you with every aspect of your booking. We ensure a seamless experience from start to finish."
        },
        {
            "WhyChooseheading": "Punctual and Reliable",
            "WhyChoosedescription": "We value your time and ensure that our buses adhere to schedules. Reliability is key to our service, and we strive to meet and exceed your expectations."
        },
        {
            "WhyChooseheading": "Well-Maintained Fleet",
            "WhyChoosedescription": "Our fleet is regularly serviced and maintained to ensure optimal performance and cleanliness. We take pride in providing buses that are in top condition."
        },
        {
            "WhyChooseheading": "Easy Booking Process",
            "WhyChoosedescription": "Booking with us is straightforward. Contact us via phone, email, or online, and we’ll handle the rest, making the process as easy as possible."
        },
        {
            "WhyChooseheading": "Safety First",
            "WhyChoosedescription": "We prioritize safety in all aspects of our service. Our buses are equipped with necessary safety features, and our drivers are trained to ensure a safe travel experience."
        }
    ]

};
const faqData = [
    {
        "question": "What is included in the rental of a school bus?",
        "answer": "Our rental includes comfortable seating, air-conditioning, and a professional driver. Additional amenities can be requested based on your requirements."
    },
    {
        "question": "How do I book a bus for a school trip?",
        "answer": "To book a bus, contact us via phone, email, or our online booking form. Provide details such as travel dates, pick-up and drop-off locations, and any special requests."
    },
    {
        "question": "Are there any additional charges I should be aware of?",
        "answer": "We offer transparent pricing with no hidden fees. Any additional charges will be communicated upfront during the booking process."
    },
    {
        "question": "Can I customize the bus rental package?",
        "answer": "Yes, we offer customizable packages to meet your specific needs. Let us know your requirements, and we’ll tailor a package accordingly."
    },
    {
        "question": "What safety measures are in place for school trips?",
        "answer": "Our buses are equipped with safety features, and our drivers are trained to ensure a secure journey. We adhere to all safety regulations to protect your group."
    },
    {
        "question": "Can I cancel or modify my booking?",
        "answer": "Yes, cancellations or modifications can be made based on our booking policies. Please contact us as soon as possible if you need to make changes."
    },
    {
        "question": "How far in advance should I book the bus?",
        "answer": "We recommend booking as early as possible to secure your preferred vehicle and date. Early booking helps us accommodate your needs better."
    },
    {
        "question": "Do you provide transportation for special needs students?",
        "answer": "Yes, we can arrange for buses that accommodate special needs students. Please inform us in advance of any specific requirements."
    },
    {
        "question": "What happens in case of an emergency during the trip?",
        "answer": "Our drivers are trained to handle emergencies. Additionally, our customer support team is available to assist with any issues that may arise during the trip."
    },
    {
        "question": "Can I view the bus before booking?",
        "answer": "Yes, you can arrange to view the bus before finalizing your booking. Contact us to schedule a visit and inspect the vehicle."
    }
];
const testimonials = [
    {
        "name": "Miss Priya Sharma",
        "text": "Our school recently used Amruta Travels for a field trip to the Pune Zoo, and I am thoroughly impressed with their service. We opted for their luxury coaches, and the experience was outstanding. The coaches were impeccably clean, and the amenities provided, including comfortable seating and an excellent entertainment system, kept our students engaged throughout the journey. The drivers were professional and courteous, ensuring a smooth and safe trip. Amruta Travels made the whole process hassle-free, from booking to the trip itself. I highly recommend their services for any school looking to offer a top-notch travel experience for their students."
    },
    {
        "name": "Mr. Ravi Patel",
        "text": "Choosing Amruta Travels for our recent school outing was a great decision. We used their standard buses for a day trip around Pune, and everything went perfectly. The buses were well-maintained, with enough space for our group of 50 students. The drivers were punctual and managed the route efficiently, making sure we arrived on time for all our planned activities. The booking process was straightforward, and the team at Amruta Travels was very accommodating to our needs. The feedback from both students and teachers was overwhelmingly positive. For any school planning a trip, Amruta Travels is definitely the way to go."
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
        heading: "Bus Rentals For School Trips in Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Rentals for School Trips in Pune | Affordable School Bus Hire | Amruta Travels</title>
  <meta name="description" content="Looking for bus rentals for school trips in Pune? Amruta Travels offers affordable, comfortable, and reliable bus rental services for school field trips, picnics, and college outings. Available for trips to Morachi Chincholi, Mahabaleshwar, and more. Book now for a safe and enjoyable experience." />
  <meta name="keywords" content="Bus hire for school trips, Bus rentals for School Trips, School Buses for field trips near me, Amruta Travels Pune, Bus companies for school field trips, bus rentals for school trips pune, Bus Rent for picnic in pune, Tourist Bus Rent Per Day, Mini Bus rent in pune for picnic, Bus for rent in Pune School Picnic, Buses for college picnic in Pune, Rental Buses for Trips in Pune, 50 seater bus on Rent in Pune, 45 seater bus for Rent in Pune, 32 seater bus on rent pune for school trip, 35 seater bus on rent for school trip, coach hire for school trips, coach hire for school trips near me, sleeper bus hire for school trips, Bus Hire for College Trip in Pune, school bus rental for field trip, Cheap school bus rental for field trip, school bus on rent in pimpri chinchwad, Private school bus on rent in pimpri chinchwad, pune to morachi chincholi School Bus On Rent, Pune to Mahabaleshwar school bus on rent, pune to mumbai darshan school bus on rent, bus hire for school picnic in pune" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Looking for bus rentals for school trips in Pune? Amruta Travels offers affordable, comfortable, and reliable bus rental services for school field trips, picnics, and college outings. Available for trips to Morachi Chincholi, Mahabaleshwar, and more. Book now for a safe and enjoyable experience.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-rentals-for-school-trips-in-pune",
        "logo": "https://amrutatravel.com/images/school-trip-bus-rentals.jpg",
        "image": "https://amrutatravel.com/images/school-trip-bus-rentals.jpg",
        "priceRange": "₹5000 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-rentals-for-school-trips-in-pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1200"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Shivani Rao"
            },
            "datePublished": "2024-06-10",
            "reviewBody": "Booked a bus for our school trip. The service was amazing, and the driver was professional. Highly recommend Amruta Travels for school picnics and trips."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rahul Kumar"
            },
            "datePublished": "2024-05-20",
            "reviewBody": "Our college trip to Mahabaleshwar was made hassle-free with Amruta Travels. The bus was comfortable, and the driver was punctual and polite."
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
          "serviceUrl": "https://amrutatravel.com/bus-rentals-for-school-trips-in-pune"
        },
        "keywords": "Bus hire for school trips, Bus rentals for School Trips, School Buses for field trips near me, Amruta Travels Pune, Bus companies for school field trips, bus rentals for school trips pune, Bus Rent for picnic in pune, Tourist Bus Rent Per Day, Mini Bus rent in pune for picnic, Bus for rent in Pune School Picnic, Buses for college picnic in Pune, Rental Buses for Trips in Pune, 50 seater bus on Rent in Pune, 45 seater bus for Rent in Pune, 32 seater bus on rent pune for school trip, 35 seater bus on rent for school trip, coach hire for school trips, coach hire for school trips near me, sleeper bus hire for school trips, Bus Hire for College Trip in Pune, school bus rental for field trip, Cheap school bus rental for field trip, school bus on rent in pimpri chinchwad, Private school bus on rent in pimpri chinchwad, pune to morachi chincholi School Bus On Rent, Pune to Mahabaleshwar school bus on rent, pune to mumbai darshan school bus on rent, bus hire for school picnic in pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-43.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Bus Rentals for School Trips in Pune – Amruta Travels:</h3>
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
export default BusReantalForSchoolTrip;