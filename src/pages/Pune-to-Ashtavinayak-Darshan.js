
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  RentTOAshtavinayak(){

  const cardData = 
    {
        "keyword": "Bus Hire Services for Pune to Ashtavinayak Darshan",
        "heading": "Amruta Travels Pune-to-Ashtavinayak-Darshan Bus Rental Services",
        "headingDescription": "Amruta Travels is your ideal partner for bus rental services for the Pune to Ashtavinayak Darshan pilgrimage. Ashtavinayak refers to the eight revered Ganesh temples situated in and around Pune, making this journey a significant spiritual experience for devotees. We offer comfortable, reliable, and affordable bus rental options to ensure your pilgrimage is seamless and enjoyable. With our extensive fleet and professional service, Amruta Travels makes your journey to these sacred temples smooth and hassle-free.",
        "top": "Top Places to Visit on the Pune to Ashtavinayak Darshan Tour:",
        "topPlaces": [
            {
                "title": "1. Mayureshwar Temple (Morgaon)",
                "description": "The starting point of the Ashtavinayak pilgrimage, this temple is a major spiritual center and a must-visit for devotees."
            },
            {
                "title": "2. Chintamani Temple (Theur)",
                "description": "Known for its divine atmosphere, this temple provides a peaceful experience and spiritual solace to visitors."
            },
            {
                "title": "3. Girijatmaj Temple (Lonavala)",
                "description": "Set in the picturesque Lonavala, this temple offers stunning views and a tranquil environment for worship and reflection."
            },
            {
                "title": "4. Vighneshwar Temple (Ozar)",
                "description": "A prominent temple known for its unique idol and religious significance, it attracts numerous devotees throughout the year."
            },
            {
                "title": "5. Siddhivinayak Temple (Siddhatek)",
                "description": "This temple, located on the riverbanks, provides a serene and spiritual experience for visitors seeking divine blessings."
            },
            {
                "title": "6. Ballaleshwar Temple (Pali)",
                "description": "A significant temple in the pilgrimage circuit, known for its historical and religious importance."
            },
            {
                "title": "7. Mahaganapati Temple (Ranjangaon)",
                "description": "This temple is renowned for its large idol and the divine blessings it is believed to offer."
            },
            {
                "title": "8. Varadvinayak Temple (Mahad)",
                "description": "Famous for its architectural beauty and the powerful idol, it is a highlight of the Ashtavinayak tour."
            },
            {
                "title": "9. Pune City Tour",
                "description": "Before or after your Ashtavinayak Darshan, explore Pune’s historic sites, including Shaniwarwada and Aga Khan Palace."
            },
            {
                "title": "10. Lonavala Hill Station",
                "description": "Enjoy a brief visit to Lonavala’s scenic spots, including its famous lakes and viewpoints, while en route to the Girijatmaj temple."
            }
        ],
        "services": [
            {
                "name": "Pune to Ashtavinayak Bus Tour Package",
                "description": "Embark on a spiritual journey with our Pune to Ashtavinayak bus tour package. This comprehensive package offers a comfortable and convenient way to visit the revered Ashtavinayak temples. Enjoy a well-organized itinerary that includes guided tours and accommodations to ensure a fulfilling experience."
            },
            {
                "name": "Pune to Ashtavinayak Bus Tour Package with Amruta Travels",
                "description": "Choose Amruta Travels for your Pune to Ashtavinayak bus tour package and experience unparalleled comfort and service. Our package includes everything you need for a seamless and memorable pilgrimage. From well-maintained buses to knowledgeable guides, we ensure your journey is smooth and enjoyable."
            },
            {
                "name": "Cheapest Ashtavinayak Tour from Pune",
                "description": "Looking for an affordable way to visit the Ashtavinayak temples? Our cheapest Ashtavinayak tour from Pune provides an economical option without compromising on quality. Enjoy a spiritually enriching experience at a budget-friendly price."
            },
            {
                "name": "Ashtavinayak Tour from Pune by Bus Package",
                "description": "Our Ashtavinayak tour from Pune by bus package is designed to offer convenience and comfort. Travel in style and visit all eight Ashtavinayak temples with ease. The package includes transportation, accommodation, and guided tours to make your pilgrimage hassle-free."
            },
            {
                "name": "Pune Ashtavinayak Darshan Tour Package",
                "description": "The Pune Ashtavinayak Darshan tour package is perfect for those seeking a comprehensive darshan experience. Visit the sacred Ashtavinayak temples with our expertly crafted package that covers all your travel needs, ensuring a spiritually fulfilling journey."
            },
            {
                "name": "Ashtavinayak Darshan from Pune in 2 Days",
                "description": "Our Ashtavinayak darshan from Pune in 2 days package is ideal for those with a tight schedule. This express tour ensures you visit all eight Ashtavinayak temples within two days, offering a quick yet immersive spiritual experience."
            },
            {
                "name": "Pune to Ashtavinayak Darshan AC Sleeper Bus on Rent",
                "description": "For added comfort, consider our Pune to Ashtavinayak Darshan AC sleeper bus on rent. Enjoy a luxurious and restful journey with air-conditioned sleeper buses designed for your convenience and relaxation during the trip."
            },
            {
                "name": "Pune to Ashtavinayak Darshan Bus Booking",
                "description": "Secure your spot with our Pune to Ashtavinayak Darshan bus booking service. We offer a range of options to suit your preferences and ensure a smooth and enjoyable pilgrimage to the Ashtavinayak temples."
            },
            {
                "name": "Pune to Ashtavinayak Ganpati Darshan Package",
                "description": "Experience the divine Ashtavinayak Ganpati darshan with our specially designed package from Pune. This package includes all essential travel arrangements, allowing you to focus on your spiritual journey."
            },
            {
                "name": "Best Ashtavinayak Tour from Pune with Amruta Travels",
                "description": "For the best Ashtavinayak tour from Pune, look no further than Amruta Travels. Our expertly curated tours offer superior comfort, exceptional service, and a well-organized itinerary to make your pilgrimage unforgettable."
            },
            {
                "name": "Ashtavinayak Yatra from Pune with Amruta Travels",
                "description": "Join us for an enriching Ashtavinayak yatra from Pune with Amruta Travels. Our comprehensive tour package ensures a smooth and spiritually fulfilling journey to all eight Ashtavinayak temples, with all travel logistics taken care of."
            },
            {
                "name": "Pune to Ashtavinayak Darshan Mini Bus on Rent",
                "description": "For smaller groups, our Pune to Ashtavinayak Darshan mini bus on rent offers a more personalized travel experience. Enjoy a comfortable and private journey with all the essential amenities to make your pilgrimage enjoyable."
            },
            {
                "name": "Amruta Travels Pune on Rent",
                "description": "For all your travel needs, including the Pune to Ashtavinayak tour, Amruta Travels offers top-quality rental services. From luxury buses to mini buses, we provide a range of options to ensure your journey is comfortable and memorable."
            }
        ],
        "tableData": [
            ["-Pune to Ashtavinayak Bus Tour Package With Amruta Travels", "-Ashtavinayak Tour From Pune by Bus Package"],
            ["-Ashtavinayak Darshan from Pune in 2 Days", "-Pune to Ashtavinayak Darshan Bus Booking"],
            ["-Best Ashtavinayak Tour from Pune Amruta Travels", "-Pune to Ashtavinayak Darshan Mini Bus On Rent"],
            ["-Amruta Travels Pune On Rent"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Comfort and Reliability:",
                "WhyChoosedescription": "Amruta Travels provides comfortable and well-maintained buses for your Ashtavinayak Darshan journey. Our vehicles are equipped with modern amenities, ensuring a pleasant and reliable travel experience throughout the pilgrimage."
            },
            {
                "WhyChooseheading": "Experienced Drivers:",
                "WhyChoosedescription": "Our experienced drivers are well-versed with the routes to the Ashtavinayak temples. They are trained to provide safe and smooth transportation, ensuring timely arrival at each temple."
            },
            {
                "WhyChooseheading": "Flexible Packages:",
                "WhyChoosedescription": "We offer flexible bus rental packages tailored to your specific needs. Whether you need a day trip or a multi-day pilgrimage tour, we can customize our services to fit your itinerary and budget."
            },
            {
                "WhyChooseheading": "Competitive Pricing:",
                "WhyChoosedescription": "Amruta Travels offers competitive pricing for bus rentals. We provide cost-effective solutions without compromising on the quality of service, making our bus rentals an excellent choice for your pilgrimage."
            },
            {
                "WhyChooseheading": "High Safety Standards:",
                "WhyChoosedescription": "Safety is our top priority. Our buses undergo regular maintenance checks and adhere to strict safety protocols. Our drivers follow safe driving practices to ensure a secure journey for all passengers."
            },
            {
                "WhyChooseheading": "24/7 Customer Support:",
                "WhyChoosedescription": "Our customer support team is available around the clock to assist with any inquiries, bookings, or issues. We are committed to providing exceptional service and ensuring your needs are met promptly."
            },
            {
                "WhyChooseheading": "Comfortable Amenities:",
                "WhyChoosedescription": "Our buses are equipped with comfortable seating, air conditioning, and other amenities to enhance your travel experience. We prioritize your comfort during the journey to ensure a pleasant pilgrimage."
            },
            {
                "WhyChooseheading": "Timely Service:",
                "WhyChoosedescription": "We understand the importance of adhering to a schedule, especially during a pilgrimage. Our buses are punctual, ensuring that you reach each temple on time and make the most of your spiritual journey."
            },
            {
                "WhyChooseheading": "Customizable Itineraries:",
                "WhyChoosedescription": "We offer customizable itineraries for the Ashtavinayak Darshan. You can adjust the schedule and visit the temples at your preferred pace, ensuring a personalized and fulfilling experience."
            },
            {
                "WhyChooseheading": "Positive Reviews:",
                "WhyChoosedescription": "Our previous clients have praised our services for their reliability, comfort, and professionalism. We are committed to maintaining high standards and ensuring a memorable pilgrimage for every traveler."
            }
        ]


    };

    const faqData = [
        {
            "question": "How do I book a bus for the Pune to Ashtavinayak Darshan?",
            "answer": "You can book a bus through our website or by contacting our customer support team. We offer a straightforward booking process and can assist with all your queries."
        },
        {
            "question": "What types of buses are available for the Ashtavinayak Darshan?",
            "answer": "We offer a range of buses, including 18-seater minibuses, 32-seater deluxe buses, and 50-seater luxury coaches, to accommodate different group sizes and preferences."
        },
        {
            "question": "What amenities are provided on the bus?",
            "answer": "Our buses come with comfortable seating, air conditioning, and entertainment systems to ensure a pleasant journey. We also provide clean and well-maintained facilities for your convenience."
        },
        {
            "question": "Can the bus rental package be customized?",
            "answer": "Yes, we offer customizable packages to meet your specific needs. You can adjust the itinerary, add extra stops, and modify the schedule according to your preferences."
        },
        {
            "question": "What is the pricing for the bus rental service?",
            "answer": "Pricing depends on the type of bus, duration of the hire, and any additional services required. Contact us for a detailed quote and to discuss your specific requirements."
        },
        {
            "question": "Are your drivers experienced and knowledgeable?",
            "answer": "Yes, our drivers are highly experienced and familiar with the routes to the Ashtavinayak temples. They are trained to ensure a safe and smooth journey for all passengers."
        },
        {
            "question": "How do you ensure the safety of passengers?",
            "answer": "We follow strict safety protocols and conduct regular maintenance checks on our buses. Our drivers adhere to safe driving practices to ensure a secure journey."
        },
        {
            "question": "Can I make changes to my booking?",
            "answer": "Yes, you can make changes to your booking by contacting us in advance. We will do our best to accommodate modifications based on availability and your needs."
        },
        {
            "question": "What is your cancellation policy?",
            "answer": "Our cancellation policy is flexible. If you need to cancel or reschedule your booking, please inform us as soon as possible. Cancellation terms may vary depending on the package and booking conditions."
        },
        {
            "question": "Do you offer packages for special events or large groups?",
            "answer": "Yes, we offer tailored packages for special events and large groups. Whether it’s a corporate trip, family pilgrimage, or group tour, we can customize our services to suit your needs."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mr. Ravi Sharma",
            "text": "Our recent Ashtavinayak Darshan trip with Amruta Travels was a truly wonderful experience. The bus provided was comfortable and well-maintained, and our driver was very professional and knowledgeable about the route. We appreciated the timely service and the seamless travel experience. The journey was smooth, and we were able to visit all the temples without any hassle. Thank you, Amruta Travels, for making our pilgrimage both comfortable and memorable!"
        },
        {
            "name": "Mrs. Anjali Deshmukh",
            "text": "Amruta Travels exceeded our expectations with their bus rental service for our Ashtavinayak Darshan. The bus was clean, with excellent amenities that made our journey very pleasant. Our driver was courteous and ensured we reached each temple on time. The whole process, from booking to the trip, was handled efficiently. We had a stress-free and enjoyable pilgrimage, thanks to Amruta Travels. Highly recommended for anyone planning a similar journey!"
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
export default RentTOAshtavinayak;