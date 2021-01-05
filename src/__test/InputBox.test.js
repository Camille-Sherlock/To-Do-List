import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputBox from "../components/InputBox";

const setup = () => {
  const addNew = jest.fn();
  const wrapper = render(<InputBox addNew={addNew} />);
  const input = wrapper.getByTestId("input-box");
  return {
    addNew,
    input,
    wrapper,
  };
};

describe("Test InputBox component", () => {
  it("should change component state value when change input text", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Tests" } });
    expect(input.value).toBe("Tests");
  });

  it("should add new todo and reset input value when press enter given input is not null", () => {
    const { input, addNew } = setup();
    fireEvent.change(input, { target: { value: "Tests" } });
    expect(input.value).toBe("Tests");
    input.focus();
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(addNew).toHaveBeenCalledWith("Tests");
    expect(input.value).toBe("");
  });

  it("should do nothing when press enter given input is just blank", () => {
    const { input, addNew } = setup();
    fireEvent.change(input, { target: { value: "   " } });
    expect(input.value).toBe("   ");
    input.focus();
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(addNew).not.toHaveBeenCalledWith("   ");
    expect(input.value).toBe("   ");
  });
});
