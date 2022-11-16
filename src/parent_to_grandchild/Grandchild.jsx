import "./Grandchild.css";

export default function Grandchild({ state }) {
  return (
    <div className="grandchildContainer">
      <p>
        <i>Grandchild Component</i>
      </p>
      <span>Name is: {state}</span>
    </div>
  );
}
