import React, { useState } from "react";

const CheckBox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <input
      data-testid="todo-item-checkbox"
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export default CheckBox;
