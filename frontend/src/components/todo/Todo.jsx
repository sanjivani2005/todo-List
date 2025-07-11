import React, { useState, useEffect, useRef } from 'react';
import './Todo.css';

const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [warning, setWarning] = useState('');
  const isAuthenticated = !!localStorage.getItem("authToken");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (task.trim() === '') {
      setWarning('Please enter a task!');
      setTimeout(() => setWarning(''), 2000);
      return;
    }

    setTodos([...todos, { text: task, completed: false }]);
    setTask('');
  };

  const handleToggle = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-container">
      <h2 className="text-center mb-4">To-Do List</h2>

      {!isAuthenticated && (
        <div className="alert alert-warning text-center" role="alert">
          ⚠️ You are not signed in. Your tasks won’t be saved permanently.
        </div>
      )}

      <div className="input-group mb-3">
        <input
          type="text"
          ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control"
          placeholder="Enter a task"
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      {warning && <div className="text-danger mb-3">{warning}</div>}

      {todos.length === 0 ? (
        <p className="text-center text-muted">No tasks added yet.</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? 'completed' : ''
              }`}
            >
              <span
                onClick={() => handleToggle(index)}
                className={`todo-text ${todo.completed ? 'text-decoration-line-through text-success' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
