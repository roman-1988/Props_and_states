import "./Child.css";

export default function Child({ state }) {
  return (
    <div className="childContainer">
      <p>
        <i>Child Component</i>
      </p>
      <span>Name is: {state}</span>
    </div>
  );
}
