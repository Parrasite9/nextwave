import React from 'react';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Services = () => {
  return (
    <div className="services__container">
      {/* Mobile Version */}
      <div className="block md:hidden">
        <div className="services__text__container px-4 py-4">
          <h3 className="mt-10 text-vDeepBlue font-semibold">services Us</h3>
          <h2 className="font-bold text-darkGreen text-2xl mb-8">
            Growing a Community of Learners for Life.
          </h2>
          <p className="mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            consequuntur saepe cumque illo fugit asperiores ipsam dolore! Culpa
            quidem quibusdam placeat hic, similique impedit adipisci illum
            laboriosam quas fugit maiores.
          </p>

          {/* TEXT AND FONT GRID */}
          <div className="grid grid-cols-5 grid-rows-2 gap-0">
            {/* Icon 1 */}
            <div className="row-start-1 col-start-1 flex items-center justify-center">
              <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                <MenuBookIcon
                  className="text-white text-2xl"
                  style={{ width: '30px', height: '30px' }}
                />
              </div>
            </div>

            {/* Text 1 */}
            <div className="row-start-1 col-start-2 col-end-6 flex items-center">
              <div className="services__icon__text p-5">
                <h2 className="font-semibold mb-2">Flexible Classes</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  accusantium iure atque neque adipisci non.
                </p>
              </div>
            </div>

            {/* Icon 2 */}
            <div className="row-start-2 col-start-1 rounded-full flex items-center justify-center">
              <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                <SupportAgentIcon
                  className="text-white"
                  style={{ width: '35px', height: '35px' }}
                />
              </div>
            </div>

            {/* Text 2 */}
            <div className="row-start-2 col-start-2 col-end-6 flex items-center">
              <div className="services__icon__text p-5">
                <h2 className="font-semibold mb-2">Educator Support</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  accusantium iure atque neque adipisci non.
                </p>
              </div>
            </div>
          </div>

          <div className="services__button justify-center items-center">
            <button
              className="bg-blue-500 text-white mt-5 px-4 py-2 rounded-md flex justify-center w-full
                md:w-2/5 md:py-3"
            >
              <span className="leading-none">Learn More</span>
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-0 bg-custom-gradient py-12 md:grid-cols-4 md:grid-rows-7 md:gap-2">
          {/* Image 1 */}
          <div className="md:row-start-5 md:row-end-8 md:col-start-1 md:col-end-5">
            <img
              className="w-full h-full object-cover my-2"
              src="/images/services/design.svg"
              alt="Image 1"
            />
          </div>

          {/* Image 2 */}
          <div className="md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-3">
            <img
              className="w-full h-full object-cover mb-2"
              src="/images/services/landingPage.svg"
              alt="Image 2"
            />
          </div>

          {/* Image 3 */}
          <div className="md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-5">
            <img
              className="w-full h-full object-cover mb-2"
              src="/images/services/mobileDev.svg"
              alt="Image 3"
            />
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 grid-rows-1 gap-0 lg:px-8 lg:py-10">
          {/* Text Container */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            {/* Content for Text Container */}
            <div className="services__text__container">
              <h3 className="mt-10 text-vDeepBlue font-semibold xl:text-xl">
                services Us
              </h3>
              <h2 className="font-bold text-darkGreen text-2xl mb-8 xl:text-3xl">
                Growing a Community of Learners for Life.
              </h2>
              <p className="mb-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                consequuntur saepe cumque illo fugit asperiores ipsam dolore!
                Culpa quidem quibusdam placeat hic, similique impedit adipisci
                illum laboriosam quas fugit maiores.
              </p>

              {/* TEXT AND FONT GRID */}
              <div className="grid grid-cols-5 grid-rows-2 gap-0 xl:flex">
                {/* Icon 1 */}
                <div className="row-start-1 col-start-1 flex items-center justify-center">
                  <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                    <MenuBookIcon
                      className="text-white text-2xl"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </div>
                </div>

                {/* Text 1 */}
                <div className="row-start-1 col-start-2 col-end-6 flex items-center">
                  <div className="services__icon__text p-5">
                    <h2 className="font-semibold mb-2">Flexible Classes</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Hic accusantium iure atque neque adipisci non.
                    </p>
                  </div>
                </div>

                {/* Icon 2 */}
                <div className="row-start-2 col-start-1 rounded-full flex items-center justify-center">
                  <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                    <SupportAgentIcon
                      className="text-white"
                      style={{ width: '35px', height: '35px' }}
                    />
                  </div>
                </div>

                {/* Text 2 */}
                <div className="row-start-2 col-start-2 col-end-6 flex items-center">
                  <div className="services__icon__text p-5">
                    <h2 className="font-semibold mb-2">Educator Support</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Hic accusantium iure atque neque adipisci non.
                    </p>
                  </div>
                </div>
              </div>

              <div className="services__button justify-center items-center mb-5">
                <button
                  className="bg-blue-500 text-white mt-5 px-4 py-2 rounded-md flex justify-center w-full
                    md:w-2/5 md:py-3"
                >
                  <span className="leading-none">Learn More</span>
                  <ArrowForwardIosIcon fontSize="small" />
                </button>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex justify-center items-center">
            {/* Image Grid */}
            <div className="grid lg:grid-cols-9 lg:grid-rows-6 lg:gap-2">
              {/* Image 1 */}
              <div className="lg:col-start-3 lg:col-end-8 lg:row-start-4 lg:row-end-7">
                <img
                  className="w-full h-full object-cover"
                  src="/images/services/design.svg"
                  alt="services Image 1"
                />
              </div>

              {/* Image 2 */}
              <div className="lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:row-end-4">
                <img
                  className="w-full h-full object-cover"
                  src="/images/services/landingPage.svg"
                  alt="services Image 2"
                />
              </div>

              {/* Image 3 */}
              <div className="lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-4">
                <img
                  className="w-full h-full object-cover"
                  src="/images/services/mobileDev.svg"
                  alt="services Image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
