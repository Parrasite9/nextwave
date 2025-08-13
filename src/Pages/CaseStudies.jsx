// src/Pages/CaseStudies.jsx
import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseStudyContext from '../Components/Data/CaseStudyContext';

function Pill({ children }) {
	return (
		<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs leading-5 mr-2 mb-2">
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
		datePublished,
	} = item;

	const imageSrc = lgPoster || poster;

	return (
		<article className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
			{featured ? <FeaturedBadge /> : null}

			<Link to={`/casestudy/${slug}`} className="block">
				<div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
					{imageSrc ? (
						<img
							loading="lazy"
							src={imageSrc}
							alt={title || name || 'Case study image'}
							className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
							No image
						</div>
					)}
				</div>

				<div className="p-4">
					<h3 className="text-base font-semibold leading-snug md:text-lg">
						{title || name}
					</h3>
					<p className="mt-1 line-clamp-2 text-sm text-gray-600">
						{shortDescription}
					</p>

					<div className="mt-3 flex flex-wrap">
						{serviceCategories.slice(0, 2).map((c) => (
							<Pill key={`svc-${slug}-${c}`}>{c}</Pill>
						))}
						{industryCategories.slice(0, 1).map((c) => (
							<Pill key={`ind-${slug}-${c}`}>{c}</Pill>
						))}
						{outcomeCategories.slice(0, 1).map((c) => (
							<Pill key={`out-${slug}-${c}`}>{c}</Pill>
						))}
					</div>

					{datePublished ? (
						<p className="mt-2 text-xs text-gray-500">
							Published{' '}
							{new Date(datePublished).toLocaleDateString()}
						</p>
					) : null}
				</div>
			</Link>
		</article>
	);
}

export default function CaseStudies() {
	const { caseStudies } = useContext(CaseStudyContext);

	// UI state
	const [q, setQ] = useState('');
	const [serviceFilter, setServiceFilter] = useState('All');
	const [industryFilter, setIndustryFilter] = useState('All');
	const [sort, setSort] = useState('order'); // 'order' | 'recent' | 'name'

	const { services, industries } = useMemo(() => {
		const svc = new Set();
		const ind = new Set();
		(caseStudies || []).forEach((cs) => {
			(cs.serviceCategories || []).forEach((x) => svc.add(x));
			(cs.industryCategories || []).forEach((x) => ind.add(x));
		});
		return {
			services: ['All', ...Array.from(svc)],
			industries: ['All', ...Array.from(ind)],
		};
	}, [caseStudies]);

	const filtered = useMemo(() => {
		let list = [...(caseStudies || [])];

		// search
		const query = q.trim().toLowerCase();
		if (query) {
			list = list.filter((i) => {
				const hay = [
					i.title,
					i.name,
					i.shortDescription,
					...(i.serviceCategories || []),
					...(i.industryCategories || []),
					...(i.outcomeCategories || []),
				]
					.filter(Boolean)
					.join(' ')
					.toLowerCase();
				return hay.includes(query);
			});
		}

		// filters
		if (serviceFilter !== 'All') {
			list = list.filter((i) =>
				(i.serviceCategories || []).includes(serviceFilter),
			);
		}
		if (industryFilter !== 'All') {
			list = list.filter((i) =>
				(i.industryCategories || []).includes(industryFilter),
			);
		}

		// sort
		if (sort === 'recent') {
			list.sort(
				(a, b) =>
					new Date(b.datePublished || 0) -
					new Date(a.datePublished || 0),
			);
		} else if (sort === 'name') {
			list.sort((a, b) =>
				(a.name || '').localeCompare(b.name || '', undefined, {
					sensitivity: 'base',
				}),
			);
		} else {
			// 'order' (fallback large number if missing)
			list.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
		}

		return list;
	}, [caseStudies, q, serviceFilter, industryFilter, sort]);

	const isLoading = !caseStudies || caseStudies.length === 0;

	return (
		<HelmetProvider>
			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<Helmet>
					<title>Case Studies | NextWave Web Studio</title>
					<meta
						name="description"
						content="Browse our case studies across industries: dashboards, automations, web design, and more."
					/>
				</Helmet>

				<header className="mb-8">
					<h1 className="text-3xl font-bold md:text-4xl">
						Case Studies
					</h1>
					<p className="mt-2 max-w-2xl text-gray-600">
						Explore our work by service, industry, or outcome—and
						dive into the details.
					</p>
				</header>

				{/* Controls */}
				<section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-4">
					<div className="md:col-span-2">
						<input
							value={q}
							onChange={(e) => setQ(e.target.value)}
							placeholder="Search by title, service, industry…"
							className="w-full rounded-xl border px-3 py-2 outline-none ring-0 focus:border-gray-400"
						/>
					</div>

					<div>
						<select
							value={serviceFilter}
							onChange={(e) => setServiceFilter(e.target.value)}
							className="w-full rounded-xl border px-3 py-2 bg-white"
						>
							{services.map((s) => (
								<option key={`svc-${s}`} value={s}>
									{s}
								</option>
							))}
						</select>
					</div>

					<div>
						<select
							value={industryFilter}
							onChange={(e) => setIndustryFilter(e.target.value)}
							className="w-full rounded-xl border px-3 py-2 bg-white"
						>
							{industries.map((i) => (
								<option key={`ind-${i}`} value={i}>
									{i}
								</option>
							))}
						</select>
					</div>

					<div className="md:col-span-4">
						<div className="flex items-center gap-3">
							<span className="text-sm text-gray-600">
								Sort by:
							</span>
							<div className="flex gap-2">
								<button
									onClick={() => setSort('order')}
									className={`rounded-lg px-3 py-1 text-sm border ${
										sort === 'order'
											? 'bg-gray-900 text-white'
											: 'bg-white'
									}`}
								>
									Custom
								</button>
								<button
									onClick={() => setSort('recent')}
									className={`rounded-lg px-3 py-1 text-sm border ${
										sort === 'recent'
											? 'bg-gray-900 text-white'
											: 'bg-white'
									}`}
								>
									Most recent
								</button>
								<button
									onClick={() => setSort('name')}
									className={`rounded-lg px-3 py-1 text-sm border ${
										sort === 'name'
											? 'bg-gray-900 text-white'
											: 'bg-white'
									}`}
								>
									A–Z
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Grid */}
				{isLoading ? (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className="h-64 animate-pulse rounded-2xl bg-gray-100"
							/>
						))}
					</div>
				) : filtered.length === 0 ? (
					<div className="rounded-xl border p-8 text-center text-gray-600">
						No case studies match your filters.
					</div>
				) : (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{filtered.map((item) => (
							<Card key={item.slug} item={item} />
						))}
					</div>
				)}
			</div>
		</HelmetProvider>
	);
}
