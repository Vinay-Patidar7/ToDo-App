import "./App.css";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import ToggleButton from "./MyComponent/theme";
//import { addTodo } from "./MyComponent/addTodo";
import AddTodo from "./MyComponent/addTodo";
import React, { useEffect, useState } from "react";
import About from "./about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // add todo function
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) sno = 1;
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
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
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  // setTodos is a function that will update the todos
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Router>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header title="My_Todos_List" searchBar={false} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
