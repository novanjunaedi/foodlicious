import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
    <Link className="navbar-brand" to="/">Foodlicious!</Link>
  </nav>
);

export default Navbar;
