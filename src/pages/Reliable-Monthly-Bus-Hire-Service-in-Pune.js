
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  MonthlyBusPune(){

  const cardData = 
    {
        "keyword": "Monthly Bus Hire Services in Pune",
        "heading": "Amruta Travels – Reliable Monthly Bus Hire Service in Pune",
        "headingDescription": "Amruta Travels offers comprehensive monthly bus hire services in Pune, providing convenient and cost-effective solutions for corporate transportation, school trips, group travel, and more. With our extensive fleet of modern buses and a team of experienced drivers, we ensure that your monthly travel needs are met with comfort, reliability, and flexibility. Whether you need transportation for employees, students, or frequent trips, Amruta Travels is here to serve you with the highest level of professionalism and convenience.",
        "top": "Top Monthly Bus Hire Services by Amruta Travels:",
        "topPlaces": [
            {
                "title": "1. Corporate Employee Transportation",
                "description": "Amruta Travels specializes in monthly bus hire services for corporate offices in Pune. Our buses are ideal for daily employee commutes, ensuring safe, punctual, and comfortable travel between work locations and employee residences."
            },
            {
                "title": "2. School and College Bus Rentals",
                "description": "Schools and colleges in Pune rely on Amruta Travels for their monthly bus hire services. We provide well-maintained buses for daily student transportation, ensuring safety, comfort, and timely pickups and drop-offs."
            },
            {
                "title": "3. Corporate Shuttle Service",
                "description": "For businesses in Pune with frequent travel needs, our corporate shuttle service offers a convenient monthly hire option. We provide a dedicated bus to shuttle employees between offices, branches, and client locations within the city."
            },
            {
                "title": "4. Monthly Bus Hire for Industrial Plants",
                "description": "Amruta Travels offers specialized monthly bus hire services for factories and industrial plants in Pune. Our buses are equipped to transport workers from different locations to industrial sites, ensuring timely and efficient transport."
            },
            {
                "title": "5. IT Park and Tech Company Transport",
                "description": "Amruta Travels provides tailored monthly bus services for IT parks and technology companies in Pune. Our buses are equipped with modern amenities, making long commutes easier for tech professionals and staff working in IT hubs."
            },
            {
                "title": "6. Outstation Monthly Bus Rentals",
                "description": "If your organization requires regular outstation trips from Pune, we offer monthly bus hire services that cater to long-distance travel. Our buses are ideal for companies with branch offices or frequent outstation meetings."
            },
            {
                "title": "7. Tourist Guide and Tour Operator Monthly Bus Rentals",
                "description": "For travel agencies and tour operators, Amruta Travels offers a convenient monthly bus hire service. Whether you operate city tours, outstation tours, or frequent sightseeing trips, we provide reliable buses that meet your tourism business needs."
            },
            {
                "title": "8. Monthly Bus Rentals for Religious Organizations",
                "description": "Religious groups and organizations in Pune can benefit from our monthly bus hire services. We offer safe and comfortable buses for frequent pilgrimages, temple visits, or religious events."
            },
            {
                "title": "9. Wedding and Event Transport",
                "description": "Amruta Travels also provides monthly bus hire for wedding planners and event organizers. If you're organizing multiple events across Pune, our buses are available for monthly rentals, ensuring hassle-free guest transportation."
            },
            {
                "title": "10. Monthly Bus Hire for Sports Teams and Academies",
                "description": "For sports teams, academies, and fitness centers in Pune, Amruta Travels offers buses on a monthly rental basis. Whether it's for transporting teams to practice sessions, tournaments, or fitness camps, we have the right bus for your needs."
            }
        ],
        "services": [
            {
                "name": "35, 36, 40, 54, and 55 Seater Bus Hire in Pune",
                "description": "Looking for a bus that perfectly fits your group size? We offer a diverse range of buses including 35, 36, 40, 54, and 55-seater options to cater to various travel needs in Pune. Whether it’s for a family outing, corporate event, or a large group tour, our buses provide comfort and reliability."
            },
            {
                "name": "35, 36, 40, 47, 54, and 55 Seater Company Bus Rental Service in Pune",
                "description": "Our company bus rental services in Pune include a variety of options: 35, 36, 40, 47, 54, and 55-seater buses. Ideal for corporate events, employee transport, and team-building activities, we ensure a smooth and professional experience with our well-maintained fleet."
            },
            {
                "name": "Bus on Rent in Pune with Amruta Travels",
                "description": "Amruta Travels offers an extensive range of buses on rent in Pune. Whether you need a small shuttle or a large charter bus, we have the right vehicle for your needs. Our competitive rates and exceptional service make us a top choice for bus rentals in Pune."
            },
            {
                "name": "Monthly Bus Hire for Corporate Employees",
                "description": "Streamline your employee transportation with our monthly bus hire services. Perfect for corporate clients, our buses offer a convenient and cost-effective solution for daily commutes and business-related travel."
            },
            {
                "name": "35 Seater Bharat Benz Bus on Rent",
                "description": "Experience the ultimate in comfort with our 35-seater Bharat Benz buses. Designed for efficiency and luxury, these buses provide a smooth ride for group travel. Ideal for corporate trips, family gatherings, and more."
            },
            {
                "name": "Luxury Bus on Rent in Pune",
                "description": "For those seeking an upscale travel experience, our luxury buses on rent in Pune offer top-tier amenities and exceptional comfort. Perfect for high-profile events, corporate functions, or special occasions."
            },
            {
                "name": "57 Seater AC Bharat Benz on Rent in Pune",
                "description": "Our 57-seater AC Bharat Benz buses are perfect for larger groups looking for air-conditioned comfort and spacious seating. Ideal for long-distance travel and large-scale events, these buses offer a premium travel experience."
            },
            {
                "name": "Monthly Bus on Rent in Kharadi IT Park",
                "description": "If you need a reliable transportation solution for your employees at Kharadi IT Park, our monthly bus rental service is the answer. We provide punctual and comfortable bus services to ensure smooth commutes for your team."
            },
            {
                "name": "Amruta Travels Pune on Rent",
                "description": "For all your bus rental needs in Pune, Amruta Travels provides top-quality vehicles and services. Whether it’s a luxury bus, a corporate shuttle, or a large group transport, we ensure a hassle-free and enjoyable experience. Contact us for competitive rates and personalized service."
            }
        ],
        "tableData": [
            ["35 36 40 54 55 Seater Bus Hire in Pune", "35,36,40,47,54,55 Seater Company Bus Rental Service in Pune"],
            ["Bus On Rent in Pune Amruta Travels", "Monthly Bus Hire For Corporate Employees"],
            ["35 Seater Bharat Benz Bus on Rent", "Luxury Bus On Rent in Pune"],
            ["57 Seater AC Bharat Benz on Rent in Pune", "Monthly Bus On Rent in Kharadi IT Park"],
            ["Amruta Travels Pune On Rent"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Comprehensive Fleet:",
                "WhyChoosedescription": "At Amruta Travels, we offer a diverse range of buses to meet your monthly hire needs. From comfortable minibuses to spacious luxury coaches, our fleet is well-equipped to handle various group sizes and requirements."
            },
            {
                "WhyChooseheading": "Reliable and Punctual Service:",
                "WhyChoosedescription": "We understand the importance of timely transportation. Our buses are well-maintained and our drivers are committed to punctuality, ensuring that your travel needs are met on schedule every time."
            },
            {
                "WhyChooseheading": "Experienced Drivers:",
                "WhyChoosedescription": "Our drivers are highly experienced, licensed, and trained to provide safe and courteous service. They are familiar with Pune’s routes and traffic conditions, ensuring a smooth and efficient journey."
            },
            {
                "WhyChooseheading": "Customizable Packages:",
                "WhyChoosedescription": "We offer flexible monthly rental packages that can be tailored to your specific needs. Whether you require daily commutes, occasional trips, or special event transport, we can customize our services to fit your schedule and budget."
            },
            {
                "WhyChooseheading": "Comfort and Convenience:",
                "WhyChoosedescription": "Our buses are equipped with modern amenities, including air conditioning, comfortable seating, and entertainment systems. We prioritize your comfort, ensuring a pleasant travel experience for all passengers."
            },
            {
                "WhyChooseheading": "Affordable Pricing:",
                "WhyChoosedescription": "Amruta Travels provides competitive pricing for our monthly bus hire services. We offer cost-effective solutions without compromising on quality, making us an excellent choice for budget-conscious clients."
            },
            {
                "WhyChooseheading": "24/7 Customer Support:",
                "WhyChoosedescription": "Our dedicated customer support team is available around the clock to assist with bookings, answer queries, and address any concerns you may have. We strive to provide exceptional service from start to finish."
            },
            {
                "WhyChooseheading": "Safety and Maintenance:",
                "WhyChoosedescription": "We prioritize safety by conducting regular maintenance checks on all our buses. Our stringent safety protocols ensure that our vehicles are in top condition and equipped to handle any travel situation safely."
            },
            {
                "WhyChooseheading": "Flexible Booking Options:",
                "WhyChoosedescription": "Whether you need to book a bus for a specific date or an ongoing monthly arrangement, our booking process is flexible and straightforward. We make it easy to arrange your transport needs with minimal hassle."
            },
            {
                "WhyChooseheading": "Customer Satisfaction:",
                "WhyChoosedescription": "At Amruta Travels, customer satisfaction is our top priority. We are committed to providing high-quality service and ensuring that every journey is a positive experience for our clients."
            }
        ]

    };

    const faqData = [
        {
            "question": "What types of buses are available for monthly hire?",
            "answer": "We offer a variety of buses, including 18-seater minibuses, 32-seater deluxe buses, and 50-seater luxury coaches. Our fleet is designed to accommodate different group sizes and travel needs."
        },
        {
            "question": "How do I book a monthly bus hire service?",
            "answer": "You can book our monthly bus hire service through our website or by contacting our customer support team. We offer a simple booking process and can provide a customized quote based on your requirements."
        },
        {
            "question": "What is included in the monthly bus hire package?",
            "answer": "Our monthly bus hire package includes the bus, driver services, fuel, and toll taxes. Additional services, such as extra stops or special requests, can be arranged upon request."
        },
        {
            "question": "Can I customize the monthly bus hire package?",
            "answer": "Yes, we offer customizable packages to meet your specific needs. You can adjust the service to include specific routes, schedules, and amenities based on your preferences."
        },
        {
            "question": "Are your buses equipped with amenities?",
            "answer": "Yes, our buses come with modern amenities such as air conditioning, comfortable seating, and entertainment systems. We ensure a comfortable travel experience for all passengers."
        },
        {
            "question": "How do you ensure the safety of passengers?",
            "answer": "We conduct regular maintenance checks on all our buses and follow strict safety protocols. Our drivers are trained to adhere to safety standards, ensuring a secure travel experience."
        },
        {
            "question": "What are your pricing options for monthly bus hire?",
            "answer": "Pricing depends on the type of bus, duration of the hire, and any additional services required. Contact us for a customized quote and to discuss your specific needs."
        },
        {
            "question": "Can I make changes to my booking?",
            "answer": "Yes, you can make changes to your booking by contacting us in advance. We strive to accommodate modifications based on availability and your requirements."
        },
        {
            "question": "Do you offer services for special events?",
            "answer": "Yes, our monthly bus hire services can be used for special events, including corporate functions, weddings, and group outings. We can tailor our services to meet the unique needs of your event."
        },
        {
            "question": "What is your cancellation policy?",
            "answer": "We have a flexible cancellation policy. If you need to cancel or reschedule your booking, please contact us as soon as possible. Cancellation terms may vary depending on the package and booking conditions."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mr. Arvind Sharma",
            "text": "We’ve been using Amruta Travels for our monthly bus hire service in Pune for the past six months, and the experience has been outstanding. Their buses are always punctual, clean, and well-maintained, making our daily employee commutes smooth and stress-free. The staff is professional and responsive, and they handle all our requests with efficiency. Our employees appreciate the comfort and reliability of the service, which has significantly improved our overall transportation logistics. I highly recommend Amruta Travels for any company looking for dependable and high-quality bus hire services."
        },
        {
            "name": "Miss Sneha Patel",
            "text": "Amruta Travels has been our go-to provider for monthly bus hire in Pune, and we couldn’t be happier with their service. Their buses are top-notch, and the drivers are courteous and professional. The flexibility and reliability of their service have greatly benefited our company, especially during peak hours and busy seasons. The consistent quality and attention to detail make them a standout choice for corporate transportation. We look forward to continuing our partnership with Amruta Travels and would recommend them to any organization in need of a reliable bus rental service."
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
export default MonthlyBusPune;