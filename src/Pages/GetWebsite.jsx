import React from 'react'
import { Signup } from '../Components'

function GetWebsite() {
  return (
    <div>
      <h1 className='header py-4 text-2xl text-center 
                        md:text-3xl lg:text-4xl 
                        lg:py-8 
                        xl:text-5xl'>
                            Lets Update Your Information
        </h1>
      <Signup />
    </div>
  )
}

export default GetWebsite
