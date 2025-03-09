import {
  FaPhone,
  FaFacebook,
  FaWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import "./Hero.css";
import Logo from "../Logo/Logo";

export function Hero() {
  return (
    <div>
      <header className="header">
        <HeaderContacts />
        <HeaderNavigation />
      </header>
    </div>
  );
}

export default Hero;

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <Logo />
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Featured Destinations</a>
          </li>
          <li>
            <a href="">Trip Types</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Destinations, Safari Package"
        ></input>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}

function HeaderContacts() {
  return (
    <div className="header-socials">
      <HeaderSocial
        text={
          <>
            Zaph Tours, <i>Best Safaris and Adventures</i>
          </>
        }
      />
      <HeaderSocial icon={<FaFacebook />} />
      <HeaderSocial icon={<FaSquareXTwitter />} />
      <HeaderSocial icon={<FaWhatsapp />} />
      <HeaderSocial icon={<FaPhone />} text="0712345678" />
    </div>
  );
}

function HeaderSocial({ icon, text }) {
  return (
    <div className="socials">
      {icon}
      <p>{text}</p>
    </div>
  );
}
