import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("render", () => {
    const { getByText } = render(<App />);
    expect(getByText("App")).toBeTruthy();
  });
});