import { useState,useReducer } from "react";
import "./App.css";
import { MOCK_USERS_DATA } from "./mock-data/mock-data";

function App() {

const [users, dispatch] = useReducer(userReducer, MOCK_USERS_DATA);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const handleUpdateUser = (id) => {
    console.log("Updating user by id:", id);
    const updatedUser = users.find((u) => u.id === id);
    const updatedUsers = users.filter((u) => u.id !== id);
    dispatch({ type: "UPDATE_USER", payload: updatedUser });
  };

  const handleAddUser = () => {
    const randomIndex = Math.floor(Math.random() * 5);
    const imgIndex = randomIndex == 1 || randomIndex == 0 ? "" : `-${randomIndex}`;
    const newUser = {
      id: Date.now(),
      login: "newuser",
      avatar_url: `https://placehold.net/avatar${imgIndex}.svg`,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
  };

  return (
    <section id="center">
      <div className="header-container">
        <h1>GitHub Users</h1>
        {/* Add User Button */}
        <button className="add-btn" onClick={handleAddUser}>
          + Add New User
        </button>
      </div>

      <div className="users-grid">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="image-container">
              <img
                src={user.avatar_url}
                alt={user.login}
                width="100"
                height="100"
                className="user-avatar"
              />

              {/* Update/Pencil Action Trigger */}
              <button
                className="action-btn edit-btn"
                onClick={() => handleUpdateUser(user.id)}
                title="Update user"
              >
                ✏️
              </button>

              {/* Delete Action Trigger */}
              <button
                className="action-btn delete-btn"
                onClick={() => handleDelete(user.id)}
                title="Delete user"
              >
                ×
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default App;
