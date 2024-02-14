// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/Slice/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
