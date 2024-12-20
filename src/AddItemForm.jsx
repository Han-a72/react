import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.trim() !== '') {
            onAdd(newItem);
            setNewItem('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter new item"
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
