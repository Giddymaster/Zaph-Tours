import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div>
      <Link to="/contacts">
        <button className="booking-btn">Book Now!</button>
      </Link>
    </div>
  );
}

export default Button;
