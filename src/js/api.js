// api.js
const API_BASE_URL = 'https://playground.4geeks.com/apis/fake/todos/user/finallgirll';

export const fetchTasks = (finallgirll) => {
  const url = `${API_BASE_URL}${finallgirll}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching tasks:', error);
      throw error; // Rethrow the error for the component to handle
    });
};

export const updateTodoList = (finallgirll, updatedTasks) => {
  const url = `${API_BASE_URL}${finallgirll}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(updatedTasks),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error updating todo list:', error);
    throw error; // Rethrow the error for the component to handle
  });
};

export const createTodoList = (finallgirll) => {
  const url = `${API_BASE_URL}${finallgirll}`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify([]), // Empty array as initial todo list
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error creating todo list:', error);
    throw error; // Rethrow the error for the component to handle
  });
};