import React from "react";
import "./Footer.css";

function Footer(){
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get updates and latest news delivered to your inbox.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Footer Columns */}
      <div className="footer-columns">
        {/* Contact Details */}
        <div className="footer-column">
          <h4>Contact Details</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p>
          <p>Address: 123 Street, City</p>
        </div>


        <div className="footer-column">
          <h4>Quick Access</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Top Destinations</a></li>
            <li><a href="#">Safari Packages</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Destinations</h4>
          <ul>
            <li><a href="#">Mt. Kenya</a></li>
            <li><a href="#">Mt. Ruwenzori</a></li>
            <li><a href="#">Lake Nakuru</a></li>
            <li><a href="#">Tsavo National Park</a></li>
            <li><a href="#">Nairobi  National Park</a></li>
            <li><a href="#">Coastal Kenya</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zaph Tours. Designed by Gideon Mwangi.</p>
      </div>
    </footer>
  );
};

export default Footer;
