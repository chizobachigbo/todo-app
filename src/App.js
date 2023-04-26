import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(retrieveTodos);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  function retrieveTodos() {
    const previousTodos = JSON.parse(localStorage.getItem("todos"));
    if (previousTodos === null) {
      return [];
    } else {
      return previousTodos;
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <div className="container">
        <div className="todo-wrapper">
          <h2 className="header">Todo</h2>
          <TodoHeader
            input={input}
            setInput={setInput}
            onKeyDownHandler={setInput}
            todos={todos}
            setTodos={setTodos}
          />
          <TodoBody
            setTodos={setTodos}
            todos={todos}
            status={status}
            setStatus={setStatus}
            filteredTodos={filteredTodos}
            setFilteredTodos={setFilteredTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
