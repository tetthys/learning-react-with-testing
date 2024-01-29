import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useChangingState from "../../src/hook/useChangingState";
import delay from "../utils/delay";

const ENSURE_TIMEOUT = 2000;

describe("useChangingState", () => {
  it("get 1 as soon as rendered", () => {
    const { result } = renderHook(() => useChangingState());

    expect(result.current.data).toBe(1);
  });
  it("get 2 after some seconds", async () => {
    const { result } = renderHook(() => useChangingState());

    await act(async () => {
      await delay(ENSURE_TIMEOUT);
    });

    expect(result.current.data).toBe(2);
  });
});
