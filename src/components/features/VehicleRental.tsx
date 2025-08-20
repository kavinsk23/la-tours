import React, { useEffect, useState } from "react";
import { Users, Fuel, Settings, MapPin } from "lucide-react";
import Button from "../common/Button";
import GalleryPopup from "../common/GalleryPopup";

const VehicleRental: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Initialize scroll animations on mount
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale"
    );

    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  const openGallery = (vehicleId: number) => {
    setSelectedVehicle(vehicleId);
    setIsGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedVehicle(null), 300);
  };

  const vehicles = [
    {
      id: 1,
      title: "Classic Scooter",
      type: "Scooter",
      description: "Perfect for city exploration and short coastal rides",
      image: "",
      engine: "125cc",
      capacity: "2 persons",
      fuelType: "Petrol",
      transmission: "Automatic",
      features: [
        "Fuel efficient",
        "Easy to ride",
        "Under-seat storage",
        "Electric start",
      ],

      gallery: ["", "", "", "", ""],
    },
    {
      id: 2,
      title: "Adventure Scooter",
      type: "Scooter",
      description: "Scooter for longer journeys and hill country exploration",
      image: "",
      engine: "150cc",
      capacity: "2 persons",
      fuelType: "Petrol",
      transmission: "Automatic",
      features: [
        "Higher engine power",
        "Better hill climbing",
        "Larger fuel tank",
        "Comfortable seating",
      ],

      gallery: ["", "", "", "", ""],
    },
    {
      id: 3,
      title: "Traditional Tuk Tuk",
      type: "Tuk Tuk",
      description: "Authentic three-wheeler experience with local charm",
      image: "",
      engine: "200cc",
      capacity: "3 persons",
      fuelType: "Petrol",
      transmission: "Manual",
      features: [
        "Weather protection",
        "Spacious seating",
        "Luggage space",
        "Local driver available",
      ],

      gallery: ["", "", "", "", ""],
    },
  ];

  // Get the selected vehicle data
  const selectedVehicleData = selectedVehicle
    ? vehicles.find((vehicle) => vehicle.id === selectedVehicle)
    : null;

  return (
    <>
      <section id="rental" className="py-16 lg:py-24 bg-cloud-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center mb-12 lg:mb-16 animate-on-scroll">
            <div className="w-16 h-px bg-ceylon-500 mr-6"></div>
            <h2 className="text-sm font-sans font-semibold text-midnight tracking-wider uppercase">
              Vehicle Rental
            </h2>
          </div>

          {/* Title Section */}
          <div className="flex items-center justify-between mb-12 lg:mb-16 animate-on-scroll">
            <div>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-sans font-light text-midnight leading-tight mb-4">
                Explore Sri Lanka{" "}
                <span className="text-steel font-light">Your Way</span>
              </h3>
              <p className="text-lg text-steel max-w-2xl font-sans leading-relaxed">
                Choose from our fleet of scooters and tuk tuks to discover Sri
                Lanka's hidden gems at your own pace with complete freedom and
                flexibility.
              </p>
            </div>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 lg:mb-16">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className={`group cursor-pointer animate-on-scroll-scale animate-stagger-${Math.min(
                  index + 1,
                  4
                )}`}
              >
                {/* Image Container */}
                <div
                  className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] cursor-pointer bg-ceylon-100"
                  onClick={() => openGallery(vehicle.id)}
                >
                  {vehicle.image && (
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Vehicle Type Badge */}
                  <div className="absolute top-3 left-3 bg-ceylon-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {vehicle.type}
                  </div>

                  {/* Gallery indicator */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {vehicle.gallery.length} photos
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-sans font-medium text-midnight group-hover:text-ceylon-600 transition-colors duration-300">
                      {vehicle.title}
                    </h3>
                    <p className="text-midnight/80 font-sans text-sm leading-relaxed mt-2">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Vehicle Specs */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-ceylon-500" />
                      <span className="text-steel font-sans text-xs">
                        {vehicle.engine}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-ceylon-500" />
                      <span className="text-steel font-sans text-xs">
                        {vehicle.capacity}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="w-4 h-4 text-ceylon-500" />
                      <span className="text-steel font-sans text-xs">
                        {vehicle.fuelType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-ceylon-500" />
                      <span className="text-steel font-sans text-xs">
                        {vehicle.transmission}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="pt-2">
                    <h4 className="text-sm font-sans font-medium text-midnight mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                      {vehicle.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-ceylon-500 text-xs mt-1 flex-shrink-0">
                            •
                          </span>
                          <span className="text-steel font-sans text-xs leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {vehicle.features.length > 4 && (
                        <div className="flex items-center gap-2">
                          <span className="text-ceylon-500 text-xs">•</span>
                          <span className="text-ceylon-600 font-sans text-xs font-medium">
                            +{vehicle.features.length - 4} more features
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1"
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
                      Rent Now
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openGallery(vehicle.id)}
                    >
                      View Photos
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center animate-on-scroll">
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
              Contact for Rental Inquiry
            </Button>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-16 lg:mt-24 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-ceylon-300 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Gallery Popup */}
      {selectedVehicleData && (
        <GalleryPopup
          images={selectedVehicleData.gallery}
          initialIndex={0}
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          title={selectedVehicleData.title}
        />
      )}
    </>
  );
};

export default VehicleRental;
