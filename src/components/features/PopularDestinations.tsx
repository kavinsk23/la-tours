import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import GalleryPopup from "../common/GalleryPopup";

const PopularDestinations: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(
    null
  );
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

  const openGallery = (destinationId: number) => {
    setSelectedDestination(destinationId);
    setIsGalleryOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when gallery is open
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
    setTimeout(() => setSelectedDestination(null), 300); // Delay to allow animation to complete
  };

  const destinations = [
    {
      id: 1,
      title: "Sigiriya Rock Fortress",
      image: "",
      locations: [
        "Ancient fortress ruins",
        "Lion's Gate entrance",
        "Mirror Wall frescoes",
        "Summit palace remains",
        "Water gardens below",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 2,
      title: "Kandy Cultural Tour",
      image: "",
      locations: [
        "Temple of the tooth relic",
        "Cave temple at Dambulla",
        "Sigiriya",
        "Pidurangala",
        "Habarana Jeep safari",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 3,
      title: "Ella Adventure Tour",
      image: "",
      locations: [
        "Rawana water fall",
        "Rawana cave",
        "Little Adams peak",
        "Nine arch bridge",
        "Tea plantation",
        "Tea plants",
        "Train ride (Demodara to Ella)",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 4,
      title: "Yala National Park Safari",
      image: "",
      locations: [
        "Yala safari park",
        "Udawalawa park jeep safari",
        "Elephant orphanage",
        "Ridiyagama safari park",
        "Hot water springs",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 5,
      title: "Trincomalee Coastal Tour",
      image: "",
      locations: [
        "Nilaveli beach sunset",
        "Sea boat riding",
        "Trincomalee town",
        "Koneshwaram temple",
        "Marble beach",
        "Kinniya bridge (longest in SL)",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 6,
      title: "Nuwara Eliya Hill Country",
      image: "",
      locations: [
        "Nuwara Eliya town",
        "World's End",
        "Animal farm",
        "Victoria flower garden",
        "Gregory lake boat ride",
        "Gampola tunnel",
        "Ambuluwawa tower",
        "Tea factory",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 7,
      title: "Ella Extended Tour",
      image: "",
      locations: [
        "Buduruwagala temple",
        "Diyaluma waterfall",
        "Haputhala viewpoint",
        "Edison bungalow",
        "Lipton's Seat",
        "Tea gardens",
        "Ella City",
        "Rawana waterfall",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 8,
      title: "Hambantota Discovery Tour",
      image: "",
      locations: [
        "Hambantota city tour",
        "Hambantota museum",
        "Matelo tower",
        "Old lighthouse",
        "Gallows tree",
        "Old lion tower",
        "Buddhist temple",
        "Historic church",
        "Salt pans",
        "Fishing harbor",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 9,
      title: "Kataragama Spiritual Journey",
      image: "",
      locations: [
        "Ancient dewalaya",
        "Pooja city",
        "Kiriwehera temple",
        "Kataragama river temple",
        "Kirinda beach",
        "Ancient temple ruins",
      ],
      gallery: ["", "", "", "", ""],
    },
    {
      id: 10,
      title: "Tangalle & Hikkaduwa Beach Tour",
      image: "",
      locations: [
        "Botanical gardens",
        "Wewrukannala temple",
        "Hiriketiya beach",
        "Blow hole",
        "Walawe river boat ride",
        "Turtle watching",
        "Turtle bathing experience",
        "Galle Dutch fort",
        "Jungle beach",
        "Koggala lake safari",
        "Cinnamon island tour",
        "Fish therapy & spa",
        "Unawatuna temple",
      ],
      gallery: ["", "", "", "", ""],
    },
  ];

  // Get the selected destination data
  const selectedDestinationData = selectedDestination
    ? destinations.find((dest) => dest.id === selectedDestination)
    : null;

  return (
    <>
      <section id="destinations" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-12 lg:mb-16 animate-on-scroll">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-sans font-light text-midnight leading-tight mb-4">
                Popular{" "}
                <span className="text-steel font-light">Destinations</span>
              </h2>
              <p className="text-lg text-steel max-w-2xl font-sans leading-relaxed">
                Discover popular destinations, offering stunning landscapes,
                vibrant cultures, and unforgettable experiences for every
                traveler.
              </p>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 lg:mb-16">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`relative group cursor-pointer animate-on-scroll-scale animate-stagger-${Math.min(
                  index + 1,
                  4
                )}`}
              >
                {/* Image Container */}
                <div
                  className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] cursor-pointer bg-ceylon-100"
                  onClick={() => openGallery(destination.id)}
                >
                  {destination.image && (
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Gallery indicator */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {destination.gallery.length} photos
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-xl font-sans font-medium text-midnight group-hover:text-ceylon-600 transition-colors duration-300">
                    {destination.title}
                  </h3>

                  {/* Locations List */}
                  <div className="pt-2">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {destination.locations.map((location, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-ceylon-500 text-xs mt-1 flex-shrink-0">
                            •
                          </span>
                          <span className="text-steel font-sans text-xs leading-relaxed">
                            {location}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Book Now Button */}
                    <div className="pt-2 transform translate-y-2 transition-all duration-300 mt-auto absolute bottom-0">
                      <div className="flex gap-3">
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          onClick={() => {
                            const message = encodeURIComponent(
                              `Hi! I'm interested in booking the ${destination.title} tour. Could you please provide pricing and availability?`
                            );
                            window.open(
                              `https://wa.me/qr/CZCRXE7A5DLSM1?text=${message}`,
                              "_blank"
                            );
                          }}
                        >
                          Book Now
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openGallery(destination.id)}
                        >
                          View Gallery
                        </Button>
                      </div>
                    </div>
                    <div className="pt-2 transform translate-y-2 transition-all duration-300 mt-auto invisible">
                      <div className="flex gap-3">
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          onClick={() => {
                            const message = encodeURIComponent(
                              `Hi! I'm interested in booking the ${destination.title} tour. Could you please provide pricing and availability?`
                            );
                            window.open(
                              `https://wa.me/qr/CZCRXE7A5DLSM1?text=${message}`,
                              "_blank"
                            );
                          }}
                        >
                          Book Now
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openGallery(destination.id)}
                        >
                          View Gallery
                        </Button>
                      </div>
                    </div>
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
                  `https://wa.me/qr/CZCRXE7A5DLSM1?text=${message}`,
                  "_blank"
                );
              }}
            >
              Book Now
            </Button>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-16 lg:mt-24 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-ceylon-300 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Gallery Popup */}
      {selectedDestinationData && (
        <GalleryPopup
          images={selectedDestinationData.gallery}
          initialIndex={0}
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          title={selectedDestinationData.title}
        />
      )}
    </>
  );
};

export default PopularDestinations;
