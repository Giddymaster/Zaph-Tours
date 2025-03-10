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
      id: 1,
      image: DestinationImg1,
      description: "Coastal Region",
      title: "Diani Beach, Kwale County",
      excerpt:
        "A breathtaking white sandy beach, crystal-clear waters, and amazing resorts.",
      priceGroup: "$500 per group",
      priceIndividual: "$120 per person",
      link: "#",
    },
    {
      id: 2,
      image: DestinationImg2,
      description: "Wildlife Safari",
      title: "Tsavo National Reserve",
      excerpt:
        "Experience the Great Migration and spot the Big Five in this world-renowned park.",
      priceGroup: "$900 per group",
      priceIndividual: "$200 per person",
      link: "#",
    },
    {
      id: 3,
      image: DestinationImg3,
      description: "Mountain Adventure",
      title: "Mount Kenya",
      excerpt:
        "Perfect for hiking, with scenic landscapes and incredible biodiversity.",
      priceGroup: "$750 per group",
      priceIndividual: "$180 per person",
      link: "#",
    },
    {
      id: 4,
      image: DestinationImg4,
      description: "Lake Nakuru",
      title: "Lake Nakuru",
      excerpt:
        "Lake Nakuru National Park is a ball of beautiful sights waiting to be explored.",
      priceGroup: "$600 per group",
      priceIndividual: "$150 per person",
      link: "#",
    },
    {
      id: 5,
      image: DestinationImg5,
      description: "Nairobi National Park",
      title: "Nairobi National Park",
      excerpt:
        "Home to diverse wildlife, including buffalo, giraffe, lions, and cheetahs.",
      priceGroup: "$400 per group",
      priceIndividual: "$100 per person",
      link: "#",
    },
    {
      id: 6,
      image: DestinationImg6,
      description: "Rwenzori Ranges",
      title: "Mount Rwenzori",
      excerpt:
        "The Rwenzori are a range of mountains in eastern equatorial Africa.",
      priceGroup: "$800 per group",
      priceIndividual: "$190 per person",
      link: "#",
    },
  ];

  return (
    <div className="destinations-container">
      <Button />
      <h1 className="destinations-title">Top Travel Destinations</h1>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            image={destination.image}
            description={destination.description}
            title={destination.title}
            excerpt={destination.excerpt}
            priceGroup={destination.priceGroup}
            priceIndividual={destination.priceIndividual}
            link={destination.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Destinations;

function Destination({ image, description, title, excerpt, priceGroup, priceIndividual, link }) {
  return (
    <div className="destination-card">
      <img src={image} alt={description} className="destination-img" />
      <div className="destination-info">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <p className="destination-price"><strong>Group:</strong> {priceGroup} | <strong>Solo:</strong> {priceIndividual}</p>
        <a href={link} className="destination-link">Learn More</a>
      </div>
    </div>
  );
}
