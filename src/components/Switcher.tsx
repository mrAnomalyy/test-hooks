import React from "react";

export interface ISwitcherState {
  state: boolean;
}

export interface ISwitcherProps {
  switcher: ISwitcherState;
  setSwitcher: (payload: ISwitcherState) => void;
}

export default function Switcher({ switcher, setSwitcher }: ISwitcherProps) {
  return (
    <div className={"switcher"}>
      Switch is { switcher.state ? "active" : "inactive" } now. 
      Switch it's state with <button onClick={() => setSwitcher({ state: !switcher.state })}>button</button>
    </div>
  );
}