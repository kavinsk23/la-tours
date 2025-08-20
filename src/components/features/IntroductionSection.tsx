import React, { useEffect } from "react";
import logoWithSlogan from "../../assets/images/logoWithSlogan.png";
import Button from "../common/Button";

const IntroductionSection: React.FC = () => {
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

  const stats = [
    {
      number: "100%",
      label: "Satisfaction Rate",
      description: "Customer satisfaction",
    },
    {
      number: "100+",
      label: "Guided Tours Annually",
      description: "Tours completed yearly",
    },
    {
      number: "100+",
      label: "Destinations",
      description: "Unique locations",
    },
    {
      number: "200+",
      label: "Positive Reviews",
      description: "Happy customers",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div className="flex items-center mb-12 lg:mb-16 animate-on-scroll">
          <div className="w-16 h-px bg-ceylon-500 mr-6"></div>
          <h2 className="text-sm font-sans font-semibold text-midnight tracking-wider uppercase">
            Introduction
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Text Content with Left Animation */}
          <div className="lg:order-1 animate-on-scroll-left">
            <div className="max-w-xl">
              <p className="text-lg lg:text-xl font-sans leading-relaxed text-midnight">
                <span className="font-bold text-ceylon-600">
                  Unlock the world
                </span>{" "}
                with LA TOURS - where every journey becomes an epic story! We
                don't just plan trips, we craft{" "}
                <span className="text-ceylon-600 font-medium ">
                  soul-stirring adventures
                </span>{" "}
                that linger in your heart forever.
                <br />
                <br />
                From sun-kissed beach paradises to{" "}
                <span className="text-ceylon-600 font-medium">
                  authentic cultural immersions
                </span>
                , our expert designers create tailor-made escapes that thrill,
                relax, and transform. Why settle for ordinary when you can
                experience the{" "}
                <span className="font-semibold text-midnight">
                  extraordinary?
                </span>
                <br />
                <br />
                <span>
                  Your dream vacation is just one decision away...
                </span>{" "}
                Let's make it unforgettable!
              </p>
              <Button
                className="mt-4"
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
                Contact Us{" "}
              </Button>
            </div>
          </div>

          {/* Image with Right Animation */}
          <div className="lg:order-2 animate-on-scroll-right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={logoWithSlogan}
                  alt="Beautiful scenic landscape with lake and mountains"
                  className="w-full h-full object-cover bg-gradient-to-br from-ceylon-200 via-ceylon-300 to-ceylon-400"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ceylon-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Statistics with Stagger Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center lg:text-left animate-on-scroll-scale animate-stagger-${
                index + 1
              }`}
            >
              <div className="mb-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight mb-1">
                  {stat.number}
                </h3>
                <p className="text-sm font-sans font-medium text-ceylon-600 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-steel hidden sm:block">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-ceylon-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
