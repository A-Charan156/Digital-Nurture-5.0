import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    // Assuming exchange rate of 80 based on the screenshot output (80 -> 6400)
    const converted = amount * 80;
    alert(`Converting to ${currency} Amount is ${converted}`);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'inline-block', width: '80px' }}>Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          style={{ width: '170px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'inline-block', width: '80px', verticalAlign: 'top' }}>Currency:</label>
        <textarea 
          value={currency} 
          onChange={(e) => setCurrency(e.target.value)}
          rows={2}
          style={{ width: '170px', verticalAlign: 'top' }}
        />
      </div>
      
      <div style={{ marginLeft: '80px' }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
