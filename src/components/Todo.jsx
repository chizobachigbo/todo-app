import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircle,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Todo({ text, todo, todos, setTodos }) {
  
  const editingTodo = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            isEditing: !el.isEditing,
          };
        }
        return el;
      })
    );
  };

  // const completeTodo = () => {
  //   setTodos(
  //     todos.map((el) => {
  //       if (el.id === todo.id) {
  //         return {
  //           ...el,
  //           isCompleted: !el.isCompleted,
  //         };
  //       }
  //       return el;
  //     })
  //   );

  const completeTodo = () => {
    setTodos(
      todos.map((el) =>
        el.id === todo.id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <div className="todo-item">
        <div className="todo-toggle" onClick={completeTodo}>
          <FontAwesomeIcon icon={faCircle} className="todo-incomplete" />
          <FontAwesomeIcon
            icon={faCheck}
            className="todo-complete check"
            style={{ display: todo.completed !== true ? "none" : "inline" }}
          />
        </div>
        <p
          className={`todo-string ${todo.completed ? "completed" : ""}`}
          onClick={completeTodo}
        >
          {text}
        </p>
      </div>
      <div className="todo-action">
        <div className="complete-todo action-btn" onClick={completeTodo}>
          <FontAwesomeIcon className="complete-todo icon" icon={faCheck} />
        </div>
        <div className="edit-todo action-btn" onClick={editingTodo}>
          <FontAwesomeIcon className="edit-todo icon" icon={faPenToSquare} />
        </div>
        <div className="trash-can action-btn" onClick={deleteTodo}>
          <FontAwesomeIcon className="trash-todo icon" icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
}
