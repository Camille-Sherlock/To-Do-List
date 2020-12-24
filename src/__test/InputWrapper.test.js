import React from "react";
import { fireEvent, render } from "@testing-library/react";
import InputWrapper from "../components/InputWrapper";
import { MODE_SEARCH, MODE_CREATE } from "../services/mode";

describe("Test InputWrapper component", () => {
  it("should return input component which className is add-todo when input mode is MODE_CREATE", () => {
    const Props = {
      mode: MODE_CREATE,
      addNew: jest.fn(),
      query: "",
      setSearchQuery: jest.fn(),
    };
    const wrapper = render(<InputWrapper {...Props} />);
    const inputElements = wrapper.getByTestId("input-box");
    expect(inputElements).toHaveClass("add-todo");
  });

  it("should return input component which className is search when input mode is MODE_SEARCH", () => {
    const Props = {
      mode: MODE_SEARCH,
      addNew: jest.fn(),
      query: "",
      setSearchQuery: jest.fn(),
    };
    const wrapper = render(<InputWrapper {...Props} />);
    const inputElements = wrapper.getByTestId("search");
    expect(inputElements).toHaveClass("search");
  });
});
