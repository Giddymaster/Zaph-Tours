import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Destinations from "../../components/featured-destinations/Destinations";
import Button from "./../../components/Button/Button";
import VideoSrc from "./../../assets/home-vid.mp4";

function Home() {
  return (
    <div>
      <Hero />
      <HomeLanding />
      <About />
      <Destinations />
    </div>

  )
}

export default Home;

function HomeLanding(){
  return(
    <div className="home-landing">
      <Hero />
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
          Zaph Tours,<span className="text-yellow">Best Safaris and Adventures</span>
        </h3>
        <p>
          Discover the World <br />
          Enjoy authentic, responsible travel planned by experts
        </p>
        <Button />
      </div>
    </div>
  );
}