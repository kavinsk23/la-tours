import React, { useState, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cloud-light text-midnight-dark shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-midnight-dark hover:text-ceylon-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
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

          {/* Left side navigation items - hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Destination</NavLink>
            <NavLink href="#">TravelPakage</NavLink>
            <NavLink href="#">Galery</NavLink>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <h1 className="text-2xl sm:text-3xl font-sans font-black text-ceylon-700 tracking-widest uppercase">
              LA TOURS
            </h1>
          </div>

          {/* Right side navigation items - hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#">Gallery</NavLink>
            <NavLink href="#">Tours</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Account</NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="#">Home</MobileNavLink>
              <MobileNavLink href="#">Destination</MobileNavLink>
              <MobileNavLink href="#">TravelPakage</MobileNavLink>
              <MobileNavLink href="#">Galery</MobileNavLink>
              <MobileNavLink href="#">Gallery</MobileNavLink>
              <MobileNavLink href="#">Tours</MobileNavLink>
              <MobileNavLink href="#">About</MobileNavLink>
              <MobileNavLink href="#">Pricing</MobileNavLink>
              <MobileNavLink href="#">Account</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-lg font-sans font-medium hover:text-ceylon-500 transition-colors duration-300"
  >
    {children}
  </a>
);

// Reusable MobileNavLink component
const MobileNavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-midnight-dark hover:text-ceylon-500 hover:bg-ceylon-50"
  >
    {children}
  </a>
);

export default Navbar;
