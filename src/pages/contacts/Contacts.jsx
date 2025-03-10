import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Reach out to us via any of the methods
        below.
      </p>

      <ContactInformation />

      <div className="contact-map">
        <h3>Find Us Here</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.796688685988!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1619467420383!5m2!1sen!2ske"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;

function ContactInformation() {
  return (
    <div className="contact-content">
      <div className="contact-info">
        <Contact icon={<FaMapMarkerAlt />} para="Impex Mall, Nairobi, Kenya" />
        <Contact icon={<FaPhone />} para="+254 712 345 678" />
        <Contact icon={<FaWhatsapp />} para="+254 712 345 678" />
        <Contact icon={<FaEnvelope />} para="info@zaphtours.com" />
        <Contact icon={<FaFacebook />} para="Zaph Tours" />
        <Contact icon={<FaTwitter />} para="@Zaph_Tours" />
      </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

function Contact({ icon, para }) {
  return (
    <div className="contact-item">
      <div className="icon">{icon}</div>
      <p>{para}</p>
    </div>
  );
}
