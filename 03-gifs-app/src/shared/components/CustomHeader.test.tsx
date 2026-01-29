import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe("<CustomHeader/> Testing", () => {
  test("Should render the title correctly", () => {
    const title = "Example Title";
    render(<CustomHeader title={title} />);

    const titleSubject = screen.getByRole("heading", {
      level: 1,
    });

    expect(titleSubject.textContent).toBe(title);
  });

  test("Should render the description when provided", () => {
    const title = "Example Title";
    const description = "Example Description";
    render(<CustomHeader title={title} description={description} />);

    const descriptionSubject = screen.getByRole("paragraph");

    expect(descriptionSubject.textContent).toBe(description);
  });

  test("Should not render description when not provided", () => {
    const title = "Example Title";
    const { container } = render(<CustomHeader title={title} />);

    const descriptionSubject = container.querySelector("p");

    expect(descriptionSubject).toBeNull();
  });
});
