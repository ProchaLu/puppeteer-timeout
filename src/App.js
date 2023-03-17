import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('test');

  return (
    <div className="App">
      <label>
        Text
        <input
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
        />
      </label>
      <img
        src={`https://api.memegen.link/images//${text}.png`}
        alt=""
        width={200}
        height={200}
      />
    </div>
  );
}

export default App;
