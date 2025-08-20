import React, { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import Button from "../common/Button";
import CTAHeroImg from "../../assets/images/college.jpg";

const HeroCTASection: React.FC = () => {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={CTAHeroImg}
          alt="Sri Lankan landscape with mountains and lakes"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Fade Gradient Overlay - Top to Middle */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-midnight/70 via-midnight/40 to-transparent"></div>
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-light text-white leading-tight mb-6">
              Begin Your Exciting{" "}
              <span className="text-ceylon-200 font-light">Naturally</span>
              <br />
              <span className="text-ceylon-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Travel Experience Today
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-on-scroll animate-stagger-1">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-sans leading-relaxed mb-12 max-w-3xl mx-auto">
              Start your{" "}
              <span className="text-ceylon-200 font-medium">Naturally</span>{" "}
              adventure today. Explore stunning landscapes and enjoy tailored,
              expert-guided experiences.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-on-scroll animate-stagger-2 mb-16">
            <Button
              variant="primary"
              size="xl"
              className="bg-white/90 text-midnight hover:bg-white hover:scale-110 border-2 border-white/20 hover:border-ceylon-300 shadow-2xl hover:shadow-ceylon-500/30"
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
              Book Now{" "}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-on-scroll animate-stagger-3">
            <div className="inline-flex flex-col items-center gap-3">
              <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
              <ArrowDown className="w-6 h-6 text-white/70 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      {/* Additional Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-ceylon-300/30 rounded-full animate-float z-20"></div>
      <div
        className="absolute top-1/3 right-16 w-6 h-6 bg-white/20 rounded-full animate-float z-20"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-ceylon-400/40 rounded-full animate-float z-20"
        style={{ animationDelay: "2s" }}
      ></div>
      {/* Bottom fade to next section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#fff] to-transparent z-15"></div>{" "}
    </section>
  );
};

export default HeroCTASection;
