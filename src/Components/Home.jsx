import React from 'react'

const Home = () => {
  return (
    <div className='home-container px-4'>
      {/* TEXT SECTION  */}
      <div className="text__section text-center pt-8">
        <h3 className='subheader font-bold text-xl py-4'>A New Wave Of Online Success</h3>
        <h1 className='header font-extrabold text-4xl pb-4'>Websites That Increase Your Revenue</h1>
        <p className='pb-4'>Maximize your ROI with websites designed to convert.</p>
        <button className='btn-cta mb-4'>Book a Consultation</button>
      </div>

      {/* IMAGE SECTION  */}
      <div className="image__section flex justify-center">
      <img className='w-full h-auto' src="/images/hero/mobile_hero2.jpg" alt="mobile_hero" />
      </div>
    </div>
  )
}

export default Home