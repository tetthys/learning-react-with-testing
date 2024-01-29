import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useHelperWithoutDeclaration from "../../src/hook/useHelperWithoutDeclaration";
import { Provider } from "react-redux";
import testStore from "../utils/redux/testStore";
import { BrowserRouter } from "react-router-dom";

describe("useHelperWithoutDeclaration", () => {
  const wrapper = ({ children }) => (
    <BrowserRouter>
      <Provider store={testStore}>{children}</Provider>
    </BrowserRouter>
  );

  it("return dispatch", async () => {
    const { result } = renderHook(() => useHelperWithoutDeclaration(), {
      wrapper,
    });

    expect(result.current.dispatch).toBeTruthy();
  });

  // ! 'renderHook' expect the option only named 'wrapper' not a custom name like 'wrapWithProvider'
  //   it("return dispatch", async () => {
  //     const wrapWithProvider = ({ children }) => (
  //       <Provider store={testStore}>{children}</Provider>
  //     );
  //     const { result } = renderHook(() => useHelperWithoutDeclaration(), {
  //       wrapWithProvider,
  //     });

  //     expect(result.current.dispatch).toBeTruthy();
  //   });

  it("return navigate", async () => {
    const { result } = renderHook(() => useHelperWithoutDeclaration(), {
      wrapper,
    });

    expect(result.current.navigate).toBeTruthy();
  });
});
