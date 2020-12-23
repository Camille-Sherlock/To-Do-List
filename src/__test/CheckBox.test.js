import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CheckBox from "../components/CheckBox";

describe("Test CheckBox component", () => {
  it("should change check status when click checkbox", () => {
    const defaultProps = {
      onChange: jest.fn(),
      checked: true,
    };
    const wrapper = render(<CheckBox {...defaultProps} />);
    const inputElem = wrapper.getByTestId("input");

    expect(inputElem).toBeChecked();

    fireEvent.click(inputElem);

    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(inputElem).not.toBeChecked();

    fireEvent.click(inputElem);

    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(inputElem).toBeChecked();
  });
});
