import { describe, it, expect, vi } from "vitest";
import Cookies from "js-cookie";

vi.spyOn(Cookies, "get").mockImplementation((key) => {
  if (key === "token") {
    return "token";
  }
});

describe("js-cookies", () => {
  it("get token return token", () => {
    expect(Cookies.get("token")).toBe("token");
  });
});
