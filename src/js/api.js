const API_BASE_URL = 'https://playground.4geeks.com/apis/fake/todos/user/';

// Get list of todos for a particular user
export const fetchTasks = (finallgirll) => {
  const url = `${API_BASE_URL}${finallgirll}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching tasks:', error);
      throw error;
    });
};

// Create a new todo list for a particular user
export const createTodoList = (finallgirll) => {
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
export const updateTodoList = (finallgirll, todoList) => {
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