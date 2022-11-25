import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatesTodo = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatesTodo);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
    setTodo("");
  };

  const handleDelete = (id) => {
    const deltodo = todos.filter((t) => t.id !== id);
    setTodos([...deltodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    console.log(editTodo.todo);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  console.log(todos);
  return (
    <div className="app">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm 
        handleSubmit={handleSubmit} 
        todo={todo} setTodo={setTodo} 
        editId ={editId}/>
        <TodoList
        todos={todos} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;
