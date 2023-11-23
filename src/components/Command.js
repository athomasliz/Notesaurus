import React from 'react';
import Highlight from './Highlight';

export default function Command({children}) {
    return <Highlight bgColor="#000000" fontColor="#ffffff" fontWeight="400" border="1px solid #ffffff" borderRadius="0" padding="0.75rem" margin="0.25rem" display="block"><b>&gt;</b> {children}</Highlight>
}