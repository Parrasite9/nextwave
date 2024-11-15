import React from 'react'
import { CaseStudy, Hero, ServicesSection, PricingTable, Contact, Signup } from '../Components'
import CaseStudiesList from '../Globals/CaseStudiesList'

function Home() {
  return (
    <div>
        <Hero />
        <CaseStudiesList />
        <ServicesSection />
        <PricingTable />
        <Signup />
    </div>
  )
}

export default Home
