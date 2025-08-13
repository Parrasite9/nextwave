// src/Pages/CaseStudies.jsx
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseStudyContext from '../Components/Data/CaseStudyContext';

// --- small UI helpers ---
function Pill({ children }) {
	return (
		<span className="mr-2 mb-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs leading-5">
			{children}
		</span>
	);
}

function PillButton({ label, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="mr-2 mb-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs leading-5 hover:bg-gray-50"
		>
			{label}
		</button>
	);
}

function FeaturedBadge() {
	return (
		<span className="absolute left-3 top-3 rounded-md bg-yellow-400/90 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-black">
			Featured
		</span>
	);
}

function Card({ item, onPickService, onPickIndustry }) {
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

					{/* Clickable pills (service/industry) + static outcome */}
					<div className="mt-3 flex flex-wrap">
						{serviceCategories.slice(0, 2).map((c) => (
							<PillButton
								key={`svc-${slug}-${c}`}
								label={c}
								onClick={(e) => {
									e.preventDefault();
									onPickService?.(c);
								}}
							/>
						))}
						{industryCategories.slice(0, 1).map((c) => (
							<PillButton
								key={`ind-${slug}-${c}`}
								label={c}
								onClick={(e) => {
									e.preventDefault();
									onPickIndustry?.(c);
								}}
							/>
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

	// URL sync
	const [searchParams, setSearchParams] = useSearchParams();

	// read from URL on mount
	useEffect(() => {
		const q0 = searchParams.get('q') ?? '';
		const svc0 = searchParams.get('svc') ?? 'All';
		const ind0 = searchParams.get('ind') ?? 'All';
		const sort0 = searchParams.get('sort') ?? 'order';
		setQ(q0);
		setServiceFilter(svc0);
		setIndustryFilter(ind0);
		setSort(sort0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // only once

	// write state to URL whenever filters change
	useEffect(() => {
		const next = new URLSearchParams();
		if (q) next.set('q', q);
		if (serviceFilter !== 'All') next.set('svc', serviceFilter);
		if (industryFilter !== 'All') next.set('ind', industryFilter);
		if (sort !== 'order') next.set('sort', sort);
		setSearchParams(next);
	}, [q, serviceFilter, industryFilter, sort, setSearchParams]);

	// options for selects
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

	// filtered/sorted list
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
			// 'order' default
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
					{/* Optional JSON-LD ItemList for SEO */}
					{filtered.length > 0 && (
						<script type="application/ld+json">
							{JSON.stringify({
								'@context': 'https://schema.org',
								'@type': 'ItemList',
								itemListElement: filtered.map((cs, idx) => ({
									'@type': 'ListItem',
									position: idx + 1,
									url: `https://www.nextwavewebstudio.com/casestudy/${cs.slug}`,
									name: cs.title || cs.name,
								})),
							})}
						</script>
					)}
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
						<label htmlFor="cs-search" className="sr-only">
							Search case studies
						</label>
						<input
							id="cs-search"
							value={q}
							onChange={(e) => setQ(e.target.value)}
							placeholder="Search by title, service, industry…"
							className="w-full rounded-xl border px-3 py-2 outline-none ring-0 focus:border-gray-400"
							aria-label="Search case studies"
						/>
					</div>

					<div>
						<label htmlFor="cs-service" className="sr-only">
							Filter by service
						</label>
						<select
							id="cs-service"
							value={serviceFilter}
							onChange={(e) => setServiceFilter(e.target.value)}
							className="w-full rounded-xl border bg-white px-3 py-2"
							aria-label="Filter by service"
						>
							{services.map((s) => (
								<option key={`svc-${s}`} value={s}>
									{s}
								</option>
							))}
						</select>
					</div>

					<div>
						<label htmlFor="cs-industry" className="sr-only">
							Filter by industry
						</label>
						<select
							id="cs-industry"
							value={industryFilter}
							onChange={(e) => setIndustryFilter(e.target.value)}
							className="w-full rounded-xl border bg-white px-3 py-2"
							aria-label="Filter by industry"
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
									className={`rounded-lg border px-3 py-1 text-sm ${
										sort === 'order'
											? 'bg-gray-900 text-white'
											: 'bg-white'
									}`}
								>
									Custom
								</button>
								<button
									onClick={() => setSort('recent')}
									className={`rounded-lg border px-3 py-1 text-sm ${
										sort === 'recent'
											? 'bg-gray-900 text-white'
											: 'bg-white'
									}`}
								>
									Most recent
								</button>
								<button
									onClick={() => setSort('name')}
									className={`rounded-lg border px-3 py-1 text-sm ${
										sort === 'name'
											? 'bg-gray-900 text-white'
											: 'bg-white'
									}`}
								>
									A–Z
								</button>
							</div>
							<span
								className="ml-auto text-sm text-gray-600"
								aria-live="polite"
							>
								Showing {filtered.length} of{' '}
								{caseStudies?.length ?? 0}
							</span>
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
							<Card
								key={item.slug}
								item={item}
								onPickService={(c) => setServiceFilter(c)}
								onPickIndustry={(c) => setIndustryFilter(c)}
							/>
						))}
					</div>
				)}
			</div>
		</HelmetProvider>
	);
}
