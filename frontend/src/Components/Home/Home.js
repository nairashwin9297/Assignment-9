// Home.js

import React from "react";
import PageCard from "../PageCard/PageCard";
import image5 from "../../images/image5.jpeg";
import image6 from "../../images/image6.jpeg";
import image7 from "../../images/image7.jpeg";

const Home = () => {
  let services = [
    {
      id: 1,
      title: "AI Job hunt",
      description: "AI Job hunt for latest trends",
      image: image5,
    },
    {
      id: 2,
      title: "Resume Building",
      description: "We provide well tailored Resume Building",
      image: image6,
    },
    {
      id: 3,
      title: "Personal Guidance",
      description: "We provide Personal Guidance",
      image: image7,
    },
  ];
  return (
    <div>
      <PageCard
        title="Welcome to Our Company"
        content="Explore innovative solutions and discover the future with us. We are committed to excellence and delivering outstanding results."
      />
      <div className="text-center">
        <h2>Featured Products</h2>
        <p>
          Check out our latest and greatest products that are making waves in
          the industry.
        </p>
       


        <div style={{ display: 'flex', justifyContent: 'center' }}>
  {services.map((service) => (
    <div key={service.id} class="card cardcontainer text-center p-3">
      <img class="card-img-top cardimage" src={service.image} alt="Card image cap" />
      <div class="card-body">
        <h5>{service.title}</h5>
        <p class="card-text">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Home;
