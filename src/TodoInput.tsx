import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

type TodoInputProps = {
  todoText: string;
  setTodoText: Dispatch<SetStateAction<string>>;
  addTodo: (text: string) => void;
};

const TodoInput = ({ todoText, setTodoText, addTodo }: TodoInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      addTodo(todoText);
      setTodoText("");
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
