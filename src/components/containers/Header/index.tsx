import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Header;
