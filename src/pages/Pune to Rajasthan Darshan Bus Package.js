
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneToRajasthan(){

  const cardData = 
    {
        "keyword": "Pune to Rajasthan Darshan Bus Package",
        "heading": "Amruta Travels – Pune to Rajasthan Darshan Bus Package",
        "headingDescription": "Experience the royal grandeur of Rajasthan with Amruta Travels' Pune to Rajasthan Darshan Bus Package. Embark on a journey through India's majestic desert state, famous for its opulent palaces, ancient forts, vibrant culture, and historical significance. This bus package is the perfect way to explore the stunning landscapes and cultural treasures of Rajasthan, all in the comfort of our luxury buses.",
        "top": "Top Places to Visit in Rajasthan:",
        "topPlaces": [
            {
                "title": "1. Jaipur – The Pink City",
                "description": "Jaipur, the capital of Rajasthan, is renowned for its royal palaces and historic architecture. The Amber Fort, a hilltop fort, showcases stunning views and intricate designs. Visit the Hawa Mahal (Palace of Winds) and explore the grand City Palace in the heart of the city. Don’t forget to shop in the lively bazaars offering traditional Rajasthani textiles and jewelry."
            },
            {
                "title": "2. Udaipur – The City of Lakes",
                "description": "Known as one of the most romantic cities in India, Udaipur is famous for its serene lakes and grand palaces. The City Palace overlooking Lake Pichola is a must-see, and a boat ride on the lake is an unforgettable experience. Other highlights include the Jag Mandir and Saheliyon Ki Bari, a garden retreat."
            },
            {
                "title": "3. Jaisalmer – The Golden City",
                "description": "Located in the heart of the Thar Desert, Jaisalmer is known for its golden sandstone architecture. The Jaisalmer Fort is a UNESCO World Heritage site, where you can explore ancient havelis (mansions) like the Patwon Ki Haveli. Jaisalmer is also the starting point for exciting camel safaris in the desert."
            },
            {
                "title": "4. Jodhpur – The Blue City",
                "description": "Famous for its striking blue-painted houses, Jodhpur is home to the majestic Mehrangarh Fort, one of the largest forts in India. The fort offers panoramic views of the city and houses a museum showcasing royal artifacts. Also visit the Umaid Bhawan Palace, now a luxury hotel and museum, and the peaceful Jaswant Thada cenotaph."
            },
            {
                "title": "5. Pushkar – The Holy City",
                "description": "Pushkar is a serene town known for its sacred Pushkar Lake and the rare Brahma Temple. The town is also famous for the Pushkar Camel Fair, which attracts tourists from around the world. The holy atmosphere and vibrant culture make Pushkar a must-visit destination."
            },
            {
                "title": "6. Ranthambore National Park",
                "description": "For wildlife lovers, Ranthambore National Park offers an incredible chance to spot Bengal tigers in their natural habitat. The park is also home to leopards, deer, and various bird species. While here, visit the ancient Ranthambore Fort, a UNESCO World Heritage site nestled within the park."
            },
            {
                "title": "7. Bikaner – The Desert Town",
                "description": "Bikaner is known for its rich heritage and well-preserved architecture. The Junagarh Fort, built in the 16th century, stands as a testament to the city’s history. Bikaner is also famous for the Karni Mata Temple, where thousands of sacred rats are worshipped. The city is known for its delicious sweets and snacks as well."
            },
            {
                "title": "8. Mount Abu – The Hill Station",
                "description": "Mount Abu is Rajasthan’s only hill station, offering a cool escape from the desert heat. The Dilwara Temples, renowned for their intricate marble carvings, are a must-see. Visitors also enjoy boating at Nakki Lake and hiking to Guru Shikhar, the highest peak in the Aravalli range."
            },
            {
                "title": "9. Chittorgarh – The Fort of Legends",
                "description": "Chittorgarh Fort, the largest fort in India, is a symbol of Rajput valor and pride. The fort is an architectural marvel with towering gates, palaces, temples, and the iconic Vijay Stambh (Victory Tower). A visit here offers a deep dive into Rajasthan’s storied past of bravery and honor."
            },
            {
                "title": "10. Ajmer – The City of Pilgrimage",
                "description": "Ajmer is a significant religious destination, home to the Ajmer Sharif Dargah, one of India’s most important Muslim pilgrimage sites. The city is also known for its beautiful Ana Sagar Lake and the ancient Adhai Din Ka Jhonpra."
            }
        ],
        "services": [
            {
                "name": "Pune to Jodhpur Bus on Rent",
                "description": "Our Pune to Jodhpur bus on rent service ensures a smooth and enjoyable journey. Known as the Blue City, Jodhpur is famous for its grand Mehrangarh Fort and vibrant markets. Rent a bus from Amruta Travels and travel in comfort with your group, experiencing Jodhpur’s heritage and culture without any stress."
            },
            {
                "name": "Pune to Mount Abu Bus on Rent",
                "description": "Take a break from the heat and plan a trip to the beautiful hill station of Mount Abu. With Pune to Mount Abu bus on rent, Amruta Travels offers a comfortable ride to Rajasthan’s only hill station. Whether you're planning a weekend getaway or a longer stay, our buses provide a relaxing and enjoyable experience for your entire group."
            },
            {
                "name": "Pune to Jaisalmer Bus Packages",
                "description": "Explore the Golden City of Rajasthan with our Pune to Jaisalmer bus packages. Famous for its golden sand dunes and the historic Jaisalmer Fort, this desert city is a must-visit. Amruta Travels offers tailored bus packages from Pune to Jaisalmer, allowing you to enjoy a stress-free vacation with your friends, family, or colleagues."
            },
            {
                "name": "Pune to Rajasthan Darshan Bus Packages",
                "description": "Amruta Travels presents the best Pune to Rajasthan Darshan bus packages for travelers looking to explore multiple cities in Rajasthan. From Jaipur and Udaipur to Jaisalmer and Jodhpur, our bus packages cover all the major tourist attractions. Enjoy a comfortable and organized trip with our expert travel services."
            },
            {
                "name": "32 Seater Bus for Pune to Rajasthan",
                "description": "Our 32 seater bus for Pune to Rajasthan is perfect for family reunions, corporate outings, or school trips. With spacious interiors and comfortable seating, this bus ensures a smooth and enjoyable ride through Rajasthan's beautiful landscapes."
            },
            {
                "name": "Pune to Rajasthan Darshan Bus Hire",
                "description": "Our Pune to Rajasthan Darshan bus hire service is designed for groups who want to create their own itinerary. Rent a bus and explore the royal cities of Rajasthan at your own pace. Our buses come equipped with the latest amenities, ensuring a comfortable journey."
            },
            {
                "name": "Pune to Rajasthan Road Trip Bus Booking",
                "description": "Want to take a road trip from Pune to Rajasthan? Book a bus with Amruta Travels for a memorable journey. Our Pune to Rajasthan road trip bus booking services offer flexibility, allowing you to stop and explore various cities and attractions on your way to the desert state."
            },
            {
                "name": "Pune to Rajasthan Udaipur Bus on Rent for Picnic",
                "description": "Rent a bus from Amruta Travels for a relaxing journey. Our Pune to Rajasthan Udaipur bus on rent for picnic service is perfect for large groups, offering comfort and convenience as you travel to one of India’s most scenic destinations."
            },
            {
                "name": "Mini Bus on Rent Pune for Rajasthan Trip",
                "description": "If you're looking for a smaller, more intimate group trip, our mini bus on rent Pune for Rajasthan trip is the ideal option. Suitable for family outings or small corporate teams, this bus offers a cozy and affordable travel experience."
            },
            {
                "name": "Pune to Rajasthan Bus Trip Packages",
                "description": "Amruta Travels offers customizable Pune to Rajasthan bus trip packages that cater to all types of travelers. Whether you're interested in exploring forts, palaces, or desert landscapes, we can create a package that meets your travel needs. Our bus trip packages ensure you experience the best of Rajasthan in comfort."
            },
            {
                "name": "Pune to Rajasthan Volvo Bus Service",
                "description": "Our Pune to Rajasthan Volvo bus service is the perfect choice for those who prefer a premium experience. Volvo buses are equipped with top-notch amenities, offering a smooth and comfortable ride for long-distance travel."
            },
            {
                "name": "Pune to Rajasthan Sleeper Bus Hire",
                "description": "For overnight journeys, our Pune to Rajasthan sleeper bus hire service provides comfortable sleeper seats, ensuring you arrive at your destination well-rested. Ideal for long road trips, these buses offer spacious seating and modern conveniences."
            },
            {
                "name": "Rent a Bus for a Trip",
                "description": "Amruta Travels offers reliable and affordable bus rental services from Pune to various destinations across Rajasthan. Whether it’s for a family outing, corporate event, or school excursion, we have a wide range of buses to suit your needs."
            },
            {
                "name": "Amruta Travels Pune on Rent",
                "description": "Amruta Travels provides top-quality bus rental services in Pune. Whether you need a bus for a short trip or a long-distance journey, Amruta Travels Pune on rent has a variety of options to choose from. Our well-maintained buses ensure a safe and comfortable journey for all types of trips."
            }
        ],
        "tableData": [
            ["Pune to Jaipur Bus On Rent", "Pune to Jodhpur Bus On Rent"],
            ["Pune to Mount Abu Bus on Rent", "Pune to Jaisalmer Bus Packages"],
            ["Pune to Rajasthan Darshan Bus Packages", "32 Seater Bus for Pune to Rajasthan"],
            ["Pune to Rajasthan Darshan Bus Hire", "Pune to Rajasthan Road Trip Bus Booking"],
            ["Pune to Rajasthan Udaipur Bus on Rent for Picnic", "Mini Bus on Rent Pune for Rajasthan Trip"],
            ["Pune to Rajasthan Bus Trip Packages", "Pune to Rajasthan Volvo Bus Service"],
            ["Pune to Rajasthan Sleeper Bus Hire", "Rent a Bus for a Trip"],
            ["Amruta Travels Pune On Rent"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Experienced and Reliable Service:",
                "WhyChoosedescription": "Amruta Travels has years of experience in offering exceptional travel services. Our Pune to Rajasthan Darshan Bus Package is designed to provide a hassle-free experience with reliable transport, well-planned itineraries, and seamless coordination. We ensure that your trip is comfortable and enjoyable from start to finish."
            },
            {
                "WhyChooseheading": "Comfortable and Well-Maintained Buses:",
                "WhyChoosedescription": "We provide modern and well-maintained buses equipped with comfortable seating, air conditioning, and clean interiors. Whether it's a luxury Volvo bus, 32-seater bus, or a sleeper bus, our fleet ensures you travel in comfort on your journey from Pune to Rajasthan."
            },
            {
                "WhyChooseheading": "Experienced Drivers:",
                "WhyChoosedescription": "Our professional and experienced drivers ensure a safe and smooth journey. They are well-versed with the routes and terrain, providing peace of mind as you explore Rajasthan’s cities and landscapes."
            },
            {
                "WhyChooseheading": "Customizable Packages:",
                "WhyChoosedescription": "Amruta Travels offers customizable Rajasthan Darshan Bus Packages, allowing you to tailor the trip according to your preferences. Whether you want to visit Jaipur, Jaisalmer, Udaipur, or a combination of cities, we offer flexible itineraries to suit your needs."
            },
            {
                "WhyChooseheading": "Affordable Pricing:",
                "WhyChoosedescription": "We offer competitive and transparent pricing without compromising on quality. Our Pune to Rajasthan Bus Package is designed to provide excellent value for your money, making it ideal for families, corporate groups, and schools looking for a budget-friendly option."
            },
            {
                "WhyChooseheading": "Expert Tour Planning:",
                "WhyChoosedescription": "Our team of travel experts works closely with you to plan your Rajasthan trip. From selecting the best sightseeing spots to ensuring a smooth travel schedule, we take care of every detail so that you can focus on enjoying your vacation."
            }
        ]
    };

    const faqData = [
        {
            "question": "What does the Pune to Rajasthan Darshan Bus Package include?",
            "answer": "The package includes round-trip transportation from Pune to Rajasthan, comfortable seating, an experienced driver, and a customizable itinerary. Some packages may also include sightseeing tours and accommodation, depending on the package chosen."
        },
        {
            "question": "Can we customize the Rajasthan Darshan Bus Package?",
            "answer": "Yes, Amruta Travels offers customizable bus packages. You can choose the cities you wish to visit, such as Jaipur, Jodhpur, Udaipur, and Jaisalmer, and we’ll tailor the itinerary to fit your preferences."
        },
        {
            "question": "What type of buses are available for the Rajasthan Darshan Bus Package?",
            "answer": "We offer a range of buses, including 32-seater buses, mini buses, Volvo buses, and sleeper buses. All our buses are well-maintained, air-conditioned, and equipped with comfortable seating."
        },
        {
            "question": "How long is the journey from Pune to Rajasthan?",
            "answer": "The distance between Pune and Rajasthan varies depending on your destination. On average, it takes around 15-18 hours to reach Jaipur or Udaipur by road. Our buses are designed to provide maximum comfort for long journeys."
        },
        {
            "question": "What safety measures are in place during the trip?",
            "answer": "At Amruta Travels, we prioritize safety. Our buses are regularly inspected, and our drivers are experienced and trained for long-distance travel. Additionally, we follow all government regulations related to hygiene and safety."
        },
        {
            "question": "Do you provide on-board amenities?",
            "answer": "Yes, our buses are equipped with amenities such as air conditioning, comfortable seats, and in some cases, sleeper berths. Depending on the bus, we may also provide Wi-Fi, charging points, and onboard entertainment."
        },
        {
            "question": "Are meals included in the package?",
            "answer": "Meals are not usually included in the basic package, but we do offer packages where meals can be arranged upon request. You will also have scheduled stops at reliable restaurants along the way."
        },
        {
            "question": "Can we book a bus for a private group?",
            "answer": "Yes, we offer private bus hire for groups, whether it’s for family vacations, corporate tours, or school excursions. You can book a bus exclusively for your group and customize the itinerary according to your needs."
        },
        {
            "question": "How do I book the Pune to Rajasthan Darshan Bus Package?",
            "answer": "You can book your bus package by contacting Amruta Travels directly through our website or by calling our customer service team. We offer easy booking options and flexible payment methods."
        },
        {
            "question": "Is there a cancellation policy?",
            "answer": "Yes, we have a flexible cancellation policy. If you need to cancel or reschedule your trip, please contact us as soon as possible, and we will assist you with the process."
        }
    ];
    
    const testimonials = [
        {
            "name": "Miss Priya Deshmukh",
            "text": "My journey with Amruta Travels on the Pune to Rajasthan Darshan bus package was nothing short of spectacular. From the very beginning, the experience was seamless, with a well-organized itinerary that allowed us to explore the rich cultural heritage of Rajasthan comfortably. The bus was clean and equipped with all the amenities we needed for a long journey. Our guide was incredibly knowledgeable and made the historical sites come alive with engaging stories. Highlights for me included the majestic forts of Jaipur and the stunning palaces of Udaipur. The whole trip was a perfect blend of adventure, relaxation, and cultural immersion. I highly recommend Amruta Travels for anyone looking to experience the essence of Rajasthan with ease and comfort."
        },
        {
            "name": "Mr. Rajesh Patel",
            "text": "I recently took the Pune to Rajasthan Darshan bus package offered by Amruta Travels, and it exceeded all my expectations. The planning and execution were flawless, with a detailed itinerary that ensured we saw the best of Rajasthan's heritage. The bus was comfortable, with plenty of legroom and amenities that made the long distances enjoyable. The local guides were friendly and knowledgeable, offering insights into the history and culture of each destination. The highlight of the trip was visiting the magnificent palaces and forts, especially the City Palace in Udaipur. Amruta Travels has truly delivered an exceptional travel experience, and I would gladly recommend them to anyone looking to explore Rajasthan in style."
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
        heading: "Pune to Rajasthan Darshan Bus Package contact Number:",
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
          const jsonLdData = {
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Pune to Rajasthan Darshan Bus Package",
            "description": "Amruta Travels offers Pune to Rajasthan Darshan bus packages with various options for destinations including Jaipur, Jodhpur, Mount Abu, Jaisalmer, and Udaipur. Book your comfortable bus for a memorable Rajasthan road trip.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411041",
              "addressCountry": "IN"
            },
            "telephone": "+91-8421333435",
            "url": "https://amrutatravel.com/pune-to-rajasthan-darshan-bus-package",
            "logo": "https://amrutatravel.com/images/rajasthan-darshan-bus.jpg",
            "image": [
              "https://amrutatravel.com/img/hell.png",
              "https://amrutatravel.com/img/hell2.png",
              "https://amrutatravel.com/img/hell3.jpg"
            ],
            "priceRange": "₹2000 - ₹50000",
            "offers": {
              "@type": "Offer",
              "url": "https://amrutatravel.com/pune-to-rajasthan-darshan-bus-package",
              "priceCurrency": "INR",
              "price": 2000,
              "priceValidUntil": "2024-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 120,
              "itemReviewed": {
                "@type": "TouristAttraction",
                "name": "Pune to Rajasthan Darshan Bus Package"
              }
            },
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
              "serviceUrl": "https://amrutatravel.com/pune-to-rajasthan-darshan-bus-package"
            },
            "keywords": "Pune to Jaipur Bus On Rent, Pune to Jodhpur Bus On Rent, Pune to Mount Abu Bus on Rent, Pune to Jaisalmer Bus Packages, Pune to Rajasthan Darshan Bus Packages, 32 Seater Bus for Pune to Rajasthan, Pune to Rajasthan Darshan Bus Hire, Pune to Rajasthan Road Trip Bus Booking from Pune, Pune to Rajasthan Udaipur Bus on Rent for Picnic, Mini Bus on Rent Pune for Rajasthan Trip, Pune to Rajasthan Bus Trip Packages, Pune to Rajasthan Volvo Bus Service, Pune to Rajasthan Sleeper Bus Hire, Rent a Bus for a Trip, Amruta Travels Pune On Rent"
          };
    return(
        <div>
          <GoogleAnalytics/>
         
          <Helmet>
        <title>Contact: +91 8421333435 | Amruta Travels | Pune to Rajasthan Darshan Bus Package | Bus Hire for Rajasthan Trip | Amruta Travels</title>
        <meta name="description" content="Book your Pune to Rajasthan Darshan bus package with Amruta Travels. We offer bus hire services for destinations like Jaipur, Jodhpur, Mount Abu, Jaisalmer, Udaipur, and more. Choose from 32-seater, Volvo, and sleeper buses for a comfortable Rajasthan road trip." />
        <meta name="keywords" content="Pune to Jaipur Bus On Rent, Pune to Jodhpur Bus On Rent, Pune to Mount Abu Bus on Rent, Pune to Jaisalmer Bus Packages, Pune to Rajasthan Darshan Bus Packages, 32 Seater Bus for Pune to Rajasthan, Pune to Rajasthan Darshan Bus Hire, Pune to Rajasthan Road Trip Bus Booking from Pune, Pune to Rajasthan Udaipur Bus on Rent for Picnic, Mini Bus on Rent Pune for Rajasthan Trip, Pune to Rajasthan Bus Trip Packages, Pune to Rajasthan Volvo Bus Service, Pune to Rajasthan Sleeper Bus Hire, Rent a Bus for a Trip, Amruta Travels Pune On Rent" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
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
    <img src='\img\Keyword Based Image\Keyword Based Image-22.jpg' alt='img'/>
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
export default PuneToRajasthan;