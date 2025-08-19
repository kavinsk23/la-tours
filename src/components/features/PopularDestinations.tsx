import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../common/Button";

const PopularDestinations: React.FC = () => {
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

  const destinations = [
    {
      id: 1,
      title: "Sigiriya Rock Fortress",
      description:
        "Ancient rock citadel with breathtaking frescoes and panoramic views",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      duration: "Half-day guided tour including cultural insights",
    },
    {
      id: 2,
      title: "Kandy Temple of Tooth",
      description: "Sacred Buddhist temple housing the relic of Buddha's tooth",
      image:
        "https://images.unsplash.com/photo-1544735151-6e4b3999de4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      duration: "Full-day cultural immersion with traditional ceremonies",
    },
    {
      id: 3,
      title: "Ella Nine Arches Bridge",
      description: "Iconic railway bridge surrounded by lush tea plantations",
      image:
        "https://images.unsplash.com/photo-1566232392379-afd35267e646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      duration: "Adventure hike with Instagram-worthy photo opportunities",
    },
    {
      id: 4,
      title: "Yala National Park",
      description: "Premier wildlife sanctuary famous for leopard sightings",
      image:
        "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      duration: "Safari expedition with expert wildlife guides",
    },
    {
      id: 5,
      title: "Mirissa Beach Whales",
      description: "Pristine coastal paradise for whale and dolphin watching",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      duration: "Marine adventure with luxury catamaran experience",
    },
    {
      id: 6,
      title: "Adam's Peak Sunrise",
      description: "Sacred mountain pilgrimage with magical sunrise views",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      duration: "Spiritual trekking adventure with sunrise meditation",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12 lg:mb-16 animate-on-scroll">
          <div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-sans font-light text-midnight leading-tight mb-4">
              Popular{" "}
              <span className="text-steel font-light">Destinations in</span>
            </h2>
            <p className="text-lg text-steel max-w-2xl font-sans leading-relaxed">
              Discover popular destinations, offering stunning landscapes,
              vibrant cultures, and unforgettable experiences for every
              traveler.
            </p>
          </div>
          <div className="text-center animate-on-scroll hidden lg:flex">
            <Button variant="primary" size="lg">
              Contact Us{" "}
            </Button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 lg:mb-16">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`group cursor-pointer animate-on-scroll-scale animate-stagger-${Math.min(
                index + 1,
                4
              )}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src=""
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-sans font-medium text-midnight group-hover:text-ceylon-600 transition-colors duration-300">
                  {destination.title}
                </h3>

                <p className="text-steel font-sans text-sm lg:text-base leading-relaxed">
                  {destination.duration}
                </p>

                <p className="text-midnight/80 font-sans text-sm leading-relaxed">
                  {destination.description}
                </p>

                {/* Book Now Button */}
                <div className="pt-2 opacity-100 transform translate-y-0">
                  <Button variant="outline" size="sm">
                    Explore Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-on-scroll lg:hidden">
          <Button variant="primary" size="lg">
            Contact Us{" "}
          </Button>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-ceylon-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
