
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusOnRentForEventInPune(){

  const cardData = 
    {
      keyword: 'Bus on Rent for Events in Pune',
      heading: ' Amruta Travels: Bus on Rent for Events in Pune',

      headingDescription: 'When planning an event in Pune, finding reliable and comfortable transportation is crucial. Amruta Travels stands out as a premier choice for bus rentals, offering an exceptional range of services tailored to meet your event needs. Here’s why Amruta Travels should be your top pick for bus rentals for events in Pune:',

      top:"Top Bus on Rent For Event in Pune",

       topPlaces : [
        {
            "title": "Wide Range of Buses",
            "description": "Amruta Travels boasts an extensive fleet of buses, including luxury coaches, semi-luxury buses, and standard options. Whether you need a 17-seater for a small group or a 52-seater for a large event, we have the perfect vehicle to suit your requirements."
        },
        {
            "title": "Modern Amenities",
            "description": "Our buses are equipped with the latest amenities to ensure a comfortable and enjoyable journey. Features include air conditioning, plush seating, onboard entertainment systems, and Wi-Fi, making sure your guests travel in style."
        },
        {
            "title": "Professional Drivers",
            "description": "At Amruta Travels, our drivers are highly experienced and professionally trained. They are familiar with Pune's routes and traffic patterns, ensuring timely and safe transportation for your event."
        },
        {
            "title": "Flexible Booking Options",
            "description": "We offer flexible booking options to accommodate your schedule and event needs. Whether it’s a one-time event or recurring transportation, our team can customize a rental plan that works best for you."
        },
        {
            "title": "Competitive Pricing",
            "description": "Our pricing is transparent and competitive, providing great value for the quality of service you receive. We offer detailed quotes with no hidden charges, so you can budget your event transportation with confidence."
        },
        {
            "title": "Excellent Customer Service",
            "description": "Our dedicated customer service team is available to assist you throughout the booking process and during your event. From initial inquiries to post-event follow-up, we ensure a smooth and hassle-free experience."
        },
        {
            "title": "Customizable Packages",
            "description": "We offer customizable rental packages that can be tailored to fit the specific needs of your event. Whether it’s for corporate functions, weddings, or private parties, we can design a package that meets your unique requirements."
        },
        {
            "title": "Clean and Well-Maintained Buses",
            "description": "Maintaining high standards of cleanliness and hygiene is a top priority at Amruta Travels. Our buses are regularly cleaned and inspected to ensure they are in excellent condition for your event."
        },
        {
            "title": "On-Time Guarantee",
            "description": "Punctuality is crucial for event transportation. We guarantee timely arrivals and departures, so you can be assured that your guests will reach their destination on time."
        },
        {
            "title": "Positive Customer Feedback",
            "description": "Our clients consistently provide positive feedback about our bus rental services. From the ease of booking to the quality of our buses and drivers, Amruta Travels is highly regarded for delivering reliable and exceptional service."
        }
    ],    

    services : [
        {
            "name": "Bus on Rent for Wedding Evening in Pune",
            "description": "For a memorable wedding evening, Amruta Travels offers specialized bus rental services to ensure your guests travel comfortably and arrive on time. Our fleet includes a variety of bus options, including luxury and standard models, suitable for both intimate gatherings and grand celebrations."
        },
        {
            "name": "Bus Rental for Wedding Party",
            "description": "Make your wedding party seamless and stylish with Amruta Travels. We provide dedicated bus rental services tailored for wedding parties, ensuring that all guests are transported efficiently and enjoy a comfortable ride. Our buses are equipped with modern amenities and are driven by experienced professionals to make your special day perfect."
        },
        {
            "name": "Amruta Travels Pune",
            "description": "Amruta Travels is a leading provider of bus rental services in Pune, known for its reliability, extensive fleet, and excellent customer service. Whether you need a bus for a wedding, corporate event, or any other occasion, we are here to meet your transportation needs with a focus on comfort and punctuality."
        },
        {
            "name": "Private Bus Service on Rent for Event in Pune",
            "description": "For private events, Amruta Travels offers exclusive bus rental services to provide a personalized and private travel experience. Our private buses are ideal for events where privacy and comfort are paramount, and our dedicated drivers ensure a smooth and enjoyable journey."
        },
        {
            "name": "Bus on Hire for Party in Pune",
            "description": "Host your party with ease by choosing Amruta Travels for your bus rental needs. Our buses are available for various types of parties, from birthday celebrations to anniversaries, providing a reliable and stylish transportation solution for your guests."
        },
        {
            "name": "Pune to Bhimashankar Bus Tour Package",
            "description": "Explore the scenic beauty of Bhimashankar with our dedicated bus tour package. Amruta Travels offers comfortable and convenient transportation from Pune to Bhimashankar, ensuring a smooth journey to one of Maharashtra's prominent pilgrimage destinations."
        },
        {
            "name": "Pune to Mahabaleshwar Bus Tour Package",
            "description": "Experience the lush landscapes of Mahabaleshwar with our specialized bus tour package. Our buses provide a comfortable ride from Pune to Mahabaleshwar, complete with amenities designed to enhance your travel experience to this popular hill station."
        },
        {
            "name": "Pune to Goa Bus Tour Packages",
            "description": "Travel to the vibrant destination of Goa with ease by opting for our bus tour packages. Amruta Travels offers well-planned bus services from Pune to Goa, providing a comfortable and enjoyable journey to one of India's most sought-after vacation spots."
        },
        {
            "name": "32, 35, 40, 45, 50 Seater Bus on Rent in Pune",
            "description": "No matter the size of your group, Amruta Travels has a range of buses to accommodate your needs. Our fleet includes 32, 35, 40, 45, and 50-seater buses, ensuring that you can find the perfect size for your event."
        },
        {
            "name": "Pune to Shirdi Bus Package",
            "description": "Embark on a spiritual journey to Shirdi with our dedicated bus package. Amruta Travels offers reliable and comfortable bus services from Pune to Shirdi, making your pilgrimage or visit to this sacred site both convenient and pleasant."
        },
        {
            "name": "Pune to Ajanta Ellora Bus on Rent",
            "description": "Discover the historical wonders of Ajanta and Ellora with our bus rental services. Amruta Travels provides comfortable transportation from Pune to these UNESCO World Heritage sites, ensuring a hassle-free travel experience as you explore these ancient marvels."
        },
        {
            "name": "Pune to Ashtavinayak Darshan Bus Package",
            "description": "For those seeking a spiritual journey through the Ashtavinayak temples, Amruta Travels offers a comprehensive bus package. Enjoy a well-organized trip from Pune to the Ashtavinayak temples with our comfortable and reliable bus services."
        },
        {
            "name": "Luxury Bus on Rent for Event in Pune",
            "description": "Elevate your event with Amruta Travels' luxury bus rentals. Our luxury buses are equipped with top-notch amenities to provide a premium travel experience for your guests. Perfect for high-profile events and special occasions, our luxury buses ensure style and comfort."
        },
        {
            "name": "Luxury Bus on Rent for Event in Pimpri Chinchwad",
            "description": "For events in Pimpri Chinchwad, Amruta Travels offers luxury buses designed to provide superior comfort and style. Our luxury buses come with plush seating, advanced entertainment systems, and climate control, making them an excellent choice for transporting guests to weddings, corporate functions, and other special occasions. Experience seamless and elegant travel with our top-of-the-line rental services."
        },
        {
            "name": "Luxury Bus on Rent for Event in Pune Hadapsar",
            "description": "In Hadapsar, Pune, Amruta Travels provides luxurious bus rental options tailored for your event needs. Our luxury buses are equipped with amenities that ensure your guests travel in maximum comfort. Whether it’s a high-profile corporate event or a family celebration, our buses enhance the travel experience, contributing to the overall success of your event."
        },
        {
            "name": "Luxury Bus on Rent for Event in Pune Hadapsar Contact Information",
            "description": "For inquiries and bookings regarding luxury buses for events in Pune Hadapsar, please contact Amruta Travels. Our dedicated team is ready to assist you with your rental needs and provide information about our luxury bus services. We aim to offer exceptional service and ensure that your event transportation is handled professionally."
        },
        {
            "name": "Tempo Traveller Rent for Events in Pune",
            "description": "For a more compact transportation option, Amruta Travels offers tempo travellers for rent in Pune. Ideal for smaller groups or events requiring flexibility, our tempo travellers feature comfortable seating and modern amenities. They offer a convenient and economical solution for transporting guests to various types of events throughout Pune."
        },
        {
            "name": "Luxury Tempo Traveller on Rent in Pune for Event",
            "description": "If you’re seeking a touch of luxury in a more compact vehicle, consider renting a luxury tempo traveller from Amruta Travels in Pune. These tempo travellers are designed to offer a high level of comfort with features such as plush seating and climate control. They are perfect for events where you want to provide your guests with a luxurious travel experience."
        },
        {
            "name": "Mini Bus on Rent for Event in Pune",
            "description": "Amruta Travels also provides mini buses for rent in Pune, offering a versatile and affordable option for event transportation. Mini buses are well-suited for smaller groups and come with comfortable seating and ample space for luggage. Whether it’s a corporate outing, family gathering, or other events, our mini buses ensure a pleasant travel experience for your guests."
        },
        {
            "name": "Bus on Rent for Event in Pimpri Chinchwad",
            "description": "For events in Pimpri Chinchwad, Amruta Travels offers a range of bus rental options to suit your needs. Our well-maintained buses are equipped with essential amenities to ensure a comfortable and smooth journey. From large buses for weddings to corporate events, we provide solutions that make event transportation easy and efficient."
        },
        {
            "name": "Bus on Rent For Event in Pune Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus on Rent For Event in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],
    tableData : [
        ["- Bus on Rent for Wedding Evening Pune", "- Bus Rental for Wedding Party"],
        ["- Amruta Travels Pune", "- Private Bus Service on Rent for Event in Pune"],
        ["- Bus on Hire for Party in Pune", "- Pune to Bhimashankar Bus Tour Package"],
        ["- Pune to Mahabaleshwar Bus Tour Package", "- Pune to Goa Bus Tour Packages"],
        ["- 32, 35, 40, 45, 50 Seater Bus on Rent in Pune", "- Pune to Shirdi Bus Package"],
        ["- Pune to Ajanta Ellora Bus on Rent", "- Pune to Ashtavinayak Darshan Bus Package"],
        ["- Luxury Bus on Rent for Event in Pune", "- Luxury Bus on Rent for Event in Pimpri Chinchwad"],
        ["- Luxury Bus on Rent for Event in Pune Hadapsar", "- Luxury Bus on Rent for Event in Pune Hadapsar Contact Number"],
        ["- Tempo Traveller Rent for Events in Pune", "- Luxury Tempo Traveller on Rent in Pune for Event"],
        ["- Mini Bus on Rent for Event in Pune", "- Bus on Rent for Event in Pimpri Chinchwad"]
    ],    

"whychoose": [
        {
            "WhyChooseheading": "Extensive Fleet Selection:",
            "WhyChoosedescription": "At Amruta Travels, we offer a diverse range of buses to suit your event needs, including luxury buses, mini-buses, and larger coaches. Whether you're hosting an intimate gathering or a grand celebration, we have the perfect vehicle for you."
        },
        {
            "WhyChooseheading": "Superior Comfort and Amenities:",
            "WhyChoosedescription": "Our buses are equipped with comfortable seating, air conditioning, and modern amenities to ensure a pleasant and enjoyable journey for all passengers. We prioritize your comfort and satisfaction."
        },
        {
            "WhyChooseheading": "Experienced Drivers:",
            "WhyChoosedescription": "Our professional drivers are well-trained and experienced in handling events of all sizes. They are dedicated to providing safe, punctual, and reliable transportation for your event."
        },
        {
            "WhyChooseheading": "Customizable Packages:",
            "WhyChoosedescription": "We understand that every event is unique, which is why we offer customizable rental packages to meet your specific requirements. From luxury options to budget-friendly choices, we tailor our services to fit your needs."
        },
        {
            "WhyChooseheading": "Competitive Pricing:",
            "WhyChoosedescription": "Amruta Travels offers competitive rates for bus rentals, providing exceptional value for money. We aim to deliver high-quality service at affordable prices."
        },
        {
            "WhyChooseheading": "Reliable Service:",
            "WhyChoosedescription": "Punctuality is crucial for event transportation. Our team ensures that your bus arrives on time and that all logistics are managed smoothly, so you can focus on enjoying your event."
        },
        {
            "WhyChooseheading": "Excellent Customer Support:",
            "WhyChoosedescription": "Our dedicated customer support team is available to assist you with all your inquiries and booking needs. We provide personalized attention to ensure a hassle-free experience."
        },
        {
            "WhyChooseheading": "Well-Maintained Vehicles:",
            "WhyChoosedescription": "Our fleet is regularly serviced and maintained to ensure that all buses are in top condition. We prioritize safety and reliability for every journey."
        },
        {
            "WhyChooseheading": "Comprehensive Coverage:",
            "WhyChoosedescription": "Whether you're planning a corporate event, wedding, or any other occasion, we cover a wide range of destinations and routes, ensuring that your transportation needs are fully met."
        },
        {
            "WhyChooseheading": "Positive Reputation:",
            "WhyChoosedescription": "Amruta Travels is known for its excellent service and customer satisfaction. We take pride in our reputation and strive to exceed your expectations with every booking."
        }
    ]

};

const faqData = [
    {
        "question": "What types of buses are available for rent for events?",
        "answer": "Amruta Travels offers a variety of buses for events, including luxury buses, mini-buses, and large coaches. Our fleet is designed to accommodate different group sizes and event requirements."
    },
    {
        "question": "How can I book a bus for my event?",
        "answer": "You can book a bus by contacting us through our website or by phone. Our customer support team will assist you in selecting the right bus, finalizing the details, and confirming your reservation."
    },
    {
        "question": "What amenities are provided on the buses?",
        "answer": "Our buses come equipped with comfortable seating, air conditioning, and other amenities to ensure a pleasant travel experience. Luxury buses may include additional features such as premium seating and entertainment options."
    },
    {
        "question": "Are there options for customizing the rental package?",
        "answer": "Yes, we offer customizable rental packages to suit your specific needs. Whether you require additional services or have special requests, we can tailor our packages to meet your requirements."
    },
    {
        "question": "How much does it cost to rent a bus for an event?",
        "answer": "The cost of renting a bus varies depending on factors such as the type of bus, duration of the rental, and event location. For a detailed quote, please contact us with your event details."
    },
    {
        "question": "Are the drivers experienced and professional?",
        "answer": "Yes, all our drivers are experienced, professional, and trained to handle various types of events. They prioritize safety and punctuality to ensure a smooth transportation experience."
    },
    {
        "question": "What is the cancellation policy for bus rentals?",
        "answer": "Our cancellation policy is designed to be fair and flexible. Please contact us for details on our cancellation terms and conditions, which may vary based on the timing and nature of the cancellation."
    },
    {
        "question": "Can the bus be used for multiple trips or stops?",
        "answer": "Yes, our buses can be used for multiple trips or stops as needed. Please discuss your specific requirements with us so we can accommodate your plans effectively."
    },
    {
        "question": "How do I make changes to my booking?",
        "answer": "To make changes to your booking, please contact our customer support team as soon as possible. We will assist you with modifying your reservation based on availability and your updated needs."
    },
    {
        "question": "What should I do if there is a problem during the trip?",
        "answer": "If you encounter any issues during the trip, please contact our support team immediately. We are committed to resolving any problems promptly and ensuring that your experience is satisfactory."
    }
];

const testimonials = [
    {
        "name": "Miss Priya R",
        "text": "I recently hired a bus from Amruta Travels for a corporate event, and I couldn’t be more pleased with the service. The booking process was smooth and hassle-free, and the bus itself was top-notch—clean, comfortable, and well-equipped. The driver arrived on time and was very professional throughout the event. Our clients were impressed with the level of comfort and the punctuality of the service. I highly recommend Amruta Travels for any event transportation needs. Their attention to detail and customer service are truly commendable."
    },
    {
        "name": "Mr. Rajesh M",
        "text": "Amruta Travels provided exceptional service for a wedding I organized recently. We needed a large bus to transport guests between the venue and hotel, and Amruta Travels delivered beyond our expectations. The bus was spacious, luxurious, and maintained to the highest standard. The driver was courteous and ensured everything ran smoothly on the day. The entire experience was stress-free, and I received many compliments from the guests. If you’re looking for reliable and high-quality bus rental for any event in Pune, Amruta Travels is the way to go!"
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
        heading: "Bus on Rent For Event in Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus on Rent for Event in Pune | Wedding & Party Bus Hire | Luxury & Mini Bus Rentals</title>
  <meta name="description" content="Amruta Travels offers bus rentals for weddings, parties, and events in Pune. Rent luxury buses, mini buses, and tempo travellers for events like weddings, tours, and more. Affordable and reliable bus services for corporate and private events in Pune." />
  <meta name="keywords" content="Bus on rent for wedding evening pune, Bus rental for wedding Party, Amruta Travels Pune, Private bus service on rent for event in pune, Bus on Hire for party in Pune, Pune to Bhimashankar bus tour package, Pune to Mahabaleshwar bus tour package, Pune to Goa bus tour Packages, 32, 35, 40, 45, 50 Seater Bus on Rent in Pune, Pune to Shirdi Bus Package, Pune to Ajanta Ellora Bus on Rent, Pune to Ashtavinayak Darshan bus Package, Luxury bus on rent for event in pune, luxury bus on rent for event in pimpri chinchwad, Luxury bus on rent for event in pune hadapsar, Luxury bus on rent for event in pune hadapsar contact number, Tempo Traveller Rent For Events in Pune, luxury tempo traveller on rent in pune for event, Mini Bus on Rent For Event in Pune, bus on rent for event in pimpri chinchwad" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers bus rentals for weddings, parties, and events in Pune. Rent luxury buses, mini buses, and tempo travellers for events like weddings, tours, and more. Affordable and reliable bus services for corporate and private events in Pune.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-on-rent-for-event-pune",
        "logo": "https://amrutatravel.com/images/event-bus-service.jpg",
        "image": "https://amrutatravel.com/images/event-bus-service.jpg",
        "priceRange": "₹5000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-on-rent-for-event-pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "400"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Shah"
            },
            "datePublished": "2024-09-15",
            "reviewBody": "Booked a luxury bus for our wedding. The service was exceptional, the driver was professional, and the bus was clean and well-maintained. Highly recommend Amruta Travels!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Vishal Kumar"
            },
            "datePublished": "2024-08-10",
            "reviewBody": "We hired a mini bus for our event. It was the best choice for our group. Very comfortable and affordable. Amruta Travels made everything seamless."
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
          "serviceUrl": "https://amrutatravel.com/bus-on-rent-for-event-pune"
        },
        "keywords": "Bus on rent for wedding evening pune, Bus rental for wedding Party, Amruta Travels Pune, Private bus service on rent for event in pune, Bus on Hire for party in Pune, Pune to Bhimashankar bus tour package, Pune to Mahabaleshwar bus tour package, Pune to Goa bus tour Packages, 32, 35, 40, 45, 50 Seater Bus on Rent in Pune, Pune to Shirdi Bus Package, Pune to Ajanta Ellora Bus on Rent, Pune to Ashtavinayak Darshan bus Package, Luxury bus on rent for event in pune, luxury bus on rent for event in pimpri chinchwad, Luxury bus on rent for event in pune hadapsar, Luxury bus on rent for event in pune hadapsar contact number, Tempo Traveller Rent For Events in Pune, luxury tempo traveller on rent in pune for event, Mini Bus on Rent For Event in Pune, bus on rent for event in pimpri chinchwad"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-59.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs - Bus on Rent for Event in Pune – Amruta Travels:</h3>
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
export default BusOnRentForEventInPune;