import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "./robotsSlice";

const store = configureStore({
  reducer: {
    robotsReducer,
  },
});

export default store;