import React from "react";

const about = () => {
  let myStyle = {
    minHeight: "100vh",
    margin: "40px auto",
    marginLeft: "70px",
  };
  return (
    <div className="Container" style={myStyle}>
      <h3>About Us</h3>
      <p>
        Welcome to My Todos List, your simple and intuitive task management tool
        designed to help you stay organized and productive. Whether you have a
        long list of tasks to complete or just a few to-dos to track, this
        application helps you manage your daily tasks efficiently.
      </p>
      <hr />
      <h2>Why My Todos List?</h2>
      <p>
        Our application is built with simplicity in mind. With a user-friendly
        interface and easy navigation, you can:
      </p>

      <ul>
        <li>
          <strong>Add new tasks:</strong> Quickly add tasks with just a title
          and description.
        </li>
        <li>
          <strong>Track your progress:</strong> View your tasks in a clean and
          organized manner.
        </li>
        <li>
          <strong>Delete tasks:</strong> Remove completed or unnecessary tasks
          with ease.
        </li>
        <li>
          <strong>Save tasks:</strong> Tasks are automatically saved to your
          browsers local storage, so they are available the next time you open
          the app.
        </li>
      </ul>
      <h2>Features</h2>
      <ul>
        <li>
          <strong>Dark Mode Toggle:</strong> Switch between light and dark modes
          to suit your preference.
        </li>
        <li>
          <strong>Persistent Storage:</strong> Your tasks are saved in the
          browser’s local storage, ensuring they remain available even after
          closing the app.
        </li>
        <li>
          <strong>Simple & Lightweight:</strong> The app is designed to be
          minimal and easy to use without any unnecessary clutter.
        </li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        At <strong>My Todos List</strong>, we believe task management should be
        simple and accessible to everyone. Our goal is to create a tool that
        helps people manage their daily lives more efficiently, without
        overwhelming them with unnecessary features or complicated interfaces.
      </p>
      <p>
        Thank you for using <strong>My Todos List</strong>! We hope it helps you
        organize your tasks and accomplish more every day.
      </p>
    </div>
  );
};

export default about;
