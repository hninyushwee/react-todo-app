import React, { createContext, useReducer, useState, useMemo } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };
  const [todosList, dispatch] = useReducer(reducer, []);
  const [searchItem, setSearchItem] = useState("");

  // Filter for search
  const searchTodos = useMemo(() => {
    if (!searchItem) {
        //if search inputbox is empty, return original array
      return todosList;
    } else {
      return todosList.filter((todo) =>
        todo.task.toLowerCase().includes(searchItem.toLowerCase())
      );
    }
  }, [searchItem, todosList]);

  const value = {
    dispatch,
    searchItem,
    setSearchItem,
    searchTodos,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
