import React from 'react';
import { Link } from 'react-router-dom'; // If you are using react-router for navigation

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for does not exist. Let's get you back on track!
      </p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f7f8', // A calm, light blue color similar to the sky or ocean.
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif', // Clean and readable font
    backgroundImage: 'url("https://example.com/path-to-travel-image.jpg")', // A background image related to travel.
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1e3d58', // Dark, calming blue
    fontWeight: 'bold',
  },
  message: {
    fontSize: '1.2rem',
    color: '#3b4d63', 
    margin: '20px 0',
    lineHeight: '1.6',
  },
  link: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#00aaff', 
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px 20px',
    border: '2px solid #00aaff', 
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#00aaff',
    color: '#fff', 
  },
};

export default NotFound;
