import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  );
}
