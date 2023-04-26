import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TodoHeader({
  input,
  setInput,
  onKeyDownHandler,
  todos,
  setTodos,
}) {
  onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      if (input !== "") {
        setTodos([
          ...todos,
          {
            text: input,
            completed: false,
            isEditing: false,
            id: Math.floor(
              Math.random() * Math.floor(Math.random() * Date.now())
            ),
          },
        ]);
        setInput("");
      }
    }
  };

  const submitTodo = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodos([
        ...todos,
        {
          text: input,
          completed: false,
          isEditing: false,
          id: parseInt(Math.random() * 10),
        },
      ]);
      setInput("");
    }
  };

  return (
    <div className="todo-header">
      <div className="search-box">
        <input
          type="text"
          placeholder="add todo"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={onKeyDownHandler}
          style={{
            borderRadius: todos.length !== 0 ? "5px 0 0 0" : "5px 0 0 5px",
            borderBottom:
              todos.length !== 0 ? "none" : "2px solid var(--primary-color)",
          }}
        ></input>
        <button
          className="btn"
          onClick={submitTodo}
          type="submit"
          style={{
            borderRadius: todos.length !== 0 ? "0 5px 0 0" : "0 5px 5px 0",
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
