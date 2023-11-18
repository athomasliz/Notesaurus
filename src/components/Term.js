import React from 'react';
import Highlight from './Highlight';

export default function Term({children}) {
    return <Highlight color="#3333dd" fontWeight="700">{children}</Highlight>
}