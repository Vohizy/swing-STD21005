import logo from './logo.svg';
import './App.css';
import Enter from './componnent/enter';
import SortieOne from './componnent/sortieone';
import { useState } from 'react';
import SortieTwo from './componnent/sortieTwo';

function App() {
  const [graphData, setGraphData] = useState(null);
  return (
    <div className="App">
     <div className='layout-flex-col'>
      <div className='layout-flex-row'>
        <div><Enter setGraphData={setGraphData}/></div>
        <div><SortieOne /></div>
      </div>
      <div> <SortieTwo data={graphData} /></div>
     </div>
    </div>
  );
}

export default App;
