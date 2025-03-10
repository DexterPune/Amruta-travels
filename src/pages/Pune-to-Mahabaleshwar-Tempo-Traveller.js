
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  Mahabaleshwar(){

  const cardData = 
    {
      keyword: 'Pune to Mahabaleshwar Tempo Traveller',
      heading: 'Amruta Travels: Tempo Traveller on Rent for Pune to Mahabaleshwar',

      headingDescription: ' Amruta Travels offers the perfect Tempo Traveller rental solutions to make your journey comfortable and enjoyable. Discover the top features and services we provide for your Pune to Mahabaleshwar travel needs.',

      top:"Top Features of Our Tempo Travellers: ",
      topPlaces : [
        {
          "title": "1. Spacious Interiors",
          "description": "Enjoy the generous interior space of our Tempo Travellers, which ensures ample legroom and headroom for all passengers. Whether you're traveling with family or a larger group, our vehicles provide a comfortable environment where everyone can relax and enjoy the journey."
        },
        {
          "title": "2. Luxurious Seating",
          "description": "Travel in style with our plush, reclining seats. Each seat is equipped with individual armrests and adjustable headrests, ensuring maximum comfort during both short and long trips."
        },
        {
          "title": "3. Powerful Air Conditioning",
          "description": "Beat the Pune heat with our advanced air conditioning systems. Our Tempo Travellers are designed to keep the interior cool and comfortable, making your journey pleasant no matter the weather outside."
        },
        {
          "title": "4. Ample Luggage Space",
          "description": "Pack all your essentials without worry. Our Tempo Travellers come with substantial luggage compartments that accommodate your bags and belongings securely, leaving ample room for passengers."
        },
        {
          "title": "5. Modern Entertainment Systems",
          "description": "Enhance your travel experience with our cutting-edge entertainment options. Each Tempo Traveller features music players and LED screens, providing entertainment throughout your trip, whether you’re enjoying your favorite music or a movie."
        },
        {
          "title": "6. Experienced and Professional Drivers",
          "description": "Safety and professionalism are our priorities. Our experienced drivers are well-versed with Pune’s routes and beyond, ensuring a smooth and safe journey while you sit back and enjoy the ride."
        },
        {
          "title": "7. Well-Maintained Vehicles",
          "description": "Our Tempo Travellers are regularly serviced and maintained to the highest standards. We ensure that each vehicle is in top condition, providing you with a reliable and clean travel experience."
        },
        {
          "title": "8. Flexible Rental Options",
          "description": "We offer flexible rental packages to suit your specific needs. Whether it’s a short day trip or a longer journey, you can choose a rental option that best fits your schedule and budget."
        },
        {
          "title": "9. Competitive Pricing",
          "description": "Get the best value for your money with our transparent pricing. We offer clear, upfront rates with no hidden charges, making it easy to plan your travel expenses without surprises."
        },
        {
          "title": "10. 24/7 Customer Support",
          "description": "Our dedicated customer support team is available around the clock to assist you with bookings, inquiries, and any travel-related concerns. We are committed to providing a hassle-free experience from start to finish."
        }
      ],
       services :[
        {
          "name": "Comfortable Tempo Traveller from Pune to Mahabaleshwar:",
          "description": "Embark on a comfortable and hassle-free journey from Pune to Mahabaleshwar with our modern Tempo Travellers. Featuring air conditioning, cushioned seating, and spacious legroom, these vehicles are perfect for relaxing group trips."
        },
        {
          "name": "Flexible Pune to Mahabaleshwar Tempo Traveller Hire:",
          "description": "Choose from a range of flexible rental options for your Pune to Mahabaleshwar Tempo Traveller on Rent. Our Tempo Travellers cater to both short vacations and extended group outings, ensuring comfort and convenience."
        },
        {
          "name": "Reliable Pune to Panchgani Tempo Traveller Services:",
          "description": "Travel comfortably to Panchgani with our reliable Tempo Traveller rentals. Ideal for group day trips or weekend getaways, our vehicles provide a smooth and enjoyable ride with scenic views along the way."
        },
        {
          "name": "Affordable Tempo Traveller for Rent in Pune:",
          "description": "Rent our well-maintained Tempo Travellers in Pune for group travel. Be it local sightseeing or outstation tours, our vehicles are equipped to meet all your travel needs."
        },
        {
          "name": "Spacious 17-Seater Tempo Traveller for Mahabaleshwar Trip:",
          "description": "Our 17-seater Tempo Travellers are perfect for medium to large groups visiting Mahabaleshwar. Enjoy spacious seating, ample luggage storage, and a comfortable journey tailored to your needs."
        },
        {
          "name": "17-Seater Tempo Traveller for Mahabaleshwar Tour Packages:",
          "description": "Explore Mahabaleshwar with our exclusive 17-seater Tempo Traveller tour packages. These include cushioned seating, entertainment options, and luggage space for a premium travel experience."
        },
        {
          "name": "Convenient Pune Airport to Mahabaleshwar Tempo Traveller Service:",
          "description": "Start your vacation stress-free with our Tempo Traveller service from Pune Airport to Mahabaleshwar. Enjoy a smooth and relaxing journey right from your arrival."
        },
        {
          "name": "Dependable Pune to Tapola Tempo Traveller Rental:",
          "description": "Discover the serene beauty of Tapola with our Tempo Traveller rentals. Perfect for families and groups, travel in comfort while enjoying picturesque landscapes."
        },
        {
          "name": "Compact 14-Seater Tempo Traveller for Maharashtra Trips:",
          "description": "Our 14-seater Tempo Travellers are ideal for smaller groups exploring Maharashtra. Travel conveniently and comfortably to various attractions across the state."
        },
        {
          "name": "Tempo Traveller for Memorable Mahabaleshwar Outings:",
          "description": "Enhance your Mahabaleshwar sightseeing tours with our Tempo Traveller rentals. Designed for group outings, these vehicles promise a smooth and enjoyable travel experience."
        },
        {
          "name": "Spacious Mini Bus for Mahabaleshwar Group Trips:",
          "description": "For larger groups visiting Mahabaleshwar, our mini buses are the ultimate choice. With extra seating and luggage space, they ensure a comfortable and convenient journey."
        },
        {
          "name": "Transparent Tempo Traveller Rental Rates in Pune (Per Km):",
          "description": "Our Tempo Traveller rentals in Pune are priced transparently on a per-kilometer basis. Plan your trips confidently with no hidden costs."
        },
        {
          "name": "Affordable Pune to Mahabaleshwar Tempo Traveller Pricing:",
          "description": "We offer competitive pricing for our Tempo Traveller services from Pune to Mahabaleshwar, ensuring affordability without compromising on quality and comfort."
        }
      ],
      
      tableData: [
        ['-Mini bus on rent in Hadapsar Pune', '-Mini AC Bus On Rent in Wanowrie Pune'],
        ['-Top Mini Bus On Rent in Kothrud Pune', '- Mini bus on rent in Kharadi Pune'],
        ['-Mini bus on rent in Kalyani Nagar Pune', '-Mini bus on rent in Shivaji Nagar'],
        ['-Best Mini Bus On Rent in Baner Pune', '-Mini bus on rent for corporate events in Pune'],
        ['-Minibus hire for wedding party in Pimpri Chinchwad', '-Minibus on rent in Pune Outstations'],
        ['-Pune to Shirdi Mini Bus on Rent', '-Mini bus on rent in Pune for family'],
        ['-Mini bus on rent in Pune for family with driver', ''],
      ],
      whychoose: [
        {
          "WhyChooseheading": "Why Choose Amruta Travels for Pune to Mahabaleshwar Tempo Traveller on Rent?",
          "WhyChoosedescription": "Planning a trip from Pune to the scenic hill station of Mahabaleshwar? Look no further than Amruta Travels! We are a trusted name in the travel industry, offering exceptional Tempo Traveller rental services to make your journey safe, comfortable, and memorable. Whether it’s a family vacation, corporate outing, or group trip, we ensure a hassle-free travel experience. Here's why Amruta Travels is the best choice for your Pune to Mahabaleshwar trip:"
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Tempo Travellers",
          "WhyChoosedescription": "We provide modern Tempo Travellers designed for your comfort. With plush, well-cushioned seating and ample legroom, our vehicles ensure you can relax throughout the journey. Whether you're traveling with family or friends, our spacious interiors make group travel enjoyable and stress-free."
        },
        {
          "WhyChooseheading": "Top-Notch Amenities for a Relaxing Ride",
          "WhyChoosedescription": "Traveling to Mahabaleshwar should be as enjoyable as the destination itself! Our Tempo Travellers are equipped with powerful air-conditioning, LED screens for entertainment, Bluetooth connectivity, and quality sound systems to enhance your trip. Enjoy a smooth and luxurious ride, no matter how long the journey."
        },
        {
          "WhyChooseheading": "Professional and Experienced Drivers",
          "WhyChoosedescription": "Our team of expert drivers ensures your safety and punctuality. They are well-versed with the Pune to Mahabaleshwar route, traffic patterns, and scenic detours, providing a seamless travel experience while you relax and enjoy the view."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "Amruta Travels offers competitive pricing without any hidden charges. We provide detailed quotes upfront so you can plan your trip within your budget. Enjoy premium services without breaking the bank."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "Every trip is unique, and so are your travel needs. We offer tailored packages for your Pune to Mahabaleshwar journey, whether it's a one-day trip, a weekend getaway, or a special occasion."
        },
        {
          "WhyChooseheading": "Punctual and Reliable Service",
          "WhyChoosedescription": "Time is valuable, and we ensure you reach your destination on schedule. Our drivers follow the itinerary provided, ensuring punctuality for your trip to Mahabaleshwar."
        },
        {
          "WhyChooseheading": "Safety First",
          "WhyChoosedescription": "Your safety is our top priority. All our Tempo Travellers are equipped with seat belts, first-aid kits, and emergency exits. Additionally, our drivers are trained to handle emergencies, ensuring a worry-free journey."
        },
        {
          "WhyChooseheading": "Well-Maintained Fleet",
          "WhyChoosedescription": "Our vehicles undergo regular maintenance and cleanliness checks to ensure they are in top condition. We guarantee a clean, hygienic, and fully functional vehicle for your travel."
        },
        {
          "WhyChooseheading": "Simple and Convenient Booking Process",
          "WhyChoosedescription": "Booking with Amruta Travels is easy and hassle-free. Use our online platform, call, or email to reserve your Tempo Traveller. Our responsive team is ready to assist with any queries or changes to your booking."
        }
      ]
    
    
 
  
    



    };

    
    const testimonials = [
        {
          name: "Miss. Priya Sharma",
          text: "I recently rented a Tempo Traveller from Amruta Travels for a family reunion, and I couldn’t be more pleased with the service. The booking process was straightforward, and the vehicle arrived on time, clean, and well-maintained. The spacious interior made our trip incredibly comfortable, and the driver was professional and friendly. It was a pleasure to work with Amruta Travels, and I highly recommend them for anyone looking for reliable and comfortable group transportation in Pune."
        },
        {
          name: "Mr. Rajesh Patel",
          text: "Our corporate team needed a Tempo Traveller for an off-site meeting, and Amruta Travels exceeded our expectations. The vehicle was luxurious, equipped with all the modern amenities we needed, and the driver was knowledgeable and accommodating. The entire experience was seamless, from booking to drop-off. We appreciated the flexibility and excellent customer service provided by Amruta Travels. We’ll definitely use their services again for our future group travel needs."
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
            question: "How can I book a Tempo Traveller from Pune to Mahabaleshwar with Amruta Travels?",
            answer: "You can book a Tempo Traveller by calling us at +91 8421333435 or through our website. Our team will assist you with the booking process and provide all necessary details for your Mahabaleshwar trip."
          },
          {
            question: "What types of Tempo Travellers are available for the Pune to Mahabaleshwar journey?",
            answer: "We offer a variety of Tempo Travellers, including luxury and standard options, to cater to your group's comfort and budget preferences."
          },
          {
            question: "Are there any additional charges for the Pune to Mahabaleshwar Tempo Traveller service?",
            answer: "Our pricing is transparent, with no hidden fees. Any additional charges, such as for extra stops or extended mileage, will be communicated beforehand."
          },
          {
            question: "How do I know if the Tempo Traveller is well-maintained?",
            answer: "All our Tempo Travellers undergo regular maintenance and cleanliness checks to ensure they are in top condition, prioritizing your safety and comfort."
          },
          {
            question: "Can I choose the driver for my trip to Mahabaleshwar?",
            answer: "While we assign experienced drivers for a safe journey, you can let us know of any specific preferences or requirements when booking."
          },
          {
            question: "What if I need to change my booking for the Tempo Traveller service?",
            answer: "Contact our customer support team as soon as possible to discuss any changes. We will do our best to accommodate your requests based on availability."
          },
          {
            question: "Is there a minimum rental period for the Tempo Traveller service?",
            answer: "We offer flexible rental periods for your Pune to Mahabaleshwar journey, whether you need the Tempo Traveller for a one-way trip or a round trip."
          },
          {
            question: "What amenities are included in the Tempo Traveller service?",
            answer: "Our Tempo Travellers come with amenities such as air conditioning, reclining seats, and entertainment systems to ensure a pleasant journey. Amenities may vary depending on the vehicle type."
          },
          {
            question: "What is the cancellation policy for the Tempo Traveller service?",
            answer: "Cancellation policies depend on the booking details. Please contact us for specific terms and any applicable fees."
          },
          {
            question: "How can I contact Amruta Travels for support during my Pune to Mahabaleshwar trip?",
            answer: "You can reach our 24/7 customer support team at +91 8421333435 for any assistance or issues during your journey. We are here to ensure a smooth and enjoyable experience."
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
          <Helmet>
  <title>Pune to Mahabaleshwar Tempo Traveller on Rent ₹25 Per Km </title>
  
  <meta 
    name="description" 
    content="Hire a Tempo Traveller from Pune to Mahabaleshwar for just ₹25 per km! Amruta Travel offers affordable 17-seater luxury vehicles for scenic trips, group outings, and family getaways." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mahabaleshwar Tempo Traveller, Tempo Traveller on Rent Pune, ₹25 Per Km Tempo Traveller, 17 Seater Tempo Traveller Mahabaleshwar, Affordable Tempo Traveller for Mahabaleshwar, Pune to Mahabaleshwar Group Travel, Tempo Traveller Rental Pune, Luxury Tempo Traveller Mahabaleshwar" 
  />
  <meta name="author" content="Amruta Travel" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Mahabaleshwar is a favorite destination for weekend getaways from Pune. With Pune to Mahabaleshwar Tempo Traveller on Rent, you can enjoy the scenic route in a comfortable, well-equipped vehicle.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shivaji Nagar, Pune",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411005",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/pune-to-mahabaleshwar-tempo-traveller",
        "logo": "https://amrutatravel.com/images/pune-to-mahabaleshwar-tempo-traveller.jpg",
        "image": "https://amrutatravel.com/images/pune-to-mahabaleshwar-tempo-traveller.jpg",
        "priceRange": "₹5000 - ₹15000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/pune-to-mahabaleshwar-tempo-traveller",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "200"
        }
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
    <img src='\img\Keyword Based Image\Keyword Based Image-02.jpg' alt='img'/>
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
export default Mahabaleshwar;