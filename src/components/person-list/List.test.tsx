import React from "react";
import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  const personList = [
    { name: "test", number: 1 },
    { name: "test2", number: 2 },
    { name: "test3", number: 3 },
  ];

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(personList),
      } as Response)
    );
  });

  test("list should render all values", async () => {
    render(<List filter="all" />);
    const listItems = await screen.findAllByText("test", { exact: false });
    expect(listItems).toHaveLength(3);
  });

  test("list should render odd values", async () => {
    render(<List filter="odd" />);
    const listItems = await screen.findAllByText("test", { exact: false });
    expect(listItems).toHaveLength(2);
  });

  test("list should render even values", async () => {
    render(<List filter="even" />);
    const listItems = await screen.findAllByText("test", { exact: false });
    expect(listItems).toHaveLength(1);
  });
});
