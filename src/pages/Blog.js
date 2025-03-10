import React from 'react';

const Blog = () => {
  // Card data
  const cardData = [
    {
      id: 1,
      imgSrc: "/img/blog-img.jpg",
      imgAlt: "news-img",
      title: "Discover India's Hidden Treasures: Unforgettable Journeys with Amruta Travel.",
      description:
        "At Amruta Travel Travels, we believe that the soul of travel lies in uncovering the hidden treasures that make India so extraordinary.",
      delay: ".3s",
    },
    {
      id: 2,
      imgSrc: "/img/Keyword Based Image/Keyword Based Image-04.jpg",
      imgAlt: "mini-bus-img",
      title: "Mini Bus on Rent in Pune",
      description:
        "Experience seamless travel with our mini bus rental services in Pune, perfect for group outings and family trips.",
      delay: ".4s",
    },
    {
      id: 3,
      imgSrc: "/img/Img for Our Fleet/Img for Our Fleet-12.jpg",
      imgAlt: "volvo-bus-img",
      title: "Volvo Bus Hire in Pune",
      description:
        "Travel in luxury with our Volvo bus hire services in Pune, ideal for long-distance and corporate travel.",
      delay: ".5s",
    },
    {
      id: 4,
      imgSrc: "/img/Keyword Based Image/Keyword Based Image-37.jpg",
      imgAlt: "bus-on-rent-img",
      title: "Pune Local Bus On Rent",
      description:
        "Reliable and affordable bus rental services in Pune for all your group travel needs.",
      delay: ".6s",
    },
    {
      id: 5,
      imgSrc: "/img/Keyword Based Image/Keyword Based Image-15.jpg",
      imgAlt: "luxury-bus-img",
      title: "Luxury Bus Rental in Pune",
      description:
        "Make your journey memorable with our premium luxury bus rental services in Pune.",
      delay: ".7s",
    },
    {
      id: 6,
      imgSrc: "/img/Keyword Based Image/Keyword Based Image-45.jpg",
      imgAlt: "outstation-bus-img",
      title: "Bus Hire for Outstation in Pune",
      description:
        "Convenient and comfortable bus hire services for outstation trips from Pune.",
      delay: ".8s",
    },
    {
      id: 7,
      imgSrc: "/img/Keyword Based Image/Keyword Based Image-55.jpg",
      imgAlt: "wedding-bus-img",
      title: "Bus Hire Services for Weddings in Pune",
      description:
        "Ensure smooth transportation for your wedding guests with our dedicated bus hire services in Pune.",
      delay: ".9s",
    },
    {
      id: 8,
      imgSrc: "/img/Keyword Based Image/Keyword Based Image-39.jpg",
      imgAlt: "force-urbania-img",
      title: "Force Urbania Luxury Mini Bus on Rent",
      description:
        "Experience unmatched luxury with our Force Urbania mini bus rental, perfect for special occasions and tours.",
      delay: "1s",
    },
    {
      id: 9,
      imgSrc: "/img/Keyword Based Image/Keyword Based Image-59.jpg",
      imgAlt: "event-bus-img",
      title: "Bus on Rent for Events in Pune",
      description:
        "Effortlessly manage group transportation for your events in Pune with our specialized bus rental services.",
      delay: "1.1s",
    },
  ];
  

  return (
    <div>
      <section className="page-header">
        <div className="page-header-shape"></div>
        <div className="container">
          <div className="page-header-info">
            <h4>Blog</h4>
            <h2>
              Feel your journey <br /> with <span>Amruta Travels</span>
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-0">
          <div className="row g-0 justify-content-center">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={card.delay}
              >
                <div className="news-card-items mt-0">
                  <div className="news-image">
                    <img src={card.imgSrc} alt={card.imgAlt} />
                  </div>
                  <div className="news-content">
                    <h3>
                      <p style={{ color: "#ff7700" }}>{card.title}</p>
                    </h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
