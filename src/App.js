import "./App.css";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
function App() {
  return (
    <>
      <Header title="My_Todos_List" searchBar={false} />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
