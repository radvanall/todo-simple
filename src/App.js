import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    text: "",
    id: Date.now(),
    completed: false,
  });

  const handleInputChange = (event) => {
    setTodo({ text: event.target.value, id: Date.now(), completed: false });
  };

  const addNewTodo = () => {
    if (todo.text !== "") {
      setTodos([...todos, todo]);
      setTodo({ text: "", id: Date.now(), completed: false });
    }
  };

  const markCompleted = (id) => {
    const updatedTodos = todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          completed: !el.completed,
        };
      }
      return el;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = () => {
    const filteredTodos = todos.filter((el) => {
      return el.completed === false;
    });
    setTodos(filteredTodos);
  };

  //props-> properties
  return (
    <div className="App">
      {/* <SearchBar filterPostsByUser={filterPostsByUser} />
      <Post posts={posts} /> */}
      <h1>My Todos</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="Add todo..."
          value={todo.text}
          onChange={handleInputChange}
        />
        <button onClick={addNewTodo}>Add Todo</button>
        <button onClick={removeTodo}>Remove Todo</button>
      </form>
      <div>
        <div className="todo_wrapper">
          {todos.map((el) => {
            return (
              <div key={el.id}>
                <input
                  type="checkbox"
                  checked={el.completed}
                  onChange={() => markCompleted(el.id)}
                />
                {el.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
