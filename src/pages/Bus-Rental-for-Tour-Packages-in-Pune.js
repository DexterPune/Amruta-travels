
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusRentalForTourPackagesInPune(){

  const cardData = 
    {
      keyword: 'Bus Rental Options for Tour Packages in Pune',
      heading: ' Tata Winger On Rent in Pune ₹25 Per Km',

      headingDescription: 'Are you planning a memorable tour in and around Pune and need reliable transportation? Amruta Travels offers exceptional bus rental services tailored for various tour packages, ensuring a comfortable and enjoyable travel experience. Here’s a guide to the top bus rental options with Amruta Travels for your tour packages in Pune:',

      top:"Top Bus Rental Options for Tour Packages in Pune",

       topPlaces : [
        {
            "title": "Luxury Coaches for Exclusive Tours:",
            "description": "Amruta Travels provides luxury coaches perfect for high-end tours and special events. These coaches come equipped with plush seating, air conditioning, and advanced entertainment systems, making them ideal for long journeys and luxurious travel experiences."
        },
        {
            "title": "Comfortable Mini Buses for Small Groups:",
            "description": "For smaller groups, Amruta Travels offers comfortable mini buses that can accommodate 14 to 25 passengers. These mini buses are perfect for intimate tours and ensure a cozy and convenient ride."
        },
        {
            "title": "Spacious 32-Seater Buses for Family Tours:",
            "description": "Ideal for family vacations or group tours, the 32-seater buses from Amruta Travels provide ample space and comfort. Enjoy a spacious interior with comfortable seating arrangements and plenty of room for luggage."
        },
        {
            "title": "Versatile 35-Seater Buses for Medium-Sized Groups:",
            "description": "Whether you’re planning a corporate outing or a group excursion, the 35-seater buses are a versatile choice. They offer a balance of space and comfort, suitable for medium-sized groups."
        },
        {
            "title": "Large 40-Seater Buses for Extended Tours:",
            "description": "For larger groups, Amruta Travels’ 40-seater buses are an excellent option. These buses provide generous seating capacity and are ideal for extended tours or corporate events, ensuring everyone travels comfortably."
        },
        {
            "title": "50-Seater Buses for Grand Events:",
            "description": "When you need to transport a big group, the 50-seater buses from Amruta Travels are up to the task. They are perfect for grand events, large family gatherings, or any occasion where you need substantial seating capacity."
        },
        {
            "title": "Customizable Tour Packages with Private Buses:",
            "description": "Amruta Travels offers customizable tour packages where you can choose the type of bus that fits your needs. Whether you’re planning a local sightseeing tour or an outstation trip, their private buses can be tailored to suit your itinerary."
        },
        {
            "title": "Eco-Friendly Bus Options:",
            "description": "As part of their commitment to sustainability, Amruta Travels provides eco-friendly bus options that minimize environmental impact while delivering exceptional performance and comfort."
        },
        {
            "title": "On-Demand Luxury and Executive Bus Services:",
            "description": "For those seeking executive-level comfort and amenities, Amruta Travels offers on-demand luxury and executive bus services. These buses come with high-end features, including reclining seats, Wi-Fi, and refreshments."
        },
        {
            "title": "Reliable and Safe Bus Rentals for Family Tours:",
            "description": "Safety and reliability are top priorities at Amruta Travels. Their fleet of well-maintained buses ensures a safe and secure travel experience for families, with experienced drivers and regular maintenance checks."
        }
    ],    

    "services": [
        {
            "name": "Bus Rental for Tour Packages Pune to Lonavala:",
            "description": "Amruta Travels offers exceptional bus rental services for tours from Pune to Lonavala. Whether you’re planning a day trip or a longer stay, our comfortable and well-maintained buses ensure a smooth journey to this popular hill station. Enjoy scenic views and a relaxing ride with options for both AC and non-AC buses."
        },
        {
            "name": "Bus Rental for Tour Packages Pune to Lavasa City:",
            "description": "For an unforgettable trip to Lavasa City, Amruta Travels provides reliable bus rental options. Our buses are equipped with modern amenities to make your journey to this picturesque city as comfortable as possible. Choose from a variety of bus sizes to suit your group’s needs."
        },
        {
            "name": "Bus Rental for Tour Packages Pune to Mumbai:",
            "description": "Traveling from Pune to Mumbai? Amruta Travels offers efficient bus rental like Tata Winger On Rent in Pune services for this route, catering to both small and large groups. Experience a hassle-free journey with our well-maintained fleet, available in both AC and non-AC options."
        },
        {
            "name": "Bus Rental for Tour Packages Pune to Nashik:",
            "description": "Explore Nashik with ease by renting a bus from Amruta Travels. Our service includes comfortable and spacious buses for all your tour needs, ensuring a pleasant trip to this historic city known for its vineyards and temples."
        },
        {
            "name": "Bus on Rent for Pune to Tuljapur:",
            "description": "For trips from Pune to Tuljapur, Amruta Travels provides reliable bus rental services. Our buses are designed for comfort and efficiency, making your pilgrimage or visit to Tuljapur a smooth and enjoyable experience."
        },
        {
            "name": "Bus on Rent for Pune to Pandharpur:",
            "description": "Planning a visit to Pandharpur? Amruta Travels offers dedicated bus rental services for this important pilgrimage destination. Our buses are equipped to handle your group’s needs, ensuring a comfortable and convenient journey."
        },
        {
            "name": "Amruta Travels Pune:",
            "description": "Amruta Travels is your go-to provider for bus rental services in Pune. With a diverse fleet of well-maintained buses and a commitment to customer satisfaction, we offer tailored solutions for all your travel needs."
        },
        {
            "name": "AC/Non-AC Bus for Outstation:",
            "description": "Whether you prefer the comfort of an AC bus or the cost-effectiveness of a non-AC option, Amruta Travels provides a range of choices for outstation trips. Our buses are well-equipped to handle long-distance travel with ease."
        },
        {
            "name": "Bus Rental for Corporate Events in Pune:",
            "description": "For corporate events in Pune, Amruta Travels offers specialized bus rental services. We provide comfortable and professional transportation solutions to ensure your business trips and corporate outings are smooth and efficient."
        },
        {
            "name": "Bus Rental for Ashtavinayak Tour from Pune:",
            "description": "Embark on the Ashtavinayak pilgrimage with Amruta Travels. Our bus rental services are tailored to this sacred tour, offering comfortable and reliable transportation to all eight Ganpati temples."
        },
        {
            "name": "Bus Hire for Jyotirlinga Darshan From Pune:",
            "description": "For a spiritual journey to the Jyotirlinga temples, Amruta Travels provides dedicated bus hire services. Our buses are well-suited for this sacred tour, ensuring a comfortable and memorable pilgrimage experience."
        },
        {
            "name": "Mini Bus on Rent in Pune:",
            "description": "Amruta Travels also offers mini bus rentals for smaller groups. Perfect for local tours or shorter trips, our mini buses provide a comfortable and economical solution for group travel within Pune and surrounding areas."
        },
        {
            "name": "AC 17-Seater Bus on Rent in Pune:",
            "description": "For smaller groups requiring a comfortable and air-conditioned travel option, Amruta Travels offers AC 17-seater buses for rent in Pune. These buses are ideal for family outings, corporate meetings, or small group tours, providing a cozy and comfortable environment with climate control and ample seating. Enjoy a pleasant journey with our well-maintained and modern 17-seater buses."
        },
        {
            "name": "Best Bus Rental Services in Pune for Tour Packages:",
            "description": "When it comes to tour packages, Amruta Travels provides the best bus rental services in Pune. We offer a variety of vehicles to accommodate different group sizes and preferences, ensuring that your tour is both comfortable and enjoyable. From luxury buses to efficient standard options, we have the perfect vehicle to suit your tour package requirements."
        }
    ],
   "tableData": [
        ["- Bus Rental for Tour Package Pune to Lonavala", "- Bus Rental for Tour Packages Pune to Lavasa City"],
        ["- Bus Rental for Tour Package Pune to Mumbai", "- Bus Rental for Tour Package Pune to Nashik"],
        ["- Bus on Rent for Pune to Tuljapur", "- Bus on Rent for Pune to Pandharpur"],
        ["- Amruta Travels Pune", "- AC/Non-AC Bus for Outstation"],
        ["- Bus Rental for Corporate Events in Pune", "- Bus Rental for Ashtavinayak Tour from Pune"],
        ["- Bus Hire for Jyotirlinga Darshan From Pune", "- Mini Bus on Rent in Pune"],
        ["- AC 17-Seater Bus on Rent in Pune", "- Best Bus Rental Services in Pune for Tour Packages"],
        ["- Tourist Luxury Bus on Rent in Pune", "- Tourist Bus Hire in Pimpri Chinchwad"],
        ["- Best Tourist Bus Hire in Pimpri Chinchwad", "- Best Tourist Bus Hire in Pimpri Chinchwad for Family"],
        ["- Outstation Tourist Bus Hire in Pune", "- Outstation Tourist Bus Hire in Pune Rates"]
    ],

    "whychoose": [
        {
            "WhyChooseheading": "Diverse Fleet Options:",
            "WhyChoosedescription": "We offer a wide range of buses, including luxury coaches, mini buses, and standard options, ensuring we have the perfect vehicle for your tour, whether it's a small group or a large gathering."
        },
        {
            "WhyChooseheading": "Exceptional Comfort:",
            "WhyChoosedescription": "Our buses are equipped with features such as reclining seats, ample legroom, climate control, and entertainment systems to ensure a comfortable travel experience."
        },
        {
            "WhyChooseheading": "Skilled and Professional Drivers:",
            "WhyChoosedescription": "Our drivers are highly trained and experienced, knowledgeable about local and outstation routes, and dedicated to ensuring a safe and smooth journey."
        },
        {
            "WhyChooseheading": "Tailored Itineraries:",
            "WhyChoosedescription": "We offer customizable solutions to meet your specific needs, including adjusting the itinerary and bus features to match your preferences."
        },
        {
            "WhyChooseheading": "Competitive and Transparent Pricing:",
            "WhyChoosedescription": "We provide competitive rates with a transparent pricing model, ensuring you know exactly what you’re paying for and getting great value for your money."
        },
        {
            "WhyChooseheading": "Reliable and Punctual Service:",
            "WhyChoosedescription": "We pride ourselves on reliability and punctuality, making sure that your travel plans proceed without delays or disruptions."
        },
        {
            "WhyChooseheading": "Special Tour Packages:",
            "WhyChoosedescription": "We offer curated packages for popular destinations such as Lavasa City, Mumbai, Nashik, Shirdi, and more, providing a seamless journey from start to finish."
        },
        {
            "WhyChooseheading": "High Safety Standards:",
            "WhyChoosedescription": "Our buses undergo regular maintenance and safety checks to ensure they meet the highest safety standards, prioritizing your safety on every trip."
        },
        {
            "WhyChooseheading": "Outstanding Customer Support:",
            "WhyChoosedescription": "From initial inquiries to post-trip support, our customer service team is dedicated to assisting you every step of the way, ensuring a smooth experience."
        },
        {
            "WhyChooseheading": "Flexible Booking Options:",
            "WhyChoosedescription": "We offer flexible booking policies to accommodate changes in your travel plans, helping you adjust dates or itineraries as needed."
        }
    ]
};
const faqData = [
    {
        "question": "What types of buses are available for tour packages?",
        "answer": "We offer a range of buses including luxury coaches, mini buses, and standard AC/non-AC options."
    },
    {
        "question": "How can I customize my bus rental for a specific tour package?",
        "answer": "Provide us with details about your tour itinerary and preferences. We will tailor our services to meet your specific needs."
    },
    {
        "question": "Are the buses suitable for long-distance travel?",
        "answer": "Yes, our buses are equipped with amenities designed for long-distance travel, including comfortable seating, air conditioning, and entertainment systems."
    },
    {
        "question": "What is the procedure for booking a bus for a tour package?",
        "answer": "Contact us with your travel details such as destination, travel dates, and group size. We will guide you through the booking process and provide a quote."
    },
    {
        "question": "Can I rent a bus for both local and outstation tours?",
        "answer": "Yes, we offer bus rental services for both local and outstation tours."
    },
    {
        "question": "Do you offer special packages for popular destinations?",
        "answer": "Yes, we provide special packages for destinations like Lavasa, Nashik, Shirdi, and more. Contact us for details on what’s included."
    },
    {
        "question": "What is your cancellation policy?",
        "answer": "Our cancellation policy varies depending on the booking terms. Please discuss the policy with us at the time of booking."
    },
    {
        "question": "Are AC and non-AC buses available?",
        "answer": "Yes, we offer both AC and non-AC bus options."
    },
    {
        "question": "How can I get a quote for bus rental?",
        "answer": "Provide us with details about your tour package, including the destination, group size, and type of bus required, and we will offer a competitive quote."
    },
    {
        "question": "Is there customer support available for booking and travel issues?",
        "answer": "Yes, our customer support team is available to assist with all aspects of your booking and travel. We are dedicated to resolving any issues and ensuring a smooth experience."
    }
];

const testimonials = [
    {
        "name": "Mr. Rajesh Patel",
        "text": "Our recent experience with Amruta Travels for a tour package to Lavasa City was exceptional. The bus was pristine, comfortable, and well-equipped for our long journey. The driver was courteous and navigated the route efficiently, ensuring a smooth and enjoyable trip for everyone. The flexible booking process and clear communication from the team made the entire experience hassle-free. I highly recommend Amruta Travels for anyone looking for reliable and top-notch bus rental services for their tour packages."
    },
    {
        "name": "Ms. Priya Sharma",
        "text": "I had the pleasure of organizing a corporate retreat with Amruta Travels, and their service exceeded our expectations. We rented a 35-seater bus for our trip to Shirdi, and the vehicle was not only spacious but also equipped with modern amenities that made the journey pleasant for all our employees. The professionalism of the driver and the punctuality of the service were remarkable. Amruta Travels truly made our event memorable with their excellent bus rental service. I will definitely consider them for future events."
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
        heading: "Bus Rental for Tour Packages in Pune Contact Number:",
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
  <title> Tata Winger On Rent in Pune ₹25 Per Km </title>
  <meta name="description" content="Amruta Travels offers affordable and reliable bus rental services like Tata Winger On Rent in Pune for tour packages to popular destinations like Lonavala, Lavasa, Mumbai, Nashik, Pandharpur, and more. Hire AC and Non-AC buses for corporate events, family tours, and Jyotirlinga Darshan." />
  <meta name="keywords" content="Bus rental for tour package pune to Lonavala, Bus Rental for tour packages for pune Lavasa City, Bus rental for tour package pune to Mumbai, Bus rental for tour package pune to Nashik, Bus on rent for Pune to Tuljapur, Bus on rent for pune to Pandharpur, Amruta Travels Pune, AC/Non AC bus for Outstation, Bus Rental for Corporate Events in Pune, Bus Rental for Ashtavinayak tour from Pune, Bus Hire for Jyotirlinga Darshan From Pune, Mini bus on rent in Pune, AC 17 seater bus on Rent in Pune, best bus rental services in pune for tour packages, Tourist Luxury Bus on rent in Pune, tourist bus hire in pimpri chinchwad, Best tourist bus hire in pimpri chinchwad, Best tourist bus hire in pimpri chinchwad for family, Outstation Tourist Bus Hire In pune, Outstation tourist bus hire in pune rates,pune to 12 jyotirlinga bus tour package" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers affordable and reliable bus rental services in Pune for tour packages to popular destinations like Lonavala, Lavasa, Mumbai, Nashik, Pandharpur, and more. Hire AC and Non-AC buses for corporate events, family tours, and Jyotirlinga Darshan.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-rental-for-tour-packages-pune",
        "logo": "https://amrutatravel.com/images/tour-bus-service.jpg",
        "image": "https://amrutatravel.com/images/tour-bus-service.jpg",
        "priceRange": "₹5000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-rental-for-tour-packages-pune",
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
              "name": "Amit Joshi"
            },
            "datePublished": "2024-08-12",
            "reviewBody": "Booked a bus for our family tour to Lavasa. The experience was wonderful. The bus was clean and comfortable. Amruta Travels took care of everything and made our trip memorable."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Suman Bhat"
            },
            "datePublished": "2024-07-30",
            "reviewBody": "Amazing service for our group tour to Nashik! The driver was very professional, and the bus was well-maintained. I highly recommend Amruta Travels for group tours."
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
          "serviceUrl": "https://amrutatravel.com/bus-rental-for-tour-packages-pune"
        },
        "keywords": "Bus rental for tour package pune to Lonavala, Bus Rental for tour packages for pune Lavasa City, Bus rental for tour package pune to Mumbai, Bus rental for tour package pune to Nashik, Bus on rent for Pune to Tuljapur, Bus on rent for pune to Pandharpur, Amruta Travels Pune, AC/Non AC bus for Outstation, Bus Rental for Corporate Events in Pune, Bus Rental for Ashtavinayak tour from Pune, Bus Hire for Jyotirlinga Darshan From Pune, Mini bus on rent in Pune, AC 17 seater bus on Rent in Pune, best bus rental services in pune for tour packages, Tourist Luxury Bus on rent in Pune, tourist bus hire in pimpri chinchwad, Best tourist bus hire in pimpri chinchwad, Best tourist bus hire in pimpri chinchwad for family, Outstation Tourist Bus Hire In pune, Outstation tourist bus hire in pune rates, pune to 12 jyotirlinga bus tour package"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-60.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Bus Rental for Tour Packages in Pune – Amruta Travels:</h3>
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
export default BusRentalForTourPackagesInPune;