import React from 'react';
import CardList from './CardList'; 
import './index.css';  

const cardData = [
  {
    image: 'src/assets/th (6).jpeg',
    title: 'Card 1',
    description: 'Am a Developer',
    name: 'John Doe',
    age: 30,
    gender: true, 
  },
  {
    image: 'src/assets/th (7).jpeg',
    title: 'Card 2',
    description: 'Am a Docter',
    name: 'Jane Smith',
    age: 28,
    gender: true, 
  },
  {
    image: 'src/assets/th (5).jpeg',
    title: 'Card 3',
    description: 'Am a Photographer',
    name: 'Alice Brown',
    age: 35,
    gender: false, 
  },
  {
    image: 'src/assets/th (4).jpeg',
    title: 'Card 4',
    description: 'Am a Student',
    name: 'Blen Fekadu',
    age: 21,
    gender: false, 
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Card List</h1>
      <CardList cards={cardData} />
    </div>
  );
}

export default App;
