import React from "react";
import "./Trips.css";

const tripPackages = [
  {
    title: "Honeymoon Getaways",
    image: "honeymoon.jpg",
    description: "Romantic escapes for newlyweds and couples seeking magical moments.",
    price: "$1500 per couple",
  },
  {
    title: "Family Vacations",
    image: "family.jpg",
    description: "Fun-filled adventures for the whole family, with kid-friendly activities.",
    price: "$1200 per family",
  },
  {
    title: "Wildlife Safaris",
    image: "safari.jpg",
    description: "Experience Africa's stunning wildlife in breathtaking landscapes.",
    price: "$1800 per person",
  },
  {
    title: "Luxury Vacations",
    image: "luxury.jpg",
    description: "Indulge in world-class resorts and 5-star experiences.",
    price: "$5000 per person",
  },
];

function Trips() {
  return (
    <div className="trip-types-container">
      <header className="hero">
        <h1>Explore Our Travel Packages</h1>
        <p>Choose from a variety of curated travel experiences for your perfect getaway.</p>
      </header>

      <section className="trip-grid">
        {tripPackages.map((trip, index) => (
          <div key={index} className="trip-card">
            <img src={trip.image} alt={trip.title} className="trip-image" />
            <h2>{trip.title}</h2>
            <p>{trip.description}</p>
            <p className="trip-price">Starting at {trip.price}</p>
            <button className="trip-btn">View Package</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Trips;