import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("screen debug", () => {
    render(<App />);
    screen.debug();
  });
});
