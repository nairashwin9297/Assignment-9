// PageCard.js

import React from "react";
import Card from "react-bootstrap/Card";

const PageCard = ({ title, content, image }) => {
  return (
    

    <div class="card text-center">
      <h5 class="card-title">{title}</h5>

      <div class="card-body d-flex align-items-center text-center">
        <p class="card-text">{content}</p>
        {image && <img class="imagesize" src={image} alt="Card image cap" />}
      </div>
    </div>
  );
};

export default PageCard;
