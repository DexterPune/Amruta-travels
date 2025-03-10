import React from 'react';

const teamMembers = [
  {
    imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-03.jpg',
    name: 'Félix Lengyel',
    car: 'Tempo Traveller',
    link: 'book-taxi',
    delay: '200ms'
  },
  {
    imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-01.jpg',
    name: 'Henry Nathan',
    car: 'Urbania',
    link: 'book-taxi',
    delay: '300ms'
  },
  {
    imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-07.jpg',
    name: 'Brandon Larned',
    car: 'Mini Bus',
    link: 'book-taxi',
    delay: '400ms'
  },
  {
    imgSrc: '/img/Img for Our Fleet/Img for Our Fleet-08.jpg',
    name: 'Sasha Hostyn',
    car: 'Ac Bus',
    link: 'book-taxi',
    delay: '500ms'
  }
];

const TeamSection = () => {
  return (
    <section className="team-section padding">
      <div className="container">
        <div className="section-heading text-center mb-40 wow fade-in-bottom" data-wow-delay="200ms">
          <h4><span></span>Lets Go With Us!</h4>
          <h2>Vehicles We are offering For Booking</h2>
          <p>We successfully cope with tasks of varying complexity, provide long-term <br />guarantees and regularly master new technologies.</p>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6 sm-padding wow fade-in-bottom px-0" key={index} data-wow-delay={member.delay}>
              <div className="team-item">
                <div className="team-thumb">
                  <img src={member.imgSrc} alt={member.name} />
                </div>
                <div className="team-content">
                  <h4>{member.car}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
