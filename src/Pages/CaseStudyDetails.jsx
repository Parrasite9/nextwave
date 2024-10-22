import React from 'react'
import { useParams } from 'react-router-dom'
import { CaseStudyData } from '../Components'

function CaseStudyDetails() {

    const { name } = useParams()
    const caseStudy = CaseStudyData.find((study) => study.name === name)

    if (!caseStudy) {
        return (
            <p>No Case Study Found</p>
        )
    }


  return (
    <div>
        <h2>{caseStudy.title}</h2>
      
    </div>
  )
}

export default CaseStudyDetails
