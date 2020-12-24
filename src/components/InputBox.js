import React from "react";
import enhance from "./wrapInputBox";

function InputBox(props) {
  const { value, handleChange, handleKeyUp } = props;

  return (
    <input
      data-testid="input-box"
      autoFocus
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
