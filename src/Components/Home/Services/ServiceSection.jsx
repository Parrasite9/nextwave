import React from 'react'
import { Services, Services2, Services3 } from '../..'
import { FaServicestack } from 'react-icons/fa';

function ServiceSection() {
  return (
    <div>
        <div id='services' className="divider">
            <div className="divider-line"></div>
            <span className='divider-text'>Our Services</span>
            <div className="divider-line"></div>
        </div>

        <Services2 />
        <Services />
        <Services3 />
    </div>
  )
}

export default ServiceSection
