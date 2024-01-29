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

  /**
   * All code that causes a change to a state of component or hook should be used inside 'act'
   *
   * Although it is just a funtion that only delays and does not change any state of component or hook like below
   *
   * await delay(ENSURE_TIMEOUT);
   *
   * It's a bit weird...
   *
   * But just accept it.
   */
  // it("get 2 after some seconds", async () => {
  //   const { result } = renderHook(() => useChangingState());

  //   await delay(ENSURE_TIMEOUT);

  //   expect(result.current.data).toBe(2);
  // });
});
