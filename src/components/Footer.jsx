import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link to="/About">About</Link>
    </footer>
  );
}
