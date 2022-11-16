import "./Parent2.css";
import Child2 from "./Child2";
import { useState } from "react";

export default function Parent2() {
  const [state, setState] = useState("");

  const handlerChange = (state) => {
    setState(state);
  };

  return (
    <div className="parentContainer1">
      <p>
        <i>Parent Component</i>
      </p>
      <span>Name is: {state}</span>
      <Child2 onChange={handlerChange} />
    </div>
  );
}
