import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Todo() {
  const { dispatch, searchItem, setSearchItem, searchTodos } =
    useContext(TodoContext);
  const { theme, style } = useContext(ThemeContext);
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState("");

  // add todo lists
  const handleAddTodo = () => {
    if (todoItem) {
      const todo = {
        id: Date.now(),
        task: todoItem,
      };
      dispatch({ type: "ADD_TODO", payload: todo });
      //Clear data from input and error message
      setTodoItem("");
      setError("");
    } else {
      setError("Missing input value!!!");
    }
  };

  return (
    <div className="container">
      <h3>Add Todo List</h3>
      <div
        className="card"
        style={
          theme === "dark" ? style.cardSection.dark : style.cardSection.light
        }
      >
        <div className="todo-box">
          <input
            type="text"
            name="search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            id="search"
            placeholder="Search todo..."
          />
          <div className="add-todo-card">
            <input
              type="text"
              name="add"
              value={todoItem}
              onChange={(e) => setTodoItem(e.target.value)}
              className="add-todo-input"
              id="add"
              placeholder="What is your task today?"
            />
            <button
              className="btn add-btn"
              onClick={handleAddTodo}
              type="button"
            >
              Add
            </button>
          </div>
          {error && <span className="miss-error">{error}</span>}
          {searchTodos &&
            searchTodos.length > 0 &&
            searchTodos.map((todo) => <TodoList key={todo.id} {...todo} />)}
        </div>
      </div>
    </div>
  );
}
// Show todo list
const TodoList = ({ id, task }) => {
  const { dispatch } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  //delete todo list
  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  return (
    <div className="todo-list">
      <div>
        <input type="checkbox" />
        <span>{task}</span>
      </div>
      <div>
        <button
          type="button"
          style={{ background: theme === "dark" && "#111827" }}
          onClick={() => handleDeleteTodo(id)}
          className="delete-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="trash-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
