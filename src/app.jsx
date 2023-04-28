import React, { useState } from "react";

// usestate returns two values a value and a function here we name value = count and function = setcount

function App() {
  const [count, setCount] = useState(0); // destructuring

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
