import React from 'react'

const Hero = () => {
  return (
    <div className='hero-container relative px-8'>
      {/* TEXT AND IMAGE SECTION  */}
      <div className="hero grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* TEXT SECTION */}
        <div className="text__section text-center md:text-left pt-8">
          <h3 className='subheader font-bold text-xl py-4 md:text-2xl xl:text-3xl'>
            A New Wave Of Online Success
          </h3>
          <h1 className='header font-extrabold text-4xl pb-4 md:text-5xl xl:text-6xl'>
            Websites That Increase Your Revenue
          </h1>
          <p className='pb-4 md:text-xl'>
            Maximize your ROI with websites designed to convert.
          </p>
          <button className='btn-cta mb-4 md:text-2xl md:py-3'>Text Us About A Project</button>

          {/* TRUST BADGES */}
          <div className="hidden trustbadges grid grid-cols-2 gap-4 place-items-center
                          lg:block lg:flex">
            <img name="trustseal" alt="Moneyback Guarantee" src="https://trustlock.co/wp-content/uploads/2019/01/money-back-guarantee-badge-RECTANGLE-3.png" 
                className='w-4/5 h-auto md:w-2/3 lg:w-1/3 xl:w-1/5' />
            <img name="trustseal" alt="SSL Checkout" src="https://trustlock.co/wp-content/uploads/2019/01/ssl-checkout-trust-seal.png" 
                className='w-4/5 h-auto md:w-2/3 lg:w-1/3 xl:w-1/5' />
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="image__section flex justify-center">
          <img className='w-full h-auto' src="/images/hero/herosvg3.gif" alt="mobile_hero" />
        </div>
      </div>

      {/* SVG Wave */}
      {/* <div className="wave-container absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="wave-svg relative block w-full h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,224C96,224,192,224,288,234.7C384,245,480,267,576,245.3C672,224,768,160,864,149.3C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}

    </div>
  )
}

export default Hero
