import "./Trips.css";
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
      price: "$2,500 per couple",
      offer: "10% discount for early bookings",
    },
    {
      id: 2,
      title: "Family Vacation",
      image: TripImg2,
      description:
        "Enjoy fun-filled family trips with kid-friendly activities, guided tours, and adventure parks.",
      price: "$1,800 for a family of 4",
      offer: "Free entry for kids under 5",
    },
    {
      id: 3,
      title: "Adventure Expedition",
      image: TripImg3,
      description:
        "Thrilling adventures including mountain climbing, rafting, and skydiving.",
      price: "$1,200 per person",
      offer: "Includes free safety gear rental",
    },
    {
      id: 4,
      title: "Cultural Discovery",
      image: TripImg4,
      description:
        "Immerse yourself in rich cultures, traditional music, art, and historic sites.",
      price: "$950 per person",
      offer: "Group discounts available",
    },
    {
      id: 5,
      title: "Wildlife Safari",
      image: TripImg5,
      description:
        "See the Big Five and the Great Migration in Africa’s best national parks.",
      price: "$2,200 per person",
      offer: "Includes game drive and guide",
    },
    {
      id: 6,
      title: "Eco-Tours",
      image: TripImg6,
      description:
        "Sustainable travel to nature reserves, conservation projects, and eco-resorts.",
      price: "$1,500 per person",
      offer: "Carbon-neutral travel included",
    },
    {
      id: 7,
      title: "Luxury Vacations",
      image: TripImg7,
      description:
        "Stay in world-class resorts with private pools, yacht cruises, and fine dining.",
      price: "$5,000 per person",
      offer: "Personalized concierge service",
    },
    {
      id: 8,
      title: "Beach Holidays",
      image: TripImg8,
      description:
        "Relax on pristine beaches with water sports, sunset cruises, and beachfront villas.",
      price: "$2,000 per person",
      offer: "Includes free snorkeling gear",
    },
    {
      id: 9,
      title: "Wellness Retreats",
      image: TripImg9,
      description:
        "Rejuvenate with spa treatments, yoga, and meditation in scenic locations.",
      price: "$1,700 per person",
      offer: "Includes free wellness consultation",
    },
    {
      id: 10,
      title: "Culinary Tours",
      image: TripImg10,
      description:
        "Explore the world’s best cuisines with expert-led food tours, wine tastings, and cooking classes.",
      price: "$2,200 per person",
      offer: "Includes a Michelin-star dining experience",
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
              price={trip.price}
              offer={trip.offer}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Trip;

function TripCard({ title, image, description, price, offer }) {
  return (
    <div className="trip-card">
      <img src={image} alt={title} className="trip-img" />
      <div className="trip-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="trip-price">
          <strong>Price:</strong> {price}
        </p>
        <p className="trip-offer">
          <strong>Offer:</strong> {offer}
        </p>
      </div>
    </div>
  );
}
