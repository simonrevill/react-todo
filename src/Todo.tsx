import { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const clearInput = () => setTodoText("");

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      {
        id: uuid(),
        text: text,
      },
      ...prevTodos,
    ]);

    clearInput();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      addTodo(todoText);
    }
  };

  return (
    <div>
      <input
        type="text"
        data-testid="todo-input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={todoText}
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
