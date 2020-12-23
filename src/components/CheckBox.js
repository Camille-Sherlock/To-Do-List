import React, { useState } from "react";

const CheckBox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!checked);
    onChange(!checked);
  };

  return (
    <input
      data-testid="input"
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export default CheckBox;
