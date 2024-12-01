import React, { useState } from 'react';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';
import './index.css';

const App = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleDeleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Item List</h1>
            <AddItemForm onAdd={handleAddItem} />
            <ItemList items={items} onDelete={handleDeleteItem} />
        </div>
    );
};

export default App;
