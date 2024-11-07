import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useIsMobile from '../hooks/ScreenSizeUpdate';

// Icons for mobile menu
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

// Navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Case Studies', path: '/#casestudy' },
  { name: 'Services', path: '/#services' },
  { name: 'Pricing', path: '/#pricing' },
  { name: 'Contact', path: '/#contact' },
];

function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu and lock body scroll on mobile when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isMobile ? 'hidden' : 'auto';
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavLinks = (links) => (
    <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'flex-row space-x-6'} items-center`}>
      {links.map((link, index) => (
        <li key={index} className="py-2 md:py-0">
          <Link
            smooth
            to={link.path}
            onClick={() => isMobile && setIsMenuOpen(false)}
            className="hover:text-bright-teal transition duration-300"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="">
      {isMobile ? (
        // Mobile Navbar
        <div className="p-4 flex justify-between items-center">
          <img src="/images/logo/logoDark.png" alt="Logo" className="h-auto w-1/3" />
          
          {/* Menu Toggle Button */}
          {isMenuOpen ? (
            <>
              <ClearIcon onClick={toggleMenu} className="absolute text-yale-blue top-4 right-4 z-50" />
              
              {/* Mobile menu modal */}
              <div className="fixed top-16 left-0 w-full h-full bg-cool-white z-40 flex flex-col justify-center items-center py-8 space-y-6">
                {renderNavLinks(navLinks)}
                <button className="btn-cta">Request A Proposal</button>
              </div>
            </>
          ) : (
            <MenuIcon onClick={toggleMenu} className="text-yale-blue" />
          )}
        </div>
      ) : (
        // Desktop Navbar
        <div className="mx-auto px-10">
          <nav className="flex items-center py-4 justify-between">
            {/* Logo */}
            <Link to="/">
              <img src="/images/logo/logoDark.png" alt="Logo" className="h-13 w-auto" />
            </Link>

            {/* Nav Links */}
            {renderNavLinks(navLinks)}

            {/* CTA  Button */}
            <button className="btn-cta">Request A Proposal</button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
