
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusRentInHadapsar(){

  const cardData = 
    {
        "keyword": "Bus on Rent in Hadapsar",
        "heading": "Amruta Travels: Bus on Rent in Hadapsar",
        "headingDescription": "When it comes to reliable and comfortable bus rental services in Hadapsar, Amruta Travels is your go-to choice. Our extensive fleet and dedication to quality ensure that every journey is smooth and enjoyable. Whether you're planning a corporate event, family trip, school excursion, or any other group activity, we have the perfect bus to meet your needs.",
        "top": "Top Bus Rental Options in Hadapsar with Amruta Travels",
        "topPlaces": [
            {
                "title": "1. 14-Seater Mini Bus",
                "description": "Perfect for smaller groups or short trips, our 14-seater mini buses offer a cozy and comfortable ride. Ideal for family outings, small corporate meetings, or local travel, these mini buses provide flexibility and convenience."
            },
            {
                "title": "2. 17-Seater Mini Bus",
                "description": "For slightly larger groups, our 17-seater mini buses are an excellent choice. These buses provide additional space and comfort, making them suitable for school trips, group tours, and other medium-sized gatherings."
            },
            {
                "title": "3. 32-Seater Bus",
                "description": "Our 32-seater buses are ideal for medium-sized groups needing more room. With comfortable seating and ample storage space, these buses are perfect for corporate events, team outings, and family vacations."
            },
            {
                "title": "4. 35-Seater Bus",
                "description": "If you need a bit more space, our 35-seater buses are a great option. These buses offer extra comfort and are well-suited for larger group events, including inter-city travel and extended tours."
            },
            {
                "title": "5. 40-Seater Bus",
                "description": "Our 40-seater buses are designed for larger groups requiring ample seating and comfort. They are perfect for school excursions, corporate trips, and other significant events where space and comfort are a priority."
            },
            {
                "title": "6. 45-Seater Bus",
                "description": "For very large groups, our 45-seater buses provide spacious seating and modern amenities. These buses are ideal for major events, large family gatherings, and corporate outings that require a high level of comfort and convenience."
            },
            {
                "title": "7. 50-Seater Bus",
                "description": "Our 50-seater buses are the largest in our fleet, offering maximum space and comfort. They are perfect for big events such as weddings, large corporate events, and other large group activities where comfort and room are essential."
            },
            {
                "title": "8. Luxury AC Bus",
                "description": "For those seeking an upscale travel experience, our luxury AC buses are equipped with premium features, including air conditioning, plush seating, and entertainment options. Ideal for long journeys and special occasions, these buses ensure a luxurious and comfortable ride."
            },
            {
                "title": "9. Urbania Bus",
                "description": "Experience top-tier comfort with our Urbania buses, which feature advanced amenities and a stylish design. These buses are perfect for high-end travel needs and are ideal for corporate events or luxury group outings."
            },
            {
                "title": "10. Tempo Traveller",
                "description": "Our tempo travellers offer a compact yet comfortable option for smaller groups. They are ideal for short trips and provide flexibility and ease of maneuverability, making them suitable for local excursions and day trips."
            }
        ],
        "services": [
            {
                "name": "Mini Bus on Rent in Magarpatta City-Hadapsar",
                "description": "For small group travel or local trips, our mini buses available in Magarpatta City-Hadapsar offer a perfect blend of comfort and practicality. Ideal for family outings, business trips, or social events, our mini buses are well-maintained and equipped for a smooth ride."
            },
            {
                "name": "Urbania Bus on Rent in Hadapsar",
                "description": "Experience luxury and style with our Urbania bus rental in Hadapsar. The Urbania is designed for comfort and sophistication, making it an excellent choice for corporate events, special occasions, and group outings."
            },
            {
                "name": "Corporate Bus Hire in Hadapsar Pune",
                "description": "For businesses in Hadapsar, our corporate bus hire service provides reliable transportation for meetings, conferences, and team-building events. Our well-equipped buses ensure a professional and comfortable experience for your corporate needs."
            },
            {
                "name": "14, 17, 25, 32 Seater on Rent in Hadapsar-Magarpatta",
                "description": "Choose from our range of 14, 17, 25, and 32-seater buses for various group sizes in Hadapsar-Magarpatta. These buses are perfect for local trips, events, and any situation where comfortable group travel is required."
            },
            {
                "name": "35, 40, 45, 50 Seater Bus Hire in Hadapsar",
                "description": "For larger groups, we offer buses ranging from 35 to 50 seats. Whether it's for a large family gathering, corporate event, or school trip, our spacious buses provide ample room and comfort for all passengers."
            },
            {
                "name": "Mini Bus on Rent in Hadapsar",
                "description": "Our mini bus rental service in Hadapsar offers a convenient option for group travel within the city. Enjoy comfortable seating and reliable service for any local or nearby travel needs."
            },
            {
                "name": "Bus for Wedding Near Me Hadapsar",
                "description": "Make your wedding day seamless with our bus hire service for weddings near Hadapsar. We provide stylish and comfortable buses to transport guests, ensuring a smooth and enjoyable experience on your special day."
            },
            {
                "name": "Bus Rental for Corporate Events in Hadapsar",
                "description": "Our bus rental services for corporate events in Hadapsar include transportation solutions tailored to your business needs. From executive transport to large group shuttles, we offer reliable and professional services."
            },
            {
                "name": "Hire AC Luxury Bus on Rent in Magarpatta City",
                "description": "For a luxurious travel experience, hire an AC luxury bus from Amruta Travels in Magarpatta City. Our luxury buses are equipped with top-notch amenities to ensure a comfortable and enjoyable journey for any special event or trip."
            },
            {
                "name": "Tempo Traveller on Rent in Hadapsar",
                "description": "Our tempo traveller rental service in Hadapsar is perfect for medium-sized groups. Whether you're planning a local excursion or an outstation trip, our tempo travellers offer comfort and reliability."
            },
            {
                "name": "Mini Bus on Rent in Magarpatta Hadapsar",
                "description": "Available for both local and outstation trips, our mini buses in Magarpatta Hadapsar provide a convenient and comfortable travel solution. Ideal for various group sizes and purposes."
            },
            {
                "name": "Bus on Rent in Magarpatta City",
                "description": "For any travel needs in Magarpatta City, Amruta Travels offers bus rentals tailored to your requirements. From local trips to special events, our fleet includes options to suit all group sizes and preferences."
            },
            {
                "name": "Bus Hire for Corporate Company in Pune",
                "description": "Our bus hire services are designed to meet the needs of corporate companies in Pune. We offer a range of options to accommodate different group sizes and ensure professional and efficient transport for business purposes."
            },
            {
                "name": "AC and Non-AC Monthly Bus Rental Services",
                "description": "Amruta Travels provides flexible monthly bus rental services, both AC and non-AC, to cater to your ongoing transportation needs. Ideal for long-term projects, regular corporate travel, or other continuous requirements."
            },
            {
                "name": "Amruta Travels Pune On Rent",
                "description": "Amruta Travels is your trusted partner for vehicle rentals in Pune. Our diverse fleet includes mini buses, Urbania, tempo travellers, and luxury buses, ensuring you have the perfect vehicle for any occasion in Hadapsar and beyond."
            }
        ],
      "tableData": [
    ["- Mini Bus On Rent in Magarpatta City-Hadapsar", "- Urbania Bus on Rent in Hadapsar"],
    ["- Corporate Bus Hire in Hadapsar Pune", "- 14, 17, 25, 32 Seater on Rent in Hadapsar-Magarpatta"],
    ["- 35, 40, 45, 50 Seater Bus Hire in Hadapsar", "- Mini Bus on Rent in Hadapsar"],
    ["- Bus for Wedding Near Me Hadapsar", "- Bus Rental for Corporate Events in Hadapsar"],
    ["- Hire AC Luxury Bus on Rent in Magarpatta City", "- Tempo Traveller on Rent in Hadapsar"],
    ["- Mini Bus on Rent in Magarpatta Hadapsar", "- Bus On Rent in Magarpatta City"],
    ["- Bus Hire For Corporate Company in Pune", "- AC and Non-AC Monthly Bus Rental Services"],
    ["- Amruta Travels Pune On Rent", "- Mini Bus on Rent in Hadapsar"],
    ["- Tempo Traveller on Rent in Hadapsar", "- Force Urbania on Rent in Hadapsar"]
],
        "whychoose": [
            {
                "WhyChooseheading": "Diverse Fleet of Vehicles",
                "WhyChoosedescription": "At Amruta Travels, we offer a wide range of buses to suit various needs, from small mini-buses to large 50-seater coaches. Whether you’re organizing a small family trip or a large corporate event, we have the perfect vehicle for you."
            },
            {
                "WhyChooseheading": "Top-Notch Comfort and Amenities",
                "WhyChoosedescription": "Our buses are equipped with modern amenities to ensure a comfortable journey. Enjoy features like plush seating, air conditioning, and entertainment options. We prioritize your comfort so you can relax and enjoy the ride."
            },
            {
                "WhyChooseheading": "Experienced and Professional Drivers",
                "WhyChoosedescription": "Our drivers are highly trained and experienced, ensuring safe and smooth travel. They are familiar with local routes and are committed to providing a professional and courteous service."
            },
            {
                "WhyChooseheading": "Transparent and Competitive Pricing",
                "WhyChoosedescription": "We offer clear, upfront pricing with no hidden fees. Our rates are competitive, and we provide detailed quotes to help you understand exactly what you’re paying for."
            },
            {
                "WhyChooseheading": "Reliable and Punctual Service",
                "WhyChoosedescription": "We understand the importance of timeliness. Our buses are well-maintained and adhere to strict schedules to ensure you reach your destination on time."
            },
            {
                "WhyChooseheading": "Exceptional Customer Support",
                "WhyChoosedescription": "Our customer support team is available to assist you with booking and any inquiries you may have. We’re here to ensure your experience is seamless and stress-free."
            },
            {
                "WhyChooseheading": "Flexibility and Customization",
                "WhyChoosedescription": "We offer customizable rental packages to fit your specific needs. Whether it’s for a corporate event, family outing, or any other occasion, we can tailor our services to meet your requirements."
            },
            {
                "WhyChooseheading": "Safety and Cleanliness",
                "WhyChoosedescription": "We prioritize safety and cleanliness. Our buses undergo regular maintenance and thorough cleaning to provide a hygienic and secure travel environment."
            },
            {
                "WhyChooseheading": "Convenient Booking Process",
                "WhyChoosedescription": "Booking with us is easy and convenient. You can contact us directly or use our online booking system to reserve your bus quickly and efficiently."
            },
            {
                "WhyChooseheading": "Proven Track Record",
                "WhyChoosedescription": "With years of experience in the industry, Amruta Travels has a proven track record of providing excellent bus rental services. Our satisfied customers are a testament to our commitment to quality."
            }
        ]
    };

    const faqData = [
        {
            "question": "What types of buses are available for rent in Hadapsar?",
            "answer": "We offer a range of buses including 14-seater mini-buses, 17-seater mini-buses, 32-seater, 35-seater, 40-seater, 45-seater, and 50-seater buses. We also provide luxury AC buses, Urbania buses, and tempo travellers."
        },
        {
            "question": "How do I book a bus with Amruta Travels?",
            "answer": "You can book a bus by contacting us directly through our phone number or email. Alternatively, you can use our online booking system on our website to reserve your bus conveniently."
        },
        {
            "question": "Are there any hidden charges?",
            "answer": "No, we provide clear and upfront pricing with no hidden charges. Our quotes are detailed, so you know exactly what you’re paying for."
        },
        {
            "question": "How far in advance should I book a bus?",
            "answer": "We recommend booking your bus as early as possible to ensure availability, especially during peak seasons or for large groups. However, we accommodate last-minute bookings whenever possible."
        },
        {
            "question": "What should I do if I need to cancel or modify my booking?",
            "answer": "Please contact our customer support team as soon as possible if you need to cancel or modify your booking. We will assist you with the necessary changes according to our cancellation and modification policy."
        },
        {
            "question": "Are the buses equipped with air conditioning?",
            "answer": "Yes, all our buses are equipped with air conditioning for your comfort. We also offer luxury AC buses for an upgraded experience."
        },
        {
            "question": "What amenities are provided on the buses?",
            "answer": "Amenities vary depending on the type of bus. Standard features include comfortable seating, air conditioning, and sometimes entertainment options. Luxury and Urbania buses offer additional amenities for a premium experience."
        },
        {
            "question": "How do you ensure the safety of passengers?",
            "answer": "Our buses undergo regular maintenance and safety checks to ensure they are in excellent condition. Our drivers are trained and experienced, and we adhere to strict safety standards."
        },
        {
            "question": "Can I customize the rental package for my trip?",
            "answer": "Yes, we offer customizable rental packages to fit your specific needs. Contact us to discuss your requirements, and we will tailor our services to meet them."
        },
        {
            "question": "What areas do you serve for bus rentals?",
            "answer": "We provide bus rental services primarily in Hadapsar and surrounding areas. For trips beyond these areas, please contact us to discuss your travel needs and arrangements."
        }
    ];
    
    const testimonials = [
        {
            "name": "Miss Priya Deshmukh",
            "text": "Our company recently used Amruta Travels for a large corporate event in Hadapsar, and I couldn’t be happier with the service we received. The 45-seater bus was impecbusly clean, well-maintained, and equipped with all the necessary amenities to ensure a comfortable journey for our team. The driver was punctual, professional, and extremely knowledgeable about the local routes. The booking process was straightforward, and the staff at Amruta Travels were very accommodating to our specific needs. I highly recommend their bus rental services for any corporate or large group event!"
        },
        {
            "name": "Mr. Rajesh Patel",
            "text": "I recently organized a family reunion and chose Amruta Travels for our bus rental needs. We hired a 32-seater bus for our trip in Hadapsar, and the experience was fantastic. The bus was spacious, clean, and comfortable, which made our journey enjoyable. The driver was courteous and ensured that we reached our destinations safely and on time. The customer service was exceptional, with prompt responses and helpful assistance throughout the booking process. I will definitely use Amruta Travels again for future trips and highly recommend them for their excellent service and reliability."
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
        heading: "Bus on Rent in Hadapsar  Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus on Rent in Hadapsar | Mini Bus & Corporate Bus Hire</title>
  <meta name="description" content="Looking for bus hire in Hadapsar? Rent mini buses, Urbania buses, and luxury AC buses for corporate events, weddings, and more. Options include 14, 17, 25, 32, 35, 40, 45, and 50-seater buses. Book now with Amruta Travels for all your travel needs!" />
  <meta name="keywords" content="Bus on Rent in Hadapsar, Mini Bus on Rent in Magarpatta City Hadapsar, Urbania Bus on Rent in Hadapsar, Corporate Bus Hire in Hadapsar Pune, 14 Seater, 17 Seater, 25 Seater, 32 Seater on Rent in Hadapsar Magarpatta, 35 Seater, 40 Seater, 45 Seater, 50 Seater Bus Hire in Hadapsar, Mini Bus on Rent in Hadapsar, Bus for Wedding Near Me Hadapsar, Bus Rental for Corporate Events in Hadapsar, Hire AC Luxury Bus on Rent in Magarpatta City, Tempo Traveller on Rent in Hadapsar, Mini Bus on Rent in Magarpatta Hadapsar, Bus on Rent in Magar Magarpatta City, Bus Hire for Corporate Company in Pune, AC and Non-AC Monthly Bus Rental Services, Amruta Travels Pune on Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers bus rentals in Hadapsar for corporate events, weddings, picnics, and more. Rent mini buses, Urbania buses, AC luxury buses, and Tempo Travellers in various sizes including 14, 17, 25, 32, 35, 40, 45, and 50-seater buses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-on-rent-in-hadapsar",
        "logo": "https://amrutatravel.com/images/bus-on-rent-hadapsar.jpg",
        "image": "https://amrutatravel.com/images/bus-on-rent-hadapsar.jpg",
        "priceRange": "₹1500 - ₹35000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-on-rent-in-hadapsar",
          "priceCurrency": "INR",
          "price": "1500",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "200"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit Kumar"
            },
            "datePublished": "2024-06-30",
            "reviewBody": "We rented a 32-seater bus for our company outing in Hadapsar. The bus was in great condition and the service was top-notch. Will definitely book again."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Preeti Deshmukh"
            },
            "datePublished": "2024-08-15",
            "reviewBody": "Booked a luxury AC bus for a wedding in Hadapsar. Excellent service and the driver was very polite and professional. Highly recommended!"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Hadapsar, Pune",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.5186",
            "longitude": "73.9250"
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://amrutatravel.com/bus-on-rent-in-hadapsar"
        },
        "keywords": "Bus on Rent in Hadapsar, Mini Bus on Rent in Magarpatta City Hadapsar, Urbania Bus on Rent in Hadapsar, Corporate Bus Hire in Hadapsar Pune, 14 Seater, 17 Seater, 25 Seater, 32 Seater on Rent in Hadapsar Magarpatta, 35 Seater, 40 Seater, 45 Seater, 50 Seater Bus Hire in Hadapsar, Mini Bus on Rent in Hadapsar, Bus for Wedding Near Me Hadapsar, Bus Rental for Corporate Events in Hadapsar, Hire AC Luxury Bus on Rent in Magarpatta City, Tempo Traveller on Rent in Hadapsar, Mini Bus on Rent in Magarpatta Hadapsar, Bus on Rent in Magar Magarpatta City, Bus Hire for Corporate Company in Pune, AC and Non-AC Monthly Bus Rental Services, Amruta Travels Pune on Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-38.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Pune to Panvel for Amruta Travels</h3>
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
export default BusRentInHadapsar;