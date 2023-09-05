import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoInput from "./TodoInput";
import { TodoItem } from "./types";

const Todo = () => {
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

  const toggleCompleted = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            {...(todo.completed && {
              "data-completed": "true",
            })}
            onClick={() => toggleCompleted(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
