import React, { useState } from "react";
import "./App.css";

const generateUid = () => Math.random().toString(36).substr(2,9);

function Todo({ todo, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(todo.id)}>Complete</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  console.log('here');
  
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
      id: generateUid(),
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false, id: generateUid() }];
    setTodos(newTodos);
  };

  const completeTodo = id => {
    const index = todos.findIndex( t => t.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>TO DOs</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;