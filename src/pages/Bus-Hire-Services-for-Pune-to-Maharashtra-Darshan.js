
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PuneMaharashtraDarshan(){

  const cardData = 
    {
      keyword: 'Bus Hire Services for Pune to Maharashtra Darshan',
      heading: 'Amruta Travels Bus Hire Services for Pune to Maharashtra Darshan',

      headingDescription: ' If you’re planning a pilgrimage or sightseeing tour across Maharashtra, Amruta Travels offers exceptional bus hire services for a comfortable and memorable journey. Our buses are ideal for groups looking to explore the diverse and culturally rich state of Maharashtra. With a focus on comfort, reliability, and affordability, we ensure your travel experience is smooth and enjoyable. Discover the top destinations and enjoy a hassle-free journey with Amruta Travels.',

      top:"Top Places to Visit in Maharashtra with Amruta Travels:",
     "topPlaces": [
    {
      "title": "1. Mumbai",
      "description": "Mumbai, the financial capital of India, is a bustling metropolis known for its vibrant culture and iconic landmarks. Key attractions include the Gateway of India, Marine Drive, Elephanta Caves, and the Chhatrapati Shivaji Maharaj Terminus."
    },
    {
      "title": "2. Pune",
      "description": "Pune, often referred to as the Oxford of the East, boasts a rich cultural heritage and modern amenities. Notable places to visit include Shaniwarwada, Aga Khan Palace, and the Osho International Meditation Resort."
    },
    {
      "title": "3. Aurangabad",
      "description": "Known for its historical significance, Aurangabad is home to the Ajanta and Ellora Caves, which are UNESCO World Heritage Sites. The Bibi Ka Maqbara, often called the 'Taj of the Deccan,' is another must-visit."
    },
    {
      "title": "4. Nashik",
      "description": "Nashik is a prominent pilgrimage site, known for its role in the Kumbh Mela. It also features beautiful vineyards, with the Sula Vineyards being a major attraction. The Panchavati Temple and Kalaram Temple are significant religious sites."
    },
    {
      "title": "5. Shirdi",
      "description": "Shirdi is renowned as the home of the revered saint Sai Baba. The Sai Baba Temple attracts millions of devotees each year, making it a major pilgrimage destination."
    },
    {
      "title": "6. Lonavala",
      "description": "Lonavala, a picturesque hill station, is famous for its lush greenery, scenic viewpoints, and pleasant climate. Key attractions include the Karla and Bhaja Caves, Lion's Point, and the stunning Bushi Dam."
    },
    {
      "title": "7. Mahabaleshwar",
      "description": "Known for its breathtaking views and pleasant weather, Mahabaleshwar is a popular hill station. Highlights include Venna Lake, Pratapgad Fort, and the panoramic viewpoints like Arthur’s Seat."
    },
    {
      "title": "8. Alibaug",
      "description": "Alibaug, a coastal town near Mumbai, is known for its beautiful beaches and relaxed ambiance. Popular spots include Alibaug Beach, Kolaba Fort, and the serene Mandwa Beach."
    },
    {
      "title": "9. Ratnagiri",
      "description": "Ratnagiri is famous for its historical forts, beautiful beaches, and the delightful Alphonso mangoes. The Ratnadurg Fort and Ganpatipule Beach are key attractions."
    },
    {
      "title": "10. Sindhudurg",
      "description": "Located on the Konkan coast, Sindhudurg is known for its historic forts and pristine beaches. The Sindhudurg Fort and Tarkarli Beach are notable highlights for visitors."
    }
  ],
  "services": [
    {
      "name": "Pune to Kolhapur Bus Hire",
      "description": "Experience a comfortable journey from Pune to Kolhapur with our reliable bus hire services. Kolhapur, known for its historical landmarks and the famous Mahalakshmi Temple, is a significant pilgrimage and tourist destination. Our well-maintained buses and professional drivers ensure a smooth and enjoyable trip."
    },
    {
      "name": "Pune to Bhandardara Bus on Rent",
      "description": "Explore the serene beauty of Bhandardara, a popular hill station and getaway, with our bus rental service. Bhandardara is renowned for its lush greenery, waterfalls, and tranquil lakes. Choose Amruta Travels for a hassle-free journey to this picturesque destination."
    },
    {
      "name": "Pune to Pandharpur Bus On Rent",
      "description": "Visit the sacred town of Pandharpur, famous for the Vithoba Temple, with ease using our bus rental services. Our buses are equipped for comfort and convenience, ensuring you have a pleasant trip to this important pilgrimage site."
    },
    {
      "name": "Pune to Tuljapur Darshan Bus Hire",
      "description": "Experience a spiritual journey to the Tuljabhavani Temple in Tuljapur with our dedicated bus hire services. Our comfortable and well-equipped buses make your pilgrimage to this revered site both pleasant and memorable."
    },
    {
      "name": "Pune to Jyotiba Bus Hire",
      "description": "Travel to Jyotiba, known for the Jyotiba Temple, with our reliable bus hire services. Our buses offer a comfortable ride and ensure timely arrival, so you can focus on your spiritual journey."
    },
    {
      "name": "Pune to Nashik Darshan Bus Hire",
      "description": "Nashik, famous for its vineyards and religious sites, including the Panchavati Temple and Kalaram Temple, is easily accessible with our bus hire services. Enjoy a comfortable and enjoyable trip to Nashik with Amruta Travels."
    },
    {
      "name": "Pune to Trimbakeshwar Bus on Rent",
      "description": "Trimbakeshwar, home to the Trimbakeshwar Temple, is a significant pilgrimage destination. Our bus rental services offer a comfortable and efficient way to reach this sacred site, ensuring a pleasant journey for all passengers."
    },
    {
      "name": "Pune to Bhimashankar Bus Tour Package",
      "description": "Discover the sacred Bhimashankar Temple, one of the twelve Jyotirlingas, with our exclusive bus tour package. Our comprehensive package includes a comfortable ride and a well-planned itinerary for a fulfilling pilgrimage experience."
    },
    {
      "name": "Pune to Konkan Darshan Bus Package",
      "description": "Explore the beautiful Konkan region with our specialized bus package. From pristine beaches to historic forts and lush landscapes, our Konkan Darshan package provides a comprehensive tour of this picturesque coastal area."
    },
    {
      "name": "Pune to Sade Teen Shakti Peeth Package",
      "description": "Visit the revered Sade Teen Shakti Peeths with our dedicated bus package. This pilgrimage covers significant Shakti Peeths, offering a deeply spiritual journey through sacred sites."
    },
    {
      "name": "5 Jyotirlinga Darshan From Pune, Maharashtra",
      "description": "Embark on a spiritual journey to the five Jyotirlingas from Pune with our specialized bus service. This pilgrimage package covers key Jyotirlinga temples, providing a comprehensive and comfortable travel experience."
    },
    {
      "name": "Ashtavinayak Tour from Pune by Bus",
      "description": "Experience the Ashtavinayak tour with ease using our bus service. This tour covers all eight Ganesh temples, offering a comfortable and convenient way to complete this important pilgrimage."
    },
    {
      "name": "Ashtavinayak Darshan From Pune by Bus",
      "description": "Our bus service for Ashtavinayak Darshan ensures a smooth and pleasant trip to the eight Ganesh temples. Enjoy the spiritual journey with the comfort and reliability of our well-maintained buses."
    },
    {
      "name": "Pune Darshan Bus Hire on Rent",
      "description": "Explore the historical and cultural landmarks of Pune with our comprehensive Pune Darshan bus hire service. Our buses are perfect for city tours, offering comfort and convenience for all passengers."
    },
    {
      "name": "Pune to Mumbai Darshan Bus On Rent",
      "description": "Travel from Pune to Mumbai and explore the city’s iconic landmarks with our bus rental service. Whether you’re visiting Mumbai’s famous attractions or need a comfortable ride for a group tour, we have you covered."
    },
    {
      "name": "Pune to Nagpur Tadoba Darshan Bus on Rent",
      "description": "Visit the Tadoba Andhari Tiger Reserve near Nagpur with our specialized bus rental service. Enjoy a comfortable journey to one of Maharashtra’s premier wildlife destinations and experience the thrill of a tiger safari."
    }
  ],
  "tableData": [
    ["-Mini bus on rent in Hadapsar Pune", "-Mini AC Bus On Rent in Wanowrie Pune"],
    ["-Top Mini Bus On Rent in Kothrud Pune", "-Mini bus on rent in Kharadi Pune"],
    ["-Mini bus on rent in Kalyani Nagar Pune", "-Mini bus on rent in Shivaji Nagar"],
    ["-Best Mini Bus On Rent in Baner Pune", "-Mini bus on rent for corporate events in Pune"],
    ["-Minibus hire for wedding party in Pimpri Chinchwad", "-Minibus on rent in Pune Outstations"],
    ["-Pune to Shirdi Mini Bus on Rent", "-Mini bus on rent in Pune for family"],
    ["-Mini bus on rent in Pune for family with driver", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Why Choose Amruta Travels for Bus Hire from Pune to Maharashtra Darshan?",
      "WhyChoosedescription": "Amruta Travels stands out as the premier choice for bus hire services from Pune to Maharashtra Darshan. Our commitment to delivering exceptional travel experiences ensures that every journey is comfortable, safe, and enjoyable. Here’s why you should choose us for your next Maharashtra Darshan trip:"
    },
    {
      "WhyChooseheading": "Comfortable Fleet:",
      "WhyChoosedescription": "Our fleet includes modern, well-maintained buses equipped with comfortable seating, air conditioning, and other amenities to ensure a pleasant travel experience."
    },
    {
      "WhyChooseheading": "Experienced Drivers:",
      "WhyChoosedescription": "Our professional drivers are experienced, knowledgeable, and committed to ensuring safe and timely travel. They are familiar with the routes and can handle any travel-related concerns with ease."
    },
    {
      "WhyChooseheading": "Flexible Itineraries:",
      "WhyChoosedescription": "We offer customizable itineraries to match your specific needs and preferences. Whether you’re planning a religious pilgrimage or a sightseeing tour, we can tailor the trip to your requirements."
    },
    {
      "WhyChooseheading": "Affordable Pricing:",
      "WhyChoosedescription": "We provide competitive pricing without compromising on quality. Our transparent pricing ensures there are no hidden costs, making our services cost-effective."
    },
    {
      "WhyChooseheading": "Timely Service:",
      "WhyChoosedescription": "Punctuality is a priority for us. We strive to adhere to schedules, ensuring you reach your destinations on time and enjoy a stress-free journey."
    },
    {
      "WhyChooseheading": "24/7 Customer Support:",
      "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with bookings, address any concerns, and provide timely updates."
    },
    {
      "WhyChooseheading": "Safety First:",
      "WhyChoosedescription": "We prioritize safety and follow all necessary protocols to ensure a secure journey. Regular maintenance of our buses and adherence to safety standards are integral to our service."
    }
  ]

    
 
  
    



    };

    
    const testimonials = [
        {
            "name": "Mrs. Suman Deshmukh",
            "text": "Our journey with Amruta Travels for the Maharashtra Darshan was truly exceptional. From the moment we boarded the bus, the comfort and cleanliness were evident. The driver was punctual and knowledgeable about the routes, making our trip both smooth and enjoyable. The customer service team was very responsive and helped us plan a perfect itinerary. We visited several sacred sites and tourist spots without any hassle. I highly recommend Amruta Travels for anyone planning a pilgrimage or sightseeing tour."
        },
        {
            "name": "Mr. Ramesh Patel",
            "text": "Amruta Travels provided an outstanding experience for our Maharashtra Darshan. The bus was well-maintained, and the journey was very comfortable, thanks to the smooth ride and amenities. Our group was impressed with the professionalism of the drivers and the flexibility offered in our itinerary. Everything was well-organized, and the trip exceeded our expectations. We felt safe and well taken care of throughout the journey. Thank you, Amruta Travels, for making our trip memorable and stress-free!"
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
        const faqData = [
            {
                "question": "What types of buses are available for hire for Maharashtra Darshan?",
                "answer": "We offer a variety of buses, including standard, luxury, and sleeper buses. Our fleet is equipped with comfortable seating, air conditioning, and other amenities to cater to different travel needs and preferences."
            },
            {
                "question": "How can I book a bus for Maharashtra Darshan?",
                "answer": "You can book a bus by contacting us directly through our website or customer support. Provide details such as the travel dates, destinations, and number of passengers, and we will assist you with the booking process."
            },
            {
                "question": "Are there any special packages for Maharashtra Darshan?",
                "answer": "Yes, we offer special packages for various Maharashtra Darshan tours, including pilgrimage sites and sightseeing tours. These packages can be customized to suit your specific requirements."
            },
            {
                "question": "How much does it cost to hire a bus for Maharashtra Darshan?",
                "answer": "The cost of hiring a bus depends on factors such as the type of bus, the duration of the trip, and the destinations covered. We offer competitive pricing and provide a detailed quote based on your requirements."
            },
            {
                "question": "Are the buses equipped with amenities?",
                "answer": "Yes, our buses are equipped with essential amenities such as comfortable seating, air conditioning, and sometimes Wi-Fi. Specific amenities may vary based on the type of bus you choose."
            },
            {
                "question": "What measures are taken to ensure passenger safety?",
                "answer": "We prioritize safety by regularly maintaining our buses, adhering to safety protocols, and employing experienced drivers. Our buses are equipped with safety features to ensure a secure travel experience."
            },
            {
                "question": "Can I make changes to my booking after confirmation?",
                "answer": "Yes, you can make changes to your booking based on availability and our terms and conditions. Please contact our customer support team as soon as possible to discuss any changes."
            },
            {
                "question": "Is there a limit on the number of passengers?",
                "answer": "The number of passengers depends on the type of bus you hire. Our buses come in various sizes, from smaller buses for intimate groups to larger ones for bigger parties."
            },
            {
                "question": "What is the cancellation policy?",
                "answer": "Our cancellation policy varies depending on the booking terms and conditions. Please review the policy at the time of booking or contact our customer support team for detailed information."
            },
            {
                "question": "Can Amruta Travels assist with itinerary planning?",
                "answer": "Yes, we can assist with itinerary planning based on your preferences and destinations. Our team can help you design a customized travel plan to make the most of your Maharashtra Darshan."
            }
        ];
        
      
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
export default PuneMaharashtraDarshan;