
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Kharadibus(){

  const cardData = 
    {
      keyword: 'Bus Rentals in Kharadi',
      heading: ' Amruta Travels: Bus Rentals in Kharadi',

      headingDescription: 'Are you in Kharadi, Pune, and looking for a reliable and comfortable bus rental service? Amruta Travels is your go-to solution for all types of bus rentals, offering a diverse range of vehicles tailored to meet various needs. Whether you’re planning a corporate event, a family outing, or a local sightseeing tour, we have the perfect bus for you. Discover our top bus rental options in Kharadi, Pune:',

      top:"Top  Places to Visit in Mahabaleshwar with Amruta Travel:",

      topPlaces : [
        {
            title: '32-Seater Luxury Bus',
            description: 'For medium-sized groups that desire both comfort and elegance, our 32-seater luxury bus is an excellent choice. Equipped with plush seating, air conditioning, and entertainment systems, it’s ideal for corporate meetings, weddings, and special events. Keywords: 32-seater bus on rent Kharadi, luxury bus rental Kharadi'
        },
        {
            title: '35-Seater Mini Bus',
            description: 'The 35-seater mini bus from Amruta Travels is perfect for slightly larger groups who need ample space. This bus is great for school trips, community events, or family gatherings, offering a comfortable and smooth travel experience.'
        },
        {
            title: '40-Seater Standard Bus',
            description: 'If you’re organizing a tour or event for a bigger group, our 40-seater standard bus provides ample space without compromising on comfort. It’s ideal for group excursions, city tours, or any occasion requiring a moderate seating capacity.'
        },
        {
            title: '45-Seater Executive Bus',
            description: 'For those seeking a premium travel experience, our 45-seater executive bus offers luxury and convenience. With ergonomic seating, onboard refreshments, and modern amenities, this bus is perfect for business trips, team outings, and executive travel.'
        },
        {
            title: '50-Seater Deluxe Bus',
            description: 'Our 50-seater deluxe bus is designed for large groups who need extensive seating and top-notch comfort. Whether it’s a corporate event, a family reunion, or a community function, this bus ensures a pleasant journey with spacious interiors and modern features.'
        },
        {
            title: 'Kharadi Local Sightseeing Bus',
            description: 'Explore Kharadi and nearby areas with our local sightseeing bus. Tailored for city tours, this bus covers major attractions and landmarks, making it an ideal choice for tourists and locals wanting to discover the region comfortably.'
        },
        {
            title: 'Kharadi Darshan Mini Bus',
            description: 'Experience a comprehensive tour of Kharadi with our Darshan mini bus. This service is perfect for tourists and local residents interested in exploring the city’s key attractions in a comfortable and organized manner.'
        },
        {
            title: 'Local Bus for Corporate Events',
            description: 'For business functions and corporate events, our local buses are equipped to meet professional needs. Featuring comfortable seating and ample space for equipment, these buses ensure that your business travel is smooth and efficient.'
        },
        {
            title: 'Local Bus for School Trips',
            description: 'Safety and comfort are crucial for school trips. Our buses are specifically designed to cater to school outings, with features that ensure a secure and enjoyable journey for students and teachers alike.'
        },
        {
            title: 'Local Bus for Family Gatherings',
            description: 'Whether it’s a family reunion, wedding, or any other social gathering, our local buses provide the comfort and convenience needed for a memorable event. Enjoy spacious interiors and a hassle-free journey with our family-friendly bus rentals.'
        }
    ],
        
    services : [
        {
            name: 'Urbania Bus on Rent in Kharadi',
            description: 'Looking for a modern, comfortable bus for your local travel needs in Kharadi? The Urbania bus on rent in Kharadi offers spacious seating and contemporary amenities. Perfect for corporate outings, family gatherings, or local tours, the Urbania ensures a smooth and enjoyable ride.'
        },
        {
            name: '17 Seater Bus on Rent Per Km in Kharadi',
            description: 'For smaller groups needing flexibility, the 17-seater bus on rent per km in Kharadi provides an ideal solution. With competitive pricing based on distance traveled, it’s a cost-effective choice for short trips, local events, and day outings in and around Kharadi.'
        },
        {
            name: 'Tempo Traveller on Rent in Kharadi',
            description: 'The Tempo Traveller on rent in Kharadi is perfect for medium-sized groups seeking comfort and efficiency. Whether you\'re heading out for a business trip or a leisure tour, the Tempo Traveller offers ample space and convenience for all passengers.'
        },
        {
            name: 'Bus on Rent in Wagholi Pune for Outstation',
            description: 'Planning a trip outside of Pune? The bus on rent in Wagholi Pune for outstation travel ensures that your journey is comfortable and hassle-free. Ideal for group travel to destinations beyond Pune, these buses come equipped with everything you need for a pleasant trip.'
        },
        {
            name: 'Bus Hire in Wagholi for Picnic',
            description: 'A day out with family or friends is always more enjoyable with the right transportation. The bus hire in Wagholi for picnic trips provides comfort and convenience, making your outdoor excursions and recreational activities stress-free and enjoyable.'
        },
        {
            name: 'Wedding Bus on Rental in Wagholi',
            description: 'Make your special day even more memorable with a wedding bus on rental in Wagholi. These buses offer elegant and comfortable transport for your wedding guests, ensuring they arrive at the venue in style and with ease.'
        },
        {
            name: 'Bus On Rent For Wedding in Wagholi',
            description: 'Looking for a more tailored solution for your wedding transport needs? The bus on rent for wedding in Wagholi can accommodate large groups and is equipped to handle the specifics of wedding transportation, providing comfort and elegance on your big day.'
        },
        {
            name: 'Urbania Bus on Rent in Wagholi',
            description: 'For a modern and stylish transport solution, consider the Urbania bus on rent in Wagholi. With its sleek design and high-end features, it’s perfect for both corporate events and social gatherings in Wagholi.'
        },
        {
            name: 'Force Urbania on Rent in Kharadi',
            description: 'The Force Urbania on rent in Kharadi offers a robust and comfortable option for various transportation needs. Whether it’s for a corporate event, a family outing, or a local tour, the Force Urbania delivers reliability and comfort.'
        },
        {
            name: 'Bus Hire in Kharadi IT Park',
            description: 'For businesses in Kharadi IT Park, bus hire services are tailored to corporate requirements. Providing reliable transportation for team outings, client meetings, and other corporate events, these buses ensure a smooth and professional travel experience.'
        },
        {
            name: '14, 17, 20, 25 Seater Bus on Rent in Kharadi',
            description: 'When you need a bus with specific seating capacity, the 14, 17, 20, and 25 seater bus on rent in Kharadi offers the flexibility to choose the right size for your group. Perfect for various events, including office trips, family gatherings, and local excursions.'
        },
        {
            name: '32, 35, 40, 45, 50 Seater Bus on Rent in Kharadi',
            description: 'For larger groups, the 32, 35, 40, 45, and 50 seater buses on rent in Kharadi provide ample space and comfort. Ideal for school trips, corporate functions, and community events, these buses ensure everyone travels together comfortably.'
        },
        {
            name: 'Bus Hire in Kharadi for Corporate Outing',
            description: 'The bus hire in Kharadi for corporate outings offers professional and reliable transportation for your team. With comfortable seating and essential amenities, these buses are perfect for team-building activities, conferences, and business travel.'
        },
        {
            name: 'Bus Hire in Kharadi for Corporate Employees',
            description: 'Amruta Travels offers reliable bus hire in Kharadi for corporate employees. Our fleet includes a variety of buses suitable for corporate travel, ensuring that your employees travel comfortably to and from work, events, or seminars. With professional drivers and well-maintained buses, we provide a seamless and efficient transportation solution tailored to your corporate needs.'
        },
        {
            name: 'Luxury Bus Hire in Kharadi for Corporate Employees',
            description: 'For a premium travel experience, consider our luxury bus hire in Kharadi for corporate employees. Amruta Travels provides high-end buses equipped with modern amenities such as comfortable seating, Wi-Fi, and entertainment systems. Perfect for executive travel, client shuttles, and special corporate events, our luxury buses ensure a sophisticated and enjoyable journey for your team.'
        },
        {
            name: 'Tempo Traveller on Rent in Kharadi Wagholi',
            description: 'Need a tempo traveller on rent in Kharadi Wagholi? Amruta Travels offers well-maintained tempo travellers that are perfect for small group travel. Whether you’re planning a family outing, a corporate event, or a local trip, our tempo travellers provide a comfortable and reliable transportation solution with ample space and modern amenities.'
        },
        {
            name: 'Tempo Traveller Hire in Viman Nagar',
            description: 'Amruta Travels provides tempo traveller hire in Viman Nagar, ideal for group outings and local travel. Our tempo travellers are well-equipped to handle various group sizes and travel needs, ensuring a comfortable and hassle-free journey. Whether it\'s for a corporate event or a family trip, our service guarantees convenience and reliability.'
        },
        {
            name: 'Tempo Traveller Hire in Wadgaon Sheri',
            description: 'For those in Wadgaon Sheri, Amruta Travels offers tempo traveller hire services that cater to both small and large groups. Our tempo travellers are designed for comfort and convenience, making them an excellent choice for local excursions, business trips, and more. Enjoy a smooth and enjoyable ride with our professional drivers and well-maintained vehicles.'
        },
        {
            name: 'Tempo Traveller Hire in Chandan Nagar',
            description: 'If you\'re looking for tempo traveller hire in Chandan Nagar, Amruta Travels has you covered. We offer a range of tempo travellers that are perfect for various group sizes and travel purposes. From local trips to corporate events, our tempo travellers are equipped to provide a comfortable and reliable travel experience.'
        },
        {
            name: 'Mini Bus On Rent in Pune Contact Number',
            description: 'Contact Amruta Travels at +91 8421333435 for prompt and efficient Mini Bus On Rent in Pune. We ensure a smooth and enjoyable ride for all our customers.'
        }
    ],   

    tableData : [
        ["- Urbania Bus on Rent in Kharadi", "- 17 Seater Bus on Rent Per Km in Kharadi"],
        ["- Tempo Traveller on Rent in Kharadi", "- Bus on Rent in Wagholi Pune for Outstation"],
        ["- Bus Hire in Wagholi for Picnic", "- Wedding Bus on Rental in Wagholi"],
        ["- Bus On Rent For Wedding in Wagholi", "- Urbania Bus on Rent in Wagholi"],
        ["- Force Urbania on Rent in Kharadi", "- Bus Hire in Kharadi IT Park"],
        ["- 14, 17, 20, 25 Seater Bus on Rent in Kharadi", "- 32, 35, 40, 45, 50 Seater Bus on Rent in Kharadi"],
        ["- Bus Hire in Kharadi for Corporate Outing", "- Force Urbania on Rent in Kharadi"],
        ["- Bus Hire in Kharadi for Corporate Employees", "- Luxury Bus Hire in Kharadi for Corporate Employees"],
        ["- Tempo Traveller on Rent in Kharadi Wagholi", "- Tempo Traveller Hire in Viman Nagar"],
        ["- Tempo Traveller Hire in Wadgaon Sheri", "- Tempo Traveller Hire in Chandan Nagar"]
    ]
,
    
    
whychoose : [
    {
        "WhyChooseheading": "Diverse Fleet",
        "WhyChoosedescription": "We offer a wide range of buses to suit various needs, from compact 14-seater options to spacious 50-seater buses. Whether you’re organizing a corporate event, a family outing, or a local tour, we have the right vehicle for you."
    },
    {
        "WhyChooseheading": "Comfort and Luxury",
        "WhyChoosedescription": "Our buses are equipped with modern amenities to ensure a comfortable and enjoyable journey. Features include air conditioning, plush seating, and entertainment systems, making every trip pleasant and relaxing."
    },
    {
        "WhyChooseheading": "Professional Drivers",
        "WhyChoosedescription": "Our experienced drivers are not only skilled but also courteous and knowledgeable about the local area. They ensure a safe and smooth travel experience, adhering to all safety regulations and punctuality."
    },
    {
        "WhyChooseheading": "Affordable Rates",
        "WhyChoosedescription": "We provide competitive and transparent pricing with no hidden fees. Our rental rates are designed to fit various budgets while offering excellent value for money."
    },
    {
        "WhyChooseheading": "Flexible Booking Options",
        "WhyChoosedescription": "We offer flexible booking solutions to accommodate your schedule and itinerary. Whether you need a bus for a few hours or several days, we can tailor our services to meet your requirements."
    },
    {
        "WhyChooseheading": "Reliable Service",
        "WhyChoosedescription": "At Amruta Travels, we pride ourselves on reliability and customer satisfaction. Our booking process is straightforward, and our team is always available to assist with any inquiries or special requests."
    },
    {
        "WhyChooseheading": "Hassle-Free Experience",
        "WhyChoosedescription": "From booking to the end of your journey, we ensure a seamless experience. Our well-maintained buses and efficient service mean you can focus on enjoying your trip without worrying about the details."
    }
]
  };

    
  const faqData = [
    {
        "question": "What types of buses are available for rent in Kharadi, Pune?",
        "answer": "At Amruta Travels, we offer a variety of buses, including 14-seater, 17-seater, 20-seater, 25-seater, 32-seater, 35-seater, 40-seater, 45-seater, and 50-seater options. Each bus is equipped with modern amenities to suit different needs."
    },
    {
        "question": "How can I book a bus with Amruta Travels?",
        "answer": "You can book a bus by contacting us directly via phone or through our online booking platform. Provide us with details such as the type of bus, rental duration, and any special requirements you may have."
    },
    {
        "question": "Are the buses equipped with air conditioning?",
        "answer": "Yes, all our buses are equipped with air conditioning to ensure a comfortable journey, regardless of the weather conditions."
    },
    {
        "question": "What is the pricing structure for renting a bus in Kharadi?",
        "answer": "Our pricing is competitive and based on factors such as the type of bus, rental duration, and distance traveled. We offer transparent rates with no hidden fees. For a detailed quote, please contact us directly."
    },
    {
        "question": "Are drivers provided with the rental?",
        "answer": "Yes, all our bus rentals come with professional drivers who are experienced, courteous, and knowledgeable about local routes. They ensure a safe and smooth travel experience."
    },
    {
        "question": "Can I make changes to my booking after it is confirmed?",
        "answer": "Yes, you can make changes to your booking based on availability and our policy. Please contact us as soon as possible to discuss any modifications to your reservation."
    },
    {
        "question": "Is there a minimum rental duration for the buses?",
        "answer": "Our minimum rental duration may vary depending on the type of bus and the specifics of your trip. Contact us for detailed information regarding rental durations."
    },
    {
        "question": "Do you offer buses for outstation travel?",
        "answer": "Yes, we offer buses for both local and outstation travel. Whether you’re planning a day trip or a longer journey, we can accommodate your travel needs."
    },
    {
        "question": "Are there any additional charges for long-distance travel?",
        "answer": "Additional charges may apply for long-distance travel, depending on the distance and duration of the trip. Our team will provide a detailed quote that includes all applicable fees."
    },
    {
        "question": "What should I do if I have special requirements or requests?",
        "answer": "If you have any special requirements or requests, please inform us at the time of booking. We will do our best to accommodate your needs and ensure a satisfactory experience."
    }
];

    
    
const testimonials = [
    {
        "name": "Mr. Ravi Patel",
        "text": "I recently organized a corporate event in Kharadi, Pune, and chose Amruta Travels for our transportation needs. The service was impeccable from start to finish. We rented a 40-seater bus for the day, and it was spotlessly clean, comfortable, and well-maintained. The driver was punctual, professional, and had excellent knowledge of the area, ensuring a smooth and stress-free journey for our team. The booking process was straightforward, and the team at Amruta Travels was incredibly responsive to all our queries. I highly recommend them for anyone needing reliable bus rental services in Kharadi!"
    },
    {
        "name": "Miss Neha Sharma",
        "text": "Our family reunion in Kharadi was made even more memorable thanks to Amruta Travels. We rented a 35-seater bus for a day trip around Pune, and the entire experience was fantastic. The bus was spacious, comfortable, and equipped with all the amenities we needed. The driver was courteous and ensured that we reached all our destinations on time. The team at Amruta Travels went above and beyond to accommodate our schedule and special requests. If you’re looking for top-notch bus rental services in Kharadi, look no further than Amruta Travels!"
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
        heading: "  Bus On Rent in Kharadi Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus on Rent in Kharadi Pune | Urbania, Tempo Traveller, 14 to 50 Seater Buses for Corporate, Weddings, Outstation</title>
  <meta name="description" content="Rent Urbania buses, Tempo Travellers, and 14 to 50 Seater buses in Kharadi for corporate outings, weddings, picnics, and outstation trips. Affordable and reliable bus rental service in Kharadi and surrounding areas like Wagholi, Viman Nagar, and Wadgaon Sheri." />
  <meta name="keywords" content="Urbania bus on rent in Kharadi, 17 Seater bus on rent per km in Kharadi, Tempo Traveller on rent in Kharadi, Bus on Rent in Wagholi Pune for Outstation, Bus Hire in Wagholi for Picnic, Wedding bus on rental in Wagholi, Bus on Rent for Wedding in Wagholi, Urbania bus on rent in Wagholi, Force Urbania on rent in Kharadi, Bus Hire in Kharadi IT Park, 14 Seater Bus Rent in Kharadi, 17 Seater Bus on Rent Kharadi, 20 Seater Bus on Rent Kharadi, 25 Seater Bus on Rent Kharadi, 32 Seater Bus on Rent in Kharadi, 35 Seater Bus Hire in Kharadi, 40 Seater Bus on Rent Kharadi, 45 Seater Bus on Rent Kharadi, 50 Seater Bus on Rent Kharadi, Bus Hire in Kharadi for Corporate Outing, Luxury Bus Hire in Kharadi for Corporate Employees, Tempo Traveller Hire in Kharadi, Bus Hire for Corporate Employees in Kharadi, Tempo Traveller Hire in Viman Nagar, Tempo Traveller Hire in Wadgaon Sheri, Tempo Traveller Hire in Chandan Nagar" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent Urbania buses, Tempo Travellers, and 14 to 50 Seater buses in Kharadi for corporate outings, weddings, picnics, and outstation trips. Affordable and reliable bus rental service in Kharadi and surrounding areas like Wagholi, Viman Nagar, and Wadgaon Sheri.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-on-rent-in-kharadi-pune",
        "logo": "https://amrutatravel.com/images/bus-on-rent-in-kharadi.jpg",
        "image": "https://amrutatravel.com/images/bus-on-rent-in-kharadi.jpg",
        "priceRange": "₹4000 - ₹15000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-on-rent-in-kharadi-pune",
          "priceCurrency": "INR",
          "price": "4000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "800"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit Pawar"
            },
            "datePublished": "2024-06-10",
            "reviewBody": "Booked a 35-seater bus for a corporate outing in Kharadi. The bus was comfortable, and the service was excellent. Highly recommended for group travels!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sushma Jadhav"
            },
            "datePublished": "2024-05-18",
            "reviewBody": "We hired a Tempo Traveller for our wedding guests in Kharadi. The driver was punctual, and the ride was smooth. Great service overall!"
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
          "serviceUrl": "https://amrutatravel.com/bus-on-rent-in-kharadi-pune"
        },
        "keywords": "Urbania bus on rent in Kharadi, 17 Seater bus on rent per km in Kharadi, Tempo Traveller on rent in Kharadi, Bus on Rent in Wagholi Pune for Outstation, Bus Hire in Wagholi for Picnic, Wedding bus on rental in Wagholi, Bus on Rent for Wedding in Wagholi, Urbania bus on rent in Wagholi, Force Urbania on rent in Kharadi, Bus Hire in Kharadi IT Park, 14 Seater Bus Rent in Kharadi, 17 Seater Bus on Rent Kharadi, 20 Seater Bus on Rent Kharadi, 25 Seater Bus on Rent Kharadi, 32 Seater Bus on Rent in Kharadi, 35 Seater Bus Hire in Kharadi, 40 Seater Bus on Rent Kharadi, 45 Seater Bus on Rent Kharadi, 50 Seater Bus on Rent Kharadi, Bus Hire in Kharadi for Corporate Outing, Luxury Bus Hire in Kharadi for Corporate Employees, Tempo Traveller Hire in Kharadi, Bus Hire for Corporate Employees in Kharadi, Tempo Traveller Hire in Viman Nagar, Tempo Traveller Hire in Wadgaon Sheri, Tempo Traveller Hire in Chandan Nagar"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-64.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs: Bus on Rent in Kharadi, Pune - Amruta Travels:</h3>
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
export default Kharadibus;