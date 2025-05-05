import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Postpage.css';

const Postpage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading state or fetching data if posts aren't already passed as props
    const foundPost = posts.find(post => post.id === Number(id));
    if (foundPost) {
      setPost(foundPost);
      setLoading(false);
    } else {
      setLoading(false); // If post not found, stop loading
    }
  }, [id, posts]);

  const handleDeletePost = () => {
    if (post) {
      handleDelete(post.id); // Call the delete function passed as prop
      navigate('/'); // Navigate back to the home page after deletion
    }
  };

  if (loading) {
    return <h2>Loading...</h2>; // Loading state
  }

  return (
    <section className='single-post-container'>
      {post ? (
        <div className='single-post-content'>
          <h1 className='single-post-title'>{post.title}</h1>
          <p className='single-post-date'>{post.date}</p>
          <p className='single-post-body'>{post.body}</p>
          <button
            style={{ width: '100px' }}
            onClick={handleDeletePost}
            className="delete-post"
          >
            Delete Post
          </button>
        </div>
      ) : (
        <h2 className='post-not-found'>Post not found</h2>
      )}
    </section>
  );
};

export default Postpage;
