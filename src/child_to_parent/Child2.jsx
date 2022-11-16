import "./Child2.css";

export default function Child2({ onChange }) {
  const handlerChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className="childContainer1">
      <p>
        <i>Child Component</i>
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
