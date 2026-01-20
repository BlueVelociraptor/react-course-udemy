import { test, describe, expect } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add function", () => {
  test("Should add 2 positive numbers", () => {
    const a = 2;
    const b = 2;
    const result = add(a, b);

    expect(result).toBe(a + b);
  });

  test("Should add 2 negative numbers", () => {
    const a = -2;
    const b = -2;
    const result = add(a, b);

    expect(result).toBe(a + b);
  });
});

describe("subtract function", () => {
  test("Should subtract 2 positive numbers", () => {
    const a = 2;
    const b = 2;
    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test("Should subtract 2 negative numbers", () => {
    const a = -2;
    const b = -2;
    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe("multiply function", () => {
  test("Should multiply 2 positive numbers", () => {
    const a = 2;
    const b = 2;
    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test("Should multiply 2 negative numbers", () => {
    const a = -2;
    const b = -2;
    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
