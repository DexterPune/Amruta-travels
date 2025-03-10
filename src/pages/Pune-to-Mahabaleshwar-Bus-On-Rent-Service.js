
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneTOMahabaleshwar(){

  const cardData = 
    {
        "keyword": "Bus Hire Services for Kedarnath Trip",
        "heading": "Amruta Travels Bus Hire Services for Kedarnath Trip",
        "headingDescription": "If you’re planning a pilgrimage to Kedarnath, Amruta Travels offers exceptional bus hire services for a seamless and comfortable journey to this sacred destination. Our services ensure a hassle-free travel experience, allowing you to focus on your spiritual journey and exploration of Kedarnath’s breathtaking beauty. With a focus on comfort and reliability, we are here to make your Kedarnath trip memorable and stress-free.",
        "top": "Top Places to Visit in Kedarnath with Amruta Travels:",
        "topPlaces": [
            {
                "title": "1. Kedarnath Temple",
                "description": "The primary attraction, this ancient temple dedicated to Lord Shiva is known for its divine aura and architectural grandeur. It is one of the most sacred temples in Hinduism."
            },
            {
                "title": "2. Bhairav Nath Temple",
                "description": "Located a short distance from Kedarnath Temple, this temple is dedicated to Lord Bhairav, a fierce manifestation of Lord Shiva. It offers panoramic views of the surrounding mountains."
            },
            {
                "title": "3. Gaurikund",
                "description": "The base camp for the Kedarnath trek, Gaurikund is a significant pilgrimage site with a hot water spring and temple dedicated to Goddess Parvati."
            },
            {
                "title": "4. Vasuki Tal",
                "description": "A picturesque high-altitude lake situated about 6 km from Kedarnath Temple, Vasuki Tal is surrounded by snow-capped peaks and offers stunning views."
            },
            {
                "title": "5. Shankaracharya Samadhi",
                "description": "This site marks the place where Adi Shankaracharya, the revered philosopher and theologian, is believed to have attained samadhi (spiritual enlightenment)."
            },
            {
                "title": "6. Chorabari Tal",
                "description": "Also known as the Gandhi Sarovar, this glacial lake is located at an altitude of 3,900 meters and is a serene spot for reflection and nature lovers."
            },
            {
                "title": "7. Kedarnath Wildlife Sanctuary",
                "description": "This sanctuary is home to a diverse range of flora and fauna, including the Himalayan musk deer and the bharal (blue sheep). It offers opportunities for nature enthusiasts to explore the region's wildlife."
            },
            {
                "title": "8. Kalimath Temple",
                "description": "Situated in the nearby Kalimath village, this temple is dedicated to Goddess Kali and is a revered site for devotees seeking her blessings."
            },
            {
                "title": "9. Rudraprayag",
                "description": "Located at the confluence of the Alaknanda and Mandakini rivers, Rudraprayag is an important pilgrimage site and a gateway to Kedarnath."
            },
            {
                "title": "10. Triyuginarayan Temple",
                "description": "This ancient temple, located about 12 km from Kedarnath, is believed to be the site where Lord Shiva and Goddess Parvati were married. It is a significant site for devotees."
            }
        ],
     "services": [
        {
            "name": "Pune to Mahabaleshwar Bus Rental",
            "description": "Amruta Travels offers exceptional bus rental services from Pune to Mahabaleshwar tailored to your needs. Whether you’re organizing a family vacation, a school picnic, or a corporate outing, our services ensure a comfortable and enjoyable journey."
        },
        {
            "name": "Bus Hire from Pune to Mahabaleshwar for Picnic",
            "description": "Planning a picnic to Mahabaleshwar? Amruta Travels provides reliable bus hire services for a smooth and enjoyable trip. Our buses are equipped with comfortable seating and amenities, ensuring your picnic experience is unforgettable."
        },
        {
            "name": "Bus Rental Service Pune to Mahabaleshwar for School Picnic",
            "description": "For school picnics, Amruta Travels offers specialized bus rental services from Pune to Mahabaleshwar. Our buses ensure safety and comfort for students and staff, with experienced drivers and reliable services tailored for school trips."
        },
        {
            "name": "Pune to Mahabaleshwar Tour Bus Rental at Affordable Rates",
            "description": "Explore Mahabaleshwar with our affordable tour bus rental services. Amruta Travels provides cost-effective solutions without compromising on comfort or quality, making your tour experience both enjoyable and economical."
        },
        {
            "name": "Pune to Mahabaleshwar Family Trip Bus Hire",
            "description": "Planning a family trip to Mahabaleshwar? Amruta Travels offers dedicated bus hire services from Pune for family outings. Enjoy spacious, comfortable seating and a stress-free journey with your loved ones."
        },
        {
            "name": "Pune to Mahabaleshwar Weekend Trip Bus Rental",
            "description": "Make your weekend trip to Mahabaleshwar memorable with Amruta Travels. Our weekend trip bus rental services ensure a smooth ride from Pune, with flexible schedules and comfortable buses designed for a pleasant getaway."
        },
        {
            "name": "Pune to Mahabaleshwar Corporate Bus Hire",
            "description": "For corporate outings and team-building trips, Amruta Travels offers corporate bus hire services from Pune to Mahabaleshwar. Our professional services ensure a comfortable and efficient travel experience for your team."
        },
        {
            "name": "Pune to Mahabaleshwar Group Travel Bus Rental",
            "description": "Amruta Travels provides group travel bus rental services for trips from Pune to Mahabaleshwar. Our buses cater to various group sizes, ensuring everyone travels comfortably and enjoys the journey."
        },
        {
            "name": "AC Bus Hire Pune to Mahabaleshwar for Trip",
            "description": "For a comfortable journey, choose our AC bus hire services from Pune to Mahabaleshwar. Amruta Travels offers well-maintained air-conditioned buses to keep you cool and comfortable throughout your trip."
        },
        {
            "name": "Comfortable Bus from Pune to Mahabaleshwar for Picnic",
            "description": "Enjoy a relaxing picnic trip with Amruta Travels’ comfortable buses from Pune to Mahabaleshwar. Our buses are designed for comfort, providing ample space and amenities for a delightful picnic experience."
        },
        {
            "name": "25 Seater Bus Hire from Pune to Mahabaleshwar",
            "description": "Amruta Travels offers 25-seater bus hire services for trips from Pune to Mahabaleshwar. Ideal for intimate groups, our buses provide comfort and convenience for your journey."
        },
        {
            "name": "32 Seater Bus Rental Pune to Mahabaleshwar",
            "description": "For medium-sized groups, choose our 32-seater bus rental services. Amruta Travels ensures a spacious and comfortable ride from Pune to Mahabaleshwar, making your trip enjoyable and hassle-free."
        },
        {
            "name": "50 Seater Bus Hire from Pune to Mahabaleshwar",
            "description": "Amruta Travels offers 50-seater bus hire services for trips from Pune to Mahabaleshwar. Our large buses are perfect for accommodating bigger groups, ensuring a comfortable and enjoyable journey."
        },
        {
            "name": "Pune to Panchgani Bus Hire",
            "description": "In addition to Mahabaleshwar, we also offer bus hire services from Pune to Panchgani. Explore both hill stations with our reliable and comfortable bus rental options."
        },
        {
            "name": "Pune to Panchgani Bus On Rent",
            "description": "For a seamless trip to Panchgani, Amruta Travels provides bus on rent services. Enjoy the scenic beauty of Panchgani with our well-maintained buses, designed for a comfortable and pleasant ride."
        },
        {
            "name": "Amruta Travels Pune On Rent",
            "description": "For all your travel needs, Amruta Travels offers a range of bus rental services in Pune. From trips to Mahabaleshwar to Panchgani and beyond, we ensure a comfortable and enjoyable journey tailored to your requirements."
        }
    ],
    "tableData": [
        ["-Pune to Mahabaleshwar Bus Rental", "-Hire a Bus from Pune to Mahabaleshwar for Picnic"],
        ["-Bus Rental Service Pune to Mahabaleshwar for School Picnic", "-Pune to Mahabaleshwar Tour Bus Rental at Affordable Rates"],
        ["-Pune to Mahabaleshwar Family Trip Bus Hire", "-Pune to Mahabaleshwar Weekend Trip Bus Rental"],
        ["-Pune to Mahabaleshwar Corporate Bus Hire", "-Pune to Mahabaleshwar Group Travel Bus Rental"],
        ["-AC Bus Hire Pune to Mahabaleshwar for Trip", "-Comfortable Bus from Pune to Mahabaleshwar for Picnic"],
        ["-25 Seater Bus Hire from Pune to Mahabaleshwar", "-32 Seater Bus Rental Pune to Mahabaleshwar"],
        ["-50 Seater Bus Hire from Pune to Mahabaleshwar", "-Pune to Panchgani Bus Hire"],
        ["-Pune to Panchgani Bus On Rent", "-Amruta Travels Pune On Rent"]
    ],
    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Us for Pune to Mahabaleshwar Bus On Rent Service – Amruta Travels",
            "WhyChoosedescription": "Amruta Travels is dedicated to providing exceptional bus rental services for trips from Pune to Mahabaleshwar. Here’s why you should choose us for your journey:"
        },
        {
            "WhyChooseheading": "Comfort and Convenience:",
            "WhyChoosedescription": "Our fleet of buses is equipped with modern amenities, including comfortable seating, air conditioning, and ample legroom, ensuring a pleasant and relaxing journey to Mahabaleshwar."
        },
        {
            "WhyChooseheading": "Experienced Drivers:",
            "WhyChoosedescription": "Our professional drivers are well-trained and experienced in navigating the routes to Mahabaleshwar, ensuring a safe and smooth travel experience."
        },
        {
            "WhyChooseheading": "Affordable Rates:",
            "WhyChoosedescription": "We offer competitive pricing for our bus rental services, providing excellent value without compromising on comfort or quality."
        },
        {
            "WhyChooseheading": "Timely Service:",
            "WhyChoosedescription": "Punctuality is our priority. We adhere to strict schedules, ensuring that you arrive at your destination on time and make the most of your trip."
        },
        {
            "WhyChooseheading": "Customizable Itineraries:",
            "WhyChoosedescription": "Whether you’re planning a family trip, school picnic, or corporate outing, we offer flexible itineraries tailored to your needs and preferences."
        },
        {
            "WhyChooseheading": "24/7 Customer Support:",
            "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with bookings, address any queries, and provide support throughout your journey."
        },
        {
            "WhyChooseheading": "Clean and Well-Maintained Vehicles:",
            "WhyChoosedescription": "We ensure that all our buses are regularly cleaned and maintained to the highest standards, providing a hygienic and comfortable travel environment."
        },
        {
            "WhyChooseheading": "Safe Travel:",
            "WhyChoosedescription": "Safety is our top priority. Our buses are equipped with safety features, and our drivers follow all necessary protocols to ensure a secure journey."
        },
        {
            "WhyChooseheading": "Group Travel Solutions:",
            "WhyChoosedescription": "Whether you’re traveling with a small or large group, we have the right bus size to accommodate your needs, making group travel easy and enjoyable."
        },
        {
            "WhyChooseheading": "Positive Customer Feedback:",
            "WhyChoosedescription": "We pride ourselves on delivering exceptional service, and our satisfied customers are a testament to our commitment to excellence."
        }
    ]  
 
  
    



    };

  const faqData = [
    {
        "question": "What types of buses are available for rent from Pune to Mahabaleshwar?",
        "answer": "We offer a variety of buses, including 25-seater, 32-seater, and 50-seater options. Each bus is equipped with comfortable seating, air conditioning, and other amenities to ensure a pleasant journey."
    },
    {
        "question": "How do I book a bus for my trip from Pune to Mahabaleshwar?",
        "answer": "You can book a bus by contacting our customer support team via phone or email. You can also visit our website and use our online booking system to reserve your bus."
    },
    {
        "question": "Are the buses equipped with air conditioning?",
        "answer": "Yes, all our buses are equipped with air conditioning to ensure a comfortable ride, especially during warmer months."
    },
    {
        "question": "What are the rates for renting a bus from Pune to Mahabaleshwar?",
        "answer": "Our rates are competitive and depend on factors such as bus type, trip duration, and the number of passengers. For an accurate quote, please contact our customer support team with your trip details."
    },
    {
        "question": "Can I customize the itinerary for my trip?",
        "answer": "Yes, we offer customizable itineraries to suit your schedule and preferences. Our team will work with you to plan a trip that meets your needs."
    },
    {
        "question": "Are there any additional charges I should be aware of?",
        "answer": "Additional charges may apply for extra services or deviations from the agreed itinerary. Our customer support team will provide a detailed breakdown of costs before finalizing your booking."
    },
    {
        "question": "Is it possible to cancel or reschedule my booking?",
        "answer": "Yes, cancellations and rescheduling are possible, but they may be subject to certain terms and conditions. Please refer to our cancellation policy or contact our customer support team for more information."
    },
    {
        "question": "How do I ensure the safety of my group during the trip?",
        "answer": "Our buses are equipped with safety features, and our drivers follow strict safety protocols. Additionally, we conduct regular maintenance checks to ensure the vehicle is in top condition."
    },
    {
        "question": "What should I do if I have special requirements or requests?",
        "answer": "Please inform us of any special requirements or requests at the time of booking. We will do our best to accommodate your needs and ensure a comfortable journey."
    },
    {
        "question": "Who can I contact if I have further questions or need assistance?",
        "answer": "For any further questions or assistance, please contact our customer support team. We are available 24/7 to help with your inquiries and ensure a smooth booking experience."
    }
];

const testimonials = [
    {
        "name": "Mrs. Anjali Mehta",
        "text": "Our family trip to Mahabaleshwar was made unforgettable thanks to Amruta Travels. We rented a 32-seater bus for our group, and the service was impeccable. The bus was clean, comfortable, and equipped with all the necessary amenities. The driver was courteous and navigated the route smoothly. The punctuality and professionalism of Amruta Travels truly made our journey stress-free. Highly recommended for anyone planning a trip to Mahabaleshwar!"
    },
    {
        "name": "Mr. Rakesh Deshmukh",
        "text": "We recently used Amruta Travels for a school picnic to Mahabaleshwar, and we were thoroughly impressed. The 50-seater bus we hired was perfect for our large group, offering ample space and comfort. The service was excellent from start to finish, with friendly staff and a well-maintained vehicle. The kids and teachers had a wonderful time, and the entire trip went off without a hitch. We will definitely be using Amruta Travels for our future outings."
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
        heading: "Tempo Traveller On Rent in Pune contact Number:",
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
export default PuneTOMahabaleshwar;