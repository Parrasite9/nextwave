import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import InsightsIcon from '@mui/icons-material/Insights';

const Services = () => {
  return (
    <div className="services__container">
      <div className="grid grid-cols-1 md:grid-cols-2 px-8">
        {/* Text Container */}
        <div className="order-1 flex flex-col justify-center py-4 md:px-8 md:py-8">
          <h3 className="mt-10 text-bright-teal font-semibold xl:text-xl">
            Online Presence & Visibility
          </h3>
          <h2 className="font-bold text-2xl mb-8 xl:text-3xl">
            Optimizing Your Reach for Maximum Impact
          </h2>
          <p className="mb-10">
            At NextWave, we use proven digital strategies to amplify your online presence.
            From SEO to data-driven content creation, we help you reach a wider audience,
            attract valuable traffic, and convert visitors into loyal customers.
          </p>

          {/* Icons and Text Grid */}
          <div className="grid grid-cols-5 grid-rows-2 gap-0 xl:flex">
            {/* Icon 1 */}
            <div className="row-start-1 col-start-1 flex items-center justify-center">
              <div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
                <ScreenSearchDesktopIcon
                  className="text-white text-2xl"
                  style={{ width: '30px', height: '30px' }}
                />
              </div>
            </div>

            {/* Text 1 */}
            <div className="row-start-1 col-start-2 col-end-6 flex items-center">
              <div className="services__icon__text p-5">
                <h2 className="font-semibold mb-2 text-bright-teal">Search Engine Optimization</h2>
                <p>
                  Boost your visibility on search engines with targeted keywords, on-page
                  optimization, and link-building strategies designed to attract organic
                  traffic.
                </p>
              </div>
            </div>

            {/* Icon 2 */}
            <div className="row-start-2 col-start-1 flex items-center justify-center">
              <div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
                <InsightsIcon
                  className="text-white"
                  style={{ width: '35px', height: '35px' }}
                />
              </div>
            </div>

            {/* Text 2 */}
            <div className="row-start-2 col-start-2 col-end-6 flex items-center">
              <div className="services__icon__text p-5">
                <h2 className="font-semibold mb-2 text-bright-teal">Analytics & Insights</h2>
                <p>
                  Leverage Google Analytics to gain insights into user behavior, optimize
                  engagement, and measure the performance of your digital strategies in
                  real time.
                </p>
              </div>
            </div>
          </div>

          <div className="services__button justify-center items-center mb-5">
            <button
              className="btn-primary text-white mt-5 py-2 rounded-md flex justify-center w-full
                 md:py-3 lg:justify-around lg:px-12 xl:w-3/5 2xl:w-1/2"
            >
              <span className="leading-none">Free Google Business Insights</span>
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="order-2 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-0 py-12 md:px-0 md:py-0 md:grid-cols-4 md:grid-rows-7 md:gap-2 lg:grid-cols-9 lg:grid-rows-6 lg:gap-2">
            {/* Image 1 */}
            <div className="md:row-start-5 md:row-end-8 md:col-start-1 md:col-end-5 lg:col-start-3 lg:col-end-8 lg:row-start-4 lg:row-end-7 flex justify-center items-center">
              <img
                className="w-full h-auto object-cover my-2 md:my-0"
                src="/images/services/analytics.svg"
                alt="Image 1"
              />
            </div>

            {/* Image 2 */}
            <div className="hidden md:block md:flex md:items-center md:justify-center md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:row-end-4">
              <img
                className="w-full h-auto object-cover mb-2 md:mb-0"
                src="/images/services/seo.svg"
                alt="Image 2"
              />
            </div>

            {/* Image 3 */}
            <div className="hidden md:block md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-5 lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-4 lg:flex lg:items-center lg:justify-center">
              <img
                className="w-full h-auto object-cover mb-2 md:mb-0"
                src="/images/services/searching.svg"
                alt="Image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;