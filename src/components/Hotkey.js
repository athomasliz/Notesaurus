import React, { Fragment } from 'react';
import Highlight from './Highlight';

export default function Warn({children}) {    
    const array = children.split(" ")
    let hotkey = ""
    for(const element of array){
        if(hotkey === "")
            hotkey = <Fragment>{element}</Fragment>
        else
            hotkey = <Fragment>{hotkey}<br/>{element}</Fragment>
    }    
    return <Highlight bgColor="#ffffff" fontColor="#333333" fontWeight="400" border="1px solid #AAAAAA">{hotkey}</Highlight>
}