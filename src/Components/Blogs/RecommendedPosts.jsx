import React from "react";
import { Link } from "react-router-dom";
import blogsData from "./Blogs.json";
import { generateSlug } from "../../Globals/Utils";

const RecommendedPosts = ({ currentPostId }) => {
  console.log('RecommendedPosts Component Rendered');

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
    <div className="recommended-section mt-12">
      <h2 className="text-xl font-bold mb-4">Recommended Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendedPosts.map((post) => (
          <div
            key={post.id}
            className="recommended-post border p-4 rounded"
          >
            <h3 className="text-lg font-semibold">
              <Link to={`/blog/${generateSlug(post.title)}`}>{post.title}</Link>
            </h3>
            <p className="text-sm text-gray-600">{post.date}</p>
            <p className="mt-2">
              {post.content.introduction.substring(0, 100)}...
            </p>
            <Link
              className="text-blue-500 mt-2 inline-block"
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
