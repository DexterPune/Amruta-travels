
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function PuneToLonavalaBusHire(){

  const cardData = 
    {
      keyword: 'Pune to Lonavala Bus Hire',
      heading: 'Amruta Travels: Pune to Lonavala Bus Hire',

      headingDescription: ' Choose Amruta Travels for a seamless and comfortable journey. Our reliable bus hire service ensures that you travel in style and comfort, with a range of bus options to suit your needs. Whether you are organizing a family outing, corporate trip, or a school excursion, our well-maintained buses are ready to take you to Lonavala, one of Maharashtra’s most charming hill stations.',

      top:"Top Places to Visit in Lonavala with Amruta Travels:",
       topPlaces : [
        {
            "title": "Lonavala Lake:",
            "description": "A tranquil spot perfect for relaxation, Lonavala Lake is surrounded by lush greenery and offers a serene environment. It’s a popular picnic spot and a great place for a peaceful walk."
        },
        {
            "title": "Karla Caves:",
            "description": "These ancient Buddhist rock-cut caves are a significant historical and architectural marvel. The Karla Caves offer insight into early Buddhist architecture and are renowned for their intricate carvings and sculptures."
        },
        {
            "title": "Bhaja Caves:",
            "description": "Another set of ancient Buddhist rock-cut caves, Bhaja Caves are known for their stunning architecture and historical significance. The caves are located on a hill and offer panoramic views of the surrounding landscape."
        },
        {
            "title": "Rajmachi Fort:",
            "description": "Rajmachi Fort is a popular trekking destination that offers breathtaking views of the Sahyadri mountain range. The fort is a historical site and a great spot for adventure enthusiasts."
        },
        {
            "title": "Duke’s Nose:",
            "description": "Also known as Nagphani, Duke’s Nose is a prominent peak resembling a snake’s hood. It’s a favorite spot for trekking and offers panoramic views of the surrounding hills and valleys."
        },
        {
            "title": "Lion’s Point:",
            "description": "Lion’s Point provides stunning sunset views and is a popular vantage point for capturing the beauty of Lonavala’s landscape. The area is surrounded by lush greenery and offers a picturesque setting."
        },
        {
            "title": "Pawna Lake:",
            "description": "An artificial reservoir, Pawna Lake is ideal for picnics, camping, and water activities. The lake is surrounded by hills and offers a serene environment for relaxation."
        },
        {
            "title": "Tung Fort:",
            "description": "Tung Fort is a historical fort located at a high altitude. It offers a challenging trek and rewards hikers with spectacular views of the surrounding valleys and forts."
        },
        {
            "title": "Khandala:",
            "description": "Just a short drive from Lonavala, Khandala is another beautiful hill station known for its scenic beauty and pleasant weather. Key attractions include the Amrutanjan Point and Khandala Lake."
        },
        {
            "title": "Bhushi Dam:",
            "description": "A popular spot during the monsoon season, Bhushi Dam is known for its cascading waterfalls and natural beauty. It’s a great place to enjoy the refreshing monsoon showers and scenic surroundings."
        }
    ],    

    services: [
        {
          "name": "Tempo Travellers On Rent for Lonavala in Pune",
          "description": "Planning a group trip to Lonavala and need a reliable transport solution? Amruta Travels offers premium tempo travellers on rent for your journey from Pune to Lonavala. Our well-maintained tempo travellers are perfect for group outings, providing ample space and comfort for a pleasant trip. Enjoy a hassle-free journey with modern amenities and experienced drivers who ensure safety and punctuality."
        },
        {
          "name": "Pune to Lonavala Urbania Bus on Rent",
          "description": "For a comfortable and luxurious travel experience, choose our Urbania bus on rent for your journey from Pune to Lonavala and Urbania Rent in Lonavala. Amruta Travels offers well-equipped Urbania buses that combine style with functionality, making them ideal for corporate trips, family outings, or special events. Experience a smooth ride with ample space and modern amenities."
        },
        {
          "name": "Pune to Khandala Bus Hire Package",
          "description": "Explore the scenic beauty of Khandala with our exclusive bus hire package. Amruta Travels provides tailored bus hire packages from Pune to Khandala, ensuring a comfortable and enjoyable journey. Our packages include various bus sizes to suit your group size and travel needs, with professional drivers to make your trip memorable."
        },
        {
          "name": "Pune to Lonavala 17-Seater Bus Hire Package",
          "description": "For smaller groups or intimate gatherings, our 17-seater bus hire package is perfect. Amruta Travels offers a well-maintained 17-seater bus equipped with modern amenities for a comfortable journey from Pune to Lonavala. Enjoy personalized service and a smooth ride with our reliable bus hire package."
        },
        {
          "name": "17-Seater Bus Rate Per Km in Pimpri Chinchwad",
          "description": "Looking for competitive rates for a 17-seater bus in Pimpri Chinchwad? Amruta Travels offers transparent pricing based on distance and duration. Our rate per km is designed to provide excellent value for your money, ensuring a cost-effective solution for your travel needs."
        },
        {
          "name": "Pune to Lonavala Khandala Bus Tour Package",
          "description": "Combine the best of both worlds with our Pune to Lonavala Khandala bus tour package. Amruta Travels offers a comprehensive tour package that covers major attractions in both Lonavala and Khandala. Enjoy a comfortable and well-organized tour with our experienced drivers and customized itinerary."
        },
        {
          "name": "Pune to Lonavala 14, 17, 20, 25, 32-Seater Bus on Rent",
          "description": "No matter the size of your group, Amruta Travels has the right bus for you. We offer a range of buses from 14 to 32-seaters for rent from Pune to Lonavala. Choose the bus size that best fits your group and enjoy a comfortable journey with all the necessary amenities for a pleasant trip."
        },
        {
          "name": "Pune to Lonavala 35, 40, 45, 50-Seater Bus on Rent",
          "description": "For larger groups, our 35, 40, 45, and 50-seater buses provide ample space and comfort for your journey from Pune to Lonavala. Amruta Travels ensures a smooth and enjoyable ride with well-maintained buses, professional drivers, and modern amenities to cater to all your travel needs."
        },
        {
          "name": "Pune to Lonavala 2-Day Bus Package",
          "description": "Make the most of your trip with our 2-day bus package from Pune to Lonavala. Amruta Travels offers a flexible and affordable package that includes comfortable transport and a customized itinerary to explore Lonavala over two days. Enjoy a stress-free and memorable trip with our dedicated service."
        },
        {
          "name": "Pune to Khandala Mini Bus Package",
          "description": "If you’re planning a trip to Khandala and need a smaller vehicle, our mini bus package is an ideal choice. Amruta Travels provides mini buses for rent that are perfect for group travel. Enjoy a comfortable and efficient journey with our mini bus package tailored to your needs."
        },
        {
          "name": "Pune to Lonavala Corporate Bus Package",
          "description": "For corporate events and team outings, Amruta Travels offers specialized corporate bus packages from Pune to Lonavala. Our corporate bus packages include comfortable buses with amenities suited for business travel, professional drivers, and flexible options to meet your corporate travel requirements."
        },
        {
          "name": "Pune to Lonavala Corporate Event Package",
          "description": "If you're organizing a corporate event or outing to Lonavala, Amruta Travels provides tailored packages to ensure your event runs smoothly. Our corporate event packages include comfortable and reliable transportation options that cater to your specific needs, whether for team-building activities, business meetings, or company retreats."
        },
        {
          "name": "Pune to Lonavala Bus on Rent",
          "description": "Our bus rental service for the Pune to Lonavala route is ideal for group travel. Choose from various bus sizes to accommodate your group comfortably. We offer well-maintained buses equipped to handle long journeys, ensuring a pleasant travel experience."
        },
        {
          "name": "Pune to Lonavala Tourist Bus on Rent",
          "description": "For a sightseeing adventure from Pune to Lonavala, our tourist buses provide the perfect solution. Our fleet includes buses designed for comfort and convenience, making your journey enjoyable while you explore the scenic beauty of Lonavala."
        },
        {
          "name": "Pune to Lonavala Urbania on Rent",
          "description": "Experience luxury and style with our Urbania rentals for your trip from Pune to Lonavala. Ideal for high-profile groups or special occasions, the Urbania offers a premium travel experience with added amenities for an upscale journey."
        },
        {
          "name": "Pune to Lonavala Tempo Traveller on Rent",
          "description": "Our tempo traveller service for Pune to Lonavala is perfect for both small and large groups. Choose from a range of tempo traveller options to suit your group size and travel preferences. Enjoy a comfortable ride with ample space for luggage and relaxation."
        },
        {
          "name": "Pune to Lonavala Full Day Tempo Traveller on Rent",
          "description": "If you’re planning a full-day excursion to Lonavala, our full-day tempo traveller rental ensures you have a reliable and comfortable vehicle throughout the day. This option is ideal for day trips where you want the flexibility to explore Lonavala at your own pace."
        },
        {
          "name": "Mini Bus on Rent for Pune to Lonavala",
          "description": "For a more compact group travel option, our mini buses offer a great solution. They provide comfort and ease for smaller groups traveling from Pune to Lonavala, making them perfect for intimate gatherings and small tours."
        },
        {
          "name": "Tata Winger on Rent Pune to Lonavala",
          "description": "Our Tata Winger rentals are a versatile option for your journey from Pune to Lonavala. Known for its comfort and practicality, the Tata Winger is suitable for both corporate events and casual trips, providing a reliable and enjoyable travel experience."
        },
        {
          "name": "One Day Trip from Pune to Lonavala",
          "description": "Plan a memorable one-day trip from Pune to Lonavala with Amruta Travels. Whether you're heading out for sightseeing, adventure, or a quick getaway, we offer a range of vehicles to ensure a comfortable and convenient journey."
        },
        {
          "name": "Amruta Travels Pune On Rent",
          "description": "For all your rental needs from Pune to Lonavala, Amruta Travels is your trusted partner. We offer a range of vehicles including buses, tempo travellers, mini buses, and Tata Wingers, all designed to provide a seamless travel experience. Our team is dedicated to ensuring your journey is smooth, comfortable, and enjoyable."
        },
        {
          "name": "Mini Bus On Rent in Pune Contact Number",
          "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Mini Bus On Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
      ],

      "tableData": [
    ["-Pune to Lonavala Urbania Bus on Rent", "-Pune to Lonavala 17 Seater Bus Hire Package"],
    ["-Pune to Lonavala 14, 17, 20, 25, 32 Seater Bus on Rent", "-Pune to Lonavala 35, 40, 45, 50 Seater Bus on Rent"],
    ["-Pune to Lonavala 2 Day Bus Package", "-Pune to Khandala Mini Bus Package"],
    ["-Pune to Lonavala Corporate Bus Package", "-Pune to Lonavala Corporate Event Package"],
    ["-Pune to Lonavala Bus on Rent", "-Pune to Lonavala Tourist Bus on Rent"],
    ["-Pune to Lonavala Urbania on Rent", "-Pune to Lonavala Tempo Traveller on Rent"],
    ["-Pune to Lonavala Full Day Tempo Traveller on Rent", "-Mini Bus on Rent for Pune to Lonavala"],
    ["-Tata Winger on Rent Pune to Lonavala", "-One Day Trip from Pune to Lonavala"],

  ],

  "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Bus on Rent in Pune?",
      "WhyChoosedescription": "Amruta Travels offers exceptional bus rental services in Pune, catering to various needs with a focus on comfort, safety, and affordability."
    },
    {
      "WhyChooseheading": "Extensive Fleet of Vehicles:",
      "WhyChoosedescription": "We offer a diverse range of buses for your journey from Pune to Lonavala. Whether you need a 17-seater for a small group or a 50-seater for a larger gathering, we have the right bus to accommodate your needs."
    },
    {
      "WhyChooseheading": "Comfort and Convenience:",
      "WhyChoosedescription": "Our buses are designed to provide maximum comfort with spacious seating, air conditioning, and other modern amenities. We ensure that your journey is as enjoyable and relaxing as possible."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers:",
      "WhyChoosedescription": "Our drivers are skilled and experienced, familiar with the Pune to Lonavala route. They prioritize your safety and adhere to a punctual schedule, ensuring a smooth and timely trip."
    },
    {
      "WhyChooseheading": "Competitive Pricing:",
      "WhyChoosedescription": "We offer transparent and competitive pricing for our bus hire services. You can expect clear and fair rates with no hidden charges, making your travel budget-friendly."
    },
    {
      "WhyChooseheading": "Flexible Booking Options:",
      "WhyChoosedescription": "We provide flexible booking options to cater to your specific travel needs. Whether you’re planning a day trip or an extended stay, we can customize our services to fit your itinerary."
    },
    {
      "WhyChooseheading": "Punctual and Reliable Service:",
      "WhyChoosedescription": "Timeliness is crucial, and we pride ourselves on our punctuality. Our buses arrive on time and adhere to your planned schedule, ensuring a hassle-free travel experience."
    },
    {
      "WhyChooseheading": "Personalized Customer Service:",
      "WhyChoosedescription": "Our dedicated customer service team is available to assist with any queries or special requests. We offer personalized support to ensure your booking and travel experience are smooth and satisfactory."
    },
    {
      "WhyChooseheading": "Clean and Well-Maintained Vehicles:",
      "WhyChoosedescription": "We prioritize cleanliness and maintenance. Our buses are regularly cleaned and inspected to ensure they are in excellent condition for your journey."
    },
    {
      "WhyChooseheading": "Safe and Secure Travel:",
      "WhyChoosedescription": "Safety is our top priority. Our buses are equipped with safety features, and our drivers are trained to handle various road conditions, ensuring a secure travel experience."
    },
    {
      "WhyChooseheading": "Positive Customer Feedback:",
      "WhyChoosedescription": "We have built a strong reputation for reliability and customer satisfaction. Our clients consistently praise our services, and we strive to maintain high standards in every trip we undertake."
    }
  ]
};


