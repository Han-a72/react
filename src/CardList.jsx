import React from 'react';
import Card from './Card';  

function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          name={card.name}
          age={card.age}
          gender={card.gender}
        />
      ))}
    </div>
  );
}

export default CardList;
