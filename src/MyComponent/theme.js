//import "../App.css";
const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
};

export default ThemeToggle;
