import React from 'react'
import {CaseStudyData} from '../index'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

function CaseStudy() {
  return (
    <div className='caseStudy__container'>
        <div className="caseStudy__content px-8">
            <h2 className='header text-center text-xl my-4'>Our Success Stories</h2>
            <div className="grid grid-cols-2 gap-4">
                {CaseStudyData.slice(0, 4).map((casestudy) => (
                    <div key={casestudy.id} className="individual__study flex flex-col justify-between">
                        <Link className='view__caseStudy flex justify-end' to={`casestudy/${casestudy.name}`}>
                            <img src={casestudy.poster} alt={casestudy.title} />
                        </Link>
                        <div className="caseStudy__description lg:hidden">
                            <h3 className='header py-2'>{casestudy.name}</h3>
                            <p>{casestudy.shortDescription}</p>
                            <Link className='view__caseStudy flex justify-end' to={`casestudy/${casestudy.name}`}>
                                {/* <p className='mr-4'>View More</p> */}
                                <button className='mr-4 text-deep-ocean-blue'>View More</button>
                                <EastIcon className='text-deep-ocean-blue' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CaseStudy
