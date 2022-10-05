import logo from './logo.svg';
import './App.css';
import CardGroup from './Component/CardGroup/CardGroup';

function App() {
  return (
    <div className="App">

      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <CardGroup></CardGroup>

    </div>

  );
}

export default App;
