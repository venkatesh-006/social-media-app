import React from 'react';
import Post from './Post';

const Home = ({ posts }) => {
  return (
    <div className="post-grid">
      {(posts.length) ? (
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      ) : (
        <p>No posts to display.</p>
      )}
      
    </div>
  );
};

export default Home;
