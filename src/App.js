import Header from "./components/Header";
import Todolist from "./components/Todolist";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Todolist />
    </div>
  );
}
