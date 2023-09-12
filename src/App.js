import "./App.css";
import Time from "./components/time/time.component";

function App() {
  return (
    <div className="App">
      <Time type="Hours" />
      <Time type="Minutes" />
      <Time type="Seconds" />
    </div>
  );
}

export default App;
