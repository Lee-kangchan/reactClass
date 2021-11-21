import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("lee2");


  const renderMarkup = (test) => {
    return (
      <div>
        <span>{test}</span>
      </div>
    )
  }
  
  return (
    <div className="App">
      Test
      <button onClick={() => {setName('lee22')}}>click</button>
      {name !== 'lee2' ? renderMarkup("ok button") :renderMarkup("test button")}
    </div>
  );
}

export default App;
