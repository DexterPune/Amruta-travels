
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';

function  BusHIreForSchoolTripnInPune(){

  const cardData = 
    {
      keyword: 'Bus Hire for School Trips in Pune ',
      heading: 'Amruta Travels: Bus Hire for School Trips in Pune',

      headingDescription: 'When it comes to organizing school trips, safety, comfort, and reliability are paramount. At Amruta Travels, we understand these needs and offer exceptional bus hire services tailored specifically for school trips in Pune. Here are the top features of our bus hire service that make us the preferred choice for educational institutions:',

      top:"Top Features Bus Hire for School Trips in Pune:",
       topPlaces : [
        {
            "title": "Spacious and Comfortable Seating:",
            "description": "Our buses are equipped with spacious seating arrangements designed for student comfort. With ample legroom and well-cushioned seats, your students will enjoy a relaxed journey. The generous space ensures that students can stretch out and relax, making the trip more enjoyable for everyone on board."
        },
        {
            "title": "Safety First:",
            "description": "Safety is our top priority. Our buses are fitted with advanced safety features including seat belts, emergency exits, and GPS tracking. Each bus undergoes regular safety inspections to ensure it meets the highest safety standards. Our drivers are highly trained and experienced, committed to providing a secure journey for all passengers."
        },
        {
            "title": "Air-Conditioned Buses:",
            "description": "To keep the students comfortable in all weather conditions, we offer air-conditioned buses. Our state-of-the-art climate control systems maintain a pleasant environment inside the bus, ensuring that students stay comfortable regardless of the weather outside. This feature is essential for maintaining a cool and fresh atmosphere during long trips."
        },
        {
            "title": "Well-Maintained Fleet:",
            "description": "We take pride in maintaining our fleet to the highest standards. Each bus undergoes regular inspections and servicing to ensure it is in top-notch condition. Our rigorous maintenance schedule minimizes the risk of breakdowns and ensures a smooth, trouble-free ride. Our commitment to upkeep guarantees that each bus operates efficiently and reliably."
        },
        {
            "title": "Professional and Friendly Drivers:",
            "description": "Our drivers are not only skilled and professional but also friendly and approachable. They are trained to handle the unique needs of school trips, ensuring a smooth and enjoyable experience. With their extensive knowledge of routes and their courteous manner, our drivers contribute significantly to the overall positive experience of the journey."
        },
        {
            "title": "Customizable Travel Packages:",
            "description": "We offer flexible and customizable travel packages to suit your school’s specific needs. Whether you require a full-day trip, a half-day outing, or transportation for special events, we can tailor our services to fit your schedule and budget. This flexibility ensures that you get a package that perfectly matches your requirements and enhances the travel experience."
        },
        {
            "title": "Entertainment Options:",
            "description": "To keep the students entertained during the journey, many of our buses are equipped with entertainment options like audio systems and DVD players. This feature helps make the trip enjoyable and engaging for the students, allowing them to watch movies, listen to music, or engage with other entertainment options to pass the time."
        },
        {
            "title": "Affordable Rates:",
            "description": "At Amruta Travels, we offer competitive pricing for our school trip bus hire services. Our transparent pricing structure ensures that there are no hidden fees, providing you with great value for your money. We strive to keep our rates affordable while maintaining high standards of service and comfort."
        },
        {
            "title": "Punctuality and Reliability:",
            "description": "We understand the importance of sticking to schedules, especially for school trips. Our buses adhere to strict schedules to ensure timely departures and arrivals. This reliability helps you stay on track with your planned itinerary, reducing the stress of delays and ensuring a smooth, well-organized trip."
        },
        {
            "title": "Excellent Customer Support:",
            "description": "Our dedicated customer support team is available to assist you throughout the booking process and during the trip. We are committed to addressing any concerns or issues promptly, ensuring a hassle-free experience for schools and students alike. Our support extends from initial inquiries to on-the-road assistance, guaranteeing a seamless and supportive service."
        }
    ],    

    "services": [
        {
            "name": "Bus Hire for School Trips in Hadapsar, Pune",
            "description": "Amruta Travels offers reliable and comfortable bus hire services specifically tailored for school trips in Hadapsar, Pune. Our buses are equipped with safety features and amenities to ensure a smooth and enjoyable journey for students and teachers alike. Whether it's an educational tour or a day out, we provide top-notch services to meet your school's travel needs."
        },
        {
            "name": "Bus Hire for School Trips in Pimpri Chinchwad",
            "description": "In Pimpri Chinchwad, Amruta Travels is your go-to provider for school trip bus hires. We offer a range of buses, from mini buses to larger options, all designed to provide comfort and safety. Our experienced drivers ensure a hassle-free travel experience, making your school trip both enjoyable and stress-free."
        },
        {
            "name": "Bus Hire for School Picnic Morachi Chincholi",
            "description": "Planning a school picnic to Morachi Chincholi? Amruta Travels has you covered with our specialized bus hire services. Our buses are perfect for transporting students and teachers to this scenic location, providing a comfortable ride with all necessary amenities for a memorable picnic experience."
        },
        {
            "name": "Bus Hire for School Picnic Pune to Mahabaleshwar",
            "description": "Traveling from Pune to Mahabaleshwar for a school picnic? Choose Amruta Travels for a smooth and enjoyable journey. Our buses are well-maintained and equipped to handle long trips, ensuring that students and staff travel comfortably to one of the most popular picnic spots in Maharashtra."
        },
        {
            "name": "Bus Hire for School Picnic Pune to Alibaug",
            "description": "For school picnics to Alibaug, Amruta Travels offers reliable bus hire services. Our buses are designed to provide a safe and comfortable ride for students, making the journey to Alibaug’s beautiful beaches and attractions both pleasant and convenient."
        },
        {
            "name": "Bus Hire for Pune to Mumbai for School Picnic",
            "description": "If your school picnic destination is Mumbai, Amruta Travels provides exceptional bus hire services. We ensure that your trip from Pune to Mumbai is smooth and enjoyable, with comfortable buses and professional drivers dedicated to making your excursion memorable."
        },
        {
            "name": "Bus Hire for Pune to Water Park for School Picnic",
            "description": "For a fun day at the water park, Amruta Travels offers specialized bus hire services. Our buses are equipped to transport students safely and comfortably from Pune to various water parks, ensuring an exciting and enjoyable day for everyone involved."
        },
        {
            "name": "Bus Hire for Pune to Outstation School Picnic",
            "description": "Amruta Travels is your trusted partner for outstation school picnics. Whether you’re heading to destinations beyond Pune, our bus hire services provide a reliable and comfortable travel option. Our fleet is prepared to handle long distances, ensuring a pleasant journey for school outings."
        },
        {
            "name": "Bus Hire for School Picnic in Pimpri Chinchwad",
            "description": "For school picnics within Pimpri Chinchwad, Amruta Travels offers excellent bus hire services. Our buses are well-suited for local trips, providing a comfortable and safe travel experience for students and teachers on their day out."
        },
        {
            "name": "Luxury Bus Hire for School Trips in Pune",
            "description": "When it comes to luxury and comfort, Amruta Travels offers the best luxury bus hire services for school trips in Pune. Our fleet of luxury buses is equipped with modern amenities to ensure a comfortable and enjoyable journey for students and teachers alike. With plush seating, air conditioning, and entertainment options, our luxury buses make every school trip a pleasant experience."
        },
        {
            "name": "Best Luxury Bus Hire for School Trips in Pune",
            "description": "For the finest luxury bus hire experience for school trips in Pune, choose Amruta Travels. Our commitment to providing high-quality service and top-notch buses ensures that your school trip is memorable and stress-free. Our luxury buses are meticulously maintained and designed to offer the highest level of comfort, making them the best choice for any educational excursion."
        },
        {
            "name": "Bus Hire for School Trips in Kothrud",
            "description": "Amruta Travels offers excellent bus hire services for school trips in Kothrud. Our buses are ideal for transporting students to various destinations, providing a safe and comfortable travel experience. With a focus on reliability and convenience, our bus rental service in Kothrud ensures that your school trip is well-organized and enjoyable."
        },
        {
            "name": "Bus Hire for School Trips in Karve Nagar",
            "description": "If you're planning a school trip from Karve Nagar, Amruta Travels provides reliable and comfortable bus hire services to meet your needs. Our buses are equipped with essential amenities to ensure a pleasant journey for students and staff. Trust us to deliver dependable and efficient transportation for your school trips in Karve Nagar."
        },
        {
            "name": "Bus Hire for School Trips in Somwar Peth",
            "description": "For school trips in Somwar Peth, Amruta Travels offers tailored bus hire services that guarantee comfort and reliability. Our fleet includes various bus sizes to accommodate different group sizes and needs. Whether it’s a local field trip or a longer excursion, our bus rental service in Somwar Peth ensures a smooth and enjoyable travel experience."
        },
        {
            "name": "Bus Hire for School Trips in Viman Nagar",
            "description": "Amruta Travels provides top-quality bus hire services for school trips in Viman Nagar. Our buses are designed to offer comfort and safety for students during their journey. With a focus on punctuality and reliability, our bus rental service in Viman Nagar ensures that your school trip runs smoothly and efficiently."
        },
        {
            "name": "Bus Hire for School Trips in Camp Pune",
            "description": "For school trips in Camp Pune, Amruta Travels offers reliable bus hire services tailored to your specific needs. Our well-maintained buses provide a comfortable and secure travel environment for students. Whether you’re planning a short local trip or a longer excursion, our bus rental service in Camp Pune is here to ensure a successful and enjoyable school trip."
        },
        {
            "name": "Mini Bus On Rent in Pune Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Mini Bus On Rent in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],

     "tableData": [
    ["Bus Hire for School Trips in Hadapsar Pune", "Bus Hire for School Trips in Pimpri Chinchwad"],
    ["Bus Hire for School Picnic Morachi Chincholi", "Bus Hire for School Picnic Pune to Mahabaleshwar"],
    ["Bus Hire for School Picnic Pune to Alibaug", "Bus Hire for Pune to Mumbai for School Picnic"],
    ["Bus Hire for Pune to Water Park for School Picnic", "Bus Hire for Pune to Outstation School Picnic in Pune"],
    ["Bus Hire for School Picnic in Pimpri Chinchwad", "Luxury Bus Hire for School Trips in Pune"],
    ["Best Luxury Bus Hire for School Trips in Pune", "Bus Hire for School Trips in Kothrud"],
    ["Bus Hire for School Trips in Karve Nagar", "Bus Hire for School Trips in Somwar Peth"],
    ["Bus Hire for School Trips in Viman Nagar", "Bus Hire for School Trips in Camp Pune"],
    ["", ""]
  ],

  "whychoose": [
    {
        "WhyChooseheading": "Why Choose Amruta Travels for Bus Hire for School Trips in Pune?",
        "WhyChoosedescription": "Amruta Travels offers exceptional bus hire services for school trips in Pune. We provide a safe, comfortable, and reliable transportation experience tailored to the needs of students and schools."
    },
    {
        "WhyChooseheading": "Safe and Secure Transportation:",
        "WhyChoosedescription": "At Amruta Travels, we prioritize the safety of your children. Our buses are equipped with GPS tracking, seat belts, and experienced drivers to ensure a safe journey during school trips."
    },
    {
        "WhyChooseheading": "Well-Maintained Fleet:",
        "WhyChoosedescription": "Our fleet of buses is regularly maintained to ensure optimal performance and comfort. We offer a range of buses, including mini-buses and large buses, to accommodate groups of all sizes."
    },
    {
        "WhyChooseheading": "Affordable Rates:",
        "WhyChoosedescription": "We offer competitive pricing for school bus hire, ensuring you get the best value for your money. Our transparent pricing policy means no hidden charges, making it easy for schools to plan their trips within budget."
    },
    {
        "WhyChooseheading": "Experienced Drivers:",
        "WhyChoosedescription": "Our drivers are professional, courteous, and well-trained in handling school trips. They are familiar with Pune’s routes and ensure that students reach their destination on time and safely."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Buses:",
        "WhyChoosedescription": "Our buses come with comfortable seating and ample space for students and teachers. The interiors are designed to provide a comfortable journey, ensuring students are refreshed and ready for their trip."
    },
    {
        "WhyChooseheading": "Tailored Services:",
        "WhyChoosedescription": "We understand that each school trip is unique. Whether it’s a one-day excursion, a picnic, or an educational tour, we offer tailored bus hire services to suit your specific requirements."
    },
    {
        "WhyChooseheading": "Punctual and Reliable:",
        "WhyChoosedescription": "Punctuality is key for school trips. We ensure that our buses arrive on time, allowing the trip to proceed smoothly without delays. Our reliability is one of the reasons schools in Pune trust Amruta Travels."
    },
    {
        "WhyChooseheading": "Support for School Events:",
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
        "name": "Ms. Sunita Deshmukh",
        "text": "We have been using Amruta Travels for our school trips for the past two years, and their service has always been exceptional. The buses are well-maintained, and the drivers are professional and punctual. Safety is our top concern, and Amruta Travels has consistently provided a secure and comfortable experience for our students. Their affordable rates and flexibility make them our go-to bus service for all our school events. Highly recommended!"
    },
    {
        "name": "Mr. Sunil Patil",
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
        heading: "Bus Hire for School Trips in Pune Contact Number:",
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
    <img src='\img\Keyword Based Image\Keyword Based Image-19.jpg' alt='img'/>
    <img src='' alt='img'/>
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
export default BusHIreForSchoolTripnInPune;