import React, { useContext } from "react";
import { AppContext } from "../App";

export interface IXmasSwitcherProps {
  setXmasState: (payload: boolean) => void;
}

export default function XmasSwitcher({ setXmasState }: IXmasSwitcherProps) {
  const { xmas } = useContext(AppContext)
  return (
    <div className={"xmas-switcher"}>
      Xmas is { xmas ? "active" : "inactive" } now. 
      Switch Xmas state with <button onClick={() => setXmasState(!xmas)}>button</button>
    </div>
  );
}