import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState({ state: 0 });
  const [switcher, setSwitcher] = useState({ state: true });
  const [totalClicks, setTotalClicks] = useState(0);
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      setTotalClicks((tc) => tc + 1);
    } else {
      didMountRef.current = true
    }
  }, [counter.state, switcher.state]);
  return (
    <div className="App">
      Your counter is { counter.state } now.
      Increase it with <button onClick={() => setCounter({ state: counter.state + 1 })}>button</button>
      <br />
      <br />
      Switch is { switcher.state ? "active" : "inactive" } now. 
      Switch it's state with <button onClick={() => setSwitcher({ state: !switcher.state })}>button</button>
      <br />
      Total clicks on buttons: { totalClicks }      
    </div>
  );
}

export default App;
