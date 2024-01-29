import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import InfiniteRender from "../../src/case/InfiniteRender";

// I triggered infinite render on purpose to see how render works.
// It doesn't end.

describe.skip("InfiniteRender", () => {
  it("render", () => {
    const { getByTestId } = render(<InfiniteRender />);
    expect(getByTestId("rendered")).toHaveTextContent("1");
  });
});
