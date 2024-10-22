import React from 'react'
import {CaseStudyData} from '../index'

function CaseStudy() {
  return (
    <div className='caseStudy__container'>
      {CaseStudyData.map((casestudy) => (
        <div key={casestudy.id} className="individual__study">
            <img src={casestudy.poster} alt={casestudy.title} />
        </div>
      ))}
    </div>
  )
}

export default CaseStudy
