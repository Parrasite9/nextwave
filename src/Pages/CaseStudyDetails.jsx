import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import CaseStudyContext from '../Components/Data/CaseStudyContext';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import VideoPlayer from '../Components/Video/VideoPlayer';
import CaseStudySwiper from '../Components/Swipers/CaseStudySwiper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { generateSlug } from '../Globals/Utils';

function CaseStudyDetails() {
	const { slug } = useParams();
	const navigate = useNavigate();
	const { caseStudies } = useContext(CaseStudyContext);

	const [activeSection, setActiveSection] = useState('');
	const [hoveredSection, setHoveredSection] = useState(null);
	const [caseStudy, setCaseStudy] = useState(null);
	const [isNotFound, setIsNotFound] = useState(false);
	const [isHydrating, setIsHydrating] = useState(false);

	const totalDollarSigns = 5;

	// fetch the case study from context by slug
	useEffect(() => {
		const cleanSlug = (slug || '').split('?')[0].toLowerCase();

		const foundCaseStudy = caseStudies.find(
			(study) => (study.slug || '').toLowerCase() === cleanSlug,
		);

		if (foundCaseStudy) {
			setCaseStudy(foundCaseStudy);
			setIsNotFound(false);

			// normalize URL if someone entered /name instead of /slug
			if (
				generateSlug(foundCaseStudy.name || '') !== foundCaseStudy.slug
			) {
				navigate(`/casestudy/${foundCaseStudy.slug}`, {
					replace: true,
				});
			}
		} else {
			const nameCaseStudy = caseStudies.find(
				(study) => generateSlug(study.name || '') === cleanSlug,
			);
			if (nameCaseStudy) {
				navigate(`/casestudy/${nameCaseStudy.slug}`, { replace: true });
			} else {
				setIsNotFound(true);
			}
		}
	}, [slug, navigate, caseStudies]);

	// If deep fields are missing, hydrate from a JSON file in /public/data/case-studies/
	useEffect(() => {
		const loadDeepData = async () => {
			if (!caseStudy) return;
			const hasDeep =
				caseStudy.problem ||
				caseStudy.goal ||
				caseStudy.impact ||
				caseStudy.ideation ||
				caseStudy.testing ||
				caseStudy.development ||
				caseStudy.final ||
				caseStudy.future ||
				(Array.isArray(caseStudy.image) && caseStudy.image.length > 0);

			if (hasDeep) return; // nothing to do

			setIsHydrating(true);
			try {
				// Build candidate paths:
				const slugName = caseStudy.slug || '';
				const candidates = [
					// matches your file: public/case-studies/project-boost.json
					`/case-studies/${slugName}.json`,
					// also try no-dash variant if you ever keep the old naming
					`/case-studies/${slugName.replace(/-/g, '')}.json`,
				];

				let full = null;
				for (const path of candidates) {
					try {
						const res = await fetch(path, { cache: 'no-store' });
						if (res.ok) {
							full = await res.json();
							break;
						}
					} catch (_) {
						// try next candidate
					}
				}

				if (full) {
					setCaseStudy((prev) => ({ ...prev, ...full }));
				} else {
					// couldn't load; keep showing what we have
					// (optional) console.warn('No details JSON found for', slugName);
				}
			} finally {
				setIsHydrating(false);
			}
		};

		loadDeepData();
	}, [caseStudy]);

	// number of $ icons to show
	const currentPriceLevel =
		typeof caseStudy?.price === 'string' ? caseStudy.price.length : 0;

	// SAFE teaser renderer
	const renderTeaser = (teaser, name) => {
		const t = typeof teaser === 'string' ? teaser : '';
		const n = typeof name === 'string' ? name : '';
		if (!t.includes('{name}')) return t ? <>{t}</> : n ? <>{n}</> : null;
		const parts = t.split('{name}');
		return parts.map((part, index) => (
			<React.Fragment key={index}>
				{part}
				{index < parts.length - 1 && (
					<span className="font-bold underline">{n}</span>
				)}
			</React.Fragment>
		));
	};

	function renderMedia(sectionData) {
		const { mediaType, mediaUrl, header } = sectionData || {};
		if (!mediaType || !mediaUrl) return null;

		if (mediaType === 'image') {
			return (
				<img
					loading="lazy"
					className="mb-8"
					src={mediaUrl}
					alt={`${header || 'Section'} Image`}
				/>
			);
		}
		if (mediaType === 'video') {
			return <VideoPlayer className="mb-8" videoSrc={mediaUrl} />;
		}
		return null;
	}

	// scroll to top on mount
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// update active section on scroll
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

	if (isNotFound) {
		return <p className="mb-8">No Case Study Found</p>;
	}
	if (!caseStudy) {
		return null; // while loading/redirecting
	}

	// ---- SAFE PALETTE (dynamic colors) ----
	const palette = caseStudy.colors ?? {};
	const primary = palette.primary ?? 'var(--yale-blue)';
	const secondary = palette.secondary ?? primary;
	const ctaButton = palette.ctaButton ?? primary;
	const ctaButtonText = palette.ctaButtonText ?? '#ffffff';
	const customGradient = palette.customGradient;

	return (
		<HelmetProvider>
			<div className="p-8">
				<Helmet>
					<title>
						{caseStudy.title || caseStudy.name || 'Case Study'}
					</title>
					<meta
						name="description"
						content={
							caseStudy.teaser || caseStudy.shortDescription || ''
						}
					/>
					<meta name="keywords" content={caseStudy.seo || ''} />
					<meta property="og:title" content={caseStudy.title || ''} />
					<meta
						property="og:description"
						content={
							caseStudy.teaser || caseStudy.shortDescription || ''
						}
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:image"
						content={caseStudy.poster || ''}
					/>
					<meta
						property="og:url"
						content={`https://www.nextwavewebstudio.com/casestudy/${caseStudy.slug || ''}`}
					/>
					<link
						rel="canonical"
						href={`https://nextwavewebstudio.com/casestudy/${caseStudy.slug || ''}`}
					/>
					<meta name="robots" content="index, follow" />
					<script type="application/ld+json">
						{JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'CreativeWork',
							name: caseStudy.title || '',
							description:
								caseStudy.teaser ||
								caseStudy.shortDescription ||
								'',
							url: `https://www.nextwavewebstudio.com/casestudy/${caseStudy.slug || ''}`,
							author: {
								'@type': 'Organization',
								name: 'NextWave Web Studio',
							},
							publisher: {
								'@type': 'Organization',
								name: 'NextWave Web Studio',
								logo: {
									'@type': 'ImageObject',
									url: 'https://nextwavewebstudio.com/images/logo.webp',
								},
							},
							datePublished: caseStudy.datePublished || '',
							image: caseStudy.poster || '',
							keywords: caseStudy.seo || '',
							mainEntityOfPage: `https://www.nextwavewebstudio.com/casestudy/${caseStudy.slug || ''}`,
						})}
					</script>
				</Helmet>

				<div className="caseStudy__hero mb-8 lg:w-2/3 lg:pt-16">
					<p
						className="inline-block py-2 mb-2 px-2 border rounded-lg text-xs md:text-sm lg:text-md xl:text-lg"
						style={{ color: secondary, borderColor: primary }}
					>
						{caseStudy.seo || 'Case Study'}
					</p>
					<h1
						className="pb-4 font-bold text-2xl lg:text-4xl xl:text-6xl"
						style={{ color: primary }}
					>
						{caseStudy.title || caseStudy.name}
					</h1>
					<p className="pb-4 lg:text-lg xl:text-xl">
						{renderTeaser(caseStudy.teaser, caseStudy.name)}
					</p>

					<div className="price__and__time flex space-x-4 lg:py-4">
						<div className="price py-1 px-4 border-2 border-soft-navy bg-soft-navy rounded-lg text-white xl:text-xl">
							{[...Array(totalDollarSigns)].map((_, index) => (
								<span
									key={index}
									className={
										index < currentPriceLevel
											? 'text-opacity-100'
											: 'text-opacity-50'
									}
									style={{
										opacity:
											index < currentPriceLevel ? 1 : 0.5,
									}}
								>
									$
								</span>
							))}
						</div>

						<div className="time__container">
							<p className="px-4 py-1 border-2 border-soft-navy bg-soft-navy rounded-lg text-white xl:text-xl">
								Built in {caseStudy.timeline || '-'}
							</p>
						</div>
					</div>

					<div className="build__button lg:pb-20">
						<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
							<button
								className="py-3 px-8 mt-4 rounded-xl text-white xl:text-xl"
								style={{
									backgroundColor: ctaButton,
									color: ctaButtonText,
								}}
							>
								Build Me One!
							</button>
						</Link>
					</div>
				</div>

				{/* SWIPER — only render when images are available */}
				{Array.isArray(caseStudy.image) &&
				caseStudy.image.length > 0 ? (
					<CaseStudySwiper caseStudy={caseStudy} />
				) : null}

				{/* MOBILE VIDEO (if any) */}
				<div
					className="video lg:hidden border-2 rounded-xl"
					style={{ background: customGradient }}
				>
					{caseStudy.hasVideo ? (
						<div className="video__and__details">
							<video controls className="w-full">
								<source
									src={caseStudy.videoPath}
									type="video/mp4"
								/>
							</video>
							<div className="videoDetails__container pb-8 flex flex-col justify-center items-center">
								<h2
									className="mt-4 pb-4 font-bold text-2xl text-center md:text-3xl"
									style={{ color: '#ffffff' }}
								>
									Let's Talk About Your Website Project!
								</h2>
								<button
									className="py-3 px-8 mt-4 rounded-xl text-white border-2 border-white"
									style={{
										backgroundColor: ctaButton,
										color: ctaButtonText,
									}}
								>
									Book A Zoom Call
								</button>
								<div className="icons__and__text__container">
									<div className="icon__and__text flex mt-4 md:mt-8">
										<CheckCircleIcon className="mr-4 text-green-400" />
										<p className="text-white md:text-lg">
											No Pressure
										</p>
									</div>
									<div className="icon__and__text flex mt-4">
										<CheckCircleIcon className="mr-4 text-green-400" />
										<p className="text-white md:text-lg">
											Get Pricing Quote
										</p>
									</div>
									<div className="icon__and__text flex mt-4">
										<CheckCircleIcon className="mr-4 text-green-400" />
										<p className="text-white md:text-lg">
											See More Site Examples
										</p>
									</div>
								</div>
							</div>
						</div>
					) : null}
				</div>

				<div className="parent grid grid-cols-1 lg:grid-cols-5 gap-4">
					{/* NAV */}
					<div className="caseStudy_navbar hidden top-4 lg:block sticky h-screen max-h-[500px]">
						<nav>
							<ul className="space-y-2">
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
											className="px-2 py-1 transition-colors duration-300"
											onMouseEnter={() =>
												setHoveredSection(section)
											}
											onMouseLeave={() =>
												setHoveredSection(null)
											}
											style={{
												color:
													activeSection === section
														? primary
														: hoveredSection ===
															  section
															? secondary
															: 'inherit',
											}}
										>
											{section.charAt(0).toUpperCase() +
												section.slice(1)}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>

					{/* CONTENT */}
					<div
						className={`div2 ${caseStudy.hasVideo ? 'lg:col-span-3' : 'lg:col-span-4'}`}
					>
						<div className="caseStudyInfo">
							<h2
								id="intro"
								className="caseStudyHeader caseStudySection my-4 underline"
								style={{ color: primary }}
							>
								Intro
							</h2>
							<p className="mb-8">{caseStudy.intro || ''}</p>

							<h2
								id="role"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								Our Role
							</h2>
							<p className="mb-8">{caseStudy.role || ''}</p>

							<h2
								id="problem"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								The Problem
							</h2>
							{caseStudy.problem && (
								<section>
									<h2 className="mb-4">
										{caseStudy.problem.header}
									</h2>
									<p className="mb-8">
										{caseStudy.problem.headerDetail}
									</p>
									{caseStudy.problem?.subheaders?.map(
										(subheader, index) => (
											<div
												className="caseStudy_subheaders"
												key={`problem-${index}`}
											>
												<h3
													className="mb-4 text-lg font-semibold"
													style={{ color: secondary }}
												>
													{subheader.subheader}
												</h3>
												<p className="mb-8">
													{subheader.subHeaderDetail}
												</p>
												{renderMedia(subheader)}
											</div>
										),
									)}
								</section>
							)}

							<h2
								id="goal"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								Goal
							</h2>
							{caseStudy.goal && (
								<section>
									<h2 className="mb-4">
										{caseStudy.goal.header}
									</h2>
									<p className="mb-8">
										{caseStudy.goal.headerDetail}
									</p>
									{caseStudy.goal?.subheaders?.map(
										(subheader, index) => (
											<div
												className="caseStudy_subheaders"
												key={`goals-${index}`}
											>
												<h3
													className="mb-4 text-lg font-semibold"
													style={{ color: secondary }}
												>
													{subheader.subheader}
												</h3>
												<p className="mb-8">
													{subheader.subHeaderDetail}
												</p>
												{renderMedia(subheader)}
											</div>
										),
									)}
								</section>
							)}

							<h2
								id="impact"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								Impact
							</h2>
							{caseStudy.impact && (
								<section>
									<h2 className="mb-4">
										{caseStudy.impact.header}
									</h2>
									<p className="mb-8">
										{caseStudy.impact.headerDetail}
									</p>
									{renderMedia(caseStudy.impact)}
									{caseStudy.impact?.subheaders?.map(
										(subheader, index) => (
											<div
												className="caseStudy_subheaders"
												key={`impact-${index}`}
											>
												<h3
													className="mb-4 text-lg font-semibold"
													style={{ color: secondary }}
												>
													{subheader.subheader}
												</h3>
												<p className="mb-8">
													{subheader.subHeaderDetail}
												</p>
												{renderMedia(subheader)}
											</div>
										),
									)}
								</section>
							)}

							<h2
								id="ideation"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								Ideation
							</h2>
							{caseStudy.ideation && (
								<section>
									<h2 className="mb-4">
										{caseStudy.ideation.header}
									</h2>
									<p className="mb-8">
										{caseStudy.ideation.headerDetail}
									</p>
									{renderMedia(caseStudy.ideation)}
									{caseStudy.ideation?.subheaders?.map(
										(subheader, index) => (
											<div
												className="caseStudy_subheaders"
												key={`ideation-${index}`}
											>
												<h3
													className="mb-4 text-lg font-semibold"
													style={{ color: secondary }}
												>
													{subheader.subheader}
												</h3>
												<p className="mb-8">
													{subheader.subHeaderDetail}
												</p>
												{renderMedia(subheader)}
											</div>
										),
									)}
								</section>
							)}

							<h2
								id="testing"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								Testing
							</h2>
							{caseStudy.testing && (
								<section>
									<h2 className="mb-4">
										{caseStudy.testing.header}
									</h2>
									<p className="mb-8">
										{caseStudy.testing.headerDetail}
									</p>
									{renderMedia(caseStudy.testing)}
									{caseStudy.testing?.subheaders?.map(
										(subheader, index) => (
											<div
												className="caseStudy_subheaders"
												key={`testing-${index}`}
											>
												<h3
													className="mb-4 text-lg font-semibold"
													style={{ color: secondary }}
												>
													{subheader.subheader}
												</h3>
												<p className="mb-8">
													{subheader.subHeaderDetail}
												</p>
												{renderMedia(subheader)}
											</div>
										),
									)}
								</section>
							)}

							<h2
								id="development"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								Development
							</h2>
							{caseStudy.development && (
								<section>
									<h2 className="mb-4">
										{caseStudy.development.header}
									</h2>
									<p className="mb-8">
										{caseStudy.development.headerDetail}
									</p>
									{renderMedia(caseStudy.development)}
									{caseStudy.development?.subheaders?.map(
										(subheader, index) => (
											<div
												className="caseStudy_subheaders"
												key={`development-${index}`}
											>
												<h3
													className="mb-4 text-lg font-semibold"
													style={{ color: secondary }}
												>
													{subheader.subheader}
												</h3>
												<p className="mb-8">
													{subheader.subHeaderDetail}
												</p>
												{renderMedia(subheader)}
											</div>
										),
									)}
								</section>
							)}

							<h2
								id="final"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								Final Design
							</h2>
							{caseStudy.final && (
								<section>
									<h2 className="mb-4">
										{caseStudy.final.header}
									</h2>
									<p className="mb-8">
										{caseStudy.final.headerDetail}
									</p>
									{renderMedia(caseStudy.final)}
									{caseStudy.final?.subheaders?.map(
										(subheader, index) => (
											<div
												className="caseStudy_subheaders"
												key={`final-${index}`}
											>
												<h3
													className="mb-4 text-lg font-semibold"
													style={{ color: secondary }}
												>
													{subheader.subheader}
												</h3>
												<p className="mb-8">
													{subheader.subHeaderDetail}
												</p>
												{renderMedia(subheader)}
											</div>
										),
									)}
								</section>
							)}

							<h2
								id="future"
								className="caseStudyHeader caseStudySection mb-4 underline"
								style={{ color: primary }}
							>
								Future
							</h2>
							{caseStudy.future && (
								<section>
									<h2 className="mb-4">
										{caseStudy.future.header}
									</h2>
									<p className="mb-8">
										{caseStudy.future.headerDetail}
									</p>
									{caseStudy.future?.subheaders?.map(
										(subheader, index) => (
											<div
												className="caseStudy_subheaders"
												key={`future-${index}`}
											>
												<h3
													className="mb-4 text-lg font-semibold"
													style={{ color: secondary }}
												>
													{subheader.subheader}
												</h3>
												<p className="mb-8">
													{subheader.subHeaderDetail}
												</p>
												{renderMedia(subheader)}
											</div>
										),
									)}
								</section>
							)}

							{/* Small status hint for you (dev-only): show when hydrating */}
							{isHydrating ? (
								<p className="text-xs opacity-70 mt-6">
									Loading details…
								</p>
							) : null}
						</div>
					</div>

					{/* VIDEO (desktop column) */}
					{caseStudy.hasVideo && (
						<div
							className="div3 sticky max-h-[500px] top-4 border-2 rounded-xl"
							style={{ background: customGradient }}
						>
							<div className="desktop__video__container hidden lg:block">
								<video controls className="w-full">
									<source
										src={caseStudy.videoPath}
										type="video/mp4"
									/>
								</video>

								<div className="videoDetails__container pb-8 flex flex-col justify-center items-center">
									<h2
										className="mt-4 pb-4 font-bold text-center xl:text-2xl"
										style={{ color: '#ffffff' }}
									>
										Let's Talk About Your Website Project!
									</h2>
									<button
										className="py-3 px-8 mt-4 rounded-xl text-white border-2 border-white transition-colors duration-300"
										style={{
											backgroundColor: ctaButton,
											color: ctaButtonText,
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor =
												'white';
											e.currentTarget.style.color =
												primary;
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor =
												ctaButton;
											e.currentTarget.style.color =
												ctaButtonText;
										}}
									>
										Book A Zoom Call
									</button>
									<div className="icons__and__text__container">
										<div className="icon__and__text flex mt-4">
											<CheckCircleIcon className="mr-4 text-green-400" />
											<p className="text-white">
												No Pressure
											</p>
										</div>
										<div className="icon__and__text flex mt-4">
											<CheckCircleIcon className="mr-4 text-green-400" />
											<p className="text-white">
												Get Pricing Quote
											</p>
										</div>
										<div className="icon__and__text flex mt-4">
											<CheckCircleIcon className="mr-4 text-green-400" />
											<p className="text-white">
												See More Site Examples
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</HelmetProvider>
	);
}

export default CaseStudyDetails;
