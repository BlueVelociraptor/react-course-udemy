import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("<MyCounterApp />", () => {
  test("Should render the componente", () => {
    render(<MyCounterApp />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "Counter: 10",
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("Should increment the counter when +1 button was pressed", () => {
    render(<MyCounterApp />);

    const header = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "+1" });

    fireEvent.click(button);

    expect(header.textContent).toContain("Counter: 11");
  });

  test("Should decrement the counter when -1 button was pressed", () => {
    render(<MyCounterApp />);

    const header = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "-1" });

    fireEvent.click(button);

    expect(header.textContent).toContain("Counter: 9");
  });
});
