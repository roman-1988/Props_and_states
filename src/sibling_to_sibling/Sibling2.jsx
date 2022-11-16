import "./Sibling2.css";

export default function Sibling2({ state }) {
  return (
    <div className="sibling2Container">
      <p>
        <i>Sibling 2 Component</i>
      </p>
      <span>Name is: {state}</span>
    </div>
  );
}
