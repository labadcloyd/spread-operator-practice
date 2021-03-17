import React, { useState } from "react";
import Item from "./item";

function Form() {
  const [items, setitems] = useState([]);
  const [inputValue, setInput] = useState("");
  function changeItem(event) {
    let value = event.target.value;
    setInput(value);
  }

  function addItem(event) {
    event.preventDefault();
    let newItem = inputValue;
    setitems([...items, newItem]);
    setInput("");
  }
  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="name"
          onChange={changeItem}
          value={inputValue}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {items.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Form;
