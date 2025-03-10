
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusSchool(){

    const cardData = {
        keyword: 'Bus Hire for School Trips in Pune',
        heading: 'Amruta Travels: Bus Hire for School Trips in Pune',
        headingDescription: 'When it comes to organizing school trips, safety, comfort, and reliability are paramount. At Amruta Travels, we understand these needs and offer exceptional bus hire services tailored specifically for school trips in Pune.',
        
        top: 'Top Features of Our Bus Hire Service',
      
        topPlaces: [
          {
            "title": "Safe and Secure Transportation",
            "description": "At Amruta Travels, we prioritize the safety of your children. Our buses are equipped with GPS tracking, seat belts, and experienced drivers to ensure a safe journey during school trips."
          },
          {
            "title": "Well-Maintained Fleet",
            "description": "Our fleet of buses is regularly maintained to ensure optimal performance and comfort. We offer a range of buses, including mini-buses and large buses, to accommodate groups of all sizes."
          },
          {
            "title": "Affordable Rates",
            "description": "We offer competitive pricing for school bus hire, ensuring you get the best value for your money. Our transparent pricing policy means no hidden charges, making it easy for schools to plan their trips within budget."
          },
          {
            "title": "Experienced Drivers",
            "description": "Our drivers are professional, courteous, and well-trained in handling school trips. They are familiar with Pune’s routes and ensure that students reach their destination on time and safely."
          },
          {
            "title": "Comfortable and Spacious Buses",
            "description": "Our buses come with comfortable seating and ample space for students and teachers. The interiors are designed to provide a comfortable journey, ensuring students are refreshed and ready for their trip."
          },
          {
            "title": "Tailored Services",
            "description": "We understand that each school trip is unique. Whether it’s a one-day excursion, a picnic, or an educational tour, we offer tailored bus hire services to suit your specific requirements."
          },
          {
            "title": "Punctual and Reliable",
            "description": "Punctuality is key for school trips. We ensure that our buses arrive on time, allowing the trip to proceed smoothly without delays. Our reliability is one of the reasons schools in Pune trust Amruta Travels."
          },
          {
            "title": "Support for School Events",
            "description": "In addition to regular school trips, we also provide bus hire services for school events such as sports meets, educational tours, and annual days. Our services are flexible and can be customized to meet the needs of your event."
          }
        ],
      
        services: [
          {
            "name": "Spacious and Comfortable Seating",
            "description": "Our buses are equipped with spacious seating arrangements designed for student comfort. With ample legroom and well-cushioned seats, your students will enjoy a relaxed journey, making the trip more enjoyable."
          },
          {
            "name": "Safety First",
            "description": "Safety is our top priority. Our buses are fitted with advanced safety features, including seat belts, emergency exits, and GPS tracking. Our drivers are highly trained and experienced in ensuring a secure journey for all passengers."
          },
          {
            "name": "Air-Conditioned Buses",
            "description": "To keep the students comfortable in all weather conditions, we offer air-conditioned buses. Our climate control systems ensure a pleasant environment throughout the trip, no matter how hot or cold it may be outside."
          },
          {
            "name": "Well-Maintained Fleet",
            "description": "We take pride in maintaining our fleet to the highest standards. Each bus undergoes regular inspections and servicing to ensure it is in top-notch condition. This rigorous maintenance schedule minimizes the risk of breakdowns and ensures a smooth ride."
          },
          {
            "name": "Professional and Friendly Drivers",
            "description": "Our drivers are not only skilled and professional but also friendly and approachable. They are trained to handle the unique needs of school trips, ensuring a smooth and enjoyable experience for both students and teachers."
          },
          {
            "name": "Customizable Travel Packages",
            "description": "We offer flexible and customizable travel packages to suit your school’s specific needs. Whether you require a full-day trip, a half-day outing, or transportation for special events, we can tailor our services to fit your schedule and budget."
          },
          {
            "name": "Entertainment Options",
            "description": "To keep the students entertained during the journey, many of our buses are equipped with entertainment options like audio systems and DVD players. This feature helps make the trip enjoyable and engaging for the students."
          },
          {
            "name": "Affordable Rates",
            "description": "At Amruta Travels, we offer competitive pricing for our school trip bus hire services. Our transparent pricing structure means there are no hidden fees, and you can be assured of getting great value for your money."
          },
          {
            "name": "Punctuality and Reliability",
            "description": "We understand the importance of sticking to schedules, especially for school trips. Our buses adhere to strict schedules to ensure timely departures and arrivals, helping you stay on track with your planned itinerary."
          },
          {
            "name": "Excellent Customer Support",
            "description": "Our dedicated customer support team is available to assist you throughout the booking process and during the trip. We are committed to addressing any concerns or issues promptly, ensuring a hassle-free experience for schools and students alike."
          }
        ],
      
        tableData: [
          ["- Tour Agencies in Pune", "- Bus Hire Agency in Pune"],
          ["- Travel Agents in Pune", "- Pune Tours and Travels Agents"],
          ["- Bus Hire Agents in Pune", "- Best Traveller Bus on Rent in Pune"],
          ["- Urbania Bus on Rent in Pune for Corporate Outing", "- Travel Agents in Pimpri Chinchwad"],
          ["- Pune Travel Agency Contact Number", "- Bus Hire for Events Agency"],
          ["- Bus Booking for Corporate Events", "- Bus on Hire for Pune to Mahabaleshwar Package Tour"],
          ["- Tour Operators in Pune", "- Bus Hire for Corporate Events & Tours"],
          ["- Tourist Agency in Pune", "- Best Tours and Travel Company in PCMC"],
          ["- Best Tours and Travel Company in Pune", "-"]
        ],
      
        whychoose: [
          {
            "WhyChooseheading": "Safe and Secure Transportation",
            "WhyChoosedescription": "At Amruta Travels, we prioritize the safety of your children. Our buses are equipped with GPS tracking, seat belts, and experienced drivers to ensure a safe journey during school trips."
          },
          {
            "WhyChooseheading": "Well-Maintained Fleet",
            "WhyChoosedescription": "Our fleet of buses is regularly maintained to ensure optimal performance and comfort. We offer a range of buses, including mini-buses and large buses, to accommodate groups of all sizes."
          },
          {
            "WhyChooseheading": "Affordable Rates",
            "WhyChoosedescription": "We offer competitive pricing for school bus hire, ensuring you get the best value for your money. Our transparent pricing policy means no hidden charges, making it easy for schools to plan their trips within budget."
          },
          {
            "WhyChooseheading": "Experienced Drivers",
            "WhyChoosedescription": "Our drivers are professional, courteous, and well-trained in handling school trips. They are familiar with Pune’s routes and ensure that students reach their destination on time and safely."
          },
          {
            "WhyChooseheading": "Comfortable and Spacious Buses",
            "WhyChoosedescription": "Our buses come with comfortable seating and ample space for students and teachers. The interiors are designed to provide a comfortable journey, ensuring students are refreshed and ready for their trip."
          },
          {
            "WhyChooseheading": "Tailored Services",
            "WhyChoosedescription": "We understand that each school trip is unique. Whether it’s a one-day excursion, a picnic, or an educational tour, we offer tailored bus hire services to suit your specific requirements."
          },
          {
            "WhyChooseheading": "Punctual and Reliable",
            "WhyChoosedescription": "Punctuality is key for school trips. We ensure that our buses arrive on time, allowing the trip to proceed smoothly without delays. Our reliability is one of the reasons schools in Pune trust Amruta Travels."
          },
          {
            "WhyChooseheading": "Support for School Events",
            "WhyChoosedescription": "In addition to regular school trips, we also provide bus hire services for school events such as sports meets, educational tours, and annual days. Our services are flexible and can be customized to meet the needs of your event."
          }
        ]
      };
      
    
      const faqData = [
        {
            "question": "What safety measures do you provide for school trips?",
            "answer": "At Amruta Travels, safety is our top priority. Our buses are equipped with seat belts, GPS tracking, and first-aid kits. Our drivers are experienced and trained to handle school groups with care."
        },
        {
            "question": "What are the seating capacities of your buses?",
            "answer": "We offer buses with varying seating capacities, ranging from 20-seater mini-buses to 50-seater large buses. You can choose the bus that fits the size of your group."
        },
        {
            "question": "How do you ensure that the buses are clean and well-maintained?",
            "answer": "Our buses undergo regular maintenance checks and are cleaned thoroughly before every trip. We ensure that the buses are in excellent condition for a comfortable and hassle-free experience."
        },
        {
            "question": "Can we hire buses for overnight school trips or outstation tours?",
            "answer": "Yes, we provide bus hire services for both day trips and overnight outstation school tours. Our services are flexible and can be tailored to meet the duration and location of your school trip."
        },
        {
            "question": "Are the drivers familiar with the routes to common school trip destinations in and around Pune?",
            "answer": "Yes, our drivers are experienced and well-acquainted with the popular school trip destinations in Pune and nearby areas. They ensure that the journey is smooth and that students reach their destination on time."
        },
        {
            "question": "What are your charges for school bus hire?",
            "answer": "Our charges depend on the type of bus, distance, and duration of the trip. We offer competitive pricing and provide a detailed quote after discussing your requirements."
        },
        {
            "question": "How do I book a bus for a school trip?",
            "answer": "You can book a bus by contacting us through our website, phone, or email. Our customer service team will assist you in choosing the right bus and provide a customized quote based on your needs."
        },
        {
            "question": "Is there an option to reschedule or cancel a bus booking?",
            "answer": "Yes, you can reschedule or cancel your booking based on our cancellation policy. We advise early communication to avoid any cancellation charges."
        },
        {
            "question": "Do you offer additional support for school events like sports or annual functions?",
            "answer": "Yes, we offer bus hire services for school events such as sports meets, annual functions, and educational tours. We can accommodate any special requirements to make the event transportation smooth and hassle-free."
        },
        {
            "question": "Can we request additional staff to accompany the trip for added safety?",
            "answer": "Yes, we can provide additional staff or supervisors to accompany the trip for enhanced safety and assistance, especially for younger students. This can be discussed and arranged during the booking process."
        }
    ];
    


    
    
    
    
    
    const testimonials = [
      {
          "name": "Ms. Kavita Deshmukh",
          "text": "We have been using Amruta Travels for our school trips for the past two years, and their service has always been exceptional. The buses are well-maintained, and the drivers are professional and punctual. Safety is our top concern, and Amruta Travels has consistently provided a secure and comfortable experience for our students. Their affordable rates and flexibility make them our go-to bus service for all our school events. Highly recommended!"
      },
      {
          "name": "Mr. Anil Patil",
          "text": "Amruta Travels made our recent school trip to Sinhagad Fort a breeze. The bus was clean, spacious, and arrived on time. The driver was courteous and ensured that the students were comfortable throughout the journey. We also appreciated the GPS tracking feature, which gave parents peace of mind. Amruta Travels is reliable, and we will definitely be using their services for future school outings!"
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
        heading: " Bus Hire for School Trips in Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Hire for School Trips in Pune | School Picnic, Outstation Tours, Water Parks, Mahabaleshwar, Alibaug & More</title>
  <meta name="description" content="Hire buses for school trips in Pune, including picnics to Mahabaleshwar, Alibaug, Water Parks, and outstation tours. We offer buses for school trips in Hadapsar, Pimpri Chinchwad, and more. Safe and affordable travel." />
  <meta name="keywords" content="Bus Hire for School Trips in Hadapsar Pune, Bus Hire for School Trips in Pimpri Chinchwad, Bus Hire for School Picnic Morachi Chincholi, Bus Hire for School Picnic Pune to Mahabaleshwar, Bus Hire for School Picnic Pune to Alibaug, Bus Hire for Pune to Mumbai for School Picnic, Bus Hire for Pune to Water Park for School Picnic, Bus Hire for Pune to Outstation School Picnic in Pune, Bus Hire for School Picnic in Pimpri Chinchwad" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent buses for school trips in Pune. We offer buses for school picnics, outstation tours, water parks, Mahabaleshwar, Alibaug, and more. Safe and affordable travel options for schools in Hadapsar, Pimpri Chinchwad, and beyond.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-hire-for-school-trips-in-pune",
        "logo": "https://amrutatravel.com/images/bus-hire-for-school-trips.jpg",
        "image": "https://amrutatravel.com/images/bus-hire-for-school-trips.jpg",
        "priceRange": "₹5000 - ₹15000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-hire-for-school-trips-in-pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1200"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Kumar"
            },
            "datePublished": "2024-09-10",
            "reviewBody": "Booked a bus for our school picnic to Mahabaleshwar. The bus was comfortable, the driver was professional, and the trip was seamless. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Sharma"
            },
            "datePublished": "2024-08-15",
            "reviewBody": "We rented a bus for a school picnic to Alibaug. The whole experience was very smooth, and the bus was perfect for our group of students."
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
          "serviceUrl": "https://amrutatravel.com/bus-hire-for-school-trips-in-pune"
        },
        "keywords": "Bus Hire for School Trips in Hadapsar Pune, Bus Hire for School Trips in Pimpri Chinchwad, Bus Hire for School Picnic Morachi Chincholi, Bus Hire for School Picnic Pune to Mahabaleshwar, Bus Hire for School Picnic Pune to Alibaug, Bus Hire for Pune to Mumbai for School Picnic, Bus Hire for Pune to Water Park for School Picnic, Bus Hire for Pune to Outstation School Picnic in Pune, Bus Hire for School Picnic in Pimpri Chinchwad"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-66.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs: Bus Hire for School Trips in Pune for Amruta Travels:</h3>
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
export default BusSchool;