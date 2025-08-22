import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import GalleryPopup from "../common/GalleryPopup";
import hambantota1 from "../../assets/images/hambantota/IMG4494.jpg";
import hambantota2 from "../../assets/images/hambantota/IMG_4495.jpg";
import hambantota3 from "../../assets/images/hambantota/IMG_4496.jpg";
import hambantota4 from "../../assets/images/hambantota/IMG_4497.jpg";
import hambantota5 from "../../assets/images/hambantota/IMG_4498.jpg";
import hambantota6 from "../../assets/images/hambantota/IMG_4499.jpg";
import hambantota7 from "../../assets/images/hambantota/img4500.jpg";

import ella1 from "../../assets/images/ella/Image (10).jpg";
import ella2 from "../../assets/images/ella/Image (3).jpg";
import ella3 from "../../assets/images/ella/Image (4).jpg";
import ella4 from "../../assets/images/ella/Image (5).jpg";
import ella5 from "../../assets/images/ella/Image (6).jpg";
import ella6 from "../../assets/images/ella/Image (7).jpg";
import ella7 from "../../assets/images/ella/Image (8).jpg";
import ella8 from "../../assets/images/ella/Image (9).jpg";

import kataragama1 from "../../assets/images/kataragama/Image (3).jpg";
import kataragama2 from "../../assets/images/kataragama/Image (4).jpg";
import kataragama3 from "../../assets/images/kataragama/Image (5).jpg";
import kataragama4 from "../../assets/images/kataragama/Image (6).jpg";
import kataragama5 from "../../assets/images/kataragama/Image (7).jpg";
import kataragama6 from "../../assets/images/kataragama/Image (8).jpg";
import kataragama7 from "../../assets/images/kataragama/Image (9).jpg";
import kataragama8 from "../../assets/images/kataragama/Image (10).jpg";
import kataragama9 from "../../assets/images/kataragama/Image (11).jpg";
import kataragama10 from "../../assets/images/kataragama/Image (12).jpg";

import tangalle1 from "../../assets/images/tangalle/Image (3).jpg";
import tangalle2 from "../../assets/images/tangalle/Image (4).jpg";
import tangalle3 from "../../assets/images/tangalle/Image (5).jpg";
import tangalle4 from "../../assets/images/tangalle/Image (6).jpg";
import tangalle5 from "../../assets/images/tangalle/Image (7).jpg";
import tangalle6 from "../../assets/images/tangalle/Image (8).jpg";
import tangalle7 from "../../assets/images/tangalle/Image (9).jpg";
import tangalle8 from "../../assets/images/tangalle/Image (10).jpg";
import tangalle9 from "../../assets/images/tangalle/Image (11).jpg";
import tangalle10 from "../../assets/images/tangalle/Image (12).jpg";

import yala1 from "../../assets/images/yala/Image (3).jpg";
import yala2 from "../../assets/images/yala/Image (4).jpg";
import yala3 from "../../assets/images/yala/Image (5).jpg";
import yala4 from "../../assets/images/yala/Image (6).jpg";
import yala5 from "../../assets/images/yala/Image (7).jpg";
import yala6 from "../../assets/images/yala/Image (8).jpg";
import yala7 from "../../assets/images/yala/Image (9).jpg";
import yala8 from "../../assets/images/yala/Image (10).jpg";
import yala9 from "../../assets/images/yala/Image (11).jpg";
import yala10 from "../../assets/images/yala/Image (12).jpg";
import yala11 from "../../assets/images/yala/Image (13).jpg";
import yala12 from "../../assets/images/yala/Image (14).jpg";
import yala13 from "../../assets/images/yala/Image (15).jpg";
import yala14 from "../../assets/images/yala/Image (16).jpg";
import yala15 from "../../assets/images/yala/Image (17).jpg";
import yala16 from "../../assets/images/yala/Image (18).jpg";
import yala17 from "../../assets/images/yala/Image (19).jpg";
import yala18 from "../../assets/images/yala/Image (20).jpg";

