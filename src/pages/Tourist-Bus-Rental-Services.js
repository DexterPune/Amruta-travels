
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  ToristBusService(){

  const cardData = 
    {
        "keyword": "Tourist Bus Rental Services in India",
        "heading": "Amruta Travels – Top Tourist Bus Rental Services Across India",
        "headingDescription": "Amruta Travels is a leading provider of tourist bus rental services, offering top-quality transportation for groups, families, corporate teams, and schools. Whether it's for a one-day excursion, a long vacation, or a special event, Amruta Travels ensures that your journey is comfortable, safe, and enjoyable. With a fleet of well-maintained buses and a commitment to customer satisfaction, we are the go-to choice for bus rental services across India.",
        "top": "Top Tourist Bus Rental Services by Amruta Travels:",
        "topPlaces": [
            {
                "title": "1. Pune to Rajasthan Tourist Bus Rental",
                "description": "Explore the royal state of Rajasthan with our premium bus rental services. Our comfortable buses are ideal for long-distance travel, making your journey to Jaipur, Jodhpur, Udaipur, and other key destinations smooth and enjoyable."
            },
            {
                "title": "2. Pune to Goa Tourist Bus Rental",
                "description": "Head to the sun-kissed beaches of Goa with our luxurious buses, designed for both comfort and convenience. Whether it's a group vacation or a corporate retreat, we provide top-notch service for your trip from Pune to Goa."
            },
            {
                "title": "3. Pune to Mahabaleshwar Tourist Bus Rental",
                "description": "Enjoy the scenic beauty of Mahabaleshwar with our well-maintained buses. Perfect for family outings, school trips, or corporate tours, our bus services ensure a smooth and relaxing journey to this popular hill station."
            },
            {
                "title": "4. Pune to Lonavala and Khandala Tourist Bus Rental",
                "description": "Ideal for weekend getaways, our tourist bus rental services to Lonavala and Khandala are designed to offer you a comfortable and enjoyable experience. Travel with ease as you explore these beautiful hill stations near Pune."
            },
            {
                "title": "5. Pune to Shirdi Tourist Bus Rental",
                "description": "For pilgrims traveling to the holy town of Shirdi, Amruta Travels provides safe and reliable bus rental services. Our buses are equipped with modern amenities to make your spiritual journey comfortable and stress-free."
            },
            {
                "title": "6. Corporate Event Bus Rentals",
                "description": "Amruta Travels offers tailored bus rental services for corporate events, conferences, and team outings. Whether it's a day trip or a multi-day event, we ensure timely service, comfort, and professionalism for your team’s transportation needs."
            },
            {
                "title": "7. School and College Excursion Bus Rentals",
                "description": "Planning a school or college trip? Amruta Travels provides secure and comfortable buses for educational excursions. Our experienced drivers ensure that students and staff have a safe and enjoyable trip to their destination."
            },
            {
                "title": "8. Wedding and Event Bus Rental Services",
                "description": "Make transportation easy for your wedding or special event with Amruta Travels' bus rental services. Whether it's shuttling guests between venues or organizing a group trip, our buses provide a comfortable and convenient option for large groups."
            },
            {
                "title": "9. Pune to Konkan Tourist Bus Rental",
                "description": "Experience the beauty of the Konkan coast with our dedicated tourist bus services. Our buses are perfect for group tours, offering comfort and convenience as you explore the picturesque beaches and scenic landscapes of Konkan."
            },
            {
                "title": "10. Outstation Tourist Bus Rentals Across India",
                "description": "Amruta Travels also offers outstation tourist bus rentals to destinations across India, including popular tourist spots like Kerala, Himachal Pradesh, and Madhya Pradesh. Our buses are equipped for long-distance travel, ensuring you have a comfortable and enjoyable experience no matter where you go."
            }
        ],
        "services": [
            {
                "name": "Tour Bus Rental Services in Pune",
                "description": "Looking for a reliable tour bus rental service in Pune? Whether you’re planning a family vacation, corporate event, or group travel, we offer a range of options to suit your needs. Explore our diverse fleet and enjoy a comfortable and hassle-free journey."
            },
            {
                "name": "Tour Bus Rental Cost in Pune",
                "description": "Understanding the cost of renting a tour bus is crucial for planning your budget. Factors influencing tour bus rental costs in Pune include the duration of rental, distance traveled, type of bus, and additional services. Contact us for a customized quote that fits your requirements."
            },
            {
                "name": "Tourist Bus Rental Services in Bibwewadi",
                "description": "In Bibwewadi, we provide top-notch tourist bus rental services for various events and trips. Our buses are well-maintained and equipped with modern amenities to ensure a pleasant travel experience."
            },
            {
                "name": "Tourist Bus Rental Services in Hadapsar",
                "description": "Hadapsar residents and visitors can now benefit from our reliable tourist bus rental services. We cater to all types of tours and group travel needs, providing comfortable and efficient transportation."
            },
            {
                "name": "Tourist Bus Rental Services in Hinjewadi",
                "description": "For those in Hinjewadi, our tourist bus rental services offer convenience and luxury. Whether you’re organizing a business trip or a family outing, our buses are ready to meet your expectations."
            },
            {
                "name": "Tour Bus Rental Near Me Pune",
                "description": "Searching for a tour bus rental near you in Pune? Our extensive network ensures that we have rental options available throughout the city. Find a location that suits you and book your tour bus with ease."
            },
            {
                "name": "Tour Bus Hire in Pune",
                "description": "Tour bus hire in Pune has never been easier. Choose from our wide range of buses and enjoy a comfortable journey to your destination. We offer flexible rental options and excellent customer service."
            },
            {
                "name": "Private Tour Bus Rental in Shivaji Nagar",
                "description": "For private events and exclusive tours in Shivaji Nagar, our private tour bus rental services provide the privacy and comfort you need. Enjoy a personalized experience with our dedicated services."
            },
            {
                "name": "Tour Bus Rental Price",
                "description": "Tour bus rental prices vary based on several factors including bus type, rental duration, and additional services. Get in touch with us for competitive pricing and to find the best deal for your tour bus rental."
            },
            {
                "name": "Mini Tour Bus Rental",
                "description": "Need a smaller vehicle for a more intimate group? Our mini tour bus rental options offer a perfect balance between comfort and affordability, ideal for smaller groups or short trips."
            },
            {
                "name": "Hire a Bus for Tour in Pune",
                "description": "Hiring a bus for a tour in Pune is simple with our comprehensive services. From luxury to economy options, we provide buses that cater to all types of tours, ensuring a memorable travel experience."
            },
            {
                "name": "Luxury Tour Bus Companies",
                "description": "Looking for luxury tour bus options? Our luxury tour bus companies offer premium services, including high-end amenities and superior comfort, perfect for those seeking an upscale travel experience."
            },
            {
                "name": "Luxury Tour Bus Rentals Service",
                "description": "Experience the ultimate in comfort and style with our luxury tour bus rentals. Designed for those who demand the best, our luxury buses come equipped with the latest features and exceptional service."
            },
            {
                "name": "Sleeper Tour Bus Hire Pune",
                "description": "For long-distance journeys or overnight travel, our sleeper tour bus hire service in Pune provides a comfortable and restful experience. Enjoy plush beds and amenities that ensure a good night’s sleep on the road."
            },
            {
                "name": "Amruta Travels Pune On Rent",
                "description": "Amruta Travels offers exceptional bus rental services in Pune. Whether you need a luxury coach, a mini bus, or a sleeper bus, we have the perfect solution for your travel needs. Book with us for a seamless and enjoyable experience."
            }
        ],
        "tableData": [
            ["Tour Bus Rental in Pune", "Tour Bus Rental Cost in Pune"],
            ["Tourist Bus Rental Services in Bibwewadi", "Tourist Bus Rental Services in Hadapsar"],
            ["Tourist Bus Rental Services in Hinjewadi", "Tour Bus Rental Near Me Pune"],
            ["Tour Bus Hire in Pune", "Private Tour Bus Rental in Shivaji Nagar"],
            ["Tour Bus Rental Price", "Mini Tour Bus Rental"],
            ["Hire a Bus for Tour in Pune", "Luxury Tour Bus Companies"],
            ["Luxury Tour Bus Rentals Service", "Sleeper Tour Bus Hire Pune"],
            ["Amruta Travels Pune On Rent"]
        ],
        "whychoose": [
            {
                "WhyChooseheading": "Extensive Fleet of Buses:",
                "WhyChoosedescription": "Amruta Travels offers a wide range of buses to suit all group sizes and needs. From 18-seater minibuses to 50-seater luxury coaches, we have the perfect vehicle for your journey."
            },
            {
                "WhyChooseheading": "Experienced and Professional Drivers:",
                "WhyChoosedescription": "Our drivers are highly skilled, licensed, and well-versed with various routes, ensuring your safety and punctuality. They provide exceptional service and are committed to making your travel experience smooth and enjoyable."
            },
            {
                "WhyChooseheading": "Comfort and Luxury:",
                "WhyChoosedescription": "Our buses are equipped with modern amenities like air conditioning, reclining seats, ample legroom, and entertainment systems. We ensure maximum comfort, even for long-distance trips."
            },
            {
                "WhyChooseheading": "Affordable Pricing:",
                "WhyChoosedescription": "We offer competitive pricing without compromising on quality. Our flexible packages are designed to fit your budget, whether you need a bus for a day trip, a weekend getaway, or a longer vacation."
            },
            {
                "WhyChooseheading": "Customizable Travel Packages:",
                "WhyChoosedescription": "Amruta Travels understands that every journey is unique. We provide customizable bus rental packages tailored to your specific travel needs, including route preferences, pick-up/drop-off locations, and sightseeing stops."
            },
            {
                "WhyChooseheading": "24/7 Customer Support:",
                "WhyChoosedescription": "Our dedicated customer service team is available around the clock to assist with your booking, answer any questions, and ensure a hassle-free experience from start to finish."
            },
            {
                "WhyChooseheading": "Safety and Maintenance:",
                "WhyChoosedescription": "Safety is our top priority. All our buses undergo regular maintenance checks to ensure they are in top condition for every trip. We also follow strict safety protocols to provide a secure travel experience."
            },
            {
                "WhyChooseheading": "Punctual and Reliable Service:",
                "WhyChoosedescription": "We pride ourselves on timely pick-up and drop-off services. Whether you're traveling for an event, a vacation, or a pilgrimage, we ensure you reach your destination on time, every time."
            }
        ]

    };

    const faqData = [
        {
            "question": "What types of buses do you offer for rental?",
            "answer": "We offer a variety of buses, including 18-seater minibuses, 32-seater deluxe buses, and 50-seater luxury coaches. All are equipped with modern amenities for comfort."
        },
        {
            "question": "How do I book a bus rental service with Amruta Travels?",
            "answer": "You can book our services online through our website or by calling our 24/7 customer support team. We also offer customized packages tailored to your travel needs."
        },
        {
            "question": "What is included in the bus rental package?",
            "answer": "Our bus rental packages include the bus, professional driver services, fuel, and toll taxes. Additional services like a tour guide or customized itinerary can be arranged upon request."
        },
        {
            "question": "Do you offer outstation bus rental services?",
            "answer": "Yes, we provide bus rental services for outstation trips across India, including destinations like Rajasthan, Goa, Mahabaleshwar, and Konkan."
        },
        {
            "question": "Are your buses available for corporate events and weddings?",
            "answer": "Absolutely! We offer tailored bus rental services for corporate events, weddings, family functions, and more. Our team will work closely with you to meet your specific requirements."
        },
        {
            "question": "How much does it cost to rent a tourist bus?",
            "answer": "Pricing depends on the type of bus, destination, and duration of the trip. Contact us for a customized quote based on your travel needs."
        },
        {
            "question": "Can I rent a bus for a one-day trip?",
            "answer": "Yes, we offer one-day bus rental services for excursions, picnics, and local sightseeing. Whether you need a bus for a short trip or a multi-day adventure, we have options available."
        },
        {
            "question": "Do your buses have air conditioning and other amenities?",
            "answer": "Yes, all our buses come with air conditioning, reclining seats, and ample legroom. Some buses also feature entertainment systems for added convenience."
        },
        {
            "question": "Is a security deposit required for booking a bus?",
            "answer": "In most cases, we require a small security deposit to confirm your booking. This will be discussed during the booking process."
        },
        {
            "question": "What is your cancellation policy?",
            "answer": "We understand that plans can change. You can cancel or reschedule your booking by contacting us in advance. Cancellation policies may vary based on the package selected, so please check the terms at the time of booking."
        }
    ];
    
    const testimonials = [
        {
            "name": "Miss Anjali Rao",
            "text": "Our experience with Amruta Travels for tourist bus rental services was exceptional. From the initial booking to the end of our trip, everything was handled professionally and efficiently. The bus was impeccably clean, spacious, and equipped with all the necessary amenities that made our journey comfortable. The driver was courteous and navigated the routes skillfully, ensuring we reached our destinations safely and on time. Amruta Travels truly provided a stress-free travel experience, and I would highly recommend their services to anyone in need of reliable and high-quality tourist bus rentals."
        },
        {
            "name": "Mr. Rajesh Kulkarni",
            "text": "We recently used Amruta Travels for our group tour, and their tourist bus rental services exceeded our expectations. The booking process was straightforward, and their team was very responsive to our queries. The bus itself was luxurious and well-maintained, offering a smooth and pleasant ride throughout our trip. The added comfort and amenities, including ample legroom and modern entertainment options, made a significant difference. The overall service was impeccable, making our journey enjoyable and memorable. I highly recommend Amruta Travels for anyone looking for top-notch tourist bus rental services."
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
export default ToristBusService;