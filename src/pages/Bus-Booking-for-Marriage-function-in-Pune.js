
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusBookingForMarriageInPune(){

  const cardData = 
    {
      keyword: 'Bus Booking for Marriage Functions in Pune',
      heading: ' Amruta Travels: Bus Booking for Marriage Functions in Pune',

      headingDescription: 'Planning a marriage function involves a lot of coordination, and transportation is a key component to ensure everything runs smoothly. Amruta Travels offers a comprehensive range of bus booking services tailored specifically for marriage functions in Pune. Whether you need local transportation or outstation travel, we provide reliable, comfortable, and luxurious options to suit your needs. Explore our services and features below:',

      top:"Top Features of Our Marriage Function Bus Rental Services",

      topPlaces : [
        {
            "title": "Wide Range of Bus Sizes",
            "description": "Choose from various bus sizes including 17-seater, 25-seater, 32-seater, 35-seater, and 40-seater to accommodate all your guests comfortably."
        },
        {
            "title": "Luxury and Comfort",
            "description": "Our buses are designed for luxury and comfort, featuring plush seating, spacious interiors, and modern amenities to enhance your travel experience."
        },
        {
            "title": "Air-Conditioned Buses",
            "description": "Enjoy a cool and comfortable journey with our fully air-conditioned buses, ensuring a pleasant ride regardless of the weather."
        },
        {
            "title": "Professional Drivers",
            "description": "Our experienced drivers are dedicated to providing safe and smooth transportation. They are skilled in managing the logistics of marriage functions and ensuring timely arrivals."
        },
        {
            "title": "Customizable Packages",
            "description": "We offer flexible and customizable rental packages to fit your specific requirements, including additional amenities and special arrangements."
        },
        {
            "title": "Transparent Pricing",
            "description": "Benefit from clear and upfront pricing with no hidden fees. We provide detailed quotes so you can plan your budget accurately."
        },
        {
            "title": "Punctual Service",
            "description": "We emphasize punctuality, making sure that all transportation schedules are met and your guests arrive on time."
        },
        {
            "title": "Local and Outstation Rentals",
            "description": "Whether your marriage function is within Pune or requires outstation travel, we provide dependable transportation solutions for both scenarios."
        },
        {
            "title": "Easy Booking Process",
            "description": "Booking is simple with Amruta Travels. Contact us via phone, email, or our online form, and we’ll handle the rest."
        },
        {
            "title": "Exceptional Customer Support",
            "description": "Our dedicated customer support team is available to address any queries or issues, ensuring a seamless experience from start to finish."
        }
    ],
    "services": [
        {
            "name": "Full Bus Booking for Marriage Price",
            "description": "Obtain a competitive quote for full bus bookings tailored to your marriage function. We provide detailed pricing to help you plan your budget."
        },
        {
            "name": "Tourist Bus Booking for Marriage",
            "description": "For a comfortable and enjoyable travel experience, consider our tourist bus options. Perfect for long-distance or local travel, ensuring a pleasant journey for your guests."
        },
        {
            "name": "Reserve Bus for Marriage in Pune",
            "description": "Secure your bus rental with ease. Amruta Travels offers a straightforward reservation process for marriage functions in Pune."
        },
        {
            "name": "Bus Booking for Marriage Party",
            "description": "Ensure smooth transportation for your marriage party with our reliable bus rental services, designed to accommodate all your guests comfortably."
        },
        {
            "name": "Bus Booking for Marriage Pune to Outstation",
            "description": "Need transportation for outstation travel? We offer dependable bus services for marriage functions traveling from Pune to other locations."
        },
        {
            "name": "Bus for Marriage Booking in Pune",
            "description": "Find the ideal bus for your marriage function in Pune with our wide range of rental options. We provide solutions to suit every need."
        },
        {
            "name": "Bus Hire in Pimpri Chinchwad for Marriage Function",
            "description": "Residents of Pimpri Chinchwad can benefit from our specialized bus hire services for marriage functions. We offer comfortable and reliable transportation options."
        },
        {
            "name": "Bus Booking for Marriage Events in Pune",
            "description": "From ceremonies to receptions, our bus booking services cover all aspects of marriage events in Pune, ensuring a smooth experience."
        },
        {
            "name": "Sleeper Bus Booking for Marriage",
            "description": "For long-distance travel or overnight events, consider our sleeper bus options. Provide your guests with a comfortable and restful journey."
        },
        {
            "name": "Bus Booking for Marriage Events in Pimpri Chinchwad",
            "description": "Our services in Pimpri Chinchwad ensure that all aspects of your marriage event are covered with reliable and comfortable bus rentals."
        },
        {
            "name": "Luxury Bus Booking for Marriage Function in Pune",
            "description": "Enjoy a touch of elegance with our luxury bus rentals. Perfect for making your marriage function special with high-end amenities."
        },
        {
            "name": "Luxury Bus Booking for Marriage Function in Karve Nagar",
            "description": "For events in Karve Nagar, our luxury bus rentals offer a stylish and comfortable transportation option for your guests."
        },
        {
            "name": "Luxury Bus Booking for Marriage Function in Kothrud",
            "description": "Our luxury buses in Kothrud are equipped with premium features to ensure a high level of comfort for your marriage function."
        },
        {
            "name": "Full Bus Booking for Marriage Price in Pune",
            "description": "Get detailed pricing for full bus bookings for your marriage function in Pune, ensuring you have all the information you need to plan effectively."
        },
        {
            "name": "Full Bus Booking for Marriage in Viman Nagar",
            "description": "Our services in Viman Nagar provide reliable and comfortable transportation solutions for your marriage function, with options to suit your needs."
        },
        {
            "name": "Full Bus Booking for Marriage in Baner Aundh",
            "description": "Residents of Baner and Aundh can access our full bus booking services for marriage functions, providing a smooth and comfortable travel experience."
        },
        {
            "name": "Full Bus Booking for Marriage in Pimpri Chinchwad",
            "description": "For marriage functions in Pimpri Chinchwad, we offer comprehensive bus booking services to ensure a seamless transportation experience."
        },
        {
            "name": "Full Bus Booking for Marriage Event in Pune",
            "description": "Our full bus booking services in Pune cater to all your marriage event transportation needs, providing reliable and comfortable options."
        },
        {
            "name": "Amruta Travels Pune",
            "description": "As a leading provider of bus rental services in Pune, Amruta Travels is dedicated to making your marriage function transportation smooth and stress-free. Contact us for all your transportation needs and experience exceptional service."
        },
        {
            "name": "Bus Booking for Marriage function in Pune Contact Number",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient bus booking for marriage functions in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],

    "tableData": [
        ["- Full Bus Booking for Marriage Price", "- Tourist Bus Booking for Marriage"],
        ["- Reserve Bus for Marriage in Pune", "- Bus Booking for Marriage Party"],
        ["- Bus Booking for Marriage Pune to Outstation", "- Bus for Marriage Booking in Pune"],
        ["- Bus Hire in Pimpri Chinchwad for Marriage Function", "- Bus Booking for Marriage Events in Pune"],
        ["- Sleeper Bus Booking for Marriage", "- Bus Booking for Marriage Events in Pimpri Chinchwad"],
        ["- Luxury Bus Booking for Marriage Function in Pune", "- Luxury Bus Booking for Marriage Function in Karve Nagar"],
        ["- Luxury Bus Booking for Marriage Function in Kothrud", "- Full Bus Booking for Marriage Price in Pune"],
        ["- Full Bus Booking for Marriage in Viman Nagar", "- Full Bus Booking for Marriage in Baner Aundh"],
        ["- Full Bus Booking for Marriage in Pimpri Chinchwad", "- Full Bus Booking for Marriage Event in Pune"],
        ["- Amruta Travels Pune", ""]
    ],
    "whychoose": [
        {
            "WhyChooseheading": "Experience and Expertise:",
            "WhyChoosedescription": "With years of experience in the wedding transportation industry, Amruta Travels brings a deep understanding of the unique needs and challenges of wedding events. Our seasoned team ensures that every aspect of your transportation is handled with professionalism and care."
        },
        {
            "WhyChooseheading": "Tailored Solutions:",
            "WhyChoosedescription": "We offer personalized services designed to meet your specific needs and preferences. Whether you need transportation for a small, intimate gathering or a large, extravagant wedding, we customize our services to align perfectly with your wedding plans."
        },
        {
            "WhyChooseheading": "High-Quality Fleet:",
            "WhyChoosedescription": "Our fleet comprises luxurious, well-maintained buses that provide superior comfort and style. From plush seating to elegant interiors, our vehicles are designed to ensure that your guests travel in utmost comfort and arrive in style."
        },
        {
            "WhyChooseheading": "Reliability:",
            "WhyChoosedescription": "We are committed to delivering dependable service. Our punctuality and adherence to your specific requirements ensure that everything goes as planned, allowing you to focus on enjoying your special day."
        },
        {
            "WhyChooseheading": "Affordability:",
            "WhyChoosedescription": "Amruta Travels offers competitive pricing and customizable packages, providing high-quality wedding transportation without exceeding your budget. Our transparent pricing ensures there are no hidden costs."
        },
        {
            "WhyChooseheading": "Personalized Service:",
            "WhyChoosedescription": "We pride ourselves on our personalized approach. Our dedicated team pays close attention to every detail, ensuring that your transportation needs are met with exceptional care and professionalism."
        },
        {
            "WhyChooseheading": "Customer Satisfaction:",
            "WhyChoosedescription": "Your satisfaction is our top priority. Our customer support team is available to address any concerns and ensure that your experience with us is smooth and enjoyable from start to finish."
        },
        {
            "WhyChooseheading": "Comprehensive Coverage:",
            "WhyChoosedescription": "Whether your wedding is local or requires travel to an outstation venue, we offer comprehensive coverage to meet all your transportation needs. Our services are designed to accommodate a range of locations and requirements."
        },
        {
            "WhyChooseheading": "Safety and Comfort:",
            "WhyChoosedescription": "The safety and comfort of your guests are paramount. Our buses are equipped with the latest safety features and are maintained to meet rigorous safety standards. Our experienced drivers ensure a safe and comfortable journey."
        },
        {
            "WhyChooseheading": "Flexibility:",
            "WhyChoosedescription": "We offer flexible booking options and customizable packages to adapt to your evolving needs. Whether there are changes in plans or additional requests, we are ready to accommodate them to provide the best service possible for your wedding."
        }
    ]

};
const faqData = [
    {
        "question": "What types of buses are available for marriage functions?",
        "answer": "We offer a variety of buses to suit your needs, including 17-seater, 25-seater, 32-seater, 35-seater, and 40-seater options. Our fleet also includes luxury buses and sleeper buses for longer journeys or higher comfort."
    },
    {
        "question": "How do I book a bus for a marriage function?",
        "answer": "Booking a bus with Amruta Travels is simple. You can contact us via phone, email, or our online booking form. Provide details about your event, including the date, time, and the number of passengers, and we’ll handle the rest."
    },
    {
        "question": "Are the buses air-conditioned?",
        "answer": "Yes, all our buses are fully air-conditioned to ensure a comfortable journey for your guests, regardless of the weather."
    },
    {
        "question": "What amenities are provided on the buses?",
        "answer": "Our buses are equipped with a range of amenities including comfortable seating, ample legroom, and modern features. Luxury buses come with additional comforts such as plush seating and entertainment options."
    },
    {
        "question": "Can I customize the bus rental package?",
        "answer": "Yes, we offer customizable packages to meet your specific needs. Whether you need extra amenities or special arrangements, we can tailor our services to fit your requirements."
    },
    {
        "question": "How much does it cost to book a full bus for a marriage function?",
        "answer": "The cost of booking a full bus varies depending on factors such as bus size, amenities, and duration of use. Contact us for a detailed quote based on your specific needs."
    },
    {
        "question": "Do you offer outstation bus rentals for marriage functions?",
        "answer": "Yes, we provide outstation bus rentals for marriage functions. Whether your event is within Pune or requires travel to other locations, we can accommodate your transportation needs."
    },
    {
        "question": "What is the cancellation policy for bus bookings?",
        "answer": "Our cancellation policy depends on the terms agreed upon at the time of booking. Please contact us directly for detailed information regarding cancellations and refunds."
    },
    {
        "question": "Are the buses equipped with safety features?",
        "answer": "Absolutely. Our buses are regularly maintained and adhere to all safety regulations. They are equipped with safety features to ensure a secure and reliable journey for your guests."
    },
    {
        "question": "How far in advance should I book a bus for a marriage function?",
        "answer": "We recommend booking as early as possible to ensure availability and secure your preferred bus. Typically, booking a few months in advance is ideal, especially during peak wedding seasons."
    }
];
const testimonials = [
    {
        "name": "Miss Pune Aditi Kulkarni",
        "text": "Amruta Travels provided us with excellent service for our wedding. We booked a luxury bus for our guests, and everything was perfect. The bus was comfortable, and the driver was very professional. We couldn’t have asked for better transportation for our special day."
    },
    {
        "name": "Mr. Rajesh Deshmukh",
        "text": "We hired a tourist bus from Amruta Travels for our daughter's wedding, and it was a great choice. The bus was spacious and well-maintained, making the journey enjoyable for all our guests. Their service was reliable and hassle-free."
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
        heading: "Bus Booking for Marriage function in Pune Contact Number",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Booking for Marriage Function in Pune | Affordable Bus Rental for Weddings | Amruta Travels</title>
  <meta name="description" content="Looking for bus booking for a marriage function in Pune? Amruta Travels offers affordable bus rental services for weddings and marriage events in Pune. Book luxury buses, sleeper buses, and tourist buses for your marriage function. Available for outstation bookings, party buses, and event transportation." />
  <meta name="keywords" content="Full Bus booking for marriage price, Tourist bus booking for marriage, Reserve bus for marriage in Pune, Bus booking for marriage party, bus booking for marriage pune to outstation, Bus for marriage booking in Pune, Bus hire in Pimpri Chinchwad for Marriage Function, bus booking for marriage Events in Pune, sleeper bus booking for marriage, bus booking for marriage events in Pimpri Chinchwad, Luxury bus booking for marriage function in pune, luxury bus booking for marriage function in karve nagar, luxury bus booking for marriage function in kothrud, full bus booking for marriage price in pune, full bus booking for marriage in Viman Nagar, full bus booking for marriage in baner aundh, full bus booking for marriage in pimpri chinchwad, full bus booking for marriage event in pune, Amruta Travels Pune" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Looking for bus booking for a marriage function in Pune? Amruta Travels offers affordable bus rental services for weddings and marriage events in Pune. Book luxury buses, sleeper buses, and tourist buses for your marriage function. Available for outstation bookings, party buses, and event transportation.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-booking-for-marriage-function-in-pune",
        "logo": "https://amrutatravel.com/images/marriage-function-bus-booking.jpg",
        "image": "https://amrutatravel.com/images/marriage-function-bus-booking.jpg",
        "priceRange": "₹5000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-booking-for-marriage-function-in-pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "550"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Kulkarni"
            },
            "datePublished": "2024-08-20",
            "reviewBody": "We booked a bus for our marriage event with Amruta Travels. Excellent service, with prompt and professional staff. The bus was comfortable, and it was a great experience overall."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sneha Joshi"
            },
            "datePublished": "2024-07-12",
            "reviewBody": "Booked a luxury bus for my marriage function. The service was amazing, the bus was on time, and our guests were very comfortable. Highly recommend Amruta Travels for marriage bus bookings."
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pune",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.5204",
            "longitude": "73.8567"
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://amrutatravel.com/bus-booking-for-marriage-function-in-pune"
        },
        "keywords": "Full Bus booking for marriage price, Tourist bus booking for marriage, Reserve bus for marriage in Pune, Bus booking for marriage party, bus booking for marriage pune to outstation, Bus for marriage booking in Pune, Bus hire in Pimpri Chinchwad for Marriage Function, bus booking for marriage Events in Pune, sleeper bus booking for marriage, bus booking for marriage events in Pimpri Chinchwad, Luxury bus booking for marriage function in pune, luxury bus booking for marriage function in karve nagar, luxury bus booking for marriage function in kothrud, full bus booking for marriage price in pune, full bus booking for marriage in Viman Nagar, full bus booking for marriage in baner aundh, full bus booking for marriage in pimpri chinchwad, full bus booking for marriage event in pune, Amruta Travels Pune"
      }
    `}
  </script>
 
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
    <img src='\img\Keyword Based Image\Keyword Based Image-46.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs for Bus Booking for Marriage Functions in Pune:</h3>
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
export default BusBookingForMarriageInPune;