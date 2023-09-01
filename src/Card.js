import React from "react";

function Card({ title, body, imageUrl }) {
  // Destructure props here
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" /> {/* Corrected attribute name: "src" */}
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Card;
