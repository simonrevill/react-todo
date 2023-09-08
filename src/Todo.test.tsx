/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("Todo application", () => {
  it("adds a todo to list", async () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "buy some milk");
    userEvent.type(input, "{enter}");

    expect(screen.getByText("buy some milk")).toBeInTheDocument();
  });

  it("mark an item as completed", () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "buy some milk");
    userEvent.type(input, "{enter}");

    const item = screen.getByText("buy some milk");
    expect(item).toBeInTheDocument();

    userEvent.click(item);

    expect(item.parentElement).toHaveAttribute("data-completed", "true");
    userEvent.click(item);

    expect(item.parentElement).not.toHaveAttribute("data-completed");
  });

  it("deletes a todo when clicking the delete button", () => {
    render(<Todo />);

    act(() => {
      const input = screen.getByRole("textbox");
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    const item = screen.getByText("buy some milk");
    expect(item).toBeInTheDocument();

    const deleteButton = screen.getByRole("button", { name: "Delete" });
    userEvent.click(deleteButton);

    expect(item).not.toBeInTheDocument();
  });
});
