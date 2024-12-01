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
		<div className="recommended-section mt-12 px-8">
			<h2 className="header text-center text-2xl mb-4">
				Recommended Articles
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
				{recommendedPosts.map((post) => (
					<div
						key={post.id}
						className="relative blog-preview flex flex-col justify-between border-4 p-2 cursor-pointer hover:shadow-lg hover:shadow-gray-500/50 transition-shadow duration-200 card-bg rounded-lg shadow-md"
					>
						{/* Invisible Link Spanning Entire Card */}
						<Link
							to={`/blog/${generateSlug(post.title)}`}
							className="absolute inset-0"
						>
							<span className="sr-only">{post.title}</span>
						</Link>
						{/* Card Content */}
						<h2 className="font-bold text-lg font-bold text-soft-navy mb-2 md:text-xl lg:text-2xl">
							{post.title}
						</h2>
						<p>{post.content.introduction.substring(0, 100)}...</p>
						<Link
							className="text-sky-blue"
							to={`/blog/${generateSlug(post.title)}`}
						>
							Read More
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecommendedPosts;
