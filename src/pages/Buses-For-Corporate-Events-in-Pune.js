
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusForCorporateEvents(){

  const cardData = 
    {
      keyword: 'Buses for Corporate Events in Pune',
      heading: ' Amruta Travels: Buses for Corporate Events in Pune',

      headingDescription: 'When it comes to organizing corporate events, seamless transportation is crucial for ensuring a smooth and professional experience. At Amruta Travels, we offer a range of high-quality buses designed to meet the needs of corporate gatherings in Pune. Whether it’s a conference, team-building event, or corporate outing, our fleet is equipped to handle various requirements with efficiency and style. Here’s a look at the top Amruta Travels buses for corporate events in Pune:',

      top:"Top Buses For Corporate Events in Pune",

       topPlaces : [
        {
            "title": "Executive Coach Bus",
            "description": "Our Executive Coach Bus is perfect for corporate events requiring a touch of luxury and comfort. Featuring plush seating, ample legroom, and high-end amenities, this bus is designed to provide a first-class experience for your executives and clients."
        },
        {
            "title": "32-Seater Luxury Bus",
            "description": "Ideal for medium-sized groups, the 32-Seater Luxury Bus offers a blend of comfort and functionality. With comfortable seating, air-conditioning, and modern entertainment options, it’s a great choice for corporate events where a higher level of comfort is desired."
        },
        {
            "title": "35-Seater Executive Bus",
            "description": "The 35-Seater Executive Bus combines style and practicality. Equipped with premium seating and advanced features, it’s suitable for corporate groups that require a comfortable and sophisticated travel experience."
        },
        {
            "title": "45-Seater Coach Bus",
            "description": "Our 45-Seater Coach Bus is designed for larger groups. It offers spacious seating, ample luggage space, and modern amenities, making it an excellent option for corporate events that involve transporting a sizable team or multiple departments."
        },
        {
            "title": "50-Seater Luxury Bus",
            "description": "For very large corporate gatherings, the 50-Seater Luxury Bus provides a spacious and comfortable solution. With high-end features, including reclining seats and in-bus refreshments, it ensures that your team travels in style and comfort."
        },
        {
            "title": "VIP Shuttle Bus",
            "description": "The VIP Shuttle Bus is perfect for high-profile clients or executives. This bus offers top-tier comfort and privacy, making it suitable for transporting key personnel to and from corporate events with a touch of exclusivity."
        },
        {
            "title": "Mini Bus (14-Seater)",
            "description": "Our 14-Seater Mini Bus is ideal for smaller corporate groups or for use as a shuttle between locations. It provides a cozy and efficient transport solution for team outings or smaller executive meetings."
        },
        {
            "title": "Tempo Traveller (10-Seater)",
            "description": "The 10-Seater Tempo Traveller offers a compact yet comfortable option for smaller corporate groups. With its easy maneuverability and comfortable seating, it’s perfect for short trips or small team events."
        },
        {
            "title": "Corporate Outing Bus",
            "description": "Designed specifically for corporate outings, this bus is equipped with amenities that enhance the travel experience. Features include entertainment systems and adjustable seating, making it ideal for team-building events or off-site meetings."
        },
        {
            "title": "Conference Bus",
            "description": "Our Conference Bus is tailored for on-the-go meetings. It features a dedicated space for presentations and discussions, along with Wi-Fi and multimedia capabilities, allowing your team to stay productive during transit."
        }
    ],    
     services : [
        {
            "name": "Corporate Bus Hire for Outstation",
            "description": "Amruta Travels offers top-notch corporate bus hire services for outstation trips from Pune. Our fleet includes a range of buses suited for business travel to destinations beyond the city, ensuring a comfortable and efficient journey for your team."
        },
        {
            "name": "Corporate Bus Hire Service in Pune",
            "description": "Looking for reliable Bus Rental for Corporate Events in Pune? Amruta Travels provides an extensive selection of buses tailored to meet the needs of businesses, from executive shuttles to large luxury coaches."
        },
        {
            "name": "Hire a Bus for Corporate Sector",
            "description": "Amruta Travels specializes in hiring buses for the corporate sector, offering tailored solutions to fit various business requirements. Whether it's for team-building events, client transport, or company outings, we have the right vehicle for you."
        },
        {
            "name": "Amruta Travels Pune",
            "description": "Based in Pune, Amruta Travels is your go-to provider for all corporate bus hire needs. We pride ourselves on delivering exceptional service and a diverse fleet to ensure your corporate transportation needs are met with professionalism."
        },
        {
            "name": "Corporate Pick-Up and Drop Service",
            "description": "Our corporate pick-up and drop service is designed to offer convenience and reliability for your business events. Enjoy hassle-free transportation with our punctual and professional drivers, ensuring smooth transfers for your team."
        },
        {
            "name": "AC Bus Hire for Corporate",
            "description": "Stay cool and comfortable with our AC bus hire options for corporate events. Amruta Travels provides modern air-conditioned buses to ensure a pleasant travel experience for your employees and clients."
        },
        {
            "name": "Affordable Corporate Bus Hire",
            "description": "Get value for your money with our affordable corporate bus hire services. At Amruta Travels, we offer competitive pricing without compromising on quality, making it easy to arrange transportation for your corporate events within budget."
        },
        {
            "name": "25-Seater Bus Hire for Corporate",
            "description": "Our 25-seater bus is perfect for medium-sized corporate groups. Ideal for team outings or client transfers, this bus provides a comfortable and efficient travel solution."
        },
        {
            "name": "26-Seater Bus Hire for Corporate",
            "description": "For slightly larger groups, our 26-seater bus offers ample space and comfort. It’s a great choice for corporate trips requiring additional seating while still maintaining a cozy atmosphere."
        },
        {
            "name": "32-Seater Bus Hire for Corporate",
            "description": "The 32-seater bus from Amruta Travels provides a spacious and comfortable option for larger corporate gatherings. Ideal for seminars, workshops, or group travel, it combines practicality with comfort."
        },
        {
            "name": "50-Seater Bus Hire for Corporate in Pune",
            "description": "For very large groups, our 50-seater buses offer extensive seating and amenities. Perfect for large corporate events or conventions, these buses ensure everyone travels together comfortably."
        },
        {
            "name": "Cheap Bus Service in Pune",
            "description": "Looking for a budget-friendly bus service in Pune? Amruta Travels offers competitive rates for corporate bus hires, providing economical solutions without sacrificing quality or service."
        },
        {
            "name": "35-Seater Bus Hire for Corporate Events",
            "description": "The 35-seater bus is an excellent choice for sizable corporate events. It provides ample seating and comfort, making it ideal for conferences, workshops, or team-building activities."
        },
        {
            "name": "Corporate Bus Service from Pune",
            "description": "Amruta Travels offers dedicated corporate bus services from Pune, catering to various business needs. Whether you require transportation for local or outstation trips, we ensure a reliable and efficient service."
        },
        {
            "name": "Bus Hire for Corporate Event Party",
            "description": "When organizing a corporate event party, Amruta Travels provides top-notch bus hire services to ensure your guests travel comfortably and arrive on time. Our fleet includes a variety of options to suit different event sizes and requirements."
        },
        {
            "name": "Corporate Bus Services in Pune",
            "description": "Amruta Travels offers comprehensive corporate bus services in Pune, catering to various business needs. From daily commutes to special events, our reliable and professional services ensure smooth transportation for corporate teams."
        },
        {
            "name": "Private Bus Service in Pune for Office",
            "description": "For office transportation needs, Amruta Travels provides private bus services in Pune that offer convenience and flexibility. Our private buses are designed to accommodate your staff comfortably while ensuring timely arrivals."
        },
        {
            "name": "Private Buses for Corporate Events in Pune",
            "description": "Looking for private buses for corporate events in Pune? Amruta Travels specializes in providing tailored bus solutions for various corporate gatherings, ensuring a seamless and efficient transport experience for your team."
        },
        {
            "name": "Luxury Buses for Corporate Events in Pune",
            "description": "Experience the height of comfort with our luxury buses for corporate events in Pune. Featuring premium amenities and elegant interiors, our luxury buses are perfect for impressing clients or providing a high-end travel experience for executives."
        },
        {
            "name": "Buses for Corporate Events in Pimpri Chinchwad",
            "description": "Amruta Travels offers specialized bus services for corporate events in Pimpri Chinchwad. Whether it's a seminar, workshop, or team-building activity, our buses provide reliable and comfortable transportation for your business events."
        },
        {
            "name": "Buses for Corporate Events in Hinjewadi",
            "description": "Our fleet of buses is well-equipped to handle corporate events in Hinjewadi. Amruta Travels ensures that your team or guests experience a smooth and enjoyable journey to and from your corporate functions in this tech hub."
        },
        {
            "name": "Buses for Corporate Events in Kharadi",
            "description": "For corporate events in Kharadi, Amruta Travels provides a range of bus options tailored to meet your needs. From small team meetings to large conferences, our buses ensure comfortable and efficient transportation."
        },
        {
            "name": "Business Events in Hire Bus on Rent",
            "description": "For business events that require bus rentals, Amruta Travels offers a diverse fleet to suit different group sizes and needs. Our bus hire services provide a reliable and professional solution for your business event transportation."
        },
        {
            "name": "Buses for Corporate Events in Pune",
            "description": "Amruta Travels delivers exceptional bus services for corporate events throughout Pune. Our well-maintained fleet and professional drivers ensure that your corporate events are managed with the utmost care and efficiency."
        },
        {
            "name": "Buses for Corporate Events in Magarpatta City",
            "description": "Amruta Travels provides specialized bus services for corporate events in Magarpatta City. Our buses offer comfort and convenience, making sure that your corporate gatherings are well-supported with reliable transportation."
        },
        {
            "name": "Buses for Corporate Events in Talawade MIDC",
            "description": "For events held in Talawade MIDC, Amruta Travels offers dedicated bus services that cater to the specific needs of corporate gatherings in this industrial area. Enjoy smooth and efficient transportation with our fleet."
        },
        {
            "name": "Buses for Corporate Events in Ranjangaon MIDC",
            "description": "Amruta Travels provides tailored bus services for corporate events in Ranjangaon MIDC. Whether you need transportation for large groups or specific event requirements, our buses deliver reliable and comfortable travel solutions."
        },
        {
            "name": "Mini Bus On Rent in Pune Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Mini Bus On Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],    
    "tableData": [
        ["- Corporate Bus Hire for Outstation", "- Corporate Bus Hire Service in Pune"],
        ["- Hire a Bus for Corporate Sector", "- Amruta Travels Pune"],
        ["- Corporate Pick-Up and Drop Service", "- AC Bus Hire for Corporate"],
        ["- Affordable Corporate Bus Hire", "- 25-Seater Bus Hire for Corporate"],
        ["- 26-Seater Bus Hire for Corporate", "- 32-Seater Bus Hire for Corporate"],
        ["- 50-Seater Bus Hire for Corporate in Pune", "- Cheap Bus Service in Pune"],
        ["- 35-Seater Bus Hire for Corporate Events", "- Corporate Bus Service from Pune"],
        ["- Corporate Bus Service from Pune", "- Bus Hire for Corporate Event Party"],
        ["- Corporate Bus Services in Pune", "- Private Bus Service in Pune for Office"],
        ["- Private Buses for Corporate Events in Pune", "- Luxury Buses for Corporate Events in Pune"],
        ["- Buses for Corporate Events in Pimpri Chinchwad", "- Buses for Corporate Events in Hinjewadi"],
        ["- Buses for Corporate Events in Kharadi", "- Business Events in Hire Bus on Rent"],
        ["- Buses for Corporate Events in Pune", "- Buses for Corporate Events in Magarpatta City"],
        ["- Buses for Corporate Events in Talawade MIDC", "- Buses for Corporate Events in Ranjangaon MIDC"]
    ]
,
"whychoose": [
    {
        "WhyChooseheading": "Extensive Fleet",
        "WhyChoosedescription": "At Amruta Travels, we offer a diverse fleet of buses specifically designed to cater to various corporate event needs. Whether you need a luxury coach for executive transport or a spacious bus for large group travel, we have the right vehicle for you."
    },
    {
        "WhyChooseheading": "Professional Service",
        "WhyChoosedescription": "Our team of experienced drivers and staff are committed to providing exceptional service. We prioritize punctuality, safety, and comfort, ensuring a seamless transportation experience for your corporate events."
    },
    {
        "WhyChooseheading": "Customizable Options",
        "WhyChoosedescription": "We understand that every corporate event is unique. That’s why we offer customizable bus hire solutions to meet your specific requirements, including special amenities, seating arrangements, and more."
    },
    {
        "WhyChooseheading": "Reliable and Efficient",
        "WhyChoosedescription": "Timely and reliable service is crucial for corporate events. Amruta Travels guarantees on-time arrivals and departures, minimizing any disruption to your schedule and ensuring your guests are transported smoothly."
    },
    {
        "WhyChooseheading": "Competitive Pricing",
        "WhyChoosedescription": "We provide high-quality bus hire services at competitive rates, offering great value for money. Our transparent pricing ensures there are no hidden costs, making budgeting for your corporate event straightforward."
    },
    {
        "WhyChooseheading": "Modern Amenities",
        "WhyChoosedescription": "Our buses come equipped with modern amenities such as air conditioning, comfortable seating, and entertainment options, ensuring that your guests travel in comfort and style."
    },
    {
        "WhyChooseheading": "Safety First",
        "WhyChoosedescription": "Safety is our top priority. All our buses undergo regular maintenance and are equipped with the latest safety features. Our drivers are trained to adhere to the highest safety standards, ensuring a secure journey for all passengers."
    },
    {
        "WhyChooseheading": "Excellent Customer Support",
        "WhyChoosedescription": "From the moment you contact us until the end of your event, our customer support team is here to assist you. We offer personalized service to address any queries or concerns you may have."
    },
    {
        "WhyChooseheading": "Flexibility",
        "WhyChoosedescription": "We offer flexible booking options to accommodate changes in your event plans. Whether you need to adjust the number of buses or change pickup times, we can adapt to your needs."
    },
    {
        "WhyChooseheading": "Positive Reputation",
        "WhyChoosedescription": "Amruta Travels has built a solid reputation for excellence in bus hire services for corporate events in Pune. Our satisfied clients and positive reviews reflect our commitment to delivering outstanding service."
    }
]
};

const faqData = [
    {
        "question": "What types of buses are available for corporate events?",
        "answer": "We offer a range of buses including luxury coaches, executive buses, and standard coaches. Each type is equipped to meet different needs, from high-end travel to practical group transport."
    },
    {
        "question": "How can I book a bus for a corporate event?",
        "answer": "You can book a bus by contacting us through our website, phone, or email. Provide details about your event, such as the number of passengers, date, and specific requirements, and we’ll help you with the booking process."
    },
    {
        "question": "Are your buses equipped with amenities?",
        "answer": "Yes, our buses come with various amenities such as air conditioning, comfortable seating, and entertainment options. We can also accommodate special requests depending on your needs."
    },
    {
        "question": "How do you ensure the safety of passengers?",
        "answer": "Our buses are regularly maintained and inspected for safety. Our drivers are trained in safety protocols, and we adhere to strict safety standards to ensure a secure journey for all passengers."
    },
    {
        "question": "Can I make changes to my booking?",
        "answer": "Yes, we offer flexible booking options. If you need to make changes to your reservation, such as adjusting the number of buses or changing pickup times, please contact us as soon as possible, and we’ll accommodate your request."
    },
    {
        "question": "What are your payment options?",
        "answer": "We offer various payment options including credit/debit cards and bank transfers. Payment details will be provided during the booking process."
    },
    {
        "question": "How far in advance should I book a bus?",
        "answer": "It’s recommended to book your bus as early as possible to ensure availability, especially for large corporate events. We suggest booking at least a few weeks in advance."
    },
    {
        "question": "What is your cancellation policy?",
        "answer": "Our cancellation policy varies depending on the timing of the cancellation. Please contact us directly for details on our cancellation terms and conditions."
    },
    {
        "question": "Are there any additional costs?",
        "answer": "We strive to provide transparent pricing with no hidden costs. Any additional charges, such as for extra amenities or changes in booking, will be communicated to you upfront."
    },
    {
        "question": "How do I contact customer support?",
        "answer": "You can reach our customer support team via phone, email, or through our website’s contact form. We are here to assist you with any questions or concerns regarding your corporate bus hire."
    }
];

const testimonials = [
    {
        "name": "Mr. Rajesh Kumar",
        "text": "We recently hired Amruta Travels for our company's annual corporate retreat, and the experience was exceptional. Their fleet of buses was top-notch, with all the modern amenities we needed. The drivers were punctual and professional, ensuring that our team traveled in comfort and arrived on time for each session. The level of service provided exceeded our expectations, and we will definitely choose Amruta Travels for future corporate events. Highly recommended!"
    },
    {
        "name": "Ms. Priya Deshmukh",
        "text": "Amruta Travels made our corporate team-building event a breeze with their outstanding bus hire services. The 35-seater bus we rented was spacious, clean, and well-maintained. The driver was courteous and ensured a smooth journey for our team. Their flexible booking process and competitive rates made it easy to organize everything. We appreciate their excellent service and look forward to using Amruta Travels again for our upcoming events."
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
        heading: "Buses For Corporate Events in Pune Contact Number:",
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
  <title>Bus Rental for Corporate Events in Pune | Contact: +91 8421333435 | Amruta Travels | Buses For Corporate Events in Pune | Affordable Bus Rental for Corporate Events | Amruta Travels</title>
  <meta name="description" content="Looking for buses for corporate events in Pune? Amruta Travels offers a range of buses for corporate events, including AC buses, luxury buses, and private services. Affordable, comfortable, and reliable transportation for all your business needs. Available for events in Pune, Hinjewadi, Kharadi, Magarpatta City, Pimpri Chinchwad, and more." />
  <meta name="keywords" content="Corporate Bus Hire for Outstation, Corporate Bus Hire Service in Pune, Hire a Bus for Corporate Sector, Amruta Travels Pune, Corporate Pick-Up and Drop Service, AC Bus Hire for Corporate, Affordable corporate Bus Hire, 25-Seater Bus Hire for Corporate, 26-Seater Bus Hire for corporate, 32-Seater bus hire for corporate, 50-seater bus hire corporate in Pune, Cheap bus service in Pune, 35 Seater Bus Hire for Corporate Events, corporate bus service from pune, Corporate Bus Service from Pune, Bus hire for corporate Event Party, corporate bus services in pune, private bus service in pune for office, Private buses for corporate events in pune, Luxury buses for corporate events in pune, buses for corporate events in pimpri chinchwad, Buses For Corporate Events in hinjewadi, Buses For Corporate Events in kharadi, business events in Hire Bus On Rent, Buses For Corporate Events in Pune, buses for corporate events in magarpatta city, buses for corporate events in talawade midc, buses for corporate events in ranjangaon midc" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Looking for buses for corporate events in Pune? Amruta Travels offers a range of buses for corporate events, including AC buses, luxury buses, and private services. Affordable, comfortable, and reliable transportation for all your business needs. Available for events in Pune, Hinjewadi, Kharadi, Magarpatta City, Pimpri Chinchwad, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/buses-for-corporate-events-in-pune",
        "logo": "https://amrutatravel.com/images/corporate-events-bus-hire.jpg",
        "image": "https://amrutatravel.com/images/corporate-events-bus-hire.jpg",
        "priceRange": "₹5000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/buses-for-corporate-events-in-pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "800"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Kumar"
            },
            "datePublished": "2024-05-30",
            "reviewBody": "Used Amruta Travels for a corporate outing. The service was top-notch, and the bus was clean and well-maintained. Definitely recommend it for corporate events."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anjali Mehta"
            },
            "datePublished": "2024-04-22",
            "reviewBody": "We hired a luxury bus for our company event, and the experience was excellent. Amruta Travels made everything seamless and the staff was courteous."
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
          "serviceUrl": "https://amrutatravel.com/buses-for-corporate-events-in-pune"
        },
        "keywords": "Corporate Bus Hire for Outstation, Corporate Bus Hire Service in Pune, Hire a Bus for Corporate Sector, Amruta Travels Pune, Corporate Pick-Up and Drop Service, AC Bus Hire for Corporate, Affordable corporate Bus Hire, 25-Seater Bus Hire for Corporate, 26-Seater Bus Hire for corporate, 32-Seater bus hire for corporate, 50-seater bus hire corporate in Pune, Cheap bus service in Pune, 35 Seater Bus Hire for Corporate Events, corporate bus service from pune, Corporate Bus Service from Pune, Bus hire for corporate Event Party, corporate bus services in pune, private bus service in pune for office, Private buses for corporate events in pune, Luxury buses for corporate events in pune, buses for corporate events in pimpri chinchwad, Buses For Corporate Events in hinjewadi, Buses For Corporate Events in kharadi, business events in Hire Bus On Rent, Buses For Corporate Events in Pune, buses for corporate events in magarpatta city, buses for corporate events in talawade midc, buses for corporate events in ranjangaon midc"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-57.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Buses for Corporate Events in Pune:</h3>
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
export default BusForCorporateEvents;