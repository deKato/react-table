import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PersonList from "./PersonList";

describe("Person list", () => {
  test("Selecting filter value should work", async () => {
    render(<PersonList />);
    const selectElement = screen.getByRole("combobox") as HTMLSelectElement;
    const optionOdd = screen.getByText(
      "Rows with odd number value"
    ) as HTMLOptionElement;

    const optionEven = screen.getByText(
      "Rows with even number value"
    ) as HTMLOptionElement;

    const optionAll = screen.getByText("All rows") as HTMLOptionElement;

    userEvent.selectOptions(selectElement, "odd");
    expect(optionOdd.selected).toBe(true);
    expect(optionEven.selected).toBe(false);
    expect(optionAll.selected).toBe(false);

    userEvent.selectOptions(selectElement, "even");
    expect(optionEven.selected).toBe(true);
    expect(optionOdd.selected).toBe(false);
    expect(optionAll.selected).toBe(false);

    userEvent.selectOptions(selectElement, "all");
    expect(optionAll.selected).toBe(true);
    expect(optionOdd.selected).toBe(false);
    expect(optionEven.selected).toBe(false);
  });
});
