import React, { useState, ReactNode } from "react";
import { Facebook, Instagram, MessageCircle, Send } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/19N5DwSrrG/",
      icon: Facebook,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/la_tours_and_scooter_rental?igsh=b3N6dDVtOTltczVw",
      icon: Instagram,
      color: "hover:text-pink-600",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/qr/CZCRXE7A5DLSM1",
      icon: MessageCircle,
      color: "hover:text-green-600",
    },
    {
      name: "Telegram",
      href: "#",
      icon: Send,
      color: "hover:text-blue-500",
    },
    {
      name: "Google",
      href: "https://maps.app.goo.gl/bzC4s5TuzUWfQLAF6",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      ),
      color: "hover:text-red-600",
    },
    {
      name: "TripAdvisor",
      href: "https://www.tripadvisor.com/ShowUserReviews-g1027209-d32762071-r994923936-La_Tours-Hambantota_Tangalle_Southern_Province.html",
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 1.892c-1.077 1.405-1.717 3.157-1.717 5.068 0 4.628 3.792 8.392 8.449 8.392 2.374 0 4.521-.98 6.058-2.559 1.537 1.579 3.684 2.559 6.058 2.559 4.657 0 8.449-3.764 8.449-8.392 0-1.911-.64-3.663-1.717-5.068L24 6.648h-4.361c-2.307-1.569-4.975-2.353-7.645-2.353h.012zM8.695 8.72c2.236 0 4.048 1.792 4.048 4.003 0 2.211-1.812 4.003-4.048 4.003-2.236 0-4.048-1.792-4.048-4.003 0-2.211 1.812-4.003 4.048-4.003zm6.61 0c2.236 0 4.048 1.792 4.048 4.003 0 2.211-1.812 4.003-4.048 4.003-2.236 0-4.048-1.792-4.048-4.003 0-2.211 1.812-4.003 4.048-4.003zM8.695 10.12c-1.381 0-2.498 1.109-2.498 2.478s1.117 2.478 2.498 2.478c1.381 0 2.498-1.109 2.498-2.478s-1.117-2.478-2.498-2.478zm6.61 0c-1.381 0-2.498 1.109-2.498 2.478s1.117 2.478 2.498 2.478c1.381 0 2.498-1.109 2.498-2.478s-1.117-2.478-2.498-2.478z" />
        </svg>
      ),
      color: "hover:text-green-700",
    },
  ];

  return (
    <footer id="footer" className="bg-cloud text-midnight-dark shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        {/* Top Section - Same structure as navbar */}
        <div className="flex items-center justify-between h-14 sm:h-16 py-12 lg:py-16">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-midnight-dark hover:text-ceylon-500 focus:outline-none p-2 rounded-md hover:bg-ceylon-50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Left side - Tagline (hidden on mobile) */}
          <div className="hidden md:flex lg:space-x-8 md:space-x-4 flex-col">
            <h3 className="text-lg lg:text-2xl font-sans font-light text-midnight leading-tight">
              Explore Nature's <span className="text-steel">Wonders</span>
              <br />
              <span className="text-steel">with Expert Guidance</span>
            </h3>
          </div>

          {/* Center logo - Same as navbar */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-black text-ceylon-700 tracking-wide sm:tracking-widest uppercase px-4">
              LA TOURS
            </h1>
          </div>

          {/* Right side - Contact info (hidden on mobile) */}
          <div className="hidden md:flex lg:space-x-8 md:space-x-4 flex-col text-right">
            <div className="space-y-1 mb-1">
              <p className="text-midnight font-sans text-sm">Hambantota </p>
              <p className="text-midnight font-sans text-sm">Sri Lanka</p>
            </div>
            <p className="text-midnight font-sans text-sm font-medium">
              <a href="tel:+94768668109">(+94) 76 866 8109</a>
            </p>
          </div>

          {/* Mobile overlay to close menu */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

        {/* Contact Info & Tagline - Always visible on mobile */}
        <div className="md:hidden py-6 space-y-4">
          {/* Contact Info Mobile */}
          <div className="space-y-1 px-3 py-3 bg-ceylon-50 rounded-lg">
            <div className="space-y-1 mb-1">
              <p className="text-midnight font-sans text-sm">Hambantota </p>
              <p className="text-midnight font-sans text-sm">Sri Lanka</p>
            </div>
            <p className="text-midnight font-sans text-sm font-medium">
              <a href="tel:+94768668109">(+94) 76 866 8109</a>
            </p>
          </div>

          {/* Tagline Mobile */}
          <div className="px-3 py-3">
            <h3 className="text-base font-sans font-light text-midnight leading-tight">
              Explore Nature's <span className="text-steel">Wonders</span> with{" "}
              <span className="text-steel">Expert Guidance</span>
            </h3>
          </div>
        </div>

        {/* Mobile menu - Same structure as navbar */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-cloud border-t border-ceylon-200 shadow-lg z-50">
            <div className="px-3 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {/* Main Navigation */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-ceylon-600 uppercase tracking-wide px-3 py-1 border-b border-ceylon-100 mb-2">
                  Main Menu
                </div>
                <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
                  Destination
                </MobileNavLink>
                <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
                  Vehicle Rental
                </MobileNavLink>
                <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
                  Gallery
                </MobileNavLink>
              </div>

              {/* Secondary Navigation */}
              <div className="space-y-1 pt-3 border-t border-ceylon-100">
                <div className="text-xs font-semibold text-ceylon-600 uppercase tracking-wide px-3 py-1 mb-2">
                  Quick Access
                </div>
                <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
                  Tours
                </MobileNavLink>
                <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
                  Pricing
                </MobileNavLink>
                <MobileNavLink href="#" onClick={() => setIsOpen(false)}>
                  Account
                </MobileNavLink>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation - Visible only on desktop */}
        <div className="hidden md:flex justify-center py-8">
          <nav className="flex space-x-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Destination</NavLink>
            <NavLink href="#"> Vehicle Rental</NavLink>
            <NavLink href="#">Gallery</NavLink>
            <NavLink href="#">Tours</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Account</NavLink>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center py-8">
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-steel ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                  aria-label={social.name}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 pb-6 border-t border-steel/20">
          <p className="text-midnight font-sans text-sm mb-4 lg:mb-0">
            Website by{" "}
            <a
              href="https://www.kavinsk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ceylon-600 underli hover:text-ceylon-700 transition-colors duration-300 font-medium"
            >
              Kavin SK.
            </a>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Reusable NavLink component for desktop
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-sm lg:text-base font-sans font-medium text-midnight-dark hover:text-ceylon-500 transition-colors duration-300 relative group py-2 text-nowrap"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ceylon-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// Reusable MobileNavLink component
const MobileNavLink: React.FC<NavLinkProps & { onClick?: () => void }> = ({
  href,
  children,
  onClick,
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-3 py-3 rounded-lg text-base font-medium text-midnight-dark hover:text-ceylon-500 hover:bg-ceylon-50 transition-all duration-200 active:bg-ceylon-100"
  >
    {children}
  </a>
);

export default Footer;
