import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "../Config/Redux/Slice/todoSlice";

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [editableTodoText, setEditableTodoText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodoText.trim() === "") return alert("Your input is Empty!");
    dispatch(
      addTodo({
        id: Date.now(), //Got this hint from Chatgpt!
        text: newTodoText,
      })
    );
    setNewTodoText("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = () => {
    if (editableTodoText.trim() === "") return alert("Your input is Empty!");
    dispatch(
      updateTodo({
        id: editableTodoId,
        text: editableTodoText,
      })
    );
    setEditableTodoId(null);
  };

  const handleEditClick = (id, text) => {
    setEditableTodoId(id);
    setEditableTodoText(text);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new todo..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
      />
      <button
        onClick={handleAddTodo}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Todo
      </button>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between py-2 border-b border-gray-300"
          >
            {editableTodoId === todo.id ? (
              <input
                type="text"
                value={editableTodoText}
                onChange={(e) => setEditableTodoText(e.target.value)}
                className="w-full px-3 py-1 mr-2 border border-gray-300 rounded-md outline-none"
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <div>
              {editableTodoId === todo.id ? (
                <button
                  onClick={handleUpdateTodo}
                  className="px-3 py-1 bg-green-500 text-white rounded-md"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo.id, todo.text)}
                  className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded-md"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
