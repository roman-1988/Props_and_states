import { useState } from "react";
import "./Parent.css";
import Child from "./Child";

export default function Parent() {
  const [state, setState] = useState("");

  const handlerChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="parentContainer">
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

      <Child state={state} />
    </div>
  );
}
