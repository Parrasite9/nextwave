import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { CaseStudyData } from '../Components'
import CaseStudySwiper from '../Components/Swipers/CaseStudySwiper';

function CaseStudyDetails() {

    const { name } = useParams()
    const caseStudy = CaseStudyData.find((study) => study.name === name)

    const totalDollarSigns = 5;  // Maximum number of dollar signs
    const currentPriceLevel = caseStudy.price.length;  // Get the number of dollar signs in the price (e.g., 2 for "$$")
  

    if (!caseStudy) {
        return (
            <p className='mb-8'>No Case Study Found</p>
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


        <div className="caseStudy__hero mb-8">
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


        {/* ============================
        ========= SWIPER  ==========
        ============================ */}

        <CaseStudySwiper />

        <div className="video lg:hidden">
            {caseStudy.hasVideo ? (
                <>
                    <video controls className="w-full">
                        <source src={caseStudy.videoPath} type="video/mp4" />
                    </video>
                </>
            ) : (
                <></>
            )}
        </div>


        <div className="parent grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* CASESTUDY NAVLINKS */}
            <div className="caseStudy_navbar hidden sticky top-4 lg:block">
                <nav>
                    <ul className='space-y-2'>
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#problem">Problem</a></li>
                        <li><a href="#goal">Goal</a></li>
                        <li><a href="#impact">Impact</a></li>
                        <li><a href="#ideation">Ideation</a></li>
                        <li><a href="#testing">Testing</a></li>
                        <li><a href="#final">Final</a></li>
                        <li><a href="#development">Development</a></li>
                        <li><a href="#future">Future</a></li>
                    </ul>
                </nav>
            </div>

            {/* CASE STUDY INFO  */}
            <div className={`div2 ${caseStudy.hasVideo ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
                <div className="caseStudyInfo">
                    <h2 id='intro' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Intro</h2>
                    <p className='mb-8'>{caseStudy.title}</p>
                    <h2 id='role' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Our Role</h2>
                    <p className='mb-8'>{caseStudy.role}</p>
                    <h2 id='problem' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>The Problem</h2>

                    {/* MAPPING THROUGH THE PROBLEMS  */}
                    {caseStudy.problem && (
                        <section>
                            <h2 className='mb-4'>{caseStudy.problem.header}</h2>
                            <p className='mb-8'>{caseStudy.problem.headerDetail}</p>
                            {caseStudy.problem.subheaders.map((subheader, index) => (
                                <div className="caseStudy_subheaders">
                                    <h3 className='mb-4' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                    <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* MAPPING THROUGH THE GOALS  */}
                    <h2 id='goal' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Goal</h2>
                    {caseStudy.goal && (
                        <section>
                            <h2 className='mb-4'>{caseStudy.goal.header}</h2>
                            <p className='mb-8'>{caseStudy.goal.headerDetail}</p>

                            {caseStudy.goal.subheaders.map((subheader, index) => (
                                <div className="caseStudy_subheaders">
                                    <h3 className='mb-4' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                    <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                </div>
                            ))}
                        </section>
                    )}


                    {/* MAPPING THROUGH THE IMPACT  */}
                    <h2 id='impact' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Impact</h2>
                    {caseStudy.impact && (
                        <section>
                            <h2 className='mb-4'>{caseStudy.impact.header}</h2>
                            <p className='mb-8'>{caseStudy.impact.headerDetail}</p>
                            {caseStudy.impact.subheaders.map((subheader, index) => (
                                <div className="caseStudy_subheaders">
                                    <h3 className='mb-4' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                    <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* MAPPING THROUGH THE IDEATION  */}
                    <h2 id='ideation' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Ideation</h2>
                    {caseStudy.ideation && (
                        <section>
                            <h2 className='mb-4'>{caseStudy.ideation.header}</h2>
                            <p className='mb-8'>{caseStudy.ideation.headerDetail}</p>
                            {caseStudy.ideation.subheaders.map((subheader, index) => (
                                <div className="caseStudy_subheaders">
                                    <h3 className='mb-4' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                    <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                </div>
                            ))}
                        </section>            
                    )}

                    {/* MAPPING THROUGH THE TESTING */}
                    <h2 id='testing' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Testing</h2>
                    {caseStudy.testing && (
                        <section>
                            <h2 className='mb-4'>{caseStudy.testing.header}</h2>
                            <p className='mb-8'>{caseStudy.testing.headerDetail}</p>
                            {caseStudy.testing.subheaders.map((subheader, index) => (
                                <div className="caseStudy_subheaders">
                                    <h3 className='mb-4' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                    <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* MAPPING THROUGH THE DEVELOPMENT  */}
                    <h2 id='development' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Development</h2>
                    {caseStudy.development && (
                        <section>
                            <h2 className='mb-4'>{caseStudy.development.header}</h2>
                            <p className='mb-8'>{caseStudy.development.headerDetail}</p>
                            {caseStudy.development.subheaders.map((subheader, index) => (
                                <div className="caseStudy_subheaders">
                                    <h3 className='mb-4' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                    <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* MAPPING THROUGH THE FINAL  */}
                    <h2 id='final' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Final Design</h2>
                    {caseStudy.final && (
                        <section>
                            <h2 className='mb-4'>{caseStudy.final.header}</h2>
                            <p className='mb-8'>{caseStudy.final.headerDetail}</p>
                            {caseStudy.final.subheaders.map((subheader, index) => (
                                <div className="caseStudy_subheaders">
                                    <h3 className='mb-4' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                    <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* MAPPING THROUGH THE FUTURE  */}
                    <h2 id='future' className='caseStudyHeader mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Future</h2>
                    {caseStudy.future && (
                        <section>
                            <h2 className='mb-4'>{caseStudy.future.header}</h2>
                            <p className='mb-8'>{caseStudy.future.headerDetail}</p>
                            {caseStudy.future.subheaders.map((subheader, index) => (
                                <div className="caseStudy_subheaders">
                                    <h3 className='mb-4' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                    <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                </div>
                            ))}
                        </section>
                    )}            
                </div>
            </div>

            {/* Video in Column 5 (if exists) */}
            {caseStudy.hasVideo && (
                <div className="div3 sticky top-4 lg:col-span-1">
                    <video controls className="w-full">
                        <source src={caseStudy.videoPath} type="video/mp4" />
                    </video>
                </div>
            )}

                


        </div>


      
    </div>
  )
}

export default CaseStudyDetails
