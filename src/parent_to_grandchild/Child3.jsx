import Grandchild from "./Grandchild";
import "./Child3.css";

export default function Child3({ state }) {
  return (
    <div className="childContainer8">
      <p>
        <i>Child Component</i>
      </p>
      <Grandchild state={state} />
    </div>
  );
}
