import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/My Todo Application/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a button with text 'Submit'", () => {
  render(<App />);
  const buttonElement = screen.getByText("Submit");
  expect(buttonElement).toBeInTheDocument();
});
