import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useInfiniteRender from "../../src/hook/useInfiniteRender";

describe("useInfiniteRender", () => {
  it("render", () => {
    const { result } = renderHook(() => useInfiniteRender());
    expect(result.current).toBe(true);
  });
});
