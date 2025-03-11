import React from "react";
import { Link } from "react-router-dom";
import "./Testimonial.css"; 
import TestimonyIcon1 from "./../../assets/TestimonyIcon1.jpg";
import TestimonyIcon2 from "./../../assets/TestimonyIcon2.jpg";
import TestimonyIcon3 from "./../../assets/TestimonyIcon3.jpg";
import TestimonyIcon4 from "./../../assets/TestimonyIcon4.jpg";

function Testimonials() {
  const testimonies = [
    {
      id: 1,
      icon: TestimonyIcon1,
      title: "Great Trip to Coastal Kenya",
      description: "An unforgettable experience at the beach!",
      date: "04 March 2025",
      rating: "⭐⭐⭐⭐⭐",
      link: "#"
    },
    {
      id: 2,
      icon: TestimonyIcon2,
      title: "Nairobi National Park",
      description: "Seeing wildlife near the city was amazing!",
      date: "22 Jan 2025",
      rating: "⭐⭐⭐⭐",
      link: "#"
    },
    {
      id: 3,
      icon: TestimonyIcon3,
      title: "Hiking Mt Kenya",
      description: "A breathtaking adventure to the peak!",
      date: "27 Dec 2024",
      rating: "⭐⭐⭐⭐⭐",
      link: "#"
    },
    {
      id: 4,
      icon: TestimonyIcon4,
      title: "Tsavo National Park Safari",
      description: "A thrilling and scenic experience!",
      date: "30 Dec 2024",
      rating: "⭐⭐⭐⭐⭐",
      link: "#"
    },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">What travelers are saying about our trips</h1>
      <div className="testimonials-grid">
        {testimonies.map(({ id, icon, title, description, date, rating, link }) => (
          <Testimony
            key={id}
            icon={icon}
            title={title}
            description={description}
            date={date}
            rating={rating}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

function Testimony({ icon, title, description, date, rating, link }) {
  return (
    <div className="testimony-card">
      <div className="testimony-header">
        <img src={icon} alt={title} className="testimony-img" />
        <h3 className="testimony-title">{title}</h3>
      </div>
      <div className="testimony-info">
        <p className="testimony-description">{description}</p>
        <p className="testimony-date">{date}</p>
        <p className="testimony-rating">{rating}</p>
        {/* <a href={link} className="testimony-link">Read More</a> */}
        <Link to="/blogs" className="testimony-link">
        Read More
        </Link>
      </div>
    </div>
  );
}
