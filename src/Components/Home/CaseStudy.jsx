import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import CaseStudyContext from '../Data/CaseStudyContext';

function CaseStudy() {
	const { caseStudies } = useContext(CaseStudyContext);

	return (
		<div id="casestudy" className="caseStudy__container">
			<div className="caseStudy__content px-8">
				<div className="divider">
					<div className="divider-line"></div>
					<span className="divider-text">Our Success Stories</span>
					<div className="divider-line"></div>
				</div>
				<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
					{caseStudies.slice(0, 4).map((casestudy) => (
						<div
							key={casestudy.slug}
							className="individual__study flex flex-col justify-between"
						>
							<Link
								className="view__caseStudy flex justify-end"
								to={`/casestudy/${casestudy.slug}`}
							>
								{/* Wrapper for the image and overlay */}
								<div className="relative">
									{/* Image for Small Devices */}
									<img
										className="cursor-pointer lg:hidden"
										src={casestudy.poster}
										alt={casestudy.title}
									/>

									{/* Image for Large Devices */}
									<img
										className="hidden lg:block cursor-pointer lg:transition-transform lg:duration-300 lg:transform lg:hover:-translate-y-2"
										src={casestudy.lgPoster}
										alt={casestudy.title}
									/>

									{/* Overlay for Large Screens */}
									<div className="hidden lg:flex lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:bg-gradient-to-t lg:from-black/70 lg:to-transparent lg:flex-col lg:items-center lg:justify-center lg:text-white lg:opacity-0 lg:hover:opacity-100 lg:transition-opacity lg:duration-300">
										<p className="text-lg font-bold mb-2">
											View More
										</p>
										<div className="border-t-2 border-sky-blue w-10 mt-2"></div>
										<EastIcon className="mt-2 text-2xl" />
									</div>
								</div>
							</Link>
							<div className="caseStudy__description lg:hidden">
								<h3 className="header py-2">
									{casestudy.name}
								</h3>
								<p>{casestudy.shortDescription}</p>
								<Link
									className="view__caseStudy flex justify-end md:mt-4"
									to={`/casestudy/${casestudy.slug}`}
								>
									<button className="mr-4 text-deep-ocean-blue">
										View More
									</button>
									<EastIcon className="text-deep-ocean-blue" />
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default CaseStudy;
