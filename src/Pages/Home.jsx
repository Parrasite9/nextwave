import React from 'react'
import { CaseStudy, Hero, ServicesSection, PricingTable, Contact, Signup } from '../Components'
import FeaturedPosts from '../Components/Blogs/FeaturedPosts'

function Home() {
  return (
    <div>
        <Hero />
        <CaseStudy />
        <ServicesSection />
        <PricingTable />
        <Signup />
        <FeaturedPosts />
    </div>
  )
}

export default Home
