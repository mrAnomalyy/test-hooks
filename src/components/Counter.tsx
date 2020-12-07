import React from "react";

export interface ICounterState {
  state: number;
}

export interface ICounterProps {
  counter: ICounterState;
  setCounter: (payload: ICounterState) => void;
}

export default function Counter({ counter, setCounter }: ICounterProps) {
  return (
    <div className={"counter"}>
      Your counter is { counter.state } now.
      Increase it with <button onClick={() => setCounter({ state: counter.state + 1 })}>button</button>
    </div>
  );
}