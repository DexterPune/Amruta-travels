
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function TempoTravellerOnRent(){

  const cardData = 
    {
      keyword: 'Tempo Traveller On Rent in Pune',
      heading: 'Amruta Travels: Tempo Traveller on Rent in Pune',
      headingDescription: 'Planning a group trip or family outing in Pune? Look no further than Amruta Travels for your Tempo Traveller rental needs. Our vehicles are equipped with a range of top-notch features designed to provide unparalleled comfort and convenience. Discover the top features that make our Tempo Travellers the best choice for your travel requirements in Pune.',
      topPlaces: [
        {
          "title": "1. Shaniwar Wada",
          "description": "A historic fortification in the heart of Pune, Shaniwar Wada is a symbol of the Maratha empire. Explore its architectural beauty and learn about the fascinating history of Pune, making it an ideal place for history enthusiasts and photographers alike."
        },
        {
          "title": "2. Aga Khan Palace",
          "description": "Known for its historical significance in India’s freedom struggle, Aga Khan Palace is a beautiful blend of history and architecture. Visit this majestic palace to learn more about Mahatma Gandhi’s life and the Indian independence movement."
        },
        {
          "title": "3. Sinhagad Fort",
          "description": "A popular trekking destination near Pune, Sinhagad Fort offers scenic views and a rich historical backdrop. Trek through the rugged terrains and explore the ancient fort, where several battles were fought in history."
        },
        {
          "title": "4. Osho Ashram",
          "description": "A serene spiritual retreat, Osho Ashram offers an oasis of peace and meditation in Pune. Ideal for those seeking relaxation, rejuvenation, and spiritual growth, the ashram’s tranquil surroundings are perfect for reflection and self-discovery."
        },
        {
          "title": "5. Pataleshwar Cave Temple",
          "description": "Located in the bustling city of Pune, the Pataleshwar Cave Temple is a rock-cut Hindu temple dedicated to Lord Shiva. The ancient temple offers a peaceful retreat in the middle of the city, providing both cultural and historical significance."
        },
        {
          "title": "6. Pune Okayama Friendship Garden",
          "description": "An urban retreat nestled in Pune, the Okayama Friendship Garden offers a Japanese-style landscape with beautiful ponds, bridges, and vibrant greenery. It’s a great spot for a leisurely walk and a peaceful escape from city life."
        },
        {
          "title": "7. Raja Dinkar Kelkar Museum",
          "description": "This museum houses an extraordinary collection of Indian artifacts, including sculptures, musical instruments, and miniature paintings. It’s a perfect destination for art lovers and anyone wanting to explore the rich cultural heritage of India."
        },
        {
          "title": "8. Shreemant Dagdusheth Halwai Ganpati Temple",
          "description": "A revered temple in Pune, the Shreemant Dagdusheth Halwai Ganpati Temple is known for its magnificent idol of Lord Ganesha. It is an essential place of worship and a prime cultural landmark in Pune, attracting thousands of devotees."
        },
        {
          "title": "9. Katraj Snake Park",
          "description": "Located near the Katraj Lake, the Snake Park is home to various species of snakes and other reptiles. It’s a fascinating place for nature lovers and those interested in wildlife, with informative exhibits on reptiles."
        },
        {
          "title": "10. Mulshi Lake and Dam",
          "description": "A serene and scenic destination near Pune, Mulshi Lake is surrounded by lush green hills. Ideal for a weekend getaway, enjoy the peaceful lake views, boating, and relaxing amidst nature’s beauty."
        }
      ],
      "services": [
    {
      "name": "Tempo Traveller On Rent in Hadapsar, Pune",
      "description": "Looking for a reliable Tempo Traveller on rent in Hadapsar, Pune? Amruta Travels offers spacious and comfortable Tempo Travellers equipped with modern amenities, ideal for family outings, group events, and corporate functions. Enjoy hassle-free and affordable transportation with our well-maintained vehicles, ensuring a smooth travel experience in Pune."
    },
    {
      "name": "Tempo Traveller On Rent in Pune for Family",
      "description": "Amruta Travels provides the best Tempo Traveller on rent in Pune for family trips. Whether you're planning a reunion, family outing, or a vacation, our spacious and comfortable Tempo Travellers are equipped to offer a smooth and enjoyable journey for your loved ones. Book now to experience hassle-free travel across Pune and beyond."
    },
    {
      "name": "Tempo Traveller On Rent in Wanowrie, Pune",
      "description": "Looking for a Tempo Traveller on rent in Wanowrie, Pune? Amruta Travels provides top-quality air-conditioned Tempo Travellers, perfect for a comfortable, refreshing travel experience. Our vehicles are ideal for all occasions, ensuring that you travel in style, whether it's for a corporate event, family trip, or group outing."
    },
    {
      "name": "Top Tempo Traveller On Rent in Kothrud, Pune",
      "description": "Amruta Travels brings you the best Tempo Traveller on rent in Kothrud, Pune, designed for family outings, corporate events, and group trips. With spacious seating, advanced amenities, and reliable service, our Tempo Travellers offer a seamless travel experience in Pune. Book today for comfort and convenience."
    },
    {
      "name": "Tempo Traveller On Rent in Kharadi, Pune",
      "description": "Rent a Tempo Traveller in Kharadi, Pune with Amruta Travels for smooth and comfortable transportation. Whether for business trips, leisure activities, or group events, our fleet of well-maintained Tempo Travellers guarantees a pleasant ride. Choose us for your next trip in and around Pune."
    },
    {
      "name": "Tempo Traveller On Rent in Kalyani Nagar, Pune",
      "description": "Amruta Travels offers reliable Tempo Traveller on rent in Kalyani Nagar, Pune for corporate gatherings, social events, or family outings. Our spacious Tempo Travellers come with top-notch amenities, ensuring a comfortable and enjoyable journey every time you travel."
    },
    {
      "name": "Tempo Traveller On Rent in Shivaji Nagar, Pune",
      "description": "For reliable and comfortable transportation in Shivaji Nagar, Pune, trust Amruta Travels. Our Tempo Travellers are ideal for family events, group outings, and more. We provide a stress-free travel experience, ensuring comfort, convenience, and reliability for all your journeys."
    },
    {
      "name": "Best Tempo Traveller On Rent in Baner, Pune",
      "description": "Amruta Travels offers premium Tempo Traveller on rent in Baner, Pune. Our well-maintained Tempo Travellers are equipped with modern amenities and spacious seating, ensuring top-notch comfort and convenience for your journey in and around Pune. Book today for an exceptional travel experience."
    },
    {
      "name": "Tempo Traveller On Rent for Corporate Events in Pune",
      "description": "Streamline transportation for your corporate events with Tempo Traveller rentals in Pune. Amruta Travels provides professional Tempo Travellers, equipped with comfortable seating and essential amenities, perfect for business trips and events in Pune."
    },
    {
      "name": "Tempo Traveller Hire for Wedding Party in Pimpri Chinchwad",
      "description": "Celebrate your special day in style with Amruta Travels' Tempo Travellers in Pimpri Chinchwad. Ideal for transporting wedding guests, our comfortable and stylish Tempo Travellers ensure a memorable and enjoyable experience for your wedding party."
    },
    {
      "name": "Tempo Traveller On Rent in Pune for Outstations",
      "description": "Travel comfortably to outstation destinations with Tempo Traveller rentals in Pune. Whether you're heading to a distant location or exploring nearby cities, our spacious Tempo Travellers are equipped with modern amenities, making long journeys a breeze. Book today for a relaxing trip."
    },
    {
      "name": "Pune to Shirdi Tempo Traveller On Rent",
      "description": "Plan your spiritual journey from Pune to Shirdi with Amruta Travels' Tempo Traveller rentals. Our well-maintained vehicles are perfect for long trips, offering a smooth, comfortable ride, ensuring a serene and stress-free pilgrimage."
    },
    {
      "name": "Tempo Traveller On Rent in Pune for Family with Driver",
      "description": "Enjoy stress-free family travel with Tempo Traveller rentals in Pune. Our professional drivers ensure a hassle-free experience, allowing you to relax and focus on spending quality time with your loved ones. Choose Amruta Travels for reliable and comfortable family transportation in Pune."
    },
    {
      "name": "Tempo Traveller On Rent in Pune Contact Number",
      "description": "Looking for a Tempo Traveller on rent in Pune? Contact Amruta Travels at +91 8421333435 for efficient and reliable service. Our comfortable and well-maintained Tempo Travellers are perfect for family trips, corporate events, or group outings across Pune."
    }
]
,
      "tableData": [
        ['-Tempo Traveller from Pune to Mahabaleshwar', '-Pune to Mahabaleshwar Tempo Traveller Hire'],
        ['-Pune to Panchgani Tempo Traveller', '-Tempo Traveller for Rent in Pune'],
        ['-17-Seater Tempo Traveller for Mahabaleshwar Trip', '-17-Seater Tempo Traveller for Mahabaleshwar Tour Package'],
        ['-Pune Airport to Mahabaleshwar Tempo Traveller on Rent', '-Pune to Tapola Tempo Traveller on Rent'],
        ['-14-Seater Tempo Traveller for Maharashtra Trip', '-Tempo Traveller on Rent for Mahabaleshwar Outings'],
        ['-Mini Bus on Rent for Mahabaleshwar Trip', '-Tempo Traveller on Rent in Pune Rate Per Km']
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Why Choose Amruta Travels for Pune to Mahabaleshwar Tempo Traveller?",
          "WhyChoosedescription": "When it comes to traveling from Pune to Mahabaleshwar, Amruta Travels is your go-to provider for a comfortable and reliable journey. Whether you're heading for a leisure trip or an important event, our Tempo Traveller service ensures that you travel in style and comfort. Here's why Amruta Travels is the best choice for your trip:"
        },
        {
          "WhyChooseheading": "Dependable Service:",
          "WhyChoosedescription": "We pride ourselves on providing reliable and punctual service for your journey from Pune to Mahabaleshwar. You can count on us to adhere to your schedule and ensure a smooth travel experience."
        },
        {
          "WhyChooseheading": "Comfortable Rides:",
          "WhyChoosedescription": "Our well-maintained Tempo Travellers offer a smooth and enjoyable travel experience. With ample space and modern amenities, you can relax and enjoy the journey, whether it's a short or long trip."
        },
        {
          "WhyChooseheading": "Professional Drivers:",
          "WhyChoosedescription": "Our experienced drivers are dedicated to your safety and comfort. They are well-versed with the routes from Pune to Mahabaleshwar, ensuring a secure and pleasant journey."
        },
        {
          "WhyChooseheading": "Competitive Pricing:",
          "WhyChoosedescription": "We offer transparent and competitive rates with no hidden charges. Our pricing structure ensures that you get the best value for your money, making it easy to plan your travel expenses."
        },
        {
          "WhyChooseheading": "Flexible Booking:",
          "WhyChoosedescription": "With easy and flexible booking options, you can tailor your rental to fit your schedule and needs. Whether it's a day trip or a longer journey, we accommodate your requirements seamlessly."
        },
        {
          "WhyChooseheading": "24/7 Customer Support:",
          "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with any inquiries or travel-related concerns. We are committed to providing a hassle-free experience from start to finish."
        },
        {
          "WhyChooseheading": "Clean and Safe Vehicles:",
          "WhyChoosedescription": "We ensure that our vehicles are regularly cleaned and maintained to the highest standards. Hygiene and safety are our priorities, so you can travel with peace of mind."
        }
      ]

    };

    
   
    const faqData = [
      {
        question: "How can I book a Tempo Traveller from Pune to Mahabaleshwar?",
        answer: "You can book a Tempo Traveller by calling us at +91 8421333435 or through our website. Our team will assist you with the booking process."
      },
      {
        question: "What types of Tempo Travellers are available for the Pune to Mahabaleshwar journey?",
        answer: "We offer a range of Tempo Travellers, including 17-seaters and mini buses, to accommodate different group sizes and preferences."
      },
      {
        question: "Are there any additional charges for the Tempo Traveller service?",
        answer: "Our pricing is transparent, with no hidden fees. Any additional charges for extra stops or extended mileage will be communicated in advance."
      },
      {
        question: "How do I know if the Tempo Traveller is well-maintained?",
        answer: "All our vehicles undergo regular inspections and maintenance to ensure they are in excellent condition for your safety and comfort."
      },
      {
        question: "Can I choose the driver for my trip?",
        answer: "While we assign experienced drivers to ensure a high-quality experience, you can let us know of any specific preferences when booking."
      },
      {
        question: "What if I need to change my booking?",
        answer: "Contact our customer support team to discuss any changes. We will accommodate your requests based on availability."
      },
      {
        question: "Is there a minimum rental period for the Tempo Traveller service?",
        answer: "We offer flexible rental periods to fit your needs, whether for a day trip or a longer journey."
      },
      {
        question: "What amenities are included in the Tempo Traveller service?",
        answer: "Our vehicles come with modern amenities such as air conditioning, comfortable seating, and entertainment options."
      },
      {
        question: "What is the cancellation policy for the Tempo Traveller service?",
        answer: "Cancellation policies may vary. Please contact us for details on our cancellation terms and any applibusle fees."
      },
      {
        question: "How can I contact Amruta Travels for support during my journey?",
        answer: "Reach our 24/7 customer support team at +91 8421333435 for any assistance during your trip."
      }
    ];
    

    const testimonials = [
      {
        name: "Miss Rasika Sharma",
        text: "I recently rented a Tempo Traveller from Amruta Travels for our trip to Mahabaleshwar, and it was a fantastic experience. The vehicle was clean, spacious, and well-maintained. The driver was professional and made our journey enjoyable. Highly recommend Amruta Travels for group trips!"
      },
      {
        name: "Mr. sunil Patel",
        text: "Our corporate team used Amruta Travels for a Mahabaleshwar outing, and we were thoroughly impressed. The Tempo Traveller was luxurious and comfortable, perfect for our needs. The booking process was smooth, and the driver was excellent. We’ll definitely choose Amruta Travels again for future trips."
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
        heading: " Tempo Traveller On Rent In Pune Contact Number",
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


          const tempoTravellerSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Amruta Travels",
            "description": "Rent Tempo Traveller in Pune for outstation trips, darshan, local tours, and more. Choose from 9 to 26-seater Tempo Travellers at affordable rates. Book your Tempo Traveller rental now for your next trip in Pune.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411041",
              "addressCountry": "IN"
            },
            "telephone": "+91-8421333435",
            "url": "https://amrutatravel.com/Tempo-Traveller-On-Rent-in-Pune",
            "logo": "https://amrutatravel.com/img/250x100-06.png",
            "image": [
              "https://amrutatravel.com/img/tempo1.jpg",
              "https://amrutatravel.com/img/tempo2.jpg",
              "https://amrutatravel.com/img/tempo3.jpg"
            ],
            "priceRange": "₹3000 - ₹10000",
            "offers": {
              "@type": "Offer",
              "url": "https://amrutatravel.com/Tempo-Traveller-On-Rent-in-Pune",
              "priceCurrency": "INR",
              "price": 3000,
              "priceValidUntil": "2024-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 5000
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Amit Sharma"
                },
                "datePublished": "2024-08-15",
                "reviewBody": "Booked a 12-seater Tempo Traveller for a trip to Lonavala. The vehicle was spacious and well-maintained. Highly recommended!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Pooja Deshmukh"
                },
                "datePublished": "2024-07-30",
                "reviewBody": "Great experience renting a Tempo Traveller for our family trip to Mahabaleshwar. Comfortable ride and excellent service!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 4.5
                }
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
              "serviceUrl": "https://amrutatravel.com/Tempo-Traveller-On-Rent-in-Pune"
            },
            "keywords": "Tempo Traveller on Rent in Pune, 9 Seater Tempo Traveller Rental, 12 Seater Tempo Traveller Hire Pune, Tempo Traveller on Rent Pune for Outstation, Pune to Mahabaleshwar Tempo Traveller, Pune to Shirdi Tempo Traveller Hire, Pune to Lonavala Tempo Traveller, Tempo Traveller Hire Pimpri Chinchwad"
          };
        
            
     
    return(
        <div>
          <GoogleAnalytics/>

        
          <Helmet>
                <title>Tempo Traveller On Rent in Pune ₹25 Per Km | Amruta Travels</title>
                <meta name="description" content="Rent Tempo Traveller in Pune for outstation trips, darshan, local tours, and more. Choose from 9 to 26-seater Tempo Travellers at affordable rates. Book your Tempo Traveller rental now!" />
                <link rel="canonical" href="https://amrutatravel.com/Tempo-Traveller-On-Rent-in-Pune" />
                <script type="application/ld+json">
                  {JSON.stringify(tempoTravellerSchema)}
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
    <img src='\img\Keyword Based Image\Keyword Based Image-01.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Pune to Mahabaleshwar Tempo Traveller for Amruta Travels</h3>
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
              SSKTravels24:<br />
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
export default TempoTravellerOnRent;