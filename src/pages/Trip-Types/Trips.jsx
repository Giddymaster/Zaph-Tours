import { Link } from "react-router-dom";
import "./Trips.css";
import Contacts from "../contacts/Contacts";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import TripImg1 from "./../../assets/honeymoon.jpg";
import TripImg2 from "./../../assets/family.jpg";
import TripImg3 from "./../../assets/adventure.jpg";
import TripImg4 from "./../../assets/culture.jpg";
import TripImg5 from "./../../assets/tsavo-national-park.jpg";
import TripImg6 from "../../assets/eco-tour.jpg";
import TripImg7 from "../../assets/luxury.jpg";
import TripImg8 from "../../assets/beach.jpg";
import TripImg9 from "../../assets/wellness.jpg";
import TripImg10 from "../../assets/culinary.jpg";

function Trip() {
  const trips = [
    {
      id: 1,
      title: "Honeymoon Getaway",
      image: TripImg1,
      description:
        "Experience a romantic getaway with breathtaking views, luxury resorts, and personalized services.",
      duration: "7 Days | 6 Nights",
      priceGroup: "$15000 per group of 5",
      priceIndividual: "$3500 per person",
      link: "/contacts",
    },
    {
      id: 2,
      title: "Family Vacation",
      image: TripImg2,
      description:
        "Enjoy fun-filled family trips with kid-friendly activities, guided tours, and adventure parks.",
      duration: "4 Days | 3 Nights",
      priceGroup: "$2900 per group of 5",
      priceIndividual: "$700 per person",
      link: "/contacts",
    },
    {
      id: 3,
      title: "Adventure Expedition",
      image: TripImg3,
      description:
        "Thrilling adventures including mountain climbing, rafting, and skydiving.",
      duration: "6 Days | 5 Nights",
      priceGroup: "$7500 per group of 5",
      priceIndividual: "$1800 per person",
      link: "/contacts",
    },
    {
      id: 4,
      title: "Cultural Discovery",
      image: TripImg4,
      description:
        "Immerse yourself in rich cultures, traditional music, art, and historic sites.",
      duration: "3 Days | 2 Nights",
      priceGroup: "$7500 per group of 5",
      priceIndividual: "$2000 per person",
      link: "/contacts",
    },
    {
      id: 5,
      title: "Wildlife Safari",
      image: TripImg5,
      description:
        "See the Big Five and the Great Migration in Africa’s best national parks.",
      duration: "5 Days | 4 Nights",
      priceGroup: "$9500 per group of 5",
      priceIndividual: "$2190 per person",
      link: "/contacts",
    },
    {
      id: 6,
      title: "Eco-Tours",
      image: TripImg6,
      description:
        "Sustainable travel to nature reserves, conservation projects, and eco-resorts.",
      duration: "4 Days | 3 Nights",
      priceGroup: "$6750 per group of 5",
      priceIndividual: "$1300 per person",
      link: "/contacts",
    },
    {
      id: 7,
      title: "Luxury Vacations",
      image: TripImg7,
      description:
        "Stay in world-class resorts with private pools, yacht cruises, and fine dining.",
      duration: "6 Days | 5 Nights",
      priceGroup: "$10750 per group of 5",
      priceIndividual: "$2500 per person",
      link: "/contacts",
    },
    {
      id: 8,
      title: "Beach Holidays",
      image: TripImg8,
      description:
        "Relax on pristine beaches with water sports, sunset cruises, and beachfront villas.",
      duration: "4 Days | 3 Nights",
      priceGroup: "$750 per group of 5",
      priceIndividual: "$180 per person",
      link: "/contacts",
    },
    {
      id: 9,
      title: "Wellness Retreats",
      image: TripImg9,
      description:
        "Rejuvenate with spa treatments, yoga, and meditation in scenic locations.",
      duration: "4 Days | 3 Nights",
      priceGroup: "$750 per group of 5",
      priceIndividual: "$180 per person",
      link: "/contacts",
    },
    {
      id: 10,
      title: "Culinary Tours",
      image: TripImg10,
      description:
        "Explore the world’s best cuisines with expert-led food tours, wine tastings, and cooking classes.",
      duration: "4 Days | 3 Nights",
      priceGroup: "$750 per group of 5",
      priceIndividual: "$180 per person",
      link: "/contacts",
    },
  ];

  return (
    <>
      <Hero />
      <div className="trip-container">
        <h1 className="trip-title">Explore Our Travel Packages</h1>
        <div className="trip-grid">
          {trips.map((trip) => (
            <TripCard
              key={trip.id}
              title={trip.title}
              image={trip.image}
              description={trip.description}
              duration={trip.duration}
              priceGroup={trip.priceGroup}
              priceIndividual={trip.priceIndividual}
              offer={trip.offer}
              link={trip.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Trip;

function TripCard({
  title,
  image,
  description,
  priceGroup,
  priceIndividual,
  duration,
  offer,
  link,
}) {
  return (
    <div className="trip-card">
      <img src={image} alt={title} className="trip-img" />
      <div className="trip-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="trip-duration">{duration}</p>
        <p className="trip-price">
          <strong>Group:</strong> {priceGroup} | <strong>Solo:</strong>{" "}
          {priceIndividual}
        </p>
        <Link to="/contacts" className="trip-link">
          Book Now
        </Link>
      </div>
    </div>
  );
}
