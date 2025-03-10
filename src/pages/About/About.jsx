import "./About.css";
import AboutImg from "./../../assets/lake-nakuru-img.jpg"

function About() {
  return (
    <div className="about-container">
      <div className="about-us">
      <h3>About Us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur commodi architecto! Atque doloribus tempore autem, est cupiditate magnam molestias, porro voluptatem excepturi necessitatibus placeat blanditiis vero dicta nesciunt. Consequuntur.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non autem provident cumque? Aliquid ex deleniti blanditiis eveniet suscipit reprehenderit cumque neque tempora dolore, ad, laborum accusantium velit, eum magni sunt?
      </p>
      </div>
      <img src={AboutImg} alt="About Zaph Tours" className="abt-img" />
    </div>
  );
}

export default About;
