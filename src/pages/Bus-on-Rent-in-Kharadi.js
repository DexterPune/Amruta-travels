
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusRentInKharadi(){

  const cardData = 
    {
        "keyword": "Bus on Rent in Kharadi",
        "heading": "Amruta Travels: Bus on Rent in Kharadi",
        "headingDescription": "Are you planning a group outing, corporate event, or family gathering in Kharadi, Pune? Look no further! Amruta Travels offers exceptional bus rental services in Kharadi, providing you with comfort, convenience, and reliability for all your transportation needs. Our fleet includes a variety of buses to suit different group sizes and requirements, ensuring that your journey is smooth and enjoyable.",
        "top": "Top Places to Visit with Amruta Travels’ Bus on Rent in Kharadi, Pune",
        "topPlaces": [
            {
                "title": "1. EON IT Park",
                "description": "One of the largest IT parks in Pune, EON IT Park is a hub for technology and business. With our bus rental service, you can easily transport your team for corporate events or client meetings in this bustling area."
            },
            {
                "title": "2. Phoenix Market City",
                "description": "A premier shopping and entertainment destination, Phoenix Market City offers a range of retail stores, dining options, and entertainment facilities. Our buses provide a comfortable way to shop, dine, and enjoy leisure activities in style."
            },
            {
                "title": "3. Ranjn’s Garden",
                "description": "A perfect spot for family outings or team picnics, Ranjn’s Garden features lush greenery and serene surroundings. Renting a bus from Amruta Travels ensures a hassle-free trip to this beautiful park."
            },
            {
                "title": "4. Aga Khan Palace",
                "description": "A historic monument with beautiful architecture and gardens, Aga Khan Palace is a significant landmark in Pune. Our bus service can take you and your group on a historical and cultural tour of this renowned site."
            },
            {
                "title": "5. Koregaon Park",
                "description": "Known for its vibrant atmosphere and cultural diversity, Koregaon Park offers numerous cafes, boutiques, and cultural venues. With our comfortable buses, you can explore this trendy neighborhood without the stress of parking and traffic."
            },
            {
                "title": "6. Shivajinagar",
                "description": "A bustling commercial and educational hub, Shivajinagar is home to various colleges, markets, and eateries. Our bus rental service is ideal for school trips, college excursions, and corporate tours in this lively area."
            },
            {
                "title": "7. Bund Garden",
                "description": "Located near the Pune riverside, Bund Garden is a picturesque spot perfect for relaxation and outdoor activities. Our buses can take your group to enjoy the scenic beauty and recreational opportunities at this lovely garden."
            },
            {
                "title": "8. Pune University",
                "description": "Home to prestigious institutions and vibrant campus life, Pune University is a key educational destination. Our buses are well-suited for transporting students, faculty, and visitors to and from the university."
            },
            {
                "title": "9. Bhandarkar Oriental Research Institute",
                "description": "A renowned research institute with a rich collection of manuscripts and historical documents, this is an excellent destination for academic and cultural tours. Let Amruta Travels handle your transportation needs for a smooth visit."
            },
            {
                "title": "10. Osho International Meditation Resort",
                "description": "For those seeking peace and spiritual growth, the Osho International Meditation Resort offers a tranquil retreat. Our bus rental service ensures a comfortable journey to this serene location for workshops and meditation sessions."
            }
        ],
        "services": [
            {
                "name": "Urbania Bus on Rent in Kharadi",
                "description": "Our Urbania buses are ideal for group travel with their spacious interiors and modern amenities. Perfect for corporate outings, school trips, or family gatherings in Kharadi."
            },
            {
                "name": "17 Seater Bus on Rent Per Km in Kharadi",
                "description": "Looking for a compact yet comfortable option? Our 17-seater buses are available at competitive rates per kilometer, offering an economical solution for smaller groups."
            },
            {
                "name": "Tempo Traveller on Rent in Kharadi",
                "description": "For a more personalized travel experience, rent one of our tempo travellers. They are perfect for medium-sized groups and provide a comfortable ride with ample luggage space."
            },
            {
                "name": "14, 17, 20, 25 Seater Bus on Rent in Kharadi",
                "description": "We offer a range of bus sizes to suit different group sizes and requirements, from 14-seater mini-buses to 25-seater options. Choose the best fit for your travel needs in Kharadi."
            },
            {
                "name": "32, 35, 40, 45, 50 Seater Bus on Rent in Kharadi",
                "description": "For larger groups, our fleet includes 32 to 50-seater buses, ideal for corporate events, school excursions, and more. Enjoy ample space and comfort for your journey."
            },
            {
                "name": "Bus Hire in Kharadi IT Park",
                "description": "Our bus hire services are perfect for corporate travel to and from Kharadi IT Park. We provide comfortable and reliable transportation for your team’s needs."
            },
            {
                "name": "Top Bus on Rent Monthly Basis in Kharadi Pune",
                "description": "For regular travel requirements, consider our monthly bus rental options. Enjoy the convenience of having a dedicated bus available for your needs throughout the month."
            },
            {
                "name": "Monthly Bus Rentals in Kharadi, Pune",
                "description": "Our monthly rental services offer flexibility and cost-efficiency for businesses and groups that require regular transportation. Contact us to discuss your specific needs."
            },
            {
                "name": "Mini Bus on Rent in Kharadi Pune",
                "description": "Ideal for smaller groups, our mini buses provide a comfortable and cost-effective solution for local travel and events in Kharadi."
            },
            {
                "name": "Force Urbania on Rent in Kharadi",
                "description": "The Force Urbania is a versatile option for medium-sized groups, offering a comfortable ride with ample space for both passengers and luggage."
            },
            {
                "name": "Bus on Rent in Wagholi Pune for Outstation",
                "description": "Planning an outstation trip? Our buses are available for long-distance travel from Wagholi, ensuring a comfortable and safe journey to your destination."
            },
            {
                "name": "Bus Hire in Wagholi for Picnic",
                "description": "Organize a memorable picnic with our bus hire services in Wagholi. We offer spacious and comfortable buses to transport your group to your favorite picnic spot."
            },
            {
                "name": "Wedding Bus on Rental in Wagholi",
                "description": "Make your special day even more memorable with our wedding bus rental services. We provide elegant and spacious buses to transport guests to and from the wedding venue."
            },
            {
                "name": "Bus on Rent for Wedding in Wagholi",
                "description": "Our wedding buses are designed to provide comfort and style for your wedding celebrations. Ensure a smooth transportation experience for your guests with our dedicated services."
            },
            {
                "name": "Urbania Bus on Rent in Wagholi",
                "description": "For weddings, corporate events, or large group outings, our Urbania buses offer ample space and comfort. Ideal for travel within Wagholi and beyond."
            }
        ],
        "tableData": [
            ["Urbania Bus on Rent in Kharadi", "17 Seater Bus on Rent Per Km in Kharadi"],
            ["Tempo Traveller on Rent in Kharadi", "Bus on Rent in Wagholi Pune for Outstation"],
            ["Bus Hire in Wagholi for Picnic", "Wedding Bus on Rental in Wagholi"],
            ["Bus on Rent For Wedding in Wagholi", "Urbania Bus on Rent in Wagholi"],
            ["Force Urbania on Rent in Kharadi", "Bus Hire in Kharadi IT Park"],
            ["14, 17, 20, 25 Seater Bus on Rent in Kharadi", "32, 35, 40, 45, 50 Seater Bus on Rent in Kharadi"],
            ["Bus Hire in Kharadi for Corporate Outing", "Top Bus On Rent Monthly Basis in Kharadi Pune"],
            ["Monthly Bus Rentals in Kharadi, Pune", "Amruta Travels Pune On Rent"],
            ["Mini Bus On Rent in Kharadi Pune", "Tempo Traveller on Rent in Kharadi"],
            ["Force Urbania on Rent in Kharadi", "Force Urbania on Rent in Viman Nagar"],
            ["Force Urbania on Rent in Kalyani Nagar", "Urbania Bus on Rent in Kharadi"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Diverse Fleet of Buses",
                "WhyChoosedescription": "Amruta Travels offers a wide range of buses to cater to various group sizes and travel requirements. Whether you need a 14-seater for a small group or a 50-seater for a large event, our fleet is well-maintained and ready to provide a comfortable journey."
            },
            {
                "WhyChooseheading": "Comfort and Convenience",
                "WhyChoosedescription": "Our buses are equipped with modern amenities including comfortable seating, air conditioning, and entertainment options to ensure a pleasant travel experience. We prioritize your comfort and convenience, whether you're heading out for a corporate event, family outing, or a school trip."
            },
            {
                "WhyChooseheading": "Experienced Drivers",
                "WhyChoosedescription": "Our professional and experienced drivers are well-trained to handle all types of road conditions and ensure a safe journey. They are knowledgeable about local routes and traffic patterns, which helps in avoiding delays and providing a smooth travel experience."
            },
            {
                "WhyChooseheading": "Flexible Rental Options",
                "WhyChoosedescription": "We offer flexible rental packages tailored to your specific needs. Whether you require a bus for a few hours or an entire day, we can customize our services to fit your schedule and budget. Our goal is to provide a seamless and stress-free rental experience."
            },
            {
                "WhyChooseheading": "Affordable Rates",
                "WhyChoosedescription": "At Amruta Travels, we offer competitive pricing without compromising on quality. Our transparent pricing structure ensures that there are no hidden charges, and you get the best value for your money. We aim to provide affordable transportation solutions for every occasion."
            },
            {
                "WhyChooseheading": "24/7 Customer Support",
                "WhyChoosedescription": "Our dedicated customer support team is available round-the-clock to assist with any queries or concerns. Whether you need to make changes to your booking or require assistance during your trip, we are here to help."
            },
            {
                "WhyChooseheading": "Safety and Hygiene",
                "WhyChoosedescription": "We adhere to strict safety and hygiene standards to ensure the well-being of our passengers. Our buses are regularly sanitized, and safety protocols are followed to provide a safe and hygienic environment for all travelers."
            },
            {
                "WhyChooseheading": "Customizable Itineraries",
                "WhyChoosedescription": "We understand that every trip is unique, and we offer customizable itineraries to match your specific travel plans. Whether you have a detailed schedule or need recommendations for sightseeing, we can tailor our services to meet your requirements."
            }
        ]
    };

    const faqData = [
        {
            "question": "What types of buses are available for rent in Kharadi?",
            "answer": "We offer a range of buses including mini-buses (14-17 seats), standard buses (25-32 seats), and larger coaches (35-50 seats). You can choose the bus that best fits your group size and travel needs."
        },
        {
            "question": "How can I book a bus with Amruta Travels?",
            "answer": "Booking a bus is simple. You can contact us via phone, email, or our website. Provide details about your travel dates, group size, and destination, and we will assist you in selecting the best bus and package for your needs."
        },
        {
            "question": "Are the buses equipped with amenities?",
            "answer": "Yes, our buses come equipped with various amenities including comfortable seating, air conditioning, audio-visual systems, and more. Specific features may vary depending on the bus model you choose."
        },
        {
            "question": "Can I customize my bus rental itinerary?",
            "answer": "Absolutely! We offer customizable itineraries to suit your travel plans. Whether you need specific stops, sightseeing recommendations, or a flexible schedule, we can tailor the rental service to meet your needs."
        },
        {
            "question": "Is there a minimum rental duration?",
            "answer": "Our rental services are flexible, and we offer options for both short-term and long-term rentals. You can book a bus for a few hours or a full day depending on your requirements."
        },
        {
            "question": "What is the cancellation policy?",
            "answer": "We have a clear and transparent cancellation policy. If you need to cancel or modify your booking, please contact us as soon as possible. Our team will guide you through the process and inform you of any applicable charges."
        },
        {
            "question": "Are there any additional charges?",
            "answer": "We strive to provide transparent pricing with no hidden charges. However, additional fees may apply for extra services or changes to your booking. We will inform you of any potential additional costs upfront."
        },
        {
            "question": "How do you ensure the safety and cleanliness of your buses?",
            "answer": "Our buses are regularly cleaned and sanitized to ensure a hygienic environment. We follow strict safety protocols and maintenance routines to ensure the safety and comfort of all passengers."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mr. Rahul Deshmukh",
            "text": "We recently hired a bus from Amruta Travels for our corporate team outing in Kharadi, and the experience was fantastic! The 35-seater bus was spotless, comfortable, and well-equipped for our journey. The driver was professional and punctual, which made our trip smooth and enjoyable. We couldn’t have asked for a better service. Highly recommend Amruta Travels for anyone looking for reliable and comfortable bus rentals!"
        },
        {
            "name": "Miss Priya Kulkarni",
            "text": "Our family trip to Lonavala was made perfect thanks to Amruta Travels. We rented a 32-seater bus for our group, and it was a pleasure from start to finish. The bus was in excellent condition, and the booking process was seamless. The team at Amruta Travels was very accommodating and made sure everything was tailored to our needs. If you’re looking for a hassle-free and comfortable bus hire experience in Kharadi, Amruta Travels is the way to go!"
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
export default BusRentInKharadi;