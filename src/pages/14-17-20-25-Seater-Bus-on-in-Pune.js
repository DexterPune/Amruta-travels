
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Seater1417(){

  
  const cardData = 
    {
      keyword: ' 14, 17, 20, and 25-Seater Bus Rental in Pune',
      heading: ' Amruta Travels: Amruta Travels: 14, 17, 20, and 25-Seater Bus Rental in Pune',

      headingDescription: 'When planning group travel in Pune, Amruta Travels offers a range of bus options to suit different needs. Our 14, 17, 20, and 25-seater buses are perfect for various occasions, from corporate events to family outings and more. Here’s why our buses are the ideal choice for your travel needs:',

      top:"Top Features of Our 14, 17, 20, and 25-Seater Buses :",

       topPlaces : [
        {
            "title": "Flexible Seating Arrangements",
            "description": "Our fleet includes 14, 17, 20, and 25-seater buses, providing flexibility to accommodate different group sizes. Each bus is designed with comfortable seating arrangements that ensure ample space and a pleasant travel experience."
        },
        {
            "title": "Air-Conditioned Comfort",
            "description": "Travel in comfort regardless of the weather. All our buses are equipped with advanced air-conditioning systems to maintain a cool and comfortable environment, making your journey enjoyable even during the hottest days."
        },
        {
            "title": "Reclining Seats",
            "description": "Comfort is a priority. Our buses feature reclining seats that allow passengers to adjust their seating positions for optimal relaxation. Whether it’s a short ride or a longer journey, you’ll find a comfortable spot in our buses."
        },
        {
            "title": "Modern Entertainment Systems",
            "description": "To keep passengers entertained, our buses are equipped with modern entertainment systems, including LED TVs and high-quality sound systems. Enjoy movies, music, or other forms of entertainment throughout the trip."
        },
        {
            "title": "Ample Luggage Space",
            "description": "With different sizes of buses, you can expect ample luggage space to accommodate all your bags and belongings. Our buses come with spacious compartments designed to ensure your luggage is safely and conveniently stored."
        },
        {
            "title": "Advanced Safety Features",
            "description": "Safety is our top priority. Our buses are fitted with essential safety features such as seat belts, emergency exits, fire extinguishers, and first-aid kits. Additionally, GPS tracking ensures real-time monitoring of your journey."
        },
        {
            "title": "Skilled and Professional Drivers",
            "description": "Our buses are driven by experienced and professional drivers who are knowledgeable about local routes and outstation destinations. Their expertise ensures a smooth, safe, and timely travel experience."
        },
        {
            "title": "Well-Maintained Vehicles",
            "description": "We take pride in the condition of our fleet. All our 14, 17, 20, and 25-seater buses undergo regular maintenance and inspections to ensure they are in excellent working order. We also maintain high standards of cleanliness and hygiene."
        },
        {
            "title": "Competitive Pricing",
            "description": "Amruta Travels offers competitive pricing for our bus rentals. Our transparent pricing structure means you get great value for your money without any hidden costs. We strive to provide cost-effective solutions for your group travel needs."
        },
        {
            "title": "Customizable Solutions",
            "description": "We understand that each trip is unique. Our rental services are flexible and customizable to meet your specific requirements. Whether you need a bus for a short trip, an extended journey, or a special event, we can tailor our services to fit your needs and budget."
        }
    ],    

        "services": [
        {
            "name": "14, 17, 20, 25 Seater Bus Hire in Pune:",
            "description": "Amruta Travels offers flexible bus rental solutions in Pune with options ranging from 14-seater to 25-seater buses. Whether you need a bus for a small group or a larger gathering, our fleet is equipped to meet your requirements with comfort and style."
        },
        {
            "name": "Pune to Shirdi 14, 17, 20, 25 Seater Bus on Rent:",
            "description": "Travel to the holy town of Shirdi in comfort with our 14, 17, 20, and 25-seater buses. Our rental services ensure a pleasant journey with professional drivers, ample luggage space, and modern amenities for your pilgrimage or sightseeing trip."
        },
        {
            "name": "Pune to Mahabaleshwar 14, 17, 20, 25 Seater Bus on Rent:",
            "description": "Explore the scenic beauty of Mahabaleshwar with our 14, 17, 20, and 25-seater buses. Perfect for family trips, corporate outings, or group tours, our buses offer a comfortable and enjoyable travel experience to this popular hill station."
        },
        {
            "name": "Pune to Goa 14, 17, 20, 25 Seater Bus on Rent:",
            "description": "Planning a trip to the beaches of Goa? Choose our 14, 17, 20, and 25-seater bus rental services for a hassle-free journey. Enjoy the coastal views and vibrant culture with our well-maintained buses that provide comfort and convenience for your travel needs."
        },
        {
            "name": "Pune to Mumbai 14, 17, 20, 25 Seater Bus on Rent:",
            "description": "For your trips between Pune and Mumbai, our 14, 17, 20, and 25-seater buses offer the perfect solution. Ideal for corporate events, group travel, or family visits, our buses ensure a smooth and enjoyable journey between these two major cities."
        },
        {
            "name": "Pune to Ashtavinayak Darshan 14, 17, 20, 25 Seater Bus on Rent:",
            "description": "Embark on a spiritual journey to the Ashtavinayak temples with our 14, 17, 20, and 25-seater buses. Our rental service provides a comfortable and convenient way to visit these sacred sites, complete with amenities to enhance your pilgrimage experience."
        },
        {
            "name": "Pune to 5 Jyotirlinga 14, 17, 20, 25 Seater Bus on Rent:",
            "description": "Travel to the revered Jyotirlinga shrines with our 14, 17, 20, and 25-seater buses. Perfect for large groups or religious tours, our buses offer a comfortable and efficient way to visit these significant temples dedicated to Lord Shiva."
        },
        {
            "name": "Pune to 5 Sadeteen Shaktipeeth 14, 17, 20, 25 Seater Bus on Rent:",
            "description": "Visit the sacred Shaktipeeths with ease by renting one of our 14, 17, 20, or 25-seater buses. Our rental service ensures a comfortable and secure journey to these important pilgrimage sites, making your spiritual trip memorable and hassle-free."
        },
        {
            "name": "Pune to Aurangabad 14, 17, 20, 25 Seater Bus on Rent:",
            "description": "Explore Aurangabad and its historical wonders with our 14, 17, 20, and 25-seater buses. Whether you’re visiting the Ajanta and Ellora Caves or other attractions, our buses provide the perfect solution for group travel, ensuring comfort and convenience throughout your trip."
        },
        {
            "name": "14 17 20 25 Seater Bus on Rent in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient 14, 17, 20, and 25-seater bus rentals in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],
    "tableData": [
        ["-14, 17, 20, 25 Seater Bus Hire in Pune", "-Pune to Shirdi 14, 17, 20, 25 Seater Bus on Rent"],
        ["-Pune to Mahabaleshwar 14, 17, 20, 25 Seater Bus on Rent", "-Pune to Goa 14, 17, 20, 25 Seater Bus on Rent"],
        ["-Pune to Mumbai 14, 17, 20, 25 Seater Bus on Rent", "-Pune to Ashtavinayak Darshan 14, 17, 20, 25 Seater Bus on Rent"],
        ["-Pune to 5 Jyotirlinga 14, 17, 20, 25 Seater Bus on Rent", "-Pune to 5 Sadeteen Shaktipeeth 14, 17, 20, 25 Seater Bus on Rent"],
        ["-Pune to Aurangabad 14, 17, 20, 25 Seater Bus on Rent"]
    ],
    
    
    

    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for 14, 17, 20, and 25 Seater Bus Rentals in Pune?",
            "WhyChoosedescription": "When it comes to renting a bus in Pune, Amruta Travels stands out for its reliability, comfort, and exceptional service. Here’s why:"
        },
        {
            "WhyChooseheading": "Diverse Fleet of Buses:",
            "WhyChoosedescription": "We offer a variety of bus sizes, including 14, 17, 20, and 25-seater options. This ensures we can cater to different group sizes and needs, from small family gatherings to large corporate events."
        },
        {
            "WhyChooseheading": "Comfort and Quality:",
            "WhyChoosedescription": "Our buses are equipped with comfortable seating, air-conditioning, and modern amenities. We prioritize passenger comfort to ensure an enjoyable and stress-free journey."
        },
        {
            "WhyChooseheading": "Professional Drivers:",
            "WhyChoosedescription": "Our experienced and well-trained drivers provide safe and reliable transportation. They are familiar with local routes and committed to ensuring a smooth and timely journey."
        },
        {
            "WhyChooseheading": "Well-Maintained Vehicles:",
            "WhyChoosedescription": "We take pride in maintaining our fleet. Each bus undergoes regular inspections and servicing to ensure it’s in excellent condition, minimizing the risk of breakdowns."
        },
        {
            "WhyChooseheading": "Flexible Booking Options:",
            "WhyChoosedescription": "We offer flexible booking options to suit your schedule and needs. Whether you need a bus for a few hours or several days, we can accommodate your request with ease."
        },
        {
            "WhyChooseheading": "Affordable Pricing:",
            "WhyChoosedescription": "Our competitive rates offer excellent value for money. We provide transparent pricing with no hidden fees, so you know exactly what to expect."
        },
        {
            "WhyChooseheading": "Customizable Travel Solutions:",
            "WhyChoosedescription": "We tailor our services to fit your specific requirements. Whether for a corporate event, family gathering, school trip, or any other occasion, we customize our solutions to meet your needs."
        },
        {
            "WhyChooseheading": "Excellent Customer Service:",
            "WhyChoosedescription": "Our dedicated customer service team is available to assist you throughout the booking process and beyond. We’re here to address any questions or concerns you might have."
        },
        {
            "WhyChooseheading": "Timely and Reliable:",
            "WhyChoosedescription": "Punctuality is crucial for group travel. We ensure our buses adhere to strict schedules, so you can rely on us to be on time."
        },
        {
            "WhyChooseheading": "Hassle-Free Experience:",
            "WhyChoosedescription": "From booking to the end of your journey, we strive to make the entire process as smooth and hassle-free as possible. Our goal is to provide a seamless travel experience for you and your group."
        }
    ]    };

    
    
    const faqData = [
        {
            "question": "What types of buses do you offer for rent?",
            "answer": "We offer a range of buses, including 14-seater, 17-seater, 20-seater, and 25-seater options. Each bus is equipped with comfortable seating and air-conditioning."
        },
        {
            "question": "How can I book a bus with Amruta Travels?",
            "answer": "You can book a bus by contacting us via phone, email, or through our online booking form. Provide details such as your travel dates, pick-up and drop-off locations, and any special requirements."
        },
        {
            "question": "Are there any additional costs I should be aware of?",
            "answer": "Our pricing is transparent with no hidden fees. However, additional charges may apply for extra services or extended travel hours. We will provide a detailed quote before finalizing your booking."
        },
        {
            "question": "What is your cancellation policy?",
            "answer": "Our cancellation policy varies based on how far in advance you cancel. Generally, cancellations made well in advance incur a nominal fee, while last-minute cancellations may involve higher charges. Please contact our customer service for specifics."
        },
        {
            "question": "Can I request specific features or amenities?",
            "answer": "Yes, you can request specific features or amenities based on availability. We offer various options to cater to different needs, including luxury and standard models."
        },
        {
            "question": "Are the drivers experienced and licensed?",
            "answer": "All our drivers are experienced, professionally trained, and hold valid licenses. They are familiar with local routes and committed to ensuring a safe and comfortable journey."
        },
        {
            "question": "Can I make changes to my booking after it is confirmed?",
            "answer": "Yes, changes can be made to your booking, subject to availability and any applicable fees. Please contact our customer service team as soon as possible to discuss modifications."
        },
        {
            "question": "What should I do if I need assistance during my journey?",
            "answer": "If you need assistance during your journey, please contact the driver or our customer service team immediately. We are dedicated to addressing any issues promptly."
        },
        {
            "question": "How far in advance should I book a bus?",
            "answer": "To ensure availability and secure your preferred bus, we recommend booking as early as possible. For peak seasons or special events, early booking is advisable to avoid any last-minute issues."
        },
        {
            "question": "Are there any restrictions on luggage or other items?",
            "answer": "There are standard luggage allowances, but we can accommodate additional baggage or special items upon request. Please inform us of any specific needs when making your booking."
        }
    ];
    
    
    
    
    
    const testimonials = [
        {
            "name": "Mr. Ravi S",
            "text": "I recently booked a 25-seater bus from Amruta Travels for our family reunion, and I couldn't be more satisfied with the service. From the moment we contacted them, their team was incredibly helpful and accommodating. The bus was spacious, clean, and comfortable, making our journey enjoyable. The driver was professional and friendly, ensuring we arrived at our destination on time and safely. I highly recommend Amruta Travels for anyone looking for reliable and top-notch bus rental services in Pune."
        },
        {
            "name": "Miss Priya M",
            "text": "Our company needed a 20-seater bus for a corporate event, and Amruta Travels delivered beyond expectations. The booking process was smooth, and the staff was very responsive to our needs. The bus itself was modern and well-maintained, with all the amenities we needed for a comfortable ride. The driver was punctual and handled the route efficiently, allowing us to focus on the event. If you're looking for dependable and high-quality bus rentals in Pune, Amruta Travels is the way to go!"
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
        heading: "14 17 20 25 Seater Bus on in Pune Contact Number",
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
  <title>14, 17, 20, 25 Seater Bus on Rent in Pune | Contact: +91 8421333435 | Amruta Travel </title>
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
    <img src='\img\Keyword Based Image\Keyword Based Image-51.jpg' alt='img'/>
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

{/* <table className="table table-responsive Border-key">
  <tbody className=' Border-key'>
    {cardData.tableData.map((row, rowIndex) => (
      <tr className='Border-key' key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex} className=' Border-key' >{cell}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table> */}
    
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
      <h3 className='Colo'>Frequently Asked Questions (FAQs) About 14, 17, 20, and 25 Seater Bus Rentals in Pune:</h3>
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
export default Seater1417;