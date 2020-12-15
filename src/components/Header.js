import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        console.log("header"),
        console.log(props),
        <header>
            <h1>Things To Do</h1>
            <InputWrapper {...props}/>
        </header>
    );
}
