import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'React Learning', author: 'Stephen Biz', excerpt: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', author: 'Schewzdenier', excerpt: 'You can install React from npm.' }
  ];

  return (
    <div style={{ flex: 1, padding: '20px', textAlign: 'left', paddingLeft: '50px' }}>
      <h2>Blog Details</h2>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div key={blog.id} style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.8em', marginBottom: '10px' }}>{blog.title}</h3>
            <p style={{ fontWeight: 'bold', fontSize: '1em', marginBottom: '10px' }}>{blog.author}</p>
            <p style={{ fontSize: '1em', color: '#555' }}>{blog.excerpt}</p>
          </div>
        ))
      ) : (
        <p>No blogs to show.</p>
      )}
    </div>
  );
};

export default BlogDetails;
