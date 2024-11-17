import React, { useState } from 'react';
import { Signup } from '../Components';

function GetWebsite() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Page Header */}
      <h1 className="text-center text-4xl font-bold py-8">Let’s Update Your Information</h1>
      
      {/* Signup Form */}
      <Signup onFormSubmit={handleFormSubmit} />

      {/* Booking Section */}
      {formSubmitted && (
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 mt-8">
          {/* Success Message */}
          <div className="flex-1 text-center lg:text-left bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-bright-teal">Empowering Your Next Move 🌐</h2>
            <p className="mt-4 text-gray-700">
              You’re one step closer to gaining the insights needed to drive real growth.
              Please check your email and confirm your subscription to receive your report.
              If you don’t see it, check your spam folder!
            </p>
          </div>

          {/* Booking Iframe */}
          <div className="flex-1 mt-8 lg:mt-0 text-center">
            <p className="text-xl mb-4">Book your FREE strategy call below!</p>
            <iframe
              src="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call?embed=true"
              frameBorder="0"
              className="w-full h-[700px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GetWebsite;
