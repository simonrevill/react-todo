/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("Todo application", () => {
  it("adds a todo to list", async () => {
    render(<Todo />);

    act(() => {
      const input = screen.getByTestId("todo-input");
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    expect(screen.getByText("buy some milk")).toBeInTheDocument();
  });

  it("mark an item as completed", () => {
    render(<Todo />);

    act(() => {
      const input = screen.getByTestId("todo-input");
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    const item = screen.getByText("buy some milk");
    expect(item).toBeInTheDocument();

    act(() => {
      userEvent.click(item);
    });

    expect(item).toHaveAttribute("data-completed", "true");

    act(() => {
      userEvent.click(item);
    });

    expect(item).not.toHaveAttribute("data-completed");
  });
});
