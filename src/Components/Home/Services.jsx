import React from 'react'

function Services() {
  return (
    <div className='services__container px-8'>

        <h2 className='text-yale-blue text-lg font-semiBold pb-2'>Services</h2>

        <div className="services__info grid grid-cols-2 lg:grid-cols-4 gap-4">

            {/* DESIGN SERVICE  */}
            <div className="service">
                <div className="service__image__container pb-4">
                    <img className='w-full h-auto' src="/images/services/design.svg" alt="design" />
                </div>
                <div className="service__text-container bg-lemon-chiffon rounded-xl p-2">
                    <h2 className='text-yale-blue text-lg font-semiBold pb-2'>Web Design</h2>
                    <p>Creating visually compelling and user-friendly designs that captivate audiences and enhance user experience.</p>
                </div>
            </div>

            {/* DEVELOPMENT SERVICE  */}
            <div className="service">
                <div className="service__image__container pb-4">
                    <img className='w-full h-auto' src="/images/services/landingPage.svg" alt="development" />
                </div>
                <div className="service__text-container bg-lemon-chiffon rounded-xl p-2">
                    <h2 className='text-yale-blue text-lg font-semiBold pb-2'>Development</h2>
                    <p>Building robust, scalable websites tailored to your unique business needs, using the latest web technologies.</p>
                </div>
            </div>

            {/* SEO SERVICE  */}
            <div className="service">
                <div className="service__image__container pb-4">
                    <img className='w-full h-auto' src="/images/services/onlineStats.svg" alt="SEO" />
                </div>
                <div className="service__text-container bg-lemon-chiffon rounded-xl p-2">
                    <h2 className='text-yale-blue text-lg font-semiBold pb-2'>SEO</h2>
                    <p>Helping your business get found with SEO and targeted digital marketing strategies that drive traffic and boost visibility.</p>
                </div>
            </div>

            {/* SUPPORT SERVICE  */}
            <div className="service">
                <div className="service__image__container pb-4">
                    <img className='w-full h-auto' src="/images/services/support.svg" alt="support" />
                </div>
                <div className="service__text-container bg-lemon-chiffon rounded-xl p-2">
                    <h2 className='text-yale-blue text-lg font-semiBold pb-2'>Maintnance & Support</h2>
                    <p>Ensuring your website stays secure, up-to-date, and performs flawlessly with ongoing support and maintenance services.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
