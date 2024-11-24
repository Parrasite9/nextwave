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
          <div key={blog.id} className="blog-preview flex flex-col justify-between border-4 p-2 cursor-pointer">
            <h2 className="font-bold">{blog.title}</h2>
            {/* <p>By {blog.author} on {blog.date}</p> */}
            {/* Use blog.content.introduction instead */}
            <p>{blog.content.introduction.substring(0, 100)}...</p>
            <Link className="text-sky-blue" to={`/blog/${generateSlug(blog.title)}`}>Read More</Link>
          </div>
        ))}
        </div>
      </div>
    );
  };

export default BlogList;
