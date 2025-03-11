import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import VideoSrc from "./../../assets/home-vid.mp4";
import Footer from "../../components/Footer/Footer";
import Blogs from "../Blogs/Blogs";
import FeaturedDestinations from "../../components/FeaturedDestinations/FeaturedDestinations";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <HomeLanding />
      <About />
      <FeaturedDestinations />
      <Blogs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;

function HomeLanding() {
  return (
    <div className="home-landing">
      <video
        className="home-vid"
        src={VideoSrc}
        controls="controls"
        autoPlay="true"
        loop
        muted
      ></video>
      <div className="welcome-msg">
        <h3>
          Zaph Tours,
          <span className="text-yellow">Best Safaris and Adventures</span>
        </h3>
        <p>
          Discover the World <br />
          Enjoy authentic, responsible travel planned by experts
        </p>
      </div>
    </div>
  );
}
