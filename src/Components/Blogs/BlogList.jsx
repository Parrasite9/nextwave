import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { generateSlug } from '../../Globals/Utils';

// ── Categories aligned to services ────────────────────────────────────────────
const CATEGORIES = [
	{
		key: 'web-design',
		label: 'Web Design & Development',
		blurb: 'UX, performance, builds, and site strategy.',
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
			>
				<path
					d="M4 6h16M4 10h16M4 18h16M8 14h8"
					strokeLinecap="round"
				/>
			</svg>
		),
		tagMatch: [
			'Web Design',
			'Web Development',
			'UX',
			'UI',
			'Website Performance',
			'Website Redesign',
		],
	},
	{
		key: 'seo-local',
		label: 'SEO & Local Search',
		blurb: 'Rank higher, get found in Maps, win local.',
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
			>
				<path d="M12 22s7-5.2 7-12a7 7 0 10-14 0c0 6.8 7 12 7 12z" />
				<circle cx="12" cy="10" r="2.5" />
			</svg>
		),
		tagMatch: [
			'SEO',
			'Local SEO',
			'Google Ranking',
			'Google Business Profile',
			'Midland-Odessa',
		],
	},
	{
		key: 'digital-marketing',
		label: 'Digital Marketing',
		blurb: 'Paid ads, socials, email, funnels.',
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
			>
				<path
					d="M3 11h5l6-6v20l-6-6H3z"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		tagMatch: ['Email Marketing', 'Campaigns', 'PPC', 'Ads', 'Klaviyo'],
	},
	{
		key: 'ai-automation',
		label: 'AI & Automation',
		blurb: 'Smarter ops, better margins.',
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
			>
				<circle cx="12" cy="12" r="3" />
				<path
					d="M19.4 15a7.5 7.5 0 01-2.4 2.4M4.6 9A7.5 7.5 0 017 6.6"
					strokeLinecap="round"
				/>
			</svg>
		),
		tagMatch: ['Automation', 'AI', 'Workflows'],
	},
	{
		key: 'branding-content',
		label: 'Branding & Content',
		blurb: 'Positioning, messaging, authority.',
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
			>
				<path d="M4 4h16v16H4z" />
				<path d="M8 8h8M8 12h5" strokeLinecap="round" />
			</svg>
		),
		tagMatch: ['Branding', 'Content', 'Copywriting'],
	},
	{
		key: 'ecommerce',
		label: 'E‑Commerce',
		blurb: 'Product pages, CRO, checkout.',
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
			>
				<path d="M3 6h18l-2 11H5L3 6z" />
				<path d="M9 10v4M15 10v4" strokeLinecap="round" />
			</svg>
		),
		tagMatch: ['Ecommerce', 'Shopify', 'WooCommerce', 'Conversion'],
	},
	{
		key: 'small-business',
		label: 'Small Business Growth',
		blurb: 'Playbooks for local growth.',
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
			>
				<path
					d="M4 10l8-6 8 6v8a2 2 0 01-2 2h-3v-6H9v6H6a2 2 0 01-2-2z"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		tagMatch: ['Business Growth', 'Operations', 'Local Business'],
	},
];
const ALL = { key: 'all', label: 'All', blurb: 'Everything new & noteworthy.' };

