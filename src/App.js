import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import { React, forwardRef } from "react";
function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      
    </div>
  );
}

export default App;
