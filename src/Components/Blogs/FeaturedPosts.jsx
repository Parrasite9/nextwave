import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateSlug } from '../../Globals/Utils';

export default function FeaturedPosts() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;
		fetch('/blogs/index.json', { cache: 'no-store' })
			.then((r) => r.json())
			.then((data) => {
				if (!isMounted) return;
				const featured = (data || []).filter((b) => b.featured);
				featured.sort((a, b) => new Date(b.date) - new Date(a.date));
				setItems(featured);
			})
			.catch(() => setItems([]))
			.finally(() => isMounted && setLoading(false));
		return () => {
			isMounted = false;
		};
	}, []);

	const Skeleton = () => (
		<div className="rounded-2xl border border-gray-200/70 bg-white/60 p-2 shadow-sm backdrop-blur">
			<div className="h-40 w-full animate-pulse rounded-xl bg-gray-200/70" />
			<div className="space-y-2 p-3">
				<div className="h-4 w-24 animate-pulse rounded bg-gray-200/70" />
				<div className="h-5 w-3/4 animate-pulse rounded bg-gray-200/70" />
				<div className="h-4 w-full animate-pulse rounded bg-gray-200/70" />
			</div>
		</div>
	);

	const SectionHeader = () => (
		<div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row">
			<div className="max-w-xl">
				<p className="mb-2 text-sm font-semibold tracking-wide text-sky-700">
					Featured Articles
				</p>
				<h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
					<span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
						Highlights for You
					</span>
				</h2>
				<p className="mt-3 text-gray-600">
					Explore our top picks to stay informed and inspired.
				</p>
			</div>
			<div className="hidden md:block">
				<Link to="/blogs">
					<button
						className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
						title="View all"
					>
						View All Blogs →
					</button>
				</Link>
			</div>
		</div>
	);

	if (loading) {
		return (
			<section className="relative flex justify-center px-[5%] py-16 md:py-24 lg:py-28">
				{/* Soft ambient background */}
				<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f7fafc] to-white" />
				<div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-sky-300/30 to-cyan-200/30 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-300/30 to-sky-200/30 blur-3xl" />

				<div className="container">
					<SectionHeader />
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
						{[...Array(4)].map((_, i) => (
							<Skeleton key={i} />
						))}
					</div>

					<div className="mt-10 flex justify-center md:hidden">
						<Link to="/blogs">
							<button className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/90">
								View All Blogs
							</button>
						</Link>
					</div>
				</div>
			</section>
		);
	}

	if (!items.length) return null;

	return (
		<section className="relative flex justify-center overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
			{/* Soft ambient background */}
			<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f7fafc] to-white" />
			<div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 max-w-none rounded-full bg-gradient-to-br from-sky-300/30 to-cyan-200/30 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 max-w-none rounded-full bg-gradient-to-tr from-emerald-300/30 to-sky-200/30 blur-3xl" />

			<div className="container">
				<SectionHeader />

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{items.map((blog) => {
						const slug = blog.slug || generateSlug(blog.title);
						const hero =
							blog.heroImg ||
							'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg';
						const heroAlt = blog.heroAlt || blog.title;
						const intro = (
							blog.intro ||
							blog.introduction ||
							''
						).trim();
						const chip =
							blog.category ||
							(blog.tags && blog.tags[0]) ||
							'General';

						return (
							<article
								key={blog.id}
								className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/70 p-2 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 hover:shadow-xl"
							>
								{/* gradient halo on hover */}
								<div
									className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
									style={{
										background:
											'radial-gradient(120px 120px at 80% 0%, rgba(14,165,233,0.12), transparent 60%), radial-gradient(120px 120px at 0% 100%, rgba(16,185,129,0.12), transparent 60%)',
									}}
								/>

								<Link
									to={`/blog/${slug}`}
									className="relative z-10 block"
								>
									<div className="overflow-hidden rounded-xl">
										<img
											loading="lazy"
											src={hero}
											alt={heroAlt}
											className="aspect-[3/2] w-full origin-center object-cover transition-transform duration-500 group-hover:scale-[1.03]"
										/>
									</div>
								</Link>

								<div className="relative z-10 p-3">
									<div className="mb-2 flex items-center gap-2">
										<span className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 px-2.5 py-1 text-xs font-semibold text-sky-700 ring-1 ring-inset ring-sky-300/40">
											{chip}
										</span>
									</div>

									<Link
										to={`/blog/${slug}`}
										className="block"
									>
										<h3 className="text-lg font-extrabold tracking-tight text-gray-900 md:text-xl">
											{blog.title}
										</h3>
									</Link>

									<p className="mt-2 text-sm text-gray-600">
										{intro
											? intro.length > 120
												? `${intro.slice(0, 120)}…`
												: intro
											: ''}
									</p>

									<div className="mt-4 flex items-center gap-3">
										<img
											loading="lazy"
											src={
												blog.authorImage ||
												'/android-chrome-512x512.png'
											}
											alt={blog.author || 'Author'}
											className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200"
										/>
										<div className="min-w-0">
											<p className="truncate text-xs font-semibold text-gray-800">
												{blog.author || 'Anonymous'}
											</p>
											<p className="truncate text-xs text-gray-500">
												{blog.date || 'Unknown Date'}{' '}
												<span className="mx-1">•</span>{' '}
												{blog.readTime || '5 min read'}
											</p>
										</div>
									</div>

									<div className="mt-4">
										<Link
											to={`/blog/${slug}`}
											className="inline-flex items-center gap-1 rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
										>
											Read Article →
										</Link>
									</div>
								</div>
							</article>
						);
					})}
				</div>

				<div className="mt-10 flex justify-center md:hidden">
					<Link to="/blogs">
						<button className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/90">
							View All Blogs
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
