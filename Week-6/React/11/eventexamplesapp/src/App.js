import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  const [counter, setCounter] = useState(5);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    alert('Hello! Member1');
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = (e) => {
    alert('I was clicked');
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <p>{counter}</p>
      
      <div style={{ marginBottom: '5px' }}>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div style={{ marginBottom: '5px' }}>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div style={{ marginBottom: '5px' }}>
        <button onClick={() => sayWelcome('welcome')}>Say welcome</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={onPress}>Click on me</button>
      </div>
      
      <CurrencyConvertor />
    </div>
  );
}

export default App;
