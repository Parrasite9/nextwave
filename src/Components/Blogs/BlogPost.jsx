// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import blogsData from './Blogs.json';
// import { generateSlug } from '../../Globals/Utils';
// import { Link } from 'react-router-dom';
// import RecommendedPosts from './RecommendedPosts';
// import { Helmet } from 'react-helmet-async';

// const BlogPost = () => {
// 	console.log('blogsData:', blogsData);
// 	const { slug } = useParams();
// 	const blog = blogsData.find((b) => generateSlug(b.title) === slug);
// 	const [activeSection, setActiveSection] = useState('');
// 	const detailsRef = useRef(null);

// 	useEffect(() => {
// 		if (!blog) return;

// 		// Scroll to the top when the blog changes
// 		window.scrollTo(0, 0);

// 		const handleScroll = () => {
// 			const sections = document.querySelectorAll('.blog-section');
// 			let current = '';

// 			sections.forEach((section) => {
// 				const sectionTop = section.offsetTop;
// 				if (window.scrollY >= sectionTop - 60) {
// 					current = section.getAttribute('id');
// 				}
// 			});

// 			setActiveSection(current);
// 		};

// 		window.addEventListener('scroll', handleScroll);
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, [blog]);

// 	if (!blog) {
// 		return <h2>Blog not found</h2>;
// 	}

// 	return (
// 		<div>
// 			<Helmet>
// 				<title>{blog.title} | NextWave | Web Studio</title>
// 				<meta name="description" content={blog.content.introduction} />
// 				<meta name="keywords" content={blog.tags.join(', ')} />
// 				<meta property="og:title" content={blog.title} />
// 				<meta
// 					property="og:description"
// 					content={blog.content.introduction}
// 				/>
// 				<meta property="og:type" content="article" />
// 				<meta property="og:image" content={blog.titleImg.heroImg} />
// 				<meta
// 					property="og:url"
// 					content={`https://nextwavewebstudio.com/blog/${slug}`}
// 				/>
// 				<link
// 					rel="canonical"
// 					href={`https://nextwavewebstudio.com/blog/${slug}`}
// 				/>
// 				<meta name="robots" content="index, follow" />
// 			</Helmet>

// 			{/* Hero Section */}
// 			<div className="hero bg-gray-100 px-8 py-12 text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-4">
// 				<div className="lg:flex lg:flex-col lg:justify-center">
// 					{/* <div className="max-w-4xl mx-auto"> */}

// 					<h1 className="text-3xl lg:text-5xl font-bold mb-4 xl:text-6xl">
// 						{blog.title}
// 					</h1>
// 					<p className="text-sm text-gray-600 md:text-lg mb-4">
// 						Published on {blog.date} by {blog.author}
// 					</p>
// 					<p className="text-lg md:text-xl">
// 						{blog.content.introduction}
// 					</p>
// 					<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
// 						<button className="py-2 px-4 mt-4 rounded-md bg-bright-teal text-cool-white border-2 border-bright-teal hover:opacity-90 transition-opacity duration-300">
// 							{blog.ctaButton}
// 						</button>
// 					</Link>
// 				</div>
// 				<div className="blog__hero__img">
// 					<img
// 						loading="lazy"
// 						src={blog.titleImg.heroImg}
// 						alt={blog.titleImg.heroAlt}
// 					/>
// 				</div>
// 			</div>

// 			{/* Details Section */}
// 			<div
// 				ref={detailsRef}
// 				className="parent grid grid-cols-1 lg:grid-cols-5 gap-4"
// 			>
// 				{/* Side Navigation */}
// 				<div className="blog-navbar hidden lg:block sticky top-4 max-h-[500px]">
// 					<nav>
// 						<ul className="px-8 space-y-2">
// 							{blog.sections.map((section, index) => (
// 								<li key={index}>
// 									<a
// 										href={`#${generateSlug(section.heading)}`}
// 										className={`px-2 py-1 transition-colors duration-300 ${
// 											activeSection ===
// 											generateSlug(section.heading)
// 												? 'text-blue-500 font-bold'
// 												: 'text-gray-700'
// 										}`}
// 									>
// 										{section.heading}
// 									</a>
// 								</li>
// 							))}
// 						</ul>
// 					</nav>
// 				</div>