const faqData = [
    {
        "question": "How can I book a bus from Pune to Lonavala with Amruta Travels?",
        "answer": "You can book a bus by visiting our website, calling our customer service hotline, or visiting our office in person. We offer easy and convenient booking options to suit your preferences."
    },
    {
        "question": "What types of buses are available for the Pune to Lonavala route?",
        "answer": "We offer a range of buses, including 17-seaters, 32-seaters, 35-seaters, 40-seaters, and 50-seaters. Choose the bus size that best fits your group size and travel needs."
    },
    {
        "question": "Are there any special amenities provided on the buses?",
        "answer": "Yes, our buses are equipped with comfortable seating, air conditioning, and other amenities to enhance your travel experience. The specific amenities may vary depending on the bus type."
    },
    {
        "question": "What is the cost of hiring a bus from Pune to Lonavala?",
        "answer": "The cost varies depending on factors such as the size of the bus, duration of the hire, and any additional services you may require. Contact us for a customized quote based on your specific needs."
    },
    {
        "question": "Can I hire a bus for a day trip or multiple days?",
        "answer": "Yes, we offer flexible booking options for both day trips and extended journeys. You can choose the duration that best suits your travel plans."
    },
    {
        "question": "Are your drivers experienced and reliable?",
        "answer": "Yes, our drivers are experienced, professional, and well-versed with the Pune to Lonavala route. They are committed to ensuring a safe and smooth journey."
    },
    {
        "question": "How far in advance should I book a bus?",
        "answer": "We recommend booking as early as possible to secure your preferred bus and date. Early booking also helps in better planning and availability."
    },
    {
        "question": "What is your cancellation policy?",
        "answer": "Our cancellation policy includes specific terms and conditions, with potential charges based on the timing of the cancellation. Please contact our customer service team for detailed information."
    },
    {
        "question": "Are the buses cleaned and maintained regularly?",
        "answer": "Yes, we ensure that all our buses are thoroughly cleaned and regularly maintained to provide a comfortable and hygienic travel experience."
    },
    {
        "question": "Can I request additional services or special requirements?",
        "answer": "Yes, we can accommodate special requests or additional services based on availability. Please inform us of any specific needs when making your booking."
    }
];





