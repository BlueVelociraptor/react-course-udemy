import { describe, test, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { act } from "react";

describe("Testing useCounter", () => {
  const initialCounterValue = 10;

  test("Should initialize counterValue with the initial value provided", () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: initialCounterValue }),
    );

    expect(result.current.counterValue).toBe(initialCounterValue);
  });

  test("Should increment counterValue when handleAdd function is called", () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: initialCounterValue }),
    );

    act(() => result.current.handleAdd());

    expect(result.current.counterValue).toBe(initialCounterValue + 1);
  });

  test("Should decrement counterValue when handleSubtract function is called", () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: initialCounterValue }),
    );

    act(() => result.current.handleSubtract());

    expect(result.current.counterValue).toBe(initialCounterValue - 1);
  });

  test("Should reset counterValue to initial value when handleReset function is called", () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: initialCounterValue }),
    );

    act(() => result.current.handleSubtract());
    act(() => result.current.handleReset());

    expect(result.current.counterValue).toBe(initialCounterValue);
  });
});
