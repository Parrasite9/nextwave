import React from "react";
import { Link } from "react-router-dom";
import blogsData from "./Blogs.json";
import { generateSlug } from "../../Globals/Utils";

const FeaturedPosts = () => {
  // Filter the blogs to get only the featured ones
  const featuredBlogs = blogsData.filter((blog) => blog.featured);

  // If no featured blogs, return null
  if (featuredBlogs.length === 0) {
    return null;
  }

  return (
    <div className="featured-section mt-12 px-8">
      <div id='services' className="divider">
            <div className="divider-line"></div>
            <span className='divider-text'>Featured Articles</span>
            <div className="divider-line"></div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {featuredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="relative blog-preview flex flex-col justify-between border-4 p-2 cursor-pointer hover:shadow-lg hover:shadow-gray-500/50 transition-shadow duration-200 card-bg rounded-lg shadow-md"
          >
            {/* Invisible Link Spanning Entire Card */}
            <Link
              to={`/blog/${generateSlug(blog.title)}`}
              className="absolute inset-0"
            >
              <span className="sr-only">{blog.title}</span>
            </Link>
            {/* Card Content */}
            <h2 className="font-bold text-lg font-bold text-soft-navy mb-2 md:text-xl lg:text-2xl">
              {blog.title}
            </h2>
            <p>{blog.content.introduction.substring(0, 100)}...</p>
            <Link
              className="text-sky-blue"
              to={`/blog/${generateSlug(blog.title)}`}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
