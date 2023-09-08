import { TodoItem } from "./types";

type ItemProps = {
  todo: TodoItem;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const Item = ({ todo, toggleTodo, deleteTodo }: ItemProps) => (
  <li
    key={todo.id}
    className="todo-item"
    data-completed={todo.completed || undefined}
    onClick={() => toggleTodo(todo.id)}
  >
    {todo.text}
    <button
      type="button"
      className="delete-todo"
      onClick={() => deleteTodo(todo.id)}
    >
      Delete
    </button>
  </li>
);

export default Item;
