import React, { useState, useEffect } from 'react';

const FORM_VARIANTS = [
    {
      id: 1,
      headline: "Unlock Your Free Google Business Report! 📊",
      description: "Discover insights to optimize your Google Business profile and drive more traffic.",
      cta: "Get My Free Report",
      image: "/images/form/analytics.png",
    },
    {
      id: 2,
      headline: "Get a Free Audit of Your Google Business Profile!",
      description: "Sign up to receive a personalized report on how to boost your online presence.",
      cta: "Show Me the Insights",
      image: "/images/form/metric.png",
    },
    {
      id: 3,
      headline: "Unlock Your Free Google Business Report! 📊",
      description: "Sign up to receive personalized insights to grow your business online.",
      cta: "Get My Free Report",
      image: null,
    },
    {
      id: 4,
      headline: "Get a Free Audit of Your Google Business Profile!",
      description: "Receive a tailored report to optimize your online visibility.",
      cta: "Get My Free Report",
      image: "/images/form/searching.png",
    },
    {
      id: 5,
      headline: "Unlock Insights to Drive Growth 🚀",
      description: "Get a custom Google report to enhance your online strategy.",
      cta: "Show Me the Insights",
      image: "/images/form/progress.png",
    },
  ];

function Signup() {
  const [step, setStep] = useState(1);
  const [variant, setVariant] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    fname: '',
    lname: '',
    businessName: '',
    website: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const randomVariant = FORM_VARIANTS[Math.floor(Math.random() * FORM_VARIANTS.length)];
    setVariant(randomVariant);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.fname) newErrors.fname = 'First Name is required';
    if (!formData.lname) newErrors.lname = 'Last Name is required';
    if (!formData.businessName) newErrors.businessName = 'Business Name is required';
    if (!formData.website) newErrors.website = 'Website is required. Please format as http://www.example.com';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateStep2()) {
      // Identify the user in Klaviyo
      window._learnq.push(['identify', {
        '$email': formData.email,
        '$first_name': formData.fname,
        '$last_name': formData.lname,
        'Business Name': formData.businessName,
        'Website': formData.website,
      }]);
  
      // Track the form submission event
      window._learnq.push(['track', 'Form Submitted', {
        'Form Name': 'Signup Form',
        'Variant ID': variant?.id || 'Default',
      }]);
  
      // Optional: Subscribe the user to a specific Klaviyo list
      subscribeToKlaviyoList();
  
      console.log("Form Submitted:", formData);
      setStep(3);
    }
  };

  const subscribeToKlaviyoList = async () => {
    try {
      const response = await fetch('https://a.klaviyo.com/api/v2/list/Xd7TLu/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: 'pk_62711d1b60fb52f5c59ee936bfb7c9fe72',
          profiles: [{
            email: formData.email,
            first_name: formData.fname,
            last_name: formData.lname,
            'Business Name': formData.businessName,
            'Website': formData.website,
          }],
        }),
      });
  
      const data = await response.json();
      console.log('Successfully subscribed:', data);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };
  
  

  return (
    <div className="signup__container bg-lemon-chiffon py-12 px-6 sm:px-10 lg:px-16 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        {/* Step 1 */}
        {variant && step === 1 && (
          <div className={`${variant.image ? 'lg:grid lg:grid-cols-2 gap-8' : 'flex flex-col'}`}>
            {variant.image && (
              <div className="flex items-center justify-center">
                <img src={variant.image} alt="Form Image" className="w-full h-auto object-cover rounded-lg" />
              </div>
            )}
            <form onSubmit={handleNextStep} className={`${variant.image ? '' : 'w-full'} space-y-6`}>
              <h2 className="text-3xl font-bold text-gray-800">{variant.headline}</h2>
              <p className="text-gray-600">{variant.description}</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                {variant.cta}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                By signing up, you agree to receive marketing emails from us. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Tell Us About Your Business</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none"
              />
              {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none"
              />
              {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
            </div>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            />
            {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Business Website (e.g., http://www.example.com)"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            />
            {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Submit
            </button>
          </form>
        )}

        {/* Success Message */}
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-bright-teal">Empowering Your Next Move 🌐</h2>
            <p className="mt-4 text-gray-700">
              You’re one step closer to gaining the insights needed to drive real growth. Just a bit more info, and we'll get your custom report ready!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
