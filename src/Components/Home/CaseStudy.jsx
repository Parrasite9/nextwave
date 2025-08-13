// src/Components/Home/CaseStudy.jsx
import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import CaseStudyContext from '../Data/CaseStudyContext';

function Pill({ children }) {
	return (
		<span className="mr-2 mb-2 inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-medium text-sky-800">
			{children}
		</span>
	);
}

function FeaturedBadge() {
	return (
		<span className="absolute left-3 top-3 rounded-md bg-yellow-400/90 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-black">
			Featured
		</span>
	);
}

function Card({ item }) {
	const {
		slug,
		title,
		name,
		poster,
		lgPoster,
		shortDescription,
		serviceCategories = [],
		industryCategories = [],
		outcomeCategories = [],
		featured,
	} = item;

	const imageSrc = lgPoster || poster;

	return (
		<article className="group relative min-w-[86%] snap-start overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md md:min-w-0">
			{featured ? <FeaturedBadge /> : null}

			<Link to={`/casestudy/${slug}`} className="block">
				{/* Media */}
				<div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
					{imageSrc ? (
						<img
							loading="lazy"
							decoding="async"
							src={imageSrc}
							alt={title || name || 'Case study image'}
							sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 25vw"
							className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
							No image
						</div>
					)}

					{/* Optional hover overlay (desktop) */}
					<div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 lg:flex lg:opacity-0 lg:group-hover:opacity-100">
						<div className="pointer-events-auto flex flex-col items-center text-white">
							<p className="text-lg font-bold">View More</p>
							<div className="mt-2 h-0.5 w-10 bg-sky-500" />
							<EastIcon className="mt-2 text-2xl" />
						</div>
					</div>
				</div>
			</Link>

			{/* Details (visible on all breakpoints) */}
			<div className="p-4">
				<h3 className="text-[17px] font-semibold leading-snug md:text-[18px]">
					{title || name}
				</h3>

				{shortDescription ? (
					<p className="mt-1 line-clamp-2 text-[13px] text-gray-600 md:text-[14px]">
						{shortDescription}
					</p>
				) : null}

				{/* Pills: show a few key tags */}
				<div className="mt-3 flex flex-wrap">
					{serviceCategories.slice(0, 1).map((c) => (
						<Pill key={`svc-${slug}-${c}`}>{c}</Pill>
					))}
					{industryCategories.slice(0, 1).map((c) => (
						<Pill key={`ind-${slug}-${c}`}>{c}</Pill>
					))}
					{outcomeCategories.slice(0, 1).map((c) => (
						<Pill key={`out-${slug}-${c}`}>{c}</Pill>
					))}
				</div>

				{/* CTA row */}
				<div className="mt-4 flex items-center justify-between">
					<Link
						to={`/casestudy/${slug}`}
						className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 active:translate-y-[1px]"
					>
						View case study
						<EastIcon fontSize="small" />
					</Link>

					{/* Optional subtle text link on desktop */}
					<Link
						to={`/casestudy/${slug}`}
						className="hidden text-sm font-medium text-sky-700 underline-offset-4 hover:underline lg:inline"
					>
						Details →
					</Link>
				</div>
			</div>
		</article>
	);
}

export default function CaseStudy() {
	const { caseStudies } = useContext(CaseStudyContext);
	const list = useMemo(() => (caseStudies || []).slice(0, 4), [caseStudies]);

	return (
		<section id="casestudy" className="py-10">
			<div className="px-6 md:px-8">
				{/* Divider heading */}
				<div className="mb-6 flex items-center justify-center gap-4 md:mb-8">
					<div className="h-px w-1/5 bg-sky-500 md:w-1/3" />
					<span className="text-2xl text-center font-bold md:text-3xl">
						Our Success Stories
					</span>
					<div className="h-px w-1/5 bg-sky-500 md:w-1/3" />
				</div>

				{/* Mobile: horizontal snap; Desktop: grid */}
				<div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-4 lg:grid-cols-4">
					{list.map((item) => (
						<Card key={item.slug} item={item} />
					))}
				</div>

				{/* View All */}
				{(caseStudies?.length || 0) > 4 ? (
					<div className="mt-8 flex justify-center">
						<Link to="/case-studies">
							<button className="rounded-xl bg-gray-900 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-black/90">
								View All Case Studies
							</button>
						</Link>
					</div>
				) : null}
			</div>
		</section>
	);
}
