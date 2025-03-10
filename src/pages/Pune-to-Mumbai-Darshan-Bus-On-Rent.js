
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneToMumbaiDarshanBusOnRent(){

  const cardData = 
    {
      keyword: 'Pune to Mumbai Darshan Bus on Rent',
      heading: 'Amruta Travels: Pune to Mumbai Darshan Bus on Rent',

      headingDescription: 'Traveling from Pune to Mumbai provides an excellent opportunity to experience one of India’s most dynamic cities. At Amruta Travels, we specialize in offering top-tier bus rental services for your Mumbai Darshan adventure. Our modern, well-maintained buses ensure a comfortable and enjoyable journey, while our experienced drivers guarantee a smooth and safe trip.',

      top:"Top Places to Visit in Mumbai with Amruta Travels:",
      topPlaces: [
        {
            "title": "Gateway of India:",
            "description": "This monumental structure overlooking the Arabian Sea is a symbol of Mumbai’s grandeur and serves as a popular starting point for exploring the city’s rich history and vibrant culture. Built to commemorate the visit of King George V and Queen Mary in 1911, the Gateway is an iconic landmark that reflects Mumbai's historical significance and architectural elegance."
        },
        {
            "title": "Marine Drive:",
            "description": "Often referred to as the Queen's Necklace, Marine Drive offers a picturesque promenade along the coastline. It’s an ideal spot for evening walks, enjoying the sea breeze, and capturing breathtaking views of the sunset. The long stretch of road is lined with art deco buildings, adding to its charm and making it a favorite location for locals and tourists alike."
        },
        {
            "title": "Chhatrapati Shivaji Maharaj Terminus:",
            "description": "A UNESCO World Heritage Site, this grand railway station is an architectural gem showcasing Victorian Gothic Revival style. It represents Mumbai’s colonial past and is a must-visit for its stunning design. Completed in 1888, the station's intricate facade and spacious interiors reflect the grandeur of the British era and remain a central hub in Mumbai's railway network."
        },
        {
            "title": "Elephanta Caves:",
            "description": "Located on Elephanta Island, these ancient rock-cut temples are dedicated to Lord Shiva. The caves are renowned for their intricate sculptures and have been designated as a UNESCO World Heritage Site. The main cave, known for its colossal depiction of the Trimurti, offers a fascinating glimpse into ancient Indian artistry and spirituality."
        },
        {
            "title": "Juhu Beach:",
            "description": "A popular destination for locals and tourists alike, Juhu Beach is known for its lively atmosphere, street food, and beautiful coastline. It’s perfect for relaxing by the sea or taking a leisurely stroll at sunset. The beach is also home to many Bollywood celebrities' homes, making it a point of interest for fans and visitors."
        },
        {
            "title": "Haji Ali Dargah:",
            "description": "Situated on an islet off the coast of Worli, Haji Ali Dargah is a revered pilgrimage site known for its stunning architecture and serene environment. It’s a spiritual landmark that attracts visitors from all over. The dargah is accessible via a causeway that gets submerged during high tides, adding to its mystique and charm."
        },
        {
            "title": "Siddhivinayak Temple:",
            "description": "This famous Ganesh temple is one of the most visited religious sites in Mumbai. Devotees come here seeking blessings from Lord Ganesha, making it an important cultural and spiritual landmark. The temple, built in 1801, is renowned for its simple yet elegant design and the spiritual fervor of the devotees it attracts."
        },
        {
            "title": "Colaba Causeway:",
            "description": "A bustling shopping street, Colaba Causeway is famous for its vibrant markets, eclectic mix of shops, and diverse eateries. It’s a great place to experience Mumbai’s lively street life and shop for unique items. From fashionable clothing to quirky souvenirs, the street offers a dynamic shopping experience and a taste of Mumbai’s energetic spirit."
        },
        {
            "title": "Chor Bazaar:",
            "description": "Known as the 'Thieves Market,' Chor Bazaar is a treasure trove of antiques and vintage goods. It offers a unique shopping experience with its wide range of collectibles and rare items. The market's labyrinthine lanes are filled with everything from old Bollywood posters to intricate jewelry, making it a haven for treasure hunters and history enthusiasts."
        },
        {
            "title": "Bandra-Worli Sea Link:",
            "description": "This impressive bridge connects Bandra and Worli, offering stunning views of the city’s skyline and the Arabian Sea. It’s a modern engineering marvel and provides a scenic drive between the two areas. Opened in 2009, the bridge has become a symbol of Mumbai's rapid modernization and offers a smooth transit route as well as picturesque vistas of the sea and cityscape."
        }
    ],    

     services: [
    {
        "name": "Pune to Mumbai Darshan Bus on Rent:",
        "description": "Experience a comfortable and convenient journey with Amruta Travels' bus rental services for your Pune to Mumbai Darshan. Our fleet of modern buses is ideal for exploring Mumbai's iconic landmarks, including the Gateway of India, Marine Drive, and more. Enjoy a hassle-free trip with our professional drivers and well-maintained vehicles, ensuring a memorable sightseeing experience."
    },
    {
        "name": "Pune to Mumbai International Airport Mini Bus on Rent:",
        "description": "Travel with ease from Pune to Mumbai International Airport with our mini bus rental services. Perfect for groups and families, our mini buses offer comfort and convenience for airport transfers. Ensure a smooth start to your journey with Amruta Travels' reliable and punctual service, providing a stress-free experience for all passengers."
    },
    {
        "name": "Pune to Navi Mumbai Bus on Rent:",
        "description": "For trips from Pune to Navi Mumbai, choose Amruta Travels for a dependable and comfortable bus rental service. Our buses are equipped to handle long journeys with ease, making your travel experience stress-free and enjoyable. Whether for corporate events or personal travel, we’ve got you covered with top-notch service and well-maintained vehicles."
    },
    {
        "name": "Pune to Thane Bus on Rent:",
        "description": "Explore Thane with our specialized bus rental services from Pune. Ideal for group travel and events, our buses provide a comfortable ride with modern amenities. Trust Amruta Travels to offer a seamless travel experience with punctual service and well-maintained vehicles, ensuring a pleasant journey to Thane."
    },
    {
        "name": "Pune to Mumbai Airport Urbania Bus on Rent:",
        "description": "Opt for Amruta Travels for your Pune to Mumbai Airport Urbania bus rental needs. Our buses are designed to provide a luxurious and comfortable experience for airport transfers. Whether you're heading to an international flight or a domestic departure, we ensure timely and efficient service, making your journey as comfortable as possible."
    },
    {
        "name": "Pune to Mumbai Airport Drop Bus on Rent:",
        "description": "Ensure a smooth and timely airport drop-off with Amruta Travels' bus rental service. Our buses are perfect for groups needing transportation from Pune to Mumbai Airport. Enjoy a stress-free journey with our reliable service and comfortable vehicles, making your airport transfer experience efficient and pleasant."
    },
    {
        "name": "Pune to Mumbai Domestic Airport Bus on Rent:",
        "description": "Traveling to Mumbai Domestic Airport from Pune? Choose Amruta Travels for a comfortable and efficient bus rental service. Our well-maintained buses offer ample space and amenities for a pleasant journey, ensuring your airport transfer is smooth and hassle-free."
    },
    {
        "name": "Pune to Panvel Bus on Rent:",
        "description": "For trips from Pune to Panvel, Amruta Travels offers reliable and comfortable bus rental services. Our buses are ideal for both short and long-distance travel, ensuring a pleasant journey with modern amenities and professional drivers. Experience comfort and convenience on your way to Panvel with our dedicated service."
    },
    {
        "name": "Pune to Mumbai Round Trip Bus on Rent:",
        "description": "Plan a round trip from Pune to Mumbai with ease using Amruta Travels' bus rental services. Whether you're attending events, exploring the city, or need transportation for a group, our buses are equipped to provide comfort and convenience for the entire journey. Enjoy a smooth and enjoyable round trip with our reliable service."
    },
    {
        "name": "Pune to Mumbai Events Bus on Rent:",
        "description": "Make your events in Mumbai memorable with Amruta Travels' bus rental services. Ideal for corporate events, weddings, and other gatherings, our buses offer the perfect solution for transporting guests comfortably and efficiently from Pune to Mumbai. Ensure a successful event with our reliable and well-equipped transportation."
    },
    {
        "name": "Pune to Dadar Mini Bus on Rent:",
        "description": "Traveling to Dadar from Pune? Amruta Travels provides mini bus rental services to ensure a comfortable and efficient journey. Our mini buses are perfect for smaller groups and offer the convenience of flexible scheduling and personalized service, making your trip to Dadar smooth and enjoyable."
    },
    {
        "name": "Pune to Bandra Terminus Bus on Rent:",
        "description": "Traveling from Pune to Bandra Terminus? Amruta Travels provides reliable and comfortable bus rental services for this route. Our buses are well-maintained and equipped with modern amenities, making your journey to Bandra Terminus smooth and enjoyable. Whether you're heading to the railway station for a trip or any other purpose, trust us to deliver a comfortable travel experience."
    },
    {
        "name": "Pune Mumbai Tempo Traveller Hire:",
        "description": "For a comfortable and flexible travel option between Pune and Mumbai, consider hiring a tempo traveller from Amruta Travels. Our tempo travellers are ideal for medium-sized groups, offering a practical and cozy solution for travel between these two cities. Enjoy a comfortable ride with essential amenities and personalized service."
    },
    {
        "name": "Pune to Mumbai Darshan Mini Bus on Rent:",
        "description": "Explore Mumbai’s top attractions with our mini bus rental service for Mumbai Darshan from Pune. Amruta Travels offers mini buses designed for group travel, providing a comfortable and efficient way to experience the city’s landmarks. Whether it’s a sightseeing tour or a cultural visit, our mini buses ensure a pleasant and organized travel experience."
    },
    {
        "name": "Pimpri to Mumbai Darshan Mini Bus on Rent:",
        "description": "For those traveling from Pimpri to Mumbai for a Darshan tour, Amruta Travels offers mini bus rentals that cater to your group’s needs. Our mini buses are well-suited for comfortable travel, ensuring that your journey from Pimpri to Mumbai is both enjoyable and efficient. Experience the city’s sights with ease and comfort."
    },
    {
        "name": "Pune Railway Station to Mumbai Darshan Mini Bus on Rent:",
        "description": "If you’re arriving at Pune Railway Station and planning a Mumbai Darshan, Amruta Travels provides mini bus rentals for convenient transportation. Our mini buses ensure a smooth transfer from the railway station to Mumbai, offering comfort and reliability for your sightseeing tour. Enjoy a seamless travel experience with our well-equipped mini buses."
    },
    {
        "name": "Pune to Mumbai Darshan Package:",
        "description": "Amruta Travels offers a comprehensive Pune to Mumbai Darshan package, tailored to make your sightseeing tour enjoyable and hassle-free. Our package includes transportation in comfortable and well-maintained vehicles, ensuring you visit Mumbai’s top attractions with ease. Experience the city’s landmarks and cultural sites with our dedicated Darshan package."
    },
    {
        "name": "Pune to Mumbai Darshan Urbania on Rent:",
        "description": "For a premium travel experience, consider our Urbania package for Pune to Mumbai Darshan and Urbania On Rent in Mumbai. Amruta Travels offers the Urbania on rent, providing a luxurious and comfortable option for your sightseeing tour. Enjoy a stylish and convenient journey as you explore Mumbai’s key attractions with our top-tier Urbania service."
    },
    {
        "name": "Pune to Mumbai Darshan Bus On Rent Contact Number:",
        "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Pune to Mumbai Darshan Bus On Rent. We ensure a smooth and enjoyable ride for all our customers with our reliable and well-maintained buses."
    }
],

   "tableData": [
    ["Pune to Mumbai Darshan Bus on Rent", "Pune to Mumbai International Airport Mini Bus on Rent"],
    ["Pune to Navi Mumbai Bus on Rent", "Pune to Thane Bus on Rent"],
    ["Pune to Mumbai Airport Urbania Bus on Rent", "Pune to Mumbai Airport Drop Bus on Rent"],
    ["Pune to Mumbai Domestic Airport Bus on Rent", "Pune to Panvel Bus on Rent"],
    ["Pune to Mumbai Round Trip Bus on Rent", "Pune to Mumbai Events Bus on Rent"],
    ["Pune to Dadar Mini Bus on Rent", "Pune to Bandra Terminus Bus on Rent"],
    ["Pune Mumbai Tempo Traveller Hire", "Pune to Mumbai Darshan Mini Bus on Rent"],
    ["Pimpri to Mumbai Darshan Mini Bus on Rent", "Pune Railway Station to Mumbai Darshan Mini Bus on Rent"],
    ["Pune to Mumbai Darshan Package", "Pune to Mumbai Darshan Urbania on Rent"]
],

    "whychoose": [
    {
        "WhyChooseheading": "Why Choose Amruta Travels for Your Pune to Mumbai Darshan Bus On Rent?",
        "WhyChoosedescription": "Amruta Travels is your premier choice for a comfortable and enjoyable journey from Pune to Mumbai. We provide top-notch services to make your Darshan experience smooth and memorable, ensuring you visit Mumbai’s iconic landmarks with ease."
    },
    {
        "WhyChooseheading": "Comfort and Convenience:",
        "WhyChoosedescription": "Our modern fleet of well-maintained buses ensures a comfortable journey with features such as plush seating, air conditioning, and ample legroom. We focus on providing a pleasant and relaxing travel experience, so you can enjoy your Darshan to the fullest."
    },
    {
        "WhyChooseheading": "Reliable Service:",
        "WhyChoosedescription": "Punctuality is key to a successful trip. Our professional drivers are committed to on-time arrivals and departures, ensuring you reach your destination without any delays. We value your time and strive to provide efficient and dependable service."
    },
    {
        "WhyChooseheading": "Experienced Drivers:",
        "WhyChoosedescription": "Our drivers are not only skilled but also well-acquainted with the Pune to Mumbai route. Their extensive experience ensures a smooth, safe, and enjoyable journey, allowing you to relax and focus on your visit rather than the travel logistics."
    },
    {
        "WhyChooseheading": "Customizable Options:",
        "WhyChoosedescription": "We offer flexible rental options to cater to your specific needs. Whether you’re planning a day trip or a longer visit, we can provide buses of various sizes and amenities to match your group’s requirements and preferences."
    },
    {
        "WhyChooseheading": "Competitive Pricing:",
        "WhyChoosedescription": "Our services are priced competitively, offering excellent value without compromising on quality. We maintain a transparent pricing structure, so you know exactly what to expect without any hidden costs."
    },
    {
        "WhyChooseheading": "Comprehensive Support:",
        "WhyChoosedescription": "Our dedicated customer service team is here to assist you with booking, itinerary planning, and any special requests. We are committed to making your journey smooth and hassle-free, providing support every step of the way."
    },
    {
        "WhyChooseheading": "Safety First:",
        "WhyChoosedescription": "We prioritize passenger safety by adhering to all safety regulations and conducting regular maintenance checks on our buses. Your well-being is our top concern, and we ensure a secure and comfortable travel experience."
    },
    {
        "WhyChooseheading": "Comfortable Amenities:",
        "WhyChoosedescription": "Our luxury buses come equipped with amenities like Wi-Fi, entertainment systems, and refreshments. We aim to enhance your travel experience by providing a range of comforts to make your journey enjoyable and relaxing."
    },
    {
        "WhyChooseheading": "Clean and Well-Maintained Vehicles:",
        "WhyChoosedescription": "We ensure that our buses are thoroughly cleaned and well-maintained before each journey. This guarantees a fresh and hygienic environment for all passengers, contributing to a pleasant travel experience."
    },
    {
        "WhyChooseheading": "Positive Customer Feedback:",
        "WhyChoosedescription": "We take pride in our excellent service and the positive feedback from our customers. Our commitment to quality and customer satisfaction is reflected in the numerous positive reviews we receive."
    }
]

};

const faqData = [
    {
        "question": "What types of buses are available for rent for the Pune to Mumbai Darshan?",
        "answer": "We offer a range of buses including luxury coaches, standard buses, and mini-buses. Each option is designed to provide maximum comfort and convenience based on your needs."
    },
    {
        "question": "How do I book a bus for Pune to Mumbai Darshan?",
        "answer": "You can book a bus by contacting our customer service team via phone or email. Alternatively, you can visit our website and fill out the booking form for a quick and easy reservation."
    },
    {
        "question": "Are there any additional costs apart from the rental fee?",
        "answer": "Our pricing is transparent with no hidden costs. Additional expenses may include fuel charges, tolls, and parking fees if applicable. We provide a detailed quote upfront so you are aware of all costs involved."
    },
    {
        "question": "Can I customize the itinerary for the trip?",
        "answer": "Yes, we offer customizable options for your itinerary. You can discuss your travel plans with our team, and we will work with you to create a schedule that fits your needs."
    },
    {
        "question": "What amenities are provided on the bus?",
        "answer": "Depending on the bus type, amenities may include air conditioning, comfortable seating, Wi-Fi, entertainment systems, and refreshments. Please let us know your preferences when booking."
    },
    {
        "question": "How far in advance should I book the bus?",
        "answer": "We recommend booking your bus as early as possible to ensure availability, especially during peak travel seasons. Booking at least a few weeks in advance is ideal."
    },
    {
        "question": "What is the cancellation policy?",
        "answer": "Our cancellation policy varies depending on the booking terms. Generally, cancellations made within a specified period before the departure date may incur a cancellation fee. Please refer to our booking terms or contact our team for specific details."
    },
    {
        "question": "Are your buses equipped with safety features?",
        "answer": "Yes, all our buses are equipped with essential safety features including seat belts, first aid kits, and are regularly maintained to ensure a safe journey for all passengers."
    },
    {
        "question": "Can I make changes to my booking after confirmation?",
        "answer": "Yes, changes can be made to your booking based on availability. Please contact our customer service team as soon as possible to discuss any modifications."
    },
    {
        "question": "How can I contact Amruta Travels for more information?",
        "answer": "You can reach us through our customer service phone line, email, or by visiting our website. Our team is available to answer any questions and assist with your booking."
    }
];


const testimonials = [
    {
        "name": "Mr. Ravi Sharma",
        "text": "Our group recently hired a bus from Amruta Travels for a Pune to Mumbai Darshan, and the experience was outstanding. The bus was pristine and equipped with comfortable seating and modern amenities, making our journey smooth and enjoyable. The driver was punctual and well-informed about the route, ensuring we arrived on time at each of our destinations. The booking process was straightforward, and the customer service was excellent. We highly recommend Amruta Travels for anyone looking for reliable and comfortable bus rental services."
    },
    {
        "name": "Miss Anjali Deshmukh",
        "text": "We chose Amruta Travels for our Pune to Mumbai Darshan trip, and it was an excellent decision. The luxury bus we rented was spacious and well-maintained, with all the amenities we needed for a comfortable ride. The driver was professional and navigated the busy Mumbai traffic efficiently, allowing us to focus on our sightseeing. The staff at Amruta Travels was very helpful throughout the booking process, making everything hassle-free. We had a fantastic experience and will definitely use their services again for future trips."
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
        heading: "Pune to Mumbai Darshan Bus On Rent Contact Number:",
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
  <title> Urbania On Rent in Mumbai | Contact: +91 8421333435 | Amruta Travels | Pune to Mumbai Darshan Bus On Rent | Mini Bus & Tempo Traveller Rental</title>
  <meta name="description" content="Book buses, mini buses, and tempo travellers for Pune to Mumbai Darshan tours and Urbania On Rent in Mumbai. Services include airport drops, Mumbai city tours, and more. Affordable bus rentals for Mumbai Darshan and events with Amruta Travels." />
  <meta name="keywords" content="Pune to Mumbai Darshan Bus on Rent, Pune to Mumbai international airport mini bus on rent, Pune to Navi Mumbai Bus on rent, Pune to Thane Bus on Rent, Pune to Mumbai Airport Urbania Bus on Rent, Pune to Mumbai Airport Drop bus on Rent, Pune to Mumbai Domestic Airport bus on Rent, Pune to Panvel bus On Rent, Pune to Mumbai Round Trip bus on Rent, Pune to Mumbai Events bus on Rent, Pune to Dadar mini bus on rent, Pune to Bandra Terminus bus on Rent, Pune Mumbai Tempo Traveller Hire, Pune to Mumbai Darshan Mini Bus On Rent, Pimpri to Mumbai Darshan mini bus on rent, Pune railway station to Mumbai Darshan mini bus on rent, Pune to Mumbai Darshan package, Pune to Mumbai Darshan Urbania On Rent" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels provides bus, mini bus, and tempo traveller rentals for Pune to Mumbai Darshan tours. Visit Mumbai, including airport, temples, and famous landmarks with our affordable and reliable bus services.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-mumbai-darshan-bus-on-rent",
        "logo": "https://amrutatravel.com/images/pune-to-mumbai-darshan-bus.jpg",
        "image": "https://amrutatravel.com/images/pune-to-mumbai-darshan-bus.jpg",
        "priceRange": "₹4500 - ₹35000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-mumbai-darshan-bus-on-rent",
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
            "reviewBody": "We booked a mini bus for the Mumbai Darshan tour. The bus was comfortable, and the service was excellent. Highly recommend Amruta Travels."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Seema Deshmukh"
            },
            "datePublished": "2024-05-10",
            "reviewBody": "Had a wonderful trip to Mumbai with Amruta Travels. The bus was on time, and the driver was very professional."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-mumbai-darshan-bus-on-rent"
        },
        "keywords": "Pune to Mumbai Darshan Bus on Rent, Pune to Mumbai international airport mini bus on rent, Pune to Navi Mumbai Bus on rent, Pune to Thane Bus on Rent, Pune to Mumbai Airport Urbania Bus on Rent, Pune to Mumbai Airport Drop bus on Rent, Pune to Mumbai Domestic Airport bus on Rent, Pune to Panvel bus On Rent, Pune to Mumbai Round Trip bus on Rent, Pune to Mumbai Events bus on Rent, Pune to Dadar mini bus on rent, Pune to Bandra Terminus bus on Rent, Pune Mumbai Tempo Traveller Hire, Pune to Mumbai Darshan Mini Bus On Rent, Pimpri to Mumbai Darshan mini bus on rent, Pune railway station to Mumbai Darshan mini bus on rent, Pune to Mumbai Darshan package, Pune to Mumbai Darshan Urbania On Rent"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-27.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Pune to Mumbai Darshan Bus On Rent - Amruta Travels:</h3>
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
export default PuneToMumbaiDarshanBusOnRent;