import React, { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import Counter, { ICounterState } from './components/Counter';
import Switcher from './components/Switcher';
import TotalClicksCounter from './components/TotalClicksCounter';
import XmasSwitcher from "./components/XmasSwitcher";

export const AppContext = React.createContext({ xmas: false });

export enum CounterAction {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  RESET = "RESET",
}

export type ICounterAction = {
  type: CounterAction;
};

export interface IAppState {
  counter: ICounterState;
}

const counterReducer = ({ state }: ICounterState, action: ICounterAction): ICounterState => {
  switch (action.type) {
    case CounterAction.INCREASE:
      return { state: state + 1 };
    case CounterAction.DECREASE:
      return { state: state - 1};
    case CounterAction.RESET:
      return { state: 0 };
  }
}

function App() {
  const [counter, setCounter] = useReducer(counterReducer, { state: 0 });
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
