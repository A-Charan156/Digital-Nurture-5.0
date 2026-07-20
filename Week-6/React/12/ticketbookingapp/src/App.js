import React, { useState } from 'react';
import './App.css';

const GuestPage = ({ onLogin }) => {
  return (
    <div className="page-container">
      <h1>Please sign up.</h1>
      <button className="action-button" onClick={onLogin}>Login</button>
    </div>
  );
};

const UserPage = ({ onLogout }) => {
  return (
    <div className="page-container">
      <h1>Welcome back</h1>
      <button className="action-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <UserPage onLogout={handleLogout} />
      ) : (
        <GuestPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
