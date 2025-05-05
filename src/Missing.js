import React from 'react';
import { Link } from 'react-router-dom';
import './Missing.css'

const Missing = () => {
  return (
    <main className="missing-page" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        ← Back to Home
      </Link>
    </main>
  );
};

export default Missing;
