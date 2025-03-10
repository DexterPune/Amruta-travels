
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  PicnicInPune(){

  const cardData = 
    {
        "keyword": "Bus Hire for Picnic in Pune",
        "heading": "Amruta Travels: Bus Hire for Picnic in Pune",
        "headingDescription": "Planning a picnic in Pune? Let Amruta Travels make your outing stress-free and enjoyable with our top-notch bus hire services. We offer a diverse fleet of well-maintained and comfortable buses, perfect for group picnics and day trips around Pune. Our reliable and flexible bus hire options ensure that your journey to your favorite picnic spot is as enjoyable as the picnic itself.",
        "top": "Top Picnic Spots in Pune for Your Bus Hire:",
        "topPlaces": [
            {
                "title": "1. Lonavala",
                "description": "A favorite spot for picnics, Lonavala offers stunning views and lush greenery. Key attractions include Bhushi Dam, Tiger’s Leap, and the serene Pawna Lake. Ideal for nature lovers and adventure seekers."
            },
            {
                "title": "2. Kamshet",
                "description": "Known for its picturesque landscapes and paragliding opportunities, Kamshet is perfect for a relaxing picnic. Enjoy the beautiful hills and scenic surroundings."
            },
            {
                "title": "3. Mulshi Lake",
                "description": "A tranquil retreat away from the city hustle, Mulshi Lake is perfect for a peaceful picnic by the water. The surrounding hills and the lake’s calm waters create a picturesque setting."
            },
            {
                "title": "4. Pawna Lake",
                "description": "This artificial reservoir is a great spot for a picnic, with opportunities for boating and camping. Enjoy a day surrounded by nature with panoramic views."
            },
            {
                "title": "5. Lavasa",
                "description": "A planned city with beautiful lakeside views and modern amenities, Lavasa is ideal for a day trip. Enjoy scenic walks, outdoor activities, and a variety of dining options."
            },
            {
                "title": "6. Sinhagad Fort",
                "description": "For history enthusiasts, Sinhagad Fort offers a blend of adventure and history. Hike up the fort and enjoy panoramic views of the surrounding landscape. Perfect for an active picnic day."
            },
            {
                "title": "7. Rajmachi Fort",
                "description": "Located near Lonavala, Rajmachi Fort is great for trekking and picnicking. The fort offers spectacular views and is a popular spot for adventure enthusiasts."
            },
            {
                "title": "8. Tungarli Lake",
                "description": "This serene lake near Lonavala is a peaceful picnic spot surrounded by hills and greenery. It’s ideal for a relaxed day out in nature."
            },
            {
                "title": "9. Pune-Sohrabji Godrej Green Business Centre",
                "description": "If you prefer an urban picnic spot with beautiful gardens and greenery, this center offers a peaceful environment for a day out."
            },
            {
                "title": "10. Khadakwasla Dam",
                "description": "Located on the outskirts of Pune, Khadakwasla Dam is a popular spot for picnics with scenic views and a relaxing atmosphere. Ideal for a family outing."
            }
        ],
        "services": [
            {
                "name": "Pune to Mahabaleshwar Bus for Picnic",
                "description": "Planning a picnic to Mahabaleshwar? Our buses are perfect for a comfortable and enjoyable trip. We offer well-maintained vehicles with ample space for your group, ensuring a smooth ride from Pune to this scenic destination."
            },
            {
                "name": "Pune Darshan Bus Hire for Picnic",
                "description": "Explore Pune and its surroundings with our Pune Darshan bus hire service. Ideal for picnics, this service provides a convenient and enjoyable way to visit local attractions with your family or friends."
            },
            {
                "name": "Pune to Mysore/Ooty Bus Hire for Picnic",
                "description": "For a memorable picnic to Mysore or Ooty, Amruta Travels offers reliable bus hire services. Enjoy a comfortable journey to these popular destinations with our well-equipped buses."
            },
            {
                "name": "Bus Rental for Corporate Outing in Pune",
                "description": "Our corporate bus rental services are tailored for business groups. Whether it's a team-building event, conference, or corporate outing, we provide professional and comfortable transport solutions."
            },
            {
                "name": "Bus Hire for School Picnic in Pimpri Chinchwad",
                "description": "Ensure a successful school picnic with our bus hire service in Pimpri Chinchwad. We offer safe and reliable transportation for students and staff, making the outing enjoyable and stress-free."
            },
            {
                "name": "Bus Hire for School Picnic in Pune",
                "description": "For school picnics throughout Pune, Amruta Travels provides dedicated bus hire services. Our buses are designed to accommodate students and ensure a pleasant journey to various picnic locations."
            },
            {
                "name": "Bus Hire for Outstation Picnic in Pune",
                "description": "Planning an outstation picnic? Our bus hire services for outstation trips offer comfortable and efficient transportation to destinations beyond Pune. Enjoy a hassle-free journey with our reliable service."
            },
            {
                "name": "Party Minibus Hire Near Me",
                "description": "Looking for a minibus for a party? Our party minibus hire service is ideal for group celebrations. With spacious seating and excellent amenities, we ensure your party travels in style and comfort."
            },
            {
                "name": "Pune to Shirdi Bus Hire",
                "description": "Travel comfortably to Shirdi with our dedicated bus hire service. Perfect for religious trips and group travel, our buses offer a smooth ride and ample space for all passengers."
            },
            {
                "name": "Pune to Aurangabad Bus on Rent",
                "description": "For a trip from Pune to Aurangabad, our bus rental service provides reliable and comfortable transportation. Explore Aurangabad with ease, knowing that you have a well-maintained bus at your service."
            },
            {
                "name": "Amruta Travels Pune On Rent",
                "description": "Amruta Travels is your trusted partner for all bus rental needs in Pune. Our diverse fleet, including luxury buses, minibuses, and tempo travellers, ensures that we have the right vehicle for every occasion."
            },
            {
                "name": "Bus Hire for Picnic in Pune for Family",
                "description": "For family picnics in Pune, our bus hire service offers comfort and convenience. Enjoy a spacious and comfortable ride with your loved ones as you head to your favorite picnic spots."
            },
            {
                "name": "Tempo Traveller on Rent in Pune for Picnic",
                "description": "Our tempo travellers are perfect for group picnics. With comfortable seating and ample space, they offer a great way to travel with family or friends for a fun day out."
            },
            {
                "name": "Luxury Tempo Traveller on Rent in Pune",
                "description": "Experience a touch of luxury with our tempo traveller rental service. Ideal for picnics and special occasions, our luxury tempo travellers provide extra comfort and high-end amenities."
            },
            {
                "name": "Urbania Hire for Picnic in Pune",
                "description": "For a premium picnic experience, consider hiring an Urbania. This vehicle offers top-notch comfort and style, making your trip to various picnic destinations a memorable one."
            }
        ],
        "tableData": [
            ["Pune to Mahabaleshwar Bus for Picnic", "Pune Darshan Bus Hire for Picnic"],
            ["Pune to Mysore/Ooty Bus Hire for Picnic", "Bus Rental for Corporate Outing in Pune"],
            ["Bus Hire for School Picnic in Pimpri Chinchwad", "Bus Hire for School Picnic in Pune"],
            ["Bus Hire for Outstation Picnic in Pune", "Party Minibus Hire Near Me"],
            ["Pune to Shirdi Bus Hire", "Pune to Aurangabad Bus on Rent"],
            ["Amruta Travels Pune On Rent", "Bus Hire for Picnic in Pune for Family"],
            ["Tempo Traveller on Rent in Pune for Picnic", "Luxury Tempo Traveller on Rent in Pune"],
            ["Urbania Hire for Picnic in Pune"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Comfort and Convenience",
                "WhyChoosedescription": "Our fleet includes a range of well-maintained buses designed for comfort. From cozy mini buses to luxurious coaches, our vehicles are equipped with comfortable seating, air conditioning, and ample space for your picnic essentials."
            },
            {
                "WhyChooseheading": "Professional Drivers",
                "WhyChoosedescription": "Our experienced drivers are not only skilled at navigating Pune’s routes but also dedicated to providing a safe and smooth journey. They ensure that you reach your picnic destination on time and in comfort."
            },
            {
                "WhyChooseheading": "Flexible Booking Options",
                "WhyChoosedescription": "We offer a variety of bus sizes and rental options to suit your specific needs. Whether you're planning a family picnic, a corporate outing, or a group adventure, we can accommodate your requirements."
            },
            {
                "WhyChooseheading": "Competitive Pricing",
                "WhyChoosedescription": "Enjoy transparent and competitive pricing with no hidden fees. We provide detailed quotes that help you plan your budget effectively, ensuring you get excellent value for your money."
            },
            {
                "WhyChooseheading": "Excellent Customer Service",
                "WhyChoosedescription": "Our customer service team is here to assist you throughout the booking process and address any queries you may have. We are committed to providing a seamless and stress-free experience from start to finish."
            },
            {
                "WhyChooseheading": "Wide Range of Destinations",
                "WhyChoosedescription": "We service various picnic spots around Pune, from scenic lakes and serene hills to historical forts and modern attractions. Let us handle the transportation while you focus on enjoying your day out."
            }
        ]
    };

    const faqData = [
        {
            "question": "What types of buses are available for picnic hire?",
            "answer": "We offer a range of buses, including mini buses, standard buses, and luxury coaches. Each bus is equipped with comfortable seating, air conditioning, and ample storage space for picnic supplies."
        },
        {
            "question": "How do I book a bus for a picnic in Pune?",
            "answer": "You can book a bus by contacting us directly through our website or by phone. Provide details about your picnic plans, such as the date, number of passengers, and destination, and we will help you choose the best option."
        },
        {
            "question": "Are there any additional charges besides the quoted price?",
            "answer": "Our pricing is transparent and includes all standard charges. We provide detailed quotes so you are aware of the total cost upfront. Any additional services or extra hours may incur additional charges, which will be communicated to you in advance."
        },
        {
            "question": "Can I make changes to my booking after it has been confirmed?",
            "answer": "Yes, we allow changes to your booking based on availability. Please contact us as soon as possible to discuss any modifications to your itinerary or bus requirements."
        },
        {
            "question": "What if there is an emergency or delay on the day of the picnic?",
            "answer": "Our drivers are trained to handle unforeseen circumstances and will ensure your safety and comfort. In case of emergencies or delays, please contact us immediately, and we will assist you promptly."
        },
        {
            "question": "Is it possible to hire a bus for a one-day picnic trip?",
            "answer": "Yes, we offer flexible rental options, including one-day hires. Whether you need the bus for a few hours or a full day, we can accommodate your schedule."
        },
        {
            "question": "How early should I book a bus for a picnic?",
            "answer": "We recommend booking your bus at least a few weeks in advance to ensure availability, especially during peak seasons or popular picnic dates."
        },
        {
            "question": "Can I request specific amenities or services on the bus?",
            "answer": "Yes, you can request specific amenities or services when making your booking. We will do our best to accommodate your preferences, such as extra luggage space, refreshments, or entertainment options."
        },
        {
            "question": "Are your buses equipped with safety features?",
            "answer": "Absolutely. Our buses are regularly maintained and equipped with safety features such as seat belts, first aid kits, and fire extinguishers to ensure a safe journey."
        },
        {
            "question": "What is your cancellation policy?",
            "answer": "Our cancellation policy varies depending on the booking conditions. Please refer to our terms and conditions or contact us for detailed information regarding cancellations and refunds."
        }
    ];
    
    const testimonials = [
        {
            "name": "Mr. Anil Deshmukh",
            "text": "We had an incredible time on our family picnic thanks to Amruta Travels! The bus we hired was spacious, clean, and perfect for our group. The driver was friendly and punctual, making sure we had everything we needed for a smooth journey. The comfort and convenience provided by Amruta Travels made our outing truly enjoyable. Highly recommend their bus hire service for anyone planning a picnic in Pune!"
        },
        {
            "name": "Miss Rina Patel",
            "text": "Our school picnic was a huge success, thanks to Amruta Travels. The bus we rented was well-maintained and comfortable, and the service was impecbusle. The driver was very accommodating and made sure we reached our destination on time. The entire experience with Amruta Travels was seamless and stress-free. For reliable and efficient bus hire for picnics in Pune, they are the best choice!"
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
        heading: "Bus Hire for picnic in Pune contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Hire for Picnic in Pune | Outstation & Family Picnic Bus Rentals</title>
  <meta name="description" content="Amruta Travels offers bus rental services in Pune for various picnic destinations including Mahabaleshwar, Shirdi, Aurangabad, Mysore, and Ooty. Perfect for family picnics, corporate outings, and school trips. Options include luxury buses, mini buses, and tempo travellers. Reliable and comfortable travel for all your picnic needs." />
  <meta name="keywords" content="Bus Hire for Picnic in Pune, Pune to Mahabaleshwar Bus for Picnic, Pune Darshan Bus Hire for Picnic, Pune to Mysore Ooty Bus Hire for Picnic, Bus Rental for Corporate Outing in Pune, Bus Hire for School Picnic in Pimpri Chinchwad, Bus Hire for School Picnic in Pune, Bus Hire for Outstation Picnic in Pune, Party Mini Bus Hire Near Me, Pune to Shirdi Bus Hire, Pune to Aurangabad Bus on Rent, Amruta Travels Pune On Rent, Bus Hire for Picnic in Pune for Family, Tempo Traveller on Rent in Pune for Picnic, Luxury Tempo Traveller on Rent in Pune, Urbania Hire for Picnic in Pune" />
  <meta property="og:title" content="Contact: +91 8421333435 | Amruta Travels | Bus Hire for Picnic in Pune | Outstation & Family Picnic Bus Rentals" />
  <meta property="og:description" content="Looking for a bus hire for your picnic in Pune? Amruta Travels provides bus rental services for destinations like Mahabaleshwar, Shirdi, Aurangabad, Mysore, and Ooty. Ideal for family outings, corporate picnics, and school trips. Choose from luxury buses, mini buses, and tempo travellers for a comfortable experience." />
  <meta property="og:url" content="https://yourwebsite.com/bus-hire-picnic-pune" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://yourwebsite.com/bus-hire-picnic-pune.jpg" />
 
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
    <img src='\img\Keyword Based Image\Keyword Based Image-40.jpg' alt='img'/>
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
export default PicnicInPune;