// src/App.js

import React from "react";
import { Provider } from "react-redux";
import store from "./Config/Redux";
import TodoList from "./Components/Todolist";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className="text-center text-5xl">Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
