import {FaPhone, FaFacebook, FaWhatsapp, FaSquareXTwitter,} from "react-icons/fa6";
import "./Hero.css"
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

function HeaderContacts() {
  return (
    <div className="header-socials">
      <HeaderSocial text={<>Zaph Tours, <i>Best Safaris and Adventures</i></>} />
      <HeaderSocial icon={<FaFacebook />} />
      <HeaderSocial icon={<FaSquareXTwitter />} />
      <HeaderSocial icon={<FaWhatsapp />} />
      <HeaderSocial icon={<FaPhone />} text="0712345678" />
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <Logo />
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
