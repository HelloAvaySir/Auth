import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Fix the import paths based on your actual file structure
import Navbar from "./component/Global/Navbar.jsx";  // Add .jsx extension
import Home from "./pages/Home.jsx";
import Login from "./component/form/login.jsx";     // Check if it's lowercase 'login'
import Register from "./component/form/Register.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;