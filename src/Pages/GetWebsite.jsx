import React, { useState } from 'react';
import { Signup } from '../Components';

function GetWebsite() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div>
      <h1 className='text-center text-4xl py-8'>Let’s Update Your Information</h1>
      <Signup onFormSubmit={handleFormSubmit} />

      {formSubmitted && (
        <div className="text-center mt-8">
          <p className="text-xl">Book your FREE strategy call below!</p>
          <iframe
            src="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call?embed=true"
            frameBorder="0"
            style={{ width: '750px', height: '560px' }}
            className="mt-4"
          />
        </div>
      )}
    </div>
  );
}

export default GetWebsite;
