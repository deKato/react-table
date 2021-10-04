import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  test("should render big button", () => {
    render(<Button text="big text" size="large" />);
    const button = screen.getByText("big text");
    expect(button).toHaveClass("button--large");
  });

  test("should render normal button", () => {
    render(<Button text="small text" />);
    const button = screen.getByText("small text");
    expect(button).not.toHaveClass("button--large");
  });
});
