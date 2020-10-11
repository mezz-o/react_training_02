import React, { useState } from 'react';
import './App.css';

function App() {

const [count, setCount] = useState(0)


  return (
<div>
  <h1>Vous avez cliqué {count} fois</h1>
  <button onClick = {() => setCount(count + 1)}>Click</button> 
  <button onClick = {() => setCount(count - count)}>Reset</button> 

</div>
      
  )
}

export default App;
