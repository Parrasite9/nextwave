import React, { useState, useEffect } from 'react';

function CollectWebsiteURL() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    businessName: '',
    website: '',
  });
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    // Extract the token from the URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      // Fetch the email associated with the token
      fetch('<API_INVOKE_URL>/get-email?token=' + encodeURIComponent(token))
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setFormData((prev) => ({ ...prev, email: data.email }));
            setTokenValid(true);
          } else {
            console.error('Invalid or expired token');
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching email:', error);
          setLoading(false);
        });
    } else {
      console.error('No token provided');
      setLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.businessName) newErrors.businessName = 'Business Name is required';
    if (!formData.website) newErrors.website = 'Website is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Update the user's profile in Klaviyo
      updateKlaviyoProfile();
    }
  };

  const updateKlaviyoProfile = async () => {
    try {
      const response = await fetch('<API_INVOKE_URL>/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Profile updated successfully:', data);
        // Display success message or redirect as needed
      } else {
        console.error('Error updating profile:', data.error);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!tokenValid) {
    return <p>Invalid or expired link.</p>;
  }

  return (
    <div className="update-info__container">
      <h2>Update Your Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Email field is hidden */}
        <input type="hidden" name="email" value={formData.email} />

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div>
          <label>Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
          />
          {errors.businessName && <p className="error">{errors.businessName}</p>}
        </div>

        <div>
          <label>Website URL</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          {errors.website && <p className="error">{errors.website}</p>}
        </div>

        <button type="submit">Update Information</button>
      </form>
    </div>
  );
}

export default CollectWebsiteURL;
