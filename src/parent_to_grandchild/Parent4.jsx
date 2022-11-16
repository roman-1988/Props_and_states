import Child3 from "./Child3";
import "./Parent4.css";
import { useState } from "react";

export default function Parent4() {
  const [state, setState] = useState("");

  const handlerChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="parentContainer9">
      <p>
        <i>Parent Component</i>
      </p>
      <form>
        <div>
          <label>Name</label>&nbsp;
          <input
            type="text"
            placeholder="Enter name"
            onChange={handlerChange}
          />
        </div>
      </form>

      <Child3 state={state} />
    </div>
  );
}
