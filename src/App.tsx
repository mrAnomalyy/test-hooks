import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Switcher from './components/Switcher';
import TotalClicksCounter from './components/TotalClicksCounter';
import XmasSwitcher from "./components/XmasSwitcher";

export const AppContext = React.createContext({ xmas: false });

function App() {
  const [counter, setCounter] = useState({ state: 0 });
  const [switcher, setSwitcher] = useState({ state: true });
  const [totalClicks, setTotalClicks] = useState(0);
  const [xmas, setXmasState] = useState(false);
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      setTotalClicks((tc) => tc + 1);
    } else {
      didMountRef.current = true
    }
  }, [counter.state, switcher.state, xmas]);
  return (
    <AppContext.Provider value={{ xmas }}>
      <div className="App">
        <Counter counter={counter} setCounter={setCounter} />
        <br />
        <br />
        <Switcher switcher={switcher} setSwitcher={setSwitcher} />
        <br />
        <XmasSwitcher setXmasState={setXmasState} />
        <TotalClicksCounter value={totalClicks} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
