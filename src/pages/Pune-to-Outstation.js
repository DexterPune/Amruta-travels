
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function Outstation(){

  const cardData = 
    {
      keyword: 'Pune to Outstation Tempo Traveller',
      heading: 'Amruta Travels: Pune Outstation Tempo Traveller',
      headingDescription: 'When it comes to exploring destinations beyond Pune, Amruta Travels offers exceptional outstation bus services designed for comfort, reliability, and affordability. Whether you are heading to a serene hill station, a vibrant city, or a sacred pilgrimage site, our Pune Outstation bus ensure a seamless travel experience. Here’s everything you need to know about our services and some top outstation destinations from Pune.',
      top:"Top Outstation Destinations from Pune with Amruta Travels Service:",
       topPlaces : [
        {
          title: "1. Mumbai",
          description: "The bustling metropolis of Mumbai, just a few hours from Pune, is a hub of commerce, culture, and entertainment. Explore iconic landmarks like the Gateway of India, Marine Drive, and the vibrant markets of Colaba and Bandra."
        },
        {
          title: "2. Lonavala and Khandala",
          description: "Perfect for a weekend getaway, the hill stations of Lonavala and Khandala offer stunning landscapes, pleasant weather, and attractions like Bhushi Dam, Karla Caves, and the picturesque Tiger’s Leap."
        },
        {
          title: "3. Mahabaleshwar",
          description: "Known for its lush green hills and panoramic views, Mahabaleshwar is a popular hill station. Enjoy attractions such as Venna Lake, Wilson Point, and the ancient Mahabaleshwar Temple."
        },
        {
          title: "4. Panchgani",
          description: "Located close to Mahabaleshwar, Panchgani is renowned for its beautiful viewpoints, including Table Land and Sydney Point. The charming atmosphere and pleasant climate make it a great retreat."
        },
        {
          title: "5. Shirdi",
          description: "A revered pilgrimage site, Shirdi is famous for the Sai Baba Temple. Amruta Travels offers comfortable rides to this spiritual destination, ensuring a peaceful and stress-free journey."
        },
        {
          title: "6. Goa",
          description: "For a longer escape, head to Goa, known for its beautiful beaches, vibrant nightlife, and Portuguese heritage. Enjoy the sun, sand, and sea while exploring popular spots like Baga Beach, Anjuna, and Old Goa."
        },
        {
          title: "7. Aurangabad",
          description: "Visit Aurangabad to explore the historical wonders of Ajanta and Ellora Caves, the Bibi Ka Mebarak, and the Daulatabad Fort. This city offers a rich blend of history and culture."
        },
        {
          title: "8. Nashik",
          description: "Famous for its vineyards and religious sites, Nashik is home to Sula Vineyard, Panchavati, and the Kalaram Temple. It’s a perfect destination for both wine enthusiasts and spiritual seekers."
        },
        {
          title: "9. Alibaug",
          description: "For a coastal escape, Alibaug offers sandy beaches, forts, and a relaxing atmosphere. Enjoy the serene beaches, such as Alibaug Beach and Nagaon Beach, and visit historical sites like the Kolaba Fort."
        },
        {
          title: "10. Kolkata",
          description: "Although a bit farther away, Kolkata is a cultural capital known for its colonial architecture, museums, and vibrant street food. Explore landmarks like the Victoria Memorial, Howrah Bridge, and the Indian Museum."
        }
      ],
      
    
        "services": [
          {
            "name": "Pune Outstation Taxi Booking",
            "description": "Booking an outstation taxi with Amruta Travels is straightforward and hassle-free. Our booking process is user-friendly, allowing you to secure your ride quickly through our online platform or by contacting our customer support team."
          },
          {
            "name": "Pune Outstation Bus Rental",
            "description": "For those who prefer to drive themselves, Amruta Travels offers a range of Pune Outstation Bus Rental options. Choose from our well-maintained fleet and enjoy the freedom of driving to your chosen destination at your own pace."
          },
          {
            "name": "Pune Outstation Chauffeur-Driven bus",
            "description": "Experience the convenience of Pune Outstation Chauffeur-Driven bus with Amruta Travels. Our professional drivers are well-versed with various routes, ensuring a smooth and stress-free journey while you relax and enjoy the ride."
          },
          {
            "name": "Pune Outstation One-Way Taxi",
            "description": "Planning a trip with a single destination in mind? Our Pune Outstation One-Way Taxi service provides a cost-effective solution for one-way travel, allowing you to reach your destination without the hassle of returning to Pune."
          },
          {
            "name": "Pune Outstation Round Trip bus",
            "description": "For a more comprehensive travel experience, opt for our Pune Outstation Round Trip bus. This service is perfect for those who wish to explore a destination and return to Pune, offering convenience and value for money."
          },
          {
            "name": "Pune Outstation Luxury Taxi",
            "description": "Travel in style with our Pune Outstation Luxury Taxi service. Enjoy premium comfort and high-end amenities in our luxurious vehicles, making your outstation journey a memorable experience."
          },
          {
            "name": "Pune Outstation Self-Drive Bus Rental",
            "description": "If you prefer to drive yourself, our Pune Outstation Self-Drive Bus Rental service gives you the flexibility to explore at your own pace. Choose from a range of well-maintained vehicles and enjoy a personalized travel experience."
          },
          {
            "name": "Pune Outstation Travel Packages",
            "description": "Make your trip more enjoyable with our Pune Outstation Travel Packages. We offer customized packages that include transportation, accommodation, and sightseeing options, tailored to your preferences and needs."
          },
          {
            "name": "Pune Outstation Private Bus Hire",
            "description": "For a more personalized travel experience, opt for our Pune Outstation Private C Hire service. Enjoy the privacy and comfort of a dedicated vehicle for your journey, with flexible options to suit your schedule and preferences."
          },
          {
            "name": "Pune Outstation bus",
            "description": "When you need reliable and comfortable Pune Outstation bus, Amruta Travels has got you covered. Our fleet of well-maintained vehicles and professional drivers ensure a smooth and enjoyable travel experience."
          },
          {
            "name": "Outstation Taxi Service Pune",
            "description": "Our Outstation Taxi Service in Pune provides a wide range of options to suit different travel needs. From budget-friendly choices to luxury rides, we offer services that cater to all types of travellers."
          },
          {
            "name": "One Way bus Pune",
            "description": "For single journeys to outstation destinations, our One-Way bus Pune service offers a cost-effective and convenient solution. Book a one-way bus and enjoy a comfortable ride without the need to return to Pune."
          },
          {
            "name": "Best Outstation bus Service in Pune",
            "description": "Amruta Travels is renowned for being the Best Outstation bus Service in Pune. Our commitment to transparency, reliability, and customer satisfaction sets us apart from the competition, making us the preferred choice for outstation travel."
          },
          {
            "name": "Outstation bus Service in Pune",
            "description": "When looking for an Outstation bus Service in Pune, Amruta Travels offers unparalleled service quality and competitive rates. Whether you need a quick getaway or an extended trip, our services are designed to meet your needs efficiently and comfortably."
          },
          {
            "name": "Outstation Bus Rental Pune",
            "description": "For a flexible and personalized travel experience, choose Outstation Bus Rental Pune with Amruta Travels. Our fleet of well-maintained vehicles is available for rental, allowing you to drive yourself to your destination while enjoying the freedom to explore at your own pace."
          },
          {
            "name": "Taxi in Pune for Outstation",
            "description": "Need a reliable ride for your outstation journey? Our Taxi in Pune for Outstation service offers a wide selection of vehicles and professional drivers to ensure a comfortable and efficient trip."
          },
          {
            "name": "Taxi Service in Pune for Outstation",
            "description": "Amruta Travels offers comprehensive Taxi Service in Pune for Outstation, designed to cater to various travel needs. Our services include one-way and round-trip options, with a focus on customer satisfaction and punctuality."
          },
          {
            "name": "Book Outstation bus Pune",
            "description": "Booking an outstation bus has never been easier with Amruta Travels. Simply Book Outstation bus Pune through our user-friendly online platform or by contacting our customer support team. We provide clear pricing, efficient booking, and reliable service for all your outstation travel requirements."
          },
          {
            "name": "bus Booking in Pune for Outstation",
            "description": "When you need to bus Booking in Pune for Outstation, Amruta Travels offers a straightforward and convenient process. Our booking system allows you to choose your vehicle, specify your destination, and get an accurate fare estimate."
          },
          {
            "name": "Outstation Taxi in Pune",
            "description": "Our Outstation Taxi in Pune service is designed to meet the needs of travellers heading beyond the city limits. With a variety of vehicle options and competitive rates, we ensure that you receive quality service for your outstation trips."
          },
          {
            "name": "Pune Airport to Kolhapur bus",
            "description": "For a smooth journey from Pune Airport to Kolhapur, choose Amruta Travels. Our service provides convenient and comfortable transportation from the airport to Kolhapur, ensuring a stress-free start to your trip."
          },
          {
            "name": "Pune Bus Rental Outstation",
            "description": "If you prefer driving yourself, our Pune Bus Rental Outstation service offers a range of rental options. Select a well-maintained vehicle from our fleet and embark on your outstation journey with the flexibility and freedom of self-drive."
          },
          {
            "name": "Pune to Gokarna bus",
            "description": "Heading to the serene beaches of Gokarna? Our Pune to Gokarna bus service provides comfortable and reliable transportation to this popular destination. Enjoy the scenic drive and arrive refreshed at your beachside retreat with Amruta Travels."
          },
          {
            "name": "Pune to Outstation Taxi",
            "description": "For all your outstation travel needs, Pune to Outstation Taxi services from Amruta Travels offer a reliable and convenient solution. Whether it’s a short trip or a longer journey, our services ensure a smooth and enjoyable travel experience."
          },
          {
            "name": "Pune Outstation bus On Rent in Pune Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Pune Outstation bus On Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
          }
        ],
      
      
        "tableData": [
            ["-Pune Tempo Traveller Hire for Outstation", "-Pune to Outstation Tempo Traveller"],
            ["-Pune to Goa Tempo Traveller", "-Pune to Kolhapur Tempo Traveller Rent"],
            ["-Pune Tempo Traveller Hire for Outstation", "-Pune to Nashik Tempo Traveller Rent"],
            ["-Pune to Mumbai Tempo Traveller Rent", "-Pune to Pandharpur Tempo Traveller Fare"],
            ["-Pune Mumbai Airport Drop Tempo Traveller on Rent", "-Tempo Traveller On Rent for Wedding in Pune"],
            ["-17 Seater Tempo Traveller for Outstation in Pune", "-Luxury Tempo Traveller on Rent in Pune"],
            ["-Outstation Tempo Traveller for Picnic on Rent in Pune", "-Pune to Outstation Tempo Traveller Rate in Pune"]
          ],
          "whychoose": [
            {
              "WhyChooseheading": "Why Choose Amruta Travels for Pune Outstation bus?",
              "WhyChoosedescription": "When it comes to Pune Outstation bus, Amruta Travels is the preferred choice for travellers seeking a blend of comfort, reliability, and exceptional service. Our commitment to quality and customer satisfaction makes us stand out in the crowded travel market. Here’s why choosing Amruta Travels for your outstation journey is the best decision:"
            },
            {
              "WhyChooseheading": "Transparent Pricing:",
              "WhyChoosedescription": "At Amruta Travels, we believe in maintaining transparency in our pricing structure. You will receive a detailed fare estimate before booking, which includes all applibusle charges with no hidden fees. Our straightforward pricing ensures that you know exactly what to expect, making budgeting for your trip easier and stress-free."
            },
            {
              "WhyChooseheading": "Wide Range of Vehicles:",
              "WhyChoosedescription": "Our diverse fleet caters to all types of travel needs. From budget-friendly sedans and spacious SUVs to luxurious premium vehicles, we offer a range of options to match your requirements. Whether you're traveling solo, with family, or in a large group, we have the ideal vehicle to ensure a comfortable journey."
            },
            {
              "WhyChooseheading": "Professional Drivers:",
              "WhyChoosedescription": "Our drivers are highly experienced, professionally trained, and committed to providing exceptional service. They are familiar with the best routes and local conditions, ensuring that you reach your destination safely and efficiently. With a focus on punctuality and customer comfort, our drivers make your travel experience enjoyable and stress-free."
            },
            {
              "WhyChooseheading": "Reliable Service:",
              "WhyChoosedescription": "Reliability is at the core of our service. We are dedicated to ensuring that your bus arrives on time and that you reach your destination as planned. Our track record of punctuality and dependability is a testament to our commitment to providing a hassle-free travel experience."
            },
            {
              "WhyChooseheading": "Easy Booking Process:",
              "WhyChoosedescription": "Booking with Amruta Travels is both simple and convenient. Our user-friendly online platform allows you to book your ride in just a few clicks. Alternatively, you can reach out to our customer support team for personalized assistance. We offer flexible payment options to suit your preferences, making the booking process seamless."
            },
            {
              "WhyChooseheading": "Flexible Options:",
              "WhyChoosedescription": "We understand that travel plans can vary, which is why we offer flexible options tailored to your needs. Whether you require a one-way trip, a round-trip, or a customized travel package, we are equipped to accommodate your specific requirements. Our services are designed to adapt to your schedule and preferences, ensuring a personalized experience."
            },
            {
              "WhyChooseheading": "Comfortable Rides:",
              "WhyChoosedescription": "Our fleet is regularly maintained and equipped with modern amenities to ensure a comfortable ride. Each vehicle is designed to offer ample space, clean interiors, and features that enhance your travel experience. We prioritize your comfort, so you can relax and enjoy the journey, whether it's a short trip or a long-distance journey."
            },
            {
              "WhyChooseheading": "Excellent Customer Support:",
              "WhyChoosedescription": "At Amruta Travels, we are committed to providing outstanding customer support. Our dedicated team is available around the clock to assist with any inquiries, address concerns, and ensure that your travel experience is smooth and pleasant. From the moment you book until you reach your destination, we are here to support you every step of the way."
            }
          ],
    };

    
   
    const faqData = [
        {
          question: "What destinations do you cover for outstation bus from Pune?",
          answer: "We cover a wide range of destinations including Mumbai, Lonavala, Mahabaleshwar, Shirdi, Goa, Nashik, and many more. If you have a specific destination in mind, please contact us to check availability."
        },
        {
          question: "How do I book an outstation bus with Amruta Travels?",
          answer: "You can book an outstation bus through our user-friendly online booking system or by contacting our customer support team directly. We offer flexible booking options to suit your needs."
        },
        {
          question: "Are there any additional charges for outstation bus?",
          answer: "We provide a detailed fare estimate before you book, which includes all applibusle charges. There are no hidden fees, and you will be informed of any additional costs such as tolls or parking in advance."
        },
        {
          question: "Can I modify or cancel my outstation bus booking?",
          answer: "Yes, you can modify or cancel your booking as per our policy. Please contact our customer support team for assistance with any changes to your reservation."
        },
        {
          question: "What types of vehicles are available for outstation travel?",
          answer: "We offer a range of vehicles including sedans, SUVs, luxury Buses, and self-drive options. Choose the vehicle that best suits your travel needs and preferences."
        },
        {
          question: "Is there a limit on the distance for outstation trips?",
          answer: "We accommodate both short and long-distance outstation trips. If you have a specific distance or destination in mind, please let us know, and we will provide the necessary arrangements."
        },
        {
          question: "How can I contact Amruta Travels for support or inquiries?",
          answer: "You can reach our customer support team via phone, email, or through our website. We are available to assist you with any questions or concerns regarding your outstation bus service."
        },
        {
          question: "What if I need a bus for a long-duration outstation trip?",
          answer: "We offer customized packages for long-duration trips. Contact us to discuss your requirements, and we will tailor a package that meets your needs and ensures a comfortable journey."
        }
      ];
      
    

      const testimonials = [
        {
          name: "Mrs. Aditi Sharma",
          text: "I recently used Amruta Travels for an outstation trip from Pune to Mumbai, and I couldn't be more impressed. The booking process was smooth and transparent, with no hidden charges. The driver was punctual, professional, and made sure we had a comfortable journey. The vehicle was clean and well-maintained, which made the trip even more pleasant. I highly recommend Amruta Travels for anyone looking for reliable and efficient outstation bus services!"
        },
        {
          name: "Mr. Rajesh Kulkarni",
          text: "Amruta Travels made our outstation trip from Pune to Mahabaleshwar a delightful experience. The bus was spacious and comfortable, and the driver was very courteous and knowledgeable about the best routes. We appreciated the flexibility in our schedule and the clear communication throughout the process. The fare was reasonable, and the service exceeded our expectations. I will definitely choose Amruta Travels for all my future outstation travels!"
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
        heading: "Pune to Outstation Tempo Traveller Contact Number",
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
  <title>Contact: +91 8421333435 | Amruta Travel | Pune to Outstation Tempo Traveller on Rent | Affordable Luxury for Your Trip</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent Affordable Tempo Traveller for Outstation Trips from Pune to Goa, Kolhapur, Nashik, Mumbai, and more. Spacious 17 Seater and Luxury Options for Weddings, Picnics, and Family Tours.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shivaji Nagar, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411005",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-outstation-tempo-traveller",
        "logo": "https://amrutatravel.com/images/pune-to-outstation-tempo-traveller.jpg",
        "image": "https://amrutatravel.com/images/pune-to-outstation-tempo-traveller.jpg",
        "priceRange": "₹5000 - ₹20000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-outstation-tempo-traveller",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        }
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
    <img src='\img\Keyword Based Image\Keyword Based Image-03.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Pune Outstation bus with Amruta Travels</h3>
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
export default Outstation;