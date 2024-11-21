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
      <div>
        <h1>Our Blog</h1>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-preview">
            <h2>{blog.title}</h2>
            <p>By {blog.author} on {blog.date}</p>
            {/* Use blog.content.introduction instead */}
            <p>{blog.content.introduction.substring(0, 100)}...</p>
            <Link to={`/blog/${generateSlug(blog.title)}`}>Read More</Link>
          </div>
        ))}
      </div>
    );
  };

export default BlogList;
