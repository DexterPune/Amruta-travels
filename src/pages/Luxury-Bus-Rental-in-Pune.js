
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  LuxuryBus(){

  const cardData = 
    {
      keyword: 'Luxury Bus Rental in Pune',
      heading: ' Amruta Travels: Luxury Bus Rental in Pune',

      headingDescription: 'When it comes to organizing group travel in Pune, Amruta Travels offers a premier selection of luxury bus rentals designed to meet your every need. Whether you’re planning a corporate event, family gathering, school trip, or a leisurely outing, our luxury buses are equipped to provide the highest level of comfort and style. Below is a comprehensive overview of our luxury bus rental services across various locations in Pune:',

      top:"Top Features of Our Luxury Buses :",

       topPlaces : [
        {
            "title": "Generous Seating Capacity:",
            "description": "Our luxury buses are designed with ample space to ensure a comfortable journey for all passengers. Ergonomically designed seats enhance relaxation, making even long trips enjoyable."
        },
        {
            "title": "Climate-Controlled Comfort:",
            "description": "Fully air-conditioned buses maintain a pleasant environment regardless of external weather conditions, ensuring a cool and comfortable ride."
        },
        {
            "title": "Adjustable Reclining Seats:",
            "description": "Each bus features reclining seats that allow passengers to adjust their seating position, providing extra comfort for both short and long journeys."
        },
        {
            "title": "Advanced Entertainment Systems:",
            "description": "Stay entertained with our buses equipped with LED TVs and high-quality sound systems. Perfect for long journeys or when traveling with a group."
        },
        {
            "title": "Ample Luggage Space:",
            "description": "Our buses come with spacious compartments to accommodate all your baggage comfortably. Whether for a long trip or a day outing, your belongings are securely stored."
        },
        {
            "title": "Top-Notch Safety Features:",
            "description": "Safety is our priority. Our buses include modern safety features such as seat belts, emergency exits, fire extinguishers, first-aid kits, and GPS tracking to ensure a secure journey."
        },
        {
            "title": "Skilled and Professional Drivers:",
            "description": "Our experienced drivers are familiar with local routes and committed to safety and punctuality. They ensure a smooth and efficient travel experience."
        },
        {
            "title": "Impeccably Maintained Vehicles:",
            "description": "We take pride in maintaining our fleet to the highest standards. Our buses undergo regular servicing and inspections, ensuring they are in excellent condition and providing a clean, hygienic environment."
        },
        {
            "title": "Competitive and Transparent Pricing:",
            "description": "We offer competitive rates for our luxury bus rentals with no hidden costs. Our transparent pricing structure ensures you get excellent value for money."
        },
        {
            "title": "Tailored Travel Solutions:",
            "description": "We provide customizable services to meet your specific needs. Whether for a wedding, corporate event, or any other group travel requirement, we can tailor our services to match your itinerary and budget."
        }
    ],    
     services : [
        {
            "name": "Luxury Bus Rental in Pimpri Chinchwad:",
            "description": "For those in Pimpri Chinchwad, Amruta Travels provides top-tier luxury bus rentals to enhance your group travel experience. Our buses are ideal for corporate functions, family events, or local excursions. Enjoy plush seating, advanced amenities, and a smooth ride that reflects our commitment to quality."
        },
        {
            "name": "Luxury Bus Rental in Kharadi:",
            "description": "Travel in style and comfort with our luxury buses available in Kharadi. Whether it’s for a corporate meeting, a family celebration, or any special event, our buses are designed to ensure you and your guests travel in utmost comfort and luxury."
        },
        {
            "name": "Luxury Bus On Rent in Yerawada:",
            "description": "Our luxury bus rental service in Yerawada offers a premium travel experience for all types of group outings. Enjoy a journey filled with comfort, courtesy of our state-of-the-art buses that come with all the modern amenities needed for a pleasant trip."
        },
        {
            "name": "Luxury Bus On Rent in Vishrantwadi:",
            "description": "In Vishrantwadi, Amruta Travels offers luxury buses that combine elegance with practicality. Perfect for weddings, corporate events, or any large gathering, our buses are designed to provide a superior travel experience with a focus on comfort and convenience."
        },
        {
            "name": "14, 17, 20, 25 Seater Luxury Bus on Rent Pune:",
            "description": "Our range of luxury buses with seating capacities of 14, 17, 20, and 25 is ideal for smaller groups seeking comfort and sophistication. These buses are perfect for intimate events and local trips where a touch of luxury is desired."
        },
        {
            "name": "32, 35, 40, 45 Seater Luxury Bus Hire in Pimpri Chinchwad:",
            "description": "For larger groups in Pimpri Chinchwad, our fleet includes luxury buses with capacities of 32, 35, 40, and 45 seats. These buses are suited for corporate outings, school trips, or family reunions, providing ample space and comfort for all passengers."
        },
        {
            "name": "Luxury Bus On Rent in Hadapsar Pune:",
            "description": "If you’re in Hadapsar, Amruta Travels offers luxury buses designed to deliver a first-class travel experience. Whether you’re attending a wedding, corporate event, or a special occasion, our buses ensure a journey marked by luxury and efficiency."
        },
        {
            "name": "Luxury Bus on Rent for Picnic in Pune:",
            "description": "Transform your picnic into an extraordinary experience with our luxury bus rentals. Our buses are equipped with all the necessary amenities to ensure a comfortable and enjoyable journey for your group."
        },
        {
            "name": "Mini Luxury Bus Hire in Pune:",
            "description": "For smaller groups or more personalized gatherings, our mini luxury buses offer an elegant travel solution. Perfect for short trips or local travel, these buses combine luxury with practicality."
        },
        {
            "name": "Luxury Bus Rental in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Luxury Bus Rental in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],    
     tableData : [
        ["-Luxury Bus Rental in Pimpri Chinchwad", "-Luxury Bus Rental in Kharadi"],
        ["-Luxury Bus On Rent in Yerawada, Pune", "-Luxury Bus On Rent in Vishrantwadi, Pune"],
        ["-14, 17, 20, 25 Seater Luxury Bus On Rent Pune", "-32, 35, 40, 45 Seater Luxury Bus Hire in Pimpri Chinchwad"],
        ["-Luxury Bus On Rent in Hadapsar Pune", "-Luxury Bus on Rent for Picnic in Pune"],
        ["-Mini Luxury Bus Hire in Pune", ""]
    ],
    

    whychoose : [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Luxury Bus Rental in Pune?",
            "WhyChoosedescription": "When it comes to luxury bus rentals in Pune, Amruta Travels stands out for several reasons. We offer a premium travel experience with a focus on comfort, safety, and customer satisfaction. Here’s why you should choose us for your next luxury bus rental:"
        },
        {
            "WhyChooseheading": "Spacious and Comfortable Buses:",
            "WhyChoosedescription": "Our luxury buses are designed for maximum comfort, with ample legroom, plush seating, and air-conditioning to ensure a pleasant journey."
        },
        {
            "WhyChooseheading": "Professional and Experienced Drivers:",
            "WhyChoosedescription": "Our drivers are highly experienced, trained to handle various road conditions, and committed to providing a safe and enjoyable travel experience."
        },
        {
            "WhyChooseheading": "Well-Maintained Fleet:",
            "WhyChoosedescription": "We ensure that our buses are well-maintained through regular servicing and inspections, providing you with a reliable and smooth travel experience."
        },
        {
            "WhyChooseheading": "Affordable Pricing:",
            "WhyChoosedescription": "Our pricing is competitive, offering great value while maintaining high standards of quality. We provide a clear and transparent pricing structure with no hidden fees."
        },
        {
            "WhyChooseheading": "Customizable Travel Solutions:",
            "WhyChoosedescription": "We offer flexible travel solutions tailored to your specific needs, whether for a corporate event, family gathering, or school trip."
        },
        {
            "WhyChooseheading": "Excellent Customer Service:",
            "WhyChoosedescription": "From the booking process to the end of your journey, our customer service team is dedicated to providing prompt and effective support, ensuring a hassle-free experience."
        },
        {
            "WhyChooseheading": "Punctual and Reliable:",
            "WhyChoosedescription": "We adhere to strict schedules to ensure timely departures and arrivals, helping you stay on track with your plans."
        }
    ]
    };

    
    
    const faqData = [
        {
            "question": "What is included in the rental of a luxury bus?",
            "answer": "The rental includes comfortable seating, air-conditioning, and professional driver services. Additional amenities like audio systems, Wi-Fi, and refreshments may be available upon request, depending on the bus model and availability."
        },
        {
            "question": "How do I book a luxury bus with Amruta Travels?",
            "answer": "You can book a luxury bus by contacting us via phone, email, or by filling out our online booking form. Please provide details of your travel dates, pick-up and drop-off locations, number of passengers, and any special requirements to ensure we meet your needs."
        },
        {
            "question": "Are there any additional charges I should be aware of?",
            "answer": "Our pricing is transparent, but additional charges may apply for extra services or special requests, such as additional stops, extended hours, or premium amenities. We provide a detailed quote before finalizing your booking to ensure there are no surprises."
        },
        {
            "question": "What is the cancellation policy for a luxury bus rental?",
            "answer": "Cancellation policies vary based on the timing of the cancellation. Generally, cancellations made well in advance incur a nominal fee, while last-minute cancellations may involve higher charges. For specific details, please contact our customer service team."
        },
        {
            "question": "Can I request a specific type of luxury bus?",
            "answer": "Yes, you can request specific features or types of luxury buses based on availability. We offer a range of options to suit different needs, including buses with advanced amenities or particular seating configurations."
        },
        {
            "question": "Are the drivers experienced and licensed?",
            "answer": "Yes, all our drivers are professionally trained, experienced, and hold valid licenses. They are well-versed with local routes and dedicated to providing a safe, comfortable, and pleasant travel experience for all passengers."
        },
        {
            "question": "Can I make changes to my booking after it is confirmed?",
            "answer": "Yes, changes can be made subject to availability and applicable fees. If you need to adjust your travel plans, please contact our customer service team as soon as possible to discuss any modifications and to ensure we accommodate your new requirements."
        },
        {
            "question": "What should I do if I need assistance during my journey?",
            "answer": "If you require any assistance during your journey, please contact the driver directly or reach out to our customer service team for support. We are committed to addressing any concerns or issues promptly to ensure a smooth travel experience."
        },
        {
            "question": "How far in advance should I book a luxury bus?",
            "answer": "To secure your preferred bus and ensure availability, we recommend booking as early as possible. This is particularly important during peak seasons, holidays, or for special events. Early booking helps us to accommodate your preferences and provide the best service."
        },
        {
            "question": "Are there any restrictions on luggage or other items?",
            "answer": "Standard luggage allowances apply, but we can make special arrangements upon request. Please inform us of any specific needs, such as oversized luggage or special items, when making your booking so we can ensure adequate space and accommodations."
        }
    ];
    
  
    
    
    
    const testimonials = [
        {
            "name": "Anita Rao",
            "text": "Our company recently hired a luxury bus from Amruta Travels for a corporate event, and it exceeded all our expectations. The bus was top-notch, with plush seating, state-of-the-art amenities, and an impeccable interior. The onboard entertainment system kept everyone engaged throughout the journey, and the spacious seating made for a highly comfortable experience. The driver was professional and ensured that we arrived at our destination on time. Amruta Travels truly delivered on their promise of luxury and comfort. I highly recommend their luxury bus rental services for any high-end corporate or personal events."
        },
        {
            "name": "Priya Mehta",
            "text": "I booked a luxury bus from Amruta Travels for my wedding transportation needs, and it was an absolute delight. The bus was elegantly furnished with high-quality seating and decor, making it perfect for our special day. The attention to detail was evident, from the cleanliness to the amenities provided. Our guests were extremely impressed with the comfort and luxury of the ride. The service from Amruta Travels was exceptional, from booking to the actual event. They made sure everything went smoothly, and I couldn’t have asked for a better experience. I highly recommend Amruta Travels for anyone looking for luxury bus rental in Pune."
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
        heading: "Luxury Bus Rental in Pune Contact Number:",
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
  <title>Luxury Bus Rental in Pune | Hire 14-45 Seater Luxury Buses for Corporate Events, Picnics & Outstation Trips</title>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Rent luxury buses in Pune for corporate events, picnics, outstation trips, and more. Choose from 14 to 45-seater buses at affordable rates.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/luxury-bus-rental-pune",
        "logo": "https://amrutatravel.com/images/luxury-bus-rental-pune.jpg",
        "image": "https://amrutatravel.com/images/luxury-bus-rental-pune.jpg",
        "priceRange": "₹30000 - ₹70000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/luxury-bus-rental-pune",
          "priceCurrency": "INR",
          "price": "30000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "7500"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rohit Sharma"
            },
            "datePublished": "2024-11-05",
            "reviewBody": "We hired a luxury bus for a corporate event. The bus was comfortable, clean, and equipped with great amenities. Highly recommended!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Singh"
            },
            "datePublished": "2024-08-20",
            "reviewBody": "Amruta Travel's luxury bus for our family picnic was excellent. Spacious, well-maintained, and comfortable. Worth every penny!"
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
          "serviceUrl": "https://amrutatravel.com/luxury-bus-rental-pune"
        },
        "keywords": "Luxury Bus Rental Pune, Luxury Bus On Rent Pimpri Chinchwad, Luxury Bus in Kharadi, Luxury Bus Hire Yerawada, Pune, 14 Seater Luxury Bus Rent, 17 Seater Luxury Bus Hire, 20 Seater Luxury Bus Rental, 32 Seater Luxury Bus Pune, 45 Seater Luxury Bus on Rent, Luxury Bus Hire for Corporate Events, Luxury Bus Rental for Picnic in Pune"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-15.jpg' alt='img'/>
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
      <h3 className='Colo'>Frequently Asked Questions (FAQs) For Amruta Travels:</h3>
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
export default LuxuryBus;