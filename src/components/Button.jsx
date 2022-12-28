import React from 'react';

export default function Button({ color, text, onAdd }) {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onAdd}>
      {text}
    </button>
  );
}
