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

        // Function to render the teaser with the name styled
        const renderTeaser = (teaser, name) => {
            const parts = teaser.split('{name}');
            return parts.map((part, index) => (
                <React.Fragment key={index}>
                    {part}
                    {index < parts.length - 1 && (
                        <span className='font-bold text-underline text-decoration-line: underline'>
                            {name}
                        </span>
                    )}
                </React.Fragment>
            ));
        };


  return (
    <div className='p-8'>
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


        <div className="caseStudy__hero ">
            <p className='pb-4' style={{color: caseStudy.colors.secondary}}>{caseStudy.seo}</p>
            <h1 className=' pb-4 font-bold text-2xl' style={{color: caseStudy.colors.primary}}>{caseStudy.title}</h1>
            <p className='pb-4'>{renderTeaser(caseStudy.teaser, caseStudy.name)}</p>


            <div className="price__and__time flex space-x-4">
                {/* Render the price in dollar signs */}
                <div className="price py-1 px-4 border-2 border-deep-ocean-blue  bg-deep-ocean-blue  text-white">
                    {[...Array(totalDollarSigns)].map((_, index) => (
                        <span
                        key={index}
                        className={index < currentPriceLevel ? 'text-opacity-100' : 'text-opacity-50'}
                        style={{ opacity: index < currentPriceLevel ? 1 : 0.5, }}
                        >
                        $
                        </span>
                    ))}
                </div>

                <div className="time__container">
                <p className='px-4 py-1 border-2 border-deep-ocean-blue bg-deep-ocean-blue text-white'
                        // style={{ backgroundColor: `${caseStudy.colors.primary}90` }}
 
                >{caseStudy.timeline}</p>

                </div>
            </div>

            <button className='py-3 px-8 mt-4 rounded-xl text-white' style={{backgroundColor: caseStudy.colors.ctaButton, color: caseStudy.colors.ctaButtonText}} >Build Me One!</button>
            
        </div>

      
    </div>
  )
}

export default CaseStudyDetails
