import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import blogsData from '../Blogs/Blogs.json';
import { generateSlug } from '../../Globals/Utils';

const BlogList = () => {
	const [blogs, setBlogs] = useState([]);
	const location = useLocation();

	// Scroll to top when the component is loaded
	useEffect(() => {
		window.scrollTo(0, 0);
		setBlogs(blogsData);
	}, [location]);

	return (
		<section
			id="relume"
			className="flex justify-center px-[5%] py-16 md:py-24 lg:py-28"
		>
			<div className="container">
				{/* Section Header */}
				<div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
					<div className="md:mr-12 lg:mr-0">
						<div className="w-full max-w-lg">
							<p className="mb-3 font-semibold md:mb-4 text-bright-teal">
								Blogs
							</p>
							<h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
								Smart Solutions{' '}
							</h2>
							<p className="md:text-md">
								Learn how to maximize your online potential with
								our expert-driven articles, tailored for
								business growth.{' '}
							</p>
						</div>
					</div>
				</div>

				{/* Blog Grid */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
					{blogs.map((blog) => (
						<div
							key={blog.id}
							className="border-2 border-sandy-brown rounded-xl transition-transform duration-300 hover:shadow-lg hover:scale-105"
						>
							{/* Blog Card */}
							<Link
								to={`/blog/${generateSlug(blog.title)}`}
								className="mb-6 inline-block w-full max-w-full"
							>
								<div className="w-full overflow-hidden">
									<img
										src={
											blog.titleImg.heroImg ||
											'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg'
										}
										alt={blog.title}
										className="aspect-[3/2] size-full object-cover"
									/>
								</div>
							</Link>
							<div className="featured__card__text px-2 pb-4">
								{/* Category */}
								<Link
									to={`/category/${generateSlug(blog.category || 'general')}`}
									className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
								>
									{blog.category || 'General'}
								</Link>
								{/* Blog Title */}
								<Link
									to={`/blog/${generateSlug(blog.title)}`}
									className="mb-2 block max-w-full"
								>
									<h5 className="text-xl font-bold md:text-2xl">
										{blog.title}
									</h5>
								</Link>
								{/* Introduction */}
								<p>
									{blog.content.introduction.substring(
										0,
										100,
									)}
									...
								</p>
								{/* Author and Metadata */}
								<div className="mt-6 flex items-center">
									<div className="mr-4 shrink-0">
										<img
											src={
												blog.authorImage ||
												'/android-chrome-512x512.png'
											}
											alt={blog.author || 'Author'}
											className="size-12 min-h-12 min-w-12 rounded-full object-cover"
										/>
									</div>
									<div>
										<h6 className="text-sm font-semibold">
											{blog.author || 'Anonymous'}
										</h6>
										<div className="flex items-center">
											<p className="text-sm">
												{blog.date || 'Unknown Date'}
											</p>
											<span className="mx-2">•</span>
											<p className="text-sm">
												{blog.readTime || '5 min read'}
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

export default BlogList;
