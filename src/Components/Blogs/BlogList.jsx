import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogsData from "../Blogs/Blogs.json";
import { generateSlug } from "../../Globals/Utils";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      setBlogs(blogsData);
    }, []);
  
    return (
      <div className="px-8">
        <h1 className="header text-center text-2xl mb-4">Our Blog</h1>
        <div className="list__of__blogs grid grid-cols-2 gap-4 mb-8 lg:grid-cols-4">
            {blogs.map((blog) => (
                <div 
                    key={blog.id} 
                    className="relative blog-preview flex flex-col justify-between border-4 p-2 cursor-pointer hover:shadow-lg hover:shadow-gray-500/50 transition-shadow duration-200 card-bg rounded-lg shadow-md hover:shadow-lg"
                >
                    {/* Invisible Link Spanning Entire Card */}
                    <Link 
                        to={`/blog/${generateSlug(blog.title)}`} 
                        className="absolute inset-0"
                    >
                        <span className="sr-only">{blog.title}</span> {/* Screen reader-only for accessibility */}
                    </Link>
                    {/* Card Content */}
                    <h2 className="font-bold text-lg font-bold text-soft-navy mb-2 md:text-xl lg:text-2xl">
                        {blog.title}
                    </h2>
                    <p className="text-sm text-warm-gray italic">By {blog.author} on {blog.date}</p>
                    <p>{blog.content.introduction.substring(0, 100)}...</p>
                    <Link className="text-sky-blue" to={`/blog/${generateSlug(blog.title)}`}>
                        Read More
                    </Link>
                </div>
            ))}
        </div>
      </div>
    );
  };

export default BlogList;
