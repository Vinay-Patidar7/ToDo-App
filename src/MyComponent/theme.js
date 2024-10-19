const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <div>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
};

export default ThemeToggle;
