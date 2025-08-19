import React, { useState, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cloud-light text-midnight-dark shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
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

          {/* Left side navigation items - hidden on mobile */}
          <div className="hidden md:flex lg:space-x-8 md:space-x-4">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Destination</NavLink>
            <NavLink href="#">Travel Package</NavLink>
            <NavLink href="#">Gallery</NavLink>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-black text-ceylon-700 tracking-wide sm:tracking-widest uppercase px-4">
              LA TOURS
            </h1>
          </div>

          {/* Right side navigation items - hidden on mobile */}
          <div className="hidden md:flex lg:space-x-8 md:space-x-4">
            <NavLink href="#">Tours</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Why Us</NavLink>
            <NavLink href="#">Quick Links</NavLink>
          </div>

          {/* Mobile overlay to close menu */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-cloud-light border-t border-ceylon-200 shadow-lg z-50">
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
                  Travel Package
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
      </div>
    </nav>
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

export default Navbar;
