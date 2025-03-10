import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section padding">
      <div className="cta-men"></div>
      <div className="container">
        <div className="cta-content">
          <h2>
            Call Us Now <span>Book Your Taxi</span> <br /> For Your Next Ride!
          </h2>
          <p>
            We successfully cope with tasks of varying complexity,<br />
            guarantees and regularly master new technologies.
          </p>
          <div className="cta-call">
            <i className="las la-phone-volume"></i>
            <p>
              <span>Call For Taxi</span>
              <a href="tel:5267214392">5267-214-392</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
