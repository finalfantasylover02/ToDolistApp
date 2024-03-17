import React, { useState, useEffect } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const API_BASE_URL = 'https://playground.4geeks.com/apis/fake/todos/user/';

  const fetchTasks = async (finallgirll) => {
    const url = `${API_BASE_URL}${finallgirll}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  };

  const updateTodoList = async (finallgirll, todoList) => {
    const url = `${API_BASE_URL}${finallgirll}`;
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoList)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating todo list:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchTasks('finallgirll')
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = () => {
    // Check if input value is not empty
    if (inputValue.trim() !== '') {
      const newTask = { label: inputValue.trim(), done: false };
      updateTodoList('finallgirll', [...tasks, newTask])
        .then(response => {
          console.log('Task added successfully:', response);
          setTasks([...tasks, newTask]);
        })
        .catch(error => console.error('Error adding task:', error));

      // Clear the input field after adding the task
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    // Filter out the task at the specified index
    const updatedTasks = tasks.filter((task, i) => i !== index);

    // Update the state with the updated tasks array
    setTasks(updatedTasks);

    updateTodoList('finallgirll', updatedTasks)
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
        {Array.isArray(tasks)&& tasks.map((task, index) => (
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