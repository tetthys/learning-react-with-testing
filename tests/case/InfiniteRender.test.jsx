import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import InfiniteRender from "../../src/case/InfiniteRender";

describe.skip("InfiniteRender", () => {
  it("render", () => {
    const { getByTestId } = render(<InfiniteRender />);
    expect(getByTestId("rendered")).toHaveTextContent("1");
  });
});
