import TodoInput from "./TodoInput";
import useTodo from "./useTodo";

const Todo = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ol>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="todo-item"
            data-completed={todo.completed || undefined}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
