
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Hinjewadi(){

  const cardData = 
    {
        "keyword": "Bus on Rent in Hinjewadi",
        "heading": "Amruta Travels: Bus on Rent in Hinjewadi",
        "headingDescription": "Are you searching for reliable and comfortable bus rental services in Hinjewadi? Look no further! At Amruta Travels, we specialize in providing top-notch bus rental solutions tailored to meet your needs. Whether you're planning a corporate outing, a family trip, or a group event, our diverse fleet of well-maintained buses is at your service.",
        "top": "Top Places to Visit in Hinjewadi with Amruta Travels:",
        "topPlaces": [
            {
                "title": "1. Rajiv Gandhi Infotech Park",
                "description": "This sprawling tech park is the heart of Hinjewadi, housing numerous IT companies and offering a glimpse into the vibrant tech industry of Pune."
            },
            {
                "title": "2. The Pavillion",
                "description": "A popular dining and entertainment spot, The Pavillion offers a range of restaurants and shops, making it a great place to relax and enjoy."
            },
            {
                "title": "3. Mahalaxmi Temple",
                "description": "A serene and spiritually enriching place, this temple is a significant religious site for locals and visitors alike."
            },
            {
                "title": "4. Sangamner",
                "description": "Located nearby, Sangamner is known for its beautiful landscapes and is a perfect spot for a quick getaway."
            },
            {
                "title": "5. Pashan Lake",
                "description": "A picturesque lake offering a tranquil environment for picnics and nature walks, ideal for a peaceful retreat from the city hustle."
            },
            {
                "title": "6. Kasarwadi Ganpati Mandir",
                "description": "An ancient and revered temple, it attracts devotees seeking blessings and a peaceful atmosphere."
            },
            {
                "title": "7. Wagholi Fort",
                "description": "Explore the historical Wagholi Fort, which offers insights into the region's rich history and stunning views of the surrounding landscape."
            },
            {
                "title": "8. Della Adventure Park",
                "description": "Located a short drive away, this adventure park provides thrilling activities for all ages, making it a great destination for family outings."
            },
            {
                "title": "9. Sinhagad Fort",
                "description": "A historical fort offering breathtaking views and a glimpse into Pune's past, Sinhagad Fort is a must-visit for history enthusiasts."
            },
            {
                "title": "10. Vishram Baug Wada",
                "description": "An old wada showcasing traditional architecture, it offers a peek into the bygone era of Pune's history and culture."
            }
        ],
        "services": [
            {
                "name": "Bus on Rent in Wakad",
                "description": "Whether you're planning a group outing or need transportation for a special event, we offer comfortable and reliable buses for rent in Wakad. Our fleet includes various sizes and types to suit your needs."
            },
            {
                "name": "Bus on Rent in Hinjewadi for Corporate Outings",
                "description": "Make your corporate events more memorable with our premium bus rental services. We provide spacious and comfortable buses for corporate outings, ensuring a smooth and enjoyable experience for your team."
            },
            {
                "name": "Bus on Rent in Hinjewadi for Outstations",
                "description": "Traveling to outstation destinations? Our well-maintained buses are perfect for long journeys, providing comfort and convenience throughout your trip."
            },
            {
                "name": "Bus Hire for Wedding in Hinjewadi",
                "description": "Make your wedding day special with our elegant and spacious buses. We offer bus rental services for weddings, ensuring that your guests travel in style and comfort."
            },
            {
                "name": "Bharat Benz 35 Seater Bus on Rent in Hinjewadi",
                "description": "Experience luxury and comfort with our Bharat Benz 35-seater buses. Ideal for group travel, these buses offer premium amenities and ample space."
            },
            {
                "name": "Force Urbania Luxury Mini Bus on Rent in Hinjewadi",
                "description": "For a touch of luxury, opt for our Force Urbania mini buses. Perfect for both corporate and leisure travel, these buses provide a comfortable and stylish journey."
            },
            {
                "name": "Corporate Outing Bus Hire in Hinjewadi",
                "description": "Plan a successful corporate outing with our specialized bus rental services. We cater to all your transportation needs, ensuring a hassle-free experience for your business events."
            },
            {
                "name": "Tempo Traveller Hire in Hinjewadi",
                "description": "For smaller groups or more intimate travel, our Tempo Travellers are a great choice. They offer comfort and flexibility for various occasions."
            },
            {
                "name": "Mini Bus on Rent in Hinjewadi",
                "description": "Our mini buses are ideal for family trips, small group outings, and more. Rent a mini bus in Hinjewadi for a convenient and comfortable travel experience."
            },
            {
                "name": "Bus Hire for Marriage in Hinjewadi",
                "description": "Ensure your wedding transportation is flawless with our bus rental services. We provide buses suited for wedding events, offering comfort and reliability for your big day."
            },
            {
                "name": "Bus Hire for Wedding Near Me Pune",
                "description": "Looking for wedding bus hire options close to you? We offer convenient solutions for wedding transportation throughout Pune, including Hinjewadi."
            },
            {
                "name": "14, 17, 25, 32 Seater Bus on Rent in Hinjewadi",
                "description": "Choose from our range of seater options to find the perfect bus for your group size. We offer 14, 17, 25, and 32-seater buses for various needs."
            },
            {
                "name": "Mini Bus on Rent in Baner Aundh",
                "description": "Our mini buses are also available for rent in Baner and Aundh, providing flexibility and comfort for your local and regional travel needs."
            },
            {
                "name": "Tempo Traveller on Rent in Wakad",
                "description": "For those in Wakad, we offer Tempo Travellers that are perfect for both short and long-distance trips."
            },
            {
                "name": "Urbania on Rent in Wakad and Hinjewadi",
                "description": "Enjoy the comfort and luxury of Urbania buses available for rent in Wakad and Hinjewadi. Ideal for both corporate and leisure travel."
            },
            {
                "name": "Force Urbania on Rent in Koregaon Park",
                "description": "Opt for our Force Urbania buses in Koregaon Park for a stylish and comfortable travel experience."
            }
        ],
        "tableData": [
            ["Bus on Rent in Wakad", "Bus on Rent in Hinjewadi for Corporate Outing"],
            ["Bus on Rent in Hinjewadi for Outstations", "Bus Hire for Wedding in Hinjewadi"],
            ["Bharat Benz 35 Seater Bus on Rent in Hinjewadi", "Force Urbania Luxury Mini Bus on Rent in Hinjewadi"],
            ["Corporate Outing Bus Hire in Hinjewadi", "Tempo Traveller Hire in Hinjewadi"],
            ["Mini Bus on Rent in Hinjewadi", "Bus Hire for Marriage in Hinjewadi"],
            ["Bus Hire for Wedding Near Me Pune", "14, 17, 25, 32 Seater Bus on Rent in Hinjewadi"],
            ["Amruta Travels Pune On Rent", "Mini Bus on Rent in Hinjewadi"],
            ["Mini Bus on Rent in Baner Aundh", "Mini Bus on Rent in Wakad Pune"],
            ["Tempo Traveller on Rent in Wakad", "Urbania on Rent in Wakad"],
            ["Urbania on Rent in Hinjewadi", "Force Urbania on Rent in Koregaon Park"],
            ["Bus on Rent in Hinjewadi for Outstation", "Mini Bus on Rent in Hinjewadi"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Diverse Fleet of Buses",
                "WhyChoosedescription": "Amruta Travels offers a wide range of buses to cater to various group sizes and travel requirements. Whether you need a 14-seater for a small group or a 50-seater for a large event, our fleet is well-maintained and ready to provide a comfortable journey."
            },
            {
                "WhyChooseheading": "Exceptional Comfort and Safety",
                "WhyChoosedescription": "We prioritize the comfort and safety of our passengers. Our buses are equipped with modern amenities, ensuring a smooth and pleasant ride. Regular maintenance checks and safety inspections guarantee that all vehicles meet the highest safety standards."
            },
            {
                "WhyChooseheading": "Professional and Experienced Drivers",
                "WhyChoosedescription": "Our drivers are not only skilled and experienced but also committed to providing excellent customer service. They are familiar with local routes and traffic conditions, ensuring timely and efficient travel. Their professionalism adds to the overall quality of your journey."
            },
            {
                "WhyChooseheading": "Competitive Pricing",
                "WhyChoosedescription": "Amruta Travels offers competitive and transparent pricing for bus rentals. We provide value for money without compromising on quality. Our pricing structure is designed to be budget-friendly, ensuring that you receive excellent service at a reasonable cost."
            },
            {
                "WhyChooseheading": "Customized Solutions",
                "WhyChoosedescription": "We understand that every trip is unique. Whether it's a corporate event, school outing, or family gathering, we offer customized solutions to meet your specific needs. Our team works closely with you to tailor our services to your requirements."
            },
            {
                "WhyChooseheading": "Reliable and Punctual Service",
                "WhyChoosedescription": "Reliability is at the core of our service. We value your time and strive to be punctual for every booking. Whether it's a scheduled trip or a last-minute arrangement, you can count on us to be on time and deliver as promised."
            },
            {
                "WhyChooseheading": "Easy Booking Process",
                "WhyChoosedescription": "Booking a bus with Amruta Travels is simple and hassle-free. Our user-friendly booking system allows you to reserve your bus quickly. Our customer support team is also available to assist with any queries or special requests."
            },
            {
                "WhyChooseheading": "Excellent Customer Support",
                "WhyChoosedescription": "Our dedicated customer support team is always ready to assist you with any questions or concerns. We are committed to providing a seamless and enjoyable experience from start to finish."
            },
            {
                "WhyChooseheading": "Positive Customer Feedback",
                "WhyChoosedescription": "Our customers frequently commend us for our reliable service, comfortable vehicles, and friendly staff. Positive testimonials and repeat business are a testament to the high quality of service we provide."
            },
            {
                "WhyChooseheading": "Commitment to Quality",
                "WhyChoosedescription": "At Amruta Travels, we are committed to maintaining high standards of service. Our focus on customer satisfaction drives us to continually improve and exceed expectations."
            }
        ]
    };

    const faqData = [
        {
            "question": "What types of buses are available for rent in Hinjewadi?",
            "answer": "We offer a range of buses including mini buses, standard coaches, luxury buses, and Tempo Travellers. Whether you need a 14-seater mini bus or a 50-seater coach, we have options to fit your requirements."
        },
        {
            "question": "How can I book a bus rental with Amruta Travels?",
            "answer": "Booking is easy! You can contact us via phone, email, or our website. Provide details about your trip, including the date, number of passengers, and any specific requirements, and we will handle the rest."
        },
        {
            "question": "Are your buses equipped with amenities?",
            "answer": "Yes, our buses come with various amenities such as air conditioning, comfortable seating, and entertainment systems. Luxury buses may also offer additional features like Wi-Fi and refreshments."
        },
        {
            "question": "What is the pricing structure for bus rentals?",
            "answer": "Pricing depends on factors such as the type of bus, rental duration, and distance traveled. We offer competitive rates and provide detailed quotes with no hidden fees. Contact us for a customized quote based on your needs."
        },
        {
            "question": "Are your drivers experienced and professional?",
            "answer": "Absolutely. All our drivers are experienced, professionally trained, and committed to providing a safe and pleasant travel experience. They are familiar with local routes and regulations."
        },
        {
            "question": "Can I make changes to my booking after it's been confirmed?",
            "answer": "Yes, we offer flexibility with bookings. If you need to make changes, please contact us as soon as possible, and we will do our best to accommodate your requests."
        },
        {
            "question": "What should I do if I have a special request or requirement?",
            "answer": "Let us know your special requests or requirements at the time of booking. We strive to accommodate all reasonable requests to make your journey as comfortable as possible."
        },
        {
            "question": "Is there a minimum rental duration?",
            "answer": "Rental duration varies depending on the type of bus and the nature of the trip. For local trips, there may be a minimum duration, while for outstation trips, we provide flexible options. Contact us for specific details."
        },
        {
            "question": "Do you offer bus rentals for events such as weddings or corporate outings?",
            "answer": "Yes, we specialize in providing buses for various events, including weddings, corporate outings, and family gatherings. Our team can assist with planning and ensuring that your event transportation meets your expectations."
        },
        {
            "question": "How do I contact Amruta Travels for more information?",
            "answer": "You can reach us via phone, email, or our website’s contact form. Our customer service team is available to assist you with any questions or booking needs."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mr. Rajesh Patel",
            "text": "Our journey from Pune to Panvel with Amruta Travels was exceptional! The bus was pristine and the driver was both professional and friendly. We had a comfortable and smooth ride, and the attention to detail made the trip enjoyable. Amruta Travels truly exceeded our expectations with their reliable service. We highly recommend them for anyone looking for a hassle-free travel experience."
        },
        {
            "name": "Miss Priya Sharma",
            "text": "I recently used Amruta Travels for a bus ride from Pune to Panvel, and I couldn't be happier with the service. The vehicle was well-maintained and the driver was punctual and courteous. The entire experience was stress-free, and the quality of service made the trip pleasant. Amruta Travels is now my go-to for all my travel needs. Fantastic job and thank you for making our journey so comfortable!"
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
        heading: "Bus on Rent in Hinjewadi contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus on Rent in Hinjewadi Pune | Corporate & Wedding Bus Hire</title>
  <meta name="description" content="Amruta Travels offers diverse bus rental services in Hinjewadi, Pune, including 14, 17, 25, and 32-seater options. Ideal for corporate outings, weddings, and outstation trips. Explore our Bharat Benz 35-seater, Force Urbania luxury mini bus, and Tempo Traveller rentals. Reliable service for all events." />
  <meta name="keywords" content="Bus on Rent in Hinjewadi Pune, Bus Hire in Wakad, Bus on Rent for Corporate Outing Hinjewadi, Bus on Rent for Outstations Hinjewadi, Wedding Bus Hire Hinjewadi, Bharat Benz 35 Seater Bus on Rent Hinjewadi, Force Urbania Luxury Mini Bus on Rent Hinjewadi, Corporate Outing Bus Hire Hinjewadi, Tempo Traveller Hire Hinjewadi, Mini Bus on Rent in Hinjewadi, Bus Hire for Marriage Hinjewadi, Bus Hire for Wedding Near Me Pune, 14 Seater Bus on Rent Hinjewadi, 17 Seater Bus on Rent Hinjewadi, 25 Seater Bus on Rent Hinjewadi, 32 Seater Bus on Rent Hinjewadi, Amruta Travels Pune On Rent, Mini Bus on Rent Baner Aundh, Mini Bus on Rent in Wakad Pune, Tempo Traveller on Rent in Wakad, Urbania on Rent in Wakad, Urbania on Rent in Hinjewadi, Force Urbania on Rent in Koregaon Park, Bus on Rent in Hinjewadi for Outstation" />
  <meta property="og:title" content="Contact: +91 8421333435 | Amruta Travels | Bus on Rent in Hinjewadi Pune | Corporate & Wedding Bus Hire" />
  <meta property="og:description" content="Need a bus rental in Hinjewadi, Pune? Amruta Travels provides a variety of options including Bharat Benz 35-seater, Force Urbania luxury mini bus, and Tempo Traveller. Perfect for corporate outings, weddings, and outstation trips. Choose from 14, 17, 25, and 32-seater buses. Reliable service for all occasions." />
  <meta property="og:url" content="https://yourwebsite.com/bus-rent-hinjewadi-pune" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://yourwebsite.com/bus-rent-hinjewadi-pune.jpg" />
 
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
    <img src='\img\Keyword Based Image\Keyword Based Image-62.jpg' alt='img'/>
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
export default Hinjewadi;