
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  MiniBus(){

  const cardData = 
    {
      keyword: ' Mini Bus on Rent in Pune ',
      heading: 'Amruta Travels: Mini Bus on Rent in Pune ',

      headingDescription: 'Looking for a mini bus on rent in Pune for your next group trip, family outing, or corporate event? At Amruta Travels, we offer high-quality mini bus rentals in Pune designed to provide you with the ultimate comfort and convenience. Whether you’re heading for a local trip, outstation journey, or a special occasion, our spacious mini buses are the perfect solution for group travel. Book your ride today and experience the best in class service at competitive prices.',

      top:"Top Features of Our Tempo Travellers: ",
       topPlaces : [
        {
            title: "1. Spacious and Comfortable Interiors",
            description: "Our mini buses in Pune are designed with spacious interiors to ensure you and your group enjoy maximum comfort. Whether you're traveling for business or leisure, the ample legroom and headroom in our mini buses provide a relaxed and comfortable experience. These spacious interiors make even long journeys enjoyable for everyone."
        },
        {
            title: "2. Luxurious Seating Options",
            description: "Travel in style with our luxurious seating arrangements. Each seat is ergonomically designed with adjustable headrests and individual armrests for added comfort. Whether you’re going on a corporate trip or a family outing, our plush, well-cushioned seats guarantee a relaxing travel experience throughout your journey."
        },
        {
            title: "3. Advanced Air Conditioning",
            description: "Stay cool and comfortable even in the hot Pune weather with our state-of-the-art air conditioning systems. Our mini buses on rent are equipped with powerful AC units that keep the cabin at an optimal temperature, ensuring a pleasant and refreshing ride no matter the outside weather."
        },
        {
            title: "4. Ample Luggage Space",
            description: "Our mini buses come with generous luggage compartments to accommodate all your bags and belongings. With ample space for luggage, you don’t have to worry about packing light. Store your items securely while ensuring your comfort during the journey."
        },
        {
            title: "5. Modern Entertainment Systems",
            description: "Make your journey more enjoyable with the modern entertainment features in our mini buses. Each vehicle is equipped with high-quality music systems and LED screens, offering you the option to enjoy your favorite playlist or watch movies. These entertainment systems ensure that your group travels with fun and enjoyment."
        },
        {
            title: "6. Professional and Experienced Drivers",
            description: "At Amruta Travels, we prioritize your safety and comfort. Our professional drivers are not only experienced in navigating Pune's roads but also trained to provide excellent customer service. Relax and enjoy your trip while our skilled drivers ensure a smooth, safe, and stress-free journey."
        },
        {
            title: "7. Well-Maintained Vehicles",
            description: "We maintain the highest standards of cleanliness and safety for our mini buses. Regularly serviced and thoroughly inspected, our well-maintained vehicles offer reliable and comfortable travel for your trips. When you choose Amruta Travels, you’re assured of a safe and clean environment throughout your journey."
        },
        {
            title: "8. Flexible Rental Packages",
            description: "We understand that each trip is unique. That’s why we offer flexible rental packages to cater to your specific needs. Whether you require a mini bus for a few hours or several days, our rental options are designed to accommodate various schedules and budgets. Enjoy the flexibility to choose a rental plan that works best for you."
        },
        {
            title: "9. Competitive and Transparent Pricing",
            description: "Get the best value for your money with our competitive pricing. We offer clear and upfront rates with no hidden charges, allowing you to plan your budget with confidence. Our transparent pricing ensures you receive high-quality service without any surprises."
        },
        {
            title: "10. 24/7 Customer Support",
            description: "Our commitment to customer satisfaction is reflected in our round-the-clock customer support. Whether you need assistance with booking, have inquiries, or require support during your journey, our dedicated team is available at all times to ensure a seamless experience."
        }
    ],    
      
    "services": [
    {
      "name": "Mini Bus on Rent in Pune",
      "description": "Looking for a reliable mini bus on rent in Pune? Amruta Travels offers a wide range of mini bus rental services perfect for family trips, corporate events, and more. Our fleet of well-maintained mini buses ensures comfort, reliability, and affordability for your journey. Book now to enjoy hassle-free travel in Pune and beyond."
    },
    {
      "name": "Mini Bus Hire in Pune",
      "description": "Our mini bus hire service in Pune is ideal for both short and long trips. Whether it's a family gathering, corporate outing, or special event, we provide a variety of well-maintained mini buses to meet your needs. Amruta Travels offers competitive prices and ensures a smooth travel experience across Pune and surrounding areas."
    },
    {
      "name": "Mini bus Hire with Driver for Outstation",
      "description": "Heading out of Pune? Our mini bus hire with driver for outstation services offer a safe and comfortable journey to popular destinations outside Pune. With experienced drivers and well-equipped mini buses, you can enjoy a seamless travel experience, whether you're going to Lonavala, Mahabaleshwar, or any other outstation location."
    },
    {
      "name": "Mini Bus Rentals for Corporate Trips",
      "description": "Elevate your corporate trips with our mini bus rentals for corporate travel in Pune. Designed for business teams, our mini buses come with ample space, comfortable seating, and modern amenities. Whether it's a business meeting, client visit, or team outing, we provide a professional and comfortable travel solution for your corporate needs."
    },
    {
      "name": "Small Bus Rental Service in Pune",
      "description": "Looking for a small bus rental service in Pune? Whether it's a family gathering, a social event, or a small corporate team, our small buses offer the perfect travel solution. Amruta Travels provides personalized service with a focus on comfort and convenience for small groups."
    },
    {
      "name": "Minibus Rental Near Me in Pune",
      "description": "Searching for a minibus rental near you in Pune? Amruta Travels offers easy access to minibus rentals across Pune. Whether you need a minibus for a local trip or an outstation journey, we ensure convenient pickup locations and smooth service throughout."
    },
    {
      "name": "Mini Bus Rent Per Km",
      "description": "Our mini bus rent per km pricing ensures you only pay for the distance you travel. With this flexible and transparent pricing model, you can enjoy cost-effective travel for short trips or long-distance journeys. No hidden charges, just honest pricing to make your travel budget-friendly."
    },
    {
      "name": "Mini Coach Hire in Pune",
      "description": "For a more luxurious and spacious travel option, choose our mini coach hire in Pune. With comfortable seating, premium features, and plenty of space for large groups, our mini coaches are perfect for longer trips, events, and special occasions. Amruta Travels provides an upscale travel experience for those who want extra comfort."
    },
    {
      "name": "Mini Bus for Rent Near Me in Pune",
      "description": "Looking for a mini bus for rent near you in Pune? Amruta Travels makes it easy to find a mini bus near your location. With various pickup points across the city, we ensure that your travel needs are met with ease and convenience."
    },
    {
      "name": "12-Seater Mini Bus on Rent in Pune",
      "description": "Our 12-seater mini bus on rent in Pune is ideal for smaller groups, family outings, or short corporate trips. Enjoy comfortable seating, air-conditioning, and enough space for your luggage. A perfect choice for intimate trips within Pune or nearby destinations."
    },
    {
      "name": "Mini Bus on Rent Near Me for Outstation",
      "description": "Traveling outside Pune? Our mini bus on rent for outstation trips offers comfortable and convenient transportation to popular destinations like Shirdi, Mahabaleshwar, Goa, and more. Book a mini bus near your location for an effortless journey to your desired destination."
    },
    {
      "name": "Mini Bus for Lonavala Picnic from Pune",
      "description": "Planning a Lonavala picnic from Pune? Our mini buses are the ideal choice for a comfortable, spacious, and fun-filled trip. With plenty of room for your group and picnic essentials, our vehicles make traveling to Lonavala a breeze."
    },
    {
      "name": "Mini Bus Hire for Event in Pune",
      "description": "Make your event extra special with our mini bus hire for events in Pune. Whether it's a corporate function, birthday party, or social gathering, we offer reliable and comfortable transportation for all your guests. Amruta Travels ensures that your event transportation runs smoothly and punctually."
    },
    {
      "name": "Pune to Goa Mini Bus",
      "description": "Traveling from Pune to Goa? Our Pune to Goa mini bus rental service ensures a relaxing and comfortable journey with features like spacious seating, air conditioning, and entertainment options. Enjoy the scenic route with Amruta Travels and arrive in Goa feeling refreshed."
    },
    {
      "name": "Mini Bus Hire in Pimpri Chinchwad",
      "description": "If you're in Pimpri Chinchwad and looking for a mini bus hire service, Amruta Travels offers convenient and affordable options. Our well-maintained mini buses cater to local trips and outstation journeys with expert drivers ensuring safety and comfort."
    },
    {
      "name": "Mini Bus Hire in Kharadi Pune",
      "description": "Located in Kharadi? Our mini bus hire service in Kharadi Pune provides an excellent solution for both local travel and outstation trips. Whether it's a family outing, corporate event, or group outing, we provide reliable transportation with modern amenities."
    },
    {
      "name": "Minibus Hire for Wedding Party in Pune",
      "description": "Make your wedding day memorable with our minibus hire for wedding parties in Pune. Our luxurious mini buses are equipped with plush seating and ample space for your wedding attire and accessories, ensuring a comfortable and stylish ride for you and your guests."
    },
    {
      "name": "Mini Bus on Rent in Hinjewadi",
      "description": "For those in Hinjewadi, Amruta Travels offers mini bus rentals perfect for business or leisure travel. Our vehicles are equipped to meet various requirements, from corporate events to family outings, with professional drivers ensuring a smooth experience."
    },
    {
      "name": "Mini Bus on Rent in Baner",
      "description": "Looking for a mini bus on rent in Baner? Amruta Travels provides reliable and affordable rental options. Whether it's a short trip within Baner or a long journey, our well-maintained mini buses offer comfort and convenience for all types of travel."
    },
    {
      "name": "Mini Bus on Rent in Pune Near Me",
      "description": "Searching for a mini bus on rent in Pune near you? With multiple pickup points across Pune, Amruta Travels offers easy access to reliable mini bus rentals. Whether it's a local trip or an outstation journey, we have the perfect vehicle for your needs."
    },
    {
      "name": "Luxury Mini Bus on Rent in Pune Near Me",
      "description": "Looking for a luxury mini bus on rent in Pune? Amruta Travels offers luxurious travel with premium mini buses equipped with high-end features. Perfect for special events, corporate travel, or groups who prefer a superior level of comfort."
    },
    {
      "name": "Mini Bus on Rent in Pune for Family",
      "description": "Planning a family trip? Our family-friendly mini buses in Pune are designed for maximum comfort and convenience. With spacious interiors, comfortable seating, and ample luggage space, Amruta Travels makes your family outing stress-free and enjoyable."
    },
    {
      "name": "13, 15, 17, 20, 24, 27 Seater Mini Bus on Rent in Pune",
      "description": "Need a 13-seater mini bus or a 27-seater mini bus? Amruta Travels offers a wide selection of mini buses on rent in Pune to suit groups of all sizes. Whether it’s a small family gathering or a large group trip, our mini buses provide the ideal solution for your travel needs."
    },
    {
      "name": "Mini Bus on Rent in Pune Contact Number",
      "description": "For prompt and reliable mini bus rental services in Pune, contact Amruta Travels at +91 8421333435, +91 7875774499, or +91 7620411277. We ensure a smooth and enjoyable ride for all our customers with 24/7 customer support and flexible booking options."
    }
  ],
    
      "tableData": [
    ["-Mini bus on rent", "-Mini bus hire in Pune"],
    ["-Minibus hire with driver for outstation", "-Mini bus rentals for Corporate Trip"],
    ["-Small bus rental service in Pune", "-Minibus rental near me in Pune"],
    ["-Mini Bus Rent Per Km", "-Mini coach hire in Pune"],
    ["-Mini bus for rent near me in Pune", "-12-seater mini bus on rent in Pune"],
    ["-Mini bus on rent near me for Outstation", "-Mini bus for Lonavala Picnic from Pune"],
    ["-Mini bus Hire for event in Pune", "-Pune to Goa mini bus"],
    ["-Mini bus hire in Pimpri Chinchwad", "-Mini bus hire in Kharadi Pune"],
    ["-Minibus Hire for Wedding party in Pune", "-Mini Bus On Rent in Hinjewadi"],
    ["-Mini bus on rent in Baner", "-Mini bus on rent in Pune near me"],
    ["-Luxury mini bus on rent in Pune near me", "-Mini bus on rent in Pune for family"],
    ["-13, 15, 17, 20, 24, 27 Seater Mini Bus on Rent in Pune", ""]
  ],


     whychoose: [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Mini Bus on Rent in Pune?",
      "WhyChoosedescription": "Looking for a reliable mini bus on rent in Pune? Amruta Travels is your ultimate choice for comfortable, affordable, and flexible mini bus rentals. Whether you're planning a family trip, a corporate event, or a special occasion, our mini buses provide the perfect solution for groups of all sizes. Here’s why Amruta Travels is the top choice for your travel needs."
    },
    {
      "WhyChooseheading": "Diverse Fleet of Mini Buses:",
      "WhyChoosedescription": "At Amruta Travels, we offer a wide selection of mini buses for rent in Pune to suit every need. Whether you're looking for a 12-seater for small family outings or a 27-seater for a large group event, we have a bus that fits your requirements. Our well-maintained fleet ensures comfort, reliability, and safety throughout your journey."
    },
    {
      "WhyChooseheading": "Exceptional Comfort and Luxury:",
      "WhyChoosedescription": "Experience unmatched comfort with our mini buses, designed with your travel comfort in mind. Enjoy plush seating, ample legroom, advanced air conditioning, and modern entertainment systems. For those seeking a luxury experience, we offer premium luxury mini buses equipped with high-end features for special occasions or corporate trips."
    },
    {
      "WhyChooseheading": "Flexible Rental Options:",
      "WhyChoosedescription": "Every journey is unique, and we understand the importance of flexibility. At Amruta Travels, we offer customized mini bus rental options to meet your specific needs, whether it's for hourly, daily, or long-term rentals. From short city trips to extended outstation tours, our flexible rental plans cater to every type of travel itinerary."
    },
    {
      "WhyChooseheading": "Professional and Experienced Drivers:",
      "WhyChoosedescription": "Your safety is our top priority. Our professional drivers are highly trained, experienced, and well-acquainted with Pune’s routes and popular outstation destinations. They ensure a smooth and secure ride while providing excellent customer service, allowing you to relax and enjoy your trip."
    },
    {
      "WhyChooseheading": "Competitive and Transparent Pricing:",
      "WhyChoosedescription": "At Amruta Travels, we believe in competitive and transparent pricing for all our mini bus rentals. There are no hidden charges—only clear, upfront rates, so you can plan your travel budget with confidence. Our pricing structure ensures that you get the best value for your money without compromising on comfort or quality."
    },
    {
      "WhyChooseheading": "Convenient Booking Process:",
      "WhyChoosedescription": "Booking your mini bus rental with Amruta Travels is quick and easy. Our user-friendly online booking system makes it simple to reserve your vehicle, and our dedicated customer support team is available to assist you with any questions or modifications. We ensure a hassle-free booking experience from start to finish."
    },
    {
      "WhyChooseheading": "Well-Maintained and Clean Vehicles:",
      "WhyChoosedescription": "We take pride in maintaining our mini buses in top condition. Each vehicle is regularly serviced and thoroughly cleaned to meet high standards of hygiene and safety. When you choose Amruta Travels, you can trust that you’ll be traveling in a clean, well-maintained, and safe vehicle."
    },
    {
      "WhyChooseheading": "24/7 Customer Support:",
      "WhyChoosedescription": "Our commitment to your satisfaction doesn’t end with booking. We offer 24/7 customer support to assist with any queries, booking modifications, or travel-related concerns. Whether you need help before your trip or during your journey, our dedicated team is always available to ensure a smooth travel experience."
    },
    {
      "WhyChooseheading": "Tailored Solutions for Special Occasions:",
      "WhyChoosedescription": "Whether it's a corporate event, a wedding, or a family gathering, we offer customized mini bus rental solutions to suit the specific requirements of your special occasion. Our mini buses are designed to provide comfort and style, making your event even more memorable."
    },
    {
      "WhyChooseheading": "Trusted by Many:",
      "WhyChoosedescription": "With a reputation for reliability and quality service, Amruta Travels is the trusted choice for mini bus rentals in Pune. Our growing list of satisfied customers and their positive reviews are a testament to our commitment to providing excellent travel experiences for every passenger."
    }
]

    };

    
    
    const faqData = [
        {
          "question": "How do I book a mini bus with Amruta Travels?",
          "answer": "You can book a mini bus by contacting us directly via phone or email, or by using our easy-to-navigate online booking system. Our customer support team will assist you throughout the booking process."
        },
        {
          "question": "What types of mini buses are available for rent?",
          "answer": "We offer a range of mini buses, including 12-seaters, 15-seaters, 17-seaters, 20-seaters, 24-seaters, and 27-seaters. We also provide luxury options with advanced features for a premium experience."
        },
        {
          "question": "Are the mini buses equipped with air conditioning?",
          "answer": "Yes, all our mini buses come equipped with advanced air conditioning systems to ensure a comfortable environment, regardless of the weather outside."
        },
        {
          "question": "Can I hire a mini bus for an outstation trip?",
          "answer": "Absolutely. We offer mini bus rentals for outstation trips, including popular destinations like Goa, Lonavala, and Mahabaleshwar. Our drivers are well-versed with routes to ensure a smooth journey."
        },
        {
          "question": "How much does it cost to rent a mini bus?",
          "answer": "The cost of renting a mini bus varies depending on the type of vehicle, rental duration, and distance traveled. We provide transparent pricing with no hidden charges. Contact us for a detailed quote based on your specific requirements."
        },
        {
          "question": "What is included in the rental price?",
          "answer": "Our rental price typically includes the use of the mini bus, driver services, and basic amenities. Additional costs may apply for extra services such as extended mileage or special requests. We’ll provide a clear breakdown of costs when you book."
        },
        {
          "question": "Are there any additional charges I should be aware of?",
          "answer": "We strive to maintain transparent pricing. Any additional charges, such as for extra stops or extended travel beyond the agreed mileage, will be communicated to you upfront."
        },
        {
          "question": "Can I choose the driver for my trip?",
          "answer": "We assign experienced and professional drivers to ensure the highest quality service. While you can request specific preferences or requirements, we ensure that all our drivers meet our stringent standards of professionalism and safety."
        },
        {
          "question": "What should I do if I need to cancel or modify my booking?",
          "answer": "If you need to cancel or modify your booking, please contact our customer support team as soon as possible. We will assist you with the changes and inform you of any applicable cancellation or modification policies."
        },
        {
          "question": "How can I contact Amruta Travels for support during my journey?",
          "answer": "You can reach our 24/7 customer support team by calling us or sending an email. We are here to assist you with any queries or issues that may arise during your journey to ensure a smooth and enjoyable experience."
        }
      ];
      

      const testimonials = [
        {
          "name": "Mr. Rajiv Kumar",
          "text": "We recently hired a mini bus from Amruta Travels for a family reunion trip in Pune, and the experience was fantastic. The booking process was smooth, and the vehicle was delivered on time, clean, and well-maintained. The spacious interior and comfortable seating made our journey very enjoyable. The driver was courteous and professional, ensuring a safe and pleasant ride. We highly recommend Amruta Travels for anyone in need of reliable and comfortable mini bus rental services in Pune."
        },
        {
          "name": "Ms. Anjali Mehta",
          "text": "Our corporate team required a mini bus for an off-site meeting, and Amruta Travels exceeded our expectations. The mini bus was perfect for our group, offering ample space and modern amenities. The driver was punctual and well-informed about the best routes, which made our trip seamless. The service was top-notch from start to finish, with competitive pricing and excellent customer support. We’ll definitely choose Amruta Travels for our future group transportation needs in Pune."
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
        heading: " Mini Bus On Rent in Pune Contact Number: ",
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



          const jsonLdSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Amruta Travels",
            "url": "https://amrutatravel.com",
            "logo": "https://amrutatravel.com/img/logo.png",
            "image": "https://amrutatravel.com/img/OG-Image/OG-Image-01.jpg",
            "description": "Book a Mini Bus on Rent in Pune for Corporate, Wedding, Family & Outstation Trips. Affordable rates for 12 to 27 Seater Luxury Mini Coaches. Book Now!",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Pune",
              "addressRegion": "MH",
              "postalCode": "411001",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8321333435",
              "contactType": "customer service"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "3654"
            },
            "service": {
              "@type": "Service",
              "serviceType": "Mini Bus Rental",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "18.5204",
                  "longitude": "73.8567"
                },
                "geoRadius": "50"
              }
            }
          };
          
          
          
     
    return(
        <div>
          <GoogleAnalytics/>
          <Helmet>
          <Helmet>
      <title>Mini Bus on Rent in Pune </title>
      <meta
        name="description"
        content="Looking for Mini Bus on Rent in Pune? Book from a range of 12 to 27 Seater Luxury Mini Coaches at affordable prices. Available for Corporate Trips, Weddings, Family Tours, and Outstation Travel. Book Now!"
      />
      <meta
        name="keywords"
        content="Mini Bus on Rent in Pune, Mini Bus Rental Pune, Luxury Mini Coach Hire Pune, Affordable Mini Bus Rent, 12 Seater Mini Bus, 27 Seater Mini Coach, Pune to Goa Mini Bus, Family Bus Rental Pune"
      />

      <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>

      <meta property="og:title" content="Mini Bus on Rent in Pune | Amruta Travels" />
      <meta
        property="og:description"
        content="Rent Mini Buses in Pune for Corporate, Family, Wedding, or Outstation Trips. Affordable rates for 12 to 27 Seater Luxury Mini Coaches. Book Today!"
      />
      <meta property="og:image" content="https://amrutatravel.com/img/OG-Image/OG-Image-01.jpg" />
      <meta property="og:url" content="https://amrutatravel.com/Mini-Bus-on-Rent-in-Pune" />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content="Mini Bus on Rent in Pune | Amruta Travels" />
      <meta
        name="twitter:description"
        content="Affordable Mini Bus Rental in Pune for Corporate, Wedding, Family & Outstation Trips. Book 12 to 27 Seater Luxury Mini Coaches. Available now!"
      />
      <meta name="twitter:image" content="https://amrutatravel.com/images/mini-bus-on-rent-pune.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>


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
    <img src='\img\Keyword Based Image\Keyword Based Image-04.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Mini Bus On Rent in Pune with Amruta Travels:</h3>
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
export default MiniBus;