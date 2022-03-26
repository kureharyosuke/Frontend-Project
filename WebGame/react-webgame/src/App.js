import logo from "./logo.svg";
import "./App.css";
import GuGuDanHook from "./pages/GuGuDan/hooks";
import GuGuDanClass from "./pages/GuGuDan/class";

function App() {
  return (
    <div className="App">
      <h2>Hooks</h2>
      <GuGuDanHook />
      <h2>Class</h2>
      <GuGuDanClass />
    </div>
  );
}

export default App;
