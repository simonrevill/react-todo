import TodoInput from "./TodoInput";
import Item from "./Item";
import useTodo from "./useTodo";

const Todo = () => {
  const { todoText, setTodoText, todos, addTodo, toggleTodo, deleteTodo } =
    useTodo();

  return (
    <>
      <TodoInput
        todoText={todoText}
        setTodoText={setTodoText}
        addTodo={addTodo}
      />
      <ol>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ol>
    </>
  );
};

export default Todo;
