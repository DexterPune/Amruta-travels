
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusBookingForWeddingInPune(){

  const cardData = 
    {
      keyword: 'Bus Booking for Weddings in Pune',
      heading: ' Amruta Travels: Bus Booking for Weddings in Pune',

      headingDescription: 'Planning a wedding involves numerous details, and ensuring that your guests have reliable and comfortable transportation is crucial. Amruta Travels specializes in providing premium bus rental services for weddings in Pune, ensuring that your big day goes off without a hitch. Whether you are hosting a local event or an outstation wedding, we have the perfect transportation solution for you. Discover our range of bus rental options and services below:',

      top:"Top Features of Our Wedding Bus Rental Services",

       topPlaces : [
        {
            "title": "Wide Range of Bus Sizes",
            "description": "We offer a variety of bus sizes to accommodate different group sizes, including 17-seater, 25-seater, 32-seater, 35-seater, and 40-seater options. Choose the perfect size for your wedding party and ensure everyone travels comfortably."
        },
        {
            "title": "Luxury and Comfort",
            "description": "Our fleet includes luxury and well-maintained buses designed for maximum comfort. Enjoy plush seating, spacious interiors, and modern amenities to make the journey as enjoyable as the destination."
        },
        {
            "title": "Air-Conditioned Buses",
            "description": "All our buses are equipped with air conditioning to ensure a cool and comfortable ride, especially during warmer months."
        },
        {
            "title": "Professional Drivers",
            "description": "Our experienced and professional drivers are skilled in handling wedding transportation, ensuring a smooth, safe, and timely journey for your guests."
        },
        {
            "title": "Customizable Packages",
            "description": "We offer customizable rental packages to meet your specific needs. Whether you need additional amenities or special arrangements, we can tailor a package to suit your requirements."
        },
        {
            "title": "Transparent Pricing",
            "description": "Enjoy competitive and transparent pricing with no hidden fees. We provide clear and upfront pricing, so you know exactly what to expect."
        },
        {
            "title": "Punctual Service",
            "description": "We prioritize punctuality, ensuring that all transportation schedules are adhered to. Your guests will arrive on time, allowing you to focus on celebrating your special day."
        },
        {
            "title": "Local and Outstation Rentals",
            "description": "Whether your wedding is local or requires outstation travel, we provide reliable transportation solutions for both. Enjoy seamless travel between your wedding venue, reception, and other locations."
        },
        {
            "title": "Easy Booking Process",
            "description": "Booking with Amruta Travels is straightforward. Contact us via phone, email, or our online booking form, and we’ll handle all the details for you."
        },
        {
            "title": "Exceptional Customer Support",
            "description": "Our dedicated customer support team is available to assist with any queries or issues. We ensure a smooth booking and travel experience from start to finish."
        }
    ],    
   services: [
    {
        "name": "Bus Rental for Weddings",
        "description": "Amruta Travels provides a comprehensive range of bus rental options for weddings. From intimate gatherings to grand celebrations, our fleet can accommodate your specific needs, ensuring a memorable experience for your guests."
    },
    {
        "name": "Wedding Bus Hire Near Me Pune",
        "description": "For convenient wedding bus hire in Pune, Amruta Travels offers localized services to meet your needs. Whether you’re in the city or its surrounding areas, we have the right bus solution for you."
    },
    {
        "name": "Shuttle Rental for Weddings in Pune",
        "description": "Our shuttle rental services are ideal for transporting guests between the wedding venue, reception, and other locations. Ensure smooth and timely travel with our reliable shuttles."
    },
    {
        "name": "Wedding Party Bus Rental",
        "description": "Celebrate in style with our wedding party bus rentals. Our luxury party buses come with premium amenities to enhance the celebration, making the journey as enjoyable as the destination."
    },
    {
        "name": "Wedding Bus Transportation in Pune",
        "description": "Our wedding bus transportation services in Pune ensure a seamless experience for your guests. We handle all aspects of transportation, allowing you to focus on enjoying your special day."
    },
    {
        "name": "Party Bus for Wedding",
        "description": "Transform your wedding transportation with our party buses. Equipped with festive features, our party buses offer a fun and unique way to travel to your wedding venue."
    },
    {
        "name": "Bus for Wedding Travels",
        "description": "Our buses are perfect for various wedding travel needs, whether it’s moving guests between locations or embarking on pre-wedding excursions. We ensure a comfortable and well-coordinated journey."
    },
    {
        "name": "Bus Booking for Wedding",
        "description": "Secure your wedding bus with Amruta Travels for a reliable and stylish transportation solution. Our efficient booking process ensures you get the perfect bus for your wedding day."
    },
    {
        "name": "Bus on Rent for Wedding in Pimpri Chinchwad",
        "description": "For residents of Pimpri Chinchwad, our specialized wedding bus rental services offer comfort and reliability. We provide a range of buses to suit any wedding party size."
    },
    {
        "name": "Bus Rental for Wedding Near Me",
        "description": "Find the ideal bus rental for your wedding with our localized services. Amruta Travels provides convenient options for booking a bus near you, simplifying your wedding planning."
    },
    {
        "name": "Amruta Travels Pune",
        "description": "As a leading bus rental service provider in Pune, Amruta Travels is committed to making your wedding transportation seamless and stress-free. Our team ensures all aspects of your bus rental are handled with professionalism and care."
    },
    {
        "name": "AC Bus Booking for Marriage",
        "description": "Choose our air-conditioned buses for a cool and comfortable ride on your wedding day. Our AC buses are ideal for maintaining comfort throughout the journey."
    },
    {
        "name": "Full Bus Booking for Marriage Price",
        "description": "We offer competitive pricing for full bus bookings, providing excellent value for your wedding transportation needs. Contact us for a detailed quote based on your specific requirements."
    },
    {
        "name": "Pune to Outstation Bus Booking for Marriage",
        "description": "For weddings involving travel to outstation locations, Amruta Travels provides reliable and comfortable buses. Ensure your guests travel in style and comfort, no matter the distance."
    },
    {
        "name": "Bus Booking for Marriage Event",
        "description": "From ceremonies to receptions, our bus booking services cover all aspects of your marriage event. We handle transportation logistics to ensure a smooth and enjoyable experience."
    },
    {
        "name": "Private Bus Booking for Wedding in Pune",
        "description": "For a more personalized experience, consider our private bus booking options. We offer exclusive rentals tailored specifically to your wedding needs."
    },
    {
        "name": "Bus Booking for Wedding in Pimpri Chinchwad",
        "description": "Amruta Travels provides comprehensive bus rental services for weddings in Pimpri Chinchwad. Our range of buses ensures a smooth and comfortable journey for your guests."
    },
    {
        "name": "Bus on Rent for Wedding in Karve Nagar",
        "description": "Residents of Karve Nagar can benefit from our specialized wedding bus rental services. We offer convenient and reliable transportation options for your wedding event."
    },
    {
        "name": "Luxury Bus on Rent for Wedding in Karve Nagar",
        "description": "Experience luxury with our premium bus rentals in Karve Nagar. Our luxury buses are equipped with high-end features to ensure a stylish and comfortable ride."
    },
    {
        "name": "Wedding Bus Hire in Pimpri Chinchwad",
        "description": "Our wedding bus hire services in Pimpri Chinchwad provide reliable and comfortable transportation for your wedding event. Choose from our range of buses to suit your needs."
    },
    {
        "name": "Wedding Bus Hire in Wadgaon Sheri",
        "description": "We offer wedding bus hire services in Wadgaon Sheri, ensuring that your guests travel comfortably to and from your wedding venue. Our buses are well-maintained and equipped for your convenience."
    },
    {
        "name": "Wedding Bus Hire in Hadapsar",
        "description": "Our wedding bus hire services in Hadapsar offer a reliable and stylish transportation solution for your wedding event. Enjoy a smooth journey with our well-equipped buses."
    },
    {
        "name": "Wedding Bus Hire in Katraj Pune",
        "description": "For weddings in Katraj, Pune, Amruta Travels provides specialized bus hire services. Ensure that your guests have a comfortable and enjoyable travel experience with our dedicated service."
    },
    {
        "name": "Affordable Mini Bus on Rent in Pune for Wedding",
        "description": "For smaller wedding parties, our affordable mini bus rentals provide a cost-effective solution. Enjoy reliable and comfortable transportation without exceeding your budget."
    },
    {
        "name": "Bus booking for wedding in Pune Contact Number",
        "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus booking for wedding in Pune. We ensure a smooth and enjoyable ride for all our customers."
    }
],

  "tableData": [
        ["- Bus Rental for wedding", "- Wedding bus hire near me Pune"],
        ["- Shuttle rental for wedding in Pune", "- Wedding party bus rental"],
        ["- Wedding bus transportation in Pune", "- Party Bus for Wedding"],
        ["- Bus for wedding Travels", "- Bus booking for wedding"],
        ["- Bus on rent for wedding in Pimpri Chinchwad", "- Bus Rental for wedding near me"],
        ["- Amruta Travels Pune", "- AC bus booking for marriage"],
        ["- Full bus booking for marriage price", "- Pune to outstation bus booking for marriage"],
        ["- Bus Booking for Marriage Event", "- Private bus booking for wedding in Pune"],
        ["- Bus booking for wedding in Pimpri Chinchwad", "- Bus on Rent for Wedding in Karve Nagar"],
        ["- Luxury bus on rent for wedding in Karve Nagar", "- Wedding bus hire in Pimpri Chinchwad"],
        ["- Wedding bus hire in Wadgaon Sheri", "- Wedding Bus Hire in Hadapsar"]
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
        "question": "What is included in the rental of a school bus?",
        "answer": "Our rental includes comfortable seating, air-conditioning, and a professional driver. Additional amenities can be requested based on your requirements."
    },
    {
        "question": "How do I book a bus for a school trip?",
        "answer": "To book a bus, contact us via phone, email, or our online booking form. Provide details such as travel dates, pick-up and drop-off locations, and any special requests."
    },
    {
        "question": "Are there any additional charges I should be aware of?",
        "answer": "We offer transparent pricing with no hidden fees. Any additional charges will be communicated upfront during the booking process."
    },
    {
        "question": "Can I customize the bus rental package?",
        "answer": "Yes, we offer customizable packages to meet your specific needs. Let us know your requirements, and we’ll tailor a package accordingly."
    },
    {
        "question": "What safety measures are in place for school trips?",
        "answer": "Our buses are equipped with safety features, and our drivers are trained to ensure a secure journey. We adhere to all safety regulations to protect your group."
    },
    {
        "question": "Can I cancel or modify my booking?",
        "answer": "Yes, cancellations or modifications can be made based on our booking policies. Please contact us as soon as possible if you need to make changes."
    },
    {
        "question": "How far in advance should I book the bus?",
        "answer": "We recommend booking as early as possible to secure your preferred vehicle and date. Early booking helps us accommodate your needs better."
    },
    {
        "question": "Do you provide transportation for special needs students?",
        "answer": "Yes, we can arrange for buses that accommodate special needs students. Please inform us in advance of any specific requirements."
    },
    {
        "question": "What happens in case of an emergency during the trip?",
        "answer": "Our drivers are trained to handle emergencies. Additionally, our customer support team is available to assist with any issues that may arise during the trip."
    },
    {
        "question": "Can I view the bus before booking?",
        "answer": "Yes, you can arrange to view the bus before finalizing your booking. Contact us to schedule a visit and inspect the vehicle."
    }
];

const testimonials = [
    {
        "name": "Mr. Ravi Sharma",
        "text": "We recently hired a 35-seater bus from Amruta Travels for our daughter's wedding. The service was outstanding! The bus was luxurious and comfortable, and the driver was very professional. Everything went smoothly, and our guests were very pleased. Highly recommend their services for any wedding transportation needs!"
    },
    {
        "name": "Miss Sneha Deshmukh",
        "text": "Amruta Travels made our wedding transportation so easy. We booked a party bus for our reception, and it was a hit! The bus was beautifully maintained and perfect for our celebration. Their customer service was excellent, and the booking process was hassle-free."
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
        heading: "Bus booking for wedding in Pune Contact Number:",
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
  <title> Wedding Bus Hire in Pune </title>
  <meta name="description" content="Looking for Wedding Bus Hire in Pune? Amruta Travels offers affordable and comfortable wedding bus rental services. From shuttle rentals to party buses, we provide wedding transportation for all your needs, including luxury and mini buses for wedding events. Book your wedding bus now!" />
  <meta name="keywords" content="Wedding Bus Hire in Pune, Wedding Bus Rental Pune, Party Bus for Wedding, Shuttle Rental for Wedding, Wedding Bus Transportation Pune, Affordable Wedding Bus Rental, Luxury Bus for Weddings, Mini Bus for Wedding in Pune, Pune Wedding Bus Services, Bus Booking for Wedding, Pune Wedding Transportation" />
  <meta name="robots" content="index, follow" />

 
  <meta property="og:title" content="Wedding Bus Hire in Pune | Affordable & Comfortable Wedding Transportation | Amruta Travels" />
  <meta property="og:description" content="Amruta Travels offers the best Wedding Bus Hire in Pune. Choose from luxury and mini buses for your wedding event. Comfortable, affordable, and prompt services." />
  <meta property="og:image" content="https://amrutatravel.com/images/wedding-bus-booking.jpg" />
  <meta property="og:url" content="https://amrutatravel.com/Bus-booking-for-wedding-in-Pune" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Looking for bus booking for Wedding Bus Hire in Pune? Amruta Travels offers affordable and comfortable wedding bus rental services. From shuttle rentals to party buses, we provide wedding transportation for all your needs, including luxury and mini buses for wedding events. Book your wedding bus now!",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/Bus-booking-for-wedding-in-Pune",
        "logo": "https://amrutatravel.com/images/wedding-bus-booking.jpg",
        "image": "https://amrutatravel.com/images/wedding-bus-booking.jpg",
        "priceRange": "₹5000 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/Bus-booking-for-wedding-in-Pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "500"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ananya Deshmukh"
            },
            "datePublished": "2024-07-10",
            "reviewBody": "We hired a bus for our wedding ceremony. The experience was seamless, with prompt service and a comfortable ride for all our guests. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sandeep Raj"
            },
            "datePublished": "2024-06-15",
            "reviewBody": "Amruta Travels provided excellent wedding bus services for our big day. The bus was spacious, air-conditioned, and the driver was courteous."
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
          "serviceUrl": "https://amrutatravel.com/Bus-booking-for-wedding-in-Pune"
        },
        "keywords": "Wedding Bus Hire in Pune, Wedding Bus Rental Pune, Party Bus for Wedding, Shuttle Rental for Wedding, Wedding Bus Transportation Pune, Affordable Wedding Bus Rental, Luxury Bus for Weddings, Mini Bus for Wedding in Pune, Pune Wedding Bus Services, Bus Booking for Wedding, Pune Wedding Transportation"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-57.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs About Bus Booking for Wedding in Pune – Amruta Travels:</h3>
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
export default BusBookingForWeddingInPune;