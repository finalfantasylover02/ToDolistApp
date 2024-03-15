import React, { useState, useEffect } from 'react';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const API_BASE_URL = 'https://playground.4geeks.com/apis/fake/todos/user/';
// Get list of todos for a particular user
  
  const fetchTasks = (finallgirll) => {
  const url = `${API_BASE_URL}${finallgirll}`;
  return fetch(url)
    .then(response => response.json())
    .then( (newTask)=>setTasks(newTask)) 
    .catch(error => {
      console.error('Error fetching tasks:', error);
      throw error;
    });
};

// Create a new todo list for a particular user
const createTodoList = (finallgirll) => {
  const url = `${API_BASE_URL}${finallgirll}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([])
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error creating todo list:', error);
      throw error;
    });
};

// Update the entire todo list for a particular user
const updateTodoList = (finallgirll, todoList) => {
  const url = `${API_BASE_URL}${finallgirll}`;
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todoList)
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error updating todo list:', error);
      throw error;
    });
};
  useEffect(() => {
    // Define and call fetchTasks function from api.js
    fetchTasks('finallgirll')
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);
    
// place function here useEffect and function in api.js / .then response

  const addTask = () => {
    //PUT method, fetch from url, put the response into task, get the resposne of the feth inside the tasks array,setTask(newTask)
    if (inputValue.trim() !== '') {
      
      const newTask = [...tasks, {label:inputValue, done: false} ];
      fetch 
      .then(response => console.log('Task added successfully:', response))
      .catch(error => console.error('Error adding task:', error));
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);

      
      updateTodoList(updatedTasks)
      .

      
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
        {Array.isArray()&& tasks.map((task, index) => (
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