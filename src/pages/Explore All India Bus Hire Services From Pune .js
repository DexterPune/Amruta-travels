
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  ALlIndiaBus(){

  const cardData = 
    {
        "keyword": "All India Bus Hire Services from Pune",
        "heading": "Amruta Travels: All India Bus Hire Services from Pune",
        "headingDescription": "If you're planning an extensive journey across India and need reliable transportation from Pune, Amruta Travels offers comprehensive bus hire services to meet all your travel needs. Our All India Bus Hire Services are designed to provide comfort, safety, and flexibility, ensuring a seamless travel experience as you explore diverse destinations across the country.",
        "top": "Top All India Bus Hire Services from Pune:",
        "topPlaces": [
            {
                "title": "1. Pune to Mumbai Bus Hire",
                "description": "Travel comfortably and efficiently between Pune and Mumbai with our well-maintained buses. Whether it's for a corporate event, family visit, or sightseeing, our service ensures a smooth journey with amenities to keep you relaxed throughout the trip."
            },
            {
                "title": "2. Pune to Goa Bus Rental",
                "description": "Explore the vibrant beaches and lively culture of Goa with our customized bus rental services. Ideal for large groups and family vacations, our buses provide a comfortable ride with ample space for luggage and personal belongings."
            },
            {
                "title": "3. Pune to Delhi Bus Hire",
                "description": "Experience a hassle-free journey from Pune to the capital city of Delhi. Our long-distance buses are equipped with the latest facilities to make your travel enjoyable. Perfect for business trips or exploring historical landmarks in Delhi."
            },
            {
                "title": "4. Pune to Bangalore Bus Service",
                "description": "Travel to Bangalore, the Silicon Valley of India, with ease and comfort. Our buses are equipped to handle long distances and provide a pleasant experience with modern amenities, ensuring you arrive refreshed and ready for your business or leisure activities."
            },
            {
                "title": "5. Pune to Jaipur Bus Rental",
                "description": "Discover the royal heritage of Jaipur with our efficient bus hire services. From the magnificent forts to vibrant bazaars, our buses offer a comfortable way to explore the Pink City, catering to both small and large groups."
            },
            {
                "title": "6. Pune to Hyderabad Bus Hire",
                "description": "Enjoy a smooth ride from Pune to Hyderabad, exploring the rich culture and cuisine of the city. Our bus rental service ensures a comfortable journey with professional drivers who know the best routes and local attractions."
            },
            {
                "title": "7. Pune to Ahmedabad Bus Service",
                "description": "Whether you're visiting Ahmedabad for business or leisure, our bus hire services ensure a comfortable journey. Explore the vibrant city known for its architecture and food with ease, thanks to our reliable transportation."
            },
            {
                "title": "8. Pune to Chennai Bus Rental",
                "description": "Travel to Chennai with our well-equipped buses, offering a comfortable ride across states. Ideal for group travel, our service ensures that you experience the southern hospitality and cultural richness of Chennai with minimal hassle."
            },
            {
                "title": "9. Pune to Udaipur Bus Hire",
                "description": "Explore the enchanting city of Udaipur, known for its lakes and palaces, with our specialized bus hire services. Our buses are designed to provide a luxurious experience for your journey, ensuring you enjoy the scenic beauty of Rajasthan comfortably."
            },
            {
                "title": "10. Pune to Amritsar Bus Service",
                "description": "Make your trip to Amritsar, home to the Golden Temple, a memorable one with our efficient bus services. Our buses are equipped to ensure a pleasant journey, allowing you to focus on the spiritual and cultural experiences awaiting you in Punjab."
            }
        ],
        "services": [
            {
                "name": "Pune to Kolhapur Bus Rental Service",
                "description": "Looking for a reliable Pune to Kolhapur bus rental service? Whether you're planning a family trip, corporate outing, or just a day of exploration, we offer comfortable and efficient bus hire solutions. From luxury buses to affordable options, Amruta Travels provides the best bus rental service from Pune to Kolhapur, ensuring a smooth and enjoyable journey. Book your Pune to Kolhapur bus hire today for a stress-free travel experience."
            },
            {
                "name": "Pune to Bhandardara Bus on Rent",
                "description": "Explore the scenic beauty of Bhandardara with our Pune to Bhandardara bus on rent service. Ideal for family vacations, corporate retreats, or school picnics, our buses are equipped for a comfortable ride. Enjoy the picturesque landscapes of Bhandardara while traveling in comfort and style with our reliable bus rental services. Contact Amruta Travels for affordable and convenient bus rental options from Pune to Bhandardara."
            },
            {
                "name": "Pune to Pandharpur Bus on Rent",
                "description": "For a spiritual journey or a family visit to Pandharpur, Amruta Travels offers top-notch Pune to Pandharpur bus rental services. Our buses are perfect for temple visits, group tours, and special events. Enjoy a comfortable ride with ample space and amenities, making your trip from Pune to Pandharpur a pleasant experience. Book your bus hire with us and ensure a hassle-free pilgrimage."
            },
            {
                "name": "Pune to Tuljapur Darshan Bus Hire",
                "description": "Planning a visit to the sacred Tuljapur temple? Our Pune to Tuljapur bus hire service provides a convenient and comfortable travel option. With our well-maintained buses and professional drivers, your journey to Tuljapur will be smooth and enjoyable. Ideal for groups and family trips, our bus rental service ensures a comfortable and memorable Darshan experience."
            },
            {
                "name": "Pune to Jyotiba Bus Hire",
                "description": "Discover the spiritual and scenic beauty of Jyotiba with our Pune to Jyotiba bus hire services. Whether it's a pilgrimage or a group outing, we offer comfortable buses for your journey from Pune to Jyotiba. Enjoy a seamless travel experience with our reliable and efficient bus rental options. Book with Amruta Travels for a comfortable ride and exceptional service."
            },
            {
                "name": "Pune to Nashik Darshan Bus Hire",
                "description": "Experience the best of Nashik with our Pune to Nashik bus hire service. Perfect for Darshan, sightseeing, and group travel, our buses provide comfort and convenience for your journey. Explore the vibrant city of Nashik with ease, thanks to our professional bus rental service. Choose Amruta Travels for an enjoyable and hassle-free trip from Pune to Nashik."
            },
            {
                "name": "Pune to Trimbakeshwar Bus on Rent",
                "description": "Embark on a spiritual journey to Trimbakeshwar with our Pune to Trimbakeshwar bus on rent service. Our buses are ideal for temple visits, religious tours, and group travels. Enjoy a comfortable and smooth ride with our well-maintained vehicles and experienced drivers. Book your bus rental with Amruta Travels for a memorable and convenient visit to Trimbakeshwar."
            },
            {
                "name": "Pune to Bhimashankar Bus Tour Package",
                "description": "Explore the sacred temple town of Bhimashankar with our Pune to Bhimashankar bus tour package. Our service offers a comfortable and efficient travel option for your visit. Perfect for religious tours, family trips, and corporate outings, our buses ensure a pleasant journey to Bhimashankar. Contact Amruta Travels for a well-organized and enjoyable bus tour package."
            },
            {
                "name": "Pune to Konkan Darshan Bus Package",
                "description": "Discover the beauty of Konkan with our Pune to Konkan Darshan bus package. Ideal for family vacations, group tours, and corporate outings, our service provides a comfortable and convenient way to explore Konkan's stunning landscapes and attractions. Enjoy a seamless travel experience with Amruta Travels and make the most of your Konkan tour."
            },
            {
                "name": "Pune to Sade Teen Shakti Peeth Package",
                "description": "Experience the spiritual significance of the Sade Teen Shakti Peeths with our Pune to Sade Teen Shakti Peeth package. Our bus rental service offers a comfortable and organized way to visit these sacred sites. Perfect for religious tours and group travel, our buses ensure a smooth and enjoyable journey. Book with Amruta Travels for a memorable pilgrimage."
            },
            {
                "name": "5 Jyotirlinga Darshan from Pune Maharashtra",
                "description": "Embark on a divine journey with our 5 Jyotirlinga Darshan from Pune Maharashtra service. Our bus rental options provide a comfortable and convenient way to visit these sacred Jyotirlingas. Ideal for spiritual tours and group outings, our service ensures a hassle-free and enjoyable travel experience. Choose Amruta Travels for your Jyotirlinga Darshan."
            },
            {
                "name": "Ashtavinayak Tour from Pune by Bus",
                "description": "Explore the Ashtavinayak temples with our Ashtavinayak tour from Pune by bus. Our rental service offers a comfortable and reliable way to visit these important Ganpati temples. Perfect for group tours and family visits, our buses are equipped for a pleasant journey. Book with Amruta Travels for an exceptional Ashtavinayak Darshan experience."
            },
            {
                "name": "Pune Darshan Bus Hire on Rent",
                "description": "Discover Pune's top attractions with our Pune Darshan bus hire service. Ideal for sightseeing tours, corporate outings, and school trips, our buses provide comfort and convenience for exploring Pune. Enjoy a comprehensive city tour with Amruta Travels and make your Pune Darshan memorable."
            },
            {
                "name": "Pune to Mumbai Darshan Bus On Rent",
                "description": "Travel from Pune to Mumbai with ease using our Pune to Mumbai Darshan bus on rent service. Whether you're exploring Mumbai's landmarks or attending corporate events, our buses offer comfort and reliability. Choose Amruta Travels for a seamless travel experience between Pune and Mumbai."
            },
            {
                "name": "Pune to Nagpur Tadoba Darshan Bus on Rent",
                "description": "Explore Tadoba's wildlife and natural beauty with our Pune to Nagpur Tadoba Darshan bus on rent service. Ideal for wildlife enthusiasts and group trips, our buses ensure a comfortable and enjoyable journey. Book with Amruta Travels for a memorable Tadoba adventure."
            },
            {
                "name": "Amruta Travels Pune On Rent",
                "description": "For all your bus rental needs in Pune, Amruta Travels offers a range of services from local tours to long-distance travel. Our fleet includes various bus sizes and types to suit your requirements, ensuring a comfortable and reliable travel experience. Contact Amruta Travels for exceptional bus rental services in Pune."
            },
            {
                "name": "Pune to Hyderabad Mini Bus on Rent",
                "description": "Traveling from Pune to Hyderabad? Our mini bus rental service offers a comfortable and convenient solution for your journey. Perfect for smaller groups, our mini buses provide a cozy and efficient travel experience between these two vibrant cities."
            },
            {
                "name": "Pune to Goa 14, 17, 20, and 25 Seater Bus Hire",
                "description": "Enjoy a seamless trip from Pune to Goa with our range of bus hire options. Choose from 14, 17, 20, and 25-seater buses to fit your group size and travel needs. Our well-maintained buses ensure a comfortable journey to the beautiful beaches and attractions of Goa."
            },
            {
                "name": "Pune to Karnataka Bus Hire for Rent",
                "description": "Explore Karnataka with our reliable bus hire service from Pune. Whether you’re planning a trip to Bengaluru, Mysuru, or other destinations in Karnataka, our buses offer comfort and convenience for your travel needs."
            },
            {
                "name": "Pune to Maharashtra Darshan Bus on Rent",
                "description": "Embark on a spiritual journey across Maharashtra with our Maharashtra darshan bus rental service. Visit key religious sites and historical landmarks with ease, thanks to our comfortable and well-equipped buses."
            },
            {
                "name": "5, 40, 45, 50 Seater Bus Rental for Agra from Pune",
                "description": "For a trip to Agra from Pune, we offer flexible bus rental options including 5, 40, 45, and 50-seater buses. Choose the size that best suits your group and enjoy a smooth journey to see the iconic Taj Mahal and other attractions in Agra."
            },
            {
                "name": "Pan India Bus Service from Pune",
                "description": "Amruta Travels provides comprehensive Pan India bus services from Pune. Whether you're traveling to major cities or remote destinations across India, our extensive network and well-maintained fleet ensure a reliable and comfortable travel experience."
            }
        ],
        "tableData": [
            ["-Pune to Somnath Gujarat Bus On Rent", "-Pune to Badrinath Bus Hire on Rent"],
            ["-Pune to Kedarnath Bus Hire on Rent", "-Pune to Madhya Pradesh Bus for Trip"],
            ["-Pune to Mysore Ooty Bus Tour Package", "-Pune Dev Darshan Bus for Trip"],
            ["-Pune to Nashik Darshan Bus Hire", "-Pune to Rajasthan Bus On Rent"],
            ["-Bus On Hire in Ujjain", "-Best Traveller Bus On Rent"],
            ["-Pune to 12 Jyotirlinga Darshan Tour Package", "-7 Jyotirlinga Tour Package Bus Hire in Pune"],
            ["-Pune to All India Bus Hire", "-Pune to Hyderabad Mini Bus on Rent"],
            ["-Pune to Goa 14 17 20 25 Seater Bus Hire", "-Pune to Karnataka Bus Hire for Rent"],
            ["-Pune to Maharashtra Darshan Bus On Rent", "-40, 45, 50 Seater Bus Rental for Agra Pune Pune"],
            ["-Pan India Bus Service From Pune", "-Amruta Travels Pune On Rent"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Why Choose Amruta Travels for All India Bus Hire Services From Pune?",
                "WhyChoosedescription": "Amruta Travels offers a comprehensive network of bus services across India, ensuring a smooth and comfortable journey whether you're traveling to major cities or remote destinations."
            },
            {
                "WhyChooseheading": "Diverse Fleet of Buses:",
                "WhyChoosedescription": "Our fleet includes mini buses, 14, 17, 20, 25, 40, 45, and 50-seater buses, each well-maintained and equipped with modern amenities to cater to your travel needs."
            },
            {
                "WhyChooseheading": "Reliable and Professional Service:",
                "WhyChoosedescription": "We provide reliable and professional services with experienced drivers ensuring safe and efficient travel. Our customer support team is always ready to assist with any queries."
            },
            {
                "WhyChooseheading": "Competitive Pricing:",
                "WhyChoosedescription": "Our pricing is competitive and transparent, ensuring you get excellent value for your money without hidden charges."
            },
            {
                "WhyChooseheading": "Comfort and Convenience:",
                "WhyChoosedescription": "Our buses are designed for comfort with spacious seating, air conditioning, and other amenities to make your journey enjoyable."
            },
            {
                "WhyChooseheading": "Personalized Travel Solutions:",
                "WhyChoosedescription": "We offer personalized solutions tailored to your specific needs, whether for corporate events, family vacations, or spiritual journeys."
            },
            {
                "WhyChooseheading": "Trusted by Many:",
                "WhyChoosedescription": "Amruta Travels is trusted by numerous satisfied customers for our commitment to quality and customer satisfaction."
            }
        ]
  
    



    };

    const faqData = [
        {
            "question": "What types of buses are available for hire with Amruta Travels?",
            "answer": "We offer a diverse fleet including mini buses, 14, 17, 20, 25, 40, 45, and 50-seater coaches. Our vehicles come equipped with modern amenities to ensure a comfortable journey."
        },
        {
            "question": "How can I book a bus for my trip?",
            "answer": "You can easily book a bus by contacting us through our website, phone, or email. Our customer support team will assist you in selecting the right vehicle and finalizing the booking process."
        },
        {
            "question": "Are your buses equipped with air conditioning?",
            "answer": "Yes, all our buses are equipped with air conditioning to ensure a comfortable travel experience, regardless of the weather conditions."
        },
        {
            "question": "Do you offer services for long-distance and interstate travel?",
            "answer": "Absolutely! We specialize in long-distance and interstate bus hire services, covering destinations across India. Whether you're traveling within a state or across borders, we’ve got you covered."
        },
        {
            "question": "What is the process for canceling a bus booking?",
            "answer": "If you need to cancel your booking, please contact us as soon as possible. Our cancellation policy will apply, and we will guide you through the process to ensure a smooth experience."
        },
        {
            "question": "Can I request a specific type of bus or amenities?",
            "answer": "Yes, we offer personalized travel solutions and can accommodate special requests for specific types of buses and amenities. Please inform us of your requirements at the time of booking."
        },
        {
            "question": "How do I know if my booking is confirmed?",
            "answer": "Once your booking is confirmed, you will receive a confirmation email or message with all the relevant details. If you have any questions or need further confirmation, feel free to contact our customer support team."
        },
        {
            "question": "Are there any additional charges I should be aware of?",
            "answer": "Our pricing is transparent, and we aim to provide clear information on costs. Any additional charges, if applibusle, will be communicated to you upfront. We strive to ensure no hidden fees."
        },
        {
            "question": "What should I do if I encounter issues during the trip?",
            "answer": "If you experience any issues during your trip, please contact our customer support team immediately. We are available to assist and resolve any concerns to ensure a smooth journey."
        },
        {
            "question": "How far in advance should I book my bus?",
            "answer": "To secure your preferred vehicle and schedule, we recommend booking as early as possible. This is especially important during peak travel seasons or for large groups."
        }
    ];
    
    const testimonials = [
        {
            "name": "Ms. Anjali Sharma",
            "text": "Our experience with Amruta Travels for our Pune to Panvel bus service was exceptional. The booking process was straightforward, and the bus arrived on time, clean, and well-maintained. The driver was professional and courteous, making the entire journey smooth and pleasant. I highly recommend Amruta Travels for anyone needing reliable and comfortable bus services."
        },
        {
            "name": "Mr. Rajesh Patel",
            "text": "I recently used Amruta Travels for a trip from Pune to Panvel, and I couldn't be happier with the service. The vehicle was comfortable and equipped with all the necessary amenities. The driver was friendly and knowledgeable, ensuring we reached our destination safely and on time. The whole experience was hassle-free and exceeded my expectations. Amruta Travels is definitely my go-to for future trips!"
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
        heading: "All India Bus Hire Services from Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | All India Bus Hire Services From Pune | Affordable Bus Rentals for India Tour</title>
  <meta name="description" content="Book your All India bus hire service with Amruta Travels. We offer buses for popular destinations like Somnath, Badrinath, Kedarnath, Rajasthan, Goa, Mysore, and more. Affordable rentals for group tours, family trips, and pilgrimages." />
  <meta name="keywords" content="Pune to Somnath Gujarat Bus On Rent, Pune to Badrinath Bus Hire on Rent, Pune to Kedarnath Bus Hire on Rent, Pune to Madhya Pradesh Bus for Trip, Pune to Mysore Ooty Bus Tour Package, Pune Dev Darshan Bus for Trip, Pune to Nashik Darshan Bus Hire, Pune to Rajasthan Bus On Rent, Bus On Hire in Ujjain, Best Traveller Bus On Rent, Pune to 12 Jyotirlinga Darshan Tour Package, 7 Jyotirlinga Tour Package Bus Hire in Pune, Pune to All India Bus Hire, Pune to Hyderabad Mini Bus on Rent, Pune to Goa 14 17 20 25 Seater Bus Hire, Pune to Karnataka Bus Hire for Rent, Pune to Maharashtra Darshan Bus On Rent, 5, 40, 45, 50 Seater Bus Rental for Agra Pune, Pan India Bus Service From Pune, Amruta Travels Pune On Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "All India Bus Hire Services from Pune",
        "description": "Amruta Travels offers All India bus hire services from Pune to top destinations like Somnath, Badrinath, Kedarnath, Rajasthan, Goa, Mysore, and more. Affordable rental services for family trips, pilgrimages, and group tours.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/all-india-bus-hire-services-from-pune",
        "logo": "https://amrutatravel.com/images/all-india-bus-hire-services.jpg",
        "image": "https://amrutatravel.com/images/all-india-bus-hire-services.jpg",
        "priceRange": "₹5000 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/all-india-bus-hire-services-from-pune",
          "priceCurrency": "INR",
          "price": "7000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "135"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Deshmukh"
            },
            "datePublished": "2024-06-15",
            "reviewBody": "The bus rental service for our Rajasthan trip was top-notch. The bus was spacious, clean, and comfortable for the long journey. Highly recommend Amruta Travels!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sunita Khatri"
            },
            "datePublished": "2024-09-22",
            "reviewBody": "We hired a bus for our Goa family trip, and the experience was excellent. Smooth ride, helpful driver, and great service throughout the journey."
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
          "serviceUrl": "https://amrutatravel.com/all-india-bus-hire-services-from-pune"
        },
        "keywords": "Pune to Somnath Gujarat Bus On Rent, Pune to Badrinath Bus Hire on Rent, Pune to Kedarnath bus Hire on Rent, Pune to Madhya Pradesh Bus for Trip, Pune to Mysore Ooty Bus Tour Package, Pune Dev Darshan Bus for Trip, Pune to Nashik Darshan Bus Hire, Pune to Rajasthan bus bus On Rent, Bus On Hire in Ujjain, Best Traveller Bus On Rent, Pune to 12 Jyotirlinga Darshan tour package, 7 Jyotirlinga Tour Package Bus Hire in Pune, Pune to All india Bus Hire, Pune to Hyderabad Mini Bus on Rent, Pune to Goa 14 17 20 25 Seater Bus Hire, Pune to Karnataka Bus Hire for Rent, Pune to Maharashtra Darshan Bus On Rent, 5,40, 45, 50 Seater Bus Rental for Agra Pune Pune, Pan India Bus service From Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-28.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Pune to Panvel bus for Amruta Travels</h3>
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
export default ALlIndiaBus;