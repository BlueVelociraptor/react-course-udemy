import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("Should match snapshot", () => {
    const { container } = render(<ItemCounter name="IS-7" />);

    expect(container).toMatchSnapshot();
  });

  test("Should render with default values", () => {
    const name = "IS-7";

    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
  });

  test("Should render with custom quantity", () => {
    const name = "IS-7";
    const quantity = 50;

    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Should increase quantity value when +1 button was pressed", () => {
    const name = "IS-7";
    const quantity = 50;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [addButton] = screen.getAllByRole("button");

    fireEvent.click(addButton);

    expect(screen.getByText(quantity + 1)).toBeDefined();
  });

  test("Shouldn't increase quantity value when +1 button was pressed and quantity is 100", () => {
    const name = "IS-7";
    const quantity = 100;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [addButton] = screen.getAllByRole("button");

    fireEvent.click(addButton);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Should decrease quantity value when -1 button was pressed", () => {
    const name = "IS-7";
    const quantity = 50;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [, subtractButton] = screen.getAllByRole("button");

    fireEvent.click(subtractButton);

    expect(screen.getByText(quantity - 1)).toBeDefined();
  });

  test("Shouldn't decrease quantity value when -1 button was pressed and quantity is 0", () => {
    const name = "IS-7";
    const quantity = 0;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [, subtractButton] = screen.getAllByRole("button");

    fireEvent.click(subtractButton);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Should change to red when quantity value is 1 and subtract button was pressed", () => {
    const name = "IS-7";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [, subtractButton] = screen.getAllByRole("button");
    const quantityValueElement = screen.getByText(quantity);

    fireEvent.click(subtractButton);
    expect(quantityValueElement.style.color).toBe("red");
  });

  test("Should change to green when quantity value is 0 and add button was pressed", () => {
    const name = "IS-7";
    const quantity = 0;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [addButton] = screen.getAllByRole("button");
    const quantityValueElement = screen.getByText(quantity);

    fireEvent.click(addButton);
    expect(quantityValueElement.style.color).toBe("green");
  });
});
