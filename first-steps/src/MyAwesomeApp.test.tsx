import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.textContent).toContain("Alina");
    expect(h3?.textContent).toContain("Tsvetkov");
  });

  test("Should render firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = screen.getByRole("heading", {
      level: 1,
    });

    expect(h1.textContent).toBe("Alina");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });

  test("should match snapshot - screen", () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });
});
