
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Welcome to Kpong Alumni</h1>} />
        <Route path="/admin" element={<h1>Admin Login Page</h1>} />
        <Route path="/signup" element={<h1>Alumni Sign-Up</h1>} />
        <Route path="/donate" element={<h1>Donation Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
