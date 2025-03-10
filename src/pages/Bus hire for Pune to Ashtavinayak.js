
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneTOAshtavinayak(){

  const cardData = 
    {
        "keyword": "Bus Hire  for Pune to Ashtavinayak ",
        "heading": "Amruta Travels: Bus Hire  for Pune to Ashtavinayak",
        "headingDescription": "Amruta Travels offers exceptional bus hire services for your journey from Pune to Ashtavinayak. This revered pilgrimage circuit in Maharashtra is dedicated to the eight sacred Ganesh temples, each known for its unique significance and divine presence. Our reliable bus rental service ensures a comfortable and seamless travel experience as you embark on this sacred journey.",
        "top": "Top Places to Visit in Ashtavinayak with Amruta Travels:",
        "topPlaces": [
            {
                "title": "1. Siddhivinayak Temple (Siddhatek)",
                "description": "Located in Siddhatek, this temple is dedicated to Lord Ganesha as Siddhivinayak. It is renowned for its unique idol and significant historical importance."
            },
            {
                "title": "2. Ballaleshwar Temple (Ballalwadi)",
                "description": "Situated in Ballalwadi, this temple is dedicated to Lord Ganesha in his form as Ballaleshwar. It is a popular site for devotees due to its historical and spiritual significance."
            },
            {
                "title": "3. Varadvinayak Temple (Mahad)",
                "description": "Located in Mahad, Varadvinayak Temple is known for its unique Ganesh idol, which is considered to grant wishes and provide blessings to its devotees."
            },
            {
                "title": "4. Chintamani Temple (Theur)",
                "description": "The Chintamani Temple in Theur is famous for its deity Chintamani Ganesh, believed to remove obstacles and fulfill desires."
            },
            {
                "title": "5. Girijatmaj Temple (Lonavala)",
                "description": "Situated in Lonavala, this temple is dedicated to Ganesh in his form as Girijatmaj, and it is renowned for its beautiful surroundings and peaceful ambiance."
            },
            {
                "title": "6. Vighneshwar Temple (Ozar)",
                "description": "The Vighneshwar Temple in Ozar is dedicated to Lord Ganesh as Vighneshwar, known for its historical significance and the spiritual atmosphere it offers."
            },
            {
                "title": "7. Mahaganapati Temple (Ranjangaon)",
                "description": "Located in Ranjangaon, this temple is dedicated to Lord Ganesh as Mahaganapati, revered for its grandeur and the divine aura it exudes."
            },
            {
                "title": "8. Yeshvantganapati Temple (Khopoli)",
                "description": "The Yeshvantganapati Temple in Khopoli is known for its serene environment and is a significant part of the Ashtavinayak pilgrimage."
            },
            {
                "title": "9. Ranjangaon Ganpati",
                "description": "This temple is situated in Ranjangaon and is dedicated to Mahaganapati, the deity known for removing obstacles and granting blessings to devotees."
            },
            {
                "title": "10. Chintamani Ganapati Temple",
                "description": "Located in Theur, this temple is highly revered and visited by devotees seeking spiritual solace and blessings from Lord Ganesh."
            }
        ],
        "services": [
            {
                "name": "Ashtavinayak Tour from Pune Bus Package",
                "description": "Experience the sacred Ashtavinayak tour from Pune with our comprehensive bus package. This all-inclusive package covers all eight Ashtavinayak temples, offering comfortable transportation and a well-organized itinerary to make your pilgrimage smooth and enjoyable."
            },
            {
                "name": "Ashtavinayak Tour From Pune Bus Package",
                "description": "Our Ashtavinayak tour from Pune bus package provides a convenient and comfortable way to visit the revered Ashtavinayak temples. Enjoy a hassle-free journey with our well-maintained buses and expert guides, ensuring a spiritually enriching experience."
            },
            {
                "name": "Ashtavinayak Darshan 32 Seater Bus Hire Pune",
                "description": "For small to medium-sized groups, our 32-seater bus hire for Ashtavinayak Darshan in Pune is an excellent choice. These buses offer ample space and comfort, making your visit to the Ashtavinayak temples enjoyable and relaxed."
            },
            {
                "name": "Pune to Ranjangaon Ganpati Darshan Bus on Rent",
                "description": "Traveling from Pune to Ranjangaon Ganpati? Our bus rental service provides comfortable and reliable transportation for your Ganpati darshan. Enjoy a smooth journey to this significant shrine with our dedicated bus services."
            },
            {
                "name": "Bus Hire for Pune to Ashtavinayak Tour",
                "description": "Our bus hire service for Pune to Ashtavinayak tour ensures a comfortable and well-organized pilgrimage. Choose from a variety of bus options to suit your group size and preferences, and experience a seamless trip to the Ashtavinayak temples."
            },
            {
                "name": "Best Ashtavinayak Tour from Pune Bus Service",
                "description": "For the best Ashtavinayak tour from Pune, our bus service stands out with top-notch amenities and exceptional customer service. Our buses are designed for comfort and convenience, ensuring a memorable and fulfilling pilgrimage to the Ashtavinayak temples."
            },
            {
                "name": "32, 35, 40 Seater Bus Hire for Ashtavinayak",
                "description": "We offer flexible bus hire options for your Ashtavinayak tour, including 32, 35, and 40-seater buses. Choose the size that best fits your group and enjoy a comfortable journey to all eight Ashtavinayak temples with our well-equipped vehicles."
            },
            {
                "name": "Volvo Bus for Ashtavinayak Darshan",
                "description": "Experience luxury travel with our Volvo bus for Ashtavinayak Darshan. Our premium Volvo buses offer superior comfort and amenities, making your pilgrimage to the Ashtavinayak temples both relaxing and enjoyable."
            },
            {
                "name": "45 and 50 Seater Bus on Rent for Ashtavinayak Darshan",
                "description": "For a comfortable and spacious journey to the Ashtavinayak temples, consider our 45 and 50-seater bus rentals. These buses are ideal for large groups, offering ample space and modern amenities to ensure a pleasant pilgrimage experience."
            },
            {
                "name": "Pune to Morgaon Bus Hire on Rent",
                "description": "Travel from Pune to Morgaon Ganpati with ease using our bus hire service. Our buses are well-maintained and equipped to provide a comfortable and reliable transportation solution for your visit to this sacred Ganpati temple."
            },
            {
                "name": "Pune to Siddhatek Ganpati Bus on Rent",
                "description": "Experience a smooth journey from Pune to Siddhatek Ganpati with our dedicated bus rental service. Our comfortable and reliable buses ensure a hassle-free trip to this important Ganpati shrine."
            },
            {
                "name": "Pune to Pali Ganpati Bus on Hire",
                "description": "For those visiting Pali Ganpati, our bus hire service from Pune offers a convenient and comfortable travel option. Enjoy a stress-free journey with our well-maintained buses designed to enhance your pilgrimage experience."
            },
            {
                "name": "Pune to Mahad Ganpati Bus on Hire",
                "description": "Our bus rental service for the Pune to Mahad Ganpati trip provides a reliable and comfortable way to reach this revered temple. Choose our service for a smooth and enjoyable journey to Mahad Ganpati."
            },
            {
                "name": "Pune to Theur Bus Hire",
                "description": "Travel from Pune to Theur Ganpati with our efficient bus hire service. Our buses are equipped with all the necessary amenities to ensure a comfortable and pleasant trip to this significant Ganpati temple."
            },
            {
                "name": "Pune to Lenyadri Ganpati Bus on Rent",
                "description": "Explore Lenyadri Ganpati with our dedicated bus rental service from Pune. Our buses offer comfortable seating and reliable transportation, making your visit to this Ganpati temple a smooth and enjoyable experience."
            },
            {
                "name": "Pune to Ozar Ganpati Bus Hire",
                "description": "Our bus hire service for the Pune to Ozar Ganpati journey ensures a comfortable and convenient trip. Enjoy a well-maintained bus and professional service as you travel to this important Ganpati shrine."
            },
            {
                "name": "Pune to Ranjangaon Ganpati Bus Hire",
                "description": "Travel to Ranjangaon Ganpati with ease using our bus hire service from Pune. Our reliable and comfortable buses are designed to provide a smooth and enjoyable pilgrimage experience to this sacred Ganpati temple."
            },
            {
                "name": "Amruta Travels Pune On Rent",
                "description": "For all your bus rental needs, including trips to various Ganpati temples and Ashtavinayak darshan, Amruta Travels Pune offers exceptional service. Our fleet includes a range of vehicles to suit different group sizes and preferences, ensuring a comfortable and memorable journey."
            }
        ],
        "tableData": [
            ["-Ashtavinayak Tour From Pune Bus Package", "-Pune to Ranjangaon Ganpati Darshan Bus on Rent"],
            ["-Best Ashtavinayak Tour From Pune Bus Service", "-Volvo Bus For Ashtavinayak Darshan"],
            ["-45 50 Seater Bus On Rent for Ashtavinayak Darshan", "-Pune to Morgaon Bus Hire on Rent"],
            ["-Pune to Siddhatek Ganpati Bus On Rent", "-Pune to Pali Ganpati Bus On Hire"],
            ["-Pune to Mahad Ganpati Bus On Hire", "-Pune to Theur Bus Hire"],
            ["-Pune to Lenyadri Ganpati Bus On Rent", "-Amruta Travels Pune On Rent"],
            ["-Pune to Ozar Ganpati Bus Hire", "-Pune to Ranjangaon Ganpati Bus Hire"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Why Choose Us for Ashtavinayak Tour from Pune by Bus?",
                "WhyChoosedescription": "Amruta Travels is committed to offering exceptional bus rental services for the Ashtavinayak tour from Pune. Here’s why our service stands out:"
            },
            {
                "WhyChooseheading": "Comfort and Convenience:",
                "WhyChoosedescription": "Our fleet includes modern, well-maintained buses equipped with comfortable seating and amenities to ensure a pleasant journey. Enjoy ample legroom, air conditioning, and clean interiors throughout your trip."
            },
            {
                "WhyChooseheading": "Professional Drivers:",
                "WhyChoosedescription": "Our experienced and courteous drivers are well-versed in the Ashtavinayak route. They ensure safe, smooth, and timely travel, making your pilgrimage stress-free and enjoyable."
            },
            {
                "WhyChooseheading": "Flexible Rental Options:",
                "WhyChoosedescription": "Whether you need a bus for a family trip, corporate outing, or group travel, we offer a range of vehicles to suit your requirements. Choose from various sizes and types of buses to match your group size and preferences."
            },
            {
                "WhyChooseheading": "Competitive Pricing:",
                "WhyChoosedescription": "We provide affordable rates without compromising on quality. Our transparent pricing structure ensures no hidden charges, giving you the best value for your money."
            },
            {
                "WhyChooseheading": "Punctual Service:",
                "WhyChoosedescription": "Timeliness is a priority at Amruta Travels. We guarantee prompt pickups and arrivals, ensuring you reach each Ashtavinayak temple on time to make the most of your visit."
            },
            {
                "WhyChooseheading": "Customizable Itineraries:",
                "WhyChoosedescription": "We understand that every trip is unique. Our team works with you to create a personalized itinerary that fits your schedule and preferences, making your journey tailored to your needs."
            },
            {
                "WhyChooseheading": "24/7 Customer Support:",
                "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with bookings, address any queries, and provide support throughout your journey."
            },
            {
                "WhyChooseheading": "Safety First:",
                "WhyChoosedescription": "We prioritize the safety of our passengers. Our buses undergo regular maintenance and safety checks, and our drivers adhere to all traffic regulations to ensure a secure travel experience."
            },
            {
                "WhyChooseheading": "Eco-Friendly Options:",
                "WhyChoosedescription": "We offer eco-friendly travel options to minimize our environmental impact, making your trip to the Ashtavinayak temples not only comfortable but also sustainable."
            },
            {
                "WhyChooseheading": "Positive Reviews:",
                "WhyChoosedescription": "Our satisfied customers speak highly of our services. We have a strong reputation for reliability, professionalism, and customer satisfaction."
            }
        ]
  
    



    };

    const faqData = [
        {
            "question": "How can I book a bus for the Ashtavinayak trip?",
            "answer": "Booking a bus with Amruta Travels is straightforward. Contact us via phone or through our website to provide your travel details. We will assist you in choosing the right bus and finalize your booking."
        },
        {
            "question": "What is included in the bus rental service?",
            "answer": "Our bus rental service includes the vehicle, a professional driver, and essential amenities such as comfortable seating, air conditioning, and entertainment options. Additional services can be customized based on your needs."
        },
        {
            "question": "Can the itinerary be customized?",
            "answer": "Yes, we offer customizable itineraries to fit your specific requirements. Whether you wish to visit all eight Ashtavinayak temples or select a few, we can tailor the trip to match your preferences."
        },
        {
            "question": "What are the payment options available?",
            "answer": "We accept a variety of payment methods, including online transfers, credit/debit cards, and cash payments. Please contact us to discuss the payment options that best suit your needs."
        },
        {
            "question": "Are there any discounts for large groups?",
            "answer": "Yes, we provide special rates and discounts for large groups. Contact us for a customized quote based on your group size and specific travel requirements."
        },
        {
            "question": "What should I do if I need to change my booking?",
            "answer": "If you need to make changes to your booking, please contact our customer service team as soon as possible. We will assist you in adjusting your itinerary and any other details as needed."
        },
        {
            "question": "Is there a cancellation policy?",
            "answer": "Yes, we have a cancellation policy in place. Please refer to our terms and conditions or contact our support team for detailed information on cancellations and any applibusle fees."
        },
        {
            "question": "What safety measures are in place for the trip?",
            "answer": "We prioritize safety with well-maintained vehicles, experienced drivers, and adherence to all safety regulations. Regular maintenance checks and driver training ensure a secure and comfortable journey."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mrs. Priya Sharma",
            "text": "Our trip to the Ashtavinayak temples with Amruta Travels was truly memorable. From the moment we booked the bus to the end of our journey, the experience was flawless. The 45-seater bus was extremely comfortable, clean, and well-maintained. Our driver was not only skilled but also very knowledgeable about the routes, ensuring we reached each temple safely and on time. The customer service team was prompt and helpful, making the booking process smooth. I highly recommend Amruta Travels for anyone planning a pilgrimage to Ashtavinayak!"
        },
        {
            "name": "Mr. Rajesh Deshmukh",
            "text": "I recently hired a bus from Amruta Travels for a group trip to the Ashtavinayak temples, and I couldn’t be more satisfied. The bus was spacious and comfortable, perfect for our group of 30. The driver was professional and considerate, accommodating our stops and keeping us on schedule. The whole experience was well-organized, and the pricing was very reasonable. It was a pleasure to travel with Amruta Travels, and I will definitely choose them for future trips. Thank you for making our spiritual journey so pleasant and stress-free!"
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
        heading: "Bus Hire  for Pune to Ashtavinayak contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travel | Bus Hire for Pune to Ashtavinayak Tour | Volvo & 32-50 Seater Buses</title>
  <meta name="description" content="Amruta Travel offers bus hire services for the Ashtavinayak tour from Pune. Choose from 32, 35, 40, 45, and 50-seater buses, including Volvo options, for your Ashtavinayak Darshan. Bus rentals for Ranjangaon, Siddhatek, Morgaon, Pali, Mahad, Theur, Lenyadri, Ozar, and more." />
  <meta name="keywords" content="Ashtavinayak tour from Pune by bus package, Ashtavinayak Darshan 32 Seater Bus Hire, Pune to Ranjangaon Ganpati Darshan Bus, Pune to Siddhatek Ganpati Bus Hire, Pune to Pali Ganpati Bus Hire, Pune to Mahad Ganpati Bus Hire, Pune to Theur Ganpati Bus, Pune to Lenyadri Ganpati Bus, Pune to Ozar Ganpati Bus, 45 50 Seater Bus for Ashtavinayak Darshan, Volvo Bus for Ashtavinayak Tour, Amruta Travels Pune" />
  <meta property="og:title" content="Contact: +91 8421333435 | Amruta Travel | Bus Hire for Pune to Ashtavinayak Tour | Volvo & 32-50 Seater Buses" />
  <meta property="og:description" content="Book Amruta Travel's bus hire services for the Ashtavinayak Darshan from Pune. 32 to 50-seater buses and Volvo buses available for Ranjangaon, Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar Ganpati tours. Comfortable, reliable, and affordable options." />
  <meta property="og:url" content="https://yourwebsite.com/bus-hire-pune-ashtavinayak-tour" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://yourwebsite.com/ashtavinayak-bus-hire-image.jpg" />
 
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
    <img src='\img\Keyword Based Image\Keyword Based Image-29.jpg' alt='img'/>
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
export default PuneTOAshtavinayak;