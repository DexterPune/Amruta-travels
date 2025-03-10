// CtaSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="cta-section-2 padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="cta-content">
              <h4 className=''>Amruta Travel Services!</h4>
              <h2>Feel your journey with Amruta Travel!</h2>
              <Link to="/book-taxi" className="default-btn orage">Book a Bus</Link>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="check-list">
              <li><span className="arrow-icon">→</span> Easy payment systems.</li>
              <li><span className="arrow-icon">→</span> Make safety a top priority.</li>
              <li><span className="arrow-icon">→</span> First and quick pickups.</li>
              <li><span className="arrow-icon">→</span> Access Ridek globally.</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="cta-men"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
