import logo from './logo.svg';
import './App.css';
import receipt1 from './models/receipt';
import Receipts from './components/Receipts';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Korilla</h1>
      <div>
        <Receipts checks={receipt1} />
        </div>
    </div>
  );
}
export default App