import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-ceylon-500 hover:bg-ceylon-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
    </button>
  );
};

export default ScrollToTop;
