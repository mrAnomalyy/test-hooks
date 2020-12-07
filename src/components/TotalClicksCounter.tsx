import React from "react";

export default function TotalClicksCounter({ value }: { value: number }) {
  return (
    <div className={"total-clicks"}>
      Total clicks on buttons: { value }
    </div>
  )
}