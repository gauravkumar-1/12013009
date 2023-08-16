import React, { useState } from 'react';
import './App.css';

function App() {
  const [mergedNumbers, setMergedNumbers] = useState('');
  
  const fetchNumbers = async () => {
    try {
      const response = await fetch('http://localhost:8008/numbers?url=http://20.244.56.144/numbers/primes&url=http://20.244.56.144/numbers/fibo&url=http://20.244.56.144/numbers/odd');
      const data = await response.json();
      const mergedNumbersString = data.numbers.join(', ');
      setMergedNumbers(mergedNumbersString);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };
  
  return (
    <div className="App">
      <h1>Number Management Frontend</h1>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      <div>
        <p>Merged Unique Integers: {mergedNumbers}</p>
      </div>
    </div>
  );
}

export default App;
