import React, { useState } from 'react';

function PricingTable() {
  const [showProjectBased, setShowProjectBased] = useState(true);

  const handleToggle = (e) => {
    setShowProjectBased(e.target.id === 'project-based');
  };

  return (
    <div id='pricing'>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Professional Web Services Tailored to Your Needs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide comprehensive web design, development, and digital marketing solutions to help your business thrive online.
            </p>
          </div>

          {/* Plan Toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="project-based"
                  name="pricing-plans"
                  className="mr-2"
                  checked={showProjectBased}
                  onChange={handleToggle}
                />
                <label
                  htmlFor="project-based"
                  className="cursor-pointer text-lg font-medium text-gray-700"
                >
                  Project-Based Services
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bundle-packages"
                  name="pricing-plans"
                  className="mr-2"
                  checked={!showProjectBased}
                  onChange={handleToggle}
                />
                <label
                  htmlFor="bundle-packages"
                  className="cursor-pointer text-lg font-medium text-gray-700"
                >
                  Bundle Packages
                </label>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          {showProjectBased ? (
            /* Project-Based Packages */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Essential Plan */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl">👋</span>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Essential</h3>
                    <p className="text-gray-500">
                      Perfect for launching a simple, professional online presence.
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">$1000</span>
                    <span className="ml-1 text-gray-500">Starting Rate</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Book a Consultation
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  Ideal for a 3-section landing page and essential features.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Responsive Design</span>
                  </li>
                  {/* Repeat for other features */}
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Basic SEO Setup</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Contact Form Integration</span>
                  </li>
                  {/* Add more features as needed */}
                </ul>
              </div>

              {/* Professional Plan */}
              <div className="bg-white shadow-xl rounded-lg p-6 border-2 border-blue-600 relative">
                <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm px-2 py-1 rounded-md">
                  Most Popular
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-2xl">💪</span>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Professional</h3>
                    <p className="text-gray-500">
                      A comprehensive package for growing businesses.
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">$3000</span>
                    <span className="ml-1 text-gray-500">Starting Rate</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Book a Consultation
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  Ideal for businesses ready to expand their digital reach.
                </p>
                <ul className="mt-6 space-y-4">
                  {/* List of features */}
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Custom Web Design</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Advanced SEO & Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Blog & Social Media Integration</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Monthly Maintenance</span>
                  </li>
                  {/* Add more features as needed */}
                </ul>
              </div>

              {/* Custom Solutions Plan */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl">🚀</span>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Custom Solutions</h3>
                    <p className="text-gray-500">
                      Tailored for businesses with unique needs.
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">Contact Us</span>
                    <span className="ml-1 text-gray-500">Schedule a Call</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  No Pressure Zoom Call
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  Perfect for custom builds, e-commerce, and large projects.
                </p>
                <ul className="mt-6 space-y-4">
                  {/* List of features */}
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">E-commerce Integration</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Custom App Development</span>
                  </li>
                  {/* Add more features as needed */}
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Advanced SEO & Marketing</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path for checkmark */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Cloud Deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            /* Bundle Packages */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Bundle */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl">🚀</span>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Starter Bundle</h3>
                    <p className="text-gray-500">
                      Ideal for new businesses establishing an online presence.
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      $2,500 <span className="text-sm font-medium text-gray-500">One-Time</span>
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      $1,750/month <span className="text-sm font-medium text-gray-500">for 12 months</span>
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Get Started
                </a>
                <ul className="mt-6 space-y-4">
                  {/* List of features */}
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Custom 5-page website</span>
                  </li>


                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Email Marketing Setup</span>
                  </li>


                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Content Creation</span>
                  </li>

                  
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Basic SEO Setup</span>
                  </li>

                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Maintenance & Support</span>
                  </li>

                  {/* Continue adding features */}
                </ul>
              </div>

              {/* Growth Bundle */}
              <div className="bg-white shadow-xl rounded-lg p-6 border-2 border-blue-600 relative">
                <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm px-2 py-1 rounded-md">
                  Most Popular
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-2xl">💼</span>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Growth Bundle</h3>
                    <p className="text-gray-500">
                      Perfect for growing businesses expanding their digital reach.
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      $3,000 <span className="text-sm font-medium text-gray-500">One-Time</span>
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      $3,550/month <span className="text-sm font-medium text-gray-500">for 12 months</span>
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Get Started
                </a>
                <ul className="mt-6 space-y-4">
                  {/* List of features */}
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Custom 10-page website</span>
                  </li>
                  {/* Continue adding features */}
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Email Marketing Setup</span>
                  </li>


                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Content Creation</span>
                  </li>

                  
                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Advanced SEO Setup</span>
                  </li>

                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Social Media Management</span>
                  </li>


                  <li className="flex items-center">
                    {/* SVG Icon */}
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG Path */}
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">Maintenance & Support</span>
                  </li>


                </ul>
              </div>

                {/* Custom Bundle */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex items-center mb-4">
                        <span className="text-2xl">✨</span>
                        <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">Custom Bundle</h3>
                        <p className="text-gray-500">
                            Tailored solutions to fit your unique business needs. Choose the services you want and leave the ones you don't.
                        </p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div>
                            <p className="text-2xl font-bold text-gray-900">
                                Starting at $3,000 <span className="text-sm font-medium text-gray-500">One-Time</span>
                            </p>
                            <p className="text-xl font-bold text-gray-900">
                                Custom Pricing <span className="text-sm font-medium text-gray-500">per month</span>
                            </p>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Contact Us
                    </a>
                    <p className="mt-4 text-sm text-gray-500">
                        Build a package that's perfect for your business.
                    </p>
                    <ul className="mt-6 space-y-4">
                        {/* List of possible services */}
                        <li className="flex items-center">
                            {/* SVG Icon */}
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                {/* SVG Path for placeholder icon */}
                                <path
                                    className="w-5 h-5 text-yellow-500"
                                    fillRule="evenodd"
                                    d="M4 3a1 1 0 011-1h10a1 1 0 011 1v14l-6-3-6 3V3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="ml-2 text-gray-700">Custom Website Design</span>
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-5 h-5 text-orange-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                {/* SVG Path */}
                                <path
                                fillRule="evenodd"
                                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6H2V5zm0 8h16v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"
                                clipRule="evenodd"
                                />
                            </svg>
                            <span className="ml-2 text-gray-700">Email Marketing</span>
                            </li>
                            <li className="flex items-center">
                            <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                {/* SVG Path */}
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11v2H9v-2h2zm0-8v6H9V5h2z" />
                            </svg>
                            <span className="ml-2 text-gray-700">Digital Advertising</span>
                        </li>
                        <li className="flex items-center">
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                {/* SVG Path */}
                                <path                       
                                    className="w-5 h-5 text-purple-500"
                                    d="M2.003 5.884L10 2l7.997 3.884A1 1 0 0118 6.77v6.46a1 1 0 01-.555.894L10 18l-7.445-3.876A1 1 0 012 13.23V6.77a1 1 0 01.003-.886z" 
                                />
                            </svg>
                            <span className="ml-2 text-gray-700">Social Media Management</span>
                        </li>
                        {/* Add more services as options */}
                    </ul>
                </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default PricingTable;
