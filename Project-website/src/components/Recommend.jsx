import React, { useState } from "react";
import "./Recommend.css";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import { Link } from "react-router-dom";

export default function Recommend() {
  const data = [
    {
      id: 1,
      image: Destination1,
      title: "Marina Bay Sands",
      subTitle: "Located in Singapore, Marina Bay Sands is an ",
      cost: "Modern",
      duration: "Approx 2-night trip",
      package: "Mixed",
    },
    {
      id: 2,
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "Tropical",
      duration: "Approx 2-night trip",
      package: "Tropical",
    },
    {
      id: 3,
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "Tourist",
      duration: "Approx 2-night trip",
      package: "Tourist",
    },
    {
      id: 4,
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "Mountains",
      duration: "Approx 1-night trip",
      package: "Mountain",
    },
    {
      id: 5,
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "Coastal",
      duration: "Approx 2-night 2-day trip",
      package: "Mixed",
    },
    {
      id: 6,
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Tourist",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Tourist",
    },
    {
      id: 7,
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Desert",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Desert",
    },
    {
      id: 8,
      image: Destination3,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Haunted",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Haunted",
    },
    {
      id: 9,
      image: Destination3,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Tropical",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Tropical",
    },
    {
      id: 10,
      image: Destination4,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Mountain",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Mountain",
    },
    {
      id: 11,
      image: Destination4,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Desert",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Desert",
    },
    {
      id: 12,
      image: Destination4,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Haunted",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Haunted",
    },
    {
      id: 13,
      image: Destination3,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Mixed",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Mixed",
    },
    {
      id: 14,
      image: Destination2,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Tropical",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Tropical",
    },
    {
      id: 15,
      image: Destination2,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Mountain",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Mountain",
    },
    {
      id: 16,
      image: Destination2,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Desert",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Desert",
    },
    {
      id: 17,
      image: Destination2,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Haunted",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Haunted",
    },
    {
      id: 18,
      image: Destination2,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "Tourist",
      duration: "Approx 3-night 2-day trip",
      link: "/London",
      package: "Tourist",
    },
  ];

  const packages = [
    "All",
    "Mixed",
    "Tropical",
    "Mountain",
    "Desert",
    "Haunted",
    "Tourist",
  ];

  const [active, setActive] = useState("All");
  const [visibleCards, setVisibleCards] = useState(6);

  const filteredDestinations =
    active === "All" ? data.slice(0, visibleCards) : data.filter((destination) => destination.package === active);

  const handleViewMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };

  return (
    <div className="container8">
      <div className="title">
        <h1>Categories</h1>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg) => (
            <li
              key={pkg}
              className={active === pkg ? "active" : ""}
              onClick={() => {
                setActive(pkg);
                setVisibleCards(6);
              }}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        {filteredDestinations.map((destination) => (
          <Link
            to={destination.link}
            style={{ textDecoration: "none", color: "black" }}
            key={destination.id}
          >
            <div className="destination">
              <img src={destination.image} alt={destination.title} />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <h4>{destination.cost}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {active === "All" && data.length > visibleCards && (
        <center>
        <button className="view-more" onClick={handleViewMore} style={{backgroundColor:'#99ccff',color:'white',border:'none',textAlign:'center',width:'100px',height:'25px',borderRadius:'10px',marginTop:'10px'}}>
          View More
        </button>
        </center>
      )}
    </div>
  );
}
