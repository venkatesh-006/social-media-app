import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="nav">
      <form className="searchform" onSubmit={(e) => e.preventDefault()}>
        <input className="search-input" type="text" placeholder="Search posts" value={search}
         onChange={(e) => setSearch(e.target.value)}        
        />
      </form>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
