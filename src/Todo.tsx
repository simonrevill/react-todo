import TodoInput from "./TodoInput";
import useTodo from "./useTodo";

const Todo = () => {
  const { todos, addTodo, toggleTodo } = useTodo();

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-completed={todo.completed || undefined}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
