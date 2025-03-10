
import Accordion from './Accordion';
import CustomCarousel from './CustomCarousel'; 
import { Helmet } from 'react-helmet';
import './smallkey.css';
import FareCard from './FareCard';
import GoogleAnalytics from './GoogleAnalytics';


function  BusWedding(){

  const cardData = 
    {
      keyword: 'Bus Hire Services for Weddings in Pune',
      heading: ' Amruta Travels: Bus Hire Services for Weddings in Pune',

      headingDescription: 'Planning a wedding involves numerous details, and transportation is a crucial aspect that can make or break your special day. Amruta Travels offers top-notch bus hire services to ensure that your guests arrive at the wedding venue comfortably and on time. Here’s a look at the top  bus hire options for weddings in Pune provided by Amruta Travels:',

      top:"Top Bus Hire Services for Weddings in Pune:",

       topPlaces : [
        {
            "title": "14-Seater Minibus:",
            "description": "Ideal for smaller wedding parties or transporting guests from different locations to the venue. Our 14-seater minibuses are equipped with comfortable seating and air conditioning to ensure a pleasant journey. Keywords: 14-seater minibus Hinjewadi, small bus rental Hinjewadi."
        },
        {
            "title": "17-Seater Minibus:",
            "description": "Perfect for medium-sized groups, this minibus offers ample space and comfort. It’s a great choice for shuttling guests to and from wedding-related events or the reception. Keywords: 17-seater minibus Hinjewadi, medium-sized bus rental Hinjewadi."
        },
        {
            "title": "25-Seater Bus:",
            "description": "For larger gatherings, our 25-seater buses provide more room and comfort. These buses are well-suited for transporting guests between hotels, the wedding venue, and other locations. Keywords: 25-seater bus Hinjewadi, large group bus rental Hinjewadi."
        },
        {
            "title": "32-Seater Bus:",
            "description": "This option is perfect for accommodating extended family and friends. With extra space and modern amenities, our 32-seater buses ensure that everyone travels comfortably. Keywords: 32-seater bus Hinjewadi, comfortable bus rental Hinjewadi."
        },
        {
            "title": "35-Seater Luxury Bus:",
            "description": "Elevate the wedding experience with our 35-seater luxury buses. Featuring plush seating, enhanced air conditioning, and additional amenities, these buses provide a premium travel experience for your guests. Keywords: 35-seater luxury bus Hinjewadi, luxury bus rental Hinjewadi."
        },
        {
            "title": "40-Seater Executive Bus:",
            "description": "Our 40-seater executive buses are ideal for large wedding parties seeking a blend of luxury and functionality. These buses come with high-end features and ample space, ensuring a sophisticated travel experience. Keywords: 40-seater executive bus Hinjewadi, executive bus rental Hinjewadi."
        },
        {
            "title": "45-Seater Deluxe Bus:",
            "description": "For the ultimate in comfort and style, our 45-seater deluxe buses offer spacious seating and premium amenities. This option is perfect for large weddings where comfort and elegance are priorities. Keywords: 45-seater deluxe bus Hinjewadi, deluxe bus rental Hinjewadi."
        },
        {
            "title": "50-Seater Bus:",
            "description": "Our 50-seater buses are designed to handle very large groups. With generous seating and modern facilities, these buses are perfect for ensuring that every guest travels comfortably to the wedding venue. Keywords: 50-seater bus Hinjewadi, large capacity bus rental Hinjewadi."
        },
        {
            "title": "Urbania Luxury Mini Bus:",
            "description": "The Urbania luxury mini bus offers a stylish and comfortable option for wedding transportation. With modern amenities and sleek design, it’s a great choice for smaller groups looking for a touch of elegance. Keywords: Urbania luxury mini bus Hinjewadi, luxury mini bus rental Hinjewadi."
        },
        {
            "title": "Bharat Benz 35-Seater Bus:",
            "description": "Our Bharat Benz 35-seater buses combine luxury with reliability. Known for their smooth ride and comfortable seating, these buses are perfect for providing a high-quality travel experience for wedding guests. Keywords: Bharat Benz 35-seater bus Hinjewadi, high-quality bus rental Hinjewadi."
        }
    ],    
 "services": [
        {
            "name": "14-Seater Minibus",
            "description": "Ideal for smaller wedding parties or transporting guests from different locations to the venue. Our 14-seater minibuses are equipped with comfortable seating and air conditioning to ensure a pleasant journey. Keywords: 14-seater minibus hire Pune, small bus rental Pune."
        },
        {
            "name": "17-Seater Minibus",
            "description": "Perfect for medium-sized groups, this minibus offers ample space and comfort. It’s a great choice for shuttling guests to and from wedding-related events or the reception. Keywords: 17-seater minibus hire Pune, medium-sized bus rental Pune."
        },
        {
            "name": "25-Seater Bus",
            "description": "For larger gatherings, our 25-seater buses provide more room and comfort. These buses are well-suited for transporting guests between hotels, the wedding venue, and other locations. Keywords: 25-seater bus hire Pune, large group bus rental Pune."
        },
        {
            "name": "32-Seater Bus",
            "description": "This option is perfect for accommodating extended family and friends. With extra space and modern amenities, our 32-seater buses ensure that everyone travels comfortably. Keywords: 32-seater bus hire Pune, extended group bus rental Pune."
        },
        {
            "name": "35-Seater Luxury Bus",
            "description": "Elevate the wedding experience with our 35-seater luxury buses. Featuring plush seating, enhanced air conditioning, and additional amenities, these buses provide a premium travel experience for your guests. Keywords: 35-seater luxury bus hire Pune, premium bus rental Pune."
        },
        {
            "name": "40-Seater Executive Bus",
            "description": "Our 40-seater executive buses are ideal for large wedding parties seeking a blend of luxury and functionality. These buses come with high-end features and ample space, ensuring a sophisticated travel experience. Keywords: 40-seater executive bus hire Pune, luxury executive bus rental Pune."
        },
        {
            "name": "45-Seater Deluxe Bus",
            "description": "For the ultimate in comfort and style, our 45-seater deluxe buses offer spacious seating and premium amenities. This option is perfect for large weddings where comfort and elegance are priorities. Keywords: 45-seater deluxe bus hire Pune, luxury deluxe bus rental Pune."
        },
        {
            "name": "50-Seater Bus",
            "description": "Our 50-seater buses are designed to handle very large groups. With generous seating and modern facilities, these buses are perfect for ensuring that every guest travels comfortably to the wedding venue. Keywords: 50-seater bus hire Pune, large capacity bus rental Pune."
        },
        {
            "name": "Urbania Luxury Mini Bus",
            "description": "The Urbania luxury mini bus offers a stylish and comfortable option for wedding transportation. With modern amenities and sleek design, it’s a great choice for smaller groups looking for a touch of elegance. Keywords: Urbania luxury mini bus hire Pune, stylish mini bus rental Pune."
        },
        {
            "name": "Bharat Benz 35-Seater Bus",
            "description": "Our Bharat Benz 35-seater buses combine luxury with reliability. Known for their smooth ride and comfortable seating, these buses are perfect for providing a high-quality travel experience for wedding guests. Keywords: Bharat Benz 35-seater bus hire Pune, luxury bus rental Pune."
        }
    ],
    "tableData": [
        ["- Pune Bus Rental for Wedding", "- Amruta Travels Pune"],
        ["- AC Bus Hire for Wedding", "- Affordable Bus Hire for Wedding"],
        ["- Bus Hire for All Wedding Functions", "- Bride and Groom Bus Hire Pune"],
        ["- Budget Bus Rental for Wedding in Pune", "- Comfortable Bus Hire for Wedding"],
        ["- 25-Seater Bus Service for Wedding", "- 26-Seater Bus Service for Wedding"],
        ["- 32-Seater Bus Service for Wedding", "- 50-Seater Bus Hire Service for Wedding"],
        ["- Bus Rental for Wedding Party", "- Sleeper Coach Bus on Rent for Wedding Party"],
        ["- Bus Hire for Wedding Pune", "- Bus Booking for Wedding in Pune"],
        ["- Wedding Bus Hire Near Me Pune", "- Shuttle Rental for Wedding in Pune"],
        ["- Wedding Party Bus Rental", "- Wedding Bus Transportation in Pune"],
        ["- Party Bus for Wedding", "- Bus for Wedding Travels"],
        ["- Bus Booking for Wedding", "- Bus on Rent for Wedding in Pimpri Chinchwad"],
        ["- Bus Rental for Wedding Near Me", "- AC Bus Booking for Marriage"],
        ["- Full Bus Booking for Marriage Price", "- Pune to Outstation Bus Booking for Marriage"],
        ["- Bus Booking for Marriage Event", "- Bus Rental for Wedding Near Me"]
    ]
,
"whychoose": [
    {
        "WhyChooseheading": "Comprehensive Fleet of Buses",
        "WhyChoosedescription": "At Amruta Travels, we offer a diverse range of buses to cater to all your wedding transportation needs. From intimate shuttles for small groups to large, luxurious buses for extensive wedding parties, we have the perfect vehicle for every occasion."
    },
    {
        "WhyChooseheading": "Comfort and Luxury",
        "WhyChoosedescription": "Our buses are equipped with modern amenities to ensure a comfortable and enjoyable journey for your guests. Enjoy features such as air-conditioning, plush seating, and ample space to make your wedding travel experience as pleasant as possible."
    },
    {
        "WhyChooseheading": "Reliable and Professional Service",
        "WhyChoosedescription": "We pride ourselves on our punctuality and professionalism. Our experienced drivers are dedicated to ensuring that your guests arrive at their destinations safely and on time, allowing you to focus on enjoying your special day."
    },
    {
        "WhyChooseheading": "Customizable Options",
        "WhyChoosedescription": "We understand that every wedding is unique. That’s why we offer customizable options to tailor our services to meet your specific needs, whether it’s a particular bus size, style, or additional features."
    },
    {
        "WhyChooseheading": "Competitive Pricing",
        "WhyChoosedescription": "Amruta Travels provides transparent and competitive pricing for our wedding bus hire services. We offer flexible packages to suit different budgets, ensuring you get the best value for your investment."
    },
    {
        "WhyChooseheading": "Easy Booking Process",
        "WhyChoosedescription": "Our straightforward booking process is designed to make planning your wedding transportation as hassle-free as possible. With just a few simple steps, you can secure the perfect bus for your wedding day."
    },
    {
        "WhyChooseheading": "Local Expertise",
        "WhyChoosedescription": "As a Pune-based company, we have in-depth knowledge of the local area and wedding venues. This expertise allows us to provide efficient and reliable transportation solutions tailored to the specific requirements of weddings in Pune."
    },
    {
        "WhyChooseheading": "Exceptional Customer Service",
        "WhyChoosedescription": "Our dedicated team is committed to providing excellent customer service. From the initial inquiry to the day of the wedding, we are here to assist you with any questions or special requests to ensure everything goes smoothly."
    }
]

};

    
const faqData = [
    {
        "question": "What types of buses do you offer for wedding hire?",
        "answer": "We offer a variety of buses for wedding hire, including shuttles, party buses, and luxury coaches. Whether you need a small bus for a few guests or a large bus for an entire wedding party, we have options to suit your needs."
    },
    {
        "question": "How can I book a bus for my wedding?",
        "answer": "Booking a bus is easy with Amruta Travels. Simply contact us via phone or email, provide details about your wedding, and we will assist you in selecting the right bus and finalize your booking."
    },
    {
        "question": "What features are included in your wedding buses?",
        "answer": "Our wedding buses come with modern amenities such as air-conditioning, comfortable seating, and ample space. Some options may also include additional features like entertainment systems and refreshments, depending on your requirements."
    },
    {
        "question": "Are your buses equipped for long-distance travel?",
        "answer": "Yes, our buses are well-maintained and equipped to handle long-distance travel. Whether your wedding involves local or outstation trips, we ensure that your journey is comfortable and enjoyable."
    },
    {
        "question": "What are your pricing options for wedding bus hire?",
        "answer": "We offer competitive and transparent pricing for our wedding bus hire services. Pricing varies based on the type of bus, duration of hire, and additional features. Contact us for a detailed quote tailored to your wedding needs."
    },
    {
        "question": "Can I make changes to my booking after it is confirmed?",
        "answer": "Yes, we offer flexibility with bookings. If you need to make changes to your reservation, please contact us as soon as possible, and we will do our best to accommodate your requests."
    },
    {
        "question": "How early should I book a bus for my wedding?",
        "answer": "To ensure availability and secure the best options, we recommend booking your wedding bus as early as possible. Early booking also allows for better planning and coordination of your transportation needs."
    },
    {
        "question": "What measures do you take to ensure the safety of passengers?",
        "answer": "The safety of our passengers is a top priority. Our buses are regularly maintained, and our drivers are experienced and trained to provide safe and reliable transportation. We adhere to all safety regulations and guidelines to ensure a secure journey."
    }
];


const testimonials = [
    {
        "name": "Mr. Rahul Patel",
        "text": "We recently hired Amruta Travels for our wedding transportation, and I couldn’t be happier with the service. From the moment we reached out to book, the process was smooth and professional. The bus was immaculate and equipped with everything we needed for our guests to travel comfortably between the ceremony and reception. The driver was punctual and courteous, ensuring everything went off without a hitch. Highly recommend Amruta Travels for anyone looking for reliable and top-notch bus hire for their wedding in Pune!"
    },
    {
        "name": "Ms. Priya Sharma",
        "text": "Choosing Amruta Travels for our wedding bus hire was one of the best decisions we made. We had a large guest list, and their fleet of buses ensured that everyone was accommodated comfortably. The buses were modern and well-maintained, and the service was exceptional. Our guests praised the comfort and convenience of the transportation. Amruta Travels made our wedding day stress-free by handling all the transportation needs with professionalism and care. Thank you for making our special day even more memorable!"
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
        heading: "Bus Hire For Wedding in Pune Contact Number:",
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
  <title>Contact: +91 8421333435 | Amruta Travels | Bus Hire for Wedding in Pune | Affordable Bus Rental for Wedding | Amruta Travels</title>
  <meta name="description" content="Book a comfortable and affordable bus for your wedding in Pune. Choose from AC buses, luxury buses, and shuttle services for wedding functions. Affordable bus hire for bride, groom, and guests. Available for all wedding events in Pune." />
  <meta name="keywords" content="Bus Hire Service for wedding in Pune, Pune bus rental for wedding, AC bus hire for wedding, Amruta Travels Pune, Affordable bus hire for Wedding, Bus hire for all wedding functions, Bride and groom bus hire Pune, Budget bus rental for wedding in Pune, comfortable bus hire for wedding, 25-seater bus service for wedding, 26-seater bus service for wedding, 32-seater bus service for Wedding, 50 Seater Bus Hire Service for wedding, Bus Rental for wedding party, Sleeper Coach Bus on Rent for Wedding Party, Bus Hire For Wedding Pune, Bus booking for wedding in Pune, Wedding bus hire near me Pune, Shuttle rental for wedding in Pune, wedding party bus rental, wedding bus transportation in Pune, Party Bus for Wedding, Bus for wedding Travels, Bus booking for wedding, bus on rent for wedding in Pimpri Chinchwad, Bus Rental for wedding near me, Ac bus booking for marriage, full bus booking for marriage price, Pune to outstation bus booking for marriage, Bus Booking for Marriage Event" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Amruta Travels",
        "description": "Book a comfortable and affordable bus for your wedding in Pune. Choose from AC buses, luxury buses, and shuttle services for wedding functions. Affordable bus hire for bride, groom, and guests. Available for all wedding events in Pune.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City, Phase-2, Near Prayeja City, Vadgaon Budruk",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "telephone": "+91-8421333435",
        "url": "https://amrutatravel.com/bus-hire-for-wedding-in-pune",
        "logo": "https://amrutatravel.com/images/bus-hire-for-wedding-in-pune.jpg",
        "image": "https://amrutatravel.com/images/bus-hire-for-wedding-in-pune.jpg",
        "priceRange": "₹5000 - ₹30000",
        "offers": {
          "@type": "Offer",
          "url": "https://amrutatravel.com/bus-hire-for-wedding-in-pune",
          "priceCurrency": "INR",
          "price": "5000",
          "priceValidUntil": "2024-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "720"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Nina Patel"
            },
            "datePublished": "2024-07-15",
            "reviewBody": "Booked a 32-seater AC bus for our wedding transport. The service was exceptional, and the guests were very comfortable. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anil Deshmukh"
            },
            "datePublished": "2024-05-10",
            "reviewBody": "Amruta Travels provided an excellent 50-seater luxury bus for our wedding. The booking process was seamless, and the staff was professional."
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
          "serviceUrl": "https://amrutatravel.com/bus-hire-for-wedding-in-pune"
        },
        "keywords": "Bus Hire Service for wedding in Pune, Pune bus rental for wedding, AC bus hire for wedding, Amruta Travels Pune, Affordable bus hire for Wedding, Bus hire for all wedding functions, Bride and groom bus hire Pune, Budget bus rental for wedding in Pune, comfortable bus hire for wedding, 25-seater bus service for wedding, 26-seater bus service for wedding, 32-seater bus service for Wedding, 50 Seater Bus Hire Service for wedding, Bus Rental for wedding party, Sleeper Coach Bus on Rent for Wedding Party, Bus Hire For Wedding Pune, Bus booking for wedding in Pune, Wedding bus hire near me Pune, Shuttle rental for wedding in Pune, wedding party bus rental, wedding bus transportation in Pune, Party Bus for Wedding, Bus for wedding Travels, Bus booking for wedding, bus on rent for wedding in Pimpri Chinchwad, Bus Rental for wedding near me, Ac bus booking for marriage, full bus booking for marriage price, Pune to outstation bus booking for marriage, Bus Booking for Marriage Event"
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
    <img src='\img\Keyword Based Image\Keyword Based Image-55.jpg' alt='img'/>
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
      <h3 className='Colo'>FAQs – Bus Hire For Wedding in Pune with Amruta Travels:</h3>
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
export default BusWedding;