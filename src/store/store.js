import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "./users/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
});

export default store;
