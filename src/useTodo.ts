import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./types";

const useTodo = () => {
  const [todoText, setTodoText] = useState("");
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

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return {
    todoText,
    setTodoText,
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};

export default useTodo;
