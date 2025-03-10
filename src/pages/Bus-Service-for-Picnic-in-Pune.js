
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusServiceForPicnicInPune(){

  const cardData = 
    {
      keyword: ' Bus Service for Picnics in Pune',
      heading: 'Amruta Travels: Bus Service for Picnics in Pune',

      headingDescription: 'Planning a perfect picnic involves more than just picking a location—it requires reliable and comfortable transportation. Amruta Travels specializes in providing exceptional bus services tailored for picnic outings in and around Pune. Here’s a comprehensive guide to our top offerings for picnic bus services that guarantee a smooth and enjoyable experience.',

      top:"Top Bus Service for Picnics in Pune",
       topPlaces : [
        {
            "title": "Lonavala: A Scenic Hill Station:",
            "description": "Located just a short drive from Pune, Lonavala is a popular hill station known for its scenic beauty and lush green landscapes. With Amruta Travels, you can hire a bus to explore attractions like the Bhushi Dam, Lonavala Lake, and the Karla Caves."
        },
        {
            "title": "Mahabaleshwar: Stunning Viewpoints and Fresh Strawberries:",
            "description": "This hill station is famous for its stunning viewpoints, such as Arthur’s Seat and Wilson Point, as well as its fresh strawberries. Amruta Travels offers comfortable bus rentals to help you enjoy a relaxing journey to Mahabaleshwar."
        },
        {
            "title": "Khandala: Picturesque Valleys and Waterfalls:",
            "description": "Adjacent to Lonavala, Khandala is known for its picturesque valleys and waterfalls. Book a bus with Amruta Travels to visit popular spots like Duke’s Nose and the Khandala Lake."
        },
        {
            "title": "Alibaug: Coastal Beauty and Historic Forts:",
            "description": "A coastal town with beautiful beaches and historic forts, Alibaug is a great destination for a beach getaway. Choose Amruta Travels for a hassle-free bus rental experience to this serene location."
        },
        {
            "title": "Pune to Shirdi: A Spiritual Journey:",
            "description": "Known for the Shirdi Sai Baba Temple, Shirdi is a major pilgrimage site. Our bus rental service makes it easy to travel comfortably to this spiritual destination."
        },
        {
            "title": "Lavasa: Picturesque Lakeside Setting:",
            "description": "A planned city known for its picturesque lakeside setting, Lavasa offers a blend of natural beauty and modern amenities. Opt for Amruta Travels to explore Lavasa’s scenic landscapes and enjoy a peaceful retreat."
        },
        {
            "title": "Nashik: Vineyards and Wine Tours:",
            "description": "Renowned for its vineyards and wine tours, Nashik is a popular destination for wine enthusiasts. Amruta Travels provides reliable bus hire services to help you explore Nashik’s wineries and temples."
        },
        {
            "title": "Tungabhadra: Historical Adventure:",
            "description": "For a historical adventure, head to Tungabhadra, known for its ancient temples and ruins. Amruta Travels ensures a comfortable journey to this unique historical site."
        },
        {
            "title": "Kolhapur: Rich Cultural Heritage:",
            "description": "Famous for its rich cultural heritage and the Mahalaxmi Temple, Kolhapur offers a fascinating glimpse into Maharashtra’s history. Book a bus with Amruta Travels for a smooth trip to this vibrant city."
        },
        {
            "title": "Ashtavinayak Temples: A Pilgrimage Tour:",
            "description": "This pilgrimage tour covers eight sacred Ganesh temples around Pune. With Amruta Travels, you can hire a bus to comfortably visit all the Ashtavinayak temples and experience a spiritual journey."
        }
    ],    

    services : [
        {
            "name": "Best Bus Service for Picnic in Pune:",
            "description": "Amruta Travels is renowned for providing the best bus service for picnics in Pune. Our fleet includes a variety of buses that cater to different group sizes and preferences. We ensure comfort, reliability, and affordability, making your picnic trip smooth and enjoyable."
        },
        {
            "name": "Full Bus Booking Price:",
            "description": "Understanding the cost of full bus bookings is essential for budgeting your picnic. Amruta Travels offers competitive pricing for full bus rentals. We provide transparent pricing with no hidden costs, ensuring you get the best value for your money. Contact us for a detailed quote tailored to your specific requirements."
        },
        {
            "name": "Bus Booking for One Day Trip:",
            "description": "For a one-day picnic trip, Amruta Travels offers flexible bus rental options. Our buses are perfect for short-term rentals, providing comfort and convenience for day trips. Whether you’re heading to a local park or an outdoor venue, our buses ensure a pleasant travel experience."
        },
        {
            "name": "Amruta Travels:",
            "description": "Amruta Travels stands out as a leading provider of bus services for picnics and other events in Pune. Our commitment to quality, customer satisfaction, and affordability makes us a preferred choice for many. With a diverse fleet and exceptional service, we ensure your picnic is well-organized and enjoyable."
        },
        {
            "name": "Bus Hire in Hadapsar:",
            "description": "Located in the heart of Pune, Hadapsar is a popular area for picnics. Amruta Travels offers reliable bus hire services in Hadapsar, providing convenient transportation to various picnic spots. Our well-maintained buses are ideal for groups looking to explore the area."
        },
        {
            "name": "Bus Hire in Kharadi:",
            "description": "Kharadi is another prime location for bus hires, especially for picnics. Amruta Travels provides efficient bus hire services in Kharadi, ensuring a comfortable and enjoyable trip to your chosen picnic destination. Our fleet is equipped to handle different group sizes and needs."
        },
        {
            "name": "Bus Hire in Viman Nagar:",
            "description": "For those in Viman Nagar, Amruta Travels offers excellent bus hire options for picnics. Our services include a range of buses suited for different group sizes, providing a comfortable and hassle-free journey to your picnic location."
        },
        {
            "name": "Bus Hire in Kothrud:",
            "description": "Kothrud residents can benefit from our specialized bus hire services for picnics. Amruta Travels offers reliable and affordable options for those planning a day out in the city or to nearby destinations. Our buses are designed to ensure comfort and safety."
        },
        {
            "name": "Bus Hire on Rent in Pimpri Chinchwad Pune:",
            "description": "Pimpri Chinchwad is a bustling area with various picnic spots. Amruta Travels provides bus hire services on rent in Pimpri Chinchwad Pune, offering a range of options to suit different group sizes and preferences. Enjoy a comfortable and smooth ride to your picnic destination."
        },
        {
            "name": "Bus Hire in Baner:",
            "description": "Baner is known for its vibrant atmosphere and proximity to numerous picnic spots. Amruta Travels offers efficient bus hire services in Baner, ensuring you have the best transportation for your picnic. Our buses are well-maintained and ready for your outing."
        },
        {
            "name": "Mini AC Bus on Rent in Wanowrie, Pune:",
            "description": "For a more compact option, our mini AC buses on rent in Wanowrie provide comfort and convenience. Ideal for smaller groups, these buses are equipped with air conditioning and offer a pleasant travel experience for your picnic."
        },
        {
            "name": "Mini AC Bus on Rent in Sinhagad Road Pune:",
            "description": "Sinhagad Road is a popular area with scenic spots for picnics. Amruta Travels offers mini AC bus rentals in Sinhagad Road Pune, providing a comfortable and cool travel experience for your day trip."
        },
        {
            "name": "Mini Bus on Rent in Aundh Pune:",
            "description": "Aundh is a convenient location for bus rentals. Our mini buses on rent in Aundh Pune are perfect for smaller groups looking to enjoy a picnic. We ensure a comfortable and reliable service for your outing."
        },
        {
            "name": "Mini Bus on Rent in Hinjewadi for 1 Day:",
            "description": "Hinjewadi, known for its IT parks, also offers great picnic spots. Amruta Travels provides mini bus rentals in Hinjewadi for one-day trips, ensuring a comfortable and efficient transportation option for your picnic."
        },
        {
            "name": "Mini Bus on Rent in Wagholi:",
            "description": "Wagholi, with its scenic locations, is a great place for picnics. Amruta Travels offers mini bus rentals in Wagholi, providing a convenient and comfortable travel solution for your day out."
        },
        {
            "name": "Bus Service for Picnic in Pune:",
            "description": "Planning a picnic in Pune? Amruta Travels provides reliable and comfortable bus services tailored specifically for picnics and recreational outings. Our buses are equipped with ample seating and essential amenities, making them ideal for group picnics to parks, gardens, or other scenic spots. Enjoy a hassle-free and enjoyable picnic experience with our dedicated bus rental services."
        },
        {
            "name": "Mini Bus Rental Service in Pimpri Chinchwad:",
            "description": "For smaller groups or more intimate events, consider our mini bus rental service in Pimpri Chinchwad. Amruta Travels offers mini buses that are perfect for family outings, corporate events, or any small group travel. With comfortable seating and modern features, our mini buses provide a cozy and efficient travel solution."
        },
        {
            "name": "Tempo Traveller Service for Picnic in Pune:",
            "description": "Enhance your picnic experience with our tempo traveller service in Pune. Tempo travellers are a versatile choice for group outings, offering both comfort and flexibility. Amruta Travels provides well-maintained tempo travellers equipped with amenities to make your picnic as enjoyable as possible. Ideal for transporting groups to various picnic spots, our tempo travellers ensure a smooth and pleasant journey."
        },
        {
            "name": "17-Seater Tempo Traveller on Rent for Picnic in Pune:",
            "description": "If you need a vehicle that combines comfort with a manageable size for your picnic, our 17-seater tempo traveller is a perfect choice. Amruta Travels offers 17-seater tempo travellers for rent in Pune, providing ample space and comfort for medium-sized groups. Enjoy a relaxing and enjoyable picnic with our well-equipped tempo travellers."
        },
        {
            "name": "Tempo Traveller 17-Seater Rent Per Km:",
            "description": "For transparent and flexible pricing, Amruta Travels offers a rent-per-kilometer rate for our 17-seater tempo travellers. This option allows you to manage your budget effectively while enjoying the comfort and convenience of our well-maintained tempo travellers. Contact us for detailed information on rates and to book your tempo traveller for your next trip."
        },
        {
            "name": "17-Seater Bus on Rent in Pune:",
            "description": "For larger groups, Amruta Travels offers 17-seater buses for rent in Pune. These buses are ideal for a variety of occasions, including picnics, family outings, and small corporate events. With comfortable seating and essential amenities, our 17-seater buses ensure a pleasant and stress-free travel experience."
        },
        {
            "name": "Tempo Traveller on Rent in Pune:",
            "description": "Amruta Travels provides tempo travellers for rent in Pune, offering a practical solution for both local and outstation travel. Our fleet of tempo travellers is designed to accommodate medium-sized groups with comfort and style. Whether you’re planning a picnic, a tour, or any group activity, our tempo travellers are well-suited to meet your needs."
        },
        {
            "name": "Bus Service for Picnic in Pune Contact Number:",
            "description": "Contact Amruta Travels at +91 8421333435 for prompt and efficient Bus Service for Picnic in Pune. We ensure a smooth and enjoyable ride for all our customers."
        }
    ],    

    "tableData": [
        ["- Best Bus Service for Picnic in Pune", "- Full Bus Booking Price"],
        ["- Bus Booking for One Day Trip", "- Bus Hire in Hadapsar"],
        ["- Bus Hire in Kharadi", "- Bus Hire in Kothrud"],
        ["- Bus Hire on Rent in Pimpri Chinchwad Pune", "- Bus Hire in Baner"],
        ["- Mini AC Bus on Rent in Wanowrie Pune", "- Mini AC Bus on Rent in Sinhagad Road Pune"],
        ["- Mini Bus on Rent in Aundh Pune", "- Mini Bus on Rent in Hinjewadi for 1 Day"],
        ["- Mini Bus on Rent in Wagholi", "- Bus Service for Picnic in Pune"],
        ["- Mini Bus Rental Service in Pimpri Chinchwad", "- Tempo Traveller Service for Picnic in Pune"],
        ["- 17-Seater Tempo Traveller on Rent for Picnic in Pune", "- Tempo Traveller 17-Seater Rent Per Km"],
        ["- 17-Seater Bus on Rent in Pune", "- Tempo Traveller on Rent in Pune"]
    ],

    "whychoose": [
        {
            "WhyChooseheading": "Why Choose Amruta Travels for Your Picnic Bus Service in Pune?",
            "WhyChoosedescription": ""
        },
        {
            "WhyChooseheading": "Comfort and Convenience:",
            "WhyChoosedescription": "At Amruta Travels, we prioritize your comfort with our fleet of modern, well-maintained buses. Enjoy plush seating, ample legroom, and air conditioning to ensure a pleasant journey to and from your picnic destination."
        },
        {
            "WhyChooseheading": "Experienced Drivers:",
            "WhyChoosedescription": "Our professional drivers are experienced and familiar with the best routes, ensuring a smooth and safe ride. They are trained to handle various traffic conditions and are dedicated to making your trip enjoyable."
        },
        {
            "WhyChooseheading": "Flexible Packages:",
            "WhyChoosedescription": "We offer customized packages tailored to your specific needs. Whether you’re organizing a small family outing or a large group excursion, we can accommodate your requirements with flexible options."
        },
        {
            "WhyChooseheading": "Affordable Rates:",
            "WhyChoosedescription": "Enjoy competitive pricing without compromising on quality. We strive to provide excellent value for money, ensuring that your picnic bus service is both economical and exceptional."
        },
        {
            "WhyChooseheading": "Reliable Service:",
            "WhyChoosedescription": "Punctuality is key, and we pride ourselves on our reliability. Count on us to be on time, so you can spend more time enjoying your picnic and less time worrying about logistics."
        },
        {
            "WhyChooseheading": "Safety First:",
            "WhyChoosedescription": "Your safety is our top priority. Our buses are regularly inspected and equipped with safety features to ensure a secure journey. We also follow all health and safety regulations to provide a safe environment for all passengers."
        },
        {
            "WhyChooseheading": "Customer Satisfaction:",
            "WhyChoosedescription": "Our dedicated customer service team is always ready to assist you with any queries or special requests. We aim to exceed your expectations and make your picnic outing memorable."
        }
      ]
};

const faqData = [
    {
        "question": "How can I book a bus for a picnic with Amruta Travels?",
        "answer": "Booking is simple! You can reach out to us through our website, call our customer service, or visit our office. Provide us with details about your picnic, such as date, number of passengers, and destination, and we’ll assist you in arranging the perfect bus service."
    },
    {
        "question": "Are the buses equipped with amenities for a long journey?",
        "answer": "Yes, our buses are equipped with comfortable seating, air conditioning, and other amenities to ensure a pleasant journey. Some buses may also offer entertainment options, depending on the package you choose."
    },
    {
        "question": "Can I customize the bus service according to my needs?",
        "answer": "Absolutely! We offer flexible packages that can be tailored to your specific requirements. Whether you need extra stops, specific departure times, or additional services, we’re happy to accommodate your requests."
    },
    {
        "question": "What measures are taken to ensure the safety of passengers?",
        "answer": "We take safety very seriously. Our buses are regularly inspected and maintained to meet safety standards. Additionally, our drivers are experienced and trained in safe driving practices. We also adhere to all health and safety regulations to ensure a secure journey."
    },
    {
        "question": "What is the cancellation policy?",
        "answer": "Our cancellation policy depends on the terms and conditions agreed upon at the time of booking. Generally, we offer a refund or rescheduling option if you cancel within a specified period before the trip. Please contact us for detailed information on our cancellation policy."
    },
    {
        "question": "Are there any additional charges for luggage or special equipment?",
        "answer": "Standard luggage is usually included in the fare, but there might be additional charges for excessive luggage or special equipment. It’s best to inform us in advance about any special requirements so we can provide you with the appropriate information and pricing."
    },
    {
        "question": "What should I do if there are issues during the journey?",
        "answer": "If you encounter any issues during the journey, please contact our customer service team immediately. We’re available to assist you and resolve any problems to ensure a smooth and enjoyable experience."
    },
    {
        "question": "Can I request a specific bus model or size for my group?",
        "answer": "Yes, you can request a specific bus model or size based on your group’s needs. We offer various bus options to accommodate different group sizes and preferences. Just let us know your requirements, and we’ll do our best to fulfill them."
    }
];

const testimonials = [
    {
        "name": "Miss Priya Mehta",
        "text": "We recently used Amruta Travels for a picnic with our extended family, and the experience was fantastic. The bus was spacious, clean, and comfortable, making our journey to the picnic spot in Pune smooth and enjoyable. The driver was courteous and punctual, which made our day even better. I highly recommend Amruta Travels for anyone planning a group outing!"
    },
    {
        "name": "Mr. Rajesh Patel",
        "text": "Amruta Travels provided excellent service for our company picnic. The bus was well-maintained and equipped with all the necessary amenities. The entire booking process was seamless, and the team was very accommodating to our needs. Our group had a wonderful time, and the trip was made even more enjoyable thanks to their reliable service. Will definitely use them again for future events!"
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
        heading: "Bus Service for Picnic in Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Service for Picnic in Pune | Mini & Luxury Bus Hire</title>
  <meta name="description" content="Amruta Travels offers the best bus services for picnics in Pune. Rent mini buses, luxury buses, and tempo travellers for one-day trips. Affordable rates for bus bookings in Hadapsar, Kharadi, Viman Nagar, and more. Book a bus for your next picnic outing in Pune." />
  <meta name="keywords" content="Best bus service for picnic in Pune, Full bus booking price, Bus booking for one day trip, Amruta Travels, Bus hire in Hadapsar, Bus hire in Kharadi, Bus hire in Viman Nagar, Bus Hire in Kothrud, Bus hire on rent in Pimpri Chinchwad Pune, Bus Hire in Baner, Mini AC Bus On Rent in Wanowrie, Pune, Mini Ac Bus on Rent in Sinhagad Road Pune, Mini Bus On Rent in Aundh Pune, Mini Bus on Rent in Hinjewadi for 1 day, Mini Bus On Rent in Wagholi, Bus Service for Picnic in Pune, Mini bus rental service in Pimpri Chinchwad, Tempo Traveller Service for Picnic in Pune, 17 seater tempo traveller on rent for picnic in Pune, Tempo traveller 17 seater-rent per km, 17 seater bus on rent in Pune, Tempo Traveller On Rent in Pune" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Amruta Travels offers the best bus services for picnics in Pune. Rent mini buses, luxury buses, and tempo travellers for one-day trips. Affordable rates for bus bookings in Hadapsar, Kharadi, Viman Nagar, and more. Book a bus for your next picnic outing in Pune.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-service-for-picnic-in-pune",
        "logo": "https://amrutatravel.com/images/bus-service-for-picnic-pune.jpg",
        "image": "https://amrutatravel.com/images/bus-service-for-picnic-pune.jpg",
        "priceRange": "₹3500 - ₹25000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-service-for-picnic-in-pune",
          "priceCurrency": "INR",
          "price": "3500",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "250"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ravi Shinde"
            },
            "datePublished": "2024-08-20",
            "reviewBody": "Amruta Travels provided excellent bus service for our picnic in Pune. The bus was comfortable, and the driver was punctual. Great experience!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Neha Rani"
            },
            "datePublished": "2024-07-15",
            "reviewBody": "Booked a 17-seater tempo traveller for a picnic with friends. The service was top-notch, and the trip was hassle-free. Highly recommend Amruta Travels."
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
          "serviceUrl": "https://amrutatravel.com/bus-service-for-picnic-in-pune"
        },
        "keywords": "Best bus service for picnic in Pune, Full bus booking price, Bus booking for one day trip, Amruta Travels, Bus hire in Hadapsar, Bus hire in Kharadi, Bus hire in Viman Nagar, Bus Hire in Kothrud, Bus hire on rent in Pimpri Chinchwad Pune, Bus Hire in Baner, Mini AC Bus On Rent in Wanowrie, Pune, Mini Ac Bus on Rent in Sinhagad Road Pune, Mini Bus On Rent in Aundh Pune, Mini Bus on Rent in Hinjewadi for 1 day, Mini Bus On Rent in Wagholi, Bus Service for Picnic in Pune, Mini bus rental service in Pimpri Chinchwad, Tempo Traveller Service for Picnic in Pune, 17 seater tempo traveller on rent for picnic in Pune, Tempo traveller 17 seater-rent per km, 17 seater bus on rent in Pune, Tempo Traveller On Rent in Pune"
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
      <h3 className='Colo'>FAQs - Bus Service for Picnic in Pune with Amruta Travels:</h3>
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
export default BusServiceForPicnicInPune;