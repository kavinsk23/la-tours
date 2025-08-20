import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/features/HeroSection";
import IntroductionSection from "./components/features/IntroductionSection";
import WhyChooseUs from "./components/features/WhyChooseUs";
import PopularDestinations from "./components/features/PopularDestinations";
import HeroCTASection from "./components/features/HeroCTASection";
import Footer from "./components/layout/Footer";
import VehicleRental from "./components/features/VehicleRental";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <WhyChooseUs />
      <PopularDestinations />
      <VehicleRental />
      <HeroCTASection />
      <Footer />
    </div>
  );
}

export default App;
