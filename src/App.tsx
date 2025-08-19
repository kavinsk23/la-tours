import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/features/HeroSection";
import IntroductionSection from "./components/features/IntroductionSection";
import WhyChooseUs from "./components/features/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <WhyChooseUs />
    </div>
  );
}

export default App;
