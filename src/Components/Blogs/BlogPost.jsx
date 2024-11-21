import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../Blogs/Blogs.json";
import { generateSlug } from "../../Globals/Utils";

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => generateSlug(b.title) === slug);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-post">
      {/* Blog Title */}
      <h1>{blog.title}</h1>
      <p className="text-sm text-gray-600">
        Published on {blog.date} by {blog.author}
      </p>

      {/* Blog Introduction */}
      <p className="mt-4">{blog.content.introduction}</p>

      {/* Blog Sections */}
      {blog.sections.map((section, index) => (
        <div key={index} className="mt-6">
          {/* Section Heading */}
          <h2 className="text-xl font-bold">{section.heading}</h2>

          {/* Subsections */}
          {section.subsections.map((subsection, subIndex) => (
            <div key={subIndex} className="mt-4">
              {/* Subsection Title */}
              <h3 className="text-lg font-semibold">{subsection.title}</h3>
              {/* Subsection Content */}
              {subsection.content.map((point, pointIndex) => (
                <p key={pointIndex} className="mt-2">
                  {point}
                </p>
              ))}
            </div>
          ))}

          {/* Section Image */}
          {section.image && (
            <div className="mt-4">
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="w-full"
              />
            </div>
          )}
        </div>
      ))}

      {/* Blog Conclusion */}
      <p className="mt-6">{blog.conclusion}</p>

      {/* Call-to-Action */}
      <p className="mt-6 text-lg font-bold">{blog.cta}</p>
    </div>
  );
};

export default BlogPost;
