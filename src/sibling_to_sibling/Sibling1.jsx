import "./Sibling1.css";

export default function Sibling1({ onChange }) {
  const handlerChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="sibling1Container">
      <p>
        <i>Sibling 1 Component</i>
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
    </div>
  );
}
