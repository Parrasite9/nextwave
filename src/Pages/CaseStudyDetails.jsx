import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { CaseStudyData } from '../Components'

function CaseStudyDetails() {

    const { name } = useParams()
    const caseStudy = CaseStudyData.find((study) => study.name === name)

    const totalDollarSigns = 5;  // Maximum number of dollar signs
    const currentPriceLevel = caseStudy.price.length;  // Get the number of dollar signs in the price (e.g., 2 for "$$")
  
  

    if (!caseStudy) {
        return (
            <p>No Case Study Found</p>
        )
    }


  return (
    <div>
      <Helmet>
        {/* Keep the case study title concise */}
        <title>{caseStudy.title}</title>

        {/* Use the SEO text in the meta description for search engine relevance */}
        <meta name="description" content={caseStudy.teaser} />
        <meta name="keywords" content={caseStudy.seo} />
        
        {/* Social sharing meta tags (Open Graph, etc.) */}
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.teaser} />
        <meta property="og:image" content={caseStudy.poster} />

        {/* ==============================================
        ==============================================
        =========== UPDATE THIS LINE =================
        ==============================================
        ============================================== */}

        <meta property="og:url" content={`https://mywebsite.com/case-study/${caseStudy.name}`} />
      </Helmet>


        <div className="caseStudy__hero">
            <p>{caseStudy.seo}</p>
            <h1>{caseStudy.title}</h1>
            <h2></h2>
            <p>{caseStudy.teaser}</p>


            <div className="price__and__time flex">
                {/* Render the price in dollar signs */}
                <div className="price">
                    {[...Array(totalDollarSigns)].map((_, index) => (
                        <span
                        key={index}
                        className={index < currentPriceLevel ? 'text-opacity-100' : 'text-opacity-50'}
                        style={{ opacity: index < currentPriceLevel ? 1 : 0.5 }}
                        >
                        $
                        </span>
                    ))}
                </div>
                <p>{caseStudy.timeline}</p>
            </div>

            <button>Build Me One!</button>
            
        </div>

      
    </div>
  )
}

export default CaseStudyDetails
