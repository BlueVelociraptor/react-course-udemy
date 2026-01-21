import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import FirstStepsApp from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test("Should render the correct number of ItemCounter Components", () => {
    render(<FirstStepsApp />);

    const itemCounterComponents = screen.getAllByTestId("ItemCounter");
    expect(itemCounterComponents.length).toBe(4);

    screen.debug();
  });

  test("Should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(4);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Obj. 777",
      quantity: 30,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "SDP 60 Gonkiewicza",
      quantity: 100,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Concept 1B",
      quantity: 20,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "WT Ritter",
    });
  });
});
