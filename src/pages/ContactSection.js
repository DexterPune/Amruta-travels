import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://html.dynamiclayers.net/dl/ridek/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            setFormStatus(result.message || 'Your message has been sent!');
        } catch (error) {
            setFormStatus('There was an error sending your message.');
        }
    };

    return (
        <section className="contact-section bd-bottom padding">
            <div className="map">
            </div>
            <div className="container">
                <div className="row">
                
                            <div className="contact-title">
                                <h2 className='Colo'>Have Any <span>Questions?</span></h2>
                                <p>Get in touch to discuss your employee wellbeing needs today. </p>
                            </div>

                                <div className='col-12 col-md-4 contact-details'>
                                <li><i className="fas fa-phone text-white"></i>
                               <div>
                                <a href="tel:+918421333435">  +918421333435</a><br/> 
                               <a href="tel:+917875774499">  +917875774499</a> <br/>
                               <a href="tel:+917620411277">  +917620411277</a> <br/>
                               <a href="tel:+919284718314">  +919284718314</a> <br/>
                               </div>

                                </li>

                                </div>
                            
                            <div className='col-12 col-md-4 contact-details'>
                            <li>
  <i className="fas fa-envelope text-white"></i>
  <a href="mailto:booking@amrutatravel.com" >booking@amrutatravel.com</a> <br />
</li>
                            </div>
                            

        <div className='col-12 col-md-4 contact-details'>
        <li><i className="fas fa-map-marker-alt text-white"></i>
                Office No.- 2, Ground Floor,<br/>
                Wings H-(Puram), Prayeja City,<br/>
                Phase-2, Near Prayeja City,<br/>
                Vadgaon Budruk, Pune,<br/>
                 Maharashtra - 411041<br /> </li>
        </div>
                               
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
