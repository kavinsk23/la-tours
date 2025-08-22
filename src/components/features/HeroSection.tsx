import React, { useState, useEffect, useRef } from "react";
import hambantotaImg from "../../assets/images/hambantota.jpg";
import kataragamaImg from "../../assets/images/kataragama.jpg";
import tangalleImg from "../../assets/images/tangalle.jpg";
import yalaImg from "../../assets/images/yala.jpg";
import hikkaduwaImg from "../../assets/images/hikkaduwa.jpg";
import ellaImg from "../../assets/images/ella.jpg";
import kandyImg from "../../assets/images/kandy.jpg";
import nuwaraeliyaImg from "../../assets/images/nuwaraeliya.jpg";
import trincomaleeImg from "../../assets/images/trincomalee.jpg";

import Button from "../common/Button";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const isDragging = useRef(false);

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
    {
      id: 6,
      title: "Ella Adventure & Tea Country",
      description:
        "Journey through Ella's breathtaking hill country with visits to iconic Rawana Waterfall and mystical caves. Hike to Little Adams Peak for panoramic views, cross the famous Nine Arch Bridge, and experience authentic train travel from Demodara to Ella through lush tea plantations while learning about traditional tea cultivation.",
      image: ellaImg,
      categories: ["Adventure", "Tea", "Hiking", "Railway"],
    },
    {
      id: 7,
      title: "Nuwara Eliya Highland Paradise",
      description:
        "Explore 'Little England' with its colonial charm, from bustling Nuwara Eliya town to the dramatic World's End cliff. Visit Victoria Flower Gardens, enjoy Gregory Lake boat rides, discover the historic Gampola Tunnel, and climb Ambuluwawa Tower while touring authentic tea factories in the misty highlands.",
      image: nuwaraeliyaImg,
      categories: ["Highland", "Colonial", "Tea", "Scenic"],
    },
    {
      id: 8,
      title: "Kandy Cultural Heritage Journey",
      description:
        "Immerse yourself in Sri Lanka's cultural heart with visits to the sacred Temple of the Tooth Relic and ancient Dambulla Cave Temples. Explore the majestic Sigiriya Rock Fortress, climb Pidurangala for sunrise views, and experience thrilling Habarana jeep safaris through diverse wildlife habitats.",
      image: kandyImg,
      categories: ["Cultural", "Heritage", "Safari", "Spiritual"],
    },
    {
      id: 9,
      title: "Trincomalee Coastal Paradise",
      description:
        "Experience stunning Nilaveli beach sunsets and exhilarating sea boat adventures along pristine coastlines. Explore historic Trincomalee town, visit the ancient Koneshwaram Temple, relax on exclusive Marble Beach, and cross the magnificent Kinniya Bridge - Sri Lanka's longest span connecting coastal communities.",
      image: trincomaleeImg,
      categories: ["Coastal", "Beaches", "Historic", "Temple"],
    },
  ];

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto scroll every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Touch and mouse event handlers
  const handleStart = (clientX: number, clientY: number) => {
    startX.current = clientX;
    startY.current = clientY;
    isDragging.current = true;
  };

  const handleEnd = (clientX: number, clientY: number) => {
    if (!isDragging.current) return;

    const deltaX = startX.current - clientX;
    const deltaY = Math.abs(startY.current - clientY);
    const threshold = 50;

    // Only trigger slide change if horizontal swipe is more significant than vertical
    if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > deltaY) {
      if (deltaX > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }

    isDragging.current = false;
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    handleEnd(touch.clientX, touch.clientY);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleEnd(e.clientX, e.clientY);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ height: "calc(100vh - 64px)" }}
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
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
              className="w-full h-full bg-center bg-cover bg-gradient-to-br from-tea-green-400 via-ceylon-500 to-midnight-light"
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
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        {/* Main Content */}
        <div className="flex items-center flex-1 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto lg:mx-0">
              {/* Main Title with Enhanced Styling */}
              <h1
                className="mb-4 font-bold leading-tight text-center text-white font-display sm:mb-6 animate-fade-in-up sm:text-left"
                style={{
                  fontSize: "clamp(1.8rem, 6vw, 6rem)",
                  lineHeight: "clamp(2rem, 6.5vw, 6.5rem)",
                }}
              >
                {currentSlideData.title}
              </h1>

              {/* Get In Touch Button with Enhanced Styling */}
              <div className="relative flex justify-center pointer-events-auto sm:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Hi! I'm interested in booking a tour with LA Tours. Could you please provide more information?"
                    );
                    window.open(
                      `https://wa.me/94779941056?text=${message}`,
                      "_blank"
                    );
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-20 p-3 pointer-events-auto sm:p-6 lg:p-8">
          {/* Mobile Layout - Stack vertically */}
          <div className="block space-y-4 md:hidden">
            {/* Slide Indicators - Mobile */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 p-2 border rounded-xl bg-black/20 backdrop-blur-md border-white/10">
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
              </div>
            </div>

            {/* Description - Mobile */}
            <div className="max-w-sm mx-auto">
              <div className="p-4 text-center border shadow-2xl bg-black/30 backdrop-blur-md rounded-xl border-white/10">
                <p
                  className="mb-3 text-xs leading-relaxed text-white animate-fade-in-up"
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
          <div className="items-end justify-between hidden md:flex">
            {/* Bottom Left - Slide Indicators Only */}
            <div className="flex items-center gap-4 p-3 border rounded-2xl bg-black/20 backdrop-blur-md border-white/10">
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
            </div>

            {/* Bottom Right - Description and Categories with Enhanced Backdrop */}
            <div className="max-w-md text-right">
              {/* Enhanced Description Container */}
              <div className="p-6 border shadow-2xl bg-black/30 backdrop-blur-md rounded-2xl border-white/10">
                {/* Description Text */}
                <p
                  className="mb-4 font-sans text-sm leading-relaxed text-white animate-fade-in-up"
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
                      className="px-4 py-2 font-sans text-xs font-medium text-white transition-all duration-300 bg-white border border-white rounded-full bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm hover:scale-105 border-opacity-30"
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
          className="h-full transition-all duration-300 shadow-lg bg-gradient-to-r from-ceylon-400 to-ceylon-600"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
