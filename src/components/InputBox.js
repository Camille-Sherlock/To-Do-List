import React from 'react';
import enhance from './wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp } = props;

    return (
        console.log("input***"),
        console.log(handleChange),
        console.log(props),
        <input autoFocus
               type="text"
               className="form-control add-todo"
               value={value}
               onKeyUp={handleKeyUp}
               onChange={handleChange}
               placeholder="Add New"
        />
    );
}

// eslint-disable-next-line no-undef
export default enhance(InputBox);
