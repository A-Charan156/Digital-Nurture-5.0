import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  let currentComponent;
  if (flag) {
    currentComponent = <ListofPlayers />;
  } else {
    currentComponent = <IndianPlayers />;
  }

  return (
    <div className="App">
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(!flag)} style={{ padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}>
        Change Flag (Current: {flag ? 'true' : 'false'})
      </button>
      <hr />
      
      {currentComponent}
    </div>
  );
}

export default App;
