import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  const initialValue = 20;

  test("Should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));

    expect(result.current.counter).toBe(10);
  });

  test("Should initialize with a custom value", () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: initialValue }),
    );

    expect(result.current.counter).toBe(initialValue);
  });

  test("Should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: initialValue }),
    );

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(initialValue + 1);
  });

  test("Should decrement counter when handleSubtract is called", () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: initialValue }),
    );

    act(() => result.current.handleSubtract());

    expect(result.current.counter).toBe(initialValue - 1);
  });

  test("Should restar counter to initial value when handleReset is called", () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: initialValue }),
    );

    act(() => result.current.handleSubtract());
    act(() => result.current.handleReset());

    expect(result.current.counter).toBe(initialValue);
  });
});
