import React, { useState, useEffect } from 'react';
import { fetchTasks, updateTodoList } from '../api';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTasks()
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = () => {
    if (inputValue.trim() !== '') {
      
      const newTask = { label: inputValue.trim(), done: false };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);

      
      updateTodoList(updatedTasks)
      .then(response => console.log('Task added successfully:', response))
      .catch(error => console.error('Error adding task:', error));

      
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);

    
    updateTodoList(updatedTasks)
      .then(response => console.log('Task deleted successfully:', response))
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">To-Do List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={addTask}>Add Task</button>
        </div>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {task.label} {/* Display task label instead of task itself */}
            <button className="btn btn-danger" onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;