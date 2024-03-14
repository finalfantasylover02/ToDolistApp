//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { fetchTasks } from './api'; 

import TodoList from "./component/TodoList.jsx";

fetchTasks('finallgirll')
  .then(data => console.log('Tasks:', data))
  .catch(error => console.error('Error fetching tasks:', error));

//render your react application
ReactDOM.render(<TodoList />, document.querySelector("#app"));
