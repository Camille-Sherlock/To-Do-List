import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Filter from "../components/Filter";
import { FILTER_ALL, filterOptions } from "../services/filter";

describe("Test Filter component", () => {
  it("should select all when render filter list", () => {
    const defaultProps = {
      changeFilter: jest.fn(),
      filter: FILTER_ALL,
    };
    const wrapper = render(<Filter {...defaultProps} />);
    const allFilters = wrapper.container.querySelectorAll(".filler-item");
    expect(allFilters.length).toBe(3);

    const searchedElement = wrapper.getByText(filterOptions[FILTER_ALL]);
    expect(searchedElement).toHaveClass("selected");

    fireEvent.click(searchedElement);
    expect(defaultProps.changeFilter).toHaveBeenCalledWith(FILTER_ALL);
  });
});
