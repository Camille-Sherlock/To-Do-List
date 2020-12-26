import React, { useState, useEffect } from "react";
import KeyCode from "keycode-js";
import useKeyPress from "../hooks/useKeyPress";

function InputBox({ addNew }) {
  const [value, setValue] = useState("");
  const enterPress = useKeyPress(KeyCode.KEY_RETURN);

  useEffect(() => {
    if (enterPress && value.trim() !== "") {
      addNew(value);
      setValue("");
    }
  }, [enterPress, value, addNew]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      data-testid="input-box"
      autoFocus
      type="text"
      className="form-control add-todo"
      value={value}
      onChange={handleChange}
      placeholder="Add New"
    />
  );
}

export default InputBox;
