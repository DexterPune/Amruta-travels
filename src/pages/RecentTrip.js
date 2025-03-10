import React from 'react';
import './RecentTrip.css'; // Assume you have some CSS for styling

const RecentTrip = () => {
  const tripDetails = {
    destination: "Bali, Indonesia",
    dates: "July 15-22, 2023",
    duration: "7 days",
    companions: "Best friend",
    highlights: [
      { title: "Sunset at Uluwatu", description: "Watching the sun dip below the ocean was magical." },
      { title: "Culinary Class", description: "Learned to cook traditional Balinese dishes." },
      { title: "Hiking Mount Batur", description: "An early morning hike with breathtaking views." }
    ],
    itinerary: [
      "Day 1: Arrival and local exploration",
      "Day 2: Visit Uluwatu Temple",
      "Day 3: Cooking class",
      "Day 4: Hiking Mount Batur",
      "Day 5: Beach day at Seminyak",
      "Day 6: Explore Ubud markets",
      "Day 7: Departure"
    ],
    tips: [
      "Best time to visit is during the dry season (April-October).",
      "Try the local street food for an authentic experience.",
      "Pack light; you'll be doing a lot of moving around!"
    ],
    images: [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg" // Replace with actual image paths
    ]
  };

  return (
    <section className="recent-trip">
      <h2>Our Recent Adventure: Exploring {tripDetails.destination}</h2>

      <div className="image-carousel">
        {tripDetails.images.map((image, index) => (
          <img key={index} src={image} alt={`Trip Image ${index + 1}`} />
        ))}
      </div>

      <div className="trip-summary">
        <p><strong>Dates of Travel:</strong> {tripDetails.dates}</p>
        <p><strong>Trip Duration:</strong> {tripDetails.duration}</p>
        <p><strong>Travel Companions:</strong> {tripDetails.companions}</p>
      </div>

      <h3>Highlights of the Trip</h3>
      <ul>
        {tripDetails.highlights.map((highlight, index) => (
          <li key={index}>
            <strong>{highlight.title}:</strong> {highlight.description}
          </li>
        ))}
      </ul>

      <h3>Itinerary Overview</h3>
      <ul>
        {tripDetails.itinerary.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>

      <h3>Travel Tips</h3>
      <ul>
        {tripDetails.tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

      <button className="cta-button">Read Our Full Guide to {tripDetails.destination}</button>
    </section>
  );
};

export default RecentTrip;
