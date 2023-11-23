import React from 'react';
import Highlight from './Highlight';

export default function Term({children}) {
    return <Highlight bgColor="#3333dd" fontWeight="700">{children}</Highlight>
}