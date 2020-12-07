import React, { Dispatch } from "react";
import { CounterAction, ICounterAction } from "../App";

export interface ICounterState {
  state: number;
}

export interface ICounterProps {
  counter: ICounterState;
  setCounter: Dispatch<ICounterAction>;
}

export default function Counter({ counter, setCounter }: ICounterProps) {
  return (
    <div className={"counter"}>
      Your counter is { counter.state } now.
      Increase it with <button onClick={() => setCounter({ type: CounterAction.INCREASE })}>button</button> <br />
      Decrease it with <button onClick={() => setCounter({ type: CounterAction.DECREASE })}>button</button> <br />
      Reset it with <button onClick={() => setCounter({ type: CounterAction.RESET })}>button</button> <br />
    </div>
  );
}