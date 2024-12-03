import React from 'react'

const BlogPostsGrid = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Post Title {index + 1}
              </h4>
              <p className="text-gray-600">
                This is a placeholder description for the blog post.
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default BlogPostsGrid