// 				{/* Blog Content */}
// 				<div className="blog-content lg:col-span-4 px-8 mb-8">
// 					{/* Blog Sections */}
// 					{blog.sections.map((section, index) => (
// 						<div
// 							key={index}
// 							id={generateSlug(section.heading)}
// 							className="blog-section mt-6"
// 						>
// 							<h2 className="text-xl font-bold header lg:text-2xl">
// 								{section.heading}
// 							</h2>

// 							{section.subsections.map((subsection, subIndex) => (
// 								<div key={subIndex} className="mt-4">
// 									<h3 className="text-lg font-semibold subheader lg:text-xl">
// 										{subsection.title}
// 									</h3>
// 									{subsection.content.map(
// 										(point, pointIndex) => {
// 											if (
// 												typeof point === 'object' &&
// 												point.bold
// 											) {
// 												return (
// 													<p
// 														key={pointIndex}
// 														className="mt-2"
// 													>
// 														<strong>
// 															{point.text}
// 														</strong>{' '}
// 														{point.suffix}
// 													</p>
// 												);
// 											}

// 											if (
// 												typeof point === 'object' &&
// 												point.link
// 											) {
// 												return (
// 													<p
// 														key={pointIndex}
// 														className="mt-2"
// 													>
// 														{point.text}{' '}
// 														<a
// 															href={
// 																point.link.url
// 															}
// 															target="_blank"
// 															rel="noopener noreferrer"
// 															aria-label={`Visit ${point.link.url}. Opens in a new tab.`}
// 															className="text-blue-500 underline"
// 														>
// 															{point.link.text}
// 														</a>{' '}
// 														{point.end}
// 													</p>
// 												);
// 											}

// 											return (
// 												<p
// 													key={pointIndex}
// 													className="mt-2"
// 												>
// 													{point}
// 												</p>
// 											);
// 										},
// 									)}
// 								</div>
// 							))}

// 							{section.image && (
// 								<div className="mt-4">
// 									<img
// 										loading="lazy"
// 										src={section.image.src}
// 										alt={section.image.alt}
// 										className="w-full"
// 									/>
// 								</div>
// 							)}
// 						</div>
// 					))}

// 					{/* Blog Conclusion */}
// 					<p className="mt-6">{blog.conclusion}</p>

// 					{/* Call-to-Action */}
// 					<p className="mt-6 text-lg font-bold">{blog.cta}</p>
// 					<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
// 						<button className="py-2 px-4 mt-4 rounded-md bg-bright-teal text-cool-white border-2 border-bright-teal hover:opacity-90 transition-opacity duration-300">
// 							{blog.ctaButton}
// 						</button>
// 					</Link>
// 					{/* <RecommendedPosts currentPostId={blog.id} recommended={blog.recommended} /> */}
// 				</div>
// 				{/* <RecommendedPosts currentPostId={blog.id} recommended={blog.recommended} /> */}
// 			</div>
// 			<RecommendedPosts currentPostId={blog.id} />
// 		</div>
// 	);
// };

// export default BlogPost;

// BlogPost.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generateSlug } from '../../Globals/Utils';

