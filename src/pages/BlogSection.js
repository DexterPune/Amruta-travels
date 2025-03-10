import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAnalytics from './GoogleAnalytics';

const blogPosts = [
  {
    imgSrc: '/img/rajashtan.jpg',
    title: 'Rajasthan Trip',
    excerpt: 'Rajasthan is a land steeped in history, known for its stunning architecture, rich culture, and enchanting landscapes. From the vibrant markets of Jaipur to the serene lakes of Udaipur, every corner offers a glimpse into the royal heritage and diverse traditions of India.',
    link: 'service'
  },
  {
    imgSrc: '/img/ujjaimn.jpg',
    title: 'Ujjain Trip',
    excerpt: 'Ujjain, one of the seven sacred cities in India, is renowned for its historical significance and religious fervor. It’s home to the Mahakaleshwar Temple, one of the twelve Jyotirlingas, and is a vibrant hub for spiritual seekers and tourists alike.',
    link: 'service'
  },
  {
    imgSrc: '/img/adventure-img.jpg',
    title: 'Our Adventure',
    excerpt: 'Adventure travel often involves activities that push you out of your comfort zone, from hiking rugged mountains to white-water rafting or zip-lining through forests. It’s about embracing nature and discovering new thrills.',
    link: 'service'
  }
];

const BlogSection = () => {


  
  return (
  <div>
<GoogleAnalytics/>
<section className="blog-section bg-grey padding">
      <div className="container px-0">
        <div className="section-heading text-center mb-40 wow fade-in-bottom" data-wow-delay="200ms">
          
          <h2>Recent Trip</h2>
          <p>We successfully cope with tasks of varying complexity, provide long-term <br />guarantees and regularly master new technologies.</p>
        </div>
        <div className="row grid-post  ">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4 col-md-6 padding-15" key={index}>
              <div className="post-card">
                <div className="post-thumb">
                  <img src={post.imgSrc} alt="post" />
               
                </div>
                <div className="post-content-wrap">
                  <ul className="post-meta">
                 
                    <li><i className="las la-user"></i>{post.author}</li>
                  </ul>
                  <div className="post-content">
                    <h3>
                      <a href={post.link} className="hover">{post.title}</a>
                    </h3>
                    <p>{post.excerpt}</p>
                    <Link to={post.link} className="read-more">Read More</Link>
                  </div>
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

export default BlogSection;
