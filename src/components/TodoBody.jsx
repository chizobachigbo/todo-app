import Todo from "./Todo";
import EditTodo from "./EditTodo";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function TodoBody({
  todos,
  setTodos,
  status,
  setStatus,
  filteredTodos,
  setFilteredTodos,
}) {
  const statusHandler = (e) => {
    setStatus(e.target.id);
  };

  const filteredTodosHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filteredTodosHandler();
  }, [todos, status]);

  return (
    <div
      className="todo-body"
      style={{
        padding: todos.length !== 0 ? 5 : 0,
        border: todos.length !== 0 ? "2px solid var(--primary-color" : "none",
      }}
    >
      <div
        className="dropdown"
        style={{ marginBottom: todos.length === 0 ? "0" : "8px" }}
      >
        <div
          className="sort-todo"
          style={{ display: todos.length === 0 ? "none" : "flex" }}
        >
          <p className="todo-status">{status}</p>
          <FontAwesomeIcon className="dropdown-menu" icon={faChevronDown} />
        </div>
        <div className="dropdown-content" onClick={statusHandler}>
          <p id="All">all</p>
          <p id="Completed">completed</p>
          <p id="Uncompleted">uncompleted</p>
        </div>
      </div>
      <ul>
        {filteredTodos.map((todo) =>
          todo.isEditing ? (
            <EditTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ) : (
            <Todo
              text={todo.text}
              key={todo.id}
              id={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          )
        )}
      </ul>
    </div>
  );
}
