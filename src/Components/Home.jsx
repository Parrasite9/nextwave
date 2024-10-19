import React from 'react'

const Home = () => {
  return (
    <div className='home-container px-4'>
      {/* TEXT AND IMAGE SECTION  */}
      <div className="hero grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* TEXT SECTION */}
        <div className="text__section text-center md:text-left pt-8">
          <h3 className='subheader font-bold text-xl py-4 md:text-2xl'>
            A New Wave Of Online Success
          </h3>
          <h1 className='header font-extrabold text-4xl pb-4 md:text-5xl'>
            Websites That Increase Your Revenue
          </h1>
          <p className='pb-4'>
            Maximize your ROI with websites designed to convert.
          </p>
          <button className='btn-cta mb-4'>Book a Consultation</button>

          {/* TRUST BADGES */}
          <div className="hidden lg:block trustbadges grid grid-cols-2 gap-4 place-items-center">
            <img name="trustseal" alt="Moneyback Guarantee" src="https://trustlock.co/wp-content/uploads/2019/01/money-back-guarantee-badge-RECTANGLE-3.png" 
                className='w-4/5 h-auto md:w-2/3' />
            <img name="trustseal" alt="SSL Checkout" src="https://trustlock.co/wp-content/uploads/2019/01/ssl-checkout-trust-seal.png" 
                className='w-4/5 h-auto md:w-2/3' />
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="image__section flex justify-center">
          <img className='w-full h-auto' src="/images/hero/mobile_hero2.jpg" alt="mobile_hero" />
        </div>
      </div>


    </div>
  )
}

export default Home
