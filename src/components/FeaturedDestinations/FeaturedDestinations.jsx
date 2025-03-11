import Button from "../../components/Button/Button";
import DestinationImg1 from "./../../assets/coast.jpg";
import DestinationImg2 from "./../../assets/tsavo-national-park.jpg";
import DestinationImg3 from "./../../assets/mt-kenya.jpg";
import DestinationImg4 from "./../../assets/lake-nakuru-img.jpg";
import DestinationImg5 from "./../../assets/Nairobi-natonal-park.jpg";
import DestinationImg6 from "./../../assets/mt-rwenzori.jpeg";

function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      image: DestinationImg1,
      description: "Coastal Region",
      title: "Diani Beach, Kwale County",
      excerpt:
        "A breathtaking white sandy beach, crystal-clear waters, and amazing resorts.",
      duration: "5 Days | 4 Nights",
      priceGroup: "$1500 per group of 5",
      priceIndividual: "$320 per person",
      link: "https://www.dianibeachmombasa.com/",
    },
    {
      id: 2,
      image: DestinationImg2,
      description: "Wildlife Safari",
      title: "Tsavo National Reserve",
      excerpt:
        "Experience the Great Migration and spot the Big Five in this world-renowned park.",
      duration: "4 Days | 3 Nights",
      priceGroup: "$1900 per group of 5",
      priceIndividual: "$500 per person",
      link: "https://www.tsavopark.com/",
    },
    {
      id: 3,
      image: DestinationImg3,
      description: "Mountain Adventure",
      title: "Mount Kenya",
      excerpt:
        "Perfect for hiking, with scenic landscapes and incredible biodiversity.",
      duration: "4 Days | 3 Nights",
      priceGroup: "$750 per group of 5",
      priceIndividual: "$180 per person",
      link: "https://g.co/kgs/nZwu1bV",
    },
    {
      id: 4,
      image: DestinationImg4,
      description: "Lake Nakuru",
      title: "Lake Nakuru",
      excerpt:
        "Lake Nakuru National Park is a ball of beautiful sights waiting to be explored.",
      duration: "3 Days | 2 Nights",
      priceGroup: "$600 per group of 5",
      priceIndividual: "$150 per person",
      link: "https://g.co/kgs/JTP3LLn",
    },
    {
      id: 5,
      image: DestinationImg5,
      description: "Nairobi National Park",
      title: "Nairobi National Park",
      excerpt:
        "Home to diverse wildlife, including buffalo, giraffe, lions, and cheetahs.",
      duration: "1 Days | 1 Nights",
      priceGroup: "$1400 per group of 5",
      priceIndividual: "$150 per person",
      link: "https://g.co/kgs/btJA4j3",
    },
    {
      id: 6,
      image: DestinationImg6,
      description: "Rwenzori Ranges",
      title: "Mount Rwenzori",
      excerpt:
        "The Rwenzori are a range of mountains in eastern equatorial Africa.",
      duration: "2 Days | 1 Nights",
      priceGroup: "$1800 per group of 5",
      priceIndividual: "$390 per person",
      link: "https://g.co/kgs/o8wuybf",
    },
  ];
  return (
    <div className="destinations-container">
      <h1 className="destinations-title">Top Travel Destinations</h1>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            image={destination.image}
            description={destination.description}
            title={destination.title}
            excerpt={destination.excerpt}
            duration={destination.duration}
            priceGroup={destination.priceGroup}
            priceIndividual={destination.priceIndividual}
            link={destination.link}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedDestinations;

function Destination({
  image,
  description,
  title,
  excerpt,
  duration,
  priceGroup,
  priceIndividual,
  link,
}) {
  return (
    <div className="destination-card">
      <img src={image} alt={description} className="destination-img" />
      <div className="destination-info">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <p className="destination-duration">{duration}</p>
        <p className="destination-price">
          <strong>Group:</strong> {priceGroup} | <strong>Solo:</strong>{" "}
          {priceIndividual}
        </p>
        <a href={link} className="destination-link">
          View Tour
        </a>
      </div>
    </div>
  );
}
