import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("Test TodoItem component", () => {
  it("should render an undo task when pass todo data given completed is false", () => {
    const defaultProps = {
      changeStatus: jest.fn(),
      data: {
        id: 1,
        text: "Learn Javascript",
        completed: false,
      },
    };
    const wrapper = render(<TodoItem {...defaultProps} />);
    const liElement = wrapper.getByTestId("todo-item");
    const checkBoxElement = wrapper.getByTestId("todo-item-checkbox");

    expect(liElement).toHaveClass("todo-item ui-state-default pending");

    fireEvent.click(checkBoxElement);

    expect(defaultProps.changeStatus).toHaveBeenCalledWith(
      defaultProps.data.id,
      !defaultProps.data.completed
    );
  });
});
