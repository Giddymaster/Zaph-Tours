import "./Destinations.css";
import Button from "../../components/Button/Button";
import DestinationImg1 from "./../../assets/coast.jpg";
import DestinationImg2 from "./../../assets/tsavo-national-park.jpg";
import DestinationImg3 from "./../../assets/mt-kenya.jpg";
import DestinationImg4 from "./../../assets/lake-nakuru-img.jpg";
import DestinationImg5 from "./../../assets/Nairobi-natonal-park.jpg";
import DestinationImg6 from "./../../assets/mt-rwenzori.jpeg";

function Destinations() {
  const destinations = [
    {
      index: 1,
      image: DestinationImg1,
      description: "Coastal Region",
      title: "Diani Beach, Kwale County",
      excerpt:
        "A breathtaking white sandy beach, crystal-clear waters, and amazing resorts.",
    },
    {
      index: 2,
      image: DestinationImg2,
      description: "Wildlife Safari",
      title: "Tsavo National Reserve",
      excerpt:
        "Experience the Great Migration and spot the Big Five in this world-renowned park.",
    },
    {
      index: 3,
      image: DestinationImg3,
      description: "Mountain Adventure",
      title: "Mount Kenya",
      excerpt:
        "Perfect for hiking, with scenic landscapes and incredible biodiversity.",
    },
    {
      index: 4,
      image: DestinationImg4,
      description: "Lake Nakuru",
      title: "Lake Nakuru",
      excerpt:
        "Lake Nakuru National Park is a ball of beautiful sights waiting to be explored. A wide ecological diversity, varied wildlife habitats, plant and animal species",
    },
    {
      index: 5,
      image: DestinationImg5,
      description: "Nairobi National Park",
      title: "Nairobi National Park",
      excerpt:
        "Nairobi National Park is home to diverse wildlife, including buffalo, giraffe, lions, leopards, baboons, zebras, wildebeest, and cheetahs",
    },
    {
      index: 6,
      image: DestinationImg6,
      description: "Rwenzori Ranges",
      title: "Mount Rwenzori",
      excerpt:
        "The Rwenzori are a range of mountains in eastern equatorial Africa, located on the border between Uganda and the Democratic Republic of the Congo",
    },
  ];

  return (
    <div className="destinations-container">
      <Button />
      <h1 className="destinations-title">Top Travel Destinations</h1>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <Destination
            key={index}
            image={destination.image}
            description={destination.description}
            title={destination.title}
            excerpt={destination.excerpt}
          />
        ))}
      </div>
    </div>
  );
}

export default Destinations;

function Destination({ image, description, title, excerpt }) {
  return (
    <div className="destination-card">
      <img src={image} alt={description} className="destination-img" />
      <div className="destination-info">
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </div>
  );
}
