import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const slides = [
    {
      id: 1,
      title: "Discover Ancient Hambantota's Hidden Treasures",
      description:
        "Journey through Sri Lanka's historic southern port city. Explore the magnificent Hambantota Museum, climb the iconic Matelo Tower, and witness the Old Light House guiding ships for centuries. Walk among the mystical Gallows Tree and visit ancient Buddhist temples that tell stories of maritime heritage.",
      image: "", // Empty URL as requested
      categories: ["Heritage", "History", "Museum", "Lighthouse"],
    },
    {
      id: 2,
      title: "Sacred Kataragama Pilgrimage Experience",
      description:
        "Embark on a spiritual journey to one of Sri Lanka's most sacred sites. Discover the ancient Dewalaya and Pooja city, explore the mystical Kiriwehera Temple, and find serenity at Sella Kataragama. Experience the divine energy at the river temple and ancient Kirinda temple where devotion meets natural beauty.",
      image: "", // Empty URL as requested
      categories: ["Spiritual", "Temple", "Pilgrimage", "Ancient"],
    },
    {
      id: 3,
      title: "Tangalle's Botanical Paradise & Beach Bliss",
      description:
        "Immerse yourself in nature's splendor at Tangalle's famous Botanical Garden. Visit the sacred Wewrukannala Temple with its giant Buddha statue, relax on pristine Hiriketiya Beach, and explore the mysterious Blow Hole where ocean meets rock in spectacular fashion. End with a serene boat ride on Walawe River.",
      image: "", // Empty URL as requested
      categories: ["Nature", "Beach", "Temple", "Botanical"],
    },
    {
      id: 4,
      title: "Yala Safari & Wildlife Adventure",
      description:
        "Experience Sri Lanka's premier wildlife destination at Yala National Park. Spot majestic elephants, elusive leopards, and diverse bird species. Explore Udawalawa National Park's elephant orphanage and witness the natural hot water springs at Ridiyagama Safari Park. An unforgettable wildlife photography expedition.",
      image: "", // Empty URL as requested
      categories: ["Safari", "Wildlife", "Elephants", "Photography"],
    },
    {
      id: 5,
      title: "Hikkaduwa Marine & Turtle Sanctuary",
      description:
        "Dive into Hikkaduwa's underwater paradise for turtle watching and coral reef exploration. Experience traditional turtle bathing rituals, visit Galle Dutch Port's colonial architecture, and enjoy jungle beach adventures. Cruise Kogala Lake watching exotic animals while savoring authentic cinnamon tea and local delicacies.",
      image: "", // Empty URL as requested
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
            {/* Placeholder for background image */}
            <div
              className="w-full h-full bg-gradient-to-br from-tea-green-400 via-ceylon-500 to-midnight-light bg-cover bg-center"
              style={{
                backgroundImage: slide.image ? `url(${slide.image})` : "none",
              }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Main Title with Clamp */}
              <h1
                className="text-white font-display font-bold leading-tight mb-6 animate-fade-in-up"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 6rem)",
                  lineHeight: "clamp(2.8rem, 8.5vw, 6.5rem)",
                }}
              >
                {currentSlideData.title}
              </h1>

              {/* Get In Touch Button */}
              <button className="bg-white hover:bg-cloud-light text-midnight font-sans font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 animate-fade-in-up">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-20 flex justify-between items-end p-6 sm:p-8">
          {/* Bottom Left - Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
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
                      ? "bg-white"
                      : "bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Right - Description and Categories */}
          <div className="max-w-md text-right">
            {/* Description Text */}
            <p className="text-white text-sm font-sans mb-4 leading-relaxed animate-fade-in-up">
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

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
