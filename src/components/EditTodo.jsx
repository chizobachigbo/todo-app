import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function EditTodo({todo, todos,setTodos}) {
  const [value, setValue] = useState(todo.text);

  const submitTodo = (e) => {
    e.preventDefault();
    todo.text = value;
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          if (value !== "") {
            return {
              ...el,
              isEditing: !el.isEditing,
              completed: false,
            };
          }
        }
        return el;
      })
    );
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      todo.text = value;
      setTodos(
        todos.map((el) => {
          if (el.id === todo.id) {
            if (value !== "") {
              return {
                ...el,
                isEditing: !el.isEditing,
                completed: false,
              };
            }
          }
          return el;
        })
      );
    }
  };

  return (
    <div className="todo edit-todo">
      <input
        type="text"
        placeholder="add todo"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={onKeyDownHandler}
      ></input>
      <div className="edit-btn" type="submit" onClick={submitTodo}>
        <FontAwesomeIcon icon={faPlus} className="update-todo" />
      </div>
    </div>
  );
}
