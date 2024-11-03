import React from 'react'

function Services() {
  return (
    <div className='services__container grid grid-cols-2 lg:grid-cols-4 gap-4 px-8'>
      <div className="service border border-2 border-wbite rounded">
        <img src="" alt="" />
        <h2>Web Design</h2>
        <p>Creating visually compelling and user-friendly designs that captivate audiences and enhance user experience.</p>
      </div>
      <div className="service border border-2 border-wbite rounded">
        <img src="" alt="" />
        <h2>Development</h2>
        <p>Building robust, scalable websites tailored to your unique business needs, using the latest web technologies.</p>
      </div>
      <div className="service border border-2 border-wbite rounded bg-test2 text-white">
        <img src="" alt="" />
        <h2 className=''>SEO</h2>
        <p>Helping your business get found with SEO and targeted digital marketing strategies that drive traffic and boost visibility.</p>
      </div>
      <div className="service border border-2 border-wbite rounded">
        <img src="" alt="" />
        <h2>Maintnance & Support</h2>
        <p>Ensuring your website stays secure, up-to-date, and performs flawlessly with ongoing support and maintenance services.</p>
      </div>
    </div>
  )
}

export default Services
