import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CounterApp } from "./CounterApp";

describe("Testing <CounterApp/>", () => {
  const customInitialValue = 20;

  test("Should render component structure correctly", () => {
    render(<CounterApp />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Counter App Sencillo" }),
    ).toBeDefined();

    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      `Total: ${10}`,
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reiniciar" })).toBeDefined();
  });

  test("Should render counter value with custom initial value", () => {
    render(<CounterApp initialValue={customInitialValue} />);

    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      `Total: ${customInitialValue}`,
    );
  });

  test("Should increment counter value when +1 button was pressed", () => {
    render(<CounterApp initialValue={customInitialValue} />);

    const addButton = screen.getByRole("button", { name: "+1" });

    fireEvent.click(addButton);

    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      `Total: ${customInitialValue + 1}`,
    );
  });

  test("Should decrement counter value when -1 button was pressed", () => {
    render(<CounterApp initialValue={customInitialValue} />);

    const subtractButton = screen.getByRole("button", { name: "-1" });

    fireEvent.click(subtractButton);

    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      `Total: ${customInitialValue - 1}`,
    );
  });

  test("Should reset counter value to the initial value when reset button was pressed", () => {
    render(<CounterApp initialValue={customInitialValue} />);

    const subtractButton = screen.getByRole("button", { name: "-1" });
    const resetButton = screen.getByRole("button", { name: "Reiniciar" });

    fireEvent.click(subtractButton);
    fireEvent.click(resetButton);

    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      `Total: ${customInitialValue}`,
    );
  });
});
