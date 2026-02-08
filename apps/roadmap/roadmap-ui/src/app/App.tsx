import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-fit m-0 p-0">
      <div>
        <a href="https://vite.dev" target="_blank">
          <h6>Vite logo</h6>
        </a>
        <a href="https://react.dev" target="_blank">
          <h6>Vite logo</h6>
        </a>
      </div>
      <h1>Roadmap UI</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
