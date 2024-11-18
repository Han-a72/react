import React from 'react';

function Card({ image, title, description, name, age, gender }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-name">Name: {name}</p>
      <p className="card-age">Age: {age}</p>
      <p className="card-gender">Gender: {gender ? 'Male' : 'Female'}</p>
    </div>
  );
}

export default Card;
