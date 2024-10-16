import "./App.css";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import ToggleButton from "./MyComponent/theme";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const onDelete = (todo) => {
    console.log("I' on delete", todo);
    // deleting this way in react doesn't work
    // let index = todos.indexOf(todo)
    // todos.splice(index,1)

    // we will use settodos function

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  // setTodos is a function that will update the todos
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to market to get the job done",
    },
    {
      sno: 2,
      title: "Go to the Gym",
      desc: "You need to go to Gym to get the job done",
    },
    {
      sno: 3,
      title: "Go to the saloon",
      desc: "You need to go to saloon to get the job done",
    },
  ]);
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Header title="My_Todos_List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
