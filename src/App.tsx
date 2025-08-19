import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/features/HeroSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
