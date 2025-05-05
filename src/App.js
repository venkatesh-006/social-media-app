import { Link, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import Newpost from './Newpost';
import Postpage from './Postpage';
import { format } from 'date-fns';
import api from './api/post';

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/posts");  // Fetch posts from server
        // Convert id to a number for frontend operations
        const postsWithNumericIds = response.data.map(post => ({ ...post, id: Number(post.id),  // Convert id to a number for internal use
        }));
        setPosts(postsWithNumericIds);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
  
    fetchData();
  }, []);

  // Filter posts based on search
  const filteredpost = posts.filter(post =>
    (post.title ?? '').toLowerCase().includes(search.toLowerCase()) ||
    (post.body ?? '').toLowerCase().includes(search.toLowerCase())
  );

  // New post state
  const [posttitle, setPosttitle] = useState('');
  const [postbody, setPostbody] = useState('');

  // Navigation
  const navigate = useNavigate();

  // Handle new post submission
  const handlesubmit = async (e) => {
    e.preventDefault();
    const lastId = posts.length ? Number(posts[posts.length - 1].id) : 0;
    const id = lastId + 1;  // Create numeric id for new post
    const now = new Date();
    const formatted = format(now, 'dd-MM-yyyy');
    const newPost = { id: String(id), date: formatted, title: posttitle, body: postbody };

    try {
      // Send the new post to the server with id as string
      const response = await api.post("/posts", newPost);
      setPosts(prevPosts => [...prevPosts, response.data]);  // Add new post to state
      setPosttitle('');
      setPostbody('');
      navigate('/');  // Navigate to homepage after posting
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  // Handle post delete
  const handleDelete = async (id) => {
    console.log("Attempting to delete post with ID:", id);
    try {
      await api.delete(`/posts/${id}`);
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));  // Remove post from the state
      navigate('/');  // Navigate back after deletion
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <main>
      <Header title="Social-Media-App" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={filteredpost} />} />
        <Route path='post'>
          <Route index element={<Newpost posttitle={posttitle} setPosttitle={setPosttitle} postbody={postbody} setPostbody={setPostbody} handlesubmit={handlesubmit} />} />
          <Route path=":id" element={<Postpage posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </main>
  );
}

export default App;
