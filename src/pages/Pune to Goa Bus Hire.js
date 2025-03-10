
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function PuneToGoaBusHire(){

  const cardData = 
    {
      keyword: ' Pune to Goa Bus Hire',
      heading: ' Amruta Travels: Pune to Goa Bus Hire ',

      headingDescription: 'Planning a trip from Pune to Goa? Amruta Travels offers exceptional bus hire services to ensure a smooth, comfortable, and enjoyable journey to one of India’s most vibrant destinations. Whether you’re traveling with family, friends, or colleagues, our reliable bus hire services are designed to cater to all your travel needs, making your Goa trip unforgettable.',

      top:"Top Places to Visit in Goa with Amruta Travel::",
       topPlaces : [
        {
            "title": "Baga Beach:",
            "description": "One of Goa’s most popular beaches, Baga Beach is renowned for its lively atmosphere, vibrant nightlife, and an array of water sports. The beach is lined with numerous beach shacks serving delicious seafood and refreshing drinks. It’s an ideal spot for both relaxation and excitement, with options for parasailing, windsurfing, and jet skiing."
        },
        {
            "title": "Calangute Beach:",
            "description": "Often referred to as the 'Queen of Beaches,' Calangute Beach is known for its extensive sandy stretch and a wide range of water activities. The beach is bustling with tourists and offers opportunities for parasailing, banana boat rides, and more. It’s perfect for those who enjoy sunbathing, beach games, and vibrant surroundings."
        },
        {
            "title": "Anjuna Beach:",
            "description": "Anjuna Beach is famous for its stunning natural beauty, lively flea markets, and a bohemian vibe. The beach is a favorite among backpackers and those looking to explore Goa’s alternative culture. It features rocky shores, clear waters, and a variety of beach bars and cafes. Anjuna is also known for its full-moon parties and vibrant nightlife."
        },
        {
            "title": "Fort Aguada:",
            "description": "Fort Aguada is a well-preserved 17th-century Portuguese fort located on the Sinquerim Beach. It offers panoramic views of the Arabian Sea and the surrounding coastline. The fort also features a functioning lighthouse, which was crucial for maritime navigation during colonial times. It’s an excellent spot for history enthusiasts and photography."
        },
        {
            "title": "Basilica of Bom Jesus:",
            "description": "A UNESCO World Heritage site, the Basilica of Bom Jesus is celebrated for its exquisite Baroque architecture and the tomb of St. Francis Xavier, an important figure in Christian history. The basilica’s interior is adorned with intricate woodwork and stunning frescoes, making it a must-visit for those interested in history and religion."
        },
        {
            "title": "Dudhsagar Waterfalls:",
            "description": "Situated in the Western Ghats, Dudhsagar Waterfalls is a spectacular four-tiered waterfall that cascades down from a height of over 300 meters. The falls are surrounded by lush greenery and wildlife, making it a popular destination for nature lovers and adventure seekers. Visitors can enjoy a trek to the falls or take a scenic train ride through the region."
        },
        {
            "title": "Chapora Fort:",
            "description": "Chapora Fort, located near Vagator Beach, offers stunning views of the Chapora River and the Arabian Sea. The fort is known for its picturesque setting and is a popular spot for watching the sunset. Its ruins provide a glimpse into Goa’s colonial past and make for a great backdrop for photographs."
        },
        {
            "title": "South Goa Beaches:",
            "description": "South Goa is home to some of the most serene and less crowded beaches, including Palolem, Agonda, and Colva. These beaches offer a tranquil escape from the bustling northern shores and are perfect for those looking to relax and unwind. The area is also known for its scenic beauty, beachside shacks, and opportunities for yoga and meditation."
        },
        {
            "title": "Spice Plantations:",
            "description": "Goa’s spice plantations offer a fascinating insight into the region’s agricultural practices. Visitors can take guided tours of the plantations, learn about various spices such as pepper, cardamom, and cloves, and enjoy traditional Goan cuisine prepared with freshly harvested spices. The lush, green surroundings add to the charm of the visit."
        },
        {
            "title": "Goa State Museum:",
            "description": "The Goa State Museum provides a comprehensive overview of Goan culture, history, and art. It features an extensive collection of artifacts, sculptures, and relics from different periods of Goa’s history, including its colonial past. The museum is a great place to learn about the region’s heritage and see a diverse range of exhibits."
        }
    ],    
    
    "services": [
        {
          "name": "Pune to Goa 17 Seater Bus on Rent:",
          "description": "Traveling with a small group? Our 17-seater buses are perfect for a comfortable and spacious ride from Pune to Goa. Ideal for family trips, corporate outings, or group tours, these buses offer a cozy environment with ample legroom and luggage space."
        },
        {
          "name": "Pune to Goa Urbania Bus Hire:",
          "description": "Experience luxury and comfort with our Urbania buses for your trip from Pune to Goa. Equipped with premium features, the Urbania buses provide a sophisticated travel experience, making them perfect for special occasions and high-end travel needs."
        },
        {
          "name": "Pune to Goa AC Bus on Rent:",
          "description": "Stay cool and comfortable on your journey with our AC buses. Whether you're traveling in peak summer or simply prefer a climate-controlled environment, our AC buses ensure a pleasant trip from Pune to Goa."
        },
        {
          "name": "14, 17, 25, 32 Seater on Rent for Pune to Goa:",
          "description": "We offer a range of bus sizes for your trip to Goa. Choose from our 14-seater, 17-seater, 25-seater, and 32-seater buses to match your group size and travel requirements. Each option is designed to provide comfort and convenience for your journey."
        },
        {
          "name": "35, 40, 45, 50 Seater on Rent for Pune to Goa:",
          "description": "For larger groups, our 35-seater, 40-seater, 45-seater, and 50-seater buses are ideal. These buses offer ample space and comfort, ensuring a pleasant journey for big family gatherings, corporate events, or group vacations."
        },
        {
          "name": "Pune to Goa Bus Package for Trip from Pune:",
          "description": "Our bus packages for trips from Pune to Goa are designed to offer a hassle-free travel experience. Choose from various packages that include round-trip services, flexible schedules, and additional amenities to enhance your travel experience."
        },
        {
          "name": "Pune to Goa Bus Hire for Picnic:",
          "description": "Planning a picnic in Goa? Our bus hire services cater specifically to picnic trips, offering comfortable and spacious vehicles to transport your group to and from your picnic destination. Enjoy a relaxed and enjoyable outing with our dedicated picnic packages."
        },
        {
          "name": "Pune to Goa Bharat Benz Hire for Picnic:",
          "description": "Experience the luxury of Bharat Benz buses for your picnic trip to Goa. Our Bharat Benz fleet offers superior comfort and style, making your picnic journey as enjoyable as the destination itself."
        },
        {
          "name": "Amruta Travels Pune On Rent:",
          "description": "Amruta Travels provides reliable and convenient vehicle rentals for trips from Pune. Our extensive fleet and professional service ensure a seamless travel experience, making us your go-to choice for all your rental needs."
        },
        {
          "name": "32 Seater Bus on Rent in Pune:",
          "description": "Our 32-seater buses are perfect for medium-sized groups traveling to Goa. Offering a balance of space and comfort, these buses are ideal for family trips, corporate outings, and group tours."
        },
        {
          "name": "Pune to Goa Tempo Traveller on Rent:",
          "description": "For a more compact and flexible option, consider our tempo travellers for your journey from Pune to Goa. Ideal for smaller groups, our tempo travellers offer a comfortable and convenient travel experience."
        },
        {
          "name": "Pune to Goa Mini Bus on Rent:",
          "description": "Our mini buses are a great choice for groups looking for a more intimate and manageable travel option. Perfect for trips to Goa, these mini buses provide comfort and ease for your journey."
        },
        {
          "name": "13 Seater Urbania on Rent for Goa Trip:",
          "description": "Opt for our 13-seater Urbania buses for a premium travel experience. Equipped with luxury features and ample space, these buses are ideal for groups seeking both comfort and style on their trip to Goa."
        },
        {
          "name": "Book Your Pune to Goa Bus Hire with Amruta Travels:",
          "description": "Choose Amruta Travels for your Pune to Goa journey and enjoy a comfortable, convenient, and enjoyable travel experience. With a range of options to suit different group sizes and needs, our reliable services ensure that your trip to Goa is nothing short of exceptional. Contact us today to book your bus or vehicle rental and embark on your Goa adventure with ease."
        },
        {
          "name": "17 Seater Urbania on Rent for Goa Trip:",
          "description": "Travel in style and comfort with our 17-seater Urbania rental for your Goa trip. Ideal for medium-sized groups, the Urbania offers luxurious amenities and ample space to make your journey from Pune to Goa enjoyable and stress-free."
        },
        {
          "name": "Pune to Goa Mini Bus on Rent:",
          "description": "For a more compact group, our mini buses are the perfect choice for travel from Pune to Goa. Enjoy the convenience and comfort of our mini buses, designed to make your journey smooth and enjoyable."
        },
        {
          "name": "Pune to Goa Bus Tour Packages:",
          "description": "Explore Goa with our comprehensive bus tour packages from Pune. Our packages include transportation and can be tailored to fit your itinerary, ensuring a memorable and organized trip to one of India's most popular destinations."
        },
        {
          "name": "Bus Hire on Rent for Pune to Goa:",
          "description": "Our bus hire services for travel from Pune to Goa offer comfort and reliability. Choose from various bus sizes to accommodate your group, and enjoy a hassle-free journey to the beaches and attractions of Goa."
        },
        {
          "name": "Pune to Goa Bus Hire on Rent:",
          "description": "Rent a bus for your trip from Pune to Goa with Amruta Travels. Our fleet includes well-maintained buses designed for long-distance travel, ensuring a comfortable ride for your group as you head to Goa."
        },
        {
          "name": "Pune to Goa Bus Hire on Rent Contact Number:",
          "description": "For quick and easy booking of your bus hire from Pune to Goa, contact us at Amruta Travels. Our contact number is available for immediate assistance and to help you secure the perfect vehicle for your trip."
        },
        {
          "name": "Pune Goa Bus Package Tour:",
          "description": "Our Pune Goa bus package tour provides a complete solution for your journey, including transportation and itinerary planning. Enjoy a well-organized tour with our comfortable buses and expert services."
        },
        {
          "name": "Amruta Travels Pune On Rent:",
          "description": "Amruta Travels is your go-to provider for vehicle rentals from Pune to Goa. We offer a range of options including Urbania rentals, mini buses, and full-sized buses to suit your travel needs. Our commitment to service excellence ensures that your journey is comfortable and enjoyable."
        },
        {
          "name": "Pune to Goa Bus Hire Contact Number:",
          "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Pune to Goa Bus Hire. We ensure a smooth and enjoyable ride for all our customers."
        }
      ],


      "tableData": [
        ["- Pune to Goa 17 Seater Bus on Rent", "- Pune to Goa Urbania Bus Hire"],
        ["- Pune to Goa AC Bus on Rent", "- 14, 17, 25, 32 Seater on Rent for Pune to Goa"],
        ["- 35, 40, 45, 50 Seater on Rent for Pune to Goa", "- Pune to Goa Bus Package for Trip from Pune"],
        ["- Pune to Goa Bus Hire for Picnic", "- Pune to Goa Bharat Benz Hire for Picnic"],
        ["- Amruta Travels Pune On Rent", "- 32 Seater Bus on Rent in Pune"],
        ["- Pune to Goa Tempo Traveller on Rent", "- Pune to Goa Mini Bus on Rent"],
        ["- 13 Seater Urbania on Rent for Goa Trip", "- 17 Seater Urbania on Rent for Goa Trip"],
        ["- Pune to Goa Mini Bus on Rent", "- Pune to Goa Bus Tour Packages"],
        ["- Bus Hire on Rent for Pune to Goa", "- Pune to Goa Bus Hire on Rent"],
        ["- Pune to Goa Bus Hire on Rent Contact Number", "- Pune Goa Bus Package Tour"],
        ["- Amruta Travels Pune On Rent", "- Amruta Travels Pune On Rent"]
      ],

      "whychoose": [
        {
          "WhyChooseheading": "Why Choose Amruta Travels for Pune to Goa Bus Hire?",
          "WhyChoosedescription": "Amruta Travels is dedicated to providing exceptional bus hire services for your journey from Pune to Goa, ensuring a comfortable, reliable, and enjoyable travel experience."
        },
        {
          "WhyChooseheading": "Diverse Fleet of Vehicles:",
          "WhyChoosedescription": "We offer a wide range of vehicles, including 17-seater buses, Urbania buses, AC buses, and larger options like 35-seater and 50-seater buses. Whether you need a compact vehicle or a large bus for your group, we have the right solution to meet your needs."
        },
        {
          "WhyChooseheading": "Comfort and Convenience:",
          "WhyChoosedescription": "Our buses are designed with comfort in mind. Enjoy amenities such as air conditioning, ample legroom, and plush seating. We ensure a pleasant travel experience with well-maintained vehicles that guarantee a smooth and enjoyable ride to Goa."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers:",
          "WhyChoosedescription": "Our drivers are experienced and well-versed with the route from Pune to Goa. They are committed to providing safe and efficient travel, ensuring you reach your destination on time and in comfort."
        },
        {
          "WhyChooseheading": "Flexible and Customizable Packages:",
          "WhyChoosedescription": "We offer customizable bus hire packages tailored to suit your specific requirements. Whether you're planning a family vacation, corporate outing, or picnic, our flexible packages are designed to provide the best value and convenience for your trip."
        },
        {
          "WhyChooseheading": "Competitive Pricing:",
          "WhyChoosedescription": "At Amruta Travels, we offer competitive pricing with no hidden charges. Our transparent pricing structure ensures you get the best value for your money, with detailed quotes provided based on your travel needs."
        },
        {
          "WhyChooseheading": "Exceptional Customer Service:",
          "WhyChoosedescription": "Our dedicated customer service team is available to assist you throughout the booking process and during your journey. We are committed to ensuring your travel experience is hassle-free and enjoyable."
        },
        {
          "WhyChooseheading": "Reliable and Punctual:",
          "WhyChoosedescription": "We pride ourselves on reliability and punctuality. Our buses are maintained to the highest standards, and our drivers adhere to strict schedules to ensure timely departures and arrivals."
        }
      ]
    };

    const faqData = [
        {
            "question": "What types of buses are available for Pune to Goa?",
            "answer": "We offer a variety of buses for your trip from Pune to Goa, including 17-seater, 32-seater, 35-seater, 40-seater, and 50-seater options. Additionally, we provide Urbania buses, AC buses, and tempo travellers to suit different group sizes and preferences."
        },
        {
            "question": "How can I book a bus from Pune to Goa with Amruta Travels?",
            "answer": "Booking is simple! You can contact us via phone or email to discuss your requirements. Our customer service team will assist you with availability, pricing, and booking details to ensure a smooth reservation process."
        },
        {
            "question": "Are the buses equipped with air conditioning?",
            "answer": "Yes, we offer both AC and non-AC buses. For a comfortable journey, especially during warm weather, you can choose our AC buses which are equipped with climate control systems."
        },
        {
            "question": "What amenities are provided on the bus?",
            "answer": "Our buses come with various amenities such as comfortable seating, ample legroom, air conditioning (for AC buses), and sometimes onboard entertainment. The specific amenities may vary based on the type of bus you choose."
        },
        {
            "question": "Is there a minimum or maximum number of passengers required?",
            "answer": "We accommodate various group sizes. From small groups needing a 17-seater to large groups requiring a 50-seater, we have options to fit your needs. For specific requirements, please contact us for detailed information."
        },
        {
            "question": "Are there any additional charges?",
            "answer": "Our pricing is transparent with no hidden charges. The cost is based on factors such as the type of bus, distance, and duration of hire. We provide detailed quotes, so you are aware of the total cost before confirming your booking."
        },
        {
            "question": "Can I customize my bus hire package?",
            "answer": "Yes, we offer customizable packages to suit your travel needs. Whether you need specific pickup and drop-off points or have special requirements for your trip, we can tailor the package accordingly."
        },
        {
            "question": "What should I do if there is a delay or issue during the trip?",
            "answer": "Our customer service team is available to assist you with any issues that may arise during your trip. If you encounter any problems, please contact us immediately, and we will address them promptly."
        },
        {
            "question": "How far in advance should I book the bus?",
            "answer": "We recommend booking as early as possible to ensure availability, especially during peak travel seasons. Early booking also allows you to secure the best rates and options for your trip."
        },
        {
            "question": "What safety measures are in place for the journey?",
            "answer": "We prioritize safety and ensure that all our buses are regularly maintained and inspected. Our drivers are experienced and trained to handle various road conditions, ensuring a safe and secure journey for all passengers."
        }
    ];
    


    const testimonials = [
        {
            "name": "Mr. Rajesh Sharma",
            "text": "Our family trip from Pune to Goa with Amruta Travels was nothing short of exceptional. We hired a 35-seater bus, and the experience was fantastic from start to finish. The bus was clean, comfortable, and well-maintained, with ample space for everyone to relax. The driver was professional and ensured we had a smooth journey. The booking process was straightforward, and the customer service team was very accommodating. Highly recommend Amruta Travels for anyone planning a trip to Goa!"
        },
        {
            "name": "Miss Priya Desai",
            "text": "I recently organized a corporate outing from Pune to Goa and chose Amruta Travels for the bus hire. We opted for a 50-seater AC bus, and it was the perfect choice for our large group. The bus was equipped with modern amenities, and the air conditioning was a blessing in the warm weather. The service was impeccable, with the driver being punctual and courteous throughout the trip. The whole experience exceeded our expectations, and I would definitely use Amruta Travels again for future trips."
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
        heading: "Pune to Goa Bus Hire Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Pune to Goa Bus Hire | Goa Bus Package Tours</title>
  <meta name="description" content="Hire buses and tempo travellers for your Pune to Goa trip. Choose from a variety of vehicles including 14, 17, 25, 32, 35, 40, 45, 50 seater buses, and urbania for an unforgettable Goa tour. Book with Amruta Travels today!" />
  <meta name="keywords" content="Pune to Goa 17 Seater Bus on Rent, Pune to Goa Urbania Bus Hire, Pune to Goa AC Bus on Rent, 14 Seater, 17 Seater, 25 Seater, 32 Seater on Rent for Pune to Goa, 35 Seater, 40 Seater, 45 Seater, 50 Seater on Rent for Pune to Goa, Pune to Goa Bus Package for Trip from Pune, Pune to Goa Bus Hire for Picnic, Pune to Goa Bharat Benz Hire for Picnic, Amruta Travels Pune On Rent, 32 Seater Bus on Rent in Pune, Pune to Goa Tempo Traveller on Rent, Pune to Goa Mini Bus on Rent, 13 Seater Urbania on Rent for Goa Trip, 17 Seater Urbania on Rent for Goa Trip, Pune to Goa Mini Bus on Rent, Pune to Goa Bus Tour Packages, Bus Hire on Rent for Pune to Goa, Pune to Goa Bus Hire on Rent, Pune to Goa Bus Hire on Rent Contact Number, Pune Goa Bus Package Tour, Amruta Travels Pune On Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers a wide range of buses and tempo travellers for your Pune to Goa trips, with options for 14, 17, 25, 32, 35, 40, 45, 50 seater buses. We also offer Urbania, AC buses, and more for comfortable and affordable travel.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-goa-bus-hire",
        "logo": "https://amrutatravel.com/images/goa-bus-hire.jpg",
        "image": "https://amrutatravel.com/images/goa-bus-hire.jpg",
        "priceRange": "₹1500 - ₹35000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-goa-bus-hire",
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
              "name": "Amit Joshi"
            },
            "datePublished": "2024-08-01",
            "reviewBody": "Amazing experience with Amruta Travels! The 17-seater Urbania bus was perfect for our Goa trip. Highly recommended."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Mehta"
            },
            "datePublished": "2024-09-15",
            "reviewBody": "We hired a 32-seater bus for our Goa tour, and everything was seamless. Comfortable seating and a very professional driver."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-goa-bus-hire"
        },
        "keywords": "Pune to Goa 17 Seater Bus on Rent, Pune to Goa Urbania Bus Hire, Pune to Goa AC Bus on Rent, 14 Seater, 17 Seater, 25 Seater, 32 Seater on Rent for Pune to Goa, 35 Seater, 40 Seater, 45 Seater, 50 Seater on Rent for Pune to Goa, Pune to Goa Bus Package for Trip from Pune, Pune to Goa Bus Hire for Picnic, Pune to Goa Bharat Benz Hire for Picnic, Amruta Travels Pune On Rent, 32 Seater Bus on Rent in Pune, Pune to Goa Tempo Traveller on Rent, Pune to Goa Mini Bus on Rent, 13 Seater Urbania on Rent for Goa Trip, 17 Seater Urbania on Rent for Goa Trip, Pune to Goa Mini Bus on Rent, Pune to Goa Bus Tour Packages, Bus Hire on Rent for Pune to Goa, Pune to Goa Bus Hire on Rent, Pune to Goa Bus Hire on Rent Contact Number, Pune Goa Bus Package Tour, Amruta Travels Pune On Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-23.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Pune to Goa Bus Hire – Amruta Travels:</h3>
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
export default PuneToGoaBusHire;