/* eslint-disable testing-library/no-node-access */
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("Todo application", () => {
  it("adds a todo to list", async () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "buy some milk");
    userEvent.type(input, "{enter}");

    const item = screen.getByText("buy some milk");

    expect(item).toBeInTheDocument();
  });

  it("clears input after adding a todo to the list", async () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "buy some milk");
    userEvent.type(input, "{enter}");

    const item = screen.getByText("buy some milk");

    expect(item).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("mark an item as completed", () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "buy some milk");
    userEvent.type(input, "{enter}");

    const item = screen.getByText("buy some milk");
    expect(item).toBeInTheDocument();

    userEvent.click(item);
    expect(item).toHaveAttribute("data-completed", "true");

    userEvent.click(item);
    expect(item).not.toHaveAttribute("data-completed");
  });

  it("deletes a todo when clicking the delete button", () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "buy some milk");
    userEvent.type(input, "{enter}");

    const item = screen.getByText("buy some milk");
    expect(item).toBeInTheDocument();

    const deleteButton = within(item).getByRole("button", {
      name: "Delete",
    });
    userEvent.click(deleteButton);

    expect(item).not.toBeInTheDocument();
  });
});
