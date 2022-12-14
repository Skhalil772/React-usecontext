import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Features/PostSlice";
import userReducer from "./Features/UserSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
