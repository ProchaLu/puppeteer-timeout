import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const imageUrl =
    text === ''
      ? 'https://api.memegen.link/images/doge.png'
      : `https://api.memegen.link/images//${text}.png`;

  return (
    <div className="App">
      <label>
        Text
        <input
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
        />
      </label>
      <img src={imageUrl} alt="" width={200} height={200} />
    </div>
  );
}

export default App;
