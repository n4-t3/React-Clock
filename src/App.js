import './App.css';
import Time from './components/time/time.component';

function App() {
  return (
    <div className="App">
      <Time id='hour' type="Hours"/>
      <Time id='min' type="Minutes"/>
      <Time id='sec' type="Seconds"/>
    </div>
  );
}

export default App;
