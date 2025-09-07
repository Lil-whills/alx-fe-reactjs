import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <p style={{ fontSize: "20px", marginBottom: "15px" }}>
        Current Count: <span>{count}</span>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "5px", padding: "8px 12px" }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "5px", padding: "8px 12px" }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: "5px", padding: "8px 12px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
