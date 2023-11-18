import React from 'react';

export default function Highlight({children, color="#000000", fontWeight}) {
    return (
      <span
        style={{
          backgroundColor: color,
          borderRadius: '2px',
          color: '#fff',
          padding: '0.1rem',
          paddingLeft: '0.25rem',
          paddingRight: '0.25rem',
          marginLeft: '0.05rem',
          marginRight: '0.05rem',
          fontWeight: fontWeight,
        }}>
        {children}
      </span>
    );
  }