export default function BlogList() {
	const [allPosts, setAllPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [q, setQ] = useState('');
	const [sort, setSort] = useState('newest');

	const location = useLocation();
	const navigate = useNavigate();
	const params = new URLSearchParams(location.search);
	const initialCat = params.get('cat') || 'all';
	const [activeCat, setActiveCat] = useState(initialCat);

	// fetch + normalize
	useEffect(() => {
		window.scrollTo(0, 0);
		setLoading(true);
		fetch('/blogs/index.json', { cache: 'no-store' })
			.then((r) => r.json())
			.then((data) => {
				const normalized = (data || []).map((p) => ({
					id: p.id,
					title: p.title,
					date: p.date,
					tags: p.tags || [],
					featured: !!p.featured,
					heroImg: p.heroImg,
					heroAlt: p.heroAlt || p.title,
					intro: p.intro || '',
					author: p.author || 'NextWave | Web Studio',
					readTime: p.readTime || '5 min read',
					slug: p.slug || generateSlug(p.title),
					category: p.category || null,
				}));
				setAllPosts(normalized);
			})
			.catch(() => setAllPosts([]))
			.finally(() => setLoading(false));
	}, []);

	// sync URL with category
	useEffect(() => {
		const sp = new URLSearchParams(location.search);
		if (activeCat === 'all') sp.delete('cat');
		else sp.set('cat', activeCat);
		navigate({ search: sp.toString() }, { replace: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeCat]);

	// infer category if not explicitly set
	const categorized = useMemo(() => {
		return allPosts.map((p) => {
			if (p.category) return p;
			const hit = CATEGORIES.find((c) =>
				(p.tags || []).some((t) =>
					c.tagMatch
						.map((x) => x.toLowerCase())
						.includes(String(t).toLowerCase()),
				),
			);
			return { ...p, category: hit?.key || 'small-business' };
		});
	}, [allPosts]);

	// counts per category (for badges)
	const counts = useMemo(() => {
		const m = { all: categorized.length };
		CATEGORIES.forEach(
			(c) =>
				(m[c.key] = categorized.filter(
					(p) => p.category === c.key,
				).length),
		);
		return m;
	}, [categorized]);

	// filters
	const filtered = useMemo(() => {
		let arr = categorized;
		if (activeCat !== 'all')
			arr = arr.filter((p) => p.category === activeCat);
		if (q.trim()) {
			const s = q.trim().toLowerCase();
			arr = arr.filter(
				(p) =>
					p.title.toLowerCase().includes(s) ||
					p.intro.toLowerCase().includes(s) ||
					(p.tags || []).some((t) =>
						String(t).toLowerCase().includes(s),
					),
			);
		}
		if (sort === 'newest')
			arr = [...arr].sort((a, b) => new Date(b.date) - new Date(a.date));
		else if (sort === 'oldest')
			arr = [...arr].sort((a, b) => new Date(a.date) - new Date(b.date));
		else if (sort === 'featured')
			arr = [...arr].sort(
				(a, b) => Number(b.featured) - Number(a.featured),
			);
		return arr;
	}, [categorized, activeCat, q, sort]);

	return (
		<section className="relative flex justify-center px-[5%] py-16 md:py-24 lg:py-28 overflow-x-hidden">
			{/* soft accent glow */}
			<div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-40 max-w-5xl rounded-full bg-gradient-to-r from-sky-200/40 via-cyan-200/30 to-emerald-200/40 blur-2xl" />

			<div className="container relative w-full max-w-screen-xl mx-auto">
				{/* Header */}
				<div className="mb-8 text-center">
					<p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
						Blogs
					</p>
					<h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
						Smart Solutions
					</h1>
					<p className="mx-auto mt-3 max-w-2xl text-gray-600">
						Learn how to maximize your online potential with
						expert-driven articles, tailored for growth.
					</p>
				</div>

				{/* ── Controls: mobile stacked; desktop split row ───────────────────── */}
				<div className="mb-8">
					{/* Row 1 on desktop: search left, sort right. On mobile this is just search */}
					<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						{/* Search */}
						<div className="relative w-full sm:max-w-lg">
							<input
								value={q}
								onChange={(e) => setQ(e.target.value)}
								placeholder="Search articles…"
								className="w-full rounded-2xl border border-gray-300 bg-white/80 px-4 py-3.5 text-base outline-none focus:border-gray-400"
								aria-label="Search articles"
							/>
							<span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
								<svg
									viewBox="0 0 24 24"
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.6"
								>
									<circle cx="11" cy="11" r="7" />
									<path
										d="M20 20l-3.5-3.5"
										strokeLinecap="round"
									/>
								</svg>
							</span>
						</div>

						{/* Desktop sort */}
						<div className="hidden sm:flex items-center gap-2">
							<label
								className="text-sm text-gray-600"
								htmlFor="sortSelect"
							>
								Sort
							</label>
							<select
								id="sortSelect"
								value={sort}
								onChange={(e) => setSort(e.target.value)}
								className="rounded-xl border border-gray-300 bg-white/80 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
								aria-label="Sort posts"
							>
								<option value="newest">Newest</option>
								<option value="featured">Featured</option>
								<option value="oldest">Oldest</option>
							</select>
						</div>
					</div>

					{/* Mobile-only selects (full width, comfortable tap targets) */}
					<div className="mt-3 grid grid-cols-1 gap-3 sm:hidden">
						<select
							value={activeCat}
							onChange={(e) => setActiveCat(e.target.value)}
							className="w-full rounded-2xl border border-gray-300 bg-white/80 px-3 py-3.5 text-base outline-none focus:border-gray-400"
							aria-label="Filter by topic"
						>
							<option value="all">
								All topics ({counts.all || 0})
							</option>
							{CATEGORIES.map((c) => (
								<option key={c.key} value={c.key}>
									{c.label} ({counts[c.key] || 0})
								</option>
							))}
						</select>

						<select
							value={sort}
							onChange={(e) => setSort(e.target.value)}
							className="w-full rounded-2xl border border-gray-300 bg-white/80 px-3 py-3.5 text-base outline-none focus:border-gray-400"
							aria-label="Sort posts"
						>
							<option value="newest">Newest</option>
							<option value="featured">Featured</option>
							<option value="oldest">Oldest</option>
						</select>
					</div>
				</div>

				{/* ── Desktop/Tablet Category Cards (premium) ───────────────────────── */}
				<div className="mb-10 hidden sm:grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{[ALL, ...CATEGORIES].map((c) => {
						const key = c.key || 'all';
						const active = activeCat === key;
						const label = c.label || 'All';
						const count =
							counts[key] ?? (key === 'all' ? counts.all : 0);
						return (
							<button
								key={key}
								onClick={() => setActiveCat(key)}
								className={[
									'group text-left rounded-2xl border p-4 transition',
									active
										? 'border-sky-400 bg-white/90 shadow-md'
										: 'border-gray-200 bg-white/70 hover:border-gray-300',
								].join(' ')}
							>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<span
											className={
												active
													? 'text-sky-600'
													: 'text-gray-500'
											}
										>
											{c.icon}
										</span>
										<span className="text-sm font-semibold">
											{label}
										</span>
									</div>
									<span
										className={[
											'rounded-full px-2 py-0.5 text-[11px] font-semibold',
											active
												? 'bg-sky-100 text-sky-700'
												: 'bg-gray-100 text-gray-600',
										].join(' ')}
									>
										{count}
									</span>
								</div>
								<p className="mt-1 text-xs text-gray-600">
									{c.blurb || ''}
								</p>
							</button>
						);
					})}
				</div>

				{/* ── Posts grid ────────────────────────────────────────────────────── */}
				{loading ? (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className="h-64 animate-pulse rounded-2xl border border-gray-200 bg-gray-100"
							/>
						))}
					</div>
				) : filtered.length === 0 ? (
					<div className="rounded-2xl border border-gray-200 bg-white/70 p-8 text-center">
						<p className="text-sm text-gray-600">
							No posts found. Try another topic or search.
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{filtered.map((blog) => (
							<article
								key={blog.id}
								className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm transition hover:shadow-md"
							>
								<Link
									to={`/blog/${blog.slug}`}
									className="block"
								>
									<div className="relative">
										<img
											loading="lazy"
											src={
												blog.heroImg ||
												'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg'
											}
											alt={blog.heroAlt}
											className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
										/>
										{blog.featured && (
											<span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow">
												Featured
											</span>
										)}
									</div>

									<div className="p-4">
										<div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-sky-600">
											{CATEGORIES.find(
												(c) => c.key === blog.category,
											)?.label || 'Small Business'}
										</div>
										<h3 className="text-lg font-bold leading-snug">
											{blog.title}
										</h3>
										<p className="mt-2 line-clamp-2 text-sm text-gray-600">
											{blog.intro}
										</p>
										<div className="mt-4 flex items-center justify-between text-xs text-gray-500">
											<span>{blog.date}</span>
											<span>{blog.readTime}</span>
										</div>
									</div>
								</Link>
							</article>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
