import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

export default function Header({ title, onAdd, showTask }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showTask ? 'Red' : 'green'}
          text={showTask ? 'Close' : 'Add'}
          onAdd={onAdd}
        />
      )}
    </header>
  );
}
