import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { CaseStudyData } from '../Components'
import VideoPlayer from '../Components/Video/VideoPlayer';
import CaseStudySwiper from '../Components/Swipers/CaseStudySwiper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function CaseStudyDetails() {

    const { name } = useParams()
    const caseStudy = CaseStudyData.find((study) => study.name === name)
    const [activeSection, setActiveSection] = useState('');
    const [hoveredSection, setHoveredSection] = useState(null);

    const totalDollarSigns = 5;  // Maximum number of dollar signs
    const currentPriceLevel = caseStudy.price.length;  // Get the number of dollar signs in the price (e.g., 2 for "$$")
  



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

        function renderMedia(sectionData) {
            const { mediaType, mediaUrl } = sectionData;
          
            if (!mediaType || !mediaUrl) return null;
          
            if (mediaType === 'image') {
              return (
                <img
                  className='mb-8'
                  src={mediaUrl}
                  alt={`${sectionData.header} Image`}
                />
              );
            } else if (mediaType === 'video') {
              return <VideoPlayer className='mb-8' videoSrc={mediaUrl} />;
            }
          
            return null;
          }

        // Scroll to top when component mounts
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

          

        useEffect(() => {
            if (!caseStudy) return;
            
            const handleScroll = () => {
                const sections = document.querySelectorAll('.caseStudySection');
                let current = '';
    
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 60) {
                        current = section.getAttribute('id');
                    }
                });
    
                setActiveSection(current);
            };
    
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [caseStudy]);

        if (!caseStudy) {
            return (
                <p className='mb-8'>No Case Study Found</p>
            )
        }

  return (
    <HelmetProvider>
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


            <div className="caseStudy__hero mb-8 lg:w-2/3 lg:pt-16">
                <p className='inline-block py-2 mb-2 px-2 border rounded-lg text-xs md:text-sm lg:text-md xl:text-lg' style={{color: caseStudy.colors.secondary, borderColor: caseStudy.colors.primary}}>{caseStudy.seo}</p>
                <h1 className=' pb-4 font-bold text-2xl lg:text-4xl xl:text-6xl' style={{color: caseStudy.colors.primary}}>{caseStudy.title}</h1>
                <p className='pb-4 lg:text-lg xl:text-xl'>{renderTeaser(caseStudy.teaser, caseStudy.name)}</p>


                <div className="price__and__time flex space-x-4 lg:py-4">
                    {/* Render the price in dollar signs */}
                    <div className="price py-1 px-4 border-2 border-soft-navy bg-soft-navy rounded-lg text-white xl:text-xl">
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
                        <p className='px-4 py-1 border-2 border-soft-navy bg-soft-navy rounded-lg text-white xl:text-xl'
                                // style={{ backgroundColor: `${caseStudy.colors.primary}90` }}
        
                        >Built in {caseStudy.timeline}</p>
                    </div>

                </div>
                
                <div className="build__button lg:pb-20">
                    <button className='py-3 px-8 mt-4 rounded-xl text-white xl:text-xl' style={{backgroundColor: caseStudy.colors.ctaButton, color: caseStudy.colors.ctaButtonText}} >Build Me One!</button>
                </div>
                
            </div>


            {/* ============================
            ========= SWIPER  ==========
            ============================ */}

            <CaseStudySwiper caseStudy={caseStudy} />

            <div className="video lg:hidden border-2 rounded-xl" style={{ background: caseStudy.colors.customGradient }}>
                {caseStudy.hasVideo ? (
                    <div className='video__and__details'>
                        <video controls className="w-full">
                            <source src={caseStudy.videoPath} type="video/mp4" />
                        </video>
                        <div className="videoDetails__container pb-8 flex flex-col justify-center items-center">
                            <h2 className='mt-4 pb-4 font-bold text-2xl text-center md:text-3xl' style={{color: caseStudy.colors.white}}>Let's Talk About Your Website Project!</h2>
                            <button className='py-3 px-8 mt-4 rounded-xl text-white border-2 border-white' style={{backgroundColor: caseStudy.colors.ctaButton, color: caseStudy.colors.ctaButtonText}}>Book A Zoom Call</button>
                            <div className="icons__and__text__container">
                                <div className='icon__and__text flex mt-4 md:mt-8'>
                                    <CheckCircleIcon className='mr-4 text-green-400'/>
                                    <p className='text-white md:text-lg'>No Pressure</p>
                                </div>
                                <div className='icon__and__text flex mt-4'>
                                    <CheckCircleIcon className='mr-4 text-green-400'/>
                                    <p className='text-white md:text-lg'>Get Pricing Quote</p>
                                </div>
                                <div className='icon__and__text flex mt-4'>
                                    <CheckCircleIcon className='mr-4 text-green-400' />
                                    <p className='text-white md:text-lg'>See More Site Examples</p>
                                </div>

                            </div>

                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>


            <div className="parent grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* CASESTUDY NAVLINKS */}
                {/* CASE STUDY NAVIGATION */}
            <div className="caseStudy_navbar hidden top-4 lg:block sticky h-screen max-h-[500px]">
            <nav>
                <ul className='space-y-2'>
                {[
                    'intro',
                    'role',
                    'problem',
                    'goal',
                    'impact',
                    'ideation',
                    'testing',
                    'development',
                    'final',
                    'future',
                ].map((section) => (
                    <li key={section}>
                    <a
                        href={`#${section}`}
                        className={`px-2 py-1 transition-colors duration-300`}
                        onMouseEnter={() => setHoveredSection(section)}
                        onMouseLeave={() => setHoveredSection(null)}
                        style={{
                        color:
                            activeSection === section
                            ? caseStudy.colors.primary
                            : hoveredSection === section
                            ? caseStudy.colors.secondary
                            : 'inherit',
                        // backgroundColor:
                        //     activeSection === section ? caseStudy.colors.primary : 'transparent',
                        }}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                    </li>
                ))}
                </ul>
            </nav>
            </div>


                {/* CASE STUDY INFO  */}
                <div className={`div2 ${caseStudy.hasVideo ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
                    <div className="caseStudyInfo">
                        <h2 id='intro' className='caseStudyHeader caseStudySection my-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Intro</h2>
                        <p className='mb-8'>{caseStudy.title}</p>
                        <h2 id='role' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Our Role</h2>
                        <p className='mb-8'>{caseStudy.role}</p>
                        <h2 id='problem' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>The Problem</h2>

                        {/* MAPPING THROUGH THE PROBLEMS  */}
                        {caseStudy.problem && (
                            <section>
                                <h2 className='mb-4'>{caseStudy.problem.header}</h2>
                                <p className='mb-8'>{caseStudy.problem.headerDetail}</p>
                                {caseStudy.problem.subheaders.map((subheader, index) => (
                                    <div className="caseStudy_subheaders" key={`problem-${index}`}>
                                        <h3 className='mb-4 text-lg font-semibold' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                        <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                        {renderMedia(subheader)}
                                    </div>
                                ))}
                            </section>
                        )}

                        {/* MAPPING THROUGH THE GOALS  */}
                        <h2 id='goal' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Goal</h2>
                        {caseStudy.goal && (
                            <section>
                                <h2 className='mb-4'>{caseStudy.goal.header}</h2>
                                <p className='mb-8'>{caseStudy.goal.headerDetail}</p>

                                {caseStudy.goal.subheaders.map((subheader, index) => (
                                    <div className="caseStudy_subheaders" key={`goals-${index}`}>
                                        <h3 className='mb-4 text-lg font-semibold' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                        <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                        {renderMedia(subheader)}
                                    </div>
                                ))}
                            </section>
                        )}


                        {/* MAPPING THROUGH THE IMPACT  */}
                        <h2 id='impact' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Impact</h2>
                        {caseStudy.impact && (
                            <section>
                                <h2 className='mb-4'>{caseStudy.impact.header}</h2>
                                <p className='mb-8'>{caseStudy.impact.headerDetail}</p>
                                {renderMedia(caseStudy.impact)}

                                {caseStudy.impact.subheaders.map((subheader, index) => (
                                    <div className="caseStudy_subheaders" key={`impact-${index}`}>
                                        <h3 className='mb-4 text-lg font-semibold' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                        <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                        {renderMedia(subheader)}
                                    </div>
                                ))}
                            </section>
                        )}

                        {/* MAPPING THROUGH THE IDEATION  */}
                        <h2 id='ideation' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Ideation</h2>
                        {caseStudy.ideation && (
                            <section>
                                <h2 className='mb-4'>{caseStudy.ideation.header}</h2>
                                <p className='mb-8'>{caseStudy.ideation.headerDetail}</p>
                                {renderMedia(caseStudy.ideation)}

                                {caseStudy.ideation.subheaders.map((subheader, index) => (
                                    <div className="caseStudy_subheaders" key={`ideation-${index}`}>
                                        <h3 className='mb-4 text-lg font-semibold' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                        <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                        {renderMedia(subheader)}
                                    </div>
                                ))}
                            </section>            
                        )}

                        {/* MAPPING THROUGH THE TESTING */}
                        <h2 id='testing' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Testing</h2>
                        {caseStudy.testing && (
                            <section>
                                <h2 className='mb-4'>{caseStudy.testing.header}</h2>
                                <p className='mb-8'>{caseStudy.testing.headerDetail}</p>
                                {renderMedia(caseStudy.testing)}

                                {caseStudy.testing.subheaders.map((subheader, index) => (
                                    <div className="caseStudy_subheaders" key={`testing-${index}`}>
                                        <h3 className='mb-4 text-lg font-semibold' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                        <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                        {renderMedia(subheader)}
                                    </div>
                                ))}
                            </section>
                        )}

                        {/* MAPPING THROUGH THE DEVELOPMENT  */}
                        <h2 id='development' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Development</h2>
                        {caseStudy.development && (
                            <section>
                                <h2 className='mb-4'>{caseStudy.development.header}</h2>
                                <p className='mb-8'>{caseStudy.development.headerDetail}</p>
                                {renderMedia(caseStudy.development)}

                                {caseStudy.development.subheaders.map((subheader, index) => (
                                    <div className="caseStudy_subheaders" key={`development-${index}`}>
                                        <h3 className='mb-4 text-lg font-semibold' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                        <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                        {renderMedia(subheader)}
                                    </div>
                                ))}
                            </section>
                        )}

                        {/* MAPPING THROUGH THE FINAL  */}
                        <h2 id='final' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Final Design</h2>
                        {caseStudy.final && (
                            <section>
                                <h2 className='mb-4'>{caseStudy.final.header}</h2>
                                <p className='mb-8'>{caseStudy.final.headerDetail}</p>
                                {renderMedia(caseStudy.final)}

                                {caseStudy.final.subheaders.map((subheader, index) => (
                                    <div className="caseStudy_subheaders" key={`final-${index}`}>
                                        <h3 className='mb-4 text-lg font-semibold' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                        <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                        {renderMedia(subheader)}
                                    </div>
                                ))}
                            </section>
                        )}

                        {/* MAPPING THROUGH THE FUTURE  */}
                        <h2 id='future' className='caseStudyHeader caseStudySection mb-4 decoration: underline' style={{color: caseStudy.colors.primary}}>Future</h2>
                        {caseStudy.future && (
                            <section>
                                <h2 className='mb-4'>{caseStudy.future.header}</h2>
                                <p className='mb-8'>{caseStudy.future.headerDetail}</p>
                                {caseStudy.future.subheaders.map((subheader, index) => (
                                    <div className="caseStudy_subheaders" key={`future-${index}`}>
                                        <h3 className='mb-4 text-lg font-semibold' style={{color: caseStudy.colors.secondary}}>{subheader.subheader}</h3>
                                        <p className='mb-8'>{subheader.subHeaderDetail}</p>
                                        {renderMedia(subheader)}
                                    </div>
                                ))}
                            </section>
                        )}            
                    </div>
                </div>

                {/* Video in Column 5 (if exists) */}
                {caseStudy.hasVideo && (
                    <div className="div3 sticky max-h-[500px] top-4 border-2 rounded-xl" style={{ background: caseStudy.colors.customGradient }} >
                        {/* style={{ background: caseStudy.colors.customGradient }} */}
                        <video controls className='w-full'>
                            <source src={caseStudy.videoPath} type="video/mp4" />
                        </video>

                        <div className="videoDetails__container pb-8 flex flex-col justify-center items-center">
                            <h2 className='mt-4 pb-4 font-bold text-center xl:text-2xl' style={{color: caseStudy.colors.white}}>Let's Talk About Your Website Project!</h2>
                            <button className='py-3 px-8 mt-4 rounded-xl text-white border-2 border-white transition-colors duration-300' 
                                style={{
                                    backgroundColor: caseStudy.colors.ctaButton,
                                    color: caseStudy.colors.ctaButtonText
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.color = caseStudy.colors.primary;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = caseStudy.colors.ctaButton;
                                    e.target.style.color = caseStudy.colors.ctaButtonText;
                                }}
                            >
                                Book A Zoom Call
                            </button>
                            <div className="icons__and__text__container">
                                <div className='icon__and__text flex mt-4'>
                                    <CheckCircleIcon className='mr-4 text-green-400'/>
                                    <p className='text-white'>No Pressure</p>
                                </div>
                                <div className='icon__and__text flex mt-4'>
                                    <CheckCircleIcon className='mr-4 text-green-400'/>
                                    <p className='text-white'>Get Pricing Quote</p>
                                </div>
                                <div className='icon__and__text flex mt-4'>
                                    <CheckCircleIcon className='mr-4 text-green-400' />
                                    <p className='text-white'>See More Site Examples</p>
                                </div>

                            </div>

                        </div>
                    </div>
                )}

                    


            </div>


        
        </div>
    </HelmetProvider>
  )
}

export default CaseStudyDetails