import hikkaduwa1 from "../../assets/images/hikkaduwa/Image (3).jpg";
import hikkaduwa2 from "../../assets/images/hikkaduwa/Image (4).jpg";
import hikkaduwa3 from "../../assets/images/hikkaduwa/Image (5).jpg";
import hikkaduwa4 from "../../assets/images/hikkaduwa/Image (6).jpg";
import hikkaduwa5 from "../../assets/images/hikkaduwa/Image (7).jpg";
import hikkaduwa6 from "../../assets/images/hikkaduwa/Image (8).jpg";
import hikkaduwa7 from "../../assets/images/hikkaduwa/Image (9).jpg";
import hikkaduwa8 from "../../assets/images/hikkaduwa/Image (10).jpg";
import hikkaduwa9 from "../../assets/images/hikkaduwa/Image (11).jpg";
import hikkaduwa10 from "../../assets/images/hikkaduwa/Image (12).jpg";
import hikkaduwa11 from "../../assets/images/hikkaduwa/Image (13).jpg";
import hikkaduwa12 from "../../assets/images/hikkaduwa/Image (14).jpg";
import hikkaduwa13 from "../../assets/images/hikkaduwa/Image (15).jpg";
import hikkaduwa14 from "../../assets/images/hikkaduwa/Image (16).jpg";
import hikkaduwa15 from "../../assets/images/hikkaduwa/Image (17).jpg";
import hikkaduwa16 from "../../assets/images/hikkaduwa/Image (18).jpg";
import hikkaduwa17 from "../../assets/images/hikkaduwa/Image (19).jpg";
import hikkaduwa18 from "../../assets/images/hikkaduwa/Image (20).jpg";
import hikkaduwa19 from "../../assets/images/hikkaduwa/Image (21).jpg";
import hikkaduwa20 from "../../assets/images/hikkaduwa/Image (22).jpg";
import hikkaduwa21 from "../../assets/images/hikkaduwa/Image (23).jpg";
import hikkaduwa22 from "../../assets/images/hikkaduwa/Image (24).jpg";
import hikkaduwa23 from "../../assets/images/hikkaduwa/Image (25).jpg";
import hikkaduwa24 from "../../assets/images/hikkaduwa/Image (26).jpg";

import sigiriya1 from "../../assets/images/sigiriya/Image (3).jpg";
import sigiriya2 from "../../assets/images/sigiriya/Image (4).jpg";
import sigiriya3 from "../../assets/images/sigiriya/Image (5).jpg";
import sigiriya4 from "../../assets/images/sigiriya/Image (6).jpg";
import sigiriya5 from "../../assets/images/sigiriya/Image (7).jpg";

import kandy2 from "../../assets/images/kandy/Image (3).jpg";
import kandy3 from "../../assets/images/kandy/Image (4).jpg";
import kandy4 from "../../assets/images/kandy/Image (5).jpg";

import tinco4 from "../../assets/images/trincomalee/Image (6).jpg";
import tinco5 from "../../assets/images/trincomalee/Image (7).jpg";
import tinco6 from "../../assets/images/trincomalee/Image (8).jpg";
import tinco7 from "../../assets/images/trincomalee/Image (9).jpg";
import tinco8 from "../../assets/images/trincomalee/Image (10).jpg";
import tinco9 from "../../assets/images/trincomalee/Image (11).jpg";
import tinco10 from "../../assets/images/trincomalee/Image (12).jpg";
import tinco11 from "../../assets/images/trincomalee/Image (13).jpg";
import tinco12 from "../../assets/images/trincomalee/Image (14).jpg";
import tinco13 from "../../assets/images/trincomalee/Image (15).jpg";

import nuvaraeliya1 from "../../assets/images/nuvaraeliya/Image (3).jpg";
import nuvaraeliya2 from "../../assets/images/nuvaraeliya/Image (4).jpg";
import nuvaraeliya3 from "../../assets/images/nuvaraeliya/Image (5).jpg";
import nuvaraeliya4 from "../../assets/images/nuvaraeliya/Image (6).jpg";
import nuvaraeliya5 from "../../assets/images/nuvaraeliya/Image (7).jpg";
import nuvaraeliya6 from "../../assets/images/nuvaraeliya/Image (8).jpg";
import nuvaraeliya7 from "../../assets/images/nuvaraeliya/Image (9).jpg";
import nuvaraeliya8 from "../../assets/images/nuvaraeliya/Image (10).jpg";
import nuvaraeliya9 from "../../assets/images/nuvaraeliya/Image (11).jpg";
import nuvaraeliya10 from "../../assets/images/nuvaraeliya/Image (12).jpg";
import nuvaraeliya11 from "../../assets/images/nuvaraeliya/Image (13).jpg";

