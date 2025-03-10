// ContactButtons.js
import React from 'react';

const ContactButtons = () => {
  return (
    <div className="contact-buttons" style={{ position: 'fixed', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 20px', zIndex: 1000 }}>
      
      <a 
        href="tel:+918421333435" 
        className="call-button" 
        style={{
          backgroundColor: '#FF7700', // Bootstrap primary color
          borderRadius: '50%',
          padding: '15px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FF7700')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FF7700')}
      >
        <img src="./img/Phone_icon.png" alt="Call" style={{ width: '30px', height: '30px' }} />
      </a>

      <a 
        href="https://wa.me/+918421333435?text=Hello%20Amruta%20Travels%20Team,%20I%20want%20to%20Book%20Mini%20Bus%20/%2026%2032%2035%2040%2045%2050%20Seater%20Bus%20/%20Volvo%20Bus%20On%20Rent%20/%20Bus%20Service%20With%20Amruta%20Travels.%20Request%20you%20Please%20Send%20More%20Details%20or%20Call%20Me.%20Thank%20you!"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366', // WhatsApp color
          borderRadius: '50%',
          padding: '15px', // Space around icon
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1DAE3E')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
      >
        <img src="./img/WhatsApp_icon.png" alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
      </a>
    </div>
  );
};

export default ContactButtons;
