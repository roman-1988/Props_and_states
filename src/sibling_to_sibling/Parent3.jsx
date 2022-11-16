import Sibling1 from "./Sibling1";
import Sibling2 from "./Sibling2";
import "./Parent3.css";
import { useState } from "react";

export default function Parent3() {
  const [state, setState] = useState("");

  const handlerChange = (state) => {
    setState(state);
  };

  return (
    <div className="parentContainer3">
      <p>
        <i>Parent Component</i>
      </p>

      <Sibling1 onChange={handlerChange} />
      <Sibling2 state={state} />
    </div>
  );
}
