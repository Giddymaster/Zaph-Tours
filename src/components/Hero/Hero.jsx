import {
  FaPhone,
  FaFacebook,
  FaWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import "./Hero.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/trip-types", label: "trips" },
  { to: "/destinations", label: "destinations" },
  { to: "/contacts", label: "contacts" },
  { to: "/blogs", label: "blogs" },
];

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
        <ol className="nav-list">
          {navLinks.map((navlink) => (
            <NavLink
              key={navlink.label}
              to={navlink.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {navlink.label}
            </NavLink>
          ))}
        </ol>
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
