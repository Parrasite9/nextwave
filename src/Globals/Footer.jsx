// src/components/Footer.js
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useIsMobile from '../hooks/ScreenSizeUpdate';

// ICONS
import FacebookIcon from '@mui/icons-material/Facebook';

// Navigation links array
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Case Studies', path: '/#casestudy' },
  { name: 'Services', path: '/#services' },
  { name: 'Pricing', path: '/#pricing' },
  {
    name: 'Legal',
    subLinks: [
      { name: 'Terms and Conditions', path: '/terms-and-conditions' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
    ],
  },
  { name: 'Contact', path: '/#contact' },
];

const getCurrentYear = () => {
  return new Date().getFullYear();
};

function Footer() {
  const isMobile = useIsMobile();

  // Categorize links into sections
  const quickLinks = navLinks.filter(
    (link) => link.name !== 'Legal' && link.name !== 'Contact'
  );
  const supportLinks = navLinks.filter((link) => link.name === 'Contact');
  const legalLink = navLinks.find((link) => link.name === 'Legal');

  return (
    <footer className="bg-soft-navy text-white py-20">
      <div className="container mx-auto px-6">
        {isMobile ? (
          /* Mobile Layout */
          <div className="flex flex-col items-start gap-8">
            {/* Logo/Title Section */}
            <div className="w-full mb-6">
              <Link to="/">
                <img src="/images/logo/logoLight.png" alt="Logo" className="w-1/2 h-1/2" />
              </Link>
              <p className="text-white mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quis
                architecto repudiandae illo quisquam laudantium!
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="w-full mb-6">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="hover:text-sky-blue">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            {legalLink && (
              <div className="w-full mb-6">
                <h4 className="text-xl font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {legalLink.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subLink.path} className="hover:text-sky-blue">
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
                    <Link to={link.path} className="hover:text-sky-blue">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="w-full mb-6">
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
              </div>
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="flex flex-row justify-between items-start gap-8">
            {/* Logo/Title Section */}
            <div className="w-1/5 mb-6">
              <Link to="/">
                <img src="/images/logo/logoLight.png" alt="Logo" className="w-4/5 h-auto" />
              </Link>
              <p className="text-white text-sm mt-4">
                NextWave is your partner in crafting digital solutions that don’t just look good but perform. Specializing in web design, development, and growth strategies, we’re here to help businesses reach new heights. Let’s ride the next wave of success together.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="w-1/5 mb-6">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="hover:text-sky-blue">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            {legalLink && (
              <div className="w-1/5 mb-6">
                <h4 className="text-xl font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {legalLink.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subLink.path} className="hover:text-sky-blue">
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
                    <Link to={link.path} className="hover:text-sky-blue">
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
              </div>
            </div>
          </div>
        )}

        {/* Bottom Disclaimer */}
        <div className="text-center text-white text-sm mt-8 border-t border-lemon-chiffon pt-10">
          © {getCurrentYear()} WayOut Kids. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