export default function BlogPost() {
	const { slug } = useParams();
	const [meta, setMeta] = useState(null); // from index.json
	const [post, setPost] = useState(null); // full content
	const [activeSection, setActiveSection] = useState('');
	const detailsRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		(async () => {
			const idx = await fetch('/blogs/index.json').then((r) => r.json());
			const found =
				idx.find((b) => b.slug === slug) ||
				idx.find((b) => generateSlug(b.title) === slug);
			setMeta(found || null);
			if (found?.slug) {
				const full = await fetch(`/blogs/${found.slug}.json`).then(
					(r) => r.json(),
				);
				setPost(full);
			}
		})();
	}, [slug]);

	useEffect(() => {
		if (!post) return;
		const onScroll = () => {
			const sections = document.querySelectorAll('.blog-section');
			let current = '';
			sections.forEach((s) => {
				const top = s.offsetTop;
				if (window.scrollY >= top - 60) current = s.getAttribute('id');
			});
			setActiveSection(current);
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [post]);

	if (!meta || !post) return <h2>Loading…</h2>;

	return (
		<div>
			<Helmet>
				<title>{post.title} | NextWave | Web Studio</title>
				<meta
					name="description"
					content={post.content?.introduction || meta.intro || ''}
				/>
				<meta name="keywords" content={(post.tags || []).join(', ')} />
				<meta property="og:title" content={post.title} />
				<meta
					property="og:description"
					content={post.content?.introduction || meta.intro || ''}
				/>
				<meta property="og:type" content="article" />
				<meta
					property="og:image"
					content={
						(post.titleImg && post.titleImg.heroImg) || meta.heroImg
					}
				/>
				<meta
					property="og:url"
					content={`https://nextwavewebstudio.com/blog/${slug}`}
				/>
				<link
					rel="canonical"
					href={`https://nextwavewebstudio.com/blog/${slug}`}
				/>
			</Helmet>

			{/* Hero */}
			<div className="hero bg-gray-100 px-8 py-12 text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-4">
				<div className="lg:flex lg:flex-col lg:justify-center">
					<h1 className="text-3xl lg:text-5xl font-bold mb-4 xl:text-6xl">
						{post.title}
					</h1>
					<p className="text-sm text-gray-600 md:text-lg mb-4">
						Published on {post.date} by {post.author}
					</p>
					<p className="text-lg md:text-xl">
						{post.content?.introduction}
					</p>
					<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
						<button className="py-2 px-4 mt-4 rounded-md bg-bright-teal text-cool-white border-2 border-bright-teal hover:opacity-90 transition-opacity duration-300">
							{post.ctaButton}
						</button>
					</Link>
				</div>
				<div className="blog__hero__img">
					<img
						loading="lazy"
						src={post.titleImg?.heroImg || meta.heroImg}
						alt={
							post.titleImg?.heroAlt || meta.heroAlt || post.title
						}
					/>
				</div>
			</div>

			{/* Body */}
			<div
				ref={detailsRef}
				className="parent grid grid-cols-1 lg:grid-cols-5 gap-4"
			>
				{/* Side nav */}
				<div className="blog-navbar hidden lg:block sticky top-4 max-h-[500px]">
					<nav>
						<ul className="px-8 space-y-2">
							{(post.sections || []).map((section, i) => (
								<li key={i}>
									<a
										href={`#${generateSlug(section.heading)}`}
										className={`px-2 py-1 transition-colors duration-300 ${
											activeSection ===
											generateSlug(section.heading)
												? 'text-blue-500 font-bold'
												: 'text-gray-700'
										}`}
									>
										{section.heading}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>

				{/* Content */}
				<div className="blog-content lg:col-span-4 px-8 mb-8">
					{(post.sections || []).map((section, idx) => (
						<div
							key={idx}
							id={generateSlug(section.heading)}
							className="blog-section mt-6"
						>
							<h2 className="text-xl font-bold header lg:text-2xl">
								{section.heading}
							</h2>
							{(section.subsections || []).map((sub, sidx) => (
								<div key={sidx} className="mt-4">
									<h3 className="text-lg font-semibold subheader lg:text-xl">
										{sub.title}
									</h3>
									{(sub.content || []).map((point, pidx) => {
										if (
											typeof point === 'object' &&
											point.bold
										) {
											return (
												<p key={pidx} className="mt-2">
													<strong>
														{point.text}
													</strong>{' '}
													{point.suffix}
												</p>
											);
										}
										if (
											typeof point === 'object' &&
											point.link
										) {
											return (
												<p key={pidx} className="mt-2">
													{point.text}{' '}
													<a
														href={point.link.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-500 underline"
													>
														{point.link.text}
													</a>{' '}
													{point.end}
												</p>
											);
										}
										return (
											<p key={pidx} className="mt-2">
												{point}
											</p>
										);
									})}
								</div>
							))}
							{section.image && (
								<div className="mt-4">
									<img
										loading="lazy"
										src={section.image.src}
										alt={section.image.alt}
										className="w-full"
									/>
								</div>
							)}
						</div>
					))}

					<p className="mt-6">{post.conclusion}</p>
					<p className="mt-6 text-lg font-bold">{post.cta}</p>
					<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
						<button className="py-2 px-4 mt-4 rounded-md bg-bright-teal text-cool-white border-2 border-bright-teal hover:opacity-90 transition-opacity duration-300">
							{post.ctaButton}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
