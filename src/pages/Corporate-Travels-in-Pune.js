
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  CorporateTravels(){

  const cardData = 
    {
        "keyword": "Corporate Travels in Pune",
        "heading": "Amruta Travels: Corporate Travels in Pune",
        "headingDescription": "When it comes to corporate travel, comfort, reliability, and professionalism are paramount. At Amruta Travels, we specialize in providing top-notch transportation solutions tailored to meet the unique needs of corporate clients in Pune. Whether you're organizing team outings, client meetings, or corporate events, our services are designed to ensure a smooth and efficient travel experience.",
        "top": "Top Places for Corporate Travels in Pune with Amruta Travels:",
        "topPlaces": [
            {
                "title": "1. Pune IT Park (Hinjewadi)",
                "description": "Hinjewadi is a major IT hub in Pune, home to numerous technology companies and corporate offices. Our corporate travel services cater to professionals needing transportation to and from this bustling area, ensuring timely and comfortable commutes."
            },
            {
                "title": "2. Pune Camp Area",
                "description": "The Camp area is known for its central location and vibrant commercial environment. It’s a popular spot for business meetings and corporate events. Amruta Travels provides reliable transport services to and from this key business district."
            },
            {
                "title": "3. Magarpatta City",
                "description": "Magarpatta City is a well-planned business and residential district with numerous IT firms and corporate offices. Our fleet is equipped to handle the needs of employees and executives traveling to this major business center."
            },
            {
                "title": "4. Pune Cantonment",
                "description": "This area hosts various business establishments and is well-connected to other parts of the city. Amruta Travels offers efficient travel solutions for corporate clients needing access to this strategically important location."
            },
            {
                "title": "5. Koregaon Park",
                "description": "Koregaon Park is not only a popular residential area but also a hub for corporate offices and business meetings. Our services ensure that professionals traveling to this upscale district experience hassle-free commutes."
            },
            {
                "title": "6. Viman Nagar",
                "description": "Known for its proximity to Pune Airport and a number of business parks, Viman Nagar is a key location for corporate travel. Our transport solutions include airport transfers and travel within this dynamic area."
            },
            {
                "title": "7. Baner",
                "description": "Baner is an emerging business district with numerous corporate offices and tech parks. Amruta Travels provides specialized transport services for professionals working in and around this growing business hub."
            },
            {
                "title": "8. Aundh",
                "description": "Aundh is home to several multinational companies and business centers. Our corporate travel services ensure that executives and employees have comfortable and punctual transportation to this important location."
            },
            {
                "title": "9. Kalyani Nagar",
                "description": "This area is known for its corporate offices and business establishments. Our services cater to professionals traveling to Kalyani Nagar, offering comfortable and reliable transport options."
            },
            {
                "title": "10. Pimple Saudagar",
                "description": "A rapidly developing area with a growing number of corporate offices, Pimple Saudagar requires dependable transportation. Amruta Travels provides tailored solutions to meet the needs of businesses and their employees in this area."
            }
        ],
        "services": [
            {
                "name": "Travel Agents for Corporate in Pune",
                "description": "As leading travel agents for corporate clients in Pune, Amruta Travels specializes in providing tailored transportation solutions. Our expertise in corporate travel ensures that your business trips and events are handled with professionalism and efficiency."
            },
            {
                "name": "Corporate Travel Company in Pune",
                "description": "Amruta Travels stands out as a premier corporate travel company in Pune, offering a wide range of services to meet the unique needs of businesses. From event transport to regular corporate commutes, we ensure reliable and comfortable travel arrangements."
            },
            {
                "name": "Corporate Travel Company in Pimpri Chinchwad",
                "description": "For businesses in Pimpri Chinchwad, our corporate travel company provides dedicated services designed to cater to your specific needs. We offer customized transportation solutions to ensure smooth and efficient travel for your team."
            },
            {
                "name": "Bus on Rent for Corporate in Katraj",
                "description": "If you’re looking for a bus on rent for corporate events in Katraj, Amruta Travels has you covered. Our buses are ideal for office outings, team-building exercises, and other corporate functions, providing comfort and reliability for all participants."
            },
            {
                "name": "Bus Hire for Corporate Party in Pune",
                "description": "Planning a corporate party and need transportation? Our bus hire service in Pune ensures that your event is a hit. With comfortable and spacious buses, we provide a hassle-free solution for transporting your team to and from the venue."
            },
            {
                "name": "Bus Hire for Corporate Team Outing in Pune",
                "description": "For corporate team outings in Pune, Amruta Travels offers excellent bus hire options. Our well-maintained buses are perfect for group travel, ensuring that your team enjoys a comfortable and enjoyable outing."
            },
            {
                "name": "Bus Hire for Corporate Team Picnic in Pune",
                "description": "Make your corporate team picnic memorable with our bus hire services. We offer reliable and comfortable transportation to various picnic spots around Pune, ensuring a pleasant experience for all participants."
            },
            {
                "name": "Pune to Mahabaleshwar Bus Hire for Office Team Picnic",
                "description": "Organizing an office team picnic to Mahabaleshwar? Amruta Travels provides efficient bus hire services for a smooth journey. Our buses are equipped to ensure that your team travels comfortably and arrives at your destination refreshed and ready to enjoy."
            },
            {
                "name": "Bus on Rent for Corporate in Hadapsar",
                "description": "Our bus rental services in Hadapsar cater to corporate needs, providing reliable and comfortable transportation for business events, meetings, and team-building activities. Trust Amruta Travels for all your corporate travel requirements in Hadapsar."
            },
            {
                "name": "Bus on Rent for Corporate in Hinjewadi",
                "description": "For businesses in Hinjewadi, Amruta Travels offers exceptional bus rental services tailored to corporate needs. Whether you need transport for an office event or regular employee commutes, our buses provide the comfort and reliability you need."
            },
            {
                "name": "Bus on Rent for Corporate in Kharadi",
                "description": "Amruta Travels provides top-quality bus rental services for corporate clients in Kharadi. Our buses are ideal for corporate travel, offering a comfortable and efficient solution for your business transportation needs."
            },
            {
                "name": "Bus on Rent for Corporate in IT Park Pune",
                "description": "Located in the IT Park Pune area? Our bus rental services cater specifically to corporate clients in this sector. We offer reliable transport solutions to ensure smooth and professional travel for your team."
            },
            {
                "name": "Amruta Travels Pune On Rent",
                "description": "For all your corporate travel needs in Pune, Amruta Travels offers unparalleled service and reliability. From bus rentals for team outings to regular corporate commutes, we have the right solution for your business."
            },
            {
                "name": "Top Corporate Travel in Pune",
                "description": "As a top provider of corporate travel solutions in Pune, Amruta Travels is dedicated to offering the best in transportation services. Our commitment to quality ensures that your business travel is handled with care and professionalism."
            },
            {
                "name": "Travel Agency in Pune for Bus",
                "description": "Looking for a reliable travel agency in Pune for bus rentals? Amruta Travels offers comprehensive bus rental services to meet a variety of needs, from corporate events to team outings and more."
            }
        ],
        "tableData": [
            ["Travel Agents For Corporate in Pune", "Corporate Travel Company in Pune"],
            ["Corporate Travel Company in Pimpri Chinchwad", "Bus On Rent For Corporate in Katraj"],
            ["Bus Hire for Corporate Party in Pune", "Bus Hire for Corporate Team Outing in Pune"],
            ["Bus Hire for Corporate Team Picnic in Pune", "Pune to Mahabaleshwar Bus Hire for Office Team Picnic"],
            ["Bus On Rent For Corporate in Hadapsar", "Bus on Rent for Corporate in Hinjewadi"],
            ["Bus on Rent for Corporate in Kharadi", "Bus on Rent for Corporate in IT Park Pune"],
            ["Amruta Travels Pune On Rent", "Top Corporate Travel in Pune"],
            ["Travel Agency in Pune for Bus"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Professionalism and Reliability",
                "WhyChoosedescription": "Our team is dedicated to providing professional and reliable transportation services. We understand the importance of punctuality and ensure that our services meet the high standards expected by corporate clients."
            },
            {
                "WhyChooseheading": "Comfortable Fleet",
                "WhyChoosedescription": "Our fleet includes a range of well-maintained vehicles, from executive sedans to spacious coaches. Each vehicle is equipped with modern amenities to ensure a comfortable and pleasant journey for your team."
            },
            {
                "WhyChooseheading": "Experienced Drivers",
                "WhyChoosedescription": "Our drivers are experienced, well-trained, and knowledgeable about Pune’s routes and traffic patterns. They prioritize safety and comfort, ensuring a smooth and efficient travel experience."
            },
            {
                "WhyChooseheading": "Customized Solutions",
                "WhyChoosedescription": "We offer flexible and customized travel solutions tailored to your specific corporate needs. Whether it's regular office commutes or special event transportation, we can design a package that fits your requirements."
            },
            {
                "WhyChooseheading": "Competitive Pricing",
                "WhyChoosedescription": "Our pricing is transparent and competitive. We offer value-for-money services with no hidden charges, ensuring you get the best service within your budget."
            },
            {
                "WhyChooseheading": "24/7 Support",
                "WhyChoosedescription": "Our customer service team is available around the clock to assist with any queries or changes to your travel plans. We provide prompt and effective support to ensure a seamless experience."
            },
            {
                "WhyChooseheading": "Safety and Hygiene",
                "WhyChoosedescription": "We prioritize the safety and hygiene of our passengers. Our vehicles are regularly cleaned and sanitized, and we adhere to all safety protocols to ensure a secure travel environment."
            }
        ]
    };

    const faqData = [
        {
            "question": "What types of vehicles are available for corporate travel?",
            "answer": "We offer a range of vehicles, including executive sedans, luxury coaches, and shuttle buses, to accommodate different corporate travel needs."
        },
        {
            "question": "How can I book corporate travel services with Amruta Travels?",
            "answer": "You can book our services by contacting us via phone, email, or through our website. Provide details about your travel requirements, and we will assist you in planning and booking."
        },
        {
            "question": "Are there any additional charges for corporate travel services?",
            "answer": "Our pricing is transparent and includes all standard charges. Any additional services or extended hours may incur extra fees, which will be communicated to you in advance."
        },
        {
            "question": "Can I customize the travel itinerary for my corporate trip?",
            "answer": "Yes, we offer customized solutions to meet your specific travel needs. You can discuss your requirements with us, and we will create a tailored itinerary to suit your schedule."
        },
        {
            "question": "What measures do you take to ensure passenger safety?",
            "answer": "We prioritize passenger safety by maintaining our vehicles to high standards, employing experienced drivers, and adhering to safety protocols. Our vehicles are also regularly cleaned and sanitized."
        },
        {
            "question": "Can I make changes to my booking after it is confirmed?",
            "answer": "Yes, changes to your booking can be made based on availability. Please contact us as soon as possible to discuss any modifications."
        },
        {
            "question": "How far in advance should I book corporate travel services?",
            "answer": "We recommend booking as early as possible to ensure availability and to allow time for any special arrangements or requirements."
        },
        {
            "question": "Do you provide transportation for corporate events?",
            "answer": "Yes, we offer transportation services for corporate events, including conferences, seminars, and team-building activities. We can handle both large groups and individual transfers."
        },
        {
            "question": "What is your cancellation policy?",
            "answer": "Our cancellation policy varies depending on the booking conditions. Please refer to our terms and conditions or contact us for detailed information on cancellations and refunds."
        },
        {
            "question": "Are there options for airport transfers?",
            "answer": "Yes, we provide airport transfer services as part of our corporate travel solutions. We can arrange pickups and drop-offs to and from Pune Airport."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mr. Vikram Mehta",
            "text": "Our company recently used Amruta Travels for a corporate event, and the experience was exceptional. The professionalism and efficiency displayed by their team were top-notch. The bus was immaculate and well-equipped, making our team’s journey both comfortable and enjoyable. The driver was punctual and courteous, ensuring everything went smoothly. We’ll definitely choose Amruta Travels for all our future corporate travel needs in Pune!"
        },
        {
            "name": "Miss Aditi Sharma",
            "text": "Amruta Travels provided outstanding service for our company’s team-building trip. The bus was not only comfortable and spacious but also featured all the amenities we needed. The entire process, from booking to the actual trip, was seamless and stress-free. Their attention to detail and commitment to quality made a significant difference in our overall experience. I highly recommend Amruta Travels for corporate travel in Pune!"
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
export default CorporateTravels;