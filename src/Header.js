import React from 'react';
import './Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
