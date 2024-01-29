import { configureStore } from "@reduxjs/toolkit";
import fakeSlice from "./slice/fakeSlice";

const testStore = configureStore({
  reducer: {
    fake: fakeSlice.reducer,
  },
});

export default testStore;
