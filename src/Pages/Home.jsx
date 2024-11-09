import React from 'react'
import { CaseStudy, Hero, ServicesSection, PricingTable, Contact, Signup } from '../Components'

function Home() {
  return (
    <div>
        <Hero />
        <CaseStudy />
        <ServicesSection />
        <PricingTable />
        <Signup />
        <Contact />
    </div>
  )
}

export default Home
