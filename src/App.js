import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import Services from './routes/Services';
import Team from './routes/Team';
import Contact from './routes/Contact';
import { React, forwardRef } from "react";
function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
