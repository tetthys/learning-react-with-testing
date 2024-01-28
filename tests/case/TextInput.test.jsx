import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TextInput from "../../src/case/TextInput";

// motivated by question from
// https://stackoverflow.com/questions/77895595/how-to-test-an-input-that-stores-updates-the-value-in-react-state

describe("TextInput", () => {
  it("work", () => {
    let inputValueOnFirstRender = undefined;
    let isCallbackCalled = false;

    const inputValue = 0;
    const setInputValue = () => {
      isCallbackCalled = true;
    };

    const { getByRole } = render(
      <TextInput inputValue={inputValue} setInputValue={setInputValue} />
    );

    inputValueOnFirstRender = getByRole("textbox").value;

    fireEvent.change(getByRole("textbox"), { target: { value: "1" } });

    expect(inputValueOnFirstRender).toBe("0");
    expect(isCallbackCalled).toBe(true);
  });
});
