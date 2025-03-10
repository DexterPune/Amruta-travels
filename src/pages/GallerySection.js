import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const vehicleData = [
  { name: 'Vehicle 1', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-01.jpg' },
  { name: 'Vehicle 2', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-02.jpg' },
  { name: 'Vehicle 3', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-03.jpg' },
  { name: 'Vehicle 4', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-04.jpg' },
  { name: 'Vehicle 5', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-05.jpg' },
  { name: 'Vehicle 6', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-06.jpg' },
  { name: 'Vehicle 7', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-07.jpg' },
  { name: 'Vehicle 8', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-08.jpg' },
  { name: 'Vehicle 9', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-09.jpg' },
  { name: 'Vehicle 10', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-10.jpg' },
  { name: 'Vehicle 11', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-11.jpg' },
  { name: 'Vehicle 12', imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-12.jpg' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(vehicleData[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % vehicleData.length;
    setSelectedImage(vehicleData[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + vehicleData.length) % vehicleData.length;
    setSelectedImage(vehicleData[prevIndex]);
    setCurrentIndex(prevIndex);
  };
 
  const schemaData = 
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Amruta Travels",
    "description": "Explore top-notch travel services with Amruta Travels. Book luxury mini buses, personalized tours, and travel packages for corporate events, family trips, and more in Pune and surrounding areas.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "telephone": "+91 8421333435",
    "image": "https://amrutatravel.com/img/OG-Image/OG-Image-01.jpg",
    "sameAs": [
      "https://https://www.facebook.com/people/Amruta-travels/61567052876581/?mibextid=LQQJ4d&rdid=ik0ebd0HKUH6Pi4Z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ApFoorKKj%2F%3Fmibextid%3DLQQJ4d/amrutatravels",
      "https://https://www.instagram.com/amruta_travels_//amrutatravels",
      "https://www.linkedin.com/company/amrutatravels"
    ]
  }
  
  
  
    return (
      
      <div>
  
  
  <Helmet>
    <script type="application/ld+json">
    {JSON.stringify(schemaData)}
    </script>
          <title>Contact: +91 8421333435 | Amruta Travel | Premium Travel Services & Luxury Bus Rentals in Pune</title>
        <meta name="description" content="Explore top-notch travel services with Amruta Travels." />
        <meta name="keywords" content="Amruta Travels, luxury mini bus rental Pune, travel agency Pune" />
       
</Helmet>
      <section className="page-header">
      <div className="page-header-shape"></div>
      <div className="container">
        <div className="page-header-info">
          <h4>Gallery </h4>
          <h2>
            Feel your journey <br /> with <span>Amruta Travels</span>
          </h2>
          
        </div>
      </div>
    </section>
      <section className=" gallery-section px-md-2 px-lg-4 p-0">
        <div className='container-fluid px-0'>

        <div className="gallery-container row g-0" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {vehicleData.map((vehicle, index) => (
            <div
              key={index}
              className="gallery-card col-12 col-md-6 col-lg-4"
              onClick={() => openModal(index)}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <img
                src={vehicle.imgSrc}
                alt={vehicle.name}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s',
                color: '#fff',
                fontSize: '2rem',
                zIndex: 1, // Ensure overlay is above the image
              }}>
                +
              </div>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.previousElementSibling;
                overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.previousElementSibling;
                overlay.style.opacity = '0';
              }}
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="modal"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
          >
            <div className="modal-content w-50" style={{ textAlign: 'center', position: 'relative' }}>
              <span className="modal-close" onClick={closeModal} style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                fontSize: '2rem',
                color: 'black',
                
              }}>×</span>
              <img src={selectedImage.imgSrc} alt={selectedImage.name} style={{ width: '100%', height: 'auto' }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: '0',
                width: '100%',
              }}>
                <button className="modal-prev" onClick={prevImage} style={{ fontSize: '2rem', cursor: 'pointer', background: 'transparent', border: 'none', color: 'black' }}>‹</button>
                <button className="modal-next" onClick={nextImage} style={{ fontSize: '2rem', cursor: 'pointer', background: 'transparent', border: 'none', color: 'black' }}>›</button>
              </div>
            </div>
          </div>
        )}
        </div>

      </section>
    </div>
  );
};

export default GallerySection;