import React from 'react';
import Highlight from './Highlight';

export default function Warn({children}) {
    return (
      <Highlight color="#dd0000" fontWeight="700">{children}</Highlight>
    );
  }