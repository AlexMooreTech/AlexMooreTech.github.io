import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  function handleClick() {
    console.log(position);
  setPosition({x: Math.random() * 100, y: Math.random() * 100});
  }

  setPosition(position, {
    x: position.x += 0.01,
    y: position.y += 0.1
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          No, We can have anything here! I now understand this webs stuff! Testing to see live changes!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Poorly
        </a>
            <button
      style={{
        position: 'absolute', // Essential for 'top' and 'left' to work
        left: position.x + 'px',
        top: position.y + 'px',
        width: '100px',
        height: '100px',
        backgroundColor: 'grey',
        cursor: 'grab',
      }}
      onClick={handleClick}
    >
      Click me!
    </button>
      </header>
    </div>
  );
}

export default App;
