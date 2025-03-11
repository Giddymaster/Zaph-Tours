import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get updates and latest news delivered to your inbox.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h4>Quick Access</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Top Destinations</a>
            </li>
            <li>
              <a href="#">Safari Packages</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Destinations</h4>
          <ul>
            <li>
              <a href="#">Mt. Kenya</a>
            </li>
            <li>
              <a href="#">Mt. Ruwenzori</a>
            </li>
            <li>
              <a href="#">Lake Nakuru</a>
            </li>
            <li>
              <a href="#">Tsavo National Park</a>
            </li>
            <li>
              <a href="#">Nairobi National Park</a>
            </li>
            <li>
              <a href="#">Coastal Kenya</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Trip Packages</h4>
          <ul>
            <li>
              <a>Honeymoon Getaway</a>
            </li>
            <li>
              <a>Mountain Hike</a>
            </li>
            <li>
              <a>Diani Beach</a>
            </li>
            <li>
              <a>Wildlife Safaris</a>
            </li>
            <li>
              <a>Luxury vacations</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Details</h4>
          <div className="footer-contacts">
            <div className="foo-contact">
              <Contact
                icon={<FaMapMarkerAlt />}
                para="Zaph Towers, Nairobi, Kenya"
              />
              <Contact icon={<FaPhone />} para="+254 712 345 678" />
              <Contact icon={<FaWhatsapp />} para="+254 712 345 678" />
              <Contact icon={<FaEnvelope />} para="info@zaphtours.com" />
              <Contact icon={<FaFacebook />} para="Zaph Tours" />
              <Contact icon={<FaTwitter />} para="@Zaph_Tours" />
            </div>
            <div className="footer-logo">
              <Logo />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Zaph Tours. Designed by Gideon Mwangi.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

function Contact({ icon, para }) {
  return (
    <div className="contact-item">
      <div className="icon">{icon}</div>
      <p>{para}</p>
    </div>
  );
}
