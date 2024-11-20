import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import ErrorMessage from "./ErrorMessage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setShowError(false);
    } else if (username !== "" && password !== "") {
      setIsAdmin(false);
      setIsLoggedIn(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login Account</h1>

      {!isLoggedIn && !showError && <LoginForm onLogin={handleLogin} />}
      {isLoggedIn && isAdmin && <AdminDashboard />}
      {isLoggedIn && !isAdmin && <UserDashboard />}
      {showError && <ErrorMessage />}
    </div>
  );
}

export default App;