const testimonials = [
    {
        "name": "Mrs. Priya Sharma",
        "text": "Our trip from Pune to Lonavala with Amruta Travels was fantastic! We hired a 32-seater bus for a family reunion, and the experience was excellent from start to finish. The bus was clean, comfortable, and well-equipped with amenities that made the journey pleasant for everyone. The driver was professional and friendly, ensuring we arrived on time and safely. The booking process was straightforward, and the customer service was top-notch. I highly recommend Amruta Travels for anyone looking to hire a bus for a trip to Lonavala. We will definitely use their services again!"
    },
    {
        "name": "Mr. Sandeep Kulkarni",
        "text": "I recently booked a 50-seater bus from Pune to Lonavala for a corporate outing with Amruta Travels. The entire experience was smooth and hassle-free. The bus was spacious and well-maintained, providing a comfortable ride for our team. The driver was punctual, courteous, and knowledgeable about the best routes. The service exceeded our expectations, and the whole team was very satisfied with the journey. If you’re looking for reliable and comfortable bus hire for a trip to Lonavala, Amruta Travels is the way to go!"
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
        heading: "Pune to Lonavala Bus Hire Contact Number:",
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
  <title> Urbania Rent in Lonavala | Contact: +91 8421333435 | Amruta Travels | Pune to Lonavala Bus Hire | Tempo Traveller, Urbania & Mini Bus Rentals</title>
  <meta name="description" content="Book buses for Pune to Lonavala trips, including Tempo Travellers, Urbania, and Mini Bus rentals. Perfect for corporate events, group tours, and family trips. Special packages for Lonavala and Khandala and Urbania Rent in Lonavala." />
  <meta name="keywords" content="Tempo Travellers On Rent For Lonavala in Pune, Pune to Lonavala Urbania Bus on Rent, Pune to Khandala Bus Hire Package, Pune to Lonavala 17 Seater Bus Hire Package, 17 Seater Bus Rate per km in Pimpri Chinchwad, Pune to Lonavala Khandala Bus Tour Package, Pune to Lonavala 14 17 20 25 32 Seater Bus on Rent, Pune to Lonavala 35 40 45 50 Seater Bus on Rent, Pune to Lonavala 2 Day Bus Package, Pune to Khandala Mini Bus Package, Pune to Lonavala Corporate Bus Package, Pune to Lonavala Corporate Event Package, Pune to Lonavala Bus on Rent, Pune to Lonavala Tourist Bus on Rent, Pune to Lonavala Urbania on Rent, Pune to Lonavala Tempo Traveller on Rent, Pune to Lonavala Full Day Tempo Traveller on Rent, Mini Bus on Rent for Pune to Lonavala, Tata Winger on Rent Pune to Lonavala, One Day Trip from Pune to Lonavala" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers reliable and comfortable bus hire services from Pune to Lonavala, including Tempo Travellers, Urbania, Mini Buses, and luxury vehicles for corporate events, family trips, and group tours.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-lonavala-bus-hire",
        "logo": "https://amrutatravel.com/images/lonavala-bus-hire.jpg",
        "image": "https://amrutatravel.com/images/lonavala-bus-hire.jpg",
        "priceRange": "₹2000 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-lonavala-bus-hire",
          "priceCurrency": "INR",
          "price": "2000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "160"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anand Deshmukh"
            },
            "datePublished": "2024-08-10",
            "reviewBody": "I booked a 35-seater bus for a corporate event to Lonavala. The service was excellent, and the bus was well-maintained. Highly recommended."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Pooja Joshi"
            },
            "datePublished": "2024-09-14",
            "reviewBody": "Our family booked a 17-seater Tempo Traveller for a weekend trip to Lonavala. The driver was friendly, and the ride was very comfortable."
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
          "serviceUrl": "https://amrutatravel.com/pune-to-lonavala-bus-hire"
        },
        "keywords": "Tempo Travellers On Rent For Lonavala in Pune, Pune to Lonavala Urbania Bus on Rent, Pune to Khandala Bus Hire Package, 17 Seater Bus Hire, Lonavala Corporate Bus, Pune to Lonavala Tempo Traveller"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-26.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for “Pune to Lonavala Bus Hire” – Amruta Travels:</h3>
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
export default PuneToLonavalaBusHire;