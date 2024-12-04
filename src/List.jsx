




import React, { useState } from "react";
import "./index.css"; 

const ListOfUsers = () => {
  const [users, setUser] = useState([
    { id: 1, name: "Hana", age: 25 },
    { id: 2, name: "Soliyana", age: 15 },
    { id: 3, name: "Eldana", age: 73 },
  ]);

  const [editUser, setEditUser] = useState({ name: "", age: "" });
  const [userId, setId] = useState(null);

  const handleChecker = (user) => {
    setId(user.id);
    setEditUser({ name: user.name, age: user.age });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSaveClick = () => {
    setUser(
      users.map((user) =>
        user.id === userId ? { ...user, ...editUser } : user
      )
    );
    setId(null);
    setEditUser({ name: "", age: "" });
  };

  const handleCancelClick = () => {
    setId(null);
    setEditUser({ name: "", age: "" });
  };

  return (
    <div className="list-container">
      <h1>List of Users</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {userId === user.id ? (
              <div className="edit-section">
                <input
                  type="text"
                  name="name"
                  value={editUser.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="edit-input"
                />
                <input
                  type="number"
                  name="age"
                  value={editUser.age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="edit-input"
                />
                <button onClick={handleSaveClick} className="btn save-btn">
                  Save
                </button>
                <button onClick={handleCancelClick} className="btn cancel-btn">
                  Cancel
                </button>
              </div>
            ) : (
              <div className="user-display">
                {user.name} (Age: {user.age})
                <button onClick={() => handleChecker(user)} className="btn edit-btn">
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfUsers;
