import { ChangeEvent, KeyboardEvent, useState } from "react";

const TodoInput = ({ addTodo }: { addTodo: (text: string) => void }) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      addTodo(todoText);
    }
  };

  return (
    <input
      type="text"
      data-testid="todo-input"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={todoText}
    />
  );
};

export default TodoInput;
