import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from './Blogs.json';
import { generateSlug } from '../../Globals/Utils';

const RecommendedPosts = ({ currentPostId }) => {
	// Exclude the current post from recommendations
	const currentId = Number(currentPostId);

	// Generate recommended posts by selecting the most recent posts excluding the current one
	const recommendedPosts = blogsData
		.filter((blog) => Number(blog.id) !== currentId)
		.sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, most recent first
		.slice(0, 4); // Limit to 4 posts

	// If no recommended posts are found, return null
	if (recommendedPosts.length === 0) {
		return null;
	}

	return (
		<section className="flex justify-center px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				{/* Section Header */}
				<div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
					<div className="md:mr-12 lg:mr-0">
						<div className="w-full max-w-lg">
							<h6 className="text-bright-teal mb-3 font-semibold md:mb-4">
								Recommended Articles
							</h6>
							<h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
								More for You
							</h2>
							<p className="md:text-md">
								Discover recently published articles you might
								enjoy.
							</p>
						</div>
					</div>
				</div>

				{/* Blog Grid */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
					{recommendedPosts.map((post) => (
						<div
							key={post.id}
							className="border-2 border-sandy-brown rounded-xl transition-transform duration-300 hover:shadow-lg hover:scale-105"
						>
							{/* Blog Card */}
							<Link
								to={`/blog/${generateSlug(post.title)}`}
								className="mb-6 inline-block w-full max-w-full"
							>
								<div className="w-full overflow-hidden">
									<img
										loading="lazy"
										src={
											post.titleImg?.heroImg ||
											'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg'
										}
										alt={post.title}
										className="aspect-[3/2] size-full object-cover"
									/>
								</div>
							</Link>

							<div className="featured__card__text px-2 pb-4">
								{/* Category */}
								<Link
									to={`/category/${generateSlug(post.category || 'general')}`}
									className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
								>
									{post.category || 'General'}
								</Link>
								{/* Blog Title */}
								<Link
									to={`/blog/${generateSlug(post.title)}`}
									className="mb-2 block max-w-full text-yale-blue"
								>
									<h5 className="text-xl font-bold md:text-2xl">
										{post.title}
									</h5>
								</Link>
								{/* Introduction */}
								<p>
									{post.content.introduction.substring(
										0,
										100,
									)}
									...
								</p>
								{/* Author and Metadata */}
								<div className="mt-6 flex items-center">
									<div className="mr-4 shrink-0">
										<img
											loading="lazy"
											src={
												post.authorImage ||
												'/android-chrome-512x512.png'
											}
											alt={post.author || 'Author'}
											className="size-12 min-h-12 min-w-12 rounded-full object-cover"
										/>
									</div>
									<div>
										<h6 className="text-sm font-semibold">
											{post.author || 'Anonymous'}
										</h6>
										<div className="flex items-center">
											<p className="text-sm">
												{post.date || 'Unknown Date'}
											</p>
											<span className="mx-2">•</span>
											<p className="text-sm">
												{post.readTime || '5 min read'}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RecommendedPosts;
