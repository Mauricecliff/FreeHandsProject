import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  console.log("counter component>>>>");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Counter APP</h1>;
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={increaseCounter}>+</button>
        <button>{counter}</button>
        <button onClick={decreaseCounter}>-</button>
      </div>
    </div>
  );
}

export default Counter;
