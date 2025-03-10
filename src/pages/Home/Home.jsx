import "./Home.css";
import VideoSrc from "./../../assets/home-vid.mp4";

function Home() {
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
          Zaph Tours,{" "}
          <span className="text-yellow">Best Safaris and Adventures</span>
        </h3>
        <p>
          Discover the World <br />
          Enjoy authentic, responsible travel planned by experts
        </p>
        Nairobi National Park is home to diverse wildlife, including buffalo, giraffe, lions, leopards, baboons, zebras, wildebeest, and cheetahs,
      </div>
    </div>
  );
}

export default Home;
