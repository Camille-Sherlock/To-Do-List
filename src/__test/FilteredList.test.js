import React from "react";
import { render } from "@testing-library/react";
import FilteredList from "../components/FilteredList";

describe("Test Filtered List", () => {
  it("should return alert when there are no item", () => {
    const defaultProps = {
      items: [],
      changeStatus: jest.fn(),
    };
    const wrapper = render(<FilteredList {...defaultProps} />);
    const filterElements = wrapper.getByTestId("alert-text");
    expect(filterElements).toHaveClass("alert-info");
  });
  it("should return every item when input items", () => {
    const defaultProps = {
      items: [
        {
          id: 1,
          text: "Learn Javascript",
          completed: false,
        },
        {
          id: 2,
          text: "Learn React",
          completed: false,
        },
      ],
      changeStatus: jest.fn(),
    };
    const wrapper = render(<FilteredList {...defaultProps} />);
    const filterElements = wrapper.getAllByTestId("todo-item");
    expect(filterElements.length).toBe(2);
  });
});
