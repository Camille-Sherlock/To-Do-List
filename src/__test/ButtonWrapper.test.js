import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ButtonWrapper from "../components/ButtonWrapper";
import { MODE_CREATE, MODE_SEARCH } from "../services/mode";

describe("Test ButtonWrapper component", () => {
  it("should render a menu with two menu, select create button", () => {
    const defaultProps = {
      changeMode: jest.fn(),
      mode: MODE_CREATE,
    };
    const wrapper = render(<ButtonWrapper {...defaultProps} />);
    const btnElements = wrapper.getAllByRole("button");
    expect(btnElements.length).toBe(2);

    const addNewElement = wrapper.getByTestId("addBtn");
    expect(addNewElement).toHaveClass("button-add");

    const searchElement = wrapper.getByTestId("searchBtn");
    expect(searchElement).toHaveClass("button-search");

    fireEvent.click(searchElement);
    expect(defaultProps.changeMode).toHaveBeenCalled();
  });

  it("should render a menu with two menu, select search button", () => {
    const defaultProps = {
      changeMode: jest.fn(),
      mode: MODE_SEARCH,
    };
    const wrapper = render(<ButtonWrapper {...defaultProps} />);

    const addNewElement = wrapper.getByTestId("addBtn");
    expect(addNewElement).toHaveClass("button-add");

    const searchElement = wrapper.getByTestId("searchBtn");
    expect(searchElement).toHaveClass("button-search-selected");

    fireEvent.click(searchElement);
    expect(defaultProps.changeMode).toHaveBeenCalled();
  });
});
