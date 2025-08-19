import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import hambantotaImg from "../../assets/images/hambantota.jpg";
import kataragamaImg from "../../assets/images/kataragama.jpg";
import tangalleImg from "../../assets/images/tangalle.jpg";
import yalaImg from "../../assets/images/yala.jpg";
import hikkaduwaImg from "../../assets/images/hikkaduwa.jpg";
import Button from "../common/Button";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const slides = [
    {
      id: 1,
      title: "Discover Ancient Hambantota's Treasures",
      description:
        "Journey through Sri Lanka's historic southern port city. Explore the magnificent Hambantota Museum, climb the iconic Matelo Tower, and witness the Old Light House guiding ships for centuries. Walk among the mystical Gallows Tree and visit ancient Buddhist temples that tell stories of maritime heritage.",
      image: hambantotaImg,
      categories: ["Heritage", "History", "Museum", "Lighthouse"],
    },
    {
      id: 2,
      title: "Sacred Kataragama Pilgrimage Experience",
      description:
        "Embark on a spiritual journey to one of Sri Lanka's most sacred sites. Discover the ancient Dewalaya and Pooja city, explore the mystical Kiriwehera Temple, and find serenity at Sella Kataragama. Experience the divine energy at the river temple and ancient Kirinda temple where devotion meets natural beauty.",
      image: kataragamaImg,
      categories: ["Spiritual", "Temple", "Pilgrimage", "Ancient"],
    },
    {
      id: 3,
      title: "Tangalle's Botanical Paradise & Beach Bliss",
      description:
        "Immerse yourself in nature's splendor at Tangalle's famous Botanical Garden. Visit the sacred Wewrukannala Temple with its giant Buddha statue, relax on pristine Hiriketiya Beach, and explore the mysterious Blow Hole where ocean meets rock in spectacular fashion. End with a serene boat ride on Walawe River.",
      image: tangalleImg,
      categories: ["Nature", "Beach", "Temple", "Botanical"],
    },
    {
      id: 4,
      title: "Yala Safari & Wildlife Adventure",
      description:
        "Experience Sri Lanka's premier wildlife destination at Yala National Park. Spot majestic elephants, elusive leopards, and diverse bird species. Explore Udawalawa National Park's elephant orphanage and witness the natural hot water springs at Ridiyagama Safari Park. An unforgettable wildlife photography expedition.",
      image: yalaImg,
      categories: ["Safari", "Wildlife", "Elephants", "Photography"],
    },
    {
      id: 5,
      title: "Hikkaduwa Marine & Turtle Sanctuary",
      description:
        "Dive into Hikkaduwa's underwater paradise for turtle watching and coral reef exploration. Experience traditional turtle bathing rituals, visit Galle Dutch Port's colonial architecture, and enjoy jungle beach adventures. Cruise Kogala Lake watching exotic animals while savoring authentic cinnamon tea and local delicacies.",
      image: hikkaduwaImg,
      categories: ["Marine", "Turtles", "Diving", "Colonial"],
    },
  ];
  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto scroll every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }}
    >
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background image */}
            <div
              className="w-full h-full bg-gradient-to-br from-tea-green-400 via-ceylon-500 to-midnight-light bg-cover bg-center"
              style={{
                backgroundImage: slide.image ? `url(${slide.image})` : "none",
              }}
            />
            {/* Enhanced dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto lg:mx-0">
              {/* Main Title with Enhanced Styling */}
              <h1
                className="text-white font-display font-bold leading-tight mb-4 sm:mb-6 animate-fade-in-up text-center sm:text-left"
                style={{
                  fontSize: "clamp(1.8rem, 6vw, 6rem)",
                  lineHeight: "clamp(2rem, 6.5vw, 6.5rem)",
                }}
              >
                {currentSlideData.title}
              </h1>

              {/* Get In Touch Button with Enhanced Styling */}
              <div className="relative flex justify-center sm:justify-start">
                <Button variant="primary" size="lg">
                  Book Now{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-20 p-3 sm:p-6 lg:p-8">
          {/* Mobile Layout - Stack vertically */}
          <div className="block md:hidden space-y-4">
            {/* Navigation Controls - Mobile */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 p-2 rounded-xl bg-black/20 backdrop-blur-md border border-white/10">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Slide Indicators - Mobile */}
                <div className="flex gap-1.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-white shadow-lg scale-125"
                          : "bg-white/50 hover:bg-white/75 hover:scale-110"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description - Mobile */}
            <div className="mx-auto max-w-sm">
              <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-2xl text-center">
                <p
                  className="text-white text-xs leading-relaxed mb-3 animate-fade-in-up"
                  style={{
                    textShadow: "1px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  {currentSlideData.description}
                </p>

                {/* Category Tab Buttons - Mobile */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {currentSlideData.categories.map((category, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white text-xs font-sans font-medium rounded-full transition-all duration-300 hover:scale-105 border border-white border-opacity-30"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden md:flex justify-between items-end">
            {/* Bottom Left - Navigation Arrows with Enhanced Backdrop */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white shadow-lg scale-125"
                        : "bg-white/50 hover:bg-white/75 hover:scale-110"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Right - Description and Categories with Enhanced Backdrop */}
            <div className="max-w-md text-right">
              {/* Enhanced Description Container */}
              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
                {/* Description Text */}
                <p
                  className="text-white text-sm font-sans mb-4 leading-relaxed animate-fade-in-up"
                  style={{
                    textShadow: "1px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  {currentSlideData.description}
                </p>

                {/* Category Tab Buttons */}
                <div className="flex flex-wrap justify-end gap-2">
                  {currentSlideData.categories.map((category, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white text-xs font-sans font-medium rounded-full transition-all duration-300 hover:scale-105 border border-white border-opacity-30"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-black/20 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-ceylon-400 to-ceylon-600 transition-all duration-300 shadow-lg"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
