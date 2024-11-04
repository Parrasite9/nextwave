import React from 'react'
import { Services, Services2 } from '../..'
import { FaServicestack } from 'react-icons/fa';

function ServiceSection() {
  return (
    <div>
        <div className="divider">
            <div className="divider-line"></div>
            <span className='divider-text'>Our Services</span>
            <div className="divider-line"></div>
        </div>

        <Services2 />
        <Services />
    </div>
  )
}

export default ServiceSection
