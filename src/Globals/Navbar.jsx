import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useIsMobile from '../hooks/ScreenSizeUpdate';

// MOBILE IMPORTS 
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Define your navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  {
    name: 'Programs',
    subLinks: [
      { name: 'Be Aware', path: '/programs/be-aware' },
      { name: 'Clean Record', path: '/programs/clean-record' },
      { name: 'Daycare Fundraiser', path: '/programs/daycare-fundraiser' },
      { name: 'Digital Steam', path: '/programs/digital-steam' },
      { name: 'Go Green', path: '/programs/go-green' },
      { name: 'I Like To Read', path: '/programs/i-like-to-read' },
      { name: 'Power Words', path: '/programs/power-words' },
      { name: 'Summer Camp', path: '/programs/summer-camp' },
    ],
  },
  { name: 'TV Show', path: '/tv-show' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];


function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleSubMenuToggle = (index) => {
    if (isMobile) {
      setActiveSubMenu(activeSubMenu === index ? null : index);
    }
  };

  const renderNavLinks = (links) => {
    // console.log("Rendering main nav links: ", links);
    return (
      <ul className={`flex ${isMobile ? 'flex-col space-y-2' : 'flex-row space-x-6 items-center'} text-white`}>
        {links.map((link, index) => {
          // console.log(`Rendering main link: ${link.name} with key: ${link.name}-${index}`);
    
          return (
            <li 
              key={`${link.name}-${index}`}  // Unique key for main list
              className="relative group py-2 md:py-0"
              onMouseEnter={() => !isMobile && link.subLinks && setActiveSubMenu(index)}
              onMouseLeave={() => !isMobile && link.subLinks && setActiveSubMenu(null)}
            >
              {/* Main Link */}
              {link.name === 'Programs' ? (
                <span 
                  onClick={() => isMobile && link.subLinks ? handleSubMenuToggle(index) : null}
                  className="text-white hover:text-aqua-blue transition duration-300 cursor-pointer"
                >
                  {link.name}
                </span>
              ) : (
                <Link 
                  to={link.path} 
                  onClick={() => isMobile && link.subLinks ? handleSubMenuToggle(index) : null}
                  className="text-white hover:text-aqua-blue transition duration-300"
                >
                  {link.name}
                </Link>
              )}
    
              {/* Sub-menu for mobile */}
              {isMobile && link.subLinks && activeSubMenu === index && (
                <ul className="space-y-2 bg-gray-50 p-2 rounded-lg shadow-lg">
                  {link.subLinks.map((subLink, subIndex) => {
                    // console.log(`Rendering sub-link: ${subLink.name} with key: ${subLink.name}-${subIndex}`);
                    return (
                      <li key={`${subLink.name}-${subLink.path}-${subIndex}`}>  {/* Ensure unique key */}
                        <Link 
                          to={subLink.path} 
                          className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  };
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <div className="bg-deep-ocean-blue shadow-md">
      {isMobile ? (
        <div className="nav__mobile-container p-4 flex justify-between items-center relative">
          {activeSubMenu === 'programs' ? (
            // When 'Programs' submenu is active, show the back arrow and only submenu
            <>
              {/* Back Arrow to go back to the main menu */}
              <ArrowBackIosIcon 
                onClick={() => setActiveSubMenu(null)} 
                className="z-50 absolute top-4 left-4"
              />
              
              {/* Full-screen overlay for Programs submenu */}
              {/* <nav className="fixed inset-0 bg-deep-ocean-blue flex flex-col justify-center items-center z-40">
                <ul className="space-y-4 ">
                  {navLinks.find(link => link.name === 'Programs').subLinks.map((subLink, subIndex) => (
                    <li key={`${subLink.name}-${subLink.path}-${subIndex}`}>
                      <Link 
                        to={subLink.path} 
                        className="text-white hover:text-blue-600 text-lg"
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav> */}

            </>
          ) : (
            // Regular mobile menu with hamburger or exit icon
            <>
              <div className='flex justify-between items-center'>
                <img src="/images/logo/logo.png" alt="Logo" className="h-12 w-auto z-50" />
              </div>

              {/* MOBILE MENU TOGGLE BUTTON */}
              {isMenuOpen ? (
                <>
                  <ClearIcon onClick={toggleMenu} className="z-50 absolute top-4 right-4" />
                  
                  <nav className="fixed inset-0 bg-deep-ocean-blue flex flex-col justify-center items-center z-40">
                    <ul className="space-y-4">
                      {navLinks.map((link, index) => (
                        <li key={`${link.name}-${index}`}> {/* Updated key */}
                          {link.name === 'Programs' ? (
                            <span 
                              onClick={() => setActiveSubMenu('programs')} 
                              className="text-gray-700 hover:text-blue-600 text-lg cursor-pointer"
                            >
                              {link.name}
                            </span>
                          ) : (
                            <Link 
                              to={link.path} 
                              onClick={toggleMenu} 
                              className="text-white hover:text-blue-600 text-lg"
                            >
                              {link.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>


                    {/* DONATE BUTTON CONTAINER  */}
                    <div className='donate__button-container mt-10 z-50'>
                      <button className='btn-cta px-20'>Donate</button>
                    </div>

                  </nav>

                </>
              ) : (
                <MenuIcon onClick={toggleMenu} className="z-50 text-white" />
              )}
            </>
          )}
        </div>
      ) : (
        // DESKTOP CONTAINER 
        <div className='nav__desktop-container mx-auto px-10'>
          <nav className="flex items-center py-4 justify-between">
            
            {/* LOGO CONTAINER  */}
            <div className="logo__container">
              <Link to="/">
                <img src="/images/logo/logo.png" alt="Logo" className="h-13 w-auto" />
              </Link>
            </div>

            {/* NAV LINKS CONTAINER  */}
            <div className='navlinks__container flex justify-center items-center'>
              {renderNavLinks(navLinks)}
            </div>

            {/* DONATE BUTTON CONTAINER  */}
            <div className='donate__button-container'>
              {/* <button className='bg-sea-green text-white px-8 py-2 rounded-md'>Donate</button> */}
              <button className='btn-cta'>Donate</button>

            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