import ella21 from "../../assets/images/ella2/Image (3).jpg";
import ella22 from "../../assets/images/ella2/Image (4).jpg";
import ella23 from "../../assets/images/ella2/Image (5).jpg";
import ella24 from "../../assets/images/ella2/Image (6).jpg";
import ella25 from "../../assets/images/ella2/Image (7).jpg";
import ella26 from "../../assets/images/ella2/Image (8).jpg";
import ella27 from "../../assets/images/ella2/Image (9).jpg";
import ella28 from "../../assets/images/ella2/Image (10).jpg";
import ella29 from "../../assets/images/ella2/Image (11).jpg";
import ella210 from "../../assets/images/ella2/Image (12).jpg";

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
      image: sigiriya1,

      locations: [
        "Ancient fortress ruins",
        "Lion's Gate entrance",
        "Mirror Wall frescoes",
        "Summit palace remains",
        "Water gardens below",
      ],
      gallery: [sigiriya1, sigiriya2, sigiriya3, sigiriya4, sigiriya5],
    },
    {
      id: 2,
      title: "Kandy Cultural Tour",
      image: kandy2,
      locations: [
        "Temple of the tooth relic",
        "Cave temple at Dambulla",
        "Sigiriya",
        "Pidurangala",
        "Habarana Jeep safari",
      ],
      gallery: [kandy2, kandy3, kandy4],
    },
    {
      id: 3,
      title: "Ella Adventure Tour",
      image: ella6,
      locations: [
        "Rawana water fall",
        "Rawana cave",
        "Little Adams peak",
        "Nine arch bridge",
        "Tea plantation",
        "Tea plants",
        "Train ride (Demodara to Ella)",
      ],
      gallery: [ella1, ella2, ella3, ella4, ella5, ella6, ella7, ella8],
    },
    {
      id: 4,
      title: "Yala National Park Safari",
      image: yala1,
      locations: [
        "Yala safari park",
        "Udawalawa park jeep safari",
        "Elephant orphanage",
        "Ridiyagama safari park",
        "Hot water springs",
      ],
      gallery: [
        yala1,
        yala2,
        yala3,
        yala4,
        yala5,
        yala6,
        yala7,
        yala8,
        yala9,
        yala10,
        yala11,
        yala12,
        yala13,
        yala14,
        yala15,
        yala16,
        yala17,
        yala18,
      ],
    },
    {
      id: 5,
      title: "Trincomalee Coastal Tour",
      image: tinco9,
      locations: [
        "Nilaveli beach sunset",
        "Sea boat riding",
        "Trincomalee town",
        "Koneshwaram temple",
        "Marble beach",
        "Kinniya bridge (longest in SL)",
      ],
      gallery: [
        tinco4,
        tinco5,
        tinco6,
        tinco7,
        tinco8,
        tinco9,
        tinco10,
        tinco11,
        tinco12,
        tinco13,
      ],
    },
    {
      id: 6,
      title: "Nuwara Eliya Hill Country",
      image: nuvaraeliya3,
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
      gallery: [
        nuvaraeliya1,
        nuvaraeliya2,
        nuvaraeliya3,
        nuvaraeliya4,
        nuvaraeliya5,
        nuvaraeliya6,
        nuvaraeliya7,
        nuvaraeliya8,
        nuvaraeliya9,
        nuvaraeliya10,
        nuvaraeliya11,
      ],
    },
    {
      id: 7,
      title: "Ella Extended Tour",
      image: ella210,
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
      gallery: [
        ella21,
        ella22,
        ella23,
        ella24,
        ella25,
        ella26,
        ella27,
        ella28,
        ella29,
        ella210,
      ],
    },
    {
      id: 8,
      title: "Hambantota Discovery Tour",
      image: hambantota5,
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
      gallery: [
        hambantota1,
        hambantota2,
        hambantota3,
        hambantota4,
        hambantota5,
        hambantota6,
        hambantota7,
      ],
    },
    {
      id: 9,
      title: "Kataragama Spiritual Journey",
      image: kataragama7,
      locations: [
        "Ancient dewalaya",
        "Pooja city",
        "Kiriwehera temple",
        "Kataragama river temple",
        "Kirinda beach",
        "Ancient temple ruins",
      ],
      gallery: [
        kataragama1,
        kataragama2,
        kataragama3,
        kataragama4,
        kataragama5,
        kataragama6,
        kataragama7,
        kataragama8,
        kataragama9,
        kataragama10,
      ],
    },
    // Hikkaduwa Beach Tour
    {
      id: 10,
      title: "Hikkaduwa Beach Tour",
      image: hikkaduwa21,
      locations: [
        "Galle Dutch fort",
        "Jungle beach",
        "Koggala lake safari",
        "Cinnamon island tour",
        "Fish therapy & spa",
        "Unawatuna temple",
        "Turtle watching",
        "Turtle bathing experience",
      ],
      gallery: [
        hikkaduwa1,
        hikkaduwa2,
        hikkaduwa3,
        hikkaduwa4,
        hikkaduwa5,
        hikkaduwa6,
        hikkaduwa7,
        hikkaduwa8,
        hikkaduwa9,
        hikkaduwa10,
        hikkaduwa11,
        hikkaduwa12,
        hikkaduwa13,
        hikkaduwa14,
        hikkaduwa15,
        hikkaduwa16,
        hikkaduwa17,
        hikkaduwa18,
        hikkaduwa19,
        hikkaduwa20,
        hikkaduwa21,
        hikkaduwa22,
        hikkaduwa23,
        hikkaduwa24,
      ],
    },

    // Tangalle Beach Tour
    {
      id: 11,
      title: "Tangalle Beach Tour",
      image: tangalle1,
      locations: [
        "Botanical gardens",
        "Wewrukannala temple",
        "Hiriketiya beach",
        "Blow hole",
        "Walawe river boat ride",
      ],
      gallery: [
        tangalle1,
        tangalle2,
        tangalle3,
        tangalle4,
        tangalle5,
        tangalle6,
        tangalle7,
        tangalle8,
        tangalle9,
        tangalle10,
      ],
    },
  ];

  // Get the selected destination data
  const selectedDestinationData = selectedDestination
    ? destinations.find((dest) => dest.id === selectedDestination)
    : null;

  return (
    <>
      <section id="destinations" className="py-16 bg-white lg:py-24">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-12 lg:mb-16 animate-on-scroll">
            <div>
              <h2 className="mb-4 font-sans text-3xl font-light leading-tight lg:text-4xl xl:text-5xl text-midnight">
                Popular{" "}
                <span className="font-light text-steel">Destinations</span>
              </h2>
              <p className="max-w-2xl font-sans text-lg leading-relaxed text-steel">
                Discover popular destinations, offering stunning landscapes,
                vibrant cultures, and unforgettable experiences for every
                traveler.
              </p>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3 lg:mb-16">
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
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent group-hover:opacity-100"></div>

                  {/* Gallery indicator */}
                  <div className="absolute px-2 py-1 text-xs text-white rounded-full top-3 right-3 bg-black/60">
                    {destination.gallery.length} photos
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-sans text-xl font-medium transition-colors duration-300 lg:text-xl text-midnight group-hover:text-ceylon-600">
                    {destination.title}
                  </h3>

                  {/* Locations List */}
                  <div className="pt-2">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {destination.locations.map((location, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="flex-shrink-0 mt-1 text-xs text-ceylon-500">
                            •
                          </span>
                          <span className="font-sans text-xs leading-relaxed text-steel">
                            {location}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Book Now Button */}
                    <div className="absolute bottom-0 pt-2 mt-auto transition-all duration-300 transform translate-y-2">
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
                              `https://wa.me/94779941056?text=${message}`,
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
                    <div className="invisible pt-2 mt-auto transition-all duration-300 transform translate-y-2">
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
                              `https://wa.me/94779941056?text=${message}`,
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

          {/* Bottom decorative line */}
          <div className="flex justify-center mt-16 lg:mt-24">
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
