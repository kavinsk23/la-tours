import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import whyUsImg from "../../assets/images/whyUs.jpg";
import Button from "../common/Button";

const WhyChooseUs: React.FC = () => {
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

  const menuItems = [
    {
      title: "Jaw-Dropping Adventures That Blow Your Mind",
      description:
        "Experience spine-tingling thrills and breathtaking moments that'll have you texting everyone back home!",
    },
    {
      title: "Authentic Local Secrets Tourists Never Find",
      description:
        "Discover hidden gems and insider spots that only true Sri Lankan experts know about - prepare to be amazed!",
    },
    {
      title: "Instagram-Worthy Paradise at Every Turn",
      description:
        "Capture stunning photos that'll make your friends green with envy and your feed absolutely irresistible!",
    },
    {
      title: "Stress-Free Planning That Just Works",
      description:
        "Sit back and relax while we handle every single detail - from flights to fine dining, we've got you covered!",
    },
    {
      title: "VIP Treatment That Makes You Feel Special",
      description:
        "Enjoy exclusive access, premium experiences, and red-carpet service that transforms ordinary trips into luxury escapes!",
    },
  ];

  return (
    <section id="whyus" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div className="flex items-center mb-12 lg:mb-16 animate-on-scroll">
          <div className="w-16 h-px bg-ceylon-500 mr-6"></div>
          <h2 className="text-sm font-sans font-semibold text-midnight tracking-wider uppercase">
            WHY CHOOSE US
          </h2>
        </div>

        {/* Title Section */}
        <div className="flex items-center justify-between mb-12 lg:mb-16 animate-on-scroll">
          <div>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-sans font-light text-midnight leading-tight">
              Unmatched Travel{" "}
              <span className="text-steel font-light">Expertise</span>
              <br />
              <span className="text-steel font-light text-3xl lg:text-4xl xl:text-5xl">
                at LA Tours
              </span>
            </h3>
          </div>
          <div className="lg:flex hidden">
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 lg:mb-24">
          {/* Left Side - Image and Description */}
          <div className="lg:order-1 animate-on-scroll-left">
            <div className="relative mb-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={whyUsImg}
                  alt="Traveler hiking through Sri Lankan mountains"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ceylon-100 rounded-2xl -z-10"></div>
            </div>

            <div className="max-w-xl">
              <p className="text-lg font-sans leading-relaxed text-midnight">
                At LA Tours, we offer{" "}
                <span className="font-bold text-ceylon-600">
                  personalized travel solutions
                </span>{" "}
                tailored to your unique needs. Our expert team ensures a
                seamless experience, from planning to booking.
              </p>
            </div>
          </div>

          {/* Right Side - Menu Items */}
          <div className="lg:order-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`group cursor-pointer py-2 lg:p-5 rounded-xl hover:bg-slate-50 transition-all duration-300 animate-on-scroll-right animate-stagger-${Math.min(
                  index + 1,
                  4
                )}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg lg:text-xl font-sans font-medium text-midnight group-hover:text-ceylon-600 transition-colors duration-300 leading-snug">
                    {item.title}
                  </h4>
                  <ArrowRight className="w-5 h-5 text-steel group-hover:text-ceylon-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-3" />
                </div>

                <p className="text-steel text-sm lg:text-base font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Learn More Button */}
        <div className="lg:hidden text-center animate-on-scroll">
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

        {/* Bottom decorative line */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-ceylon-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
