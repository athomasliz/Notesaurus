import React from 'react';

export default function Highlight({children, bgColor="#000000", fontColor="#ffffff",fontWeight=700, padding="0.1rem", margin="0rem", border="0", borderRadius="2px", display="inline"}) {
    return (
      <span
        style={{
          backgroundColor: bgColor,          
          color: fontColor,
          padding: padding,
          paddingLeft: '0.25rem',
          paddingRight: '0.25rem',
          margin: margin,
          marginLeft: '0.05rem',
          marginRight: '0.05rem',
          display: display,
          fontWeight: fontWeight,
          border: border,
          borderRadius: borderRadius,
        }}>
        {children}
      </span>
    );
  }