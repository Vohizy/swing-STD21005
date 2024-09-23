import logo from './logo.svg';
import './App.css';
import Enter from './componnent/enter';
import SortieOne from './componnent/sortieone';

function App() {
  return (
    <div className="App">
     <div>
      <div className='flex flex-col'>
        <div><Enter /></div>
        <div><SortieOne /></div>
      </div>
      <div></div>
     </div>
    </div>
  );
}

export default App;
