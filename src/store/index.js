import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userReducer";

export default configureStore({
  reducer: {
    user,
  },
});
