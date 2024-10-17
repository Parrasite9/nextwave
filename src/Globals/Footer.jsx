// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import useIsMobile from '../hooks/ScreenSizeUpdate';

// ICONS 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
// Navigation links array
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

const getCurrentYear = () => {
  return new Date().getFullYear();
};

function Footer() {
  const isMobile = useIsMobile();

  // Categorize links into sections
  const quickLinks = navLinks.filter(
    (link) => link.name !== 'Programs' && link.name !== 'Contact'
  );
  const supportLinks = navLinks.filter((link) => link.name === 'Contact');
  const programsLink = navLinks.find((link) => link.name === 'Programs');

  return (
    <footer className="bg-darkGreen text-white py-16">
      <div className="container mx-auto px-6">
        {isMobile ? (
          /* Mobile Layout */
          <div className="flex flex-col items-start gap-8">
            {/* Logo/Title Section */}
            <div className="w-full mb-6">
              <img src='/logo.png' alt="Logo" className="w-1/2 h-1/2" />
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quis architecto repudiandae illo quisquam laudantium!
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="w-full mb-6">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="hover:text-sunnyYellow">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Section */}
            {programsLink && (
              <div className="w-full mb-6">
                <h4 className="text-xl font-bold mb-4">Programs</h4>
                <ul className="space-y-2">
                  {programsLink.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subLink.path} className="hover:text-sunnyYellow">
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Support Section */}
            <div className="w-full mb-6">
              <h4 className="text-xl font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="hover:text-sunnyYellow">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="w-1/5 mb-6">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/WayOutKids/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/rodneyraccoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://twitter.com/rodneyraccoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <XIcon />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCM7cVq9o39nF-m_vwqxQkiw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="flex flex-row justify-between items-start gap-8">
            {/* Logo/Title Section */}
            <div className="w-1/5 mb-6">
              {/* <h4 className="text-xl font-bold mb-4">WayOut Kids</h4> */}
              <Link to='/'>
                <img src='/logo.png' alt="Logo" className="w-4/5 h-auto" />
              </Link>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea harum rem at, repellat voluptate.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="w-1/5 mb-6">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="hover:text-sunnyYellow">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Section */}
            {programsLink && (
              <div className="w-1/5 mb-6">
                <h4 className="text-xl font-bold mb-4">Programs</h4>
                <ul className="space-y-2">
                  {programsLink.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subLink.path} className="hover:text-sunnyYellow">
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Support Section */}
            <div className="w-1/5 mb-6">
              <h4 className="text-xl font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="hover:text-sunnyYellow">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="w-1/5 mb-6">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/WayOutKids/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/rodneyraccoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://twitter.com/rodneyraccoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <XIcon />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCM7cVq9o39nF-m_vwqxQkiw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Disclaimer */}
        <div className="text-center text-white text-sm mt-8 border-t border-sunnyYellow pt-4">
          © {getCurrentYear()} WayOut Kids. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
