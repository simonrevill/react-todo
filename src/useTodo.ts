import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./types";

const useTodo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      {
        id: uuid(),
        text: text,
        completed: false,
      },
      ...prevTodos,
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    toggleTodo,
  };
};

export default useTodo